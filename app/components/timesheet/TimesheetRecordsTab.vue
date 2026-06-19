<template>
  <div class="bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm space-y-6">
    <!-- Filter bar -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 bg-surface-50 dark:bg-surface-950 p-5 rounded-xl border border-surface-200 dark:border-surface-800">
      <div class="flex flex-col gap-1.5">
        <label class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('timesheet.searchKeyword') }}</label>
        <InputText
          v-model="filters.q"
          :placeholder="$t('timesheet.searchPlaceholder')"
          class="w-full !rounded-xl !py-2 border border-surface-200 dark:border-surface-800"
          @input="onSearchFilter"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('timesheet.status') }}</label>
        <Select
          v-model="filters.status"
          :options="statusOptions"
          optionLabel="label"
          optionValue="value"
          :placeholder="$t('timesheet.status')"
          class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
          @change="reloadTable"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('timesheet.fromDate') }}</label>
        <DatePicker
          v-model="filters.start_date"
          dateFormat="dd/mm/yy"
          :placeholder="$t('timesheet.fromDate')"
          class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
          @date-select="reloadTable"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('timesheet.toDate') }}</label>
        <DatePicker
          v-model="filters.end_date"
          dateFormat="dd/mm/yy"
          :placeholder="$t('timesheet.toDate')"
          class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
          @date-select="reloadTable"
        />
      </div>
    </div>

    <!-- Modern Data Table -->
    <BaseDataTable
      :columns="columns"
      :fetchApi="fetchRecordsWrapper"
      :filters="filters"
      :isReload="isReload"
      :emptyText="$t('timesheet.noHistoryFound')"
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
          <div class="flex flex-col">
            <span class="font-bold text-surface-900 dark:text-surface-0 tracking-tight text-sm">
              {{ data.employee?.full_name || $t('text.hiddenOperation') }}
            </span>
            <span class="text-[9px] font-black uppercase tracking-widest text-surface-450 font-mono mt-0.5">
              {{ $t('timesheet.staffCode') }}: {{ data.employee?.code || data.employee?.employee_code || 'N/A' }}
            </span>
          </div>
        </template>

        <!-- Ngày -->
        <template v-else-if="column.key === 'date'">
          <span class="font-bold text-surface-800 dark:text-surface-200 tracking-tight font-mono text-xs">
            {{ formatDate(data.date) }}
          </span>
        </template>

        <!-- Giờ vào -->
        <template v-else-if="column.key === 'check_in'">
          <span class="font-mono font-bold text-surface-700 dark:text-surface-300 text-xs">
            {{ formatTime(data.check_in) || '--:--' }}
          </span>
        </template>

        <!-- Giờ ra -->
        <template v-else-if="column.key === 'check_out'">
          <span class="font-mono font-bold text-surface-700 dark:text-surface-300 text-xs">
            {{ formatTime(data.check_out) || '--:--' }}
          </span>
        </template>

        <!-- Trạng thái -->
        <template v-else-if="column.key === 'status'">
          <span
            class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
            :class="[
              data.status === 'PRESENT' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
              data.status === 'LATE' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' :
              'bg-rose-500/10 text-rose-600 dark:text-rose-400'
            ]"
          >
            {{ data.status }}
          </span>
        </template>

        <!-- Ghi chú -->
        <template v-else-if="column.key === 'note'">
          <span class="text-xs font-semibold text-surface-500 dark:text-surface-400 max-w-[180px] truncate block" :title="data.note">
            {{ data.note || '-' }}
          </span>
        </template>

        <!-- Thao tác -->
        <template v-else-if="column.key === 'actions'">
          <Button
            icon="pi pi-pencil"
            :label="$t('timesheet.editOrCompensate')"
            class="!rounded-xl !py-1.5 !px-3.5 !text-xs !font-bold transition-all hover:scale-105"
            severity="secondary"
            @click="openManualDialog(data)"
          />
        </template>
      </template>
    </BaseDataTable>

    <!-- Dialog Cập nhật Chấm công Thủ công (Manual Dialog) -->
    <Dialog
      v-model:visible="displayManualDialog"
      modal
      :header="editingRecord ? $t('timesheet.dialogManualEdit') : $t('timesheet.dialogManualCreate')"
      :style="{ width: '32rem' }"
      class="!rounded-[2rem] overflow-hidden"
    >
      <div class="space-y-6 p-2">
        <!-- Employee select (Only for creating, locked/disabled for editing) -->
        <AppInputField :label="$t('timesheet.employeeLabel')" :isRequired="true" :error="manualErrors.employee_id">
          <Select
            v-model="manualForm.employee_id"
            :options="employeeOptions"
            optionLabel="full_name"
            optionValue="id"
            :placeholder="$t('timesheet.employeeSelectPlaceholder')"
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            :disabled="!!editingRecord"
            :invalid="!!manualErrors.employee_id"
            @change="onValidateManual('employee_id')"
          />
        </AppInputField>

        <AppInputField :label="$t('timesheet.attendanceDate')" :isRequired="true" :error="manualErrors.date">
          <DatePicker
            v-model="manualForm.date"
            dateFormat="dd/mm/yy"
            :placeholder="$t('timesheet.selectDate')"
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            :disabled="!!editingRecord"
            :invalid="!!manualErrors.date"
            @date-select="onValidateManual('date')"
          />
        </AppInputField>

        <div class="grid grid-cols-2 gap-4">
          <AppInputField :label="$t('timesheet.checkInLabel')" :error="manualErrors.check_in">
            <DatePicker
              v-model="manualForm.check_in"
              timeOnly
              hourFormat="24"
              showSeconds
              :placeholder="$t('timesheet.checkInPlaceholder')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            />
          </AppInputField>

          <AppInputField :label="$t('timesheet.checkOutLabel')" :error="manualErrors.check_out">
            <DatePicker
              v-model="manualForm.check_out"
              timeOnly
              hourFormat="24"
              showSeconds
              :placeholder="$t('timesheet.checkOutPlaceholder')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            />
          </AppInputField>
        </div>

        <AppInputField :label="$t('timesheet.statusLabel')" :isRequired="true">
          <Select
            v-model="manualForm.status"
            :options="[
              { label: $t('timesheet.statusPresent'), value: 'PRESENT' },
              { label: $t('timesheet.statusLate'), value: 'LATE' },
              { label: $t('timesheet.statusAbsent'), value: 'ABSENT' }
            ]"
            optionLabel="label"
            optionValue="value"
            :placeholder="$t('timesheet.status')"
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
          />
        </AppInputField>

        <AppInputField :label="$t('timesheet.noteLabel')">
          <Textarea
            v-model="manualForm.note"
            rows="3"
            :placeholder="$t('timesheet.notePlaceholder')"
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
          />
        </AppInputField>

        <div class="flex gap-4 justify-end pt-4">
          <Button
            :label="$t('timesheet.btnCancel')"
            severity="secondary"
            variant="text"
            class="!rounded-xl !font-bold"
            @click="displayManualDialog = false"
          />
          <Button
            :label="$t('timesheet.btnSaveRecord')"
            severity="primary"
            class="!rounded-xl !font-bold !px-6"
            :loading="submitting"
            @click="handleStoreManual"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import BaseDataTable from '~/components/common/BaseDataTable.vue';
