<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <!-- Premium Header Section -->
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white/40 dark:bg-surface-900/40 p-8 rounded-[2.5rem] border border-white dark:border-surface-800 backdrop-blur-md shadow-2xl shadow-surface-200/10">
      <div class="flex items-center gap-5">
        <div class="w-14 h-14 rounded-2xl bg-rose-500/10 dark:bg-rose-500/20 text-rose-500 flex items-center justify-center shadow-inner relative">
          <i class="pi pi-shield text-2xl animate-pulse"></i>
          <span v-if="criticalCount > 0" class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-600 rounded-full border-2 border-white dark:border-surface-900 animate-ping"></span>
        </div>
        <div class="space-y-1">
          <h1 class="text-3xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ $t('compliance.centerTitle') }}
          </h1>
          <p class="text-xs sm:text-sm text-surface-500 dark:text-surface-400 font-medium">
            {{ $t('compliance.centerDesc') }}
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <!-- Scan button -->
        <Button
          :label="$t('compliance.btnScan')"
          icon="pi pi-bolt"
          severity="danger"
          class="!rounded-xl !px-6 !py-3.5 !shadow-lg !shadow-rose-500/20 !font-black !text-xs !uppercase !tracking-wider"
          :loading="scanning"
          @click="triggerScan"
        />
      </div>
    </div>

    <!-- Company Health & Quick Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <!-- Health Score Gauge -->
      <div class="lg:col-span-2 bg-gradient-to-br from-surface-900 to-surface-950 text-white p-8 rounded-[2rem] border border-surface-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
        <div class="absolute -right-10 -bottom-10 w-44 h-44 bg-primary/10 rounded-full blur-[60px] group-hover:scale-125 transition-transform duration-700"></div>
        <div class="space-y-2 relative z-10">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-white/10 text-[9px] font-black tracking-widest uppercase text-surface-300">{{ $t('compliance.healthScore') }}</span>
          </div>
          <p class="text-[11px] text-surface-400 font-medium leading-relaxed max-w-[240px]">
            {{ $t('compliance.healthScoreDesc') }}
          </p>
        </div>
        <div class="flex items-center gap-6 mt-6 relative z-10">
          <div class="relative flex items-center justify-center">
            <!-- Circular Progress SVG -->
            <svg class="w-24 h-24 transform -rotate-90">
              <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.05)" stroke-width="8" fill="transparent" />
              <circle 
                cx="48" 
                cy="48" 
                r="40" 
                :stroke="healthScoreColor" 
                stroke-width="8" 
                fill="transparent" 
                :stroke-dasharray="251.2" 
                :stroke-dashoffset="251.2 - (251.2 * healthScore) / 100"
                stroke-linecap="round"
                class="transition-all duration-1000 ease-out"
              />
            </svg>
            <span class="absolute text-2xl font-black font-mono tracking-tighter">{{ healthScore }}</span>
          </div>
          <div>
            <h4 class="text-lg font-black tracking-tight" :style="{ color: healthScoreColor }">{{ healthScoreLabel }}</h4>
            <span class="text-xs text-surface-400 mt-1 block">{{ $t('compliance.recommendation') }}: {{ healthScoreRecommendation }}</span>
          </div>
        </div>
      </div>

      <!-- Stats Cards -->
      <!-- Critical Issues count -->
      <div class="bg-white dark:bg-surface-900 p-6 rounded-[2rem] border border-surface-150 dark:border-surface-850 shadow-xl flex flex-col justify-between group cursor-pointer hover:border-rose-500/30 transition-all duration-300" @click="switchSeverity('CRITICAL')">
        <div class="flex justify-between items-start">
          <div class="space-y-1">
            <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('compliance.criticalRisk') }}</span>
            <h3 class="text-4xl font-black text-rose-600 dark:text-rose-400 font-mono mt-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
              {{ criticalCount }}
            </h3>
          </div>
          <div class="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center animate-bounce">
            <i class="pi pi-exclamation-triangle"></i>
          </div>
        </div>
        <p class="text-[10px] text-surface-400 font-bold mt-4 uppercase tracking-widest">
          {{ $t('compliance.criticalDesc') }}
        </p>
      </div>

      <!-- Warnings count -->
      <div class="bg-white dark:bg-surface-900 p-6 rounded-[2rem] border border-surface-150 dark:border-surface-850 shadow-xl flex flex-col justify-between group cursor-pointer hover:border-amber-500/30 transition-all duration-300" @click="switchSeverity('WARNING')">
        <div class="flex justify-between items-start">
          <div class="space-y-1">
            <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('compliance.warningRisk') }}</span>
            <h3 class="text-4xl font-black text-amber-500 dark:text-amber-400 font-mono mt-2 tracking-tight">
              {{ warningCount }}
            </h3>
          </div>
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <i class="pi pi-exclamation-circle"></i>
          </div>
        </div>
        <p class="text-[10px] text-surface-400 font-bold mt-4 uppercase tracking-widest">
          {{ $t('compliance.warningDesc') }}
        </p>
      </div>

      <!-- Resolved count -->
      <div class="bg-white dark:bg-surface-900 p-6 rounded-[2rem] border border-surface-150 dark:border-surface-850 shadow-xl flex flex-col justify-between group hover:border-emerald-500/30 transition-all duration-300">
        <div class="flex justify-between items-start">
          <div class="space-y-1">
            <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('compliance.resolvedRisk') }}</span>
            <h3 class="text-4xl font-black text-emerald-500 dark:text-emerald-400 font-mono mt-2 tracking-tight">
              {{ resolvedCount }}
            </h3>
          </div>
          <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
            <i class="pi pi-check-circle"></i>
          </div>
        </div>
        <p class="text-[10px] text-surface-400 font-bold mt-4 uppercase tracking-widest">
          {{ $t('compliance.resolvedDesc') }}
        </p>
      </div>
    </div>

    <!-- Active Compliance Alerts Banner for Critical Issues -->
    <div v-if="activeCriticalIssues.length > 0" class="space-y-3">
      <div 
        v-for="issue in activeCriticalIssues" 
        :key="issue.id"
        class="bg-gradient-to-r from-rose-600/90 to-rose-700/95 text-white p-5 rounded-2xl border border-rose-500 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-pulse duration-1000"
      >
        <div class="flex items-center gap-3">
          <i class="pi pi-info-circle text-2xl flex-shrink-0"></i>
          <div>
            <h4 class="font-black text-xs uppercase tracking-widest">{{ $t('compliance.criticalTitle') }}</h4>
            <p class="text-sm font-semibold mt-0.5 leading-relaxed">{{ issue.description }}</p>
          </div>
        </div>
        <Button 
          :label="$t('compliance.btnActNow')" 
          icon="pi pi-arrow-right"
          severity="contrast"
          class="!rounded-xl !px-4 !py-2 !text-xs !font-black !w-full sm:!w-auto !flex-shrink-0"
          @click="actOnIssue(issue)"
        />
      </div>
    </div>

    <!-- Main Filter & Alerts Board -->
    <div class="bg-white dark:bg-surface-900 p-8 rounded-[2.5rem] border border-surface-150 dark:border-surface-850 shadow-xl space-y-6">
      <!-- Filters header -->
      <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-6 border-b border-surface-100 dark:border-surface-850 pb-6">
        <!-- Status switcher tabs -->
        <div class="flex bg-surface-100/60 dark:bg-surface-950 p-1.5 rounded-2xl w-fit">
          <button
            v-for="statusOpt in statusTabs"
            :key="statusOpt.value"
            type="button"
            class="px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300"
            :class="[
              activeStatus === statusOpt.value
                ? 'bg-white dark:bg-surface-900 text-primary shadow-md'
                : 'text-surface-500 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-200'
            ]"
            @click="switchStatus(statusOpt.value)"
          >
            {{ statusOpt.label }}
          </button>
        </div>

        <!-- Filter controls -->
        <div class="flex flex-wrap items-center gap-4">
          <!-- Text search -->
          <div class="relative group w-full sm:w-[240px]">
            <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
            <InputText
              v-model="filters.q"
              :placeholder="$t('compliance.searchPlaceholder')"
              class="w-full !rounded-xl !pl-11"
              @input="loadIssuesDebounced"
            />
          </div>

          <!-- Severity filter -->
          <Select
            v-model="filters.severity"
            :options="severityFilterOptions"
            optionLabel="label"
            optionValue="value"
            :placeholder="$t('compliance.severityPlaceholder')"
            class="w-full sm:w-[180px] !rounded-xl"
            showClear
            @change="loadIssues"
          />

          <!-- Issue Type filter -->
          <Select
            v-model="filters.issue_type"
            :options="typeFilterOptions"
            optionLabel="label"
            optionValue="value"
            :placeholder="$t('compliance.typePlaceholder')"
            class="w-full sm:w-[200px] !rounded-xl"
            showClear
            @change="loadIssues"
          />

          <!-- Refresh button -->
          <Button
            icon="pi pi-refresh"
            severity="secondary"
            outlined
            class="!rounded-xl !w-11 !h-11"
            v-tooltip.top="$t('compliance.tooltipRefresh')"
            @click="resetFilters"
          />
        </div>
      </div>

      <!-- Modern Data Table -->
      <BaseDataTable
        :columns="columns"
        :fetchApi="fetchIssuesWrapper"
        :isReload="isReload"
        :emptyText="$t('compliance.noDataTitle') || 'Không tìm thấy vi phạm tuân thủ nào'"
        scrollHeight="58vh"
      >
        <template #body="{ column, data }">
          <!-- Mức độ -->
          <template v-if="column.key === 'severity'">
            <span
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border"
              :class="[
                data.severity === 'CRITICAL' ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20 animate-pulse' :
                data.severity === 'WARNING' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' :
                'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
              ]"
            >
              <span class="w-1.5 h-1.5 rounded-full" :class="[
                data.severity === 'CRITICAL' ? 'bg-rose-600' :
                data.severity === 'WARNING' ? 'bg-amber-500' :
                'bg-rose-500'
              ]"></span>
              {{ data.severity === 'CRITICAL' ? $t('compliance.sevCritical') : data.severity === 'WARNING' ? $t('compliance.sevWarning') : $t('compliance.sevInfo') }}
            </span>
          </template>

          <!-- Phân loại -->
          <template v-else-if="column.key === 'issue_type'">
            <span class="flex items-center gap-2 font-bold text-xs uppercase tracking-wide text-surface-700 dark:text-surface-300">
              <i class="pi text-xs" :class="getIssueTypeIcon(data.issue_type)"></i>
              {{ getIssueTypeLabel(data.issue_type) }}
            </span>
          </template>

          <!-- Mô tả sự cố -->
          <template v-else-if="column.key === 'description'">
            <span class="text-xs font-semibold leading-relaxed text-surface-800 dark:text-surface-200 block max-w-[320px]">
              {{ data.description }}
            </span>
          </template>

          <!-- Đối tượng -->
          <template v-else-if="column.key === 'entity'">
            <div class="flex flex-col text-xs gap-1">
              <!-- Employee Linked -->
              <div v-if="data.employee" class="flex items-center gap-1.5">
                <i class="pi pi-user text-surface-400 text-[10px]"></i>
                <span class="font-bold text-surface-700 dark:text-surface-300">{{ data.employee.full_name }}</span>
                <span class="text-[9px] font-mono text-surface-400 bg-surface-100 dark:bg-surface-800 px-1 py-0.5 rounded">{{ data.employee.code }}</span>
              </div>
              <!-- Contract Linked -->
              <div v-if="data.contract" class="flex items-center gap-1.5">
                <i class="pi pi-file text-surface-400 text-[10px]"></i>
                <span class="font-bold text-surface-700 dark:text-surface-300">HĐ: {{ data.contract.contract_code }}</span>
                <span class="text-[9px] font-mono text-surface-400 bg-primary/5 text-primary px-1.5 py-0.5 rounded">{{ data.contract.type }}</span>
              </div>
              <!-- Transaction Linked -->
              <div v-if="data.transaction" class="flex items-center gap-1.5">
                <i class="pi pi-wallet text-surface-400 text-[10px]"></i>
                <span class="font-bold text-surface-700 dark:text-surface-300">GD: {{ data.transaction.code }}</span>
                <span class="text-[9px] font-mono text-surface-400 bg-rose-500/10 text-rose-500 px-1.5 py-0.5 rounded">{{ formatCurrency(data.transaction.amount) }}</span>
              </div>
            </div>
          </template>

          <!-- Trạng thái -->
          <template v-else-if="column.key === 'status'">
            <div class="flex flex-col items-center gap-1">
              <span
                class="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest"
                :class="[
                  data.status === 'OPEN' ? 'bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400' :
                  'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400'
                ]"
              >
                {{ data.status === 'OPEN' ? $t('compliance.statusOpen') : $t('compliance.statusResolved') }}
              </span>
              <span v-if="data.status === 'RESOLVED' && data.resolved_by" class="text-[9px] text-surface-400 mt-1 block max-w-[120px] truncate" v-tooltip.top="data.resolved_by">
                {{ $t('compliance.resolvedBy') }}: {{ data.resolved_by }}
              </span>
            </div>
          </template>

          <!-- Thao tác -->
          <template v-else-if="column.key === 'actions'">
            <div class="flex items-center justify-end gap-2">
              <Button
                v-if="data.status === 'OPEN'"
                :label="$t('compliance.btnResolve')"
                icon="pi pi-external-link"
                severity="primary"
                size="small"
                class="!rounded-xl !px-3.5 !py-2 !text-[10px] !font-black !uppercase !tracking-wider"
                @click="actOnIssue(data)"
              />
              <Button
                v-if="data.status === 'OPEN'"
                icon="pi pi-check"
                severity="success"
                variant="text"
                class="!w-9 !h-9 !rounded-xl"
                v-tooltip.top="$t('compliance.tooltipManualResolve')"
                @click="confirmResolveDialog(data)"
              />
            </div>
          </template>
        </template>
      </BaseDataTable>>
    </div>

    <!-- Manual Resolve confirmation dialog -->
    <Dialog v-model:visible="showResolveDialog" :modal="true" :header="$t('compliance.dialogResolveTitle')" class="!rounded-3xl" :style="{ width: '450px' }">
      <div class="flex flex-col gap-4 p-4">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-emerald-500 flex-shrink-0">
            <i class="pi pi-check-circle text-xl"></i>
          </div>
          <div>
            <h3 class="font-black text-surface-900 dark:text-surface-0 text-lg">{{ $t('compliance.dialogResolveHeader') }}</h3>
            <p class="text-xs text-surface-500 mt-1">
              {{ $t('compliance.dialogResolveDesc') }}
            </p>
          </div>
        </div>

        <div class="space-y-2 mt-2">
          <label class="text-xs font-black uppercase tracking-wider text-surface-500">{{ $t('compliance.dialogResolveNote') }}</label>
          <Textarea 
            v-model="resolveNote" 
            rows="3" 
            :placeholder="$t('compliance.dialogResolvePlaceholder')" 
            class="w-full !rounded-xl !p-3 text-sm"
          />
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3 px-4 pb-2">
          <Button :label="$t('compliance.btnCancel')" severity="secondary" outlined @click="showResolveDialog = false" class="!rounded-xl" />
          <Button :label="$t('compliance.btnConfirmResolve')" severity="success" @click="doResolveIssue" class="!rounded-xl" :loading="resolving" :disabled="!resolveNote.trim()" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import BaseDataTable from '~/components/common/BaseDataTable.vue';
