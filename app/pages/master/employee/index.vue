<template>
  <div class="w-full space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-10">
    <!-- Header (Premium Glass) -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/80 dark:bg-surface-900/80 backdrop-blur-xl p-6 rounded-3xl border border-white dark:border-surface-800 shadow-xl shadow-surface-200/20">
      <div class="flex items-center gap-5">
        <div class="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 rotate-3 hover:rotate-0 transition-transform duration-500">
          <i class="pi pi-users text-white text-2xl"></i>
        </div>
        <div class="space-y-0.5">
          <h1 class="text-2xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ $t('menu.employee') || 'Quản lý nhân sự' }}
          </h1>
          <p class="text-[10px] text-surface-400 font-black uppercase tracking-[0.2em] flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            HRM Database & Dependents
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <NuxtLink to="/master/employee/add">
          <Button 
            icon="pi pi-plus" 
            :label="$t('employee.addTitle') || 'Thêm nhân viên'"
            severity="primary" 
            class="!rounded-xl !px-6 !py-3 !shadow-lg !shadow-primary/25 !font-bold"
          />
        </NuxtLink>
        <Button 
          icon="pi pi-refresh" 
          severity="secondary" 
          outlined
          class="!rounded-xl !w-12 !h-12"
          @click="reloadTable"
        />
      </div>
    </div>

    <!-- Filters Section -->
    <div class="bg-white dark:bg-surface-900 p-6 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Search -->
        <div class="md:col-span-2">
          <AppInputField :label="$t('btn.search') || 'Tìm kiếm'">
            <div class="relative group">
              <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
              <InputText 
                v-model="searchQuery.q" 
                :placeholder="$t('employee.placeholderSearch') || 'Tên, email, SĐT, mã nhân viên...'" 
                class="w-full !rounded-xl !pl-11"
              />
            </div>
          </AppInputField>
        </div>
        <!-- Status Filter -->
        <div>
          <AppInputField :label="$t('employee.status') || 'Trạng thái'">
            <Select 
              v-model="filters.status" 
              :options="statusOptions" 
              optionLabel="label" 
              optionValue="value" 
              :placeholder="$t('text.all') || 'Tất cả'" 
              class="w-full !rounded-xl"
              showClear
            />
          </AppInputField>
        </div>
        <!-- Role Filter -->
        <div>
          <AppInputField :label="$t('employee.role') || 'Vai trò'">
            <Select 
              v-model="filters.role" 
              :options="roleOptions" 
              optionLabel="label" 
              optionValue="value" 
              :placeholder="$t('text.all') || 'Tất cả'" 
              class="w-full !rounded-xl"
              showClear
            />
          </AppInputField>
        </div>
      </div>
    </div>

    <!-- Modern Data Table -->
    <BaseDataTable
      :columns="columns"
      :fetchApi="fetchEmployeesWrapper"
      :filters="filters"
      :search="searchQuery"
      :searchKeys="['full_name', 'email', 'phone', 'code']"
      :isReload="isReload"
      :emptyText="$t('text.noData') || 'Không tìm thấy nhân viên nào'"
      scrollHeight="60vh"
    >
      <template #body="{ column, data }">
        <template v-if="column.key === 'code'">
          <span class="font-mono font-bold text-primary text-sm">{{ data.code }}</span>
        </template>
        
        <template v-else-if="column.key === 'full_name'">
          <div class="flex flex-col">
            <span class="font-bold text-surface-900 dark:text-surface-0">{{ data.full_name }}</span>
            <span v-if="data.full_name_kana" class="text-[10px] text-surface-400 font-mono">{{ data.full_name_kana }}</span>
          </div>
        </template>

        <template v-else-if="column.key === 'department'">
          <span class="text-sm font-medium">{{ data.department?.name || '-' }}</span>
        </template>

        <template v-else-if="column.key === 'role'">
          <Tag 
            :value="getRoleLabel(data.role)" 
            :severity="getRoleSeverity(data.role)"
            class="!rounded-lg !font-bold !text-[9px] !tracking-wider !uppercase"
          />
        </template>

        <template v-else-if="column.key === 'status'">
          <Tag 
            :value="getStatusLabel(data.status)" 
            :severity="getStatusSeverity(data.status)"
            class="!rounded-lg !font-bold !text-[9px] !tracking-wider !uppercase"
          />
        </template>

        <template v-else-if="column.key === 'relatives_count'">
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-xs">
            {{ data.relatives_count || 0 }}
          </span>
        </template>

        <template v-else-if="column.key === 'actions'">
          <div class="flex items-center gap-1">
            <NuxtLink :to="`/master/employee/${data.id}`">
              <Button icon="pi pi-eye" severity="info" variant="text" class="!w-9 !h-9 !rounded-xl" v-tooltip.top="$t('btn.detail') || 'Chi tiết'" />
            </NuxtLink>
            <NuxtLink :to="`/master/employee/${data.id}/edit`">
              <Button icon="pi pi-pencil" severity="warn" variant="text" class="!w-9 !h-9 !rounded-xl" v-tooltip.top="$t('btn.edit') || 'Sửa'" />
            </NuxtLink>
            <Button 
              icon="pi pi-bolt" 
              severity="success" 
              variant="text" 
              class="!w-9 !h-9 !rounded-xl" 
              v-tooltip.top="$t('contract.quickSign') || 'Ký nhanh'" 
              @click="quickSignContractForEmployee(data)"
            />
            <Button icon="pi pi-trash" severity="danger" variant="text" class="!w-9 !h-9 !rounded-xl" v-tooltip.top="$t('btn.disable') || 'Vô hiệu hóa'" @click="confirmDelete(data)" />
          </div>
        </template>
      </template>
    </BaseDataTable>

    <!-- Delete Confirmation Dialog -->
    <Dialog v-model:visible="showDeleteDialog" :modal="true" :closable="true" :header="$t('btn.confirm') || 'Xác nhận'" class="!rounded-3xl" :style="{ width: '450px' }">
      <div class="flex items-start gap-4 p-4">
        <div class="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center text-orange-500 flex-shrink-0">
          <i class="pi pi-exclamation-triangle text-xl"></i>
        </div>
        <div>
          <h3 class="font-black text-surface-900 dark:text-surface-0 text-lg">
            {{ $t('employee.dialogDisableTitle') || 'Vô hiệu hóa nhân viên?' }}
          </h3>
          <p class="text-sm text-surface-500 mt-2">
            {{ $t('employee.dialogDisableDesc', { name: deleteTarget?.full_name }) || `Trạng thái của nhân sự ${deleteTarget?.full_name} sẽ được chuyển thành INACTIVE.` }}
          </p>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3 px-4 pb-2">
          <Button :label="$t('btn.cancel') || 'Hủy'" severity="secondary" outlined @click="showDeleteDialog = false" class="!rounded-xl" />
          <Button :label="$t('btn.confirm') || 'Xác nhận'" severity="danger" @click="doDelete" class="!rounded-xl" :loading="deleting" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { showMessage } from '~/utils/global';
