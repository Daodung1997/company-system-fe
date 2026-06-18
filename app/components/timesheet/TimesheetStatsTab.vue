<template>
  <div class="bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-200 dark:border-surface-800 pb-6">
      <div>
        <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 tracking-tight">{{ $t('timesheet.monthStats') }}</h3>
        <p class="text-xs text-surface-400 font-semibold mt-1">{{ $t('timesheet.monthStatsDesc') }}</p>
      </div>
      <div class="flex items-center gap-3">
        <span class="relative w-64">
          <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-surface-400"></i>
          <input
            v-model="statsSearchQuery"
            type="text"
            :placeholder="$t('timesheet.searchPlaceholder')"
            class="w-full pl-9 pr-4 py-2 text-sm bg-transparent border border-surface-200 dark:border-surface-800 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-surface-400 text-surface-900 dark:text-surface-100"
            @input="handleStatsSearch"
          />
        </span>
        <div class="w-48">
          <DatePicker
            v-model="statsMonthValue"
            view="month"
            dateFormat="mm/yy"
            :placeholder="$t('timesheet.selectStatsMonth')"
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            @date-select="onStatsMonthChange"
          />
        </div>
      </div>
    </div>

    <!-- View Mode Toggle Buttons -->
    <div class="flex items-center gap-2 p-1.5 bg-surface-100 dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-700 w-fit">
      <button
        type="button"
        class="px-4 py-2 text-xs font-bold rounded-lg transition-all"
        :class="[
          statsViewMode === 'summary'
            ? 'bg-white dark:bg-surface-800 text-primary shadow-sm border border-surface-200 dark:border-surface-700'
            : 'text-surface-500 hover:text-surface-700 dark:text-surface-400 hover:dark:text-surface-200'
        ]"
        @click="statsViewMode = 'summary'"
      >
        <i class="pi pi-list mr-1.5"></i> {{ $t('timesheet.statsSummary') }}
      </button>
      <button
        type="button"
        class="px-4 py-2 text-xs font-bold rounded-lg transition-all"
        :class="[
          statsViewMode === 'calendar'
            ? 'bg-white dark:bg-surface-800 text-primary shadow-sm border border-surface-200 dark:border-surface-700'
            : 'text-surface-500 hover:text-surface-700 dark:text-surface-400 hover:dark:text-surface-200'
        ]"
        @click="statsViewMode = 'calendar'"
      >
        <i class="pi pi-calendar mr-1.5"></i> {{ $t('timesheet.stats30Days') }}
      </button>
    </div>

    <!-- View 1: Summary Table -->
    <div v-if="statsViewMode === 'summary'" class="overflow-auto max-h-[58vh] bg-white dark:bg-surface-950 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm transition-all duration-300">
      <table class="w-full border-collapse text-left">
        <thead class="bg-surface-50 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-700 sticky top-0 z-10">
          <tr>
            <th class="py-4 px-4 font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400">{{ $t('timesheet.no') }}</th>
            <th class="py-4 px-4 font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400">{{ $t('timesheet.staffCode') }}</th>
            <th class="py-4 px-4 font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400">{{ $t('timesheet.staffName') }}</th>
            <th class="py-4 px-4 font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 text-center">{{ $t('timesheet.onTime') }}</th>
            <th class="py-4 px-4 font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 text-center">{{ $t('timesheet.lateCol') }}</th>
            <th class="py-4 px-4 font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 text-center">{{ $t('timesheet.lateHoursPenalty') }}</th>
            <th class="py-4 px-4 font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 text-center">{{ $t('timesheet.excusedLeave') }}</th>
            <th class="py-4 px-4 font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 text-center">{{ $t('timesheet.absentNoExcuse') }}</th>
            <th class="py-4 px-4 font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 text-center">{{ $t('timesheet.totalAbsent') }}</th>
            <th class="py-4 px-4 font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 text-center min-w-[180px]">{{ $t('timesheet.workingDaysMax') }}</th>
            <th class="py-4 px-4 font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 text-center">{{ $t('timesheet.otHours') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-surface-200 dark:divide-surface-700">
          <tr v-if="loadingStats" class="text-center">
            <td colspan="11" class="py-12 text-surface-400 font-medium">
              <i class="pi pi-spin pi-spinner text-2xl mr-2 text-primary"></i> {{ $t('timesheet.loadingStats') }}
            </td>
          </tr>
          <tr v-else-if="statistics.length === 0" class="text-center">
            <td colspan="11" class="py-12 text-surface-400 font-medium">
              {{ $t('timesheet.noEmployeeMonth') }}
            </td>
          </tr>
          <tr
            v-else
            v-for="(item, idx) in statistics"
            :key="item.employee_id"
            class="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-200 border-b border-surface-200 dark:border-surface-700"
          >
            <td class="py-4 px-4 text-xs font-black text-surface-450 dark:text-surface-400 font-mono">
              {{ String(idx + 1).padStart(2, '0') }}
            </td>
            <td class="py-4 px-4 font-mono font-bold text-surface-700 dark:text-surface-300 text-xs">
              {{ item.employee_code || '-' }}
            </td>
            <td class="py-4 px-4 text-surface-750 dark:text-surface-200">
              <div class="flex flex-col">
                <span class="text-sm font-black text-surface-900 dark:text-surface-0 tracking-tight">{{ item.full_name }}</span>
                <span class="text-[10px] text-surface-450 dark:text-surface-400 font-mono mt-0.5">{{ item.email }}</span>
              </div>
            </td>
            <!-- Đúng giờ -->
            <td class="py-4 px-4 text-center font-bold text-emerald-600 font-mono text-xs">
              {{ item.total_present }}
            </td>
            <!-- Đi muộn -->
            <td class="py-4 px-4 text-center font-bold text-amber-600 font-mono text-xs">
              {{ item.total_late }}
            </td>
            <!-- Giờ muộn phạt -->
            <td class="py-4 px-4 text-center text-xs">
              <span
                v-if="item.total_late_hours > 0"
                class="inline-flex px-2.5 py-1 rounded-2xl bg-amber-500/10 text-amber-600 font-black font-mono text-[10px] border border-amber-500/25"
              >
                {{ item.total_late_hours }} {{ $t('timesheet.hours') }}
              </span>
              <span v-else class="text-surface-300 dark:text-surface-700 text-xs">-</span>
            </td>
            <!-- Nghỉ có phép -->
            <td class="py-4 px-4 text-center text-xs">
              <span
                v-if="item.approved_leave_days > 0"
                class="inline-flex px-2.5 py-1 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 font-black font-mono text-[10px] border border-blue-500/25"
              >
                {{ item.approved_leave_days }} {{ $t('timesheet.days') }}
              </span>
              <span v-else class="text-surface-300 dark:text-surface-700 text-xs">-</span>
            </td>
            <!-- Vắng không phép -->
            <td class="py-4 px-4 text-center text-xs">
              <span
                v-if="item.unapproved_absent_days > 0"
                class="inline-flex px-2.5 py-1 rounded-2xl bg-rose-500/10 text-rose-600 font-black font-mono text-[10px] border border-rose-500/25"
              >
                {{ item.unapproved_absent_days }}
              </span>
              <span v-else class="text-surface-300 dark:text-surface-700 text-xs">-</span>
            </td>
            <!-- Tổng vắng -->
            <td class="py-4 px-4 text-center font-bold text-rose-600 font-mono text-xs">
              {{ item.total_absent }}
            </td>
            <!-- Ngày đi làm / Tối đa (with progress bar) -->
            <td class="py-4 px-4 text-center text-xs">
              <div class="flex flex-col items-center gap-1.5">
                <div class="flex items-center gap-1">
                  <span class="font-black font-mono text-sm text-primary">{{ item.total_working_days }}</span>
                  <span class="text-surface-400 text-xs font-bold">/</span>
                  <span class="font-bold font-mono text-xs text-surface-500">{{ item.max_working_days || '-' }}</span>
                </div>
                <div v-if="item.max_working_days" class="w-28 h-2 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                  <div
                    class="h-full rounded-full transition-all duration-700 ease-out"
                    :class="[
                      getAttendancePercent(item) >= 95 ? 'bg-emerald-500' :
                      getAttendancePercent(item) >= 80 ? 'bg-primary' :
                      getAttendancePercent(item) >= 60 ? 'bg-amber-500' : 'bg-rose-500'
                    ]"
                    :style="{ width: Math.min(getAttendancePercent(item), 100) + '%' }"
                  ></div>
                </div>
                <span class="text-[9px] font-bold" :class="[
                  getAttendancePercent(item) >= 95 ? 'text-emerald-500' :
                  getAttendancePercent(item) >= 80 ? 'text-primary' :
                  getAttendancePercent(item) >= 60 ? 'text-amber-500' : 'text-rose-500'
                ]">
                  {{ getAttendancePercent(item) }}%
                </span>
              </div>
            </td>
            <!-- Giờ ngoài giờ (OT) -->
            <td class="py-4 px-4 text-center text-xs">
              <span
                v-if="item.total_overtime_hours > 0"
                class="inline-flex px-2.5 py-1 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400 font-black font-mono text-[10px] border border-violet-500/25"
              >
                {{ item.total_overtime_hours }} {{ $t('timesheet.hours') }}
              </span>
              <span v-else class="text-surface-300 dark:text-surface-700 text-xs">-</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination Bar for Statistics -->
    <BasePagination
      v-if="statsViewMode === 'summary' && statsTotal > 0"
      :currentPage="statsCurrentPage"
      :rowsPerPage="statsPerPage"
      :total="statsTotal"
      @onPageChange="handleStatsPageChange"
      class="border-t border-surface-100 dark:border-surface-800 pt-4"
    />

    <!-- View 2: Detailed 30-Day Calendar Grid -->
    <div v-else class="space-y-6">
      <div v-if="loadingStats" class="text-center block py-12 text-surface-400 font-medium bg-surface-50/50 dark:bg-surface-950/20 rounded-xl">
        <i class="pi pi-spin pi-spinner text-2xl mr-2 text-primary"></i> {{ $t('timesheet.loadingStats') }}
      </div>
      <div v-else-if="statistics.length === 0" class="text-center py-12 text-surface-400 font-medium bg-surface-50/50 dark:bg-surface-950/20 rounded-xl">
        {{ $t('timesheet.noEmployeeMonth') }}
      </div>
      <div v-else class="space-y-6">
        <!-- Employee Selection Bar -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-surface-50 dark:bg-surface-950 rounded-xl border border-surface-200 dark:border-surface-800">
          <div class="space-y-1">
            <label class="text-[10px] font-black uppercase tracking-wider text-surface-450">{{ $t('timesheet.statsCalendarFor') }}</label>
            <div class="w-72">
              <Select
                v-model="selectedEmployeeId"
                :options="employeeOptions"
                optionLabel="label"
                optionValue="value"
                class="w-full !rounded-xl"
              />
            </div>
          </div>
          
          <!-- Quick Legend Indicators -->
          <div class="flex flex-wrap items-center gap-3.5 text-[9px] font-bold uppercase tracking-wider text-surface-500">
            <span class="flex items-center gap-1.5">
              <span class="w-3 h-3 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-500 block"></span>
              <span>{{ $t('timesheet.legendLateEarly') }}</span>
            </span>
            <span class="flex items-center gap-1.5">
              <span class="w-3 h-3 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-500 block"></span>
              <span>{{ $t('timesheet.legendMissInOut') }}</span>
            </span>
            <span class="flex items-center gap-1.5">
              <span class="w-3 h-3 rounded-md bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 block"></span>
              <span>{{ $t('timesheet.legendWeekendHoliday') }}</span>
            </span>
            <span class="flex items-center gap-1.5">
              <span class="w-3 h-3 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 block"></span>
              <span>{{ $t('timesheet.legendOnTime') }}</span>
            </span>
          </div>
        </div>

        <!-- Calendar Grid of Days -->
        <div v-if="selectedEmployeeId" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          <div
            v-for="day in daysInStatsMonth"
            :key="day.dayNum"
            class="p-4 rounded-xl transition-all border relative overflow-hidden flex flex-col justify-between min-h-[110px]"
            :class="[
              getDayStatusColor(statistics.find(e => e.employee_id === selectedEmployeeId), day) === 'holiday' || getDayStatusColor(statistics.find(e => e.employee_id === selectedEmployeeId), day) === 'weekend'
                ? 'bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-700 opacity-80'
                : getDayStatusColor(statistics.find(e => e.employee_id === selectedEmployeeId), day) === 'absent' || getDayStatusColor(statistics.find(e => e.employee_id === selectedEmployeeId), day) === 'late' || getDayStatusColor(statistics.find(e => e.employee_id === selectedEmployeeId), day) === 'early'
                ? 'bg-rose-500/10 dark:bg-rose-950/20 border-rose-500/30 text-rose-700 dark:text-rose-400 shadow-md shadow-rose-500/2'
                : getDayStatusColor(statistics.find(e => e.employee_id === selectedEmployeeId), day) === 'missing'
                ? 'bg-amber-500/10 dark:bg-amber-950/20 border-amber-500/30 text-amber-700 dark:text-amber-400 shadow-md shadow-amber-500/2'
                : 'bg-emerald-500/5 dark:bg-emerald-950/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400'
            ]"
          >
            <!-- Cell Header -->
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold opacity-75 uppercase tracking-wide">
                {{ getDayNameMini(day.dayOfWeek) }}
              </span>
              <span class="text-sm font-black font-mono">
                {{ String(day.dayNum).padStart(2, '0') }}
              </span>
            </div>

            <!-- Time display -->
            <div class="mt-4 space-y-1">
              <div class="flex items-center justify-between text-[11px] font-bold font-mono">
                <span class="opacity-60 flex items-center gap-1"><i class="pi pi-sign-in text-[9px]"></i> {{ $t('timesheet.checkInCol') }}:</span>
                <span>
                  {{ getTimesheetForDay(statistics.find(e => e.employee_id === selectedEmployeeId), day.dateString)?.check_in
                    ? formatDateTime(getTimesheetForDay(statistics.find(e => e.employee_id === selectedEmployeeId), day.dateString).check_in)
                    : '--:--'
                  }}
                </span>
              </div>
              <div class="flex items-center justify-between text-[11px] font-bold font-mono">
                <span class="opacity-60 flex items-center gap-1"><i class="pi pi-sign-out text-[9px]"></i> {{ $t('timesheet.checkOutCol') }}:</span>
                <span>
                  {{ getTimesheetForDay(statistics.find(e => e.employee_id === selectedEmployeeId), day.dateString)?.check_out
                    ? formatDateTime(getTimesheetForDay(statistics.find(e => e.employee_id === selectedEmployeeId), day.dateString).check_out)
                    : '--:--'
                  }}
                </span>
              </div>
            </div>

            <!-- Status tag / info -->
            <div class="mt-2 text-[9px] font-black uppercase tracking-wider text-right">
              <span v-if="isSolarHoliday(day.dateString)">{{ $t('timesheet.holiday') }}</span>
              <span v-else-if="getTimesheetForDay(statistics.find(e => e.employee_id === selectedEmployeeId), day.dateString)?.leave_session === 'ALL'">{{ $t('timesheet.excusedLeaveAll') }}</span>
              <span v-else-if="getTimesheetForDay(statistics.find(e => e.employee_id === selectedEmployeeId), day.dateString)?.leave_session === 'MORNING'">{{ $t('timesheet.excusedLeaveMorning') }}</span>
              <span v-else-if="getTimesheetForDay(statistics.find(e => e.employee_id === selectedEmployeeId), day.dateString)?.leave_session === 'AFTERNOON'">{{ $t('timesheet.excusedLeaveAfternoon') }}</span>
              <span v-else-if="(getTimesheetForDay(statistics.find(e => e.employee_id === selectedEmployeeId), day.dateString) && getTimesheetForDay(statistics.find(e => e.employee_id === selectedEmployeeId), day.dateString).expected_start === null) || (!getTimesheetForDay(statistics.find(e => e.employee_id === selectedEmployeeId), day.dateString) && (day.dayOfWeek === 0 || day.dayOfWeek === 6))">{{ $t('timesheet.weekend') }}</span>
              <span v-else-if="getDayStatusColor(statistics.find(e => e.employee_id === selectedEmployeeId), day) === 'absent'">{{ $t('timesheet.absentNoExcuse') }}</span>
              <span v-else-if="getDayStatusColor(statistics.find(e => e.employee_id === selectedEmployeeId), day) === 'late'">{{ $t('timesheet.statusLate') }}</span>
              <span v-else-if="getDayStatusColor(statistics.find(e => e.employee_id === selectedEmployeeId), day) === 'early'">{{ $t('timesheet.legendLateEarly').split('/')[1].trim() }}</span>
              <span v-else-if="getDayStatusColor(statistics.find(e => e.employee_id === selectedEmployeeId), day) === 'missing'">{{ $t('timesheet.missCheck') }}</span>
              <span v-else class="opacity-75">{{ $t('timesheet.legendOnTime') }}</span>
            </div>
          </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import BasePagination from '~/components/common/BasePagination.vue';