import { GET_COMPLIANCE_ISSUES, SCAN_COMPLIANCE, RESOLVE_COMPLIANCE_ISSUE } from '~/apis/compliance';
import { showMessage } from '~/utils/global';

const { t } = useI18n();

const loading = ref(false);
const scanning = ref(false);
const issues = ref<any[]>([]);
const isReload = ref(false);

const reloadTable = () => {
  isReload.value = !isReload.value;
};

const columns = computed(() => [
  { key: 'severity', label: t('compliance.colSeverity') || 'Mức độ', minWidth: '120px' },
  { key: 'issue_type', label: t('compliance.colType') || 'Phân loại', minWidth: '165px' },
  { key: 'description', label: t('compliance.colDescription') || 'Mô tả sự cố', minWidth: '280px' },
  { key: 'entity', label: t('compliance.colEntity') || 'Đối tượng', minWidth: '220px' },
  { key: 'status', label: t('compliance.colStatus') || 'Trạng thái', minWidth: '120px' },
  { key: 'actions', label: t('compliance.colAction') || 'Thao tác', minWidth: '120px', frozen: true }
]);

// Manual resolve state
const showResolveDialog = ref(false);
const resolveTarget = ref<any>(null);
const resolveNote = ref('');
const resolving = ref(false);

// Use reactive (not ref) so nested property mutations always trigger immediate re-render
const filters = reactive({
  q: '',
  severity: null as string | null,
  issue_type: null as string | null,
  status: 'OPEN' as string, // OPEN, RESOLVED
});

