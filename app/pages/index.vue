<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
     <!-- Critical Compliance Banner on Dashboard -->
    <div 
      v-if="stats.kpi.critical_issues > 0" 
      class="bg-gradient-to-r from-rose-600 to-rose-700 text-white px-6 py-5 rounded-[2rem] border border-rose-500 shadow-xl shadow-rose-500/10 flex items-center justify-between gap-4 animate-pulse cursor-pointer"
      @click="navigateTo('/compliance')"
    >
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center animate-bounce">
          <i class="pi pi-shield text-xl"></i>
        </div>
        <div>
          <span class="text-[10px] font-black uppercase tracking-widest block text-rose-200">{{ $t('dashboard.complianceBannerTitle') }}</span>
          <p class="text-sm font-bold mt-0.5">
            {{ $t('dashboard.complianceBannerDesc', { count: stats.kpi.critical_issues }) }}
          </p>
        </div>
      </div>
      <i class="pi pi-arrow-right text-lg mr-2"></i>
    </div>

    <!-- Welcome Header -->
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white/40 dark:bg-surface-900/40 p-8 rounded-[2.5rem] border border-white dark:border-surface-800 backdrop-blur-md shadow-2xl shadow-surface-200/5">
      <div class="space-y-1">
        <h1 class="text-3xl font-black text-surface-900 dark:text-surface-0 tracking-tighter flex items-center gap-3">
          <i class="pi pi-chart-bar text-primary"></i>
          {{ $t('dashboard.enterpriseDashboard') }}
        </h1>
        <p class="text-surface-500 dark:text-surface-400 text-sm font-medium">
          {{ $t('dashboard.welcomeUser', { name: userInfo?.name || $t('dashboard.admin') }) }}
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <!-- Year Selector Filter -->
        <div class="flex items-center gap-2 bg-white dark:bg-surface-950 px-4 py-2 rounded-2xl border border-surface-150 dark:border-surface-850 shadow-sm">
          <span class="text-xs font-black uppercase tracking-wider text-surface-400">{{ $t('dashboard.fiscalYear') }}</span>
          <select 
            v-model="selectedYear" 
            class="bg-transparent text-sm font-bold text-surface-900 dark:text-surface-0 focus:outline-none cursor-pointer"
            @change="fetchDashboardData"
          >
            <option :value="2024">2024</option>
            <option :value="2025">2025</option>
            <option :value="2026">2026</option>
            <option :value="2027">2027</option>
          </select>
        </div>

        <Button 
          icon="pi pi-shield" 
          :label="$t('dashboard.btnComplianceControl')"
          severity="danger" 
          class="!rounded-2xl !px-5 !py-3 !shadow-lg !shadow-rose-500/20 !font-bold !text-xs !uppercase !tracking-wider"
          @click="navigateTo('/compliance')"
        />

        <Button 
          icon="pi pi-refresh" 
          severity="secondary" 
          variant="text" 
          class="!rounded-2xl !w-12 !h-12 !bg-white/50 dark:!bg-surface-800/50 !backdrop-blur-sm"
          :loading="loading"
          @click="fetchDashboardData"
        />
      </div>
    </div>

    <!-- Quick Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- 1. Total Revenue -->
      <div class="bg-white dark:bg-surface-900 p-6 rounded-[2rem] border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 hover:shadow-2xl hover:border-emerald-500/20 transition-all duration-500 group relative overflow-hidden">
        <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        <div class="flex items-start justify-between relative z-10">
          <div class="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg shadow-emerald-500/5">
            <i class="pi pi-wallet text-emerald-500 text-2xl"></i>
          </div>
          <span class="text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            {{ $t('dashboard.revenueYearBadge') }}
          </span>
        </div>
        <div class="mt-6 relative z-10">
          <h3 class="text-[10px] font-bold text-surface-400 uppercase tracking-[0.2em] mb-1">{{ $t('dashboard.revenueYearTitle') }}</h3>
          <p class="text-2xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ formatCurrency(stats.kpi.total_revenue) }}
          </p>
        </div>
      </div>

      <!-- 2. Total Expense -->
      <div class="bg-white dark:bg-surface-900 p-6 rounded-[2rem] border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 hover:shadow-2xl hover:border-amber-500/20 transition-all duration-500 group relative overflow-hidden">
        <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        <div class="flex items-start justify-between relative z-10">
          <div class="w-14 h-14 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg shadow-amber-500/5">
            <i class="pi pi-shopping-bag text-amber-500 text-2xl"></i>
          </div>
          <span class="text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
            {{ $t('dashboard.expenseYearBadge') }}
          </span>
        </div>
        <div class="mt-6 relative z-10">
          <h3 class="text-[10px] font-bold text-surface-400 uppercase tracking-[0.2em] mb-1">{{ $t('dashboard.expenseYearTitle') }}</h3>
          <p class="text-2xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ formatCurrency(stats.kpi.total_expense) }}
          </p>
        </div>
      </div>

      <!-- 3. Net Income -->
      <div class="bg-white dark:bg-surface-900 p-6 rounded-[2rem] border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 hover:shadow-2xl hover:border-blue-500/20 transition-all duration-500 group relative overflow-hidden">
        <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        <div class="flex items-start justify-between relative z-10">
          <div class="w-14 h-14 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg shadow-blue-500/5">
            <i class="pi pi-chart-line text-blue-500 text-2xl"></i>
          </div>
          <span 
            class="text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full"
            :class="stats.kpi.net_income >= 0 ? 'bg-emerald-500/10 text-emerald-600' : 'bg-rose-500/10 text-rose-600'"
          >
            {{ stats.kpi.net_income >= 0 ? $t('dashboard.netIncomePositive') : $t('dashboard.netIncomeNegative') }}
          </span>
        </div>
        <div class="mt-6 relative z-10">
          <h3 class="text-[10px] font-bold text-surface-400 uppercase tracking-[0.2em] mb-1">{{ $t('dashboard.netIncomeTitle') }}</h3>
          <p class="text-2xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ formatCurrency(stats.kpi.net_income) }}
          </p>
        </div>
      </div>

      <!-- 4. Legal Compliance -->
      <div 
        class="bg-white dark:bg-surface-900 p-6 rounded-[2rem] border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden cursor-pointer"
        :class="complianceTheme.border"
        @click="navigateTo('/compliance')"
      >
        <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        <div class="flex items-start justify-between relative z-10">
          <div 
            class="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg"
            :class="complianceTheme.bg"
          >
            <i class="pi pi-shield text-2xl" :class="complianceTheme.text"></i>
          </div>
          <span 
            class="text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full animate-pulse"
            :class="complianceTheme.badge"
          >
            {{ complianceTheme.statusText }}
          </span>
        </div>
        <div class="mt-6 relative z-10">
          <h3 class="text-[10px] font-bold text-surface-400 uppercase tracking-[0.2em] mb-1">{{ $t('dashboard.complianceScoreTitle') }}</h3>
          <p class="text-2xl font-black tracking-tighter" :class="complianceTheme.text">
            {{ stats.kpi.compliance_score }}%
          </p>
        </div>
      </div>
    </div>

    <!-- Quick Master Info Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Active Employees -->
      <div class="bg-surface-50 dark:bg-surface-950 p-6 rounded-3xl border border-surface-100 dark:border-surface-900 flex items-center gap-4">
        <div class="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center">
          <i class="pi pi-users text-xl"></i>
        </div>
        <div>
          <span class="text-xs text-surface-400 font-bold uppercase tracking-wider block">{{ $t('dashboard.activeEmployees') }}</span>
          <span class="text-xl font-black text-surface-900 dark:text-surface-0">
            {{ $t('dashboard.employeesCount', { active: stats.kpi.active_employees, total: stats.kpi.total_employees }) }}
          </span>
        </div>
      </div>

      <!-- Active Contracts -->
      <div class="bg-surface-50 dark:bg-surface-950 p-6 rounded-3xl border border-surface-100 dark:border-surface-900 flex items-center gap-4">
        <div class="w-12 h-12 bg-cyan-500/10 text-cyan-500 rounded-2xl flex items-center justify-center">
          <i class="pi pi-file-pdf text-xl"></i>
        </div>
        <div>
          <span class="text-xs text-surface-400 font-bold uppercase tracking-wider block">{{ $t('dashboard.activeContracts') }}</span>
          <span class="text-xl font-black text-surface-900 dark:text-surface-0">
            {{ $t('dashboard.contractsCount', { active: stats.kpi.active_contracts, total: stats.kpi.total_contracts }) }}
          </span>
        </div>
      </div>

      <!-- Pending Leave Requests -->
      <div 
        class="bg-surface-50 dark:bg-surface-950 p-6 rounded-3xl border border-surface-100 dark:border-surface-900 flex items-center gap-4 cursor-pointer hover:border-amber-500/30 transition-colors"
        @click="navigateTo('/leave-request/pending')"
      >
        <div class="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center">
          <i class="pi pi-calendar-times text-xl"></i>
        </div>
        <div>
          <span class="text-xs text-surface-400 font-bold uppercase tracking-wider block">{{ $t('dashboard.pendingLeaves') }}</span>
          <span class="text-xl font-black text-surface-900 dark:text-surface-0 flex items-center gap-2">
            {{ $t('dashboard.pendingLeavesCount', { count: stats.kpi.pending_leaves }) }}
            <Badge v-if="stats.kpi.pending_leaves > 0" :value="stats.kpi.pending_leaves" severity="warn" />
          </span>
        </div>
      </div>
    </div>

    <!-- Main Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- 1. Revenue/Expense Monthly Trend Line Chart (Left) -->
      <div class="lg:col-span-8 space-y-4">
        <div class="p-6 bg-white dark:bg-surface-950 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl flex flex-col justify-between h-full">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 class="text-lg font-black text-surface-900 dark:text-surface-0 tracking-tight">
                {{ $t('dashboard.cashflowTitle', { year: selectedYear }) }}
              </h3>
              <p class="text-xs text-surface-400 font-medium">{{ $t('dashboard.cashflowDesc') }}</p>
            </div>
            <!-- Toggle Metric -->
            <div class="flex bg-surface-100 dark:bg-surface-900 p-1 rounded-xl w-fit">
              <button 
                v-for="mode in ['revenue', 'expense', 'profit']" 
                :key="mode"
                type="button" 
                class="px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase"
                :class="activeChartMode === mode ? 'bg-white dark:bg-surface-950 text-primary shadow-sm' : 'text-surface-500 hover:text-surface-900 dark:hover:text-surface-200'"
                @click="activeChartMode = mode"
              >
                {{ mode === 'revenue' ? $t('dashboard.optRevenue') : mode === 'expense' ? $t('dashboard.optExpense') : $t('dashboard.optProfit') }}
              </button>
            </div>
          </div>

          <AppChartLine 
            :data="trendChartData" 
            :title="''"
            class="!p-0 !border-none !shadow-none !bg-transparent"
          />
        </div>
      </div>

      <!-- 2. Contract Distribution Donut Chart (Right) -->
      <div class="lg:col-span-4">
        <AppChartDonut 
          :data="stats.contracts_by_type" 
          :title="$t('dashboard.contractStructure')" 
          :subtitle="$t('dashboard.contractStructureDesc')" 
        />
      </div>
    </div>

    <!-- Second Row Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Expense Category Breakdown Bar Chart (Left) -->
      <div class="lg:col-span-6">
        <AppChartBar 
          :data="stats.expense_by_category" 
          :title="$t('dashboard.topExpenses')" 
          :subtitle="$t('dashboard.topExpensesDesc')" 
        />
      </div>

      <!-- Department Distribution Pie Chart (Right) -->
      <div class="lg:col-span-6">
        <AppChartPie 
          :data="stats.department_distribution" 
          :title="$t('dashboard.staffDensity')" 
          :subtitle="$t('dashboard.staffDensityDesc')" 
        />
      </div>
    </div>

    <!-- Third Row Charts: Demographics -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Age Distribution Bar Chart (Left) -->
      <div class="lg:col-span-6">
        <AppChartBar 
          :data="stats.age_distribution" 
          title="Phân bố Độ tuổi Nhân sự" 
          subtitle="Tỷ lệ nhân viên theo nhóm tuổi trong doanh nghiệp" 
        />
      </div>

      <!-- Gender Distribution Donut Chart (Right) -->
      <div class="lg:col-span-6">
        <AppChartDonut 
          :data="stats.gender_distribution" 
          title="Cơ cấu Giới tính Nhân sự" 
          subtitle="Tỷ lệ giới tính nam, nữ trong doanh nghiệp" 
        />
      </div>
    </div>

    <!-- Data Tables: Deep Attendance and Recent Transactions -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- 1. Deep Attendance Monitoring (Left) -->
      <div class="lg:col-span-7 bg-white dark:bg-surface-950 p-6 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 class="text-lg font-black text-surface-900 dark:text-surface-0 tracking-tight flex items-center gap-2">
              <i class="pi pi-clock text-primary"></i>
              {{ $t('dashboard.timesheetStat') }}
            </h3>
            <p class="text-xs text-surface-400 font-medium">{{ $t('dashboard.timesheetStatDesc') }}</p>
          </div>
          <Button 
            :label="$t('dashboard.btnTimesheetDetail')" 
            icon="pi pi-external-link" 
            severity="secondary" 
            variant="text" 
            class="!text-xs !font-bold"
            @click="navigateTo('/timesheet/manage')"
          />
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-surface-100 dark:border-surface-900 text-xs font-black uppercase text-surface-400 tracking-wider">
                <th class="py-3 px-2">{{ $t('dashboard.colEmpCode') }}</th>
                <th class="py-3 px-2">{{ $t('dashboard.colEmpName') }}</th>
                <th class="py-3 px-2 text-center">{{ $t('dashboard.colPresent') }}</th>
                <th class="py-3 px-2 text-center">{{ $t('dashboard.colAbsent') }}</th>
                <th class="py-3 px-2 text-center">{{ $t('dashboard.colTotalHours') }}</th>
                <th class="py-3 px-2 text-center">{{ $t('dashboard.colOvertime') }}</th>
                <th class="py-3 px-2 text-right">{{ $t('dashboard.colOtStatus') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-surface-100 dark:divide-surface-900 text-sm">
              <tr 
                v-for="row in stats.attendance_summary" 
                :key="row.id" 
                class="hover:bg-surface-50 dark:hover:bg-surface-900/30 transition-colors"
              >
                <td class="py-3 px-2 font-mono font-bold text-xs text-surface-600 dark:text-surface-400">
                  {{ row.code }}
                </td>
                <td class="py-3 px-2 font-bold text-surface-800 dark:text-surface-200">
                  {{ row.full_name }}
                </td>
                <td class="py-3 px-2 text-center font-bold text-emerald-600">
                  {{ row.days_present }}
                </td>
                <td class="py-3 px-2 text-center font-bold" :class="row.days_absent > 0 ? 'text-amber-500' : 'text-surface-400'">
                  {{ row.days_absent }}
                </td>
                <td class="py-3 px-2 text-center font-black">
                  {{ row.total_hours }}h
                </td>
                <td class="py-3 px-2 text-center font-black text-primary">
                  {{ row.overtime_hours }}h
                </td>
                <td class="py-3 px-2 text-right">
                  <span 
                    class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider"
                    :class="getOtWarningClass(row.overtime_hours)"
                  >
                    {{ getOtWarningText(row.overtime_hours) }}
                  </span>
                </td>
              </tr>
              <tr v-if="!stats.attendance_summary || stats.attendance_summary.length === 0">
                <td colspan="7" class="py-6 text-center text-surface-400">
                  {{ $t('dashboard.noTimesheetData') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 2. Recent Transactions List (Right) -->
      <div class="lg:col-span-5 bg-white dark:bg-surface-950 p-6 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl space-y-4 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-4 mb-4">
            <div>
              <h3 class="text-lg font-black text-surface-900 dark:text-surface-0 tracking-tight flex items-center gap-2">
                <i class="pi pi-credit-card text-primary"></i>
                {{ $t('dashboard.recentTransactions') }}
              </h3>
              <p class="text-xs text-surface-400 font-medium">{{ $t('dashboard.recentTransactionsDesc') }}</p>
            </div>
            <Button 
              :label="$t('dashboard.btnCashbook')" 
              icon="pi pi-angle-right" 
              severity="secondary" 
              variant="text" 
              class="!text-xs !font-bold"
              @click="navigateTo('/transaction')"
            />
          </div>

          <div class="space-y-4">
            <div 
              v-for="txn in stats.recent_transactions" 
              :key="txn.id" 
              class="flex items-center justify-between p-3.5 rounded-2xl bg-surface-50 dark:bg-surface-900/35 border border-surface-100 dark:border-surface-900 hover:border-primary/20 transition-all duration-300 group"
            >
              <div class="flex items-center gap-3">
                <div 
                  class="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                  :class="txn.type === 'REVENUE' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-rose-500/10 text-rose-600'"
                >
                  <i :class="txn.type === 'REVENUE' ? 'pi pi-plus-circle' : 'pi pi-minus-circle'"></i>
                </div>
                <div class="space-y-0.5">
                  <span class="text-xs font-mono font-bold text-surface-400 block">{{ txn.code }}</span>
                  <span class="text-xs font-black text-surface-800 dark:text-surface-200">
                    {{ txn.category || $t('dashboard.unclassified') }}
                  </span>
                </div>
              </div>
              <div class="text-right space-y-0.5">
                <span 
                  class="text-sm font-black block"
                  :class="txn.type === 'REVENUE' ? 'text-emerald-500' : 'text-rose-500'"
                >
                  {{ txn.type === 'REVENUE' ? '+' : '-' }}{{ formatCurrency(txn.amount) }}
                </span>
                <span class="text-[10px] font-bold text-surface-400 block">
                  {{ formatDate(txn.transaction_date) }}
                </span>
              </div>
            </div>
            <div v-if="!stats.recent_transactions || stats.recent_transactions.length === 0" class="py-8 text-center text-surface-400">
              {{ $t('dashboard.noTransactions') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useApiStore } from '~/stores/api';
import { GET_DASHBOARD_STATS } from '~/apis/dashboard';
import { showMessage } from '~/utils/global';

// Chart components
import AppChartBar from '~/components/charts/AppChartBar.vue';
import AppChartDonut from '~/components/charts/AppChartDonut.vue';
import AppChartLine from '~/components/charts/AppChartLine.vue';
import AppChartPie from '~/components/charts/AppChartPie.vue';

const { t } = useI18n();
const apiStore = useApiStore();
const loading = ref(false);
const selectedYear = ref(2026);
const activeChartMode = ref<'revenue' | 'expense' | 'profit'>('revenue');

// Default initial state matching the aggregated structure
const stats = ref({
  year: 2026,
  kpi: {
    total_employees: 0,
    active_employees: 0,
    total_contracts: 0,
    active_contracts: 0,
    expiring_contracts: 0,
    total_revenue: 0,
    total_expense: 0,
    net_income: 0,
    pending_leaves: 0,
    open_compliance_issues: 0,
    critical_issues: 0,
    compliance_score: 100,
  },
  monthly_trend: [] as any[],
  contracts_by_type: [] as any[],
  expense_by_category: [] as any[],
  attendance_summary: [] as any[],
  compliance_by_type: [] as any[],
  recent_transactions: [] as any[],
  department_distribution: [] as any[],
  gender_distribution: [] as any[],
  age_distribution: [] as any[],
});

// User details
const userInfo = computed(() => {
  if (process.client) {
    return apiStore.userInfo || JSON.parse(localStorage.getItem('userInfo') || '{}');
  }
  return null;
});

// Compliance indicators dynamic theme
const complianceTheme = computed(() => {
  const score = stats.value.kpi.compliance_score;
  if (score >= 90) {
    return {
      border: 'hover:border-emerald-500/30',
      bg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
      text: 'text-emerald-500',
      badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      statusText: t('dashboard.compCompliant'),
    };
  } else if (score >= 70) {
    return {
      border: 'hover:border-amber-500/30',
      bg: 'bg-amber-500/10 dark:bg-amber-500/20',
      text: 'text-amber-500',
      badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
      statusText: t('dashboard.compWarning'),
    };
  } else {
    return {
      border: 'hover:border-rose-500/30 border-rose-500/20',
      bg: 'bg-rose-500/10 dark:bg-rose-500/20 animate-pulse',
      text: 'text-rose-500',
      badge: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 font-black',
      statusText: t('dashboard.compDanger'),
    };
  }
});

// Computed dataset for AppChartLine based on active chart mode
const trendChartData = computed(() => {
  if (!stats.value.monthly_trend || stats.value.monthly_trend.length === 0) {
    return [
      { label: 'Jan', value: 0 },
      { label: 'Feb', value: 0 },
      { label: 'Mar', value: 0 },
      { label: 'Apr', value: 0 },
      { label: 'May', value: 0 },
      { label: 'Jun', value: 0 },
    ];
  }

  return stats.value.monthly_trend.map((t: any) => ({
    label: t.label,
    value: activeChartMode.value === 'revenue' 
      ? t.revenue 
      : activeChartMode.value === 'expense' 
        ? t.expense 
        : t.profit,
  }));
});

// Fetch all dashboard stats
const fetchDashboardData = () => {
  loading.value = true;
  GET_DASHBOARD_STATS(
    { year: selectedYear.value },
    (res: any) => {
      try {
        const payload = res?.data?.data || res?.data || res;
        if (payload && payload.kpi) {
          stats.value = payload;
        }
      } catch (e) {
        console.error('Error parsing dashboard metrics:', e);
      } finally {
        loading.value = false;
      }
    },
    (err: any) => {
      loading.value = false;
      showMessage('error', t('dashboard.msgConnectError'), err?.message || t('dashboard.msgSyncError'));
    }
  );
};

// Utilities
const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
};

const formatDate = (val: string) => {
  if (!val) return '';
  return new Date(val).toLocaleDateString('vi-VN');
};

const getOtWarningClass = (hours: number) => {
  if (hours > 80) return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold';
  if (hours > 45) return 'bg-amber-500/10 text-amber-600 dark:text-amber-400';
  if (hours > 30) return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
  return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
};

const getOtWarningText = (hours: number) => {
  if (hours > 80) return t('dashboard.otOverLimit');
  if (hours > 45) return t('dashboard.otWarning');
  if (hours > 30) return t('dashboard.otApproaching');
  return t('dashboard.otSafe');
};

onMounted(() => {
  fetchDashboardData();
});
</script>
