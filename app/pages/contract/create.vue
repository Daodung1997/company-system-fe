<template>
  <div class="w-full px-4 sm:px-6 lg:w-[95%] lg:mx-auto xl:w-[92%] 2xl:w-[90%] space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-10">
    <!-- Header Page with Back link -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Button
          icon="pi pi-arrow-left"
          severity="secondary"
          variant="text"
          class="!w-10 !h-10 !rounded-xl border border-surface-200 dark:border-surface-800 hover:bg-surface-50 dark:hover:bg-surface-900"
          @click="goBack"
        />
        <div>
          <span class="text-xs font-semibold text-primary uppercase tracking-widest">{{ $t('contract.subtitle') }}</span>
          <h1 class="text-2xl font-black text-surface-900 dark:text-surface-0 mt-0.5">{{ $t('contract.createTitle') }}</h1>
        </div>
      </div>
    </div>

    <!-- Main Grid Form -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- Left side: Form fields (2 cols) -->
      <div class="lg:col-span-2 space-y-6">
        
        <!-- SECTION 1: GENERAL CONTRACT INFO -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-3xl shadow-xl shadow-surface-100/50 dark:shadow-none border border-surface-100 dark:border-surface-800 space-y-4">
          <div class="flex items-center gap-2 border-b border-surface-100 dark:border-surface-850 pb-3">
            <i class="pi pi-file-edit text-primary text-lg"></i>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('contract.generalInfo') }}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AppInputField :label="$t('contract.type')" :isRequired="true" :error="formErrors.type">
              <Select
                v-model="contractForm.type"
                :options="typeOptions"
                optionLabel="label"
                optionValue="value"
                :placeholder="$t('contract.typeSelect')"
                class="w-full !rounded-xl"
                @change="onValidate('type')"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.code')" :error="formErrors.contract_code">
              <InputText
                v-model="contractForm.contract_code"
                :placeholder="$t('contract.codePlaceholder')"
                class="rounded-xl font-mono uppercase"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.signDate')" :isRequired="true" :error="formErrors.sign_date">
              <DatePickerCommon
                v-model="contractForm.sign_date"
                :invalid="!!formErrors.sign_date"
                @change="onValidate('sign_date')"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.startDate')" :isRequired="true" :error="formErrors.start_date">
              <DatePickerCommon
                v-model="contractForm.start_date"
                :invalid="!!formErrors.start_date"
                @change="onValidate('start_date')"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.endDate')" :error="formErrors.end_date">
              <DatePickerCommon
                v-model="contractForm.end_date"
              />
            </AppInputField>

            <AppInputField
              :label="contractForm.type === 'LABOR' ? $t('contract.baseSalary') + ' (VNĐ)' : $t('contract.totalValue') + ' (VNĐ)'"
              :isRequired="true"
              :error="formErrors.value"
            >
              <InputNumber
                v-model="contractForm.value"
                placeholder="Nhập giá trị tiền tệ"
                class="rounded-xl"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                :min="0"
                :invalid="!!formErrors.value"
                @value-change="onValidate('value')"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.status')">
              <Select
                v-model="contractForm.status"
                :options="statusOptions"
                optionLabel="label"
                optionValue="value"
                :placeholder="$t('contract.statusSelect')"
                class="w-full !rounded-xl"
              />
            </AppInputField>
          </div>
        </div>

        <!-- SECTION 2: DYNAMIC BÊN B DETAILS -->
        <!-- IF LABOR: EMPLOYEE DETAILS -->
        <div v-if="contractForm.type === 'LABOR'" class="bg-white dark:bg-surface-950 p-6 rounded-3xl shadow-xl shadow-surface-100/50 dark:shadow-none border border-surface-100 dark:border-surface-800 space-y-4">
          <div class="flex items-center gap-2 border-b border-surface-100 dark:border-surface-850 pb-3">
            <i class="pi pi-user text-primary text-lg"></i>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('contract.laborSection') }}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AppInputField :label="$t('contract.selectEmployee')" :isRequired="true" :error="formErrors.employee_id" class="col-span-1 md:col-span-2">
              <AppMasterSelect
                v-model="contractForm.employee_id"
                :apiFunction="getEmployeesApi"
                cacheKey="employees"
                optionValue="id"
                optionLabel="full_name"
                :placeholder="$t('contract.selectEmployeePlaceholder')"
                :initItem="initEmployeeItem"
                :searchKeys="['full_name', 'code']"
                :error="formErrors.employee_id"
                @change="onValidate('employee_id')"
              >
                <template #option="{ option }">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary text-xs font-bold">
                      {{ String(option.full_name).slice(0, 2) }}
                    </div>
                    <div class="flex flex-col">
                      <span class="font-medium text-surface-900 dark:text-surface-0">{{ option.full_name }}</span>
                      <span class="text-[10px] text-surface-400 font-mono uppercase">{{ option.code || 'NV' }}</span>
                    </div>
                  </div>
                </template>
              </AppMasterSelect>
            </AppInputField>

            <AppInputField :label="$t('contract.employmentType')">
              <Select
                v-model="contractForm.employment_type"
                :options="employmentTypeOptions"
                optionLabel="label"
                optionValue="value"
                :placeholder="$t('contract.employmentType')"
                class="w-full !rounded-xl"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.jobTitle')">
              <InputText
                v-model="contractForm.job_title"
                placeholder="Ví dụ: Lập trình viên, Quản trị viên"
                class="rounded-xl"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.workLocation')">
              <InputText
                v-model="contractForm.work_location"
                placeholder="Ví dụ: Trụ sở chính Hà Nội, Văn phòng Tokyo"
                class="rounded-xl"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.workingHours')">
              <InputNumber
                v-model="contractForm.working_hours_per_day"
                placeholder="Ví dụ: 8"
                class="rounded-xl"
                :min="0"
                :max="24"
                suffix=" giờ/ngày"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.probationPeriod')">
              <Select
                v-model="contractForm.probation_period_months"
                :options="[0, 1, 2, 3, 6]"
                placeholder="Ví dụ: 2 tháng"
                class="w-full !rounded-xl"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.probationSalary')">
              <InputNumber
                v-model="contractForm.probation_salary_percentage"
                placeholder="Ví dụ: 85"
                class="rounded-xl"
                :min="0"
                :max="100"
                suffix=" %"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.bankName')">
              <InputText
                v-model="contractForm.bank_name"
                placeholder="Ví dụ: Vietcombank, Techcombank"
                class="rounded-xl"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.bankAccount')">
              <InputText
                v-model="contractForm.bank_account_number"
                placeholder="Ví dụ: 1018273645"
                class="rounded-xl font-mono"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.insurance')" class="col-span-1 md:col-span-2">
              <InputText
                v-model="contractForm.insurance_enrolled"
                placeholder="BHXH, BHYT, BHTN hoặc Bảo hiểm đặc biệt thương mại"
                class="rounded-xl"
              />
            </AppInputField>
          </div>
        </div>

        <!-- IF VENDOR or CLIENT: PARTNER DETAILS -->
        <div v-else class="bg-white dark:bg-surface-950 p-6 rounded-3xl shadow-xl shadow-surface-100/50 dark:shadow-none border border-surface-100 dark:border-surface-800 space-y-4">
          <div class="flex items-center gap-2 border-b border-surface-100 dark:border-surface-850 pb-3">
            <i class="pi pi-building text-primary text-lg"></i>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('contract.partnerSection') }}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AppInputField :label="$t('contract.partnerName')" :isRequired="true" :error="formErrors.partner_name" class="col-span-1 md:col-span-2">
              <InputText
                v-model="contractForm.partner_name"
                placeholder="Nhập tên chính thức trên đăng ký kinh doanh"
                class="rounded-xl"
                :invalid="!!formErrors.partner_name"
                @change="onValidate('partner_name')"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.partnerTaxCode')" :isRequired="true" :error="formErrors.partner_tax_code">
              <InputText
                v-model="contractForm.partner_tax_code"
                placeholder="Nhập mã số thuế đối tác"
                class="rounded-xl font-mono"
                :invalid="!!formErrors.partner_tax_code"
                @change="onValidate('partner_tax_code')"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.partnerRepresentative')">
              <InputText
                v-model="contractForm.partner_representative"
                placeholder="Họ tên người đại diện pháp luật"
                class="rounded-xl"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.partnerRepresentativeRole')">
              <InputText
                v-model="contractForm.partner_representative_role"
                placeholder="Ví dụ: Giám đốc, Tổng giám đốc, CEO"
                class="rounded-xl"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.partnerAddress')" class="col-span-1 md:col-span-2">
              <InputText
                v-model="contractForm.partner_address"
                placeholder="Địa chỉ giao dịch chính thức của đối tác"
                class="rounded-xl"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.paymentMethod')">
              <Select
                v-model="contractForm.payment_method"
                :options="paymentMethodOptions"
                optionLabel="label"
                optionValue="value"
                :placeholder="$t('contract.paymentMethod')"
                class="w-full !rounded-xl"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.paymentTerms')">
              <InputText
                v-model="contractForm.payment_terms"
                placeholder="Ví dụ: Net 30, Thanh toán 100% khi ký"
                class="rounded-xl"
              />
            </AppInputField>

            <AppInputField :label="$t('contract.billingCycle')">
              <Select
                v-model="contractForm.billing_cycle"
                :options="billingCycleOptions"
                optionLabel="label"
                optionValue="value"
                :placeholder="$t('contract.billingCycle')"
                class="w-full !rounded-xl"
              />
            </AppInputField>
          </div>
        </div>

        <!-- SECTION 3: JAPANESE COMPLIANCE OVERTIME (ONLY FOR LABOR) -->
        <div v-if="contractForm.type === 'LABOR'" class="bg-white dark:bg-surface-950 p-6 rounded-3xl shadow-xl shadow-surface-100/50 dark:shadow-none border border-surface-100 dark:border-surface-800 space-y-4">
          <div class="flex items-center gap-2 border-b border-surface-100 dark:border-surface-850 pb-3">
            <i class="pi pi-shield text-primary text-lg"></i>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('contract.overtimeSection') }}</h2>
          </div>

          <div class="grid grid-cols-1 gap-4">
            <div class="field-checkbox flex items-center gap-3 py-1">
              <Checkbox id="agreement36" v-model="contractForm.is_36_agreement_applicable" :binary="true" />
              <label for="agreement36" class="text-xs font-bold text-surface-600 dark:text-surface-350 cursor-pointer">
                {{ $t('contract.agreement36') }}
              </label>
            </div>

            <div class="field-checkbox flex items-center gap-3 py-1">
              <Checkbox id="overtimeAllowance" v-model="contractForm.overtime_allowance_included" :binary="true" />
              <label for="overtimeAllowance" class="text-xs font-bold text-surface-600 dark:text-surface-350 cursor-pointer">
                {{ $t('contract.overtimeAllowance') }}
              </label>
            </div>

            <div v-if="contractForm.overtime_allowance_included" class="flex flex-col gap-1.5 ml-8 max-w-xs transition-all duration-300">
              <AppInputField :label="$t('contract.includedOvertimeHours')" :isRequired="true" :error="formErrors.included_overtime_hours">
                <InputNumber
                  v-model="contractForm.included_overtime_hours"
                  placeholder="Ví dụ: 20 hoặc 30 giờ"
                  class="rounded-xl"
                  suffix=" giờ"
                  :min="0"
                  :invalid="!!formErrors.included_overtime_hours"
                  @value-change="onValidate('included_overtime_hours')"
                />
              </AppInputField>
            </div>
          </div>
        </div>
      </div>

      <!-- Right side: EDM Attachment & Summary Card (1 col) -->
      <div class="space-y-6">
        
        <!-- EDM FILE MANAGER -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-3xl shadow-xl shadow-surface-100/50 dark:shadow-none border border-surface-100 dark:border-surface-800 space-y-4">
          <div class="flex items-center gap-2 border-b border-surface-100 dark:border-surface-850 pb-3">
            <i class="pi pi-paperclip text-primary text-lg"></i>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('contract.edmSection') }}</h2>
          </div>

          <div class="space-y-4">
            <!-- Staging drop box -->
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-800 hover:border-primary/50 dark:hover:border-primary/50 rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer bg-surface-50/50 dark:bg-surface-900/30 flex flex-col items-center justify-center gap-3 group"
              @click="triggerFileInput"
            >
              <input
                ref="pendingFileInput"
                type="file"
                multiple
                class="hidden"
                @change="handleFileSelect"
              />
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <i class="pi pi-upload text-primary text-sm"></i>
              </div>
              <div>
                <p class="text-xs font-bold text-surface-700 dark:text-surface-300">{{ $t('contract.edmUpload') }}</p>
                <p class="text-[10px] text-surface-400 mt-1">{{ $t('transaction.uploadFormats') }}</p>
              </div>
            </div>

            <!-- List of staged files -->
            <div v-if="pendingFiles.length > 0" class="space-y-2 max-h-52 overflow-y-auto pr-1">
              <div
                v-for="(file, idx) in pendingFiles"
                :key="idx"
                class="flex items-center justify-between px-3 py-2 bg-surface-50 dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-800"
              >
                <div class="flex items-center gap-2 min-w-0">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center" :class="getPendingFileIcon(file).bg">
                    <i class="pi text-xs" :class="getPendingFileIcon(file).icon"></i>
                  </div>
                  <div class="min-w-0">
                    <p class="text-xs font-bold text-surface-800 dark:text-surface-200 truncate">{{ file.name }}</p>
                    <p class="text-[9px] font-mono text-surface-400 mt-0.5">{{ formatFileSize(file.size) }}</p>
                  </div>
                </div>
                <Button
                  icon="pi pi-times"
                  severity="danger"
                  variant="text"
                  class="!w-7 !h-7 !rounded-lg"
                  @click="pendingFiles.splice(idx, 1)"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- FORM ACTION CARD -->
        <div class="bg-gradient-to-br from-primary/10 to-surface-50 dark:from-surface-900/50 dark:to-surface-950 p-6 rounded-3xl border border-primary/20 dark:border-surface-800 space-y-4">
          <div class="compliance-badge flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <i class="pi pi-shield animate-pulse"></i>
            <span class="text-[10px] font-black uppercase tracking-widest">{{ $t('contract.complianceBadge') }}</span>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-black text-surface-900 dark:text-surface-150">{{ $t('contract.complianceTitle') }}</h3>
            <p class="text-xs text-surface-500 leading-relaxed">{{ $t('contract.complianceDescCreate') }}</p>
          </div>

          <div class="pt-4 border-t border-surface-200 dark:border-surface-800 space-y-3">
            <Button
              :label="$t('btn.cancel')"
              severity="secondary"
              outlined
              class="w-full !rounded-xl !font-bold"
              @click="goBack"
            />
            <Button
              :label="$t('contract.submitContract')"
              icon="pi pi-check"
              severity="success"
              class="w-full !rounded-xl !font-bold"
              :loading="submitting"
              @click="saveContract"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { CREATE_CONTRACT } from '~/apis/contract';
