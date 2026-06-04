<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/40 dark:bg-surface-900/40 p-8 rounded-[2rem] border border-white dark:border-surface-800 backdrop-blur-md shadow-2xl shadow-surface-200/20">
      <div class="flex items-center gap-5">
        <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
          <i class="pi pi-calendar-plus text-2xl"></i>
        </div>
        <div class="space-y-1">
          <h1 class="text-3xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ $t('menu.leaveRequest') }}
          </h1>
          <p class="text-sm text-surface-500 dark:text-surface-400 font-medium">
            {{ $t('leaveRequest.desc') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content Area split into List and Form -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Leave Requests List (Left Column) -->
      <div class="lg:col-span-8 bg-white dark:bg-surface-900 p-8 rounded-[2.5rem] border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 dark:shadow-none space-y-6">
        <div class="border-b border-surface-100 dark:border-surface-800 pb-6">
          <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 tracking-tight">{{ $t('leaveRequest.myList') }}</h3>
          <p class="text-xs text-surface-400 font-semibold mt-1">{{ $t('leaveRequest.myListDesc') }}</p>
        </div>

        <BaseDataTable
          :columns="columns"
          :fetchApi="fetchRequestsWrapper"
          :isReload="isReload"
          :emptyText="$t('leaveRequest.noMyRequest') || 'Không tìm thấy yêu cầu nghỉ phép nào'"
          scrollHeight="50vh"
        >
          <template #body="{ column, data, index }">
            <!-- STT -->
            <template v-if="column.key === 'stt'">
              <div class="cursor-pointer font-mono font-bold text-surface-400 text-xs w-full py-2" @click="showDetailDialog(data)">
                {{ String(index + 1).padStart(2, '0') }}
              </div>
            </template>

            <!-- Loại nghỉ -->
            <template v-else-if="column.key === 'leave_type'">
              <div class="cursor-pointer flex flex-col w-full py-2" @click="showDetailDialog(data)">
                <span class="font-bold text-surface-800 dark:text-surface-200 tracking-tight text-xs">
                  {{ getLeaveTypeLabel(data.leave_type) }}
                </span>
                <span class="text-[9px] font-black uppercase tracking-widest text-primary font-mono mt-0.5">{{ data.leave_type }}</span>
              </div>
            </template>

            <!-- Thời hạn -->
            <template v-else-if="column.key === 'duration'">
              <div class="cursor-pointer flex flex-col gap-0.5 text-xs text-surface-700 dark:text-surface-300 font-semibold font-mono w-full py-2" @click="showDetailDialog(data)">
                <div>{{ formatDate(data.start_date) }} ~ {{ formatDate(data.end_date) }}</div>
                <div class="text-[10px] text-primary font-black">({{ getLeaveDaysCount(data.start_date, data.end_date) }} {{ $t('leaveRequest.days') }})</div>
              </div>
            </template>

            <!-- Lý do -->
            <template v-else-if="column.key === 'reason'">
              <div class="cursor-pointer text-xs font-semibold text-surface-500 dark:text-surface-400 max-w-[200px] truncate w-full py-2" :title="data.reason" @click="showDetailDialog(data)">
                {{ data.reason || $t('leaveRequest.noReason') }}
              </div>
            </template>

            <!-- Trạng thái -->
            <template v-else-if="column.key === 'status'">
              <div class="cursor-pointer flex items-center justify-center w-full py-2" @click="showDetailDialog(data)">
                <span
                  class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
                  :class="[
                    data.status === 'APPROVED' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                    data.status === 'PENDING' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' :
                    'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                  ]"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full mr-2"
                    :class="[
                      data.status === 'APPROVED' ? 'bg-emerald-500' :
                      data.status === 'PENDING' ? 'bg-amber-500' :
                      'bg-rose-500'
                    ]"
                  ></span>
                  {{ getStatusLabel(data.status) }}
                </span>
              </div>
            </template>
          </template>
        </BaseDataTable>
      </div>

      <!-- Registration Form (Right Column) -->
      <div class="lg:col-span-4 bg-white dark:bg-surface-900 p-8 rounded-[2.5rem] border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 dark:shadow-none space-y-6 flex flex-col justify-between">
        <div class="space-y-6">
          <div class="border-b border-surface-100 dark:border-surface-800 pb-4">
            <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 tracking-tight">{{ $t('leaveRequest.pendingTitle') }}</h3>
            <p class="text-xs text-surface-400 font-semibold mt-1">{{ $t('leaveRequest.createDesc') }}</p>
          </div>

          <div class="space-y-4">
            <AppInputField :label="$t('leaveRequest.type')" :isRequired="true" :error="formErrors.leave_type">
              <Select
                v-model="form.leave_type"
                :options="leaveTypeOptions"
                optionLabel="label"
                optionValue="value"
                :placeholder="$t('leaveRequest.type')"
                class="w-full !rounded-xl"
                :invalid="!!formErrors.leave_type"
                @change="onValidate('leave_type')"
              />
            </AppInputField>

            <AppInputField :label="$t('leaveRequest.session')" :isRequired="true" :error="formErrors.leave_session">
              <Select
                v-model="form.leave_session"
                :options="sessionOptions"
                optionLabel="label"
                optionValue="value"
                :placeholder="$t('leaveRequest.session')"
                class="w-full !rounded-xl"
                :invalid="!!formErrors.leave_session"
                @change="onValidate('leave_session')"
              />
            </AppInputField>

            <div class="grid grid-cols-2 gap-4">
              <AppInputField :label="$t('leaveRequest.startDate')" :isRequired="true" :error="formErrors.start_date">
                <DatePicker
                  v-model="form.start_date"
                  dateFormat="dd/mm/yy"
                  :placeholder="$t('leaveRequest.startDate')"
                  class="w-full !rounded-xl"
                  :invalid="!!formErrors.start_date"
                  @date-select="onValidate('start_date')"
                />
              </AppInputField>

              <AppInputField :label="$t('leaveRequest.endDate')" :isRequired="true" :error="formErrors.end_date">
                <DatePicker
                  v-model="form.end_date"
                  dateFormat="dd/mm/yy"
                  :placeholder="$t('leaveRequest.endDate')"
                  class="w-full !rounded-xl"
                  :invalid="!!formErrors.end_date"
                  @date-select="onValidate('end_date')"
                />
              </AppInputField>
            </div>

            <AppInputField :label="$t('leaveRequest.reason')" :isRequired="true" :error="formErrors.reason">
              <Textarea
                v-model="form.reason"
                rows="4"
                :placeholder="$t('leaveRequest.reasonPlaceholder')"
                class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                :invalid="!!formErrors.reason"
                @change="onValidate('reason')"
              />
            </AppInputField>
          </div>
        </div>

        <div class="pt-6">
          <Button
            :label="$t('leaveRequest.submit')"
            icon="pi pi-send"
            severity="primary"
            class="w-full !rounded-xl !py-3.5 !shadow-lg !shadow-primary/25 !font-bold transition-all hover:scale-[1.02]"
            :loading="submitting"
            @click="handleSubmit"
          />
        </div>
      </div>
    </div>

    <!-- Detail Dialog -->
    <Dialog
      v-model:visible="displayDetailDialog"
      modal
      :header="$t('leaveRequest.detailTitle')"
      :style="{ width: '32rem' }"
      class="!rounded-[2rem] overflow-hidden"
    >
      <div v-if="selectedRequest" class="space-y-6 p-2">
        <div class="flex items-center justify-between border-b border-surface-100 dark:border-surface-800 pb-4">
          <div class="flex flex-col">
            <span class="text-xs font-black uppercase tracking-wider text-surface-400">{{ $t('leaveRequest.code') }}</span>
            <span class="font-bold font-mono text-surface-800 dark:text-surface-200">#LR-{{ selectedRequest.id }}</span>
          </div>
          <span
            class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
            :class="[
              selectedRequest.status === 'APPROVED' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
              selectedRequest.status === 'PENDING' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' :
              'bg-rose-500/10 text-rose-600 dark:text-rose-400'
            ]"
          >
            {{ getStatusLabel(selectedRequest.status) }}
          </span>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="flex flex-col bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl">
            <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('leaveRequest.type') }}</span>
            <span class="font-bold text-surface-800 dark:text-surface-200 mt-1">
              {{ getLeaveTypeLabel(selectedRequest.leave_type) }}
            </span>
          </div>
          <div class="flex flex-col bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl">
            <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('leaveRequest.session') }}</span>
            <span class="font-bold mt-1" :class="[
              selectedRequest.leave_session === 'ALL' ? 'text-primary' :
              selectedRequest.leave_session === 'MORNING' ? 'text-amber-500' : 'text-sky-500'
            ]">
              {{ selectedRequest.leave_session === 'ALL' ? $t('leaveRequest.allDay') :
                 selectedRequest.leave_session === 'MORNING' ? $t('leaveRequest.morning') : $t('leaveRequest.afternoon') }}
            </span>
          </div>
          <div class="flex flex-col bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl">
            <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('leaveRequest.totalDays') }}</span>
            <span class="font-bold text-surface-800 dark:text-surface-200 mt-1">
              {{ getLeaveDaysCount(selectedRequest.start_date, selectedRequest.end_date) }} {{ $t('leaveRequest.days') }}
            </span>
          </div>
        </div>

        <div class="flex flex-col bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl">
          <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('leaveRequest.period') }}</span>
          <span class="font-bold text-surface-800 dark:text-surface-200 mt-1 font-mono">
            {{ formatDate(selectedRequest.start_date) }} ~ {{ formatDate(selectedRequest.end_date) }}
          </span>
        </div>

        <div class="flex flex-col bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl">
          <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('leaveRequest.reason') }}</span>
          <span class="font-semibold text-surface-700 dark:text-surface-300 mt-1 whitespace-pre-line leading-relaxed text-sm">
            {{ selectedRequest.reason || $t('leaveRequest.noReason') }}
          </span>
        </div>

        <div v-if="selectedRequest.status !== 'PENDING'" class="flex flex-col bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl border border-dashed border-surface-200 dark:border-surface-800">
          <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('leaveRequest.approverFeedback') }}</span>
          <span class="font-semibold text-surface-700 dark:text-surface-300 mt-1 whitespace-pre-line leading-relaxed text-sm italic">
            {{ selectedRequest.approver_note || $t('leaveRequest.noFeedback') }}
          </span>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import BaseDataTable from '~/components/common/BaseDataTable.vue';
