<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <!-- Access Denied Card (If not manager/admin) -->
    <div v-if="!isManagerOrAdmin && !checkingAccess" class="bg-white dark:bg-surface-900 p-12 rounded-xl border border-surface-200 dark:border-surface-700  shadow-md flex flex-col items-center justify-center text-center space-y-6">
      <div class="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shadow-inner">
        <i class="pi pi-lock text-4xl"></i>
      </div>
      <div class="space-y-2">
        <h2 class="text-2xl font-black text-surface-900 dark:text-surface-0 tracking-tight">{{ $t('timesheet.accessDenied') }}</h2>
        <p class="text-sm text-surface-500 dark:text-surface-400 max-w-md">
          {{ $t('timesheet.accessDeniedDesc') }}
        </p>
      </div>
      <Button :label="$t('timesheet.backHome')" icon="pi pi-home" class="!rounded-xl" @click="goHome" />
    </div>

    <!-- Manager Panel -->
    <template v-else-if="isManagerOrAdmin">
      <!-- Header Section -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700  shadow-md">
        <div class="flex items-center gap-5">
          <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
            <i class="pi pi-sliders-h text-2xl"></i>
          </div>
          <div class="space-y-1">
            <h1 class="text-3xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
              {{ $t('timesheet.adminTitle') }}
            </h1>
            <p class="text-sm text-surface-500 dark:text-surface-400 font-medium">
              {{ $t('timesheet.adminDesc') }}
            </p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <!-- Quick Manual Record Button -->
          <Button
            :label="$t('timesheet.addManual')"
            icon="pi pi-plus-circle"
            class="!rounded-xl !shadow-lg !shadow-primary/25 !font-bold transition-transform hover:scale-105"
            @click="openManualDialog()"
          />
        </div>
      </div>

      <!-- Tabs Navigation -->
      <div class="flex border-b border-surface-200 dark:border-surface-800 gap-2 sm:gap-4 overflow-x-auto whitespace-nowrap pb-1">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          class="pb-3 px-3 sm:px-4 text-xs sm:text-sm font-black tracking-tight uppercase border-b-2 transition-all shrink-0"
          :class="[
            activeTab === tab.value ? 'border-primary text-primary' : 'border-transparent text-surface-400 hover:text-surface-650 dark:hover:text-surface-200'
          ]"
          @click="activeTab = tab.value"
        >
          <i :class="tab.icon" class="mr-2"></i> {{ tab.label }}
        </button>
      </div>

      <!-- Tab 1: All Records Log List -->
      <TimesheetRecordsTab ref="recordsTab" v-if="activeTab === 'records'" />

      <!-- Tab 2: Attendance Statistics Month Report -->
      <TimesheetStatsTab v-if="activeTab === 'statistics'" />

      <!-- Tab 3: Payroll / Tính lương -->
      <TimesheetPayrollTab v-if="activeTab === 'payroll'" />

      <!-- Tab 4: Working Hour Configurations -->
      <TimesheetConfigsTab v-if="activeTab === 'configs'" />

      <!-- Tab 5: Shift Assignments (New calendar grid design) -->
      <TimesheetShiftsTab v-if="activeTab === 'shift-assignments'" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useApiStore } from "~/stores/api";
import TimesheetRecordsTab from '~/components/timesheet/TimesheetRecordsTab.vue';
import TimesheetStatsTab from '~/components/timesheet/TimesheetStatsTab.vue';
import TimesheetPayrollTab from '~/components/timesheet/TimesheetPayrollTab.vue';
import TimesheetConfigsTab from '~/components/timesheet/TimesheetConfigsTab.vue';
import TimesheetShiftsTab from '~/components/timesheet/TimesheetShiftsTab.vue';

const router = useRouter();
const apiStore = useApiStore();
const { t } = useI18n();

const checkingAccess = ref(true);
const activeTab = ref('records');
const recordsTab = ref<InstanceType<typeof TimesheetRecordsTab> | null>(null);

const userInfo = computed(() => {
  return apiStore.userInfo || JSON.parse(localStorage.getItem("userInfo") || "{}");
});

const isManagerOrAdmin = computed(() => {
  const role = userInfo.value?.role;
  return role === 'ADMIN' || role === 'MANAGER' || role === 'HR' || role === 'ACCOUNTANT';
});

const tabs = computed(() => {
  const role = userInfo.value?.role;
  const list = [
    { label: t('timesheet.tabHistory'), value: 'records', icon: 'pi pi-calendar' },
    { label: t('timesheet.tabStats'), value: 'statistics', icon: 'pi pi-chart-bar' },
  ];

  if (role === 'ADMIN' || role === 'MANAGER' || role === 'ACCOUNTANT') {
    list.push({ label: t('timesheet.tabPayroll'), value: 'payroll', icon: 'pi pi-money-bill' });
  }

  if (role === 'ADMIN' || role === 'MANAGER' || role === 'HR') {
    list.push({ label: t('timesheet.tabConfigs'), value: 'configs', icon: 'pi pi-clock' });
    list.push({ label: t('timesheet.tabShiftAssignments'), value: 'shift-assignments', icon: 'pi pi-users' });
  }

  return list;
});

const openManualDialog = () => {
  if (activeTab.value !== 'records') {
    activeTab.value = 'records';
    nextTick(() => {
      recordsTab.value?.openManualDialog();
    });
  } else {
    recordsTab.value?.openManualDialog();
  }
};

const goHome = () => router.push('/');

onMounted(() => {
  checkingAccess.value = false;
});
</script>

<style scoped>
</style>