// Dedicated status tab switch — guarantees reactivity + re-render before API call
const activeStatus = ref<string>('OPEN');

const switchStatus = async (value: string) => {
  activeStatus.value = value;
  filters.status = value;
  await nextTick(); // ensure DOM re-renders the active tab before loading
  reloadTable();
};

// Dedicated severity shortcut from stat cards — also resets to OPEN tab
const switchSeverity = async (value: string) => {
  activeStatus.value = 'OPEN';
  filters.status = 'OPEN';
  filters.severity = value;
  await nextTick();
  reloadTable();
};

const statusTabs = computed(() => [
  { label: t('compliance.tabActiveRisks') || 'Rủi ro Hiện hữu', value: 'OPEN' },
  { label: t('compliance.tabResolvedHistory') || 'Lịch sử giải quyết', value: 'RESOLVED' },
]);

const severityFilterOptions = computed(() => [
  { label: t('compliance.sevAll') || 'Tất cả mức độ', value: null },
  { label: `${t('compliance.sevCritical') || 'Chí mạng'} (CRITICAL)`, value: 'CRITICAL' },
  { label: `${t('compliance.sevWarning') || 'Cảnh báo'} (WARNING)`, value: 'WARNING' },
  { label: `${t('compliance.sevInfo') || 'Thẩm định'} (INFO)`, value: 'INFO' },
]);

