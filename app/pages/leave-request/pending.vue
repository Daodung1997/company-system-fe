<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <!-- Access Denied Card (If not manager/admin) -->
    <div v-if="!isManagerOrAdmin && !checkingAccess" class="bg-white dark:bg-surface-900 p-12 rounded-xl border border-surface-200 dark:border-surface-700  shadow-md flex flex-col items-center justify-center text-center space-y-6">
      <div class="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shadow-inner">
        <i class="pi pi-lock text-4xl"></i>
      </div>
      <div class="space-y-2">
        <h2 class="text-2xl font-black text-surface-900 dark:text-surface-0 tracking-tight">{{ $t('leaveRequest.accessDenied') }}</h2>
        <p class="text-sm text-surface-500 dark:text-surface-400 max-w-md">
          {{ $t('leaveRequest.accessDeniedDesc') }}
        </p>
      </div>
      <Button :label="$t('leaveRequest.backToHome')" icon="pi pi-home" class="!rounded-xl" @click="goHome" />
    </div>

    <!-- Manager Panel -->
    <template v-else-if="isManagerOrAdmin">
      <!-- Header Section -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700  shadow-md">
        <div class="flex items-center gap-5">
          <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
            <i class="pi pi-calendar-times text-2xl"></i>
          </div>
          <div class="space-y-1">
            <h1 class="text-3xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
              {{ $t('menu.leaveRequestPending') }}
            </h1>
            <p class="text-sm text-surface-500 dark:text-surface-400 font-medium">
              {{ $t('leaveRequest.panelDesc') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Card Wrapper bọc ngoài cho Filter và Table -->
      <div class="bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm space-y-6">
        <!-- Status Filter Tabs -->
        <div class="flex items-center gap-2 sm:gap-3 overflow-x-auto whitespace-nowrap pb-4 border-b border-surface-200 dark:border-surface-800">
          <button
            v-for="tab in statusTabs"
            :key="tab.value"
            class="px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 border cursor-pointer shrink-0"
            :class="[
              activeStatusFilter === tab.value
                ? tab.activeClass
                : 'bg-white dark:bg-surface-950 border-surface-200 dark:border-surface-800 text-surface-500 hover:border-surface-300 dark:hover:border-surface-700'
            ]"
            @click="activeStatusFilter = tab.value"
          >
            <i :class="tab.icon" class="mr-1.5"></i>
            {{ tab.label }}
            <span class="ml-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono"
              :class="activeStatusFilter === tab.value ? 'bg-white/25' : 'bg-surface-100 dark:bg-surface-800'"
            >
              {{ getCountByStatus(tab.value) }}
            </span>
          </button>
        </div>

        <!-- Search & Filters Panel (Sub-card) -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface-50 dark:bg-surface-950 p-5 rounded-xl border border-surface-200 dark:border-surface-800">
          <div class="flex flex-wrap items-center gap-4 flex-1">
            <!-- Search Employee -->
            <div class="relative w-full sm:w-64">
              <i class="pi pi-search absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-400"></i>
              <InputText
                v-model="tableFilters.q"
                :placeholder="$t('leaveRequest.searchEmployeePlaceholder')"
                class="w-full pl-10 !rounded-xl"
              />
            </div>

            <!-- Leave Type Select -->
            <Select
              v-model="tableFilters.leave_type"
              :options="leaveTypeOptions"
              optionLabel="label"
              optionValue="value"
              :placeholder="$t('leaveRequest.typeSelect')"
              class="w-full sm:w-48 !rounded-xl"
              showClear
            />

            <!-- Time Date Pickers -->
            <div class="flex items-center gap-2 w-full sm:w-auto">
              <DatePicker
                v-model="tableFilters.start_date"
                dateFormat="dd/mm/yy"
                :placeholder="$t('timesheet.fromDate')"
                class="w-full sm:w-36 !rounded-xl"
                showClear
              />
              <span class="text-surface-400 font-bold">~</span>
              <DatePicker
                v-model="tableFilters.end_date"
                dateFormat="dd/mm/yy"
                :placeholder="$t('timesheet.toDate')"
                class="w-full sm:w-36 !rounded-xl"
                showClear
              />
            </div>
          </div>

          <!-- Reset Button -->
          <Button
            icon="pi pi-refresh"
            severity="secondary"
            outlined
            class="!rounded-xl !w-11 !h-11 shrink-0"
            @click="resetFilters"
          />
        </div>

      <!-- Modern Data Table -->
      <BaseDataTable
        :columns="columns"
        :fetchApi="fetchPendingRequestsWrapper"
        :filters="tableFilters"
        :isReload="isReload"
        :emptyText="$t('leaveRequest.noRequest')"
        scrollHeight="58vh"
      >
        <template #body="{ column, data, index }">
          <!-- STT -->
          <template v-if="column.key === 'stt'">
            <span class="font-mono font-bold text-surface-400 text-xs">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </template>

          <!-- Nhân viên -->
          <template v-else-if="column.key === 'employee'">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                {{ getInitials(data.employee?.full_name) }}
              </div>
              <div class="flex flex-col">
                <span class="font-bold text-surface-900 dark:text-surface-0 tracking-tight text-sm">
                  {{ data.employee?.full_name || 'N/A' }}
                </span>
                <span class="text-[9px] font-black uppercase tracking-widest text-surface-400 font-mono mt-0.5">
                  {{ data.employee?.code || '' }}
                </span>
              </div>
            </div>
          </template>

          <!-- Loại nghỉ -->
          <template v-else-if="column.key === 'leave_type'">
            <div class="flex flex-col">
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ getLeaveTypeLabel(data.leave_type) }}
              </span>
              <span class="text-[9px] font-black uppercase mt-0.5" :class="[
                data.leave_session === 'ALL' ? 'text-primary' :
                data.leave_session === 'MORNING' ? 'text-amber-500' : 'text-sky-500'
              ]">
                {{ data.leave_session === 'ALL' ? $t('leaveRequest.allDay') :
                   data.leave_session === 'MORNING' ? $t('leaveRequest.morning') : $t('leaveRequest.afternoon') }}
              </span>
            </div>
          </template>

          <!-- Thời gian -->
          <template v-else-if="column.key === 'duration'">
            <div class="flex flex-col gap-0.5 text-xs text-surface-700 dark:text-surface-300 font-semibold font-mono">
              <div>{{ formatDate(data.start_date) }} ~ {{ formatDate(data.end_date) }}</div>
              <div class="text-[10px] text-primary font-black">({{ getLeaveDaysCount(data.start_date, data.end_date) }} {{ $t('leaveRequest.days') }})</div>
            </div>
          </template>

          <!-- Lý do -->
          <template v-else-if="column.key === 'reason'">
            <div class="flex items-center gap-1.5 text-xs font-semibold text-surface-500 dark:text-surface-400 max-w-[220px] truncate" :title="data.reason">
              <i v-if="data.attachment_url" class="pi pi-paperclip text-primary text-[10px]" :title="$t('leaveRequest.hasAttachment')"></i>
              <span>{{ data.reason || $t('leaveRequest.noReason') }}</span>
            </div>
          </template>

          <!-- Trạng thái -->
          <template v-else-if="column.key === 'status'">
            <div class="flex flex-col items-center gap-1.5">
              <span
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
                :class="getStatusBadgeClass(data.status)"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full"
                  :class="getStatusDotClass(data.status)"
                ></span>
                {{ getStatusLabel(data.status) }}
              </span>

              <!-- Approver Info (only shown if processed) -->
              <template v-if="data.status !== 'PENDING'">
                <div class="flex flex-col items-center text-[10px] text-surface-400 leading-tight mt-0.5">
                  <span class="font-semibold">
                    <i class="pi pi-user text-[9px] mr-0.5"></i>
                    {{ data.approver?.full_name || $t('leaveRequest.system') }}
                  </span>
                  <span class="font-mono text-[9px]">
                    {{ formatDateTime(data.approved_at) }}
                  </span>
                </div>
                <div v-if="data.approver_note" class="text-[10px] text-surface-400 italic max-w-[150px] truncate" :title="data.approver_note">
                  "{{ data.approver_note }}"
                </div>
              </template>
            </div>
          </template>

          <!-- Thao tác -->
          <template v-else-if="column.key === 'actions'">
            <!-- Only show Approve/Reject buttons for PENDING requests -->
            <div v-if="data.status === 'PENDING'" class="flex items-center gap-2 justify-end">
              <Button
                :label="$t('leaveRequest.tabApproved')"
                icon="pi pi-check"
                severity="success"
                class="!rounded-xl !py-1.5 !px-3.5 !text-xs !font-bold transition-all hover:scale-105"
                @click="openProcessDialog(data, 'APPROVED')"
              />
              <Button
                :label="$t('leaveRequest.confirmReject')"
                icon="pi pi-times"
                severity="danger"
                class="!rounded-xl !py-1.5 !px-3.5 !text-xs !font-bold transition-all hover:scale-105"
                @click="openProcessDialog(data, 'REJECTED')"
              />
            </div>
            <!-- For already processed: show a subtle "done" indicator -->
            <div v-else class="flex items-center justify-end">
              <span
                class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-[10px] font-bold"
                :class="data.status === 'APPROVED'
                  ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400'
                  : 'bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400'"
              >
                <i :class="data.status === 'APPROVED' ? 'pi pi-check-circle' : 'pi pi-times-circle'" class="text-xs"></i>
                {{ data.status === 'APPROVED' ? $t('leaveRequest.tabApproved') : $t('leaveRequest.tabRejected') }}
              </span>
            </div>
          </template>
        </template>
      </BaseDataTable>
    </div>
    </template>

    <!-- Process Dialog -->
    <Dialog
      v-model:visible="displayProcessDialog"
      modal
      :header="processAction === 'APPROVED' ? $t('leaveRequest.dialogApproveTitle') : $t('leaveRequest.dialogRejectTitle')"
      :style="{ width: '30rem' }"
      class="!rounded-xl overflow-hidden"
    >
      <div v-if="selectedRequest" class="space-y-6 p-2">
        <div class="flex flex-col bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl space-y-1">
          <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('leaveRequest.employee') }}</span>
          <span class="font-bold text-surface-800 dark:text-surface-200">{{ selectedRequest.employee?.full_name }}</span>
          <span class="text-xs text-surface-450 font-semibold font-mono">{{ formatDate(selectedRequest.start_date) }} ~ {{ formatDate(selectedRequest.end_date) }} ({{ getLeaveDaysCount(selectedRequest.start_date, selectedRequest.end_date) }} {{ $t('leaveRequest.days') }})</span>
        </div>

        <div v-if="selectedRequest.attachment_url" class="flex flex-col bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl">
          <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('leaveRequest.attachment') }}</span>
          <a
            :href="selectedRequest.attachment_url"
            target="_blank"
            class="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 text-xs font-bold text-primary transition-all hover:bg-surface-100 dark:hover:bg-surface-800"
          >
            <i class="pi pi-download"></i>
            {{ $t('leaveRequest.viewAttachment') }}
          </a>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-xs font-black uppercase tracking-wider text-surface-500">{{ $t('leaveRequest.approverNote') }}</label>
          <Textarea
            v-model="approverNote"
            rows="4"
            :placeholder="$t('leaveRequest.approverNotePlaceholder')"
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
          />
        </div>

        <div class="flex gap-4 justify-end pt-4">
          <Button
            :label="$t('btn.cancel')"
            severity="secondary"
            variant="text"
            class="!rounded-xl !font-bold"
            @click="displayProcessDialog = false"
          />
          <Button
            :label="processAction === 'APPROVED' ? $t('leaveRequest.confirmApprove') : $t('leaveRequest.confirmReject')"
            :severity="processAction === 'APPROVED' ? 'success' : 'danger'"
            class="!rounded-xl !font-bold !px-6"
            :loading="submitting"
            @click="handleProcess"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import BaseDataTable from '~/components/common/BaseDataTable.vue';