import { UPLOAD_DOCUMENT } from '~/apis/document';
import { GET_EMPLOYEES, GET_EMPLOYEE } from '~/apis/employee';
import { showMessage } from "~/utils/global";
import { validateOnAllField, validateOnField } from '~/utils/validate';

const { t } = useI18n();
const route = useRoute();

const submitting = ref(false);
const employees = ref<any[]>([]);
const initEmployeeItem = ref<any>(null);

const getEmployeesApi = ({ query, successCallback, errorCallback }: any) => {
  const urlParams = new URLSearchParams(query);
  const params: Record<string, any> = {};
  urlParams.forEach((value, key) => {
    params[key] = value;
  });
  return GET_EMPLOYEES(params, successCallback, errorCallback);
};

// Staged files for EDM
const pendingFiles = ref<File[]>([]);
const pendingFileInput = ref<HTMLInputElement | null>(null);

// Form schema with all new columns
const contractForm = ref({
  employee_id: null,
  job_title: '',
  work_location: '',
  working_hours_per_day: 8.00,
  probation_salary_percentage: 85,
  bank_name: '',
  bank_account_number: '',

  partner_name: '',
  partner_tax_code: '',
  partner_representative: '',
  partner_representative_role: '',
  partner_address: '',
  payment_method: 'BANK_TRANSFER',
  payment_terms: '100% UPFRONT',
  billing_cycle: 'ONE_TIME',

  contract_code: '',
  type: 'LABOR',
  employment_type: 'SEISHAIN',
  is_36_agreement_applicable: false,
  overtime_allowance_included: false,
  included_overtime_hours: null,
  probation_period_months: 2,
  insurance_enrolled: 'BHXH, BHYT',
  sign_date: new Date(),
  start_date: new Date(),
  end_date: null,
  value: null,
  status: 'ACTIVE',
});