import { CREATE_LEAVE_REQUEST, GET_MY_LEAVE_REQUESTS } from '~/apis/timesheet';
import { showMessage } from "~/utils/global";
import { validateOnAllField, validateOnField } from '~/utils/validate';

const { t } = useI18n();

const loading = ref(false);
const submitting = ref(false);
const requests = ref<any[]>([]);
const isReload = ref(false);

const reloadTable = () => {
  isReload.value = !isReload.value;
};

const columns = computed(() => [
  { key: 'stt', label: t('leaveRequest.stt') || 'STT', minWidth: '60px' },
  { key: 'leave_type', label: t('leaveRequest.type') || 'Loại nghỉ', minWidth: '130px' },
  { key: 'duration', label: t('leaveRequest.timeRange') || 'Thời hạn', minWidth: '180px' },
  { key: 'reason', label: t('leaveRequest.reason') || 'Lý do', minWidth: '200px' },
  { key: 'status', label: t('leaveRequest.status') || 'Trạng thái', minWidth: '135px' }
]);

const fetchRequestsWrapper = (payload: { query: string, successCallback: Function, errorCallback: Function }) => {
  const params = Object.fromEntries(new URLSearchParams(payload.query));
  
  return GET_MY_LEAVE_REQUESTS(
    (res: any) => {
      const rawList = res.data?.data || [];
      requests.value = [...rawList];
      
      // Sort by newest first
      rawList.sort((a: any, b: any) => b.created_at.localeCompare(a.created_at));
      
      const page = parseInt(params.page || '1');
      const limit = parseInt(params.limit || '10');
      const startIndex = (page - 1) * limit;
      const paginatedData = rawList.slice(startIndex, startIndex + limit);
      
      const mockResponse = {
        data: {
          data: {
            data: paginatedData,
            total: rawList.length
          }
        }
      };
      
      payload.successCallback(mockResponse);
    },
    payload.errorCallback
  );
};

