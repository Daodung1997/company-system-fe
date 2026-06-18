<template>
  <div class="w-full px-4 sm:px-6 lg:w-[95%] lg:mx-auto xl:w-[92%] 2xl:w-[90%] space-y-6 animate-in fade-in duration-500 pb-10">
    <!-- Header Page with Back link and Edit button -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <Button
          icon="pi pi-arrow-left"
          severity="secondary"
          variant="text"
          class="!w-10 !h-10 !rounded-xl border border-surface-200 dark:border-surface-800 hover:bg-surface-50 dark:hover:bg-surface-900"
          @click="goBack"
        />
        <div>
          <span class="text-xs font-semibold text-primary uppercase tracking-widest">{{ $t('contract.viewDetails') }}</span>
          <h1 class="text-2xl font-black text-surface-900 dark:text-surface-0 mt-0.5">{{ contractForm.contract_code || '—' }}</h1>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <Button
          :label="$t('btn.edit')"
          icon="pi pi-pencil"
          severity="warning"
          class="!rounded-xl !px-5 !py-2.5 !font-bold !shadow-lg !shadow-warning/20"
          @click="goToEdit"
        />
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loadingContract" class="flex flex-col items-center justify-center py-20 bg-white dark:bg-surface-950 border border-surface-200 dark:border-surface-700 rounded-xl">
      <i class="pi pi-spin pi-spinner text-3xl text-primary mb-3"></i>
      <span class="text-surface-500 font-medium">{{ $t('contract.loadingData') }}</span>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left side: Contract Information Cards (2 cols) -->
      <div class="lg:col-span-2 space-y-6">
        
        <!-- SECTION: COMPANY DETAILS (BÊN A) -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-5">
          <div class="flex items-center gap-2.5 border-b border-surface-100 dark:border-surface-850 pb-4">
            <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <i class="pi pi-building text-lg"></i>
            </div>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('contract.companySection') }}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <div class="flex flex-col gap-1.5 md:col-span-2">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.companyNameLabel') }}</span>
              <span class="text-xs font-bold text-surface-800 dark:text-surface-200">{{ contractForm.company_name || '—' }}</span>
            </div>

            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.companyTaxCodeLabel') }}</span>
              <span class="text-xs font-mono font-bold text-surface-700 dark:text-surface-300">{{ contractForm.company_tax_code || '—' }}</span>
            </div>

            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.companyAddressLabel') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">{{ contractForm.company_address || '—' }}</span>
            </div>

            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.companyRepresentativeLabel') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">{{ contractForm.company_representative || '—' }}</span>
            </div>

            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.companyRepresentativeRoleLabel') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">{{ contractForm.company_representative_role || '—' }}</span>
            </div>
          </div>
        </div>

        <!-- SECTION 1: GENERAL CONTRACT INFO -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-5">
          <div class="flex items-center gap-2.5 border-b border-surface-100 dark:border-surface-850 pb-4">
            <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <i class="pi pi-file text-lg"></i>
            </div>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('contract.generalInfo') }}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <!-- Type -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.type') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ getContractTypeLabel(contractForm.type) }}
              </span>
            </div>

            <!-- Contract Code -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.code') }}</span>
              <span class="text-xs font-mono font-bold text-surface-800 dark:text-surface-200">
                {{ contractForm.contract_code || '—' }}
              </span>
            </div>

            <!-- Sign Date -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.signDate') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ formatDate(contractForm.sign_date) }}
              </span>
            </div>

            <!-- Start Date -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.startDate') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ formatDate(contractForm.start_date) }}
              </span>
            </div>

            <!-- End Date -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.endDate') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ formatDate(contractForm.end_date) }}
              </span>
            </div>

            <!-- Contract Value / Salary -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">
                {{ contractForm.type === 'LABOR' ? $t('contract.baseSalary') : $t('contract.totalValue') }}
              </span>
              <span class="text-xs font-mono font-bold text-primary">
                {{ formatCurrency(contractForm.value) }}
              </span>
            </div>

            <!-- Status -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.status') }}</span>
              <div>
                <span
                  class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider inline-block"
                  :class="[
                    contractForm.status === 'ACTIVE' ? 'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400' :
                    contractForm.status === 'EXPIRED' ? 'bg-amber-100 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400' :
                    'bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400'
                  ]"
                >
                  {{ getStatusLabel(contractForm.status) }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 2: DYNAMIC BÊN B DETAILS -->
        <!-- IF LABOR: EMPLOYEE DETAILS -->
        <div v-if="contractForm.type === 'LABOR'" class="bg-white dark:bg-surface-950 p-6 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-5">
          <div class="flex items-center gap-2.5 border-b border-surface-100 dark:border-surface-850 pb-4">
            <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <i class="pi pi-user text-lg"></i>
            </div>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('contract.laborSection') }}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <!-- Selected Employee -->
            <div class="flex flex-col gap-1.5 md:col-span-2">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.selectEmployee') }}</span>
              <div v-if="employeeDetails" class="flex items-center gap-3 bg-surface-50 dark:bg-surface-900/50 p-3 rounded-2xl border border-surface-200 dark:border-surface-700/80 w-fit pr-6">
                <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {{ String(employeeDetails.full_name || '').slice(0, 2).toUpperCase() }}
                </div>
                <div class="flex flex-col">
                  <span class="text-xs font-bold text-surface-800 dark:text-surface-200">{{ employeeDetails.full_name }}</span>
                  <span class="text-[10px] text-surface-400 font-mono font-semibold">{{ employeeDetails.code }} | {{ employeeDetails.email }}</span>
                </div>
              </div>
              <span v-else class="text-xs font-bold text-surface-500">—</span>
            </div>

            <!-- Employment Type -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.employmentType') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ getEmploymentTypeLabel(contractForm.employment_type) }}
              </span>
            </div>

            <!-- Job Title -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.jobTitle') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ contractForm.job_title || '—' }}
              </span>
            </div>

            <!-- Work Location -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.workLocation') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ contractForm.work_location || '—' }}
              </span>
            </div>

            <!-- Working hours/day -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.workingHours') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ contractForm.working_hours_per_day ? `${contractForm.working_hours_per_day} giờ/ngày` : '—' }}
              </span>
            </div>

            <!-- Probation Period -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.probationPeriod') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ contractForm.probation_period_months ? `${contractForm.probation_period_months} tháng` : '0 tháng' }}
              </span>
            </div>

            <!-- Probation Salary -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.probationSalary') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ contractForm.probation_salary_percentage ? `${contractForm.probation_salary_percentage}%` : '—' }}
              </span>
            </div>

            <!-- Bank Name -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.bankName') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ contractForm.bank_name || '—' }}
              </span>
            </div>

            <!-- Bank Account -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.bankAccount') }}</span>
              <span class="text-xs font-mono font-bold text-surface-700 dark:text-surface-300">
                {{ contractForm.bank_account_number || '—' }}
              </span>
            </div>

            <!-- Insurance Enrolled -->
            <div class="flex flex-col gap-1.5 md:col-span-2">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.insurance') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ contractForm.insurance_enrolled || '—' }}
              </span>
            </div>
          </div>
        </div>

        <!-- IF VENDOR or CLIENT: PARTNER DETAILS -->
        <div v-else class="bg-white dark:bg-surface-950 p-6 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-5">
          <div class="flex items-center gap-2.5 border-b border-surface-100 dark:border-surface-850 pb-4">
            <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <i class="pi pi-building text-lg"></i>
            </div>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('contract.partnerSection') }}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <!-- Partner Name -->
            <div class="flex flex-col gap-1.5 md:col-span-2">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.partnerName') }}</span>
              <span class="text-xs font-bold text-surface-800 dark:text-surface-200">
                {{ contractForm.partner_name || '—' }}
              </span>
            </div>

            <!-- Partner Tax Code -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.partnerTaxCode') }}</span>
              <span class="text-xs font-mono font-bold text-surface-700 dark:text-surface-300">
                {{ contractForm.partner_tax_code || '—' }}
              </span>
            </div>

            <!-- Representative -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.partnerRepresentative') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ contractForm.partner_representative || '—' }}
              </span>
            </div>

            <!-- Representative Role -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.partnerRepresentativeRole') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ contractForm.partner_representative_role || '—' }}
              </span>
            </div>

            <!-- Address -->
            <div class="flex flex-col gap-1.5 md:col-span-2">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.partnerAddress') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ contractForm.partner_address || '—' }}
              </span>
            </div>

            <!-- Payment Method -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.paymentMethod') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ getPaymentMethodLabel(contractForm.payment_method) }}
              </span>
            </div>

            <!-- Payment Terms -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.paymentTerms') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ contractForm.payment_terms || '—' }}
              </span>
            </div>

            <!-- Billing Cycle -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.billingCycle') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ getBillingCycleLabel(contractForm.billing_cycle) }}
              </span>
            </div>
          </div>
        </div>

        <!-- SECTION 3: JAPANESE COMPLIANCE OVERTIME (ONLY FOR LABOR) -->
        <div v-if="contractForm.type === 'LABOR'" class="bg-white dark:bg-surface-950 p-6 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-5">
          <div class="flex items-center gap-2.5 border-b border-surface-100 dark:border-surface-850 pb-4">
            <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <i class="pi pi-shield text-lg"></i>
            </div>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('contract.overtimeSection') }}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <!-- 36 Agreement -->
            <div class="flex items-center gap-2">
              <i class="pi" :class="contractForm.is_36_agreement_applicable ? 'pi-check-circle text-emerald-500' : 'pi-times-circle text-surface-400'"></i>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ $t('contract.agreement36') }}
              </span>
            </div>

            <!-- Overtime Allowance Included -->
            <div class="flex items-center gap-2">
              <i class="pi" :class="contractForm.overtime_allowance_included ? 'pi-check-circle text-emerald-500' : 'pi-times-circle text-surface-400'"></i>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ $t('contract.overtimeAllowance') }}
              </span>
            </div>

            <!-- Included Overtime Hours -->
            <div v-if="contractForm.overtime_allowance_included" class="flex flex-col gap-1.5 md:col-span-2">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('contract.includedOvertimeHours') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ contractForm.included_overtime_hours ? `${contractForm.included_overtime_hours} giờ` : '—' }}
              </span>
            </div>
          </div>
        </div>

        <!-- EDM APP DOCUMENT MANAGER (READ ONLY VIEW) -->
        <div class="bg-white dark:bg-surface-950 p-8 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-5">
          <div class="flex items-center gap-2.5 border-b border-surface-100 dark:border-surface-850 pb-4">
            <div class="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <i class="pi pi-paperclip text-lg"></i>
            </div>
            <div>
              <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200 m-0">{{ $t('contract.edmSection') }}</h2>
              <p class="text-[10px] text-surface-500 mt-0.5">{{ $t('contract.edmReadonly') }}</p>
            </div>
          </div>

          <AppDocumentManager
            :key="contractId"
            documentableType="App\Models\Contract"
            :documentableId="contractId"
            v-model:documents="contractForm.documents"
            :readonly="true"
          />
        </div>
      </div>

      <!-- Right side: Compliance Info Card (1 col) -->
      <div class="space-y-6">
        <!-- COMPLIANCE CARD -->
        <div class="bg-gradient-to-br from-primary/10 to-surface-50 dark:from-surface-900/50 dark:to-surface-950 p-6 rounded-xl border border-primary/20 dark:border-surface-800 space-y-4">
          <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <i class="pi pi-shield"></i>
            <span class="text-[10px] font-black uppercase tracking-widest">{{ $t('contract.complianceBadge') }}</span>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-black text-surface-900 dark:text-surface-150">{{ $t('contract.complianceTitle') }}</h3>
            <p class="text-xs text-surface-500 leading-relaxed">{{ $t('contract.complianceDescView') }}</p>
          </div>

          <div class="pt-4 border-t border-surface-200 dark:border-surface-800 space-y-3">
            <Button
              :label="$t('btn.back')"
              severity="secondary"
              outlined
              class="w-full !rounded-xl !font-bold"
              @click="goBack"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { GET_CONTRACT } from '~/apis/contract';