import { GET_TIMESHEET_STATISTICS } from '~/apis/timesheet';

const { t } = useI18n();

const satMode = 0; // Default Saturday mode setting (0 = full day off, 1 = half day Saturday)

const statistics = ref<any[]>([]);
const loadingStats = ref(false);
const statsMonthValue = ref<Date>(new Date());
const selectedStatsMonth = computed(() => {
  const date = statsMonthValue.value;
  if (!date) return '';
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
});

const statsViewMode = ref('summary'); // 'summary' | 'calendar'
const statsCurrentPage = ref(0);
const statsPerPage = ref(30);
const statsTotal = ref(0);
const statsSearchQuery = ref('');
const selectedEmployeeId = ref<number | null>(null);

const daysInStatsMonth = computed(() => {
  const date = statsMonthValue.value;
  if (!date) return [];
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysCount = new Date(year, month + 1, 0).getDate();
  const result = [];
  for (let i = 1; i <= daysCount; i++) {
    const dStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    result.push({
      dayNum: i,
      dateString: dStr,
      dayOfWeek: new Date(year, month, i).getDay()
    });
  }
  return result;
});

const employeeOptions = computed(() => {
  return statistics.value.map((emp: any) => ({
    label: `${emp.full_name} (${emp.employee_code})`,
    value: emp.employee_id
  }));
});