const form = ref({
  leave_type: 'ANNUAL',
  leave_session: 'ALL',
  start_date: null as Date | null,
  end_date: null as Date | null,
  reason: ''
});

// Form error fields reactive object
const formErrors = ref<any>({
  leave_type: '',
  leave_session: '',
  start_date: '',
  end_date: '',
  reason: '',
});

const FIELD_VALIDATIONS = {
  leave_type: { transitionKey: "leaveRequest.type", types: ["require"], errorKey: "leave_type" },
  leave_session: { transitionKey: "leaveRequest.session", types: ["require"], errorKey: "leave_session" },
  start_date: { transitionKey: "leaveRequest.startDate", types: ["require"], errorKey: "start_date" },
  end_date: { transitionKey: "leaveRequest.endDate", types: ["require"], errorKey: "end_date" },
  reason: { transitionKey: "leaveRequest.reason", types: ["require"], errorKey: "reason" },
};

const onValidate = (field: string) => {
  validateOnField(field, form.value, formErrors.value, FIELD_VALIDATIONS, t);
};

const displayDetailDialog = ref(false);
const selectedRequest = ref<any>(null);

const leaveTypeOptions = computed(() => [
  { label: t('leaveRequest.typeAnnual'), value: 'ANNUAL' },
  { label: t('leaveRequest.typeSick'), value: 'SICK' },
  { label: t('leaveRequest.typeSpecial'), value: 'SPECIAL' },
  { label: t('leaveRequest.typeUnpaid'), value: 'UNPAID' }
]);