const typeFilterOptions = computed(() => [
  { label: t('compliance.typeAll') || 'Tất cả phân loại', value: null },
  { label: t('compliance.typeVisaExpiration') || 'Hết hạn Visa (VISA)', value: 'VISA_EXPIRATION' },
  { label: t('compliance.typeContractExpiration') || 'Hết hạn Hợp đồng (CONTRACT)', value: 'CONTRACT_EXPIRATION' },
  { label: t('compliance.typeMissingInvoice') || 'Thiếu Hóa đơn/Chứng từ (INVOICE)', value: 'MISSING_INVOICE' },
  { label: t('compliance.typeOvertimeLimit') || 'Tăng ca quá giới hạn (OVERTIME)', value: 'OVERTIME_LIMIT' },
]);

// Load issues from backend — wrapped in try/finally to guarantee loading resets
let loadDebounceTimer: ReturnType<typeof setTimeout> | null = null;

const fetchIssuesWrapper = (payload: { query: string, successCallback: Function, errorCallback: Function }) => {
  const params = Object.fromEntries(new URLSearchParams(payload.query));
  
  return GET_COMPLIANCE_ISSUES(
    {
      q: filters.q || undefined,
      severity: filters.severity || undefined,
      issue_type: filters.issue_type || undefined,
      status: filters.status || 'OPEN',
    },
    (res: any) => {
      try {
        const rawList = res?.data?.data?.data || res?.data?.data || [];
        const items = Array.isArray(rawList) ? rawList : [];
        issues.value = items;
        
        const page = parseInt(params.page || '1');
        const limit = parseInt(params.limit || '15');
        const startIndex = (page - 1) * limit;
        const paginatedData = items.slice(startIndex, startIndex + limit);
        
        const formattedResponse = {
          data: {
            data: {
              data: paginatedData,
              total: items.length
            }
          }
        };
        
        payload.successCallback(formattedResponse);
      } catch (e) {
        console.error('[Compliance] Error parsing response:', e);
        payload.errorCallback(e);
      }
    },
    (err: any) => {
      payload.errorCallback(err);
    }
  );
};