import { showMessage } from "~/utils/global";
import AppDocumentManager from '~/components/common/AppDocumentManager.vue';

const { t } = useI18n();
const route = useRoute();
const contractId = Number(route.params.id);

const loadingContract = ref(true);
const employeeDetails = ref<any>(null);

const contractForm = ref<any>({
  contract_code: '',
  type: 'LABOR',
  company_id: null,
  company_name: '',
  company_tax_code: '',
  company_address: '',
  company_representative: '',
  company_representative_role: '',
  sign_date: '',
  start_date: '',
  end_date: '',
  value: null,
  status: 'ACTIVE',
  employment_type: 'SEISHAIN',
  job_title: '',
  work_location: '',
  working_hours_per_day: null,
  probation_period_months: null,
  probation_salary_percentage: null,
  bank_name: '',
  bank_account_number: '',
  insurance_enrolled: '',
  partner_name: '',
  partner_tax_code: '',
  partner_representative: '',
  partner_representative_role: '',
  partner_address: '',
  payment_method: '',
  payment_terms: '',
  billing_cycle: '',
  is_36_agreement_applicable: false,
  overtime_allowance_included: false,
  included_overtime_hours: null,
  documents: [],
});

const goBack = () => {
  navigateTo('/contract');
};

const goToEdit = () => {
  navigateTo(`/contract/${contractId}/edit`);
};

