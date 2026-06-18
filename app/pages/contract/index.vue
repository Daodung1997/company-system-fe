<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700  shadow-md">
      <div class="flex items-center gap-5">
        <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
          <i class="pi pi-file-pdf text-2xl"></i>
        </div>
        <div class="space-y-1">
          <h1 class="text-3xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ $t('contract.manageTitle') }}
          </h1>
          <p class="text-sm text-surface-500 dark:text-surface-400 font-medium">
            {{ $t('contract.manageDesc') }}
          </p>
        </div>
      </div>
      <div>
        <Button
          :label="$t('contract.signNew')"
          icon="pi pi-plus"
          severity="primary"
          class="!rounded-xl !px-6 !py-3 !shadow-lg !shadow-primary/25 !font-bold"
          @click="navigateTo('/contract/create')"
        />
      </div>
    </div>

    <!-- Quick Stats Overview Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm flex items-center justify-between">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-surface-400">{{ $t('contract.typeLabor') }}</span>
          <h3 class="text-2xl font-black text-surface-900 dark:text-surface-0">{{ stats.laborCount }}</h3>
        </div>
        <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
          <i class="pi pi-users text-lg"></i>
        </div>
      </div>
      <div class="bg-white dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm flex items-center justify-between">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-surface-400">{{ $t('contract.typeCommercial') }}</span>
          <h3 class="text-2xl font-black text-surface-900 dark:text-surface-0">{{ stats.commercialCount }}</h3>
        </div>
        <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
          <i class="pi pi-briefcase text-lg"></i>
        </div>
      </div>
      <div class="bg-white dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm flex items-center justify-between">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-surface-400">{{ $t('contract.totalValue') }}</span>
          <h3 class="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">{{ formatCurrency(stats.totalValue) }}</h3>
        </div>
        <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
          <i class="pi pi-dollar text-lg"></i>
        </div>
      </div>
    </div>

    <!-- Filter & Main Tabs Panel -->
    <div class="bg-white dark:bg-surface-900 p-8 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm space-y-6">
      <!-- Tabs header & Filters grid -->
      <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-6 border-b border-surface-200 dark:border-surface-700 pb-6">
        <!-- Inner Category Tabs -->
        <div class="flex bg-surface-100 dark:bg-surface-900 p-1.5 rounded-2xl max-w-full overflow-x-auto whitespace-nowrap scrollbar-none">
          <button
            v-for="tab in tabOptions"
            :key="tab.value"
            class="px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shrink-0"
            :class="[
              activeTab === tab.value
                ? 'bg-white dark:bg-surface-900 text-primary shadow-md'
                : 'text-surface-500 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-200'
            ]"
            @click="activeTab = tab.value"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Filters form -->
        <div class="flex flex-wrap items-center gap-4">
          <div class="relative group w-full sm:w-[260px]">
            <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
            <InputText
              v-model="filters.q"
              :placeholder="$t('contract.searchPlaceholder')"
              class="w-full !rounded-xl !pl-11"
            />
          </div>

          <Select
            v-model="filters.type"
            :options="typeFilterOptions"
            optionLabel="label"
            optionValue="value"
            :placeholder="$t('contract.typeSelect')"
            class="w-full sm:w-[180px] !rounded-xl"
            showClear
          />

          <Select
            v-model="filters.status"
            :options="statusFilterOptions"
            optionLabel="label"
            optionValue="value"
            :placeholder="$t('contract.statusSelect')"
            class="w-full sm:w-[150px] !rounded-xl"
            showClear
          />

          <Button
            icon="pi pi-refresh"
            severity="secondary"
            outlined
            class="!rounded-xl !w-11 !h-11"
            @click="resetFilters"
          />
        </div>
      </div>

      <!-- Modern Data Table -->
      <BaseDataTable
        :columns="columns"
        :fetchApi="fetchContractsWrapper"
        :filters="filters"
        :isReload="isReload"
        :emptyText="$t('contract.noData')"
        scrollHeight="58vh"
      >
        <template #body="{ column, data }">
          <!-- Mã Hợp Đồng -->
          <template v-if="column.key === 'contract_code'">
            <span class="font-mono font-bold text-surface-900 dark:text-surface-100 text-sm">
              {{ data.contract_code }}
            </span>
          </template>

          <!-- Loại Hợp Đồng -->
          <template v-else-if="column.key === 'type'">
            <span
              class="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider"
              :class="[
                data.type === 'LABOR' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' :
                data.type === 'VENDOR' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' :
                'bg-purple-500/10 text-purple-600 dark:text-purple-400'
              ]"
            >
              {{ getContractTypeLabel(data.type) }}
            </span>
          </template>

          <!-- Đối tác / Nhân sự -->
          <template v-else-if="column.key === 'partner'">
            <div v-if="data.type === 'LABOR'" class="flex items-center gap-3">
              <div v-if="data.employee" class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  {{ getInitials(data.employee?.full_name) }}
                </div>
                <div class="flex flex-col">
                  <span class="text-xs font-bold text-surface-850 dark:text-surface-200 leading-none">
                    {{ data.employee?.full_name }}
                  </span>
                  <span class="text-[9px] font-mono text-surface-400 mt-1">
                    {{ data.employee?.code || 'NV-000' }}
                  </span>
                </div>
              </div>
              <div v-else class="text-xs font-semibold text-surface-400">
                {{ $t('contract.noEmployee') }}
              </div>
            </div>
            <div v-else class="text-xs font-bold text-surface-500">
              <i class="pi pi-building mr-1"></i> {{ $t('contract.corporatePartner') }}
            </div>
          </template>

          <!-- Thời hạn -->
          <template v-else-if="column.key === 'duration'">
            <span class="text-xs font-semibold text-surface-600 dark:text-surface-450 font-mono">
              {{ formatDate(data.start_date) }} ~ {{ data.end_date ? formatDate(data.end_date) : $t('contract.indefinite') }}
            </span>
          </template>

          <!-- Giá trị -->
          <template v-else-if="column.key === 'value'">
            <span class="font-mono text-xs font-bold text-surface-800 dark:text-surface-200">
              {{ data.value ? formatCurrency(data.value) : '—' }}
            </span>
          </template>

          <!-- Trạng thái -->
          <template v-else-if="column.key === 'status'">
            <span
              class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
              :class="[
                data.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                data.status === 'EXPIRED' ? 'bg-surface-500/10 text-surface-600 dark:text-surface-400' :
                data.status === 'TERMINATED' ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400' :
                'bg-amber-500/10 text-amber-600 dark:text-amber-400'
              ]"
            >
              <span
                class="w-1.5 h-1.5 rounded-full mr-2"
                :class="[
                  data.status === 'ACTIVE' ? 'bg-emerald-500 animate-pulse' :
                  data.status === 'EXPIRED' ? 'bg-surface-500' :
                  data.status === 'TERMINATED' ? 'bg-rose-500' :
                  'bg-amber-500'
                ]"
              ></span>
              {{ getStatusLabel(data.status) }}
            </span>
          </template>

          <!-- Tài liệu -->
          <template v-else-if="column.key === 'documents'">
            <div v-if="data.documents && data.documents.length > 0" class="flex items-center justify-center gap-1.5">
              <button
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-bold text-xs transition-all duration-200 cursor-pointer border border-primary/20 hover:border-primary/40 group"
                @click="openDocumentViewer(data)"
              >
                <i class="pi pi-paperclip text-xs group-hover:rotate-12 transition-transform"></i>
                <span class="font-mono">{{ data.documents.length }}</span>
                <span class="text-[9px] uppercase tracking-wider opacity-80">{{ $t('contract.files') }}</span>
              </button>
            </div>
            <span v-else class="text-surface-300 text-xs">—</span>
          </template>

          <!-- Thao tác -->
          <template v-else-if="column.key === 'actions'">
            <div class="flex items-center justify-end gap-1">
              <Button
                icon="pi pi-eye"
                severity="info"
                variant="text"
                class="!w-9 !h-9 !rounded-xl"
                v-tooltip.top="$t('text.viewDetail')"
                @click="navigateTo(`/contract/${data.id}`)"
              />
              <Button
                icon="pi pi-file-pdf"
                severity="info"
                variant="text"
                class="!w-9 !h-9 !rounded-xl !text-emerald-500 hover:!text-emerald-600 dark:!text-emerald-400"
                v-tooltip.top="$t('contract.exportPdf')"
                :loading="downloadingPdfId === data.id"
                @click="exportContractPdf(data)"
              />
              <Button
                icon="pi pi-pencil"
                severity="warn"
                variant="text"
                class="!w-9 !h-9 !rounded-xl"
                v-tooltip.top="$t('text.edit')"
                @click="navigateTo(`/contract/${data.id}/edit`)"
              />
              <Button
                icon="pi pi-trash"
                severity="danger"
                variant="text"
                class="!w-9 !h-9 !rounded-xl"
                v-tooltip.top="$t('btn.delete')"
                @click="confirmDeleteDialog(data)"
              />
            </div>
          </template>
        </template>
      </BaseDataTable>
    </div>



    <!-- PDF Theme Selection Dialog -->
    <Dialog v-model:visible="showPdfThemeDialog" :modal="true" :closable="true" :header="$t('contract.exportPdfStyle')" class="!rounded-xl overflow-hidden" :style="{ width: '560px' }">
      <div class="space-y-4 p-2">
        <p class="text-xs text-surface-500 font-medium">{{ $t('contract.exportPdfDesc') }}</p>
        
        <div class="grid grid-cols-1 gap-3">
          <!-- Classic Card -->
          <div 
            class="flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all hover:border-primary/50"
            :class="selectedPdfTheme === 'classic' ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-surface-200 dark:border-surface-700 bg-surface-50/50 dark:bg-surface-950/20'"
            @click="selectedPdfTheme = 'classic'"
          >
            <div class="w-10 h-10 rounded-xl bg-surface-200/50 dark:bg-surface-800 flex items-center justify-center text-surface-750 dark:text-surface-300">
              <i class="pi pi-bookmark text-lg"></i>
            </div>
            <div class="flex-1 space-y-1">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sm text-surface-900 dark:text-surface-0">{{ $t('contract.styleClassic') }}</span>
                <span v-if="selectedPdfTheme === 'classic'" class="text-xs font-black text-primary flex items-center gap-1"><i class="pi pi-check-circle"></i> {{ $t('contract.selected') }}</span>
              </div>
              <p class="text-xs text-surface-450 leading-relaxed">{{ $t('contract.styleClassicDesc') }}</p>
            </div>
          </div>

          <!-- Modern Card -->
          <div 
            class="flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all hover:border-primary/50"
            :class="selectedPdfTheme === 'modern' ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-surface-200 dark:border-surface-700 bg-surface-50/50 dark:bg-surface-950/20'"
            @click="selectedPdfTheme = 'modern'"
          >
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <i class="pi pi-bolt text-lg"></i>
            </div>
            <div class="flex-1 space-y-1">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sm text-surface-900 dark:text-surface-0">{{ $t('contract.styleModern') }}</span>
                <span v-if="selectedPdfTheme === 'modern'" class="text-xs font-black text-primary flex items-center gap-1"><i class="pi pi-check-circle"></i> {{ $t('contract.selected') }}</span>
              </div>
              <p class="text-xs text-surface-450 leading-relaxed">{{ $t('contract.styleModernDesc') }}</p>
            </div>
          </div>

          <!-- Academic Card -->
          <div 
            class="flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all hover:border-primary/50"
            :class="selectedPdfTheme === 'academic' ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-surface-200 dark:border-surface-700 bg-surface-50/50 dark:bg-surface-950/20'"
            @click="selectedPdfTheme = 'academic'"
          >
            <div class="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-600 dark:text-violet-400">
              <i class="pi pi-sparkles text-lg"></i>
            </div>
            <div class="flex-1 space-y-1">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sm text-surface-900 dark:text-surface-0">{{ $t('contract.styleAcademic') }}</span>
                <span v-if="selectedPdfTheme === 'academic'" class="text-xs font-black text-primary flex items-center gap-1"><i class="pi pi-check-circle"></i> {{ $t('contract.selected') }}</span>
              </div>
              <p class="text-xs text-surface-450 leading-relaxed">{{ $t('contract.styleAcademicDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3 px-4 pb-2">
          <Button :label="$t('btn.cancel')" severity="secondary" outlined @click="showPdfThemeDialog = false" class="!rounded-xl" />
          <Button :label="$t('contract.downloadPdf')" icon="pi pi-download" severity="primary" @click="doExportContractPdf" class="!rounded-xl !shadow-lg !shadow-primary/20" :loading="downloadingPdf" />
        </div>
      </template>
    </Dialog>

    <!-- Delete Confirmation Dialog -->
    <Dialog v-model:visible="showDeleteDialog" :modal="true" :closable="true" :header="$t('text.confirmDelete')" class="!rounded-xl" :style="{ width: '450px' }">
      <div class="flex items-start gap-4 p-4">
        <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center text-rose-500 flex-shrink-0">
          <i class="pi pi-exclamation-triangle text-xl"></i>
        </div>
        <div>
          <h3 class="font-black text-surface-900 dark:text-surface-0 text-lg">{{ $t('contract.deleteConfirmTitle') }}</h3>
          <p class="text-sm text-surface-500 mt-2">
            {{ $t('contract.deleteConfirmDesc', { code: deleteTarget?.contract_code }) }}
          </p>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3 px-4 pb-2">
          <Button :label="$t('btn.cancel')" severity="secondary" outlined @click="showDeleteDialog = false" class="!rounded-xl" />
          <Button :label="$t('btn.delete')" severity="danger" @click="doDeleteContract" class="!rounded-xl" :loading="deleting" />
        </div>
      </template>
    </Dialog>

    <!-- Document Viewer Dialog -->
    <Dialog
      v-model:visible="showDocViewer"
      :header="$t('contract.documents') + ' — ' + (docViewerContract?.contract_code || '')"
      :modal="true"
      :style="{ width: '800px' }"
      class="!rounded-xl overflow-hidden"
      :breakpoints="{'960px': '80vw', '640px': '95vw'}"
    >
      <div class="p-2">
        <AppDocumentManager
          v-if="docViewerContract"
          documentableType="App\Models\Contract"
          :documentableId="docViewerContract.id"
          :documents="docViewerContract.documents || []"
          :readonly="true"
        />
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import BaseDataTable from '~/components/common/BaseDataTable.vue';
import { GET_CONTRACTS, CREATE_CONTRACT, UPDATE_CONTRACT, DELETE_CONTRACT } from '~/apis/contract';
import { UPLOAD_DOCUMENT } from '~/apis/document';
import { GET_EMPLOYEES } from '~/apis/employee';
import { useApiStore } from "~/stores/api";
import { showMessage } from "~/utils/global";
import Api from "~/utils/api";

const apiStore = useApiStore();
const { t } = useI18n();

const loading = ref(false);
const submitting = ref(false);
const displayDialog = ref(false);
const isEditMode = ref(false);
const activeTab = ref('ALL');
const showDeleteDialog = ref(false);
const deleteTarget = ref<any>(null);
const deleting = ref(false);

const contracts = ref<any[]>([]);
const employees = ref<any[]>([]);
const editingContractId = ref<number | null>(null);

const isReload = ref(false);

const columns = computed(() => [
  { key: 'contract_code', label: t('contract.code'), minWidth: '130px', sortable: true },
  { key: 'type', label: t('contract.type'), minWidth: '120px' },
  { key: 'partner', label: t('contract.party'), minWidth: '220px' },
  { key: 'duration', label: t('contract.duration'), minWidth: '200px' },
  { key: 'value', label: t('contract.value'), minWidth: '140px' },
  { key: 'status', label: t('contract.status'), minWidth: '130px' },
  { key: 'documents', label: t('contract.documents'), minWidth: '110px' },
  { key: 'actions', label: t('text.action'), minWidth: '130px', frozen: true }
]);

const fetchContractsWrapper = (payload: { query: string, successCallback: Function, errorCallback: Function }) => {
  const params = Object.fromEntries(new URLSearchParams(payload.query));
  
  const apiParams: any = {};
  const q = params['filters[q]'] || '';
  const status = params['filters[status]'] || '';
  const type = params['filters[type]'] || '';
  
  if (q) apiParams.q = q;
  if (status) apiParams.status = status;
  if (type) apiParams.type = type;
  
  if (activeTab.value === 'LABOR') {
    apiParams.type = 'LABOR';
  } else if (activeTab.value === 'COMMERCIAL') {
    // Sẽ filter offline ở Frontend bên dưới
  }

  return GET_CONTRACTS(
    apiParams,
    (res: any) => {
      let rawList = res.data?.data || res.data || [];
      
      // Đồng bộ contracts cho computed stats và pdf download
      contracts.value = [...rawList];

      if (activeTab.value === 'COMMERCIAL') {
        rawList = rawList.filter((item: any) => item.type === 'VENDOR' || item.type === 'CLIENT');
      }
      
      // Sắp xếp offline
      const sortKey = Object.keys(params).find(k => k.startsWith('sorts['));
      if (sortKey) {
        const field = sortKey.match(/sorts\[(.*?)\]/)?.[1] || 'id';
        const order = params[sortKey] === 'asc' ? 1 : -1;
        rawList.sort((a: any, b: any) => {
          const valA = a[field];
          const valB = b[field];
          if (valA < valB) return -1 * order;
          if (valA > valB) return 1 * order;
          return 0;
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
    },
    payload.errorCallback
  );
};

watch(activeTab, () => {
  isReload.value = !isReload.value;
});

// Pending files for create mode (staged before contract exists)
const pendingFiles = ref<File[]>([]);
const pendingFileInput = ref<HTMLInputElement | null>(null);

// Document viewer dialog
const showDocViewer = ref(false);
const docViewerContract = ref<any>(null);
const downloadingPdfId = ref<number | null>(null);

// PDF Multi-Theme state
const showPdfThemeDialog = ref(false);
const selectedPdfTheme = ref('classic');
const selectedContractForPdf = ref<any>(null);
const downloadingPdf = ref(false);

// Auth context
const userInfo = computed(() => {
  if (process.client) {
    return apiStore.userInfo || JSON.parse(localStorage.getItem("userInfo") || "{}");
  }
  return null;
});

const isManagerOrAdmin = computed(() => {
  const role = userInfo.value?.role;
  return ['ADMIN', 'MANAGER', 'DIRECTOR', 'HR'].includes(role);
});

// Filters State
const filters = ref({
  q: '',
  type: null as string | null,
  status: null as string | null,
});

// Form State
const contractForm = ref({
  employee_id: null as number | null,
  contract_code: '',
  type: 'LABOR',
  employment_type: 'SEISHAIN',
  is_36_agreement_applicable: false,
  overtime_allowance_included: false,
  included_overtime_hours: null as number | null,
  probation_period_months: 2,
  insurance_enrolled: 'BHXH, BHYT',
  sign_date: '',
  start_date: '',
  end_date: '',
  value: null as number | null,
  status: 'ACTIVE',
  documents: [] as any[],
});

// Options
const tabOptions = computed(() => [
  { label: t('contract.allContracts'), value: 'ALL' },
  { label: t('contract.typeLabor'), value: 'LABOR' },
  { label: t('contract.typeCommercial'), value: 'COMMERCIAL' },
]);

const typeFilterOptions = computed(() => [
  { label: t('contract.allTypes'), value: null },
  { label: t('contract.typeLabor'), value: 'LABOR' },
  { label: t('contract.typeVendor'), value: 'VENDOR' },
  { label: t('contract.typeClient'), value: 'CLIENT' },
]);

const statusFilterOptions = computed(() => [
  { label: t('contract.statusAll'), value: null },
  { label: t('contract.statusActive'), value: 'ACTIVE' },
  { label: t('contract.statusPending'), value: 'PENDING' },
  { label: t('contract.statusExpired'), value: 'EXPIRED' },
  { label: t('contract.statusTerminated'), value: 'TERMINATED' },
]);

const typeOptions = computed(() => [
  { label: t('contract.typeLabor'), value: 'LABOR' },
  { label: t('contract.typeVendor'), value: 'VENDOR' },
  { label: t('contract.typeClient'), value: 'CLIENT' },
]);

const employmentTypeOptions = computed(() => [
  { label: t('contract.employmentSeishain'), value: 'SEISHAIN' },
  { label: t('contract.employmentKeiyakushain'), value: 'KEIYAKUSHAIN' },
  { label: t('contract.employmentHaken'), value: 'HAKEN' },
  { label: t('contract.employmentArubaito'), value: 'ARUBAITO' },
  { label: t('contract.employmentFullTimeVn'), value: 'FULL_TIME_VN' },
  { label: t('contract.employmentPartTimeVn'), value: 'PART_TIME_VN' },
]);

const statusOptions = computed(() => [
  { label: t('contract.statusActive'), value: 'ACTIVE' },
  { label: t('contract.statusPending'), value: 'PENDING' },
  { label: t('contract.statusExpired'), value: 'EXPIRED' },
  { label: t('contract.statusTerminated'), value: 'TERMINATED' },
]);

// Computed statistics
const stats = computed(() => {
  let laborCount = 0;
  let commercialCount = 0;
  let totalValue = 0;

  contracts.value.forEach(item => {
    if (item.type === 'LABOR') {
      laborCount++;
    } else {
      commercialCount++;
    }
    if (item.value) {
      if (activeTab.value === 'COMMERCIAL') {
        if (item.type !== 'LABOR') {
          totalValue += Number(item.value);
        }
      } else {
        totalValue += Number(item.value);
      }
    }
  });

  return { laborCount, commercialCount, totalValue };
});

// Filtering based on Active Tab
const filteredContracts = computed(() => {
  return contracts.value.filter(item => {
    if (activeTab.value === 'LABOR') {
      return item.type === 'LABOR';
    }
    if (activeTab.value === 'COMMERCIAL') {
      return item.type === 'VENDOR' || item.type === 'CLIENT';
    }
    return true;
  });
});

const loadEmployees = () => {
  GET_EMPLOYEES(
    { limit: 100 },
    (res: any) => {
      employees.value = res?.data?.data?.data || res?.data?.data || [];
    },
    () => {}
  );
};

const resetFilters = () => {
  filters.value = {
    q: '',
    type: null,
    status: null,
  };
  isReload.value = !isReload.value;
};

onMounted(() => {
  loadEmployees();
});

const exportContractPdf = (item: any) => {
  selectedContractForPdf.value = item;
  selectedPdfTheme.value = 'classic';
  showPdfThemeDialog.value = true;
};

const doExportContractPdf = async () => {
  if (!selectedContractForPdf.value) return;
  downloadingPdf.value = true;
  downloadingPdfId.value = selectedContractForPdf.value.id;
  try {
    const theme = selectedPdfTheme.value;
    const item = selectedContractForPdf.value;
    const response = await Api.get(`/contracts/${item.id}/export-pdf?theme=${theme}`, {
      responseType: 'blob',
    });

    const blob = new Blob([response.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Hop_dong_${item.contract_code}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    showMessage('success', t('text.success'), t('contract.downloadPdfSuccess', { theme: theme === 'classic' ? t('contract.styleClassic') : theme === 'modern' ? t('contract.styleModern') : t('contract.styleAcademic') }));
    showPdfThemeDialog.value = false;
  } catch (err: any) {
    console.error(err);
    showMessage('error', t('text.error'), t('contract.exportPdfError'));
  } finally {
    downloadingPdf.value = false;
    downloadingPdfId.value = null;
  }
};

// Dialog Openers
const openCreateDialog = () => {
  isEditMode.value = false;
  editingContractId.value = null;
  contractForm.value = {
    employee_id: null,
    contract_code: '',
    type: 'LABOR',
    employment_type: 'SEISHAIN',
    is_36_agreement_applicable: false,
    overtime_allowance_included: false,
    included_overtime_hours: null,
    probation_period_months: 2,
    insurance_enrolled: 'BHXH, BHYT',
    sign_date: new Date().toISOString().split('T')[0],
    start_date: new Date().toISOString().split('T')[0],
    end_date: '',
    value: null,
    status: 'ACTIVE',
    documents: [],
  };
  pendingFiles.value = [];
  displayDialog.value = true;
};

const openEditDialog = (item: any) => {
  isEditMode.value = true;
  editingContractId.value = item.id;
  contractForm.value = {
    employee_id: item.employee_id,
    contract_code: item.contract_code,
    type: item.type,
    employment_type: item.employment_type || 'SEISHAIN',
    is_36_agreement_applicable: !!item.is_36_agreement_applicable,
    overtime_allowance_included: !!item.overtime_allowance_included,
    included_overtime_hours: item.included_overtime_hours,
    probation_period_months: item.probation_period_months ?? 2,
    insurance_enrolled: item.insurance_enrolled || '',
    sign_date: item.sign_date || '',
    start_date: item.start_date || '',
    end_date: item.end_date || '',
    value: item.value ? Number(item.value) : null,
    status: item.status,
    documents: item.documents || [],
  };
  displayDialog.value = true;
};

// Form Save (Create / Update)
const saveContract = () => {
  submitting.value = true;

  // Clean empty strings to null for backend
  const payload = { ...contractForm.value };
  if (!payload.end_date) delete (payload as any).end_date;
  if (!payload.employee_id || payload.type !== 'LABOR') {
    delete (payload as any).employee_id;
    delete (payload as any).employment_type;
    delete (payload as any).is_36_agreement_applicable;
    delete (payload as any).overtime_allowance_included;
    delete (payload as any).included_overtime_hours;
    delete (payload as any).probation_period_months;
    delete (payload as any).insurance_enrolled;
  }

  if (isEditMode.value && editingContractId.value) {
    UPDATE_CONTRACT(
      editingContractId.value,
      payload,
      () => {
        submitting.value = false;
        displayDialog.value = false;
        showMessage('success', t('text.success'), t('contract.updateSuccessDesc'));
        isReload.value = !isReload.value;
      },
      (err: any) => {
        submitting.value = false;
        // Map specific overlap code
        const msg = err.response?.data?.messages?.message || err.message;
        showMessage('error', t('contract.updateError'), msg);
      }
    );
  } else {
    CREATE_CONTRACT(
      payload,
      (res: any) => {
        const createdContract = res.data?.data || res.data;
        const contractId = createdContract?.id;
        
        // Upload pending files if any
        if (contractId && pendingFiles.value.length > 0) {
          uploadPendingFiles(contractId, () => {
            submitting.value = false;
            displayDialog.value = false;
            pendingFiles.value = [];
            showMessage('success', t('text.success'), t('contract.createSuccessWithDocs'));
            isReload.value = !isReload.value;
          });
        } else {
          submitting.value = false;
          displayDialog.value = false;
          pendingFiles.value = [];
          showMessage('success', t('text.success'), t('contract.createSuccess'));
          isReload.value = !isReload.value;
        }
      },
      (err: any) => {
        submitting.value = false;
        const msg = err.response?.data?.messages?.message || err.message;
        showMessage('error', t('contract.createError'), msg);
      }
    );
  }
};

// Delete flow with PrimeVue dialog
const confirmDeleteDialog = (item: any) => {
  deleteTarget.value = item;
  showDeleteDialog.value = true;
};

const doDeleteContract = () => {
  if (!deleteTarget.value) return;
  deleting.value = true;
  DELETE_CONTRACT(
    deleteTarget.value.id,
    () => {
      showMessage('success', t('text.success'), t('contract.deleteSuccessDesc'));
      showDeleteDialog.value = false;
      deleting.value = false;
      isReload.value = !isReload.value;
    },
    (err: any) => {
      deleting.value = false;
      showMessage('error', t('contract.deleteError'), err.message);
    }
  );
};

// Helpers & Formatters
const employeeOptions = computed(() => {
  return employees.value.map(emp => ({
    id: emp.id,
    full_name: `${emp.full_name} (${emp.code || 'NV'})`,
  }));
});

const getInitials = (name: string) => {
  if (!name) return 'HD';
  const parts = name.split(' ');
  return parts[parts.length - 1].substring(0, 2).toUpperCase();
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
    case 'PENDING': return t('contract.statusPending');
    case 'EXPIRED': return t('contract.statusExpired');
    case 'TERMINATED': return t('contract.statusTerminated');
    default: return status;
  }
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const formatCurrency = (val: any) => {
  if (!val) return '0 VNĐ';
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
};

// Pending file helpers (for create mode)
const triggerPendingFileInput = () => {
  pendingFileInput.value?.click();
};

const onPendingFileSelected = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const allowedExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'png', 'jpg', 'jpeg'];
    const maxSize = 10 * 1024 * 1024;
    Array.from(target.files).forEach(file => {
      const ext = file.name.split('.').pop()?.toLowerCase() || '';
      if (!allowedExtensions.includes(ext)) {
        showMessage('error', t('contract.formatError'), t('contract.formatErrorDesc', { ext }));
        return;
      }
      if (file.size > maxSize) {
        showMessage('error', t('contract.sizeError'), t('contract.sizeErrorDesc', { name: file.name }));
        return;
      }
      pendingFiles.value.push(file);
    });
    target.value = ''; // Reset input
  }
};

const getPendingFileIcon = (file: File) => {
  const ext = file.name.split('.').pop()?.toLowerCase() || '';
  if (['doc', 'docx'].includes(ext)) return { icon: 'pi-file-word text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/20' };
  if (['xls', 'xlsx'].includes(ext)) return { icon: 'pi-file-excel text-green-500', bg: 'bg-green-50 dark:bg-green-950/20' };
  if (ext === 'pdf') return { icon: 'pi-file-pdf text-red-500', bg: 'bg-red-50 dark:bg-red-950/20' };
  if (['png', 'jpg', 'jpeg'].includes(ext)) return { icon: 'pi-image text-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/20' };
  return { icon: 'pi-file text-surface-500', bg: 'bg-surface-50 dark:bg-surface-850' };
};

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Upload all pending files to newly created contract
const uploadPendingFiles = (contractId: number, onComplete: () => void) => {
  let completed = 0;
  const total = pendingFiles.value.length;
  if (total === 0) { onComplete(); return; }
  
  pendingFiles.value.forEach(file => {
    UPLOAD_DOCUMENT(
      file,
      'App\\Models\\Contract',
      contractId,
      () => {
        completed++;
        if (completed >= total) onComplete();
      },
      (err: any) => {
        console.error('Upload error for', file.name, err);
        completed++;
        if (completed >= total) onComplete();
      }
    );
  });
};

// Document viewer dialog
const openDocumentViewer = (contract: any) => {
  docViewerContract.value = contract;
  showDocViewer.value = true;
};
</script>

<style scoped>
.field-checkbox input {
  width: auto;
}
</style>