import { GET_PENDING_LEAVE_REQUESTS, APPROVE_LEAVE_REQUEST } from '~/apis/timesheet';
import { useApiStore } from "~/stores/api";
import { showMessage } from "~/utils/global";

const { t } = useI18n();

const router = useRouter();
const apiStore = useApiStore();

const loading = ref(false);
const submitting = ref(false);
const requests = ref<any[]>([]);
const checkingAccess = ref(true);
const activeStatusFilter = ref<string>('ALL');
const isReload = ref(false);

const displayProcessDialog = ref(false);
const selectedRequest = ref<any>(null);
const processAction = ref<'APPROVED' | 'REJECTED'>('APPROVED');
const approverNote = ref('');

const userInfo = computed(() => {
  if (process.client) {
    return apiStore.userInfo || JSON.parse(localStorage.getItem("userInfo") || "{}");
  }
  return null;
});

const isManagerOrAdmin = computed(() => {
  const role = userInfo.value?.role;
  return role === 'ADMIN' || role === 'MANAGER' || role === 'HR';
});

// Status filter tabs
const statusTabs = computed(() => [
  { value: 'ALL', label: t('leaveRequest.tabAll'), icon: 'pi pi-list', activeClass: 'bg-primary/10 border-primary/30 text-primary' },
  { value: 'PENDING', label: t('leaveRequest.tabPending'), icon: 'pi pi-clock', activeClass: 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400' },
  { value: 'APPROVED', label: t('leaveRequest.tabApproved'), icon: 'pi pi-check-circle', activeClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400' },
  { value: 'REJECTED', label: t('leaveRequest.tabRejected'), icon: 'pi pi-times-circle', activeClass: 'bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400' },
]);

const columns = computed(() => [
  { key: 'stt', label: t('leaveRequest.stt'), minWidth: '60px' },
  { key: 'employee', label: t('leaveRequest.employee'), minWidth: '200px' },
  { key: 'leave_type', label: t('leaveRequest.type'), minWidth: '130px' },
  { key: 'duration', label: t('leaveRequest.timeRange'), minWidth: '180px' },
  { key: 'reason', label: t('leaveRequest.reason'), minWidth: '220px' },
  { key: 'status', label: t('leaveRequest.status'), minWidth: '150px' },
  { key: 'actions', label: t('contract.actions'), minWidth: '150px', frozen: true }
]);

const getCountByStatus = (status: string) => {
  if (status === 'ALL') return requests.value.length;
  return requests.value.filter(r => r.status === status).length;
};

const fetchPendingRequestsWrapper = (payload: { query: string, successCallback: Function, errorCallback: Function }) => {
  const params = Object.fromEntries(new URLSearchParams(payload.query));
  
  return GET_PENDING_LEAVE_REQUESTS(
    (res: any) => {
      let rawList = res.data?.data || res.data || [];
      
      // Đồng bộ để tính toán badge count ở header
      requests.value = [...rawList];
      
      // 1. Lọc theo Status
      if (activeStatusFilter.value !== 'ALL') {
        rawList = rawList.filter((item: any) => item.status === activeStatusFilter.value);
      }
      
      // 2. Lọc theo nhân viên (tên hoặc mã nhân viên)
      if (tableFilters.q) {
        const query = tableFilters.q.trim().toLowerCase();
        rawList = rawList.filter((item: any) => {
          const fullName = (item.employee?.full_name || '').toLowerCase();
          const code = (item.employee?.code || '').toLowerCase();
          return fullName.includes(query) || code.includes(query);
        });
      }

      // 3. Lọc theo loại nghỉ
      if (tableFilters.leave_type) {
        rawList = rawList.filter((item: any) => item.leave_type === tableFilters.leave_type);
      }

      // 4. Lọc theo khoảng thời gian
      if (tableFilters.start_date) {
        const filterStart = new Date(tableFilters.start_date);
        filterStart.setHours(0, 0, 0, 0);
        rawList = rawList.filter((item: any) => {
          const requestEnd = new Date(item.end_date);
          return requestEnd >= filterStart;
        });
      }
      if (tableFilters.end_date) {
        const filterEnd = new Date(tableFilters.end_date);
        filterEnd.setHours(23, 59, 59, 999);
        rawList = rawList.filter((item: any) => {
          const requestStart = new Date(item.start_date);
          return requestStart <= filterEnd;
        });
      }
      
      const page = parseInt(params.page || '1');
      const limit = parseInt(params.limit || '30');
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
      checkingAccess.value = false;
    },
    (err: any) => {
      payload.errorCallback(err);
      checkingAccess.value = false;
    }
  );
};

const tableFilters = reactive({
  status: 'ALL',
  q: '',
  leave_type: null as string | null,
  start_date: null as Date | null,
  end_date: null as Date | null,
});

watch(activeStatusFilter, (newVal) => {
  tableFilters.status = newVal;
}, { immediate: true });

const leaveTypeOptions = computed(() => [
  { label: t('leaveRequest.typeAnnual'), value: 'ANNUAL' },
  { label: t('leaveRequest.typeSick'), value: 'SICK' },
  { label: t('leaveRequest.typeSpecial'), value: 'SPECIAL' },
  { label: t('leaveRequest.typeUnpaid'), value: 'UNPAID' }
]);

const resetFilters = () => {
  tableFilters.q = '';
  tableFilters.leave_type = null;
  tableFilters.start_date = null;
  tableFilters.end_date = null;
  activeStatusFilter.value = 'ALL';
};

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

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case 'PENDING': return 'bg-amber-500/10 text-amber-600 dark:text-amber-400';
    case 'APPROVED': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
    case 'REJECTED': return 'bg-rose-500/10 text-rose-600 dark:text-rose-400';
    default: return 'bg-surface-100 text-surface-500';
  }
};

