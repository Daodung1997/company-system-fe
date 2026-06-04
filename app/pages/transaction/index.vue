<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/40 dark:bg-surface-900/40 p-8 rounded-[2rem] border border-white dark:border-surface-800 backdrop-blur-md shadow-2xl shadow-surface-200/20">
      <div class="flex items-center gap-5">
        <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
          <i class="pi pi-wallet text-2xl"></i>
        </div>
        <div class="space-y-1">
          <h1 class="text-3xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ $t('transaction.title') }}
          </h1>
          <p class="text-sm text-surface-500 dark:text-surface-400 font-medium">
            {{ $t('transaction.desc') }}
          </p>
        </div>
      </div>
      <div>
        <Button
          :label="$t('transaction.addBtn')"
          icon="pi pi-plus"
          severity="primary"
          class="!rounded-xl !px-6 !py-3 !shadow-lg !shadow-primary/25 !font-bold"
          @click="navigateTo('/transaction/create')"
        />
      </div>
    </div>

    <!-- Quick Cashflow Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <!-- Total Revenue -->
      <div class="bg-white dark:bg-surface-900 p-6 rounded-3xl border border-surface-150 dark:border-surface-800 shadow-xl shadow-surface-200/5 flex items-center justify-between">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.totalRevenue') }}</span>
          <h3 class="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">{{ formatCurrency(stats.totalRevenue) }}</h3>
        </div>
        <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center animate-pulse">
          <i class="pi pi-arrow-up-right text-lg"></i>
        </div>
      </div>
      <!-- Total Expense -->
      <div class="bg-white dark:bg-surface-900 p-6 rounded-3xl border border-surface-150 dark:border-surface-800 shadow-xl shadow-surface-200/5 flex items-center justify-between">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.totalExpense') }}</span>
          <h3 class="text-2xl font-black text-rose-600 dark:text-rose-400 font-mono">{{ formatCurrency(stats.totalExpense) }}</h3>
        </div>
        <div class="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
          <i class="pi pi-arrow-down-left text-lg"></i>
        </div>
      </div>
      <!-- Net Balance -->
      <div class="bg-white dark:bg-surface-900 p-6 rounded-3xl border border-surface-150 dark:border-surface-800 shadow-xl shadow-surface-200/5 flex items-center justify-between">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.netBalance') }}</span>
          <h3 class="text-2xl font-black font-mono" :class="stats.netBalance >= 0 ? 'text-primary' : 'text-amber-600'">
            {{ formatCurrency(stats.netBalance) }}
          </h3>
        </div>
        <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
          <i class="pi pi-percentage text-lg"></i>
        </div>
      </div>
      <!-- Compliance Rate -->
      <div class="bg-white dark:bg-surface-900 p-6 rounded-3xl border border-surface-150 dark:border-surface-800 shadow-xl shadow-surface-200/5 flex items-center justify-between">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.complianceRate') }}</span>
          <h3 class="text-2xl font-black text-surface-900 dark:text-surface-0 font-mono">
            {{ stats.complianceRate }}%
          </h3>
        </div>
        <div class="w-10 h-10 rounded-xl flex items-center justify-center" :class="stats.complianceRate >= 90 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'">
          <i class="pi pi-shield text-lg"></i>
        </div>
      </div>
    </div>

    <!-- Filter & Main Tabs Panel -->
    <div class="bg-white dark:bg-surface-900 p-8 rounded-[2.5rem] border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 dark:shadow-none space-y-6">
      <!-- Tabs header & Filters grid -->
      <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-6 border-b border-surface-100 dark:border-surface-800 pb-6">
        <!-- Inner Category Tabs -->
        <div class="flex bg-surface-100/60 dark:bg-surface-950 p-1.5 rounded-2xl w-fit">
          <button
            v-for="tab in tabOptions"
            :key="tab.value"
            class="px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300"
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
          <!-- Text Search -->
          <div class="relative group w-full sm:w-[240px]">
            <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
            <InputText
              v-model="filters.q"
              :placeholder="$t('transaction.searchPlaceholder')"
              class="w-full !rounded-xl !pl-11"
            />
          </div>

          <!-- Type filter -->
          <Select
            v-model="filters.type"
            :options="typeFilterOptions"
            optionLabel="label"
            optionValue="value"
            :placeholder="$t('transaction.type')"
            class="w-full sm:w-[150px] !rounded-xl"
            showClear
          />

          <!-- Status filter -->
          <Select
            v-model="filters.status"
            :options="statusFilterOptions"
            optionLabel="label"
            optionValue="value"
            :placeholder="$t('transaction.status')"
            class="w-full sm:w-[150px] !rounded-xl"
            showClear
          />

          <!-- Compliance filter -->
          <Select
            v-model="filters.compliance"
            :options="complianceOptions"
            optionLabel="label"
            optionValue="value"
            :placeholder="$t('transaction.compliance')"
            class="w-full sm:w-[180px] !rounded-xl"
            showClear
          />

          <!-- Refresh button -->
          <Button
            icon="pi pi-refresh"
            severity="secondary"
            outlined
            class="!rounded-xl !w-11 !h-11"
            v-tooltip.top="$t('transaction.refresh')"
            @click="resetFilters"
          />
        </div>
      </div>

      <!-- Modern Data Table -->
      <BaseDataTable
        :columns="columns"
        :fetchApi="fetchTransactionsWrapper"
        :filters="filters"
        :isReload="isReload"
        :emptyText="$t('transaction.noData') || 'Không tìm thấy giao dịch nào'"
        scrollHeight="58vh"
      >
        <template #body="{ column, data }">
          <!-- Ngày giao dịch -->
          <template v-if="column.key === 'transaction_date'">
            <span class="text-xs font-semibold text-surface-600 dark:text-surface-400 font-mono">
              {{ formatDate(data.transaction_date) }}
            </span>
          </template>

          <!-- Mã giao dịch -->
          <template v-else-if="column.key === 'code'">
            <span class="font-mono font-bold text-surface-900 dark:text-surface-100">
              {{ data.code }}
            </span>
          </template>

          <!-- Phân loại Thu/Chi -->
          <template v-else-if="column.key === 'type'">
            <span
              class="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider"
              :class="[
                data.type === 'REVENUE' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                'bg-rose-500/10 text-rose-600 dark:text-rose-400'
              ]"
            >
              <i class="pi mr-1 text-[9px]" :class="data.type === 'REVENUE' ? 'pi-arrow-up-right' : 'pi-arrow-down-left'"></i>
              {{ data.type === 'REVENUE' ? $t('transaction.revenueShort') : $t('transaction.expenseShort') }}
            </span>
          </template>

          <!-- Danh mục & Mô tả -->
          <template v-else-if="column.key === 'category'">
            <div class="flex flex-col">
              <span class="text-xs font-bold text-surface-800 dark:text-surface-200">
                {{ data.category }}
              </span>
              <span v-if="data.description" class="text-[10px] text-surface-400 mt-1 max-w-[200px] truncate" v-tooltip.top="data.description">
                {{ data.description }}
              </span>
            </div>
          </template>

          <!-- Số tiền -->
          <template v-else-if="column.key === 'amount'">
            <div class="flex flex-col font-mono text-right sm:text-left">
              <span class="text-xs font-bold" :class="data.type === 'REVENUE' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'">
                {{ formatCurrency(data.amount) }}
              </span>
              <span class="text-[9px] text-surface-400 mt-1">
                {{ $t('transaction.original') }}: {{ formatCurrency(data.net_amount) }}
              </span>
            </div>
          </template>

          <!-- Thuế & Qualified Invoice ID -->
          <template v-else-if="column.key === 'tax'">
            <div class="flex flex-col gap-1 text-xs">
              <div class="flex items-center gap-1.5">
                <span class="px-2 py-0.5 rounded bg-surface-100 dark:bg-surface-800 text-[9px] font-bold text-surface-600 dark:text-surface-400">
                  {{ getTaxRateLabel(data.tax_rate_type) }}
                </span>
                <span v-if="data.tax_amount > 0" class="text-[10px] text-surface-500 font-mono">
                  ({{ formatCurrency(data.tax_amount) }})
                </span>
              </div>
              
              <!-- Nhật Bản Qualified Invoice ID -->
              <div v-if="data.invoice_registration_number" class="flex items-center gap-1 mt-1 text-[10px] text-primary font-mono font-bold bg-primary/5 px-2 py-0.5 rounded w-fit border border-primary/10">
                <i class="pi pi-verified text-[9px]"></i>
                {{ data.invoice_registration_number }}
              </div>
            </div>
          </template>

          <!-- Phương thức thanh toán -->
          <template v-else-if="column.key === 'payment'">
            <div class="flex flex-col items-center gap-1">
              <span class="text-[10px] font-bold text-surface-500 inline-flex items-center gap-1">
                <i class="pi" :class="getPaymentMethodIcon(data.payment_method)"></i>
                {{ getPaymentMethodLabel(data.payment_method) }}
              </span>
              <span
                class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider"
                :class="[
                  data.status === 'PAID' ? 'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400' :
                  data.status === 'PENDING' ? 'bg-amber-100 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400' :
                  'bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400'
                ]"
              >
                {{ getStatusLabel(data.status) }}
              </span>
            </div>
          </template>

          <!-- Tài liệu đính kèm & Cảnh báo tuân thủ -->
          <template v-else-if="column.key === 'documents'">
            <!-- Has documents -->
            <div v-if="data.documents && data.documents.length > 0" class="flex items-center justify-center">
              <button
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-bold text-xs transition-all duration-200 cursor-pointer border border-primary/20 hover:border-primary/40 group"
                @click="openDocumentViewer(data)"
              >
                <i class="pi pi-file text-xs group-hover:rotate-12 transition-transform"></i>
                <span class="font-mono">{{ data.documents.length }} {{ $t('transaction.files') || 'Tệp' }}</span>
              </button>
            </div>
            <!-- NO documents for EXPENSE -> High Risk Compliance Alert -->
            <div v-else-if="data.type === 'EXPENSE'" class="flex justify-center">
              <span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 font-black text-[10px] tracking-wide animate-pulse">
                <i class="pi pi-exclamation-circle text-xs"></i>
                {{ $t('transaction.missingDocsAlert') || 'Thiếu chứng từ' }}
              </span>
            </div>
            <!-- Revenue without documents (normal/optional) -->
            <span class="text-surface-300 dark:text-surface-700 text-xs" v-else>—</span>
          </template>

          <!-- Thao tác CRUD -->
          <template v-else-if="column.key === 'actions'">
            <div class="flex items-center justify-end gap-1">
              <!-- Sửa -->
              <Button
                icon="pi pi-pencil"
                severity="warn"
                variant="text"
                class="!w-9 !h-9 !rounded-xl"
                v-tooltip.top="$t('transaction.editTooltip')"
                @click="navigateTo(`/transaction/${data.id}/edit`)"
              />
              <!-- Xóa -->
              <Button
                icon="pi pi-trash"
                severity="danger"
                variant="text"
                class="!w-9 !h-9 !rounded-xl"
                v-tooltip.top="$t('transaction.deleteTooltip')"
                @click="confirmDeleteDialog(data)"
              />
            </div>
          </template>
        </template>
      </BaseDataTable>
    </div>

    <!-- Delete Confirmation Dialog -->
    <Dialog v-model:visible="showDeleteDialog" :modal="true" :closable="true" :header="$t('transaction.dialogDeleteTitle')" class="!rounded-3xl" :style="{ width: '450px' }">
      <div class="flex items-start gap-4 p-4">
        <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center text-rose-500 flex-shrink-0">
          <i class="pi pi-exclamation-triangle text-xl"></i>
        </div>
        <div>
          <h3 class="font-black text-surface-900 dark:text-surface-0 text-lg">{{ $t('transaction.dialogDeleteConfirm') }}</h3>
          <p class="text-sm text-surface-500 mt-2">
            {{ $t('transaction.dialogDeleteDesc', { code: deleteTarget?.code, category: deleteTarget?.category }) }}
          </p>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3 px-4 pb-2">
          <Button :label="$t('transaction.btnCancel')" severity="secondary" outlined @click="showDeleteDialog = false" class="!rounded-xl" />
          <Button :label="$t('transaction.btnConfirmDelete')" severity="danger" @click="doDeleteTransaction" class="!rounded-xl" :loading="deleting" />
        </div>
      </template>
    </Dialog>

    <!-- Document Viewer Dialog -->
    <Dialog
      v-model:visible="showDocViewer"
      :header="$t('transaction.dialogDocTitle', { code: docViewerTransaction?.code || '' })"
      :modal="true"
      :style="{ width: '800px' }"
      class="!rounded-3xl overflow-hidden"
      :breakpoints="{'960px': '80vw', '640px': '95vw'}"
    >
      <div class="p-2">
        <AppDocumentManager
          v-if="docViewerTransaction"
          documentableType="Transaction"
          :documentableId="docViewerTransaction.id"
          :documents="docViewerTransaction.documents || []"
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
import { GET_TRANSACTIONS, DELETE_TRANSACTION } from '~/apis/transaction';
import { showMessage } from '~/utils/global';