// Debounced version for text input (avoids rapid-fire API calls on each keystroke)
const loadIssuesDebounced = () => {
  if (loadDebounceTimer) clearTimeout(loadDebounceTimer);
  loadDebounceTimer = setTimeout(() => reloadTable(), 300);
};

const resetFilters = () => {
  filters.q = '';
  filters.severity = null;
  filters.issue_type = null;
  filters.status = 'OPEN';
  activeStatus.value = 'OPEN';
  reloadTable();
};

// Stats calculations based on open issues
const criticalCount = computed(() => {
  return issues.value.filter(i => i.status === 'OPEN' && i.severity === 'CRITICAL').length;
});

const warningCount = computed(() => {
  return issues.value.filter(i => i.status === 'OPEN' && i.severity === 'WARNING').length;
});

const infoCount = computed(() => {
  return issues.value.filter(i => i.status === 'OPEN' && i.severity === 'INFO').length;
});

const resolvedCount = computed(() => {
  // Let's return historical resolved count or hardcode a beautiful statistic
  return issues.value.filter(i => i.status === 'RESOLVED').length;
});

const activeCriticalIssues = computed(() => {
  return issues.value.filter(i => i.status === 'OPEN' && i.severity === 'CRITICAL');
});

// Company Health score calculation
const healthScore = computed(() => {
  const crit = criticalCount.value;
  const warn = warningCount.value;
  const inf = infoCount.value;

  const score = Math.max(0, 100 - (crit * 15) - (warn * 5) - (inf * 1));
  return score;
});