// Form error fields reactive object
const formErrors = ref<any>({
  employee_id: '',
  partner_name: '',
  partner_tax_code: '',
  sign_date: '',
  start_date: '',
  value: '',
  included_overtime_hours: '',
});

// Dynamic FIELD_VALIDATIONS computed
const FIELD_VALIDATIONS = computed(() => {
  const rules: any = {
    sign_date: { transitionKey: "contract.signDate", types: ["require"], errorKey: "sign_date" },
    start_date: { transitionKey: "contract.startDate", types: ["require"], errorKey: "start_date" },
    value: { transitionKey: "contract.value", types: ["require"], errorKey: "value" },
  };

  if (contractForm.value.type === 'LABOR') {
    rules.employee_id = { transitionKey: "contract.selectEmployee", types: ["require"], errorKey: "employee_id" };
    if (contractForm.value.overtime_allowance_included) {
      rules.included_overtime_hours = { transitionKey: "contract.includedOvertimeHours", types: ["require"], errorKey: "included_overtime_hours" };
    }
  } else {
    rules.partner_name = { transitionKey: "contract.partnerName", types: ["require"], errorKey: "partner_name" };
    rules.partner_tax_code = { transitionKey: "contract.partnerTaxCode", types: ["require"], errorKey: "partner_tax_code" };
  }

  return rules;
});

