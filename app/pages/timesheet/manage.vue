<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <!-- Access Denied Card (If not manager/admin) -->
    <div v-if="!isManagerOrAdmin && !checkingAccess" class="bg-white/40 dark:bg-surface-900/40 p-12 rounded-[2rem] border border-white dark:border-surface-800 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center space-y-6">
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
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/40 dark:bg-surface-900/40 p-8 rounded-[2rem] border border-white dark:border-surface-800 backdrop-blur-md shadow-2xl shadow-surface-200/20">
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
      <div class="flex border-b border-surface-200 dark:border-surface-800 gap-4">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          class="pb-3 px-4 text-sm font-black tracking-tight uppercase border-b-2 transition-all"
          :class="[
            activeTab === tab.value ? 'border-primary text-primary' : 'border-transparent text-surface-400 hover:text-surface-650 dark:hover:text-surface-200'
          ]"
          @click="activeTab = tab.value"
        >
          <i :class="tab.icon" class="mr-2"></i> {{ tab.label }}
        </button>
      </div>

      <!-- Tab 1: All Records Log List -->
      <div v-if="activeTab === 'records'" class="bg-white dark:bg-surface-900 p-8 rounded-[2.5rem] border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 dark:shadow-none space-y-6">
        <!-- Filter bar -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 bg-surface-50/50 dark:bg-surface-950/20 p-5 rounded-2xl border border-surface-100 dark:border-surface-850">
          <div class="flex flex-col gap-1.5">
            <label class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('timesheet.searchKeyword') }}</label>
            <InputText
              v-model="filters.q"
              :placeholder="$t('timesheet.searchPlaceholder')"
              class="w-full !rounded-xl !py-2 border border-surface-200 dark:border-surface-800"
              @input="onSearchFilter"
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('timesheet.status') }}</label>
            <Select
              v-model="filters.status"
              :options="statusOptions"
              optionLabel="label"
              optionValue="value"
              :placeholder="$t('timesheet.status')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
              @change="reloadTable"
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('timesheet.fromDate') }}</label>
            <DatePicker
              v-model="filters.start_date"
              dateFormat="dd/mm/yy"
              :placeholder="$t('timesheet.fromDate')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
              @date-select="reloadTable"
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('timesheet.toDate') }}</label>
            <DatePicker
              v-model="filters.end_date"
              dateFormat="dd/mm/yy"
              :placeholder="$t('timesheet.toDate')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
              @date-select="reloadTable"
            />
          </div>
        </div>

        <!-- Modern Data Table -->
        <BaseDataTable
          :columns="columns"
          :fetchApi="fetchRecordsWrapper"
          :filters="filters"
          :isReload="isReload"
          :emptyText="$t('timesheet.noHistoryFound') || 'Không tìm thấy lịch sử chấm công nào'"
          scrollHeight="58vh"
        >
          <template #body="{ column, data, index }">
            <!-- STT -->
            <template v-if="column.key === 'stt'">
              <span class="font-mono font-bold text-surface-400 text-xs">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
            </template>

            <!-- Nhân viên -->
            <template v-else-if="column.key === 'employee'">
              <div class="flex flex-col">
                <span class="font-bold text-surface-900 dark:text-surface-0 tracking-tight text-sm">
                  {{ data.employee?.full_name || 'Nghiệp vụ ẩn' }}
                </span>
                <span class="text-[9px] font-black uppercase tracking-widest text-surface-450 font-mono mt-0.5">
                  Mã: {{ data.employee?.code || data.employee?.employee_code || 'N/A' }}
                </span>
              </div>
            </template>

            <!-- Ngày -->
            <template v-else-if="column.key === 'date'">
              <span class="font-bold text-surface-800 dark:text-surface-200 tracking-tight font-mono text-xs">
                {{ formatDate(data.date) }}
              </span>
            </template>

            <!-- Giờ vào -->
            <template v-else-if="column.key === 'check_in'">
              <span class="font-mono font-bold text-surface-700 dark:text-surface-300 text-xs">
                {{ formatTime(data.check_in) || '--:--' }}
              </span>
            </template>

            <!-- Giờ ra -->
            <template v-else-if="column.key === 'check_out'">
              <span class="font-mono font-bold text-surface-700 dark:text-surface-300 text-xs">
                {{ formatTime(data.check_out) || '--:--' }}
              </span>
            </template>

            <!-- Trạng thái -->
            <template v-else-if="column.key === 'status'">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
                :class="[
                  data.status === 'PRESENT' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                  data.status === 'LATE' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' :
                  'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                ]"
              >
                {{ data.status }}
              </span>
            </template>

            <!-- Ghi chú -->
            <template v-else-if="column.key === 'note'">
              <span class="text-xs font-semibold text-surface-500 dark:text-surface-400 max-w-[180px] truncate block" :title="data.note">
                {{ data.note || '-' }}
              </span>
            </template>

            <!-- Thao tác -->
            <template v-else-if="column.key === 'actions'">
              <Button
                icon="pi pi-pencil"
                :label="$t('timesheet.editOrCompensate')"
                class="!rounded-xl !py-1.5 !px-3.5 !text-xs !font-bold transition-all hover:scale-105"
                severity="secondary"
                @click="openManualDialog(data)"
              />
            </template>
          </template>
        </BaseDataTable>
      </div>

      <!-- Tab 2: Attendance Statistics Month Report -->
      <div v-if="activeTab === 'statistics'" class="bg-white dark:bg-surface-900 p-8 rounded-[2.5rem] border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 dark:shadow-none space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-100 dark:border-surface-800 pb-6">
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
                :placeholder="$t('timesheet.searchPlaceholder') || 'Tìm nhân viên...'"
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
        <div class="flex items-center gap-2 p-1.5 bg-surface-50 dark:bg-surface-950 rounded-2xl border border-surface-100 dark:border-surface-850 w-fit">
          <button
            type="button"
            class="px-4 py-2 text-xs font-bold rounded-xl transition-all"
            :class="[
              statsViewMode === 'summary'
                ? 'bg-white dark:bg-surface-800 text-primary shadow-sm border border-surface-100 dark:border-surface-700'
                : 'text-surface-500 hover:text-surface-700 dark:text-surface-400 hover:dark:text-surface-200'
            ]"
            @click="statsViewMode = 'summary'"
          >
            <i class="pi pi-list mr-1.5"></i> {{ $t('timesheet.statsSummary') }}
          </button>
          <button
            type="button"
            class="px-4 py-2 text-xs font-bold rounded-xl transition-all"
            :class="[
              statsViewMode === 'calendar'
                ? 'bg-white dark:bg-surface-800 text-primary shadow-sm border border-surface-100 dark:border-surface-700'
                : 'text-surface-500 hover:text-surface-700 dark:text-surface-400 hover:dark:text-surface-200'
            ]"
            @click="statsViewMode = 'calendar'"
          >
            <i class="pi pi-calendar mr-1.5"></i> {{ $t('timesheet.stats30Days') }}
          </button>
        </div>

        <!-- View 1: Summary Table -->
        <div v-if="statsViewMode === 'summary'" class="overflow-auto max-h-[58vh] bg-white dark:bg-surface-950 rounded-2xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/50 dark:shadow-none transition-all duration-300">
          <table class="w-full border-collapse text-left">
            <thead class="bg-surface-50 dark:bg-surface-900 border-b border-surface-100 dark:border-surface-800 sticky top-0 z-10">
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
            <tbody class="divide-y divide-surface-100 dark:divide-surface-800">
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
                class="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-200 border-b border-surface-100 dark:border-surface-800"
              >
                <td class="py-4 px-4 text-xs font-black text-surface-450 dark:text-surface-400 font-mono">
                  {{ String(idx + 1).padStart(2, '0') }}
                </td>
                <td class="py-4 px-4 font-mono font-bold text-surface-700 dark:text-surface-300 text-xs">
                  {{ item.employee_code || '-' }}
                </td>
                <td class="py-4 px-4 text-surface-750 dark:text-surface-200">
                  <div class="flex flex-col">
                    <span class="font-bold text-surface-900 dark:text-surface-0 tracking-tight text-sm">{{ item.full_name }}</span>
                    <span class="text-[10px] text-surface-400 font-mono mt-0.5">{{ item.email }}</span>
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
          <div v-if="loadingStats" class="text-center block py-12 text-surface-400 font-medium bg-surface-50/50 dark:bg-surface-950/20 rounded-3xl">
            <i class="pi pi-spin pi-spinner text-2xl mr-2 text-primary"></i> {{ $t('timesheet.loadingStats') }}
          </div>
          <div v-else-if="statistics.length === 0" class="text-center py-12 text-surface-400 font-medium bg-surface-50/50 dark:bg-surface-950/20 rounded-3xl">
            {{ $t('timesheet.noEmployeeMonth') }}
          </div>
          <div v-else class="space-y-6">
            <!-- Employee Selection Bar -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-surface-50 dark:bg-surface-950 rounded-3xl border border-surface-100 dark:border-surface-850">
              <div class="space-y-1">
                <label class="text-[10px] font-black uppercase tracking-wider text-surface-450">{{ $t('timesheet.statsCalendarFor') }}</label>
                <div class="relative w-72">
                  <select
                    v-model="selectedEmployeeId"
                    class="w-full pl-4 pr-10 py-2.5 rounded-xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 text-xs font-bold text-surface-700 dark:text-surface-300 appearance-none focus:outline-none focus:border-primary transition-all cursor-pointer"
                  >
                    <option v-for="emp in statistics" :key="emp.employee_id" :value="emp.employee_id">
                      {{ emp.full_name }} ({{ emp.employee_code }})
                    </option>
                  </select>
                  <div class="absolute right-3.5 top-1/2 -translate-y-1/2 text-surface-400 pointer-events-none">
                    <i class="pi pi-chevron-down text-xs"></i>
                  </div>
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
                class="p-4 rounded-3xl transition-all border relative overflow-hidden flex flex-col justify-between min-h-[110px]"
                :class="[
                  getDayStatusColor(statistics.find(e => e.employee_id === selectedEmployeeId), day) === 'holiday' || getDayStatusColor(statistics.find(e => e.employee_id === selectedEmployeeId), day) === 'weekend'
                    ? 'bg-surface-50/50 dark:bg-surface-950/20 border-surface-150 dark:border-surface-850 opacity-80'
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

      <!-- Tab 3: Payroll / Tính lương -->
      <div v-if="activeTab === 'payroll'" class="bg-white dark:bg-surface-900 p-8 rounded-[2.5rem] border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 dark:shadow-none space-y-6">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-surface-100 dark:border-surface-800 pb-6">
          <div>
            <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 tracking-tight">{{ $t('timesheet.payrollTitle') }}</h3>
            <p class="text-xs text-surface-400 font-semibold mt-1">{{ $t('timesheet.payrollDesc') }}</p>
          </div>
          <div class="flex flex-wrap items-center gap-4">
            <!-- Search Keyword -->
            <div class="flex flex-col">
              <span class="text-[10px] font-black uppercase tracking-widest text-surface-400 mb-1">{{ $t('timesheet.searchKeyword') }}</span>
              <div class="relative w-60">
                <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-surface-400"></i>
                <input
                  type="text"
                  v-model="payrollSearchQ"
                  :placeholder="$t('timesheet.searchPlaceholder')"
                  class="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-surface-200 dark:border-surface-800 bg-transparent text-surface-900 dark:text-surface-100 focus:ring-1 focus:ring-primary outline-none"
                  @input="handlePayrollSearch"
                />
              </div>
            </div>

            <!-- Month Picker -->
            <div class="flex flex-col">
              <span class="text-[10px] font-black uppercase tracking-widest text-surface-400 mb-1">{{ $t('timesheet.selectPayrollMonth') }}</span>
              <DatePicker
                v-model="payrollMonthValue"
                view="month"
                dateFormat="mm/yy"
                :placeholder="$t('timesheet.selectPayrollMonth')"
                class="w-40 !rounded-xl border border-surface-200 dark:border-surface-800"
                @date-select="onPayrollMonthChange"
              />
            </div>

            <!-- Excel & PDF Export -->
            <div class="flex items-center gap-2 mt-4">
              <Button
                label="Excel"
                icon="pi pi-file-excel"
                severity="success"
                class="!rounded-xl !font-bold"
                @click="exportPayrollExcel"
              />
              <Button
                label="PDF"
                icon="pi pi-file-pdf"
                severity="danger"
                class="!rounded-xl !font-bold"
                @click="exportPayrollPdf"
              />
            </div>
          </div>
        </div>

        <div v-if="loadingPayroll" class="text-center py-16 text-surface-400 font-medium">
          <i class="pi pi-spin pi-spinner text-3xl mr-2 text-primary"></i> {{ $t('timesheet.loadingPayroll') }}
        </div>
        <div v-else-if="payrollData.length === 0" class="text-center py-16 text-surface-400 font-medium">
          <i class="pi pi-inbox text-3xl mb-3 block opacity-40"></i>{{ $t('timesheet.noPayrollData') }}
        </div>
        <div v-else class="overflow-auto max-h-[58vh] bg-white dark:bg-surface-950 rounded-2xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/50 dark:shadow-none transition-all duration-300">
          <table class="w-full text-xs border-collapse">
            <thead class="bg-surface-50 dark:bg-surface-900 border-b border-surface-100 dark:border-surface-800 sticky top-0 z-10">
              <tr>
                <th class="px-4 py-4 text-left font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap">STT</th>
                <th class="px-4 py-4 text-left font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap">{{ $t('timesheet.staff') }}</th>
                <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap">{{ $t('timesheet.baseSalary') }}</th>
                <th class="px-4 py-4 text-center font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap">{{ $t('timesheet.workingDaysActualStandard') }}</th>
                <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap">{{ $t('timesheet.overtimeSalary') }}</th>
                <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap text-emerald-600 dark:text-emerald-400">{{ $t('timesheet.attendanceAllowanceLabel') }}</th>
                <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap text-rose-500">{{ $t('timesheet.deductionLateLabel') }}</th>
                <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap text-rose-500">{{ $t('timesheet.deductionLeaveLabel') }}</th>
                <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap text-rose-500">{{ $t('timesheet.deductionUnionLabel') }}</th>
                <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-primary whitespace-nowrap">{{ $t('timesheet.deductionTaxLabel') }}</th>
                <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap text-amber-600">{{ $t('timesheet.advancePaymentLabel') }}</th>
                <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 whitespace-nowrap">{{ $t('timesheet.netSalaryLabel') }}</th>
                <th class="px-4 py-4 text-center font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap">{{ $t('timesheet.actionCol') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-surface-100 dark:divide-surface-800">
              <tr
                v-for="(row, idx) in payrollData"
                :key="row.employee_id"
                class="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-200 border-b border-surface-100 dark:border-surface-800"
              >
                <td class="px-4 py-4 font-mono text-surface-450 dark:text-surface-400 border-b border-surface-100 dark:border-surface-800">{{ String(idx + 1).padStart(2,'0') }}</td>
                <td class="px-4 py-4 border-b border-surface-100 dark:border-surface-800">
                  <div class="font-bold text-surface-900 dark:text-surface-0">{{ row.full_name }}</div>
                  <div class="text-[9px] font-black text-surface-400 font-mono uppercase">{{ row.employee_code }}</div>
                </td>
                <td class="px-4 py-4 text-right font-mono font-bold border-b border-surface-100 dark:border-surface-800 whitespace-nowrap text-surface-800 dark:text-surface-200">{{ formatVND(row.base_salary) }}</td>
                <td class="px-4 py-4 text-center font-mono font-bold border-b border-surface-100 dark:border-surface-800 text-surface-700 dark:text-surface-300">{{ row.actual_working_days }}/{{ row.standard_working_days }}</td>
                <td class="px-4 py-4 text-right font-mono border-b border-surface-100 dark:border-surface-800 whitespace-nowrap text-surface-700 dark:text-surface-300">{{ formatVND(row.overtime_salary) }}</td>
                <td class="px-4 py-4 text-right font-mono border-b border-surface-100 dark:border-surface-800 whitespace-nowrap text-emerald-600 dark:text-emerald-400">{{ formatVND(row.allowance_attendance) }}</td>
                <td class="px-4 py-4 text-right font-mono border-b border-surface-100 dark:border-surface-800 whitespace-nowrap text-rose-500">-{{ formatVND(row.deduction_late) }}</td>
                <td class="px-4 py-4 text-right font-mono border-b border-surface-100 dark:border-surface-800 whitespace-nowrap text-rose-500">-{{ formatVND(row.deduction_leave) }}</td>
                <td class="px-4 py-4 text-right font-mono border-b border-surface-100 dark:border-surface-800 whitespace-nowrap text-rose-500">-{{ formatVND(row.deduction_union) }}</td>
                <td class="px-4 py-4 text-right font-mono border-b border-surface-100 dark:border-surface-800 whitespace-nowrap text-primary font-bold">-{{ formatVND(row.deduction_tax) }}</td>
                <td class="px-4 py-4 text-right font-mono border-b border-surface-100 dark:border-surface-800 whitespace-nowrap text-amber-600">-{{ formatVND(row.advance_payment) }}</td>
                <td class="px-4 py-4 text-right font-mono font-black border-b border-surface-100 dark:border-surface-800 whitespace-nowrap text-emerald-600 dark:text-emerald-400 text-sm">{{ formatVND(row.net_salary) }}</td>
                <td class="px-4 py-4 text-center border-b border-surface-100 dark:border-surface-800">
                  <Button icon="pi pi-pencil" severity="warn" variant="text" class="!w-9 !h-9 !rounded-xl" @click="openPayrollDialog(row)" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination Bar for Payroll -->
        <BasePagination
          v-if="payrollTotal > 0"
          :currentPage="payrollCurrentPage"
          :rowsPerPage="payrollPerPage"
          :total="payrollTotal"
          @onPageChange="handlePayrollPageChange"
          class="border-t border-surface-100 dark:border-surface-800 pt-4"
        />
      </div>

      <!-- Tab 4: Working Hour Configurations -->
      <div v-if="activeTab === 'configs'" class="bg-white dark:bg-surface-900 p-8 rounded-[2.5rem] border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 dark:shadow-none space-y-6">
        <!-- Tab Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-surface-100 dark:border-surface-800 pb-6">
          <div>
            <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 tracking-tight">{{ $t('timesheet.configTitle') }}</h3>
            <p class="text-xs text-surface-400 font-semibold mt-1">{{ $t('timesheet.configDesc') }}</p>
          </div>
          <Button
            :label="$t('timesheet.addConfig')"
            icon="pi pi-plus"
            severity="primary"
            class="!rounded-xl !px-5 !py-3 !shadow-lg !shadow-primary/25 !font-bold"
            @click="openConfigDialog(null)"
          />
        </div>

        <!-- Configurations List Grid -->
        <div v-if="loadingConfigs" class="text-center py-12 text-surface-400 font-medium">
          <i class="pi pi-spin pi-spinner text-2xl mr-2 text-primary"></i> {{ $t('timesheet.loadingConfigs') }}
        </div>
        <div v-else-if="workingConfigs.length === 0" class="text-center py-12 text-surface-400 font-medium">
          {{ $t('timesheet.noConfigsYet') }}
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="config in workingConfigs"
            :key="config.id"
            class="group bg-surface-50 dark:bg-surface-950 p-6 rounded-3xl border border-surface-200/60 dark:border-surface-850 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between"
          >
            <div class="space-y-4">
              <!-- Top info & Badges -->
              <div class="flex items-start justify-between">
                <div class="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                  <i class="pi pi-clock text-lg"></i>
                </div>
                <span
                  v-if="config.is_default"
                  class="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                >
                  {{ $t('timesheet.defaultSystem') }}
                </span>
                <span
                  v-else
                  class="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider bg-primary/10 text-primary"
                >
                  {{ $t('timesheet.flexible') }}
                </span>
              </div>

              <!-- Name & Subtitle -->
              <div class="space-y-1">
                <h4 class="font-bold text-surface-900 dark:text-surface-0 tracking-tight text-lg">{{ config.name }}</h4>
                <p class="text-xs text-surface-500 font-medium font-mono">
                  <span>{{ config.is_default ? $t('timesheet.defaultSystem') : 'Mẫu ca làm việc' }}</span>
                </p>
              </div>

              <!-- Hours Details -->
              <div class="grid grid-cols-2 gap-4 bg-white dark:bg-surface-900 p-4 rounded-2xl border border-surface-150/40 dark:border-surface-800">
                <div class="flex flex-col">
                  <span class="text-[9px] font-black uppercase tracking-widest text-surface-400">{{ $t('timesheet.standardIn') }}</span>
                  <span class="font-bold text-surface-850 dark:text-surface-150 mt-1 font-mono text-sm">{{ config.start_time }}</span>
                </div>
                <div class="flex flex-col border-l border-surface-100 dark:border-surface-800 pl-4">
                  <span class="text-[9px] font-black uppercase tracking-widest text-surface-400">{{ $t('timesheet.standardOut') }}</span>
                  <span class="font-bold text-surface-850 dark:text-surface-150 mt-1 font-mono text-sm">{{ config.end_time }}</span>
                </div>
              </div>

              <!-- Overtime Details -->
              <div class="flex items-center justify-between text-xs p-3.5 bg-surface-50 dark:bg-surface-950 rounded-2xl border border-surface-150/45 dark:border-surface-800/80">
                <span class="text-[9px] font-black uppercase tracking-widest text-surface-400">Tăng ca (OT)</span>
                <span v-if="config.allow_overtime" class="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-455 font-mono text-xs">
                  <i class="pi pi-check-circle"></i> Cho phép (Max {{ config.max_overtime_hours || 0 }}h)
                </span>
                <span v-else class="inline-flex items-center gap-1 font-bold text-rose-500 dark:text-rose-455 font-mono text-xs">
                  <i class="pi pi-times-circle"></i> Không cho phép
                </span>
              </div>
            </div>

            <!-- Actions buttons -->
            <div class="flex justify-end gap-3 pt-6 border-t border-dashed border-surface-200 dark:border-surface-800 mt-6">
              <Button
                icon="pi pi-pencil"
                severity="warn"
                variant="text"
                class="!w-9 !h-9 !rounded-xl"
                @click="openConfigDialog(config)"
              />
              <Button
                v-if="!config.is_default"
                icon="pi pi-trash"
                severity="danger"
                variant="text"
                class="!w-9 !h-9 !rounded-xl"
                @click="deleteConfig(config.id)"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Tab 5: Shift Assignments (New calendar grid design) -->
      <div v-if="activeTab === 'shift-assignments'" class="space-y-4 animate-in fade-in duration-300">
        <!-- Control Bar Card: Date Selection, Employee Search & Filters -->
        <div class="bg-white dark:bg-surface-900 p-5 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 dark:shadow-none space-y-4">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-surface-100 dark:border-surface-800 pb-4">
            <div>
              <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 tracking-tight">Bảng Phân ca & Tăng ca Nhân viên</h3>
              <p class="text-xs text-surface-400 font-semibold mt-1">Quản lý ca làm việc linh hoạt, tăng ca và đồng bộ thông tin nghỉ phép hàng tháng.</p>
            </div>
            
            <!-- Filters -->
            <div class="flex flex-wrap items-center gap-4">
              <!-- Month Selector -->
              <div class="flex flex-col">
                <span class="text-[10px] font-black uppercase tracking-widest text-surface-400 mb-1">Tháng phân ca</span>
                <DatePicker
                  v-model="currentYearMonthDate"
                  view="month"
                  dateFormat="mm/yy"
                  placeholder="Chọn tháng"
                  class="w-44 !rounded-xl border border-surface-200 dark:border-surface-800"
                  @date-select="onCalendarMonthChange"
                />
              </div>

              <!-- Department Filter -->
              <div class="flex flex-col">
                <span class="text-[10px] font-black uppercase tracking-widest text-surface-400 mb-1">Phòng ban</span>
                <Select
                  v-model="selectedDepartmentId"
                  :options="[{ id: null, name: 'Tất cả phòng ban' }, ...departmentOptions]"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="Phòng ban"
                  class="w-52 !rounded-xl border border-surface-200 dark:border-surface-800"
                  @change="onCalendarFiltersChange"
                />
              </div>
              
              <!-- Search box -->
              <div class="flex flex-col">
                <span class="text-[10px] font-black uppercase tracking-widest text-surface-400 mb-1">Tìm kiếm nhân viên</span>
                <div class="relative w-64">
                  <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-surface-400"></i>
                  <input
                    type="text"
                    v-model="assignSearchQuery"
                    placeholder="Tên, mã nhân viên..."
                    class="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-surface-200 dark:border-surface-800 bg-transparent text-surface-900 dark:text-surface-100 focus:ring-1 focus:ring-primary outline-none"
                    @input="handleAssignSearch"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Bulk Assign Actions -->
          <div class="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-3.5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <i class="pi pi-users text-lg"></i>
              </div>
              <div>
                <span class="font-bold text-surface-900 dark:text-surface-0 block text-sm">Hành động hàng loạt</span>
                <span class="text-xs text-surface-500 font-medium">Đã chọn: <strong class="text-primary">{{ selectedEmployeeIds.length }}</strong> nhân viên</span>
              </div>
            </div>
            
            <div class="flex items-center gap-3">
              <Button
                label="Phân ca hàng loạt"
                icon="pi pi-check-circle"
                severity="primary"
                class="!rounded-xl !px-5 !font-bold"
                :disabled="selectedEmployeeIds.length === 0"
                @click="openBulkAssignDialog"
              />
              <Button
                label="Reset ca hàng loạt"
                icon="pi pi-refresh"
                severity="secondary"
                class="!rounded-xl !px-5 !font-bold"
                :disabled="selectedEmployeeIds.length === 0"
                @click="openBulkResetDialog"
              />
            </div>
          </div>
        </div>

        <!-- Assignments Monthly Calendar Grid Table -->
        <div class="bg-white dark:bg-surface-900 p-5 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 dark:shadow-none space-y-4">
          <!-- Legend / Ghi chú ký hiệu -->
          <div class="flex flex-wrap items-center gap-x-6 gap-y-3 bg-surface-50 dark:bg-surface-950/20 px-4 py-2 rounded-xl border border-surface-150/40 dark:border-surface-850">
            <span class="text-xs font-bold text-surface-600 dark:text-surface-400 flex items-center gap-1.5 mr-2">
              <i class="pi pi-info-circle text-primary"></i> Ký hiệu phân ca:
            </span>
            <div class="flex items-center gap-2 text-xs">
              <span class="text-[9px] font-black bg-emerald-500/25 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.05)]">AL</span>
              <span class="text-surface-600 dark:text-surface-400 font-medium">Nghỉ phép năm</span>
            </div>
            <div class="flex items-center gap-2 text-xs">
              <span class="text-[9px] font-black bg-amber-500/25 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.05)]">SL</span>
              <span class="text-surface-600 dark:text-surface-400 font-medium">Nghỉ ốm</span>
            </div>
            <div class="flex items-center gap-2 text-xs">
              <span class="text-[8px] font-black bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/10 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">+2h / +OT</span>
              <span class="text-surface-600 dark:text-surface-400 font-medium">Cho phép tăng ca</span>
            </div>
            <div class="flex items-center gap-2 text-xs">
              <span class="text-[8px] font-black bg-rose-500/5 text-rose-500/80 dark:bg-rose-500/15 dark:text-rose-450 px-1.5 py-0.5 rounded border border-rose-500/10">xOT</span>
              <span class="text-surface-600 dark:text-surface-400 font-medium">Không tăng ca</span>
            </div>
            <div class="flex items-center gap-2 text-xs">
              <div class="w-5 h-5 bg-surface-100 dark:bg-surface-800/40 border border-surface-200 dark:border-surface-700 rounded flex items-center justify-center text-[10px] text-surface-400 font-bold">-</div>
              <span class="text-surface-600 dark:text-surface-400 font-medium">Ngày nghỉ / Cuối tuần</span>
            </div>
          </div>

          <div class="overflow-auto max-h-[58vh] max-w-full bg-white dark:bg-surface-950 rounded-2xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/50 dark:shadow-none transition-all duration-300">
            <table class="w-full border-collapse text-left text-xs min-w-[1200px]">
              <thead class="bg-surface-50 dark:bg-surface-900 border-b border-surface-100 dark:border-surface-800 sticky top-0 z-30">
                <tr>
                  <th class="py-4 px-2.5 w-12 text-center sticky left-0 top-0 bg-surface-50 dark:bg-surface-900 z-40 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] border-b border-surface-100 dark:border-surface-800">
                    <input
                      type="checkbox"
                      :checked="isAllSelected"
                      @change="toggleSelectAll"
                      class="rounded border-surface-300 text-primary focus:ring-primary w-4 h-4"
                    />
                  </th>
                  <th class="py-4 px-2.5 text-xs font-bold uppercase tracking-widest text-surface-500 dark:text-surface-400 w-40 sticky left-12 top-0 bg-surface-50 dark:bg-surface-900 z-40 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] border-b border-surface-100 dark:border-surface-800">Nhân viên</th>
                  <th class="py-4 pl-3.5 text-xs font-bold uppercase tracking-widest text-surface-500 dark:text-surface-400 w-40 border-b border-surface-100 dark:border-surface-800">Bộ phận</th>
                  <!-- Days of Month header -->
                  <th
                    v-for="d in daysInMonth"
                    :key="d.day"
                    class="py-4 px-0.5 text-center min-w-[42px] w-[42px] border-l border-b border-surface-100 dark:border-surface-800 font-mono text-xs"
                    :class="[
                      d.dayOfWeek === 0 ? 'text-red-500 bg-red-500/5 font-black border-b border-surface-100 dark:border-surface-800' : d.dayOfWeek === 6 ? 'text-blue-500 bg-blue-500/5 font-black border-b border-surface-100 dark:border-surface-800' : 'text-surface-500 dark:text-surface-400 border-b border-surface-100 dark:border-surface-800'
                    ]"
                  >
                    <div class="text-[11px] font-bold">{{ d.day }}</div>
                    <div class="text-[9px] opacity-75 font-semibold mt-0.5">{{ getDayOfWeekAbbr(d.dayOfWeek) }}</div>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-surface-100 dark:divide-surface-800">
                <tr v-if="loadingAssignEmployees" class="text-center">
                  <td :colspan="daysInMonth.length + 3" class="py-12 text-surface-400 font-medium">
                    <i class="pi pi-spin pi-spinner text-2xl mr-2 text-primary"></i> Đang tải dữ liệu phân ca...
                  </td>
                </tr>
                <tr v-else-if="assignEmployees.length === 0" class="text-center">
                  <td :colspan="daysInMonth.length + 3" class="py-12 text-surface-400 font-medium">
                    Không tìm thấy nhân viên nào
                  </td>
                </tr>
                <tr
                  v-else
                  v-for="emp in assignEmployees"
                  :key="emp.id"
                  class="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-200 border-b border-surface-100 dark:border-surface-800"
                >
                  <!-- Checkbox -->
                  <td class="py-4 px-2.5 w-12 text-center sticky left-0 bg-white dark:bg-surface-950 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] border-b border-surface-100 dark:border-surface-800">
                    <input
                      type="checkbox"
                      :value="emp.id"
                      v-model="selectedEmployeeIds"
                      class="rounded border-surface-300 text-primary focus:ring-primary w-4 h-4"
                    />
                  </td>

                  <!-- Name and Code -->
                  <td class="py-4 px-2.5 w-40 sticky left-12 bg-white dark:bg-surface-950 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] min-w-[176px] max-w-[176px] border-b border-surface-100 dark:border-surface-800">
                    <div class="flex flex-col">
                      <span class="font-bold text-surface-900 dark:text-surface-0 text-xs truncate">
                        {{ emp.full_name }}
                      </span>
                      <span class="text-[9px] font-bold text-surface-400 font-mono mt-0.5">
                        {{ emp.code || 'N/A' }}
                      </span>
                    </div>
                  </td>

                  <!-- Department / Role -->
                  <td class="py-4 px-3.5 w-40 max-w-[176px] truncate border-b border-surface-100 dark:border-surface-800">
                    <div class="flex flex-col">
                      <span class="text-surface-800 dark:text-surface-200 font-semibold text-xs truncate">
                        {{ emp.department?.name || 'N/A' }}
                      </span>
                      <span class="text-[10px] text-surface-450 dark:text-surface-400 italic truncate">
                        {{ emp.job_title?.name || 'Nhân viên' }}
                      </span>
                    </div>
                  </td>

                  <!-- Calendar Days Cells -->
                  <td
                    v-for="d in daysInMonth"
                    :key="d.day"
                    class="p-0.5 text-center border-l border-surface-100 dark:border-surface-800 font-mono text-[9px] relative transition-colors min-w-[42px] w-[42px]"
                    :class="getCellClass(emp, d.dateString, d.dayOfWeek)"
                    :title="getCellTooltip(emp, d.dateString, d.dayOfWeek)"
                  >
                    <!-- Day cell details -->
                    <div class="flex flex-col items-center justify-center min-h-[58px] space-y-0.5 py-1">
                      <!-- If off day -->
                      <span v-if="getDayCellDetails(emp, d.dateString, d.dayOfWeek).timeRange === 'Nghỉ'" 
                        class="text-surface-400 dark:text-surface-50 font-bold text-xs"
                      >
                        -
                      </span>
                      
                      <!-- If working day -->
                      <template v-else>
                        <!-- 1. Work shift hours -->
                        <div class="flex flex-col items-center justify-center leading-[1.1] font-black text-surface-900 dark:text-surface-100 text-[10px]">
                          <span>{{ getDayCellDetails(emp, d.dateString, d.dayOfWeek).startTime }}</span>
                          <span class="text-surface-450 dark:text-surface-600 font-normal leading-[0.8]">↓</span>
                          <span>{{ getDayCellDetails(emp, d.dateString, d.dayOfWeek).endTime }}</span>
                        </div>

                        <!-- 2. Status Badge: Leave Badge takes priority, otherwise show Overtime Badge -->
                        <span v-if="getDayCellDetails(emp, d.dateString, d.dayOfWeek).isLeave" 
                          class="text-[9px] font-black px-1.5 py-0.5 rounded leading-none mt-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                          :class="[
                            getDayCellDetails(emp, d.dateString, d.dayOfWeek).isApprovedLeave ? 'bg-emerald-500/25 text-emerald-800 dark:text-emerald-300' : 'bg-amber-500/25 text-amber-800 dark:text-amber-300'
                          ]"
                        >
                          {{ getDayCellDetails(emp, d.dateString, d.dayOfWeek).leaveTypeAbbr }}
                        </span>
                        
                        <template v-else>
                          <!-- Overtime Info -->
                          <span v-if="getDayCellDetails(emp, d.dateString, d.dayOfWeek).allowOvertime" 
                            class="text-[8px] font-black bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 px-1 py-0.5 rounded leading-none mt-0.5 border border-emerald-500/10 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                          >
                            {{ getDayCellDetails(emp, d.dateString, d.dayOfWeek).maxOvertimeHours ? `+${getDayCellDetails(emp, d.dateString, d.dayOfWeek).maxOvertimeHours}h` : '+OT' }}
                          </span>
                          <span v-else 
                            class="text-[8px] font-black bg-rose-500/5 text-rose-500/80 dark:bg-rose-500/15 dark:text-rose-450 px-1 py-0.5 rounded leading-none mt-0.5 border border-rose-500/10"
                          >
                            xOT
                          </span>
                        </template>
                      </template>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination Bar -->
          <BasePagination
            v-if="assignTotal > 0"
            :currentPage="assignPage - 1"
            :rowsPerPage="assignLimit"
            :total="assignTotal"
            @onPageChange="handlePageChange"
            class="border-t border-surface-100 dark:border-surface-800 pt-4"
          />
        </div>
      </div>

      <!-- Popup Thiết lập ca cho từng nhân viên -->
      <Dialog
        v-model:visible="displaySetShiftDialog"
        modal
        header="Thiết lập ca làm việc và tăng ca"
        :style="{ width: '32rem' }"
        class="!rounded-[2rem] overflow-hidden"
      >
        <div class="space-y-6 p-2">
          <!-- Employee Display -->
          <div class="bg-surface-50 dark:bg-surface-950/20 p-4 rounded-xl border border-surface-100 dark:border-surface-850 flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              {{ selectedEmployeeForShift?.full_name?.charAt(0) }}
            </div>
            <div>
              <h4 class="font-bold text-surface-900 dark:text-surface-0">{{ selectedEmployeeForShift?.full_name }}</h4>
              <p class="text-xs text-surface-450 font-mono">Mã: {{ selectedEmployeeForShift?.code }} | {{ selectedEmployeeForShift?.department?.name }}</p>
            </div>
          </div>

          <!-- Shift Config Dropdown -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold text-surface-600 dark:text-surface-300">Ca làm việc / Tăng ca</label>
            <Select
              v-model="singleShiftConfigId"
              :options="workingConfigs"
              optionLabel="name"
              optionValue="id"
              placeholder="Chọn cấu hình ca"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            />
            <!-- Shift details preview -->
            <div v-if="selectedShiftDetail" class="text-[11px] text-surface-500 bg-surface-50 dark:bg-surface-950/10 p-2.5 rounded-lg mt-1 space-y-1">
              <div class="flex justify-between">
                <span>Thời gian:</span>
                <span class="font-bold">{{ selectedShiftDetail.start_time?.substring(0, 5) }} ~ {{ selectedShiftDetail.end_time?.substring(0, 5) }}</span>
              </div>
              <div class="flex justify-between">
                <span>Tăng ca:</span>
                <span class="font-bold text-emerald-600 dark:text-emerald-400" v-if="selectedShiftDetail.allow_overtime">Cho phép (Tối đa {{ selectedShiftDetail.max_overtime_hours }}h)</span>
                <span class="font-bold text-rose-500" v-else>Không cho phép</span>
              </div>
            </div>
          </div>

          <!-- Date Range Selection -->
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-bold text-surface-600 dark:text-surface-300">Từ ngày</label>
              <DatePicker
                v-model="singleStartDate"
                dateFormat="dd/mm/yy"
                class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-bold text-surface-600 dark:text-surface-300">Đến ngày</label>
              <DatePicker
                v-model="singleEndDate"
                dateFormat="dd/mm/yy"
                class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
              />
            </div>
          </div>

          <!-- Weekdays Selection -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold text-surface-600 dark:text-surface-300">Áp dụng cho các ngày trong tuần</label>
            <div class="flex flex-wrap items-center gap-3 bg-surface-50 dark:bg-surface-950/20 p-3.5 rounded-xl border border-surface-150/40 dark:border-surface-850">
              <label v-for="w in weekdaysOptions" :key="w.value" class="flex items-center gap-1.5 text-xs font-semibold text-surface-700 dark:text-surface-300 cursor-pointer">
                <input type="checkbox" v-model="singleWeekdays" :value="w.value" class="rounded border-surface-300 text-primary focus:ring-primary w-4 h-4" />
                <span>{{ w.label }}</span>
              </label>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex items-center justify-between w-full">
            <Button
              label="Khôi phục ca mặc định"
              icon="pi pi-refresh"
              severity="danger"
              variant="text"
              class="!rounded-xl !text-xs !font-bold"
              :loading="resettingSingleShift"
              @click="resetSingleShift"
            />
            <div class="flex items-center gap-3">
              <Button label="Hủy" class="p-button-text !rounded-xl" @click="displaySetShiftDialog = false" />
              <Button label="Xác nhận" class="!rounded-xl !px-5" :loading="submittingSingleShift" @click="saveSingleShift" />
            </div>
          </div>
        </template>
      </Dialog>

      <!-- Bulk Assign Shifts Dialog -->
      <Dialog
        v-model:visible="displayBulkAssignDialog"
        modal
        header="Phân ca làm việc hàng loạt"
        class="w-full max-w-md !rounded-3xl"
        :breakpoints="{ '960px': '75vw', '641px': '90vw' }"
      >
        <div class="flex flex-col gap-5 pt-3">
          <div class="bg-primary/5 p-3.5 rounded-xl border border-primary/10 flex items-start gap-2.5">
            <i class="pi pi-info-circle text-primary text-base mt-0.5"></i>
            <span class="text-xs font-semibold text-primary">Bạn đang thiết lập ca làm việc cho <strong>{{ selectedEmployeeIds.length }}</strong> nhân viên đã chọn.</span>
          </div>

          <!-- Select Shift -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold text-surface-600 dark:text-surface-300">Ca làm việc</label>
            <Select
              v-model="bulkWorkingHourConfigId"
              :options="workingConfigs"
              optionLabel="name"
              optionValue="id"
              placeholder="Chọn ca làm việc"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            />
          </div>

          <!-- Date Range Selection -->
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-bold text-surface-600 dark:text-surface-300">Từ ngày</label>
              <DatePicker
                v-model="bulkStartDate"
                dateFormat="dd/mm/yy"
                class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-bold text-surface-600 dark:text-surface-300">Đến ngày</label>
              <DatePicker
                v-model="bulkEndDate"
                dateFormat="dd/mm/yy"
                class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
              />
            </div>
          </div>

          <!-- Weekdays Selection -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold text-surface-600 dark:text-surface-300">Áp dụng cho các ngày trong tuần</label>
            <div class="flex flex-wrap items-center gap-3 bg-surface-50 dark:bg-surface-950/20 p-3.5 rounded-xl border border-surface-150/40 dark:border-surface-850">
              <label v-for="w in weekdaysOptions" :key="w.value" class="flex items-center gap-1.5 text-xs font-semibold text-surface-700 dark:text-surface-300 cursor-pointer">
                <input type="checkbox" v-model="bulkWeekdays" :value="w.value" class="rounded border-surface-300 text-primary focus:ring-primary w-4 h-4" />
                <span>{{ w.label }}</span>
              </label>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex items-center justify-end gap-3">
            <Button label="Hủy" class="p-button-text !rounded-xl" @click="displayBulkAssignDialog = false" />
            <Button label="Xác nhận" class="!rounded-xl !px-5" :loading="submittingAssignment" @click="handleBulkAssignShifts" />
          </div>
        </template>
      </Dialog>

      <!-- Bulk Reset Shifts Dialog -->
      <Dialog
        v-model:visible="displayBulkResetDialog"
        modal
        header="Khôi phục ca mặc định hàng loạt"
        class="w-full max-w-md !rounded-3xl"
        :breakpoints="{ '960px': '75vw', '641px': '90vw' }"
      >
        <div class="flex flex-col gap-5 pt-3">
          <div class="bg-rose-500/5 p-3.5 rounded-xl border border-rose-500/10 flex items-start gap-2.5">
            <i class="pi pi-exclamation-triangle text-rose-500 text-base mt-0.5"></i>
            <span class="text-xs font-semibold text-rose-600 dark:text-rose-400">Hành động này sẽ khôi phục lịch làm việc của <strong>{{ selectedEmployeeIds.length }}</strong> nhân viên về ca mặc định của hệ thống trong khoảng thời gian đã chọn.</span>
          </div>

          <!-- Date Range Selection -->
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-bold text-surface-600 dark:text-surface-300">Từ ngày</label>
              <DatePicker
                v-model="bulkStartDate"
                dateFormat="dd/mm/yy"
                class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-bold text-surface-600 dark:text-surface-300">Đến ngày</label>
              <DatePicker
                v-model="bulkEndDate"
                dateFormat="dd/mm/yy"
                class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
              />
            </div>
          </div>

          <!-- Weekdays Selection -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold text-surface-600 dark:text-surface-300">Áp dụng cho các ngày trong tuần</label>
            <div class="flex flex-wrap items-center gap-3 bg-surface-50 dark:bg-surface-950/20 p-3.5 rounded-xl border border-surface-150/40 dark:border-surface-850">
              <label v-for="w in weekdaysOptions" :key="w.value" class="flex items-center gap-1.5 text-xs font-semibold text-surface-700 dark:text-surface-300 cursor-pointer">
                <input type="checkbox" v-model="bulkWeekdays" :value="w.value" class="rounded border-surface-300 text-primary focus:ring-primary w-4 h-4" />
                <span>{{ w.label }}</span>
              </label>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex items-center justify-end gap-3">
            <Button label="Hủy" class="p-button-text !rounded-xl" @click="displayBulkResetDialog = false" />
            <Button label="Xác nhận" class="!rounded-xl !px-5" :loading="submittingReset" @click="handleBulkResetShifts" />
          </div>
        </template>
      </Dialog>
    </template>

    <!-- Dialog Cập nhật Chấm công Thủ công (Manual Dialog) -->
    <Dialog
      v-model:visible="displayManualDialog"
      modal
      :header="editingRecord ? $t('timesheet.dialogManualEdit') : $t('timesheet.dialogManualCreate')"
      :style="{ width: '32rem' }"
      class="!rounded-[2rem] overflow-hidden"
    >
      <div class="space-y-6 p-2">
        <!-- Employee select (Only for creating, locked/disabled for editing) -->
        <AppInputField :label="$t('timesheet.employeeLabel')" :isRequired="true" :error="manualErrors.employee_id">
          <Select
            v-model="manualForm.employee_id"
            :options="employeeOptions"
            optionLabel="full_name"
            optionValue="id"
            :placeholder="$t('timesheet.employeeSelectPlaceholder')"
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            :disabled="!!editingRecord"
            :invalid="!!manualErrors.employee_id"
            @change="onValidateManual('employee_id')"
          />
        </AppInputField>

        <AppInputField :label="$t('timesheet.attendanceDate')" :isRequired="true" :error="manualErrors.date">
          <DatePicker
            v-model="manualForm.date"
            dateFormat="dd/mm/yy"
            :placeholder="$t('timesheet.selectDate')"
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            :disabled="!!editingRecord"
            :invalid="!!manualErrors.date"
            @date-select="onValidateManual('date')"
          />
        </AppInputField>

        <div class="grid grid-cols-2 gap-4">
          <AppInputField :label="$t('timesheet.checkInLabel')" :error="manualErrors.check_in">
            <DatePicker
              v-model="manualForm.check_in"
              timeOnly
              hourFormat="24"
              showSeconds
              :placeholder="$t('timesheet.checkInPlaceholder')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            />
          </AppInputField>

          <AppInputField :label="$t('timesheet.checkOutLabel')" :error="manualErrors.check_out">
            <DatePicker
              v-model="manualForm.check_out"
              timeOnly
              hourFormat="24"
              showSeconds
              :placeholder="$t('timesheet.checkOutPlaceholder')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            />
          </AppInputField>
        </div>

        <AppInputField :label="$t('timesheet.statusLabel')" :isRequired="true">
          <Select
            v-model="manualForm.status"
            :options="[
              { label: $t('timesheet.statusPresent'), value: 'PRESENT' },
              { label: $t('timesheet.statusLate'), value: 'LATE' },
              { label: $t('timesheet.statusAbsent'), value: 'ABSENT' }
            ]"
            optionLabel="label"
            optionValue="value"
            :placeholder="$t('timesheet.status')"
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
          />
        </AppInputField>

        <AppInputField :label="$t('timesheet.noteLabel')">
          <Textarea
            v-model="manualForm.note"
            rows="3"
            :placeholder="$t('timesheet.notePlaceholder')"
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
          />
        </AppInputField>

        <div class="flex gap-4 justify-end pt-4">
          <Button
            :label="$t('timesheet.btnCancel')"
            severity="secondary"
            variant="text"
            class="!rounded-xl !font-bold"
            @click="displayManualDialog = false"
          />
          <Button
            :label="$t('timesheet.btnSaveRecord')"
            severity="primary"
            class="!rounded-xl !font-bold !px-6"
            :loading="submitting"
            @click="handleStoreManual"
          />
        </div>
      </div>
    </Dialog>

    <!-- Dialog Cấu hình Giờ Làm Việc (Config Dialog) -->
    <Dialog
      v-model:visible="displayConfigDialog"
      modal
      :header="editingConfig ? $t('timesheet.dialogConfigEdit') : $t('timesheet.dialogConfigCreate')"
      :style="{ width: '32rem' }"
      class="!rounded-[2rem] overflow-hidden"
    >
      <div class="space-y-6 p-2">
        <!-- Configuration Name -->
        <AppInputField :label="$t('timesheet.configName')" :isRequired="true" :error="configErrors.name">
          <InputText
            v-model="configForm.name"
            :placeholder="$t('timesheet.configNamePlaceholder')"
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            :invalid="!!configErrors.name"
            @change="onValidateConfig('name')"
          />
        </AppInputField>

        <!-- Is Default switch -->
        <div class="flex items-center justify-between bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl border border-surface-200/50 dark:border-surface-850">
          <div class="flex flex-col">
            <span class="text-xs font-bold text-surface-900 dark:text-surface-0">{{ $t('timesheet.setDefaultConfig') }}</span>
            <span class="text-[10px] text-surface-450 mt-0.5">{{ $t('timesheet.setDefaultConfigDesc') }}</span>
          </div>
          <input
            type="checkbox"
            v-model="configForm.is_default"
            class="w-5 h-5 accent-primary rounded cursor-pointer"
          />
        </div>
        <!-- Shift times settings -->
        <div class="grid grid-cols-2 gap-4">
          <AppInputField :label="$t('timesheet.standardIn')" :isRequired="true" :error="configErrors.start_time">
            <DatePicker
              v-model="configForm.start_time"
              timeOnly
              hourFormat="24"
              showSeconds
              :placeholder="$t('timesheet.standardIn')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
              :invalid="!!configErrors.start_time"
              @date-select="onValidateConfig('start_time')"
            />
          </AppInputField>

          <AppInputField :label="$t('timesheet.standardOut')" :isRequired="true" :error="configErrors.end_time">
            <DatePicker
              v-model="configForm.end_time"
              timeOnly
              hourFormat="24"
              showSeconds
              :placeholder="$t('timesheet.standardOut')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
              :invalid="!!configErrors.end_time"
              @date-select="onValidateConfig('end_time')"
            />
          </AppInputField>
        </div>

        <!-- Allow Overtime Switch -->
        <div class="flex items-center justify-between bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl border border-surface-200/50 dark:border-surface-850">
          <div class="flex flex-col">
            <span class="text-xs font-bold text-surface-900 dark:text-surface-0">{{ $t('timesheet.allowOvertime') }}</span>
          </div>
          <input
            type="checkbox"
            v-model="configForm.allow_overtime"
            class="w-5 h-5 accent-primary rounded cursor-pointer"
          />
        </div>

        <!-- Max Overtime Hours (Only if allowed) -->
        <div v-if="configForm.allow_overtime">
          <AppInputField :label="$t('timesheet.maxOvertimeHours')" :error="configErrors.max_overtime_hours">
            <InputNumber
              v-model="configForm.max_overtime_hours"
              :min="0"
              :max="24"
              :maxFractionDigits="1"
              :placeholder="$t('timesheet.maxOvertimeHoursPlaceholder')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            />
          </AppInputField>
        </div>

        <!-- Buttons -->
        <div class="flex gap-4 justify-end pt-4">
          <Button
            :label="$t('timesheet.btnCancel')"
            severity="secondary"
            variant="text"
            class="!rounded-xl !font-bold"
            @click="displayConfigDialog = false"
          />
          <Button
            :label="$t('timesheet.btnSaveRecord')"
            severity="primary"
            class="!rounded-xl !font-bold !px-6"
            :loading="submittingConfig"
            @click="saveConfig"
          />
        </div>
      </div>
    </Dialog>
    <!-- Dialog Chi tiết/Cập nhật Bảng lương (Payroll Detail/Edit Dialog) -->
    <Dialog
      v-model:visible="displayPayrollDialog"
      modal
      :header="$t('timesheet.payrollDetailsFor', { name: payrollForm.full_name, code: payrollForm.employee_code })"
      :style="{ width: '56rem' }"
      class="!rounded-[2rem] overflow-hidden"
    >
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 p-2">
        <!-- Left panel: Inputs (lg:col-span-7) -->
        <div class="lg:col-span-7 space-y-4">
          <h4 class="font-bold text-surface-900 dark:text-surface-0 border-b border-surface-100 dark:border-surface-800 pb-2">Thông tin điều chỉnh lương</h4>
          
          <div class="grid grid-cols-2 gap-4">
            <AppInputField :label="$t('timesheet.baseSalary')" :isRequired="true">
              <InputNumber
                v-model="payrollForm.base_salary"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>
            
            <div class="grid grid-cols-2 gap-2">
              <AppInputField :label="'Công chuẩn'" :isRequired="true">
                <InputNumber
                  v-model="payrollForm.standard_working_days"
                  class="w-full"
                  inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                  :min="0"
                  :max="31"
                  :maxFractionDigits="1"
                  @input="updatePayrollFormCalculations"
                />
              </AppInputField>
              <AppInputField :label="'Công thực tế'" :isRequired="true">
                <InputNumber
                  v-model="payrollForm.actual_working_days"
                  class="w-full"
                  inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                  :min="0"
                  :max="31"
                  :maxFractionDigits="1"
                  @input="updatePayrollFormCalculations"
                />
              </AppInputField>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3">
            <AppInputField :label="'OT Thường (giờ)'">
              <InputNumber
                v-model="payrollForm.overtime_hours_normal"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                :min="0"
                :maxFractionDigits="1"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>
            
            <AppInputField :label="'OT Cuối tuần (giờ)'">
              <InputNumber
                v-model="payrollForm.overtime_hours_weekend"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                :min="0"
                :maxFractionDigits="1"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>

            <AppInputField :label="'OT Lễ Tết (giờ)'">
              <InputNumber
                v-model="payrollForm.overtime_hours_holiday"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                :min="0"
                :maxFractionDigits="1"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <AppInputField :label="$t('timesheet.attendanceAllowanceLabel')">
              <InputNumber
                v-model="payrollForm.allowance_attendance"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>

            <AppInputField :label="'Người phụ thuộc'">
              <InputNumber
                v-model="payrollForm.dependents_count"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                :min="0"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>
          </div>

          <div class="grid grid-cols-3 gap-3">
            <AppInputField :label="'Trừ đi muộn'">
              <InputNumber
                v-model="payrollForm.deduction_late"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>
            
            <AppInputField :label="'Trừ nghỉ không phép'">
              <InputNumber
                v-model="payrollForm.deduction_leave"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>

            <AppInputField :label="'Đoàn phí công đoàn'">
              <InputNumber
                v-model="payrollForm.deduction_union"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <AppInputField :label="$t('timesheet.advancePaymentLabel')">
              <InputNumber
                v-model="payrollForm.advance_payment"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>

            <AppInputField :label="$t('timesheet.paymentStatusLabel')">
              <Select
                v-model="payrollForm.status"
                :options="[
                  { label: $t('timesheet.statusPending'), value: 'PENDING' },
                  { label: $t('timesheet.statusPaid'), value: 'PAID' }
                ]"
                optionLabel="label"
                optionValue="value"
                class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
              />
            </AppInputField>
          </div>

          <AppInputField :label="$t('timesheet.noteLabel')">
            <Textarea
              v-model="payrollForm.note"
              rows="2"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
            />
          </AppInputField>
        </div>

        <!-- Right panel: Calculation sheet (lg:col-span-5) -->
        <div class="lg:col-span-5 bg-surface-50 dark:bg-surface-950 p-5 rounded-3xl border border-surface-200/80 dark:border-surface-800 flex flex-col justify-between">
          <div>
            <h4 class="font-bold text-surface-900 dark:text-surface-0 border-b border-surface-200 dark:border-surface-800 pb-2 mb-4">Chi tiết thuế & Thực nhận</h4>
            
            <div class="space-y-3.5 text-xs">
              <!-- Base Salary -->
              <div class="flex justify-between items-center">
                <span class="text-surface-500 font-semibold">Lương cơ bản</span>
                <span class="font-bold font-mono">{{ formatVND(payrollForm.base_salary) }}</span>
              </div>
              
              <!-- Standard working hour calculations -->
              <div class="flex justify-between items-center text-[11px] text-surface-400 font-medium pl-3 border-l-2 border-surface-200 dark:border-surface-800">
                <span>Đơn giá ngày công</span>
                <span class="font-mono">
                  {{ formatVND(payrollForm.standard_working_days > 0 ? payrollForm.base_salary / payrollForm.standard_working_days : 0) }} / ngày
                </span>
              </div>

              <!-- Overtime calculations -->
              <div class="flex justify-between items-center">
                <span class="text-surface-500 font-semibold">Tiền OT làm thêm giờ</span>
                <span class="font-bold font-mono text-emerald-600">+{{ formatVND(payrollForm.overtime_salary) }}</span>
              </div>
              
              <div class="space-y-1.5 pl-3 border-l-2 border-surface-200 dark:border-surface-800 text-[11px] text-surface-450">
                <div class="flex justify-between">
                  <span>Ngày thường (1.5x)</span>
                  <span class="font-mono">{{ payrollForm.overtime_hours_normal || 0 }}h = {{ formatVND(payrollForm.overtime_salary_normal) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Cuối tuần (2.0x)</span>
                  <span class="font-mono">{{ payrollForm.overtime_hours_weekend || 0 }}h = {{ formatVND(payrollForm.overtime_salary_weekend) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Lễ Tết (3.0x)</span>
                  <span class="font-mono">{{ payrollForm.overtime_hours_holiday || 0 }}h = {{ formatVND(payrollForm.overtime_salary_holiday) }}</span>
                </div>
              </div>

              <!-- Attendance allowance -->
              <div class="flex justify-between items-center">
                <span class="text-surface-500 font-semibold">Phụ cấp chuyên cần</span>
                <span class="font-bold font-mono text-emerald-600">+{{ formatVND(payrollForm.allowance_attendance) }}</span>
              </div>

              <!-- Late and Leave Deductions -->
              <div class="flex justify-between items-center">
                <span class="text-surface-500 font-semibold">Khấu trừ chuyên cần/nghỉ phép</span>
                <span class="font-bold font-mono text-rose-500">-{{ formatVND((Number(payrollForm.deduction_late) || 0) + (Number(payrollForm.deduction_leave) || 0)) }}</span>
              </div>

              <div class="border-t border-surface-200 dark:border-surface-800 my-2 pt-2 flex justify-between items-center font-bold text-surface-900 dark:text-surface-0">
                <span>Thu nhập chịu thuế (Gross)</span>
                <span class="font-mono">
                  {{ formatVND(
                    (Number(payrollForm.base_salary) || 0) + 
                    (Number(payrollForm.overtime_salary) || 0) + 
                    (Number(payrollForm.allowance_attendance) || 0) - 
                    (Number(payrollForm.deduction_late) || 0) - 
                    (Number(payrollForm.deduction_leave) || 0)
                  ) }}
                </span>
              </div>

              <!-- Tax Deductions & Brackets -->
              <div class="flex justify-between items-center">
                <span class="text-surface-500 font-semibold">Thuế TNCN lũy tiến</span>
                <span class="font-bold font-mono text-primary">-{{ formatVND(payrollForm.deduction_tax) }}</span>
              </div>
              
              <div class="space-y-1.5 pl-3 border-l-2 border-surface-200 dark:border-surface-800 text-[11px] text-surface-450">
                <div class="flex justify-between">
                  <span>Giảm trừ bản thân</span>
                  <span class="font-mono">11,000,000 ₫</span>
                </div>
                <div class="flex justify-between">
                  <span>Giảm trừ gia cảnh</span>
                  <span class="font-mono">{{ payrollForm.dependents_count || 0 }} người = {{ formatVND((payrollForm.dependents_count || 0) * 4400000) }}</span>
                </div>
                <div class="flex justify-between font-bold text-surface-600 dark:text-surface-400">
                  <span>Thu nhập tính thuế</span>
                  <span class="font-mono">
                    {{ formatVND(
                      Math.max(0, 
                        ((Number(payrollForm.base_salary) || 0) + 
                        (Number(payrollForm.overtime_salary) || 0) + 
                        (Number(payrollForm.allowance_attendance) || 0) - 
                        (Number(payrollForm.deduction_late) || 0) - 
                        (Number(payrollForm.deduction_leave) || 0)) - 
                        11000000 - 
                        ((payrollForm.dependents_count || 0) * 4400000)
                      )
                    ) }}
                  </span>
                </div>
              </div>

              <!-- Other Deductions -->
              <div class="flex justify-between items-center">
                <span class="text-surface-500 font-semibold">Đoàn phí & Tạm ứng</span>
                <span class="font-bold font-mono text-rose-500">
                  -{{ formatVND((Number(payrollForm.deduction_union) || 0) + (Number(payrollForm.advance_payment) || 0)) }}
                </span>
              </div>
            </div>
          </div>

          <!-- Net Salary Output -->
          <div class="mt-6 bg-white dark:bg-surface-900 p-4 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-inner flex flex-col items-center">
            <span class="text-[10px] font-black uppercase tracking-widest text-surface-400 mb-1">Tổng lương thực nhận (Net)</span>
            <span class="text-2xl font-black text-emerald-600 font-mono tracking-tight">{{ formatVND(payrollForm.net_salary) }}</span>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center justify-end gap-3 pt-4">
          <Button
            :label="$t('timesheet.btnCancel')"
            severity="secondary"
            variant="text"
            class="!rounded-xl !font-bold"
            @click="displayPayrollDialog = false"
          />
          <Button
            :label="$t('timesheet.btnSavePayroll')"
            severity="primary"
            class="!rounded-xl !font-bold !px-6"
            :loading="submittingPayroll"
            @click="savePayroll"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import BaseDataTable from '~/components/common/BaseDataTable.vue';
import BasePagination from '~/components/common/BasePagination.vue';
import {
  GET_ADMIN_TIMESHEETS,
  GET_TIMESHEET_STATISTICS,
  STORE_MANUAL_TIMESHEET,
  GET_WORKING_HOUR_CONFIGS,
  STORE_WORKING_HOUR_CONFIG,
  DELETE_WORKING_HOUR_CONFIG,
  GET_SHIFTS,
  STORE_SHIFT,
  DELETE_SHIFT,
  GET_EMPLOYEE_SHIFTS,
  STORE_EMPLOYEE_SHIFT,
  DELETE_EMPLOYEE_SHIFT,
  GET_EMPLOYEE_SHIFTS_CALENDAR,
  RESET_EMPLOYEE_SHIFTS,
  GET_PAYROLL,
  SAVE_PAYROLL,
  EXPORT_PAYROLL_EXCEL,
  EXPORT_PAYROLL_PDF
} from '~/apis/timesheet';
import { useEmployee } from '~/composables/employee';
import { useDepartment } from '~/composables/master/department';
import { useApiStore } from "~/stores/api";
import { showMessage } from "~/utils/global";
import { validateOnAllField, validateOnField } from '~/utils/validate';

const router = useRouter();
const apiStore = useApiStore();
const { t } = useI18n();
const { getEmployees } = useEmployee() as any;

const checkingAccess = ref(true);
const activeTab = ref('records');
const isReload = ref(false);

const reloadTable = () => {
  isReload.value = !isReload.value;
};

const columns = computed(() => [
  { key: 'stt', label: t('timesheet.no') || 'STT', minWidth: '60px' },
  { key: 'employee', label: t('timesheet.staff') || 'Nhân viên', minWidth: '180px' },
  { key: 'date', label: t('timesheet.dateCol') || 'Ngày', minWidth: '110px' },
  { key: 'check_in', label: t('timesheet.checkInCol') || 'Giờ vào', minWidth: '100px' },
  { key: 'check_out', label: t('timesheet.checkOutCol') || 'Giờ ra', minWidth: '100px' },
  { key: 'status', label: t('timesheet.statusCol') || 'Trạng thái', minWidth: '120px' },
  { key: 'note', label: t('timesheet.noteCol') || 'Ghi chú', minWidth: '150px' },
  { key: 'actions', label: t('timesheet.actionCol') || 'Thao tác', minWidth: '130px', frozen: true }
]);

const tabs = computed(() => [
  { label: t('timesheet.tabHistory'), value: 'records', icon: 'pi pi-calendar' },
  { label: t('timesheet.tabStats'), value: 'statistics', icon: 'pi pi-chart-bar' },
  { label: t('timesheet.tabPayroll'), value: 'payroll', icon: 'pi pi-money-bill' },
  { label: t('timesheet.tabConfigs'), value: 'configs', icon: 'pi pi-clock' },
  { label: t('timesheet.tabShiftAssignments'), value: 'shift-assignments', icon: 'pi pi-users' }
]);

const userInfo = computed(() => {
  if (process.client) {
    return apiStore.userInfo || JSON.parse(localStorage.getItem("userInfo") || "{}");
  }
  return null;
});

const isManagerOrAdmin = computed(() => {
  const role = userInfo.value?.role;
  return role === 'ADMIN' || role === 'MANAGER';
});

// Records List State
const records = ref<any[]>([]);
const loadingRecords = ref(false);
const filters = ref({
  q: '',
  status: 'ALL',
  start_date: null as Date | null,
  end_date: null as Date | null
});
const pagination = ref({
  page: 1,
  limit: 15,
  total: 0,
  last_page: 1
});

const statusOptions = computed(() => [
  { label: t('timesheet.statusAll'), value: 'ALL' },
  { label: t('timesheet.statusPresent'), value: 'PRESENT' },
  { label: t('timesheet.statusLate'), value: 'LATE' },
  { label: t('timesheet.statusAbsent'), value: 'ABSENT' }
]);

// Statistics State
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
const statsPerPage = ref(10);
const statsTotal = ref(0);
const statsSearchQuery = ref('');

const handleStatsPageChange = (event: any) => {
  statsCurrentPage.value = event.page || 0;
  statsPerPage.value = event.rows || 10;
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

// Manual Dialog State
const displayManualDialog = ref(false);
const editingRecord = ref<any>(null);
const submitting = ref(false);
const employeeOptions = ref<any[]>([]);
const manualForm = ref({
  employee_id: null as number | null,
  date: null as Date | null,
  check_in: null as Date | null,
  check_out: null as Date | null,
  status: 'PRESENT',
  note: ''
});

// Manual validation
const manualErrors = ref<any>({
  employee_id: '',
  date: '',
});

const MANUAL_VALIDATIONS = {
  employee_id: { transitionKey: "timesheet.employeeLabel", types: ["require"], errorKey: "employee_id" },
  date: { transitionKey: "timesheet.attendanceDate", types: ["require"], errorKey: "date" },
};

const onValidateManual = (field: string) => {
  validateOnField(field, manualForm.value, manualErrors.value, MANUAL_VALIDATIONS, t);
};

const goHome = () => router.push('/');

const formatDateForApi = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

const formatTime = (timeStr: string) => {
  if (!timeStr) return null;
  return new Date(timeStr).toLocaleTimeString('en-US', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false, hour: '2-digit', minute: '2-digit' });
};

// Fetch Records Log
const fetchRecordsWrapper = (payload: { query: string, successCallback: Function, errorCallback: Function }) => {
  const params = Object.fromEntries(new URLSearchParams(payload.query));
  
  const apiParams: any = {
    page: params.page || '1',
    per_page: params.limit || '15'
  };

  if (filters.value.q) apiParams.q = filters.value.q;
  if (filters.value.status && filters.value.status !== 'ALL') apiParams.status = filters.value.status;
  if (filters.value.start_date) apiParams.start_date = formatDateForApi(filters.value.start_date);
  if (filters.value.end_date) apiParams.end_date = formatDateForApi(filters.value.end_date);

  return GET_ADMIN_TIMESHEETS(
    apiParams,
    (res: any) => {
      const rawList = res.data?.data?.data || [];
      const total = res.data?.data?.meta?.total || rawList.length;
      
      const formattedResponse = {
        data: {
          data: {
            data: rawList,
            total: total
          }
        }
      };
      
      payload.successCallback(formattedResponse);
      checkingAccess.value = false;
    },
    (err: any) => {
      payload.errorCallback(err);
      checkingAccess.value = false;
    }
  );
};

// Fetch Statistics Report
const fetchStatistics = () => {
  if (!isManagerOrAdmin.value) return;

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
      statsTotal.value = dataObj.total || statistics.value.length;
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

// Fetch Employees List for Manual dialog
const fetchEmployees = () => {
  getEmployees({
    params: { per_page: 100 },
    successCallback: (res: any) => {
      employeeOptions.value = res.data?.data?.data || res.data?.data || [];
    },
    errorCallback: (err: any) => {
      console.error(err);
    }
  });
};

let debounceTimer: any = null;
const onSearchFilter = () => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    reloadTable();
  }, 400);
};

// Open Manual log dialog
const openManualDialog = (record: any = null) => {
  fetchEmployees();
  
  // Clear manual validations
  Object.keys(manualErrors.value).forEach(k => manualErrors.value[k] = '');

  const parseTimeToDate = (timeStr: string) => {
    if (!timeStr) return null;
    const parts = timeStr.split(':').map(Number);
    const d = new Date();
    d.setHours(parts[0] || 0, parts[1] || 0, parts[2] || 0, 0);
    return d;
  };

  const getCleanTime = (dtStr: string) => {
    if (!dtStr) return null;
    if (dtStr.includes(' ')) {
      const timePart = dtStr.split(' ')[1];
      return parseTimeToDate(timePart);
    }
    return parseTimeToDate(dtStr);
  };

  if (record) {
    editingRecord.value = record;
    manualForm.value = {
      employee_id: record.employee_id,
      date: new Date(record.date),
      check_in: getCleanTime(record.check_in),
      check_out: getCleanTime(record.check_out),
      status: record.status,
      note: record.note || ''
    };
  } else {
    editingRecord.value = null;
    
    const defCheckIn = new Date();
    defCheckIn.setHours(8, 30, 0, 0);
    
    const defCheckOut = new Date();
    defCheckOut.setHours(17, 30, 0, 0);

    manualForm.value = {
      employee_id: null,
      date: new Date(),
      check_in: defCheckIn,
      check_out: defCheckOut,
      status: 'PRESENT',
      note: ''
    };
  }
  displayManualDialog.value = true;
};

// Handle manual timesheet submit
const handleStoreManual = () => {
  // Clear manual validations
  Object.keys(manualErrors.value).forEach(k => manualErrors.value[k] = '');

  const isValid = validateOnAllField(manualForm.value, manualErrors.value, MANUAL_VALIDATIONS, t);
  if (!isValid) {
    showMessage("error", t('text.error'), t('text.errorInput'));
    return;
  }

  const dateStr = formatDateForApi(manualForm.value.date!);

  const formatTimeOnlyStr = (dt: Date | null) => {
    if (!dt) return null;
    const h = String(dt.getHours()).padStart(2, '0');
    const m = String(dt.getMinutes()).padStart(2, '0');
    const s = String(dt.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const payload: any = {
    employee_id: manualForm.value.employee_id,
    date: dateStr,
    status: manualForm.value.status,
    note: manualForm.value.note
  };

  if (manualForm.value.check_in) {
    payload.check_in = `${dateStr} ${formatTimeOnlyStr(manualForm.value.check_in)}`;
  }
  if (manualForm.value.check_out) {
    payload.check_out = `${dateStr} ${formatTimeOnlyStr(manualForm.value.check_out)}`;
  }

  submitting.value = true;
  STORE_MANUAL_TIMESHEET(
    payload,
    (res: any) => {
      showMessage("success", t("timesheet.msgUpdateSuccess"), t("timesheet.msgUpdateSuccessDesc"));
      displayManualDialog.value = false;
      submitting.value = false;
      reloadTable();
      fetchStatistics();
    },
    (err: any) => {
      submitting.value = false;
    }
  );
};

// Working Hour Configurations State
const workingConfigs = ref<any[]>([]);
const loadingConfigs = ref(false);
const displayConfigDialog = ref(false);
const editingConfig = ref<any>(null);
const configForm = ref({
  id: null as number | null,
  name: '',
  start_time: null as Date | null,
  end_time: null as Date | null,
  is_default: false,
  allow_overtime: false,
  max_overtime_hours: null as number | null
});
const submittingConfig = ref(false);

// Config validation
const configErrors = ref<any>({
  name: '',
  start_time: '',
  end_time: '',
  max_overtime_hours: ''
});

const CONFIG_VALIDATIONS = computed(() => {
  return {
    name: { transitionKey: "timesheet.configName", types: ["require"], errorKey: "name" },
    start_time: { transitionKey: "timesheet.standardIn", types: ["require"], errorKey: "start_time" },
    end_time: { transitionKey: "timesheet.standardOut", types: ["require"], errorKey: "end_time" },
  };
});

const onValidateConfig = (field: string) => {
  validateOnField(field, configForm.value, configErrors.value, CONFIG_VALIDATIONS.value, t);
};

const fetchWorkingConfigs = () => {
  loadingConfigs.value = true;
  GET_WORKING_HOUR_CONFIGS(
    (res: any) => {
      workingConfigs.value = res.data?.data || [];
      loadingConfigs.value = false;
    },
    (err: any) => {
      console.error(err);
      loadingConfigs.value = false;
    }
  );
};

const openConfigDialog = (config: any = null) => {
  // Clear config validations
  Object.keys(configErrors.value).forEach(k => configErrors.value[k] = '');

  const parseTimeToDate = (timeStr: string) => {
    if (!timeStr) return null;
    const parts = timeStr.split(':').map(Number);
    const d = new Date();
    d.setHours(parts[0] || 0, parts[1] || 0, parts[2] || 0, 0);
    return d;
  };

  if (config) {
    editingConfig.value = config;
    configForm.value = {
      id: config.id,
      name: config.name,
      start_time: parseTimeToDate(config.start_time),
      end_time: parseTimeToDate(config.end_time),
      is_default: !!config.is_default,
      allow_overtime: !!config.allow_overtime,
      max_overtime_hours: config.max_overtime_hours !== null ? Number(config.max_overtime_hours) : null
    };
  } else {
    editingConfig.value = null;
    
    const defStart = new Date();
    defStart.setHours(8, 30, 0, 0);

    const defEnd = new Date();
    defEnd.setHours(17, 30, 0, 0);

    configForm.value = {
      id: null,
      name: '',
      start_time: defStart,
      end_time: defEnd,
      is_default: false,
      allow_overtime: false,
      max_overtime_hours: null
    };
  }
  displayConfigDialog.value = true;
};

const saveConfig = () => {
  // Clear config validations
  Object.keys(configErrors.value).forEach(k => configErrors.value[k] = '');

  const isValid = validateOnAllField(configForm.value, configErrors.value, CONFIG_VALIDATIONS.value, t);
  if (!isValid) {
    showMessage("error", t('text.error'), t('text.errorInput'));
    return;
  }

  const formatTimeOnlyStr = (dt: Date | null) => {
    if (!dt) return '00:00:00';
    const h = String(dt.getHours()).padStart(2, '0');
    const m = String(dt.getMinutes()).padStart(2, '0');
    const s = String(dt.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const payload = {
    id: configForm.value.id,
    name: configForm.value.name,
    start_time: formatTimeOnlyStr(configForm.value.start_time),
    end_time: formatTimeOnlyStr(configForm.value.end_time),
    is_default: configForm.value.is_default ? 1 : 0,
    allow_overtime: configForm.value.allow_overtime ? 1 : 0,
    max_overtime_hours: configForm.value.allow_overtime ? configForm.value.max_overtime_hours : null
  };

  submittingConfig.value = true;
  STORE_WORKING_HOUR_CONFIG(
    payload,
    (res: any) => {
      showMessage("success", t("text.success"), t("timesheet.msgSaveConfigSuccess"));
      displayConfigDialog.value = false;
      submittingConfig.value = false;
      fetchWorkingConfigs();
    },
    (err: any) => {
      console.error(err);
      submittingConfig.value = false;
    }
  );
};

const deleteConfig = (id: number) => {
  if (confirm(t("timesheet.msgDeleteConfigConfirm"))) {
    DELETE_WORKING_HOUR_CONFIG(
      id,
      (res: any) => {
        showMessage("success", t("text.success"), t("timesheet.msgDeleteConfigSuccess"));
        fetchWorkingConfigs();
      },
      (err: any) => {
        console.error(err);
      }
    );
  }
};

// Paginated employee shifts list calendar state
const currentYearMonthDate = ref<Date>(new Date());
const assignSearchQuery = ref('');
const assignPage = ref(1);
const assignLimit = ref(10);
const assignTotal = ref(0);
const assignEmployees = ref<any[]>([]);
const loadingAssignEmployees = ref(false);
const selectedEmployeeIds = ref<number[]>([]);
const bulkWorkingHourConfigId = ref<number | null>(null);
const submittingAssignment = ref(false);
const selectedDepartmentId = ref<number | null>(null);
const departmentOptions = ref<any[]>([]);

// Bulk Range Pickers
const bulkStartDate = ref<Date | null>(null);
const bulkEndDate = ref<Date | null>(null);
const submittingReset = ref(false);

const weekdaysOptions = [
  { label: 'T2', value: 1 },
  { label: 'T3', value: 2 },
  { label: 'T4', value: 3 },
  { label: 'T5', value: 4 },
  { label: 'T6', value: 5 },
  { label: 'T7', value: 6 },
  { label: 'CN', value: 0 }
];
const bulkWeekdays = ref<number[]>([1, 2, 3, 4, 5, 6, 0]);
const singleWeekdays = ref<number[]>([1, 2, 3, 4, 5, 6, 0]);

// Dialog Cập nhật Ca làm việc
const displaySetShiftDialog = ref(false);
const displayBulkAssignDialog = ref(false);
const displayBulkResetDialog = ref(false);
const selectedEmployeeForShift = ref<any>(null);
const singleShiftConfigId = ref<number | null>(null);
const singleStartDate = ref<Date>(new Date());
const singleEndDate = ref<Date>(new Date());
const submittingSingleShift = ref(false);
const resettingSingleShift = ref(false);

const selectedShiftDetail = computed(() => {
  if (!singleShiftConfigId.value) return null;
  return workingConfigs.value.find((c: any) => c.id === singleShiftConfigId.value);
});

const getYearMonthString = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
};

const getDatesInRange = (start: Date, end: Date, allowedDays?: number[]): string[] => {
  const dates: string[] = [];
  const current = new Date(start.getTime());
  current.setHours(12, 0, 0, 0);
  const targetEnd = new Date(end.getTime());
  targetEnd.setHours(12, 0, 0, 0);

  while (current <= targetEnd) {
    const dayOfWeek = current.getDay();
    if (!allowedDays || allowedDays.includes(dayOfWeek)) {
      const y = current.getFullYear();
      const m = String(current.getMonth() + 1).padStart(2, '0');
      const d = String(current.getDate()).padStart(2, '0');
      dates.push(`${y}-${m}-${d}`);
    }
    current.setDate(current.getDate() + 1);
  }
  return dates;
};

const fetchDepartments = () => {
  const { getDepartments } = useDepartment();
  getDepartments({
    query: 'per_page=100',
    successCallback: (res: any) => {
      departmentOptions.value = res.data?.data?.data || res.data?.data || [];
    },
    errorCallback: (err: any) => {
      console.error(err);
    }
  });
};

const fetchAssignEmployees = () => {
  loadingAssignEmployees.value = true;
  const ym = getYearMonthString(currentYearMonthDate.value);

  GET_EMPLOYEE_SHIFTS_CALENDAR(
    {
      page: assignPage.value,
      per_page: assignLimit.value,
      search: assignSearchQuery.value,
      department_id: selectedDepartmentId.value || undefined,
      year_month: ym,
    },
    (res: any) => {
      const dataObj = res.data?.data || {};
      const emps = dataObj.data || [];
      assignEmployees.value = emps;
      assignTotal.value = dataObj.total || emps.length;
      loadingAssignEmployees.value = false;
    },
    (err: any) => {
      console.error(err);
      loadingAssignEmployees.value = false;
    }
  );
};

const daysInMonth = computed(() => {
  const date = currentYearMonthDate.value;
  const year = date.getFullYear();
  const month = date.getMonth();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const days = [];
  for (let i = 1; i <= totalDays; i++) {
    const dayDate = new Date(year, month, i);
    days.push({
      day: i,
      dayOfWeek: dayDate.getDay(),
      dateString: `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
    });
  }
  return days;
});

const getDayOfWeekAbbr = (dow: number): string => {
  const days = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  return days[dow];
};

const getDayShiftInfo = (employee: any, dateStr: string) => {
  if (!employee.employee_shifts) return null;
  return employee.employee_shifts.find((s: any) => s.date === dateStr);
};

const getDayLeaveInfo = (employee: any, dateStr: string) => {
  if (!employee.leave_requests) return null;
  return employee.leave_requests.find((leave: any) => {
    return dateStr >= leave.start_date && dateStr <= leave.end_date;
  });
};

const getDayLeaveText = (leave: any): string => {
  if (!leave) return '';
  const typeAbbr = leave.leave_type === 'ANNUAL' ? 'AL' : leave.leave_type === 'SICK' ? 'SL' : 'PL';
  const statusAbbr = leave.status === 'PENDING' ? ' (CD)' : '';
  return `Nghỉ ${typeAbbr}${statusAbbr}`;
};

const getDefaultConfig = () => {
  return workingConfigs.value.find((c: any) => c.is_default) || workingConfigs.value[0];
};

const getDayCellDetails = (employee: any, dateStr: string, dow: number) => {
  const leave = getDayLeaveInfo(employee, dateStr);
  let leaveText = '';
  if (leave) {
    const typeAbbr = leave.leave_type === 'ANNUAL' ? 'AL' : leave.leave_type === 'SICK' ? 'SL' : 'PL';
    const statusAbbr = leave.status === 'PENDING' ? ' (CD)' : '';
    leaveText = `Nghỉ ${typeAbbr}${statusAbbr}`;
  }

  const shift = getDayShiftInfo(employee, dateStr);
  let shiftName = '';
  let timeRange = '';
  let overtimeText = '';
  let hasShift = false;

  if (shift && shift.working_hour_config) {
    hasShift = true;
    const config = shift.working_hour_config;
    shiftName = config.name;
    const start = config.start_time ? config.start_time.substring(0, 5) : '';
    const end = config.end_time ? config.end_time.substring(0, 5) : '';
    timeRange = `${start}-${end}`;
    if (config.allow_overtime) {
      overtimeText = config.max_overtime_hours ? `OT max ${config.max_overtime_hours}h` : 'Cho phép OT';
    } else {
      overtimeText = 'Không OT';
    }
  } else {
    // If weekend (Saturday / Sunday) and no shift: default off
    if (dow === 0 || dow === 6) {
      timeRange = 'Nghỉ';
      overtimeText = '';
      shiftName = 'Cuối tuần';
    } else {
      // Default config
      const defaultConfig = getDefaultConfig();
      if (defaultConfig) {
        shiftName = defaultConfig.name;
        const start = defaultConfig.start_time ? defaultConfig.start_time.substring(0, 5) : '';
        const end = defaultConfig.end_time ? defaultConfig.end_time.substring(0, 5) : '';
        timeRange = `${start}-${end}`;
        if (defaultConfig.allow_overtime) {
          overtimeText = defaultConfig.max_overtime_hours ? `OT max ${defaultConfig.max_overtime_hours}h` : 'Cho phép OT';
        } else {
          overtimeText = 'Không OT';
        }
      }
    }
  }

  const startVal = shift && shift.working_hour_config ? shift.working_hour_config.start_time : (dow === 0 || dow === 6 ? null : getDefaultConfig()?.start_time);
  const endVal = shift && shift.working_hour_config ? shift.working_hour_config.end_time : (dow === 0 || dow === 6 ? null : getDefaultConfig()?.end_time);
  const startTime = startVal ? startVal.substring(0, 5) : '';
  const endTime = endVal ? endVal.substring(0, 5) : '';

  const allowOvertime = shift && shift.working_hour_config ? !!shift.working_hour_config.allow_overtime : (dow === 0 || dow === 6 ? false : !!getDefaultConfig()?.allow_overtime);
  const maxOvertimeHours = shift && shift.working_hour_config ? shift.working_hour_config.max_overtime_hours : (dow === 0 || dow === 6 ? null : getDefaultConfig()?.max_overtime_hours);

  return {
    shiftName,
    timeRange,
    startTime,
    endTime,
    leaveText,
    leaveTypeAbbr: leave ? (leave.leave_type === 'ANNUAL' ? 'AL' : leave.leave_type === 'SICK' ? 'SL' : 'PL') : '',
    overtimeText,
    allowOvertime,
    maxOvertimeHours,
    hasShift,
    isLeave: !!leave,
    isApprovedLeave: leave?.status === 'APPROVED',
    isPendingLeave: leave?.status === 'PENDING'
  };
};

const getCellClass = (employee: any, dateStr: string, dow: number): string => {
  const details = getDayCellDetails(employee, dateStr, dow);
  if (details.timeRange === 'Nghỉ') {
    return 'bg-surface-100 dark:bg-surface-800/40 text-surface-400 dark:text-surface-500 border-l border-surface-150 dark:border-surface-850';
  }

  if (details.isLeave) {
    if (details.isApprovedLeave) {
      return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-l border-surface-150 dark:border-surface-800';
    } else {
      return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-l border-surface-150 dark:border-surface-800';
    }
  }

  if (details.hasShift) {
    return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-l border-surface-150 dark:border-surface-800';
  }

  // Weekends
  if (dow === 0) return 'bg-red-500/5 border-l border-surface-150 dark:border-surface-800';
  if (dow === 6) return 'bg-blue-500/5 border-l border-surface-150 dark:border-surface-800';

  return 'border-l border-surface-150 dark:border-surface-800';
};

const getCellTooltip = (employee: any, dateStr: string, dow: number): string => {
  const details = getDayCellDetails(employee, dateStr, dow);
  let tooltip = `Ngày: ${dateStr}\nCa làm việc: ${details.shiftName}`;
  if (details.timeRange && details.timeRange !== 'Nghỉ') {
    tooltip += ` (${details.timeRange})`;
  }
  if (details.leaveText) {
    tooltip += `\nNghỉ phép: ${details.leaveText}`;
  }
  if (details.overtimeText) {
    tooltip += `\nTăng ca: ${details.overtimeText}`;
  }
  return tooltip;
};

const onCalendarMonthChange = () => {
  assignPage.value = 1;
  fetchAssignEmployees();
};

const onCalendarFiltersChange = () => {
  assignPage.value = 1;
  fetchAssignEmployees();
};

const handleSingleReset = (employee: any) => {
  const totalDays = daysInMonth.value.map(d => d.dateString);

  RESET_EMPLOYEE_SHIFTS(
    {
      employee_ids: [employee.id],
      dates: totalDays
    },
    () => {
      showMessage("success", t("text.success"), `Đã reset ca làm việc của ${employee.full_name} về mặc định`);
      fetchAssignEmployees();
    },
    (err: any) => {
      console.error(err);
      showMessage("error", t("text.error"), t("text.errorSystem") || "Có lỗi xảy ra");
    }
  );
};

const openSetSingleShiftDialog = (employee: any) => {
  selectedEmployeeForShift.value = employee;
  singleShiftConfigId.value = workingConfigs.value[0]?.id || null;
  singleWeekdays.value = [1, 2, 3, 4, 5, 6, 0];
  
  const date = currentYearMonthDate.value;
  const year = date.getFullYear();
  const month = date.getMonth();
  const totalDays = new Date(year, month + 1, 0).getDate();

  singleStartDate.value = new Date(year, month, 1);
  singleEndDate.value = new Date(year, month, totalDays);
  
  displaySetShiftDialog.value = true;
};

const saveSingleShift = () => {
  if (!singleShiftConfigId.value) {
    showMessage("error", t("text.error"), "Vui lòng chọn ca làm việc");
    return;
  }
  if (!singleStartDate.value || !singleEndDate.value) {
    showMessage("error", t("text.error"), "Vui lòng chọn khoảng thời gian");
    return;
  }
  if (singleWeekdays.value.length === 0) {
    showMessage("error", t("text.error"), "Vui lòng chọn ít nhất một ngày trong tuần");
    return;
  }

  const dates = getDatesInRange(singleStartDate.value, singleEndDate.value, singleWeekdays.value);
  submittingSingleShift.value = true;

  STORE_EMPLOYEE_SHIFT(
    {
      employee_ids: [selectedEmployeeForShift.value.id],
      dates: dates,
      working_hour_config_id: singleShiftConfigId.value
    },
    () => {
      showMessage("success", t("text.success"), "Thiết lập ca làm việc thành công");
      displaySetShiftDialog.value = false;
      submittingSingleShift.value = false;
      fetchAssignEmployees();
    },
    (err: any) => {
      console.error(err);
      submittingSingleShift.value = false;
      showMessage("error", t("text.error"), t("text.errorSystem") || "Có lỗi xảy ra");
    }
  );
};

const resetSingleShift = () => {
  if (!singleStartDate.value || !singleEndDate.value) {
    showMessage("error", t("text.error"), "Vui lòng chọn khoảng thời gian");
    return;
  }
  if (singleWeekdays.value.length === 0) {
    showMessage("error", t("text.error"), "Vui lòng chọn ít nhất một ngày trong tuần");
    return;
  }

  const dates = getDatesInRange(singleStartDate.value, singleEndDate.value, singleWeekdays.value);
  resettingSingleShift.value = true;

  RESET_EMPLOYEE_SHIFTS(
    {
      employee_ids: [selectedEmployeeForShift.value.id],
      dates: dates
    },
    () => {
      showMessage("success", t("text.success"), "Khôi phục ca mặc định thành công");
      displaySetShiftDialog.value = false;
      resettingSingleShift.value = false;
      fetchAssignEmployees();
    },
    (err: any) => {
      console.error(err);
      resettingSingleShift.value = false;
      showMessage("error", t("text.error"), t("text.errorSystem") || "Có lỗi xảy ra");
    }
  );
};

const openBulkAssignDialog = () => {
  if (selectedEmployeeIds.value.length === 0) {
    showMessage("error", t("text.error"), "Vui lòng chọn ít nhất một nhân viên");
    return;
  }
  bulkWorkingHourConfigId.value = workingConfigs.value[0]?.id || null;
  
  const date = currentYearMonthDate.value;
  const year = date.getFullYear();
  const month = date.getMonth();
  const totalDays = new Date(year, month + 1, 0).getDate();

  bulkStartDate.value = new Date(year, month, 1);
  bulkEndDate.value = new Date(year, month, totalDays);
  bulkWeekdays.value = [1, 2, 3, 4, 5, 6, 0];
  displayBulkAssignDialog.value = true;
};

const openBulkResetDialog = () => {
  if (selectedEmployeeIds.value.length === 0) {
    showMessage("error", t("text.error"), "Vui lòng chọn ít nhất một nhân viên");
    return;
  }
  
  const date = currentYearMonthDate.value;
  const year = date.getFullYear();
  const month = date.getMonth();
  const totalDays = new Date(year, month + 1, 0).getDate();

  bulkStartDate.value = new Date(year, month, 1);
  bulkEndDate.value = new Date(year, month, totalDays);
  bulkWeekdays.value = [1, 2, 3, 4, 5, 6, 0];
  displayBulkResetDialog.value = true;
};

const handleBulkAssignShifts = () => {
  if (selectedEmployeeIds.value.length === 0) {
    showMessage("error", t("text.error"), "Vui lòng chọn ít nhất một nhân viên");
    return;
  }
  if (!bulkWorkingHourConfigId.value) {
    showMessage("error", t("text.error"), "Vui lòng chọn ca làm việc");
    return;
  }
  if (!bulkStartDate.value || !bulkEndDate.value) {
    showMessage("error", t("text.error"), "Vui lòng chọn khoảng thời gian");
    return;
  }
  if (bulkWeekdays.value.length === 0) {
    showMessage("error", t("text.error"), "Vui lòng chọn ít nhất một ngày trong tuần để áp dụng");
    return;
  }

  const dates = getDatesInRange(bulkStartDate.value, bulkEndDate.value, bulkWeekdays.value);
  submittingAssignment.value = true;

  STORE_EMPLOYEE_SHIFT(
    {
      employee_ids: selectedEmployeeIds.value,
      dates: dates,
      working_hour_config_id: bulkWorkingHourConfigId.value
    },
    () => {
      showMessage("success", t("text.success"), "Phân ca hàng loạt thành công");
      selectedEmployeeIds.value = [];
      bulkWorkingHourConfigId.value = null;
      bulkStartDate.value = null;
      bulkEndDate.value = null;
      bulkWeekdays.value = [1, 2, 3, 4, 5, 6, 0];
      displayBulkAssignDialog.value = false;
      submittingAssignment.value = false;
      fetchAssignEmployees();
    },
    (err: any) => {
      console.error(err);
      submittingAssignment.value = false;
      showMessage("error", t("text.error"), t("text.errorSystem") || "Có lỗi xảy ra");
    }
  );
};

const handleBulkResetShifts = () => {
  if (selectedEmployeeIds.value.length === 0) {
    showMessage("error", t("text.error"), "Vui lòng chọn ít nhất một nhân viên");
    return;
  }
  if (!bulkStartDate.value || !bulkEndDate.value) {
    showMessage("error", t("text.error"), "Vui lòng chọn khoảng thời gian");
    return;
  }
  if (bulkWeekdays.value.length === 0) {
    showMessage("error", t("text.error"), "Vui lòng chọn ít nhất một ngày trong tuần để reset");
    return;
  }

  const dates = getDatesInRange(bulkStartDate.value, bulkEndDate.value, bulkWeekdays.value);
  submittingReset.value = true;

  RESET_EMPLOYEE_SHIFTS(
    {
      employee_ids: selectedEmployeeIds.value,
      dates: dates
    },
    () => {
      showMessage("success", t("text.success"), "Reset ca làm việc hàng loạt thành công");
      selectedEmployeeIds.value = [];
      bulkStartDate.value = null;
      bulkEndDate.value = null;
      displayBulkResetDialog.value = false;
      submittingReset.value = false;
      fetchAssignEmployees();
    },
    (err: any) => {
      console.error(err);
      submittingReset.value = false;
      showMessage("error", t("text.error"), t("text.errorSystem") || "Có lỗi xảy ra");
    }
  );
};

// Checkbox select all/deselect all
const isAllSelected = computed(() => {
  if (assignEmployees.value.length === 0) return false;
  return assignEmployees.value.every(emp => selectedEmployeeIds.value.includes(emp.id));
});

const toggleSelectAll = () => {
  if (isAllSelected.value) {
    const pageIds = assignEmployees.value.map(emp => emp.id);
    selectedEmployeeIds.value = selectedEmployeeIds.value.filter(id => !pageIds.includes(id));
  } else {
    const pageIds = assignEmployees.value.map(emp => emp.id);
    selectedEmployeeIds.value = Array.from(new Set([...selectedEmployeeIds.value, ...pageIds]));
  }
};

const handlePageChange = (event: any) => {
  assignPage.value = event.page + 1;
  assignLimit.value = event.rows;
  fetchAssignEmployees();
};

let assignDebounceTimer: any = null;
const handleAssignSearch = () => {
  if (assignDebounceTimer) clearTimeout(assignDebounceTimer);
  assignDebounceTimer = setTimeout(() => {
    assignPage.value = 1;
    fetchAssignEmployees();
  }, 400);
};

// Payroll state
const payrollMonthValue = ref<Date>(new Date());
const payrollSearchQ = ref('');
const payrollData = ref<any[]>([]);
const loadingPayroll = ref(false);
const displayPayrollDialog = ref(false);
const submittingPayroll = ref(false);

const payrollCurrentPage = ref(0);
const payrollPerPage = ref(10);
const payrollTotal = ref(0);

const handlePayrollPageChange = (event: any) => {
  payrollCurrentPage.value = event.page || 0;
  payrollPerPage.value = event.rows || 10;
  fetchPayroll();
};

const onPayrollMonthChange = () => {
  payrollCurrentPage.value = 0;
  fetchPayroll();
};

const payrollForm = ref<any>({
  id: null,
  employee_id: 0,
  employee_code: '',
  full_name: '',
  year_month: '',
  base_salary: 0,
  standard_working_days: 22,
  actual_working_days: 0,
  overtime_hours: 0,
  overtime_salary: 0,
  overtime_hours_normal: 0,
  overtime_salary_normal: 0,
  overtime_hours_weekend: 0,
  overtime_salary_weekend: 0,
  overtime_hours_holiday: 0,
  overtime_salary_holiday: 0,
  allowance_attendance: 0,
  deduction_late: 0,
  deduction_leave: 0,
  deduction_union: 0,
  deduction_tax: 0,
  advance_payment: 0,
  net_salary: 0,
  status: 'PENDING',
  note: '',
  dependents_count: 0
});

const payrollMonthString = computed(() => {
  const date = payrollMonthValue.value;
  if (!date) return '';
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
});

const fetchPayroll = () => {
  loadingPayroll.value = true;
  const params = {
    year_month: payrollMonthString.value,
    search: payrollSearchQ.value || '',
    page: payrollCurrentPage.value + 1,
    per_page: payrollPerPage.value
  };
  GET_PAYROLL(
    params,
    (res: any) => {
      const dataObj = res.data?.data || {};
      payrollData.value = dataObj.data || res.data?.data || [];
      payrollTotal.value = dataObj.total || payrollData.value.length;
      loadingPayroll.value = false;
    },
    (err: any) => {
      console.error(err);
      loadingPayroll.value = false;
      showMessage("error", t('text.error'), "Không thể tải dữ liệu bảng lương");
    }
  );
};

let payrollSearchTimer: any = null;
const handlePayrollSearch = () => {
  if (payrollSearchTimer) clearTimeout(payrollSearchTimer);
  payrollSearchTimer = setTimeout(() => {
    payrollCurrentPage.value = 0;
    fetchPayroll();
  }, 400);
};

const formatVND = (value: any) => {
  if (value === null || value === undefined) return '0 ₫';
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};

const openPayrollDialog = (row: any) => {
  payrollForm.value = { ...row };
  updatePayrollFormCalculations();
  displayPayrollDialog.value = true;
};

const updatePayrollFormCalculations = () => {
  const baseSalary = Number(payrollForm.value.base_salary) || 0;
  const standardDays = Number(payrollForm.value.standard_working_days) || 22;
  const actualDays = Number(payrollForm.value.actual_working_days) || 0;
  const dependentsCount = Number(payrollForm.value.dependents_count) || 0;

  // Standard rates
  const dailyRate = standardDays > 0 ? (baseSalary / standardDays) : 0;
  const hourlyRate = dailyRate / 8;

  // Overtime calculations
  const otNormalHours = Number(payrollForm.value.overtime_hours_normal) || 0;
  const otWeekendHours = Number(payrollForm.value.overtime_hours_weekend) || 0;
  const otHolidayHours = Number(payrollForm.value.overtime_hours_holiday) || 0;

  const otNormalPay = otNormalHours * hourlyRate * 1.5;
  const otWeekendPay = otWeekendHours * hourlyRate * 2.0;
  const otHolidayPay = otHolidayHours * hourlyRate * 3.0;

  payrollForm.value.overtime_salary_normal = Math.round(otNormalPay * 100) / 100;
  payrollForm.value.overtime_salary_weekend = Math.round(otWeekendPay * 100) / 100;
  payrollForm.value.overtime_salary_holiday = Math.round(otHolidayPay * 100) / 100;

  const totalOtSalary = otNormalPay + otWeekendPay + otHolidayPay;
  payrollForm.value.overtime_salary = Math.round(totalOtSalary * 100) / 100;
  payrollForm.value.overtime_hours = otNormalHours + otWeekendHours + otHolidayHours;

  // Allowances and Deductions
  const allowanceAttendance = Number(payrollForm.value.allowance_attendance) || 0;
  const deductionLate = Number(payrollForm.value.deduction_late) || 0;
  const deductionLeave = Number(payrollForm.value.deduction_leave) || 0;
  const deductionUnion = Number(payrollForm.value.deduction_union) || 0;
  const advancePayment = Number(payrollForm.value.advance_payment) || 0;

  // Gross Taxable Income (matching backend service line 524)
  const grossTaxableIncome = baseSalary + totalOtSalary + allowanceAttendance - deductionLate - deductionLeave;

  // Progressive personal income tax (PIT)
  const selfDeduction = 11000000;
  const dependentDeduction = dependentsCount * 4400000;
  const taxableIncome = Math.max(0, grossTaxableIncome - selfDeduction - dependentDeduction);

  let defaultTax = 0;
  if (taxableIncome > 0) {
    if (taxableIncome <= 5000000) {
      defaultTax = taxableIncome * 0.05;
    } else if (taxableIncome <= 10000000) {
      defaultTax = taxableIncome * 0.10 - 250000;
    } else if (taxableIncome <= 18000000) {
      defaultTax = taxableIncome * 0.15 - 750000;
    } else if (taxableIncome <= 32000000) {
      defaultTax = taxableIncome * 0.20 - 1650000;
    } else if (taxableIncome <= 52000000) {
      defaultTax = taxableIncome * 0.25 - 3250000;
    } else if (taxableIncome <= 80000000) {
      defaultTax = taxableIncome * 0.30 - 5850000;
    } else {
      defaultTax = taxableIncome * 0.35 - 9850000;
    }
  }

  payrollForm.value.deduction_tax = Math.round(defaultTax * 100) / 100;

  // Net Salary: Gross - Union - Tax - Advance
  const netSalary = grossTaxableIncome - deductionUnion - defaultTax - advancePayment;
  payrollForm.value.net_salary = Math.round(Math.max(0, netSalary) * 100) / 100;
};

watch(
  () => [
    payrollForm.value.base_salary,
    payrollForm.value.standard_working_days,
    payrollForm.value.actual_working_days,
    payrollForm.value.overtime_hours_normal,
    payrollForm.value.overtime_hours_weekend,
    payrollForm.value.overtime_hours_holiday,
    payrollForm.value.allowance_attendance,
    payrollForm.value.deduction_late,
    payrollForm.value.deduction_leave,
    payrollForm.value.deduction_union,
    payrollForm.value.advance_payment,
    payrollForm.value.dependents_count
  ],
  () => {
    updatePayrollFormCalculations();
  }
);

const savePayroll = () => {
  submittingPayroll.value = true;
  SAVE_PAYROLL(
    payrollForm.value,
    (res: any) => {
      submittingPayroll.value = false;
      displayPayrollDialog.value = false;
      showMessage("success", t('text.success'), "Cập nhật bảng lương thành công");
      fetchPayroll();
    },
    (err: any) => {
      console.error(err);
      submittingPayroll.value = false;
      showMessage("error", t('text.error'), "Lỗi lưu thông tin bảng lương");
    }
  );
};

const exportPayrollExcel = () => {
  const params = {
    year_month: payrollMonthString.value,
    q: payrollSearchQ.value || ''
  };
  EXPORT_PAYROLL_EXCEL(params)
    .then((res: any) => {
      const blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Bang_Luong_${payrollMonthString.value}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    })
    .catch((err: any) => {
      console.error(err);
      showMessage("error", t('text.error'), "Không thể xuất file Excel");
    });
};

const exportPayrollPdf = () => {
  const params = {
    year_month: payrollMonthString.value,
    q: payrollSearchQ.value || ''
  };
  EXPORT_PAYROLL_PDF(params)
    .then((res: any) => {
      const blob = new Blob([res.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Bang_Luong_${payrollMonthString.value}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    })
    .catch((err: any) => {
      console.error(err);
      showMessage("error", t('text.error'), "Không thể xuất file PDF");
    });
};

watch(activeTab, (newTab) => {
  if (newTab === 'shift-assignments') {
    fetchWorkingConfigs();
    fetchDepartments();
    fetchAssignEmployees();
  } else if (newTab === 'payroll') {
    fetchPayroll();
  } else if (newTab === 'statistics') {
    fetchStatistics();
  }
});

watch(statsMonthValue, () => {
  fetchStatistics();
});

onMounted(() => {
  fetchStatistics();
  fetchWorkingConfigs();
  fetchDepartments();
  fetchAssignEmployees();
  if (activeTab.value === 'payroll') {
    fetchPayroll();
  }
});
</script>

<style scoped>
</style>