const getStatusDotClass = (status: string) => {
  switch (status) {
    case 'PENDING': return 'bg-amber-500 animate-pulse';
    case 'APPROVED': return 'bg-emerald-500';
    case 'REJECTED': return 'bg-rose-500';
    default: return 'bg-surface-400';
  }
};

const getInitials = (name: string) => {
  if (!name) return '??';
  const parts = name.trim().split(' ');
  return parts[parts.length - 1].substring(0, 2).toUpperCase();
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${d}/${m}/${y}`;
};

const formatDateTime = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const y = date.getFullYear();
  const mo = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const h = String(date.getHours()).padStart(2, '0');
  const mi = String(date.getMinutes()).padStart(2, '0');
  return `${h}:${mi} ${d}/${mo}/${y}`;
};

const getLeaveDaysCount = (startStr: string, endStr: string) => {
  if (!startStr || !endStr) return 0;
  const start = new Date(startStr);
  const end = new Date(endStr);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
};

const goHome = () => router.push('/');

const openProcessDialog = (item: any, action: 'APPROVED' | 'REJECTED') => {
  selectedRequest.value = item;
  processAction.value = action;
  approverNote.value = '';
  displayProcessDialog.value = true;
};

const handleProcess = () => {
  if (!selectedRequest.value) return;

  submitting.value = true;
  APPROVE_LEAVE_REQUEST(
    selectedRequest.value.id,
    {
      status: processAction.value,
      approver_note: approverNote.value
    },
    (res: any) => {
      const msg = processAction.value === 'APPROVED' ? t('leaveRequest.approveSuccessDesc') : t('leaveRequest.rejectSuccessDesc');
      showMessage("success", t('leaveRequest.processSuccess'), msg);
      displayProcessDialog.value = false;
      selectedRequest.value = null;
      submitting.value = false;
      isReload.value = !isReload.value;
    },
    (err: any) => {
      submitting.value = false;
    }
  );
};

onMounted(() => {
  if (!isManagerOrAdmin.value) {
    checkingAccess.value = false;
  }
});
</script>

<style scoped>
</style>