const onValidate = (field: string) => {
  validateOnField(field, contractForm.value, formErrors.value, FIELD_VALIDATIONS.value, t);
};

// Dropdowns
const typeOptions = computed(() => [
  { label: t('contract.typeLabor'), value: 'LABOR' },
  { label: t('contract.typeVendor'), value: 'VENDOR' },
  { label: t('contract.typeClient'), value: 'CLIENT' },
]);

const statusOptions = computed(() => [
  { label: t('contract.statusActive'), value: 'ACTIVE' },
  { label: t('contract.statusExpired'), value: 'EXPIRED' },
  { label: t('contract.statusTerminated'), value: 'TERMINATED' },
]);

const employmentTypeOptions = computed(() => [
  { label: t('contract.employmentSeishain'), value: 'SEISHAIN' },
  { label: t('contract.employmentKeiyakushain'), value: 'KEIYAKUSHAIN' },
  { label: t('contract.employmentHaken'), value: 'HAKEN' },
  { label: t('contract.employmentArubaito'), value: 'ARUBAITO' },
]);

const paymentMethodOptions = computed(() => [
  { label: t('contract.payBank'), value: 'BANK_TRANSFER' },
  { label: t('contract.payCash'), value: 'CASH' },
  { label: t('contract.payCredit'), value: 'CREDIT_CARD' },
]);

