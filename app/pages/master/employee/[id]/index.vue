<template>
  <div class="mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-10">
    <!-- Header (Premium Glass) -->
    <div class="flex flex-col md:flex-row md:items-center justify-between bg-white/80 dark:bg-surface-900/80 backdrop-blur-xl p-6 rounded-3xl border border-white dark:border-surface-800 shadow-xl shadow-surface-200/20 gap-4">
      <div class="flex items-center gap-5">
        <div class="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center shadow-lg shadow-primary/30 rotate-2 hover:rotate-0 transition-transform duration-500 bg-gradient-to-tr from-primary to-emerald-400">
          <img v-if="employee?.avatar" :src="employee.avatar" class="w-full h-full object-cover" />
          <span v-else class="text-white font-black text-2xl font-mono">{{ getInitials(employee?.romaji_name || employee?.full_name) }}</span>
        </div>
        <div class="space-y-0.5">
          <div class="flex items-center gap-2.5">
            <h1 class="text-2xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
              {{ employee?.full_name }}
            </h1>
            <span 
              class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider"
              :class="[
                 employee?.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-600' : 
                 employee?.status === 'INACTIVE' ? 'bg-red-500/10 text-red-600' : 
                 'bg-amber-500/10 text-amber-600'
              ]"
            >
              {{ getStatusLabel(employee?.status) }}
            </span>
          </div>
          <p class="text-[10px] text-surface-400 font-black uppercase tracking-[0.2em] flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            {{ $t('employee.code') }}: {{ employee?.code || '-' }} • {{ $t('employee.role') }}: {{ getRoleLabel(employee?.role) }}
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <NuxtLink :to="`/master/employee/${route.params.id}/edit`">
          <Button icon="pi pi-pencil" :label="$t('employee.editTitle')" severity="warn" class="!rounded-xl !px-6 !py-3 !font-black !text-sm hover:scale-105 transition-transform" />
        </NuxtLink>
        <NuxtLink to="/master/employee">
          <Button icon="pi pi-arrow-left" :label="$t('btn.back')" severity="secondary" outlined class="!rounded-xl !px-5 !py-3 !font-bold !text-sm hover:!bg-surface-100 dark:hover:!bg-surface-800" />
        </NuxtLink>
      </div>
    </div>

    <div v-if="loading" class="flex justify-center py-20"><ProgressSpinner /></div>

    <template v-else-if="employee">
      <!-- Info Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left Side: Core Info & Bank Account -->
        <div class="lg:col-span-2 space-y-6">
          
          <!-- Personal Info -->
          <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 relative overflow-hidden group">
            <div class="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
            
            <div class="flex items-center gap-3 mb-8 relative z-10">
              <div class="w-1.5 h-6 bg-primary rounded-full"></div>
              <div>
                <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('employee.personalInfo') }}</h3>
                <p class="text-xs text-surface-400 font-medium">{{ $t('employee.personalInfoDesc') }}</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <InfoItem :label="$t('employee.fullName')" :value="employee.full_name" />
              <InfoItem :label="$t('employee.katakanaName')" :value="employee.full_name_kana" />
              <InfoItem :label="$t('employee.romajiName')" :value="employee.romaji_name" />
              <InfoItem :label="$t('employee.dateOfBirth')" :value="employee.date_of_birth" />
              <InfoItem :label="$t('employee.gender')" :value="employee.gender === 'MALE' ? $t('gender.male') : employee.gender === 'FEMALE' ? $t('gender.female') : employee.gender === 'OTHER' ? $t('gender.other') : '-'" />
              <InfoItem :label="$t('employee.phone')" :value="employee.phone" />
              <InfoItem :label="$t('employee.email')" :value="employee.email" />
              <InfoItem :label="$t('employee.hometown')" :value="employee.hometown" />
              <InfoItem :label="$t('employee.placeOfBirth')" :value="employee.place_of_birth" />
              <InfoItem :label="$t('employee.nationality')" :value="employee.nationality" />
              <InfoItem :label="$t('employee.ethnicity')" :value="employee.ethnicity" />
              <InfoItem :label="$t('employee.religion')" :value="employee.religion" />
              <InfoItem :label="$t('employee.joinDate')" :value="employee.join_date" />
              <div class="col-span-1 md:col-span-3 h-[1px] bg-surface-100 dark:bg-surface-800 my-2"></div>
              <InfoItem :label="$t('employee.registeredAddress')" class="col-span-1 md:col-span-3" :value="employee.address_registered" />
              <InfoItem :label="$t('employee.currentAddress')" class="col-span-1 md:col-span-3" :value="employee.address_current" />
            </div>
          </section>

          <!-- Banking Details -->
          <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 relative overflow-hidden group">
            <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
            
            <div class="flex items-center gap-3 mb-8 relative z-10">
              <div class="w-1.5 h-6 bg-primary rounded-full"></div>
              <div>
                <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('employee.bankInfo') }}</h3>
                <p class="text-xs text-surface-400 font-medium">{{ $t('employee.bankInfoDesc') }}</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <InfoItem :label="$t('employee.bankCode')" :value="employee.bank_code" />
              <InfoItem :label="$t('employee.bankBranch')" :value="employee.bank_branch_code" />
              <InfoItem :label="$t('employee.bankAccountType')" :value="employee.bank_account_type" />
              <InfoItem :label="$t('employee.bankAccountNumber')" :value="employee.bank_account_number" />
              <InfoItem :label="$t('employee.bankAccountHolder')" class="col-span-1 md:col-span-2" :value="employee.bank_account_holder_kana" />
            </div>
          </section>
        </div>

        <!-- Right Side: Business unit, Tax & Identity Metadata -->
        <div class="space-y-6">
          <!-- Organizational Unit -->
          <section class="bg-white dark:bg-surface-900 p-6 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 space-y-5">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-1.5 h-5 bg-primary rounded-full"></div>
              <h3 class="text-sm font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('employee.orgUnit') }}</h3>
            </div>
            
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-surface-100 dark:bg-surface-800 flex items-center justify-center text-primary">
                  <i class="pi pi-sitemap text-base"></i>
                </div>
                <div class="flex flex-col">
                  <span class="text-[9px] font-black text-surface-400 uppercase tracking-widest">{{ $t('employee.department') }}</span>
                  <span class="font-bold text-surface-800 dark:text-surface-100 text-sm mt-0.5">{{ employee.department?.name || '-' }}</span>
                  <span class="text-[10px] text-surface-400 font-mono mt-0.5">{{ employee.department?.code || '' }}</span>
                </div>
              </div>
              
              <div class="h-[1px] bg-surface-100 dark:bg-surface-800"></div>
              
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-surface-100 dark:bg-surface-800 flex items-center justify-center text-primary">
                  <i class="pi pi-briefcase text-base"></i>
                </div>
                <div class="flex flex-col">
                  <span class="text-[9px] font-black text-surface-400 uppercase tracking-widest">{{ $t('employee.jobTitle') }}</span>
                  <span class="font-bold text-surface-800 dark:text-surface-100 text-sm mt-0.5">{{ employee.job_title?.name || '-' }}</span>
                  <span class="text-[10px] text-surface-400 font-mono mt-0.5">{{ employee.job_title?.code || '' }}</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Tax & Identity Info -->
          <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 space-y-6">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-1.5 h-5 bg-primary rounded-full"></div>
              <h3 class="text-sm font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('employee.taxInsurance') }}</h3>
            </div>
            
            <div class="space-y-4">
              <InfoItem :label="$t('employee.identityType')" :value="employee.identity_number ? `${employee.identity_type}: ${employee.identity_number}` : '-'" />
              <InfoItem :label="$t('employee.zairyuExpiry')" :value="employee.zairyu_card_expiry || $t('employee.contractIndefinite')" />
              <InfoItem :label="$t('employee.taxCode')" :value="employee.tax_code" />
              <InfoItem :label="$t('employee.socialInsurance')" :value="employee.social_insurance_code" />
              <InfoItem :label="$t('employee.pensionNumber')" :value="employee.pension_number" />
              <InfoItem :label="$t('employee.employmentInsurance')" :value="employee.employment_insurance_number" />
              <InfoItem :label="$t('employee.dependentsCount')" :value="String(employee.dependents_count || 0) + ' ' + $t('btn.entries')" />
            </div>
          </section>
        </div>
      </div>

      <!-- Work History Table -->
      <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-3">
            <div class="w-1.5 h-6 bg-primary rounded-full"></div>
            <div>
              <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('employee.workHistory') }}</h3>
              <p class="text-xs text-surface-400 font-medium">{{ $t('employee.workHistoryDesc') }}</p>
            </div>
          </div>
        </div>

        <DataTable :value="employee.work_histories || []" stripedRows class="p-datatable-sm rounded-2xl overflow-hidden border border-surface-100 dark:border-surface-800">
          <template #empty>
            <div class="flex flex-col items-center py-10">
              <i class="pi pi-history text-4xl text-surface-300 mb-2"></i>
              <p class="text-surface-400 font-medium">{{ $t('employee.workHistoryEmpty') }}</p>
            </div>
          </template>
          <Column header="#">
            <template #body="{ index }">
              <span class="font-bold text-surface-500">{{ index + 1 }}</span>
            </template>
          </Column>
          <Column field="department.name" :header="$t('employee.department')" class="font-bold text-surface-800 dark:text-surface-200" />
          <Column field="job_title.name" :header="$t('employee.jobTitle')" />
          <Column :header="$t('employee.workHistoryStartDate')">
            <template #body="{ data }">
              <span>{{ formatDate(data.start_date) }}</span>
            </template>
          </Column>
          <Column :header="$t('employee.workHistoryEndDate')">
            <template #body="{ data }">
              <span>{{ data.end_date ? formatDate(data.end_date) : $t('employee.contractIndefinite') }}</span>
            </template>
          </Column>
          <Column :header="$t('employee.workHistorySalary')">
            <template #body="{ data }">
              <span class="font-black text-surface-900 dark:text-surface-100">
                {{ data.salary ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(data.salary) : '-' }}
              </span>
            </template>
          </Column>
          <Column field="note" :header="$t('employee.workHistoryNote')" />
        </DataTable>
      </section>

      <!-- Relatives Table -->
      <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-3">
            <div class="w-1.5 h-6 bg-primary rounded-full"></div>
            <div>
              <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('employee.relatives') }} ({{ employee.relatives?.length || 0 }})</h3>
              <p class="text-xs text-surface-400 font-medium">{{ $t('employee.relativesDesc') }}</p>
            </div>
          </div>
        </div>

        <DataTable :value="employee.relatives || []" stripedRows class="p-datatable-sm rounded-2xl overflow-hidden border border-surface-100 dark:border-surface-800">
          <template #empty>
            <div class="flex flex-col items-center py-10">
              <i class="pi pi-users text-4xl text-surface-300 mb-2"></i>
              <p class="text-surface-400 font-medium">{{ $t('employee.relativesEmpty') }}</p>
            </div>
          </template>
          <Column field="full_name" :header="$t('employee.relativeName')" class="font-bold text-surface-800 dark:text-surface-200" />
          <Column field="relationship" :header="$t('employee.relationship')">
            <template #body="{ data }">
              <span class="inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300">
                {{ relLabel(data.relationship) }}
              </span>
            </template>
          </Column>
          <Column field="phone" :header="$t('employee.phone')" />
          <Column field="email" :header="$t('employee.email')">
            <template #body="{ data }">
              <span class="text-surface-500 font-mono">{{ data.email || '-' }}</span>
            </template>
          </Column>
          <Column field="is_emergency_contact" :header="$t('employee.emergencyContact')" bodyClass="text-center" headerClass="justify-center">
            <template #body="{ data }">
              <div class="flex justify-center">
                <i v-if="data.is_emergency_contact" class="pi pi-check-circle text-emerald-500 text-lg" />
                <i v-else class="pi pi-minus text-surface-300" />
              </div>
            </template>
          </Column>
          <Column field="is_dependent" :header="$t('employee.isDependent')" bodyClass="text-center" headerClass="justify-center">
            <template #body="{ data }">
              <div class="flex justify-center">
                <i v-if="data.is_dependent" class="pi pi-check-circle text-blue-500 text-lg" />
                <i v-else class="pi pi-minus text-surface-300" />
              </div>
            </template>
          </Column>
        </DataTable>
      </section>

      <!-- Contracts Table -->
      <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-3">
            <div class="w-1.5 h-6 bg-primary rounded-full"></div>
            <div>
              <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('employee.contractListTitle') }}</h3>
              <p class="text-xs text-surface-400 font-medium">{{ $t('employee.contractListDesc') }}</p>
            </div>
          </div>
          <Button 
            icon="pi pi-bolt" 
            :label="$t('contract.quickSign') || 'Ký nhanh hợp đồng'" 
            severity="success" 
            class="!rounded-xl !px-4 !py-2 !text-xs !font-bold"
            :loading="quickSigning"
            @click="quickSignContract"
          />
        </div>

        <div v-if="!employee.contracts || employee.contracts.length === 0" class="flex flex-col items-center py-10 border border-dashed border-surface-200 dark:border-surface-800 rounded-3xl relative z-10 bg-white dark:bg-surface-950/60">
          <i class="pi pi-file text-4xl text-surface-300 mb-2"></i>
          <span class="text-sm text-surface-400 font-bold">{{ $t('employee.contractEmpty') }}</span>
        </div>

        <div v-else class="border border-surface-200 dark:border-surface-800 rounded-2xl overflow-hidden shadow-sm relative z-10 bg-white dark:bg-surface-950/60">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-surface-50 dark:bg-surface-950/60 text-xs font-bold text-surface-600 dark:text-surface-300 border-b border-surface-150 dark:border-surface-800 uppercase tracking-wider">
                <th class="p-4">{{ $t('employee.contractCode') }}</th>
                <th class="p-4">{{ $t('employee.contractType') }}</th>
                <th class="p-4">{{ $t('employee.contractDuration') }}</th>
                <th class="p-4">{{ $t('employee.contractSalary') }}</th>
                <th class="p-4">{{ $t('employee.contractStatus') }}</th>
                <th class="p-4 text-center">{{ $t('employee.contractAction') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-surface-100 dark:divide-surface-800 text-sm">
              <tr v-for="contract in employee.contracts" :key="contract.id" class="hover:bg-surface-50/50 dark:hover:bg-surface-950/20 transition-colors">
                <td class="p-4 font-mono font-bold text-primary">{{ contract.contract_code }}</td>
                <td class="p-4">
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300">
                    {{ contract.type }}
                  </span>
                </td>
                <td class="p-4 text-surface-500">
                  {{ formatDate(contract.start_date) }} ~ {{ contract.end_date ? formatDate(contract.end_date) : $t('employee.contractIndefinite') }}
                </td>
                <td class="p-4 font-black">
                  {{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(contract.value) }}
                </td>
                <td class="p-4">
                  <span :class="[
                    'px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase',
                    contract.status === 'ACTIVE' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'
                  ]">
                    {{ contract.status === 'ACTIVE' ? $t('employee.contractActive') : $t('employee.contractInactive') }}
                  </span>
                </td>
                <td class="p-4 text-center">
                  <div v-if="contract.documents && contract.documents.length > 0" class="flex justify-center gap-2">
                    <Button 
                      v-for="doc in contract.documents"
                      :key="doc.id"
                      icon="pi pi-download" 
                      severity="primary" 
                      text
                      rounded
                      size="small"
                      class="hover:scale-105"
                      v-tooltip.top="doc.title"
                      @click="downloadFile(doc)"
                    />
                  </div>
                  <span v-else class="text-xs text-surface-400 italic">{{ $t('employee.contractNoScan') }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Personal Documents Grid -->
      <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-1.5 h-6 bg-primary rounded-full"></div>
          <div>
            <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('employee.personalDocTitle') }}</h3>
            <p class="text-xs text-surface-400 font-medium">{{ $t('employee.personalDocDesc') }}</p>
          </div>
        </div>

        <div v-if="!employee.documents || employee.documents.length === 0" class="flex flex-col items-center py-16 border border-dashed border-surface-200 dark:border-surface-800 rounded-3xl bg-white dark:bg-surface-950/60">
          <i class="pi pi-folder text-5xl text-surface-300 mb-3"></i>
          <span class="text-sm text-surface-400 font-bold mb-1">{{ $t('employee.docEmptyTitle') }}</span>
          <span class="text-xs text-surface-400">{{ $t('employee.docEmptyDesc') }}</span>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          <div v-for="doc in employee.documents" :key="doc.id" class="p-4 bg-white dark:bg-surface-950/40 border border-surface-150 dark:border-surface-800 rounded-2xl flex items-center justify-between group hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
            <div class="flex items-center gap-3 w-[70%]">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center shadow-md bg-surface-50 dark:bg-surface-900 border border-surface-100 dark:border-surface-800 text-surface-500">
                <i class="pi text-xl" :class="getFileIcon(doc.extension)"></i>
              </div>
              <div class="overflow-hidden space-y-0.5">
                <span class="text-sm font-bold text-surface-700 dark:text-surface-100 block truncate" v-tooltip.bottom="doc.title">{{ doc.title }}</span>
                <span class="text-[10px] text-surface-400 block uppercase font-black tracking-wider">
                  {{ doc.extension }} • {{ (doc.filesize / 1024).toFixed(1) }} KB
                </span>
              </div>
            </div>
            <div class="flex items-center gap-1.5 relative z-10">
              <Button 
                icon="pi pi-eye" 
                severity="secondary" 
                text
                rounded
                class="!w-8 !h-8 hover:!bg-surface-100 dark:hover:!bg-surface-800" 
                v-tooltip.top="$t('employee.tooltipViewDoc')"
                @click="previewFile(doc)"
              />
              <Button 
                icon="pi pi-download" 
                severity="secondary" 
                text
                rounded
                class="!w-8 !h-8 hover:!bg-surface-100 dark:hover:!bg-surface-800" 
                v-tooltip.top="$t('employee.tooltipDownloadDoc')"
                @click="downloadFile(doc)"
              />
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, defineComponent, h } from 'vue';
import { useI18n } from 'vue-i18n';
import { showMessage } from '~/utils/global';
import { CREATE_CONTRACT } from '~/apis/contract';
import Api from "~/utils/api";