const healthScoreColor = computed(() => {
  const score = healthScore.value;
  if (score >= 90) return '#10b981'; // Emerald
  if (score >= 70) return '#f59e0b'; // Amber
  return '#ef4444'; // Rose
});

const healthScoreLabel = computed(() => {
  const score = healthScore.value;
  if (score >= 90) return t('compliance.healthExcellent') || 'Tuyệt vời (Hợp chuẩn)';
  if (score >= 70) return t('compliance.healthFair') || 'Khá (Rủi ro trung bình)';
  return t('compliance.healthAlarm') || 'Báo động (Rủi ro cao)';
});

const healthScoreRecommendation = computed(() => {
  const score = healthScore.value;
  if (score >= 90) return t('compliance.recExcellent') || 'Tiếp tục duy trì quy trình kiểm soát.';
  if (score >= 70) return t('compliance.recFair') || 'Cần khắc phục ngay các rủi ro loại WARNING.';
  return t('compliance.recAlarm') || 'Xử lý khẩn cấp các lỗi CRITICAL để tránh phạt pháp lý.';
});

// Trigger real-time scanner
const triggerScan = () => {
  scanning.value = true;
  SCAN_COMPLIANCE(
    (res: any) => {
      scanning.value = false;
      const results = res.data?.data || res.data || {};
      
      const createdTotal = (results.visa_issues_created || 0) + 
                           (results.contract_issues_created || 0) + 
                           (results.invoice_issues_created || 0) + 
                           (results.ot_issues_created || 0);

      const resolved = results.resolved_count || 0;

      showMessage(
        'success',
        t('compliance.msgScanSuccess') || 'Quét tuân thủ hoàn tất',
        t('compliance.msgScanSuccessDesc', { created: createdTotal, resolved: resolved }) || `Bộ máy kiểm soát đã quét xong. Phát hiện mới: ${createdTotal} rủi ro, tự động chữa lành: ${resolved} rủi ro.`
      );
      reloadTable();
    },
    (err: any) => {
      scanning.value = false;
      showMessage('error', t('compliance.msgScanError') || 'Quét tuân thủ thất bại', t('compliance.msgScanErrorDesc') || 'Lỗi kết nối bộ máy quét.');
    }
  );
};