const sessionOptions = computed(() => [
  { label: t('leaveRequest.allDay'), value: 'ALL' },
  { label: t('leaveRequest.morningSession'), value: 'MORNING' },
  { label: t('leaveRequest.afternoonSession'), value: 'AFTERNOON' }
]);

const getLeaveTypeLabel = (type: string) => {
  switch (type) {
    case 'ANNUAL': return t('leaveRequest.typeAnnual');
    case 'SICK': return t('leaveRequest.typeSick');
    case 'SPECIAL': return t('leaveRequest.typeSpecial');
    case 'UNPAID': return t('leaveRequest.typeUnpaid');
    default: return type;
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'PENDING': return t('leaveRequest.tabPending');
    case 'APPROVED': return t('leaveRequest.tabApproved');
    case 'REJECTED': return t('leaveRequest.tabRejected');
    default: return status;
  }
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${d}/${m}/${y}`;
};

const getLeaveDaysCount = (startStr: string, endStr: string) => {
  if (!startStr || !endStr) return 0;
  const start = new Date(startStr);
  const end = new Date(endStr);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
};

const handleSubmit = () => {
  // Clear old errors
  Object.keys(formErrors.value).forEach(k => formErrors.value[k] = '');

  const isValid = validateOnAllField(form.value, formErrors.value, FIELD_VALIDATIONS, t);
  if (!isValid) {
    showMessage("error", t('text.error'), t('text.errorInput'));
    return;
  }

  // Format dates to YYYY-MM-DD
  const formatDateForApi = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  submitting.value = true;
  CREATE_LEAVE_REQUEST(
    {
      leave_type: form.value.leave_type,
      leave_session: form.value.leave_session || 'ALL',
      start_date: formatDateForApi(form.value.start_date!),
      end_date: formatDateForApi(form.value.end_date!),
      reason: form.value.reason
    },
    (res: any) => {
      showMessage("success", t('leaveRequest.submitSuccess'), t('leaveRequest.submitSuccessDesc'));
      form.value = {
        leave_type: 'ANNUAL',
        leave_session: 'ALL',
        start_date: null,
        end_date: null,
        reason: ''
      };
      submitting.value = false;
      reloadTable();
    },
    (err: any) => {
      submitting.value = false;
    }
  );
};

const showDetailDialog = (item: any) => {
  selectedRequest.value = item;
  displayDetailDialog.value = true;
};
</script>

<style scoped>
</style>