const { t } = useI18n();

const loading = ref(false);
const transactions = ref<any[]>([]);

// Delete state
const showDeleteDialog = ref(false);
const deleteTarget = ref<any>(null);
const deleting = ref(false);

// Document viewer state
const showDocViewer = ref(false);
const docViewerTransaction = ref<any>(null);

// Filters State
const activeTab = ref('ALL');
const filters = ref({
  q: '',
  type: null as string | null,
  status: null as string | null,
  compliance: null as string | null,
});

const isReload = ref(false);

const columns = computed(() => [
  { key: 'transaction_date', label: t('transaction.dateCol') || 'Ngày', minWidth: '120px', sortable: true },
  { key: 'code', label: t('transaction.codeCol') || 'Mã GD', minWidth: '120px', sortable: true },
  { key: 'type', label: t('transaction.typeCol') || 'Loại GD', minWidth: '110px' },
  { key: 'category', label: t('transaction.categoryCol') || 'Danh mục / Mô tả', minWidth: '220px' },
  { key: 'amount', label: t('transaction.amountCol') || 'Số tiền', minWidth: '150px' },
  { key: 'tax', label: t('transaction.taxCol') || 'Thuế & Hóa đơn', minWidth: '200px' },
  { key: 'payment', label: t('transaction.paymentCol') || 'Thanh toán', minWidth: '140px' },
  { key: 'documents', label: t('transaction.documentCol') || 'Chứng từ', minWidth: '140px' },
  { key: 'actions', label: t('transaction.actionCol') || 'Thao tác', minWidth: '120px', frozen: true }
]);