const billingCycleOptions = computed(() => [
  { label: t('contract.cycleMonthly'), value: 'MONTHLY' },
  { label: t('contract.cycleQuarterly'), value: 'QUARTERLY' },
  { label: t('contract.cycleOneTime'), value: 'ONE_TIME' },
]);

const employeeOptions = computed(() => {
  return employees.value.map(emp => ({
    id: emp.id,
    full_name: `${emp.full_name} (${emp.code || 'NV'})`,
  }));
});

// Load employees for select
const loadEmployees = () => {
  GET_EMPLOYEES(
    { limit: 100 },
    (res: any) => {
      employees.value = res?.data?.data?.data || res?.data?.data || [];
    },
    () => {}
  );
};

// EDM file staging triggers
const triggerFileInput = () => {
  pendingFileInput.value?.click();
};

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    Array.from(target.files).forEach(file => {
      if (file.size > 10 * 1024 * 1024) {
        showMessage('warn', t('contract.fileTooLarge'), t('contract.fileTooLargeDesc', { name: file.name }));
        return;
      }
      pendingFiles.value.push(file);
    });
  }
};

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const getPendingFileIcon = (file: File) => {
  const name = file.name.toLowerCase();
  if (name.endsWith('.pdf')) {
    return { icon: 'pi-file-pdf text-red-500', bg: 'bg-red-50 dark:bg-red-950/20' };
  } else if (name.endsWith('.doc') || name.endsWith('.docx')) {
    return { icon: 'pi-file-word text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/20' };
  } else if (name.endsWith('.xls') || name.endsWith('.xlsx')) {
    return { icon: 'pi-file-excel text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/20' };
  } else if (name.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return { icon: 'pi-image text-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/20' };
  }
  return { icon: 'pi-file text-surface-500', bg: 'bg-surface-50 dark:bg-surface-900' };
};