import BaseDataTable from '~/components/common/BaseDataTable.vue';
import AppInputField from '~/components/AppInputField.vue';
import { CREATE_CONTRACT } from '~/apis/contract';

const { t } = useI18n();
const { getEmployees, deleteEmployee } = useEmployee();

const isReload = ref(false);
const showDeleteDialog = ref(false);
const deleteTarget = ref<any>(null);
const deleting = ref(false);

const searchQuery = reactive({ q: '' });
const filters = reactive({ status: null, role: null });

const statusOptions = computed(() => [
  { label: t('employee.statusActive') || 'Đang làm việc', value: 'ACTIVE' },
  { label: t('employee.statusInactive') || 'Nghỉ việc', value: 'INACTIVE' },
  { label: t('employee.statusProbation') || 'Thử việc', value: 'PROBATION' },
]);

const roleOptions = computed(() => [
  { label: t('employee.roleAdmin') || 'Admin', value: 'ADMIN' },
  { label: t('employee.roleManager') || 'Quản lý', value: 'MANAGER' },
  { label: t('employee.roleStaff') || 'Nhân viên', value: 'STAFF' },
]);

const columns = computed(() => [
  { key: 'code', label: t('employee.code') || 'Mã NV', minWidth: '100px', sortable: true },
  { key: 'full_name', label: t('employee.fullName') || 'Họ tên', minWidth: '180px', sortable: true },
  { key: 'email', label: t('employee.email') || 'Email', minWidth: '180px' },
  { key: 'phone', label: t('employee.phone') || 'Điện thoại', minWidth: '120px' },
  { key: 'department', label: t('employee.department') || 'Phòng ban', minWidth: '150px' },
  { key: 'role', label: t('employee.role') || 'Vai trò', minWidth: '100px' },
  { key: 'status', label: t('employee.status') || 'Trạng thái', minWidth: '110px' },
  { key: 'relatives_count', label: t('employee.dependentsCount') || 'Thân nhân', minWidth: '100px' },
  { key: 'actions', label: t('text.action') || 'Thao tác', minWidth: '120px', frozen: true },
]);