const isSolarHoliday = (dateString: string) => {
  if (!dateString) return false;
  const parts = dateString.split('-');
  const md = `${parts[1]}-${parts[2]}`;
  const holidays = ['01-01', '04-30', '05-01', '09-02'];
  return holidays.includes(md);
};

const getTimesheetForDay = (employee: any, dateString: string) => {
  if (!employee || !employee.timesheets) return null;
  return employee.timesheets.find((t: any) => t.date === dateString);
};

const getDayStatusColor = (employee: any, dayObj: any) => {
  if (isSolarHoliday(dayObj.dateString)) return 'holiday';
  
  const timesheet = getTimesheetForDay(employee, dayObj.dateString);
  
  if (timesheet && timesheet.expected_start === null) {
    return 'weekend';
  }
  
  if (!timesheet) {
    if (dayObj.dayOfWeek === 0 || dayObj.dayOfWeek === 6) {
      return 'weekend';
    }
    return 'missing';
  }
  
  if (timesheet && timesheet.leave_session === 'ALL') {
    return 'holiday';
  }
  
  if (timesheet && timesheet.status === 'ABSENT') {
    return 'absent';
  }
  
  if (!timesheet) {
    return 'missing';
  }
  
  const parseTimeStr = (tStr: string) => {
    if (!tStr) return 0;
    if (tStr.includes('T') || tStr.includes('Z') || tStr.length > 10) {
      const date = new Date(tStr);
      if (!isNaN(date.getTime())) {
        const vnTime = date.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Ho_Chi_Minh',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        const parts = vnTime.split(':').map(Number);
        return parts[0] * 3600 + parts[1] * 60 + (parts[2] || 0);
      }
    }
    const parts = tStr.split(' ')[1] ? tStr.split(' ')[1].split(':').map(Number) : tStr.split(':').map(Number);
    return parts[0] * 3600 + parts[1] * 60 + (parts[2] || 0);
  };
  
  // Check-in validation
  if (!timesheet.check_in) {
    if (timesheet.leave_session !== 'MORNING' && timesheet.leave_session !== 'ALL') {
      return 'missing';
    }
  } else {
    const checkInSec = parseTimeStr(timesheet.check_in);
    const expStartSec = parseTimeStr(timesheet.expected_start || '08:30:00');
    if (checkInSec > expStartSec) {
      return 'late';
    }
  }
  
  // Check-out validation
  if (!timesheet.check_out) {
    if (timesheet.leave_session !== 'AFTERNOON' && timesheet.leave_session !== 'ALL') {
      return 'missing';
    }
  } else {
    const checkOutSec = parseTimeStr(timesheet.check_out);
    const expEndSec = (dayObj.dayOfWeek === 6 && satMode === 1) ? 12 * 3600 : parseTimeStr(timesheet.expected_end || '17:30:00');
    if (checkOutSec < expEndSec) {
      return 'early';
    }
  }
  
  return 'normal';
};