import {
  GET_ADMIN_TIMESHEETS,
  STORE_MANUAL_TIMESHEET
} from '~/apis/timesheet';
import { useEmployee } from '~/composables/employee';
import { showMessage } from "~/utils/global";
import { validateOnAllField, validateOnField } from '~/utils/validate';

const { t } = useI18n();
const { getEmployees } = useEmployee() as any;

const isReload = ref(false);
const reloadTable = () => {
  isReload.value = !isReload.value;
};

const columns = computed(() => [
  { key: 'stt', label: t('timesheet.no'), minWidth: '60px' },
  { key: 'employee', label: t('timesheet.staff'), minWidth: '180px' },
  { key: 'date', label: t('timesheet.dateCol'), minWidth: '110px' },
  { key: 'check_in', label: t('timesheet.checkInCol'), minWidth: '100px' },
  { key: 'check_out', label: t('timesheet.checkOutCol'), minWidth: '100px' },
  { key: 'status', label: t('timesheet.statusCol'), minWidth: '120px' },
  { key: 'note', label: t('timesheet.noteCol'), minWidth: '150px' },
  { key: 'actions', label: t('timesheet.actionCol'), minWidth: '130px', frozen: true }
]);

// Records List State
const filters = ref({
  q: '',
  status: 'ALL',
  start_date: null as Date | null,
  end_date: null as Date | null
});

const statusOptions = computed(() => [
  { label: t('timesheet.statusAll'), value: 'ALL' },
  { label: t('timesheet.statusPresent'), value: 'PRESENT' },
  { label: t('timesheet.statusLate'), value: 'LATE' },
  { label: t('timesheet.statusAbsent'), value: 'ABSENT' }
]);

// Manual Dialog State
const displayManualDialog = ref(false);
const editingRecord = ref<any>(null);
const submitting = ref(false);
const employeeOptions = ref<any[]>([]);
const manualForm = ref({
  employee_id: null as number | null,
  date: null as Date | null,
  check_in: null as Date | null,
  check_out: null as Date | null,
  status: 'PRESENT',
  note: ''
});

// Manual validation
const manualErrors = ref<any>({
  employee_id: '',
  date: '',
});

const MANUAL_VALIDATIONS = {
  employee_id: { transitionKey: "timesheet.employeeLabel", types: ["require"], errorKey: "employee_id" },
  date: { transitionKey: "timesheet.attendanceDate", types: ["require"], errorKey: "date" },
};

const onValidateManual = (field: string) => {
  validateOnField(field, manualForm.value, manualErrors.value, MANUAL_VALIDATIONS, t);
};