const fetchEmployeesWrapper = (payload: { query: string, successCallback: Function, errorCallback: Function }) => {
  const params = Object.fromEntries(new URLSearchParams(payload.query));
  
  // Format filters
  Object.keys(params).forEach(key => {
    if (key.startsWith('filters[')) {
      const match = key.match(/filters\[(.*?)\]/);
      if (match) {
        params[key] = params[key];
      }
    }
  });

  return getEmployees({
    params,
    successCallback: payload.successCallback,
    errorCallback: payload.errorCallback
  });
};

const reloadTable = () => {
  isReload.value = !isReload.value;
};

const getStatusLabel = (status: string) => {
  const map: Record<string, string> = { 
    ACTIVE: t('employee.statusActive') || 'Đang làm', 
    INACTIVE: t('employee.statusInactive') || 'Nghỉ việc', 
    PROBATION: t('employee.statusProbation') || 'Thử việc' 
  };
  return map[status] || status;
};

const getStatusSeverity = (status: string) => {
  const map: Record<string, string> = { ACTIVE: 'success', INACTIVE: 'danger', PROBATION: 'warn' };
  return map[status] || 'info';
};

const getRoleLabel = (role: string) => {
  const map: Record<string, string> = { 
    ADMIN: t('employee.roleAdmin') || 'Admin', 
    MANAGER: t('employee.roleManager') || 'Quản lý', 
    STAFF: t('employee.roleStaff') || 'Nhân viên' 
  };
  return map[role] || role;
};

const getRoleSeverity = (role: string) => {
  const map: Record<string, string> = { ADMIN: 'danger', MANAGER: 'warn', STAFF: 'info' };
  return map[role] || 'secondary';
};

const confirmDelete = (employee: any) => {
  deleteTarget.value = employee;
  showDeleteDialog.value = true;
};

const doDelete = () => {
  if (!deleteTarget.value) return;
  deleting.value = true;
  deleteEmployee({
    id: deleteTarget.value.id,
    successCallback: () => {
      showMessage('success', t('btn.success') || 'Thành công', t('employee.msgDisableSuccess') || 'Đã vô hiệu hóa nhân viên.');
      showDeleteDialog.value = false;
      deleting.value = false;
      reloadTable();
    },
    errorCallback: () => {
      deleting.value = false;
    },
  });
};

const quickSignContractForEmployee = (emp: any) => {
  if (!emp) return;
  
  const today = new Date();
  const formatDateStr = (d: Date) => {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  let initialSalary = 20000000;
  let initialJob = emp.job_title?.name || 'Nhân sự';
  
  if (emp.work_histories && emp.work_histories.length > 0) {
    const histories = [...emp.work_histories].sort((a: any, b: any) => {
      const da = a.start_date ? new Date(a.start_date).getTime() : 0;
      const db = b.start_date ? new Date(b.start_date).getTime() : 0;
      return db - da;
    });
    const latest = histories[0];
    if (latest) {
      if (latest.salary) initialSalary = latest.salary;
      if (latest.job_title?.name) initialJob = latest.job_title.name;
    }
  }

  const joinDate = emp.join_date || formatDateStr(today);
  const code = emp.code || `EMP${emp.id}`;
  const year = today.getFullYear();
  const contractCode = `HDLD-${code}-${year}`;

  const payload = {
    employee_id: emp.id,
    contract_code: contractCode,
    type: 'LABOR',
    employment_type: 'SEISHAIN',
    job_title: initialJob,
    work_location: 'Văn phòng chính',
    working_hours_per_day: 8,
    probation_salary_percentage: 85,
    bank_name: emp.bank_code || 'Vietcombank',
    bank_account_number: emp.bank_account_number || '',
    is_36_agreement_applicable: true,
    overtime_allowance_included: false,
    probation_period_months: 2,
    insurance_enrolled: 'BHXH, BHYT, BHTN',
    sign_date: joinDate,
    start_date: joinDate,
    end_date: null,
    value: initialSalary,
    status: 'ACTIVE',
  };

  CREATE_CONTRACT(
    payload,
    (res: any) => {
      showMessage('success', t('btn.success'), t('quickSignSuccess') || 'Đã ký hợp đồng thành công.');
      navigateTo(`/master/employee/${emp.id}`);
    },
    (err: any) => {
      showMessage('error', t('contract.saveError'), err?.response?.data?.messages?.[0] || err.message);
    }
  );
};
</script>