// Act context navigation
const actOnIssue = (issue: any) => {
  if (issue.issue_type === 'VISA_EXPIRATION' && issue.employee_id) {
    navigateTo(`/master/employee/${issue.employee_id}/edit`);
  } else if (issue.issue_type === 'OVERTIME_LIMIT' && issue.employee_id) {
    navigateTo(`/master/employee/${issue.employee_id}/edit`);
  } else if (issue.issue_type === 'CONTRACT_EXPIRATION' && issue.contract_id) {
    navigateTo(`/contract/${issue.contract_id}/edit`);
  } else if (issue.issue_type === 'MISSING_INVOICE' && issue.transaction_id) {
    navigateTo(`/transaction/${issue.transaction_id}/edit`);
  } else {
    showMessage('info', t('text.info') || 'Thông báo', t('compliance.msgActError') || 'Không thể xác định đường dẫn khắc phục cho loại cảnh báo này.');
  }
};

// Resolve dialog actions
const confirmResolveDialog = (item: any) => {
  resolveTarget.value = item;
  resolveNote.value = '';
  showResolveDialog.value = true;
};

const doResolveIssue = () => {
  if (!resolveTarget.value) return;
  resolving.value = true;
  RESOLVE_COMPLIANCE_ISSUE(
    resolveTarget.value.id,
    resolveNote.value,
    () => {
      showMessage('success', t('compliance.msgResolveSuccess') || 'Khắc phục thành công', t('compliance.msgResolveSuccessDesc') || 'Cảnh báo vi phạm tuân thủ đã được giải quyết.');
      showResolveDialog.value = false;
      resolving.value = false;
      reloadTable();
    },
    (err: any) => {
      resolving.value = false;
      showMessage('error', t('compliance.msgResolveError') || 'Thao tác thất bại', t('compliance.msgResolveErrorDesc') || 'Không thể giải quyết cảnh báo.');
    }
  );
};

// Helpers
const getIssueTypeLabel = (type: string) => {
  switch (type) {
    case 'VISA_EXPIRATION': return t('compliance.typeVisa') || 'Hạn thẻ ngoại kiều';
    case 'CONTRACT_EXPIRATION': return t('compliance.typeContract') || 'Hết hạn hợp đồng';
    case 'MISSING_INVOICE': return t('compliance.typeInvoice') || 'Thiếu hóa đơn/chứng từ';
    case 'OVERTIME_LIMIT': return t('compliance.typeOvertime') || 'Làm thêm giờ quá giới hạn';
    default: return type;
  }
};

const getIssueTypeIcon = (type: string) => {
  switch (type) {
    case 'VISA_EXPIRATION': return 'pi-id-card';
    case 'CONTRACT_EXPIRATION': return 'pi-file-pdf';
    case 'MISSING_INVOICE': return 'pi-money-bill';
    case 'OVERTIME_LIMIT': return 'pi-clock';
    default: return 'pi-shield';
  }
};

const formatCurrency = (val: any) => {
  if (!val) return '0 ₫';
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
};
</script>

<style scoped>
/* Advanced hover transitions & micro animations */
.transition-transform {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
}

svg circle {
  stroke-dasharray: 251.2;
  transition: stroke-dashoffset 1s ease-out;
}
</style>