// Fetch current contract details
const fetchContractDetails = () => {
  loadingContract.value = true;
  GET_CONTRACT(
    contractId,
    (res: any) => {
      const data = res?.data?.data || res?.data || res;
      if (data) {
        if (data.employee) {
          employeeDetails.value = data.employee;
        }
        contractForm.value = {
          ...data,
          is_36_agreement_applicable: !!data.is_36_agreement_applicable,
          overtime_allowance_included: !!data.overtime_allowance_included,
          documents: data.documents || [],
        };
      }
      loadingContract.value = false;
    },
    (err: any) => {
      loadingContract.value = false;
      showMessage('error', t('contract.loadError'), err.message);
      goBack();
    }
  );
};

// Formatting and Translation Helpers
const formatCurrency = (val: any) => {
  if (!val) return '0 ₫';
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
};

const formatDate = (dateStr: any) => {
  if (!dateStr) return '—';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const getContractTypeLabel = (type: string) => {
  switch (type) {
    case 'LABOR': return t('contract.typeLabor');
    case 'VENDOR': return t('contract.typeVendor');
    case 'CLIENT': return t('contract.typeClient');
    default: return type;
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'ACTIVE': return t('contract.statusActive');
    case 'EXPIRED': return t('contract.statusExpired');
    case 'TERMINATED': return t('contract.statusTerminated');
    default: return status;
  }
};

const getEmploymentTypeLabel = (type: string) => {
  switch (type) {
    case 'SEISHAIN': return t('contract.employmentSeishain');
    case 'KEIYAKUSHAIN': return t('contract.employmentKeiyakushain');
    case 'HAKEN': return t('contract.employmentHaken');
    case 'ARUBAITO': return t('contract.employmentArubaito');
    default: return type;
  }
};

const getPaymentMethodLabel = (method: string) => {
  switch (method) {
    case 'BANK_TRANSFER': return t('contract.payBank');
    case 'CASH': return t('contract.payCash');
    case 'CREDIT_CARD': return t('contract.payCredit');
    default: return method || '—';
  }
};

const getBillingCycleLabel = (cycle: string) => {
  switch (cycle) {
    case 'MONTHLY': return t('contract.cycleMonthly');
    case 'QUARTERLY': return t('contract.cycleQuarterly');
    case 'ONE_TIME': return t('contract.cycleOneTime');
    default: return cycle || '—';
  }
};

onMounted(() => {
  fetchContractDetails();
});
</script>