const formatTimeOnly = (dtStr: string | null) => {
  if (!dtStr) return '--:--';
  const timePart = dtStr.split(' ')[1] || dtStr;
  const parts = timePart.split(':');
  return `${parts[0]}:${parts[1]}`;
};

const formatDateTime = (dtStr: string | null) => {
  if (!dtStr) return '--:--';
  try {
    const date = new Date(dtStr);
    if (isNaN(date.getTime())) {
      const timePart = dtStr.split(' ')[1] || dtStr;
      const parts = timePart.split(':');
      return `${parts[0]}:${parts[1]}`;
    }
    return date.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Ho_Chi_Minh',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (e) {
    console.error(e);
  }
  return dtStr;
};

const getAttendancePercent = (item: any) => {
  if (!item.max_working_days || item.max_working_days === 0) return 0;
  return Math.round((item.total_working_days / item.max_working_days) * 100);
};

const getDayNameMini = (dayOfWeek: number) => {
  const days = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  return days[dayOfWeek];
};

const fetchStatistics = () => {
  loadingStats.value = true;
  GET_TIMESHEET_STATISTICS(
    {
      year_month: selectedStatsMonth.value,
      page: statsCurrentPage.value + 1,
      per_page: statsPerPage.value,
      search: statsSearchQuery.value || undefined
    },
    (res: any) => {
      const dataObj = res.data?.data || {};
      statistics.value = dataObj.data || res.data?.data || [];
      statsTotal.value = dataObj.meta?.total || dataObj.total || statistics.value.length;
      loadingStats.value = false;
      
      if (statistics.value.length > 0) {
        if (!selectedEmployeeId.value || !statistics.value.some(e => e.employee_id === selectedEmployeeId.value)) {
          selectedEmployeeId.value = statistics.value[0].employee_id;
        }
      } else {
        selectedEmployeeId.value = null;
      }
    },
    (err: any) => {
      console.error(err);
      loadingStats.value = false;
    }
  );
};

const handleStatsPageChange = (event: any) => {
  statsCurrentPage.value = event.page || 0;
  statsPerPage.value = event.rows || 30;
  fetchStatistics();
};

const onStatsMonthChange = () => {
  statsCurrentPage.value = 0;
  fetchStatistics();
};

let statsSearchTimer: any = null;
const handleStatsSearch = () => {
  if (statsSearchTimer) clearTimeout(statsSearchTimer);
  statsSearchTimer = setTimeout(() => {
    statsCurrentPage.value = 0;
    fetchStatistics();
  }, 400);
};

watch(statsMonthValue, () => {
  fetchStatistics();
});

onMounted(() => {
  fetchStatistics();
});
</script>

<style scoped>
table th, table td {
  @apply border border-surface-200 dark:border-surface-700;
}
</style>