const formatDateForApi = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

const formatTime = (timeStr: string) => {
  if (!timeStr) return null;
  return new Date(timeStr).toLocaleTimeString('en-US', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false, hour: '2-digit', minute: '2-digit' });
};

// Fetch Records Log
const fetchRecordsWrapper = (payload: { query: string, successCallback: Function, errorCallback: Function }) => {
  const params = Object.fromEntries(new URLSearchParams(payload.query));
  
  const apiParams: any = {
    page: params.page || '1',
    per_page: params.limit || '30'
  };

  if (filters.value.q) apiParams.q = filters.value.q;
  if (filters.value.status && filters.value.status !== 'ALL') apiParams.status = filters.value.status;
  if (filters.value.start_date) apiParams.start_date = formatDateForApi(filters.value.start_date);
  if (filters.value.end_date) apiParams.end_date = formatDateForApi(filters.value.end_date);

  return GET_ADMIN_TIMESHEETS(
    apiParams,
    (res: any) => {
      const rawList = res.data?.data?.data || [];
      const total = res.data?.data?.meta?.total || rawList.length;
      
      const formattedResponse = {
        data: {
          data: {
            data: rawList,
            total: total
          }
        }
      };
      
      payload.successCallback(formattedResponse);
    },
    (err: any) => {
      payload.errorCallback(err);
    }
  );
};

// Fetch Employees List for Manual dialog
const fetchEmployees = () => {
  getEmployees({
    params: { per_page: 100 },
    successCallback: (res: any) => {
      employeeOptions.value = res.data?.data?.data || res.data?.data || [];
    },
    errorCallback: (err: any) => {
      console.error(err);
    }
  });
};

let debounceTimer: any = null;
const onSearchFilter = () => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    reloadTable();
  }, 400);
};

// Open Manual log dialog
const openManualDialog = (record: any = null) => {
  fetchEmployees();
  
  // Clear manual validations
  Object.keys(manualErrors.value).forEach(k => manualErrors.value[k] = '');

  const parseTimeToDate = (timeStr: string) => {
    if (!timeStr) return null;
    const parts = timeStr.split(':').map(Number);
    const d = new Date();
    d.setHours(parts[0] || 0, parts[1] || 0, parts[2] || 0, 0);
    return d;
  };

  const getCleanTime = (dtStr: string) => {
    if (!dtStr) return null;
    if (dtStr.includes(' ')) {
      const timePart = dtStr.split(' ')[1];
      return parseTimeToDate(timePart);
    }
    return parseTimeToDate(dtStr);
  };

  if (record) {
    editingRecord.value = record;
    manualForm.value = {
      employee_id: record.employee_id,
      date: new Date(record.date),
      check_in: getCleanTime(record.check_in),
      check_out: getCleanTime(record.check_out),
      status: record.status,
      note: record.note || ''
    };
  } else {
    editingRecord.value = null;
    
    const defCheckIn = new Date();
    defCheckIn.setHours(8, 30, 0, 0);
    
    const defCheckOut = new Date();
    defCheckOut.setHours(17, 30, 0, 0);

    manualForm.value = {
      employee_id: null,
      date: new Date(),
      check_in: defCheckIn,
      check_out: defCheckOut,
      status: 'PRESENT',
      note: ''
    };
  }
  displayManualDialog.value = true;
};

// Handle manual timesheet submit
const handleStoreManual = () => {
  // Clear manual validations
  Object.keys(manualErrors.value).forEach(k => manualErrors.value[k] = '');

  const isValid = validateOnAllField(manualForm.value, manualErrors.value, MANUAL_VALIDATIONS, t);
  if (!isValid) {
    showMessage("error", t('text.error'), t('text.errorInput'));
    return;
  }

  const dateStr = formatDateForApi(manualForm.value.date!);

  const formatTimeOnlyStr = (dt: Date | null) => {
    if (!dt) return null;
    const h = String(dt.getHours()).padStart(2, '0');
    const m = String(dt.getMinutes()).padStart(2, '0');
    const s = String(dt.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const payload: any = {
    employee_id: manualForm.value.employee_id,
    date: dateStr,
    status: manualForm.value.status,
    note: manualForm.value.note
  };

  if (manualForm.value.check_in) {
    payload.check_in = `${dateStr} ${formatTimeOnlyStr(manualForm.value.check_in)}`;
  }
  if (manualForm.value.check_out) {
    payload.check_out = `${dateStr} ${formatTimeOnlyStr(manualForm.value.check_out)}`;
  }

  submitting.value = true;
  STORE_MANUAL_TIMESHEET(
    payload,
    (res: any) => {
      showMessage("success", t("text.success"), t("timesheet.msgSaveManualSuccess"));
      displayManualDialog.value = false;
      submitting.value = false;
      reloadTable();
    },
    (err: any) => {
      console.error(err);
      submitting.value = false;
    }
  );
};

defineExpose({
  openManualDialog
});
</script>