const InfoItem = defineComponent({
  props: { label: String, value: [String, Number] },
  setup(props) {
    return () => h('div', { class: 'flex flex-col' }, [
      h('span', { class: 'text-[10px] font-black text-surface-400 uppercase tracking-widest' }, props.label),
      h('span', { class: 'font-bold text-surface-800 dark:text-surface-100 mt-1 break-words' }, props.value || '-')
    ]);
  }
});

const route = useRoute();
const { t } = useI18n();
const { getEmployee } = useEmployee() as any;

const employee = ref<any>(null);
const loading = ref(true);
const quickSigning = ref(false);

const relLabel = (r: string) => {
  const map: Record<string, string> = { 
    SPOUSE: t('employee.relationshipSpouse'), 
    CHILD: t('employee.relationshipChild'), 
    PARENT: t('employee.relationshipParent'), 
    SIBLING: t('employee.relationshipSibling'), 
    OTHER: t('employee.relationshipOther') 
  };
  return map[r] || r;
};

const getStatusLabel = (status: string) => {
  const map: Record<string, string> = { 
    ACTIVE: t('employee.statusActive'), 
    INACTIVE: t('employee.statusInactive'), 
    PROBATION: t('employee.statusProbation') 
  };
  return map[status] || status;
};

const getRoleLabel = (role: string) => {
  const map: Record<string, string> = { 
    ADMIN: t('employee.roleAdmin'), 
    MANAGER: t('employee.roleManager'), 
    STAFF: t('employee.roleStaff') 
  };
  return map[role] || role;
};