const fetchTransactionsWrapper = (payload: { query: string, successCallback: Function, errorCallback: Function }) => {
  const params = Object.fromEntries(new URLSearchParams(payload.query));
  
  const apiParams: any = {};
  const q = params['filters[q]'] || '';
  const status = params['filters[status]'] || '';
  const type = params['filters[type]'] || '';
  
  if (q) apiParams.q = q;
  if (status) apiParams.status = status;
  if (type) apiParams.type = type;
  
  if (activeTab.value === 'EXPENSE') {
    apiParams.type = 'EXPENSE';
  } else if (activeTab.value === 'REVENUE') {
    apiParams.type = 'REVENUE';
  }

  return GET_TRANSACTIONS(
    apiParams,
    (res: any) => {
      let rawList = res.data?.data || res.data || [];
      
      // Đồng bộ transactions cho Stats calculations
      transactions.value = [...rawList];

      // Lọc theo Compliance (offline)
      if (filters.value.compliance === 'HAS_DOCS') {
        rawList = rawList.filter((item: any) => item.documents && item.documents.length > 0);
      } else if (filters.value.compliance === 'MISSING_DOCS') {
        rawList = rawList.filter((item: any) => item.type === 'EXPENSE' && (!item.documents || item.documents.length === 0));
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
      } else {
        // Mặc định sắp xếp theo ngày giao dịch mới nhất
        rawList.sort((a: any, b: any) => new Date(b.transaction_date).getTime() - new Date(a.transaction_date).getTime());
      }
      
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

watch(activeTab, () => {
  isReload.value = !isReload.value;
});

watch(() => filters.value.compliance, () => {
  isReload.value = !isReload.value;
});

// Options definitions
const tabOptions = computed(() => [
  { label: t('transaction.tabAll'), value: 'ALL' },
  { label: t('transaction.tabExpense'), value: 'EXPENSE' },
  { label: t('transaction.tabRevenue'), value: 'REVENUE' },
]);

const typeFilterOptions = computed(() => [
  { label: t('transaction.allTypes'), value: null },
  { label: t('transaction.expense'), value: 'EXPENSE' },
  { label: t('transaction.revenue'), value: 'REVENUE' },
]);

const statusFilterOptions = computed(() => [
  { label: t('transaction.allStatus'), value: null },
  { label: t('transaction.paid'), value: 'PAID' },
  { label: t('transaction.pending'), value: 'PENDING' },
  { label: t('transaction.cancelled'), value: 'CANCELLED' },
]);

const complianceOptions = computed(() => [
  { label: t('transaction.allDocs'), value: null },
  { label: t('transaction.hasDocs'), value: 'HAS_DOCS' },
  { label: t('transaction.missingDocs'), value: 'MISSING_DOCS' },
]);

// Computed Stats calculations
const stats = computed(() => {
  let totalRevenue = 0;
  let totalExpense = 0;
  let expenseWithDocs = 0;
  let totalExpensesCount = 0;

  transactions.value.forEach(txn => {
    const amt = parseFloat(txn.amount) || 0;
    if (txn.type === 'REVENUE') {
      totalRevenue += amt;
    } else if (txn.type === 'EXPENSE') {
      totalExpense += amt;
      totalExpensesCount++;
      if (txn.documents && txn.documents.length > 0) {
        expenseWithDocs++;
      }
    }
  });

  const netBalance = totalRevenue - totalExpense;
  const complianceRate = totalExpensesCount > 0 ? Math.round((expenseWithDocs / totalExpensesCount) * 100) : 100;

  return {
    totalRevenue,
    totalExpense,
    netBalance,
    complianceRate,
  };
});

// Filtering based on active tab and compliance option locally to avoid server overload
const filteredTransactions = computed(() => {
  return transactions.value.filter(item => {
    // 1. Tab type filtering
    if (activeTab.value === 'EXPENSE' && item.type !== 'EXPENSE') {
      return false;
    }
    if (activeTab.value === 'REVENUE' && item.type !== 'REVENUE') {
      return false;
    }

    // 2. Compliance option filtering
    if (filters.value.compliance === 'HAS_DOCS') {
      return item.documents && item.documents.length > 0;
    }
    if (filters.value.compliance === 'MISSING_DOCS') {
      return item.type === 'EXPENSE' && (!item.documents || item.documents.length === 0);
    }

    return true;
  });
});

const resetFilters = () => {
  filters.value = {
    q: '',
    type: null,
    status: null,
    compliance: null,
  };
  activeTab.value = 'ALL';
  isReload.value = !isReload.value;
};

onMounted(() => {
  // BaseDataTable tự động load dữ liệu khi mount
});

// Dialog actions
const confirmDeleteDialog = (item: any) => {
  deleteTarget.value = item;
  showDeleteDialog.value = true;
};

const doDeleteTransaction = () => {
  if (!deleteTarget.value) return;
  deleting.value = true;
  DELETE_TRANSACTION(
    deleteTarget.value.id,
    () => {
      showMessage('success', t('transaction.msgDeleteSuccess'), t('transaction.msgDeleteSuccessDesc'));
      showDeleteDialog.value = false;
      deleting.value = false;
      isReload.value = !isReload.value;
    },
    (err: any) => {
      deleting.value = false;
      showMessage('error', t('transaction.msgDeleteFailed'), err.message || t('transaction.msgDeleteFailedDesc'));
    }
  );
};

// Document modal actions
const openDocumentViewer = (txn: any) => {
  docViewerTransaction.value = txn;
  showDocViewer.value = true;
};

// Formatting helpers
const formatCurrency = (val: any) => {
  if (!val) return '0 ₫';
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'PAID': return t('transaction.statusPaid');
    case 'PENDING': return t('transaction.statusPending');
    case 'CANCELLED': return t('transaction.statusCancelled');
    default: return status;
  }
};

const getTaxRateLabel = (rateType: string) => {
  switch (rateType) {
    case 'VAT_8_VN': return 'VAT 8% (VN)';
    case 'VAT_10_VN': return 'VAT 10% (VN)';
    case 'CT_8_JP': return 'Consumption 8% (JP)';
    case 'CT_10_JP': return 'Consumption 10% (JP)';
    default: return t('transaction.noTax');
  }
};

const getPaymentMethodLabel = (method: string) => {
  switch (method) {
    case 'BANK_TRANSFER': return t('transaction.bankTransfer');
    case 'CASH': return t('transaction.cash');
    case 'CREDIT_CARD': return t('transaction.creditCard');
    default: return method;
  }
};

const getPaymentMethodIcon = (method: string) => {
  switch (method) {
    case 'BANK_TRANSFER': return 'pi-building';
    case 'CASH': return 'pi-dollar';
    case 'CREDIT_CARD': return 'pi-credit-card';
    default: return 'pi-money-bill';
  }
};
</script>

<style scoped>
/* High-end micro-animations */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .7; }
}
</style>