// Actions
const goBack = () => {
  navigateTo('/contract');
};

const saveContract = () => {
  // Clear old errors first
  Object.keys(formErrors.value).forEach(k => formErrors.value[k] = '');

  const isValid = validateOnAllField(contractForm.value, formErrors.value, FIELD_VALIDATIONS.value, t);
  if (!isValid) {
    showMessage('error', t('text.error'), t('text.errorInput'));
    return;
  }

  submitting.value = true;
  
  const formatDate = (d: any) => { if (!d) return null; const dt = new Date(d); if (isNaN(dt.getTime())) return d; return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`; };

  // Format payload
  const payload: any = { 
    ...contractForm.value,
    sign_date: formatDate(contractForm.value.sign_date),
    start_date: formatDate(contractForm.value.start_date),
    end_date: formatDate(contractForm.value.end_date)
  };
  if (payload.type !== 'LABOR') {
    payload.employee_id = null;
    payload.employment_type = null;
    payload.is_36_agreement_applicable = false;
    payload.overtime_allowance_included = false;
    payload.included_overtime_hours = null;
    payload.probation_period_months = 0;
    payload.insurance_enrolled = '';
    payload.job_title = '';
    payload.work_location = '';
    payload.working_hours_per_day = 0;
    payload.probation_salary_percentage = 0;
    payload.bank_name = '';
    payload.bank_account_number = '';
  } else {
    payload.partner_name = '';
    payload.partner_tax_code = '';
    payload.partner_representative = '';
    payload.partner_representative_role = '';
    payload.partner_address = '';
    payload.payment_method = '';
    payload.payment_terms = '';
    payload.billing_cycle = '';
  }

  CREATE_CONTRACT(
    payload,
    async (res: any) => {
      const contractId = res?.data?.data?.id || res?.data?.id || res?.id;
      
      // Batch upload pending files
      if (contractId && pendingFiles.value.length > 0) {
        showMessage('info', 'EDM', t('contract.edmUploading'));
        for (const file of pendingFiles.value) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('documentable_type', 'App\\Models\\Contract');
          formData.append('documentable_id', contractId.toString());
          
          await new Promise<void>((resolve) => {
            UPLOAD_DOCUMENT(
              formData,
              () => resolve(),
              () => resolve()
            );
          });
        }
      }

      showMessage('success', t('text.success'), t('contract.saveSuccessDesc'));
      submitting.value = false;
      goBack();
    },
    (err: any) => {
      submitting.value = false;
      showMessage('error', t('contract.saveError'), err?.response?.data?.messages?.[0] || err.message);
    }
  );
};

onMounted(() => {
  loadEmployees();
  if (route.query.employee_id) {
    const empId = Number(route.query.employee_id);
    contractForm.value.employee_id = empId as any;
    contractForm.value.type = 'LABOR';
    GET_EMPLOYEE(
      empId,
      (res: any) => {
        const emp = res?.data?.data || res?.data;
        if (emp) {
          initEmployeeItem.value = {
            id: emp.id,
            full_name: emp.full_name,
            code: emp.code
          };
        }
      },
      () => {}
    );
  }
});
</script>