const getInitials = (name?: string) => {
  if (!name) return 'EE';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const formatDate = (dateStr?: string) => {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString(t('locale') || 'vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' });
  } catch {
    return dateStr;
  }
};

const fetchEmployee = () => {
  loading.value = true;
  getEmployee({ 
    id: Number(route.params.id), 
    successCallback: (res: any) => { 
      employee.value = res.data?.data; 
      loading.value = false; 
    }, 
    errorCallback: () => { 
      loading.value = false; 
    } 
  });
};

const getFileIcon = (extension: string) => {
  if (!extension) return 'pi-file';
  extension = extension.toLowerCase();
  if (['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'].includes(extension)) return 'pi-image';
  if (['pdf'].includes(extension)) return 'pi-file-pdf';
  if (['doc', 'docx'].includes(extension)) return 'pi-file-word';
  if (['xls', 'xlsx'].includes(extension)) return 'pi-file-excel';
  return 'pi-file';
};

const previewFile = (doc: any) => {
  if (!doc.id) return;
  Api.get(`/documents/${doc.id}/download`, { responseType: 'blob' })
    .then((response: any) => {
      const file = new Blob([response.data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank');
    })
    .catch((err: any) => {
      showMessage('error', t('btn.error') || 'Lỗi', t('employee.viewError') || 'Không thể xem tài liệu.');
    });
};

const downloadFile = (doc: any) => {
  if (!doc.id) return;
  Api.get(`/documents/${doc.id}/download`, { responseType: 'blob' })
    .then((response: any) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', doc.origin_name || 'document.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch((err: any) => {
      showMessage('error', t('btn.error') || 'Lỗi', t('employee.downloadError') || 'Không thể tải tài liệu.');
    });
};

const quickSignContract = () => {
  if (!employee.value) return;
  quickSigning.value = true;
  
  const today = new Date();
  const formatDateStr = (d: Date) => {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  let initialSalary = 20000000;
  let initialJob = employee.value.job_title?.name || 'Nhân sự';
  
  if (employee.value.work_histories && employee.value.work_histories.length > 0) {
    const histories = [...employee.value.work_histories].sort((a: any, b: any) => {
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

  const joinDate = employee.value.join_date || formatDateStr(today);
  const code = employee.value.code || `EMP${employee.value.id}`;
  const year = today.getFullYear();
  const contractCode = `HDLD-${code}-${year}`;

  const payload = {
    employee_id: employee.value.id,
    contract_code: contractCode,
    type: 'LABOR',
    employment_type: 'SEISHAIN',
    job_title: initialJob,
    work_location: 'Văn phòng chính',
    working_hours_per_day: 8,
    probation_salary_percentage: 85,
    bank_name: employee.value.bank_code || 'Vietcombank',
    bank_account_number: employee.value.bank_account_number || '',
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
      fetchEmployee();
      quickSigning.value = false;
    },
    (err: any) => {
      quickSigning.value = false;
      showMessage('error', t('contract.saveError'), err?.response?.data?.messages?.[0] || err.message);
    }
  );
};

onMounted(fetchEmployee);
</script>
