<template>
  <div class="space-y-4 animate-in fade-in duration-300">
    <!-- Control Bar Card: Date Selection, Employee Search & Filters -->
    <div class="bg-white dark:bg-surface-900 p-5 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm dark:shadow-none space-y-4">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-surface-200 dark:border-surface-700 pb-4">
        <div>
          <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 tracking-tight">{{ $t('timesheet.assignShiftsTitle') }}</h3>
          <p class="text-xs text-surface-400 font-semibold mt-1">{{ $t('timesheet.assignShiftsDesc') }}</p>
        </div>
        
        <!-- Filters -->
        <div class="flex flex-wrap items-center gap-4">
          <!-- Month Selector -->
          <div class="flex flex-col">
            <span class="text-[10px] font-black uppercase tracking-widest text-surface-400 mb-1">{{ $t('timesheet.monthAssign') }}</span>
            <DatePicker
              v-model="currentYearMonthDate"
              view="month"
              dateFormat="mm/yy"
              :placeholder="$t('timesheet.selectMonth')"
              class="w-44 !rounded-xl border border-surface-200 dark:border-surface-700"
              @date-select="onCalendarMonthChange"
            />
          </div>

          <!-- Department Filter -->
          <div class="flex flex-col">
            <span class="text-[10px] font-black uppercase tracking-widest text-surface-400 mb-1">{{ $t('timesheet.departmentHeader') }}</span>
            <Select
              v-model="selectedDepartmentId"
              :options="[{ id: null, name: $t('timesheet.allDepartments') }, ...departmentOptions]"
              optionLabel="name"
              optionValue="id"
              :placeholder="$t('timesheet.departmentHeader')"
              class="w-52 !rounded-xl border border-surface-200 dark:border-surface-700"
              @change="onCalendarFiltersChange"
            />
          </div>
          
          <!-- Search box -->
          <div class="flex flex-col">
            <span class="text-[10px] font-black uppercase tracking-widest text-surface-400 mb-1">{{ $t('timesheet.searchEmployee') }}</span>
            <div class="relative w-64">
              <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-surface-400"></i>
              <input
                type="text"
                v-model="assignSearchQuery"
                :placeholder="$t('timesheet.searchEmployeePlaceholder')"
                class="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-surface-200 dark:border-surface-700 bg-transparent text-surface-900 dark:text-surface-100 focus:ring-1 focus:ring-primary outline-none"
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
            <span class="font-bold text-surface-900 dark:text-surface-0 block text-sm">{{ $t('timesheet.bulkActions') }}</span>
            <span class="text-xs text-surface-500 font-medium">{{ $t('timesheet.selectedEmployees', { count: selectedEmployeeIds.length }) }}</span>
          </div>
        </div>
        
        <div class="flex items-center gap-3">
          <Button
            :label="$t('timesheet.bulkAssignBtn')"
            icon="pi pi-check-circle"
            severity="primary"
            class="!rounded-xl !px-5 !font-bold"
            :disabled="selectedEmployeeIds.length === 0"
            @click="openBulkAssignDialog"
          />
          <Button
            :label="$t('timesheet.bulkResetBtn')"
            icon="pi pi-refresh"
            severity="secondary"
            class="!rounded-xl !px-5 !font-bold"
            :disabled="selectedEmployeeIds.length === 0"
            @click="openBulkResetDialog"
          />
        </div>
      </div>

      <!-- Legend & Calendar Table Container -->
      <div class="space-y-4">
        <!-- Legend Indicator row -->
        <div class="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-surface-200 dark:border-surface-700 pb-3">
          <span class="text-[10px] font-black uppercase tracking-widest text-surface-400">{{ $t('timesheet.legendTitle') }}</span>
          <div class="flex items-center gap-2 text-xs">
            <span class="w-4 h-4 rounded bg-blue-500/10 border border-blue-500/20 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"></span>
            <span class="text-surface-600 dark:text-surface-400 font-medium">{{ $t('timesheet.assignedShiftsList') }}</span>
          </div>
          <div class="flex items-center gap-2 text-xs">
            <span class="text-[9px] font-black bg-emerald-500/25 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.05)]">AL</span>
            <span class="text-surface-600 dark:text-surface-400 font-medium">{{ $t('timesheet.legendAL') }}</span>
          </div>
          <div class="flex items-center gap-2 text-xs">
            <span class="text-[9px] font-black bg-amber-500/25 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.05)]">SL</span>
            <span class="text-surface-600 dark:text-surface-400 font-medium">{{ $t('timesheet.legendSL') }}</span>
          </div>
          <div class="flex items-center gap-2 text-xs">
            <span class="text-[8px] font-black bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/10 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">+2h / +OT</span>
            <span class="text-surface-600 dark:text-surface-400 font-medium">{{ $t('timesheet.legendOT') }}</span>
          </div>
          <div class="flex items-center gap-2 text-xs">
            <span class="text-[8px] font-black bg-rose-500/5 text-rose-500/80 dark:bg-rose-500/15 dark:text-rose-450 px-1.5 py-0.5 rounded border border-rose-500/10">xOT</span>
            <span class="text-surface-600 dark:text-surface-400 font-medium">{{ $t('timesheet.legendNoOT') }}</span>
          </div>
          <div class="flex items-center gap-2 text-xs">
            <div class="w-5 h-5 bg-surface-100 dark:bg-surface-800/40 border border-surface-200 dark:border-surface-700 rounded flex items-center justify-center text-[10px] text-surface-400 font-bold">-</div>
            <span class="text-surface-600 dark:text-surface-400 font-medium">{{ $t('timesheet.legendOff') }}</span>
          </div>
        </div>

        <div class="overflow-auto max-h-[58vh] max-w-full bg-white dark:bg-surface-950 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm0 dark:shadow-none transition-all duration-300">
          <table class="w-full border-collapse text-left text-xs min-w-[1200px]">
            <thead class="bg-surface-50 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-700 sticky top-0 z-30">
              <tr>
                <th class="py-4 px-2.5 w-12 text-center sticky left-0 top-0 bg-surface-50 dark:bg-surface-900 z-40 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] border-b border-surface-200 dark:border-surface-700">
                  <input
                    type="checkbox"
                    :checked="isAllSelected"
                    @change="toggleSelectAll"
                    class="rounded border-surface-300 text-primary focus:ring-primary w-4 h-4"
                  />
                </th>
                <th class="py-4 px-2.5 font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 w-40 sticky left-12 top-0 bg-surface-50 dark:bg-surface-900 z-40 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] border-b border-surface-200 dark:border-surface-700">{{ $t('timesheet.employeeHeader') }}</th>
                <th class="py-4 pl-3.5 font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 w-40 border-b border-surface-200 dark:border-surface-700">{{ $t('timesheet.departmentHeader') }}</th>
                <!-- Days of Month header -->
                <th
                  v-for="d in daysInMonth"
                  :key="d.day"
                  class="py-4 px-0.5 text-center min-w-[42px] w-[42px] border-l border-b border-surface-200 dark:border-surface-700 font-mono text-xs"
                  :class="[
                    d.dayOfWeek === 0 ? 'text-red-500 bg-red-500/5 font-black border-b border-surface-200 dark:border-surface-700' : d.dayOfWeek === 6 ? 'text-blue-500 bg-blue-500/5 font-black border-b border-surface-200 dark:border-surface-700' : 'text-surface-700 dark:text-surface-300 border-b border-surface-200 dark:border-surface-700'
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
                  <i class="pi pi-spin pi-spinner text-2xl mr-2 text-primary"></i> {{ $t('timesheet.loadingAssignData') }}
                </td>
              </tr>
              <tr v-else-if="assignEmployees.length === 0" class="text-center">
                <td :colspan="daysInMonth.length + 3" class="py-12 text-surface-400 font-medium">
                  {{ $t('timesheet.noEmployeesFound') }}
                </td>
              </tr>
              <tr
                v-else
                v-for="emp in assignEmployees"
                :key="emp.id"
                class="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-200 border-b border-surface-200 dark:border-surface-700 cursor-pointer"
                @click="openSetSingleShiftDialog(emp)"
              >
                <!-- Checkbox -->
                <td class="py-4 px-2.5 w-12 text-center sticky left-0 bg-white dark:bg-surface-950 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] border-b border-surface-200 dark:border-surface-700" @click.stop>
                  <input
                    type="checkbox"
                    :value="emp.id"
                    v-model="selectedEmployeeIds"
                    class="rounded border-surface-300 text-primary focus:ring-primary w-4 h-4"
                  />
                </td>

                <!-- Name and Code -->
                <td class="py-4 px-2.5 w-40 sticky left-12 bg-white dark:bg-surface-950 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] min-w-[176px] max-w-[176px] border-b border-surface-200 dark:border-surface-700">
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
                <td class="py-4 px-3.5 w-40 max-w-[176px] truncate border-b border-surface-200 dark:border-surface-700">
                  <div class="flex flex-col">
                    <span class="text-surface-800 dark:text-surface-200 font-semibold text-xs truncate">
                      {{ emp.department?.name || 'N/A' }}
                    </span>
                    <span class="text-[10px] text-surface-450 dark:text-surface-400 italic truncate">
                      {{ emp.job_title?.name || $t('timesheet.employeeHeader') }}
                    </span>
                  </div>
                </td>

                <!-- Calendar Days Cells -->
                <td
                  v-for="d in daysInMonth"
                  :key="d.day"
                  class="p-0.5 text-center border-l border-surface-200 dark:border-surface-700 font-mono text-[9px] relative transition-colors min-w-[42px] w-[42px]"
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
          class="border-t border-surface-200 dark:border-surface-700 pt-4"
        />
      </div>
    </div>

    <!-- Popup Thiết lập ca cho từng nhân viên -->
    <Dialog
      v-model:visible="displaySetShiftDialog"
      modal
      :header="$t('timesheet.assignShift')"
      :style="{ width: '32rem' }"
      class="!rounded-[2rem] overflow-hidden"
    >
      <div class="space-y-6 p-2">
        <!-- Employee Display -->
        <div class="bg-surface-50 dark:bg-surface-950/20 p-4 rounded-xl border border-surface-200 dark:border-surface-700 flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            {{ selectedEmployeeForShift?.full_name?.charAt(0) }}
          </div>
          <div>
            <h4 class="font-bold text-surface-900 dark:text-surface-0">{{ selectedEmployeeForShift?.full_name }}</h4>
            <p class="text-xs text-surface-450 font-mono">{{ $t('employee.code') }}: {{ selectedEmployeeForShift?.code }} | {{ selectedEmployeeForShift?.department?.name }}</p>
          </div>
        </div>

        <!-- Shift Config Dropdown -->
        <div class="flex flex-col gap-1.5">
          <label class="text-xs font-bold text-surface-600 dark:text-surface-300">{{ $t('timesheet.tabShifts') }} / {{ $t('timesheet.overtime') }}</label>
          <Select
            v-model="singleShiftConfigId"
            :options="workingConfigs"
            optionLabel="name"
            optionValue="id"
            :placeholder="$t('timesheet.selectShift')"
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
          />
          <!-- Shift details preview -->
          <div v-if="selectedShiftDetail" class="text-[11px] text-surface-500 bg-surface-50 dark:bg-surface-950/10 p-2.5 rounded-lg mt-1 space-y-1">
            <div class="flex justify-between">
              <span>{{ $t('text.time') }}:</span>
              <span class="font-bold">{{ selectedShiftDetail.start_time?.substring(0, 5) }} ~ {{ selectedShiftDetail.end_time?.substring(0, 5) }}</span>
            </div>
            <div class="flex justify-between">
              <span>{{ $t('timesheet.overtime') }}:</span>
              <span class="font-bold text-emerald-600 dark:text-emerald-400" v-if="selectedShiftDetail.allow_overtime">{{ $t('timesheet.overtimeAllowed') }} (Max {{ selectedShiftDetail.max_overtime_hours }}h)</span>
              <span class="font-bold text-rose-500" v-else>{{ $t('timesheet.overtimeNotAllowed') }}</span>
            </div>
          </div>
        </div>

        <!-- Date Range Selection -->
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold text-surface-600 dark:text-surface-300">{{ $t('text.fromDate') }}</label>
            <DatePicker
              v-model="singleStartDate"
              dateFormat="dd/mm/yy"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold text-surface-600 dark:text-surface-300">{{ $t('text.toDate') }}</label>
            <DatePicker
              v-model="singleEndDate"
              dateFormat="dd/mm/yy"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
            />
          </div>
        </div>

        <!-- Weekdays Selection -->
        <div class="flex flex-col gap-1.5">
          <label class="text-xs font-bold text-surface-600 dark:text-surface-300">{{ $t('timesheet.applyToWeekdays') }}</label>
          <div class="flex flex-wrap items-center gap-3 bg-surface-50 dark:bg-surface-950/20 p-3.5 rounded-xl border border-surface-200/40 dark:border-surface-700">
            <label v-for="w in weekdaysOptions" :key="w.value" class="flex items-center gap-1.5 text-xs font-semibold text-surface-700 dark:text-surface-300 cursor-pointer">
              <input type="checkbox" v-model="singleWeekdays" :value="w.value" class="rounded border-surface-300 text-primary focus:ring-primary w-4 h-4" />
              <span>{{ w.label }}</span>
            </label>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between w-full pt-4 border-t border-surface-200 dark:border-surface-700">
        <Button
          :label="$t('timesheet.resetDefault')"
          icon="pi pi-refresh"
          severity="danger"
          variant="text"
          class="!rounded-xl !text-xs !font-bold"
          :loading="resettingSingleShift"
          @click="resetSingleShift"
        />
        <div class="flex items-center gap-3">
          <Button :label="$t('btn.cancel')" class="p-button-text !rounded-xl" @click="displaySetShiftDialog = false" />
          <Button :label="$t('btn.confirm')" class="!rounded-xl !px-5" :loading="submittingSingleShift" @click="saveSingleShift" />
        </div>
      </div>
    </Dialog>

    <!-- Bulk Assign Shifts Dialog -->
    <Dialog
      v-model:visible="displayBulkAssignDialog"
      modal
      :header="$t('timesheet.dialogBulkAssignHeader')"
      class="w-full max-w-md !rounded-xl"
      :breakpoints="{ '960px': '75vw', '641px': '90vw' }"
    >
      <div class="flex flex-col gap-5 pt-3">
        <div class="bg-primary/5 p-3.5 rounded-xl border border-primary/10 flex items-start gap-2.5">
          <i class="pi pi-info-circle text-primary text-base mt-0.5"></i>
          <span class="text-xs font-semibold text-primary">{{ $t('timesheet.dialogBulkAssignWarningPrefix') }} <strong>{{ selectedEmployeeIds.length }}</strong> {{ $t('timesheet.dialogBulkAssignWarningSuffix') }}</span>
        </div>

        <!-- Select Shift -->
        <div class="flex flex-col gap-1.5">
          <label class="text-xs font-bold text-surface-600 dark:text-surface-300">{{ $t('timesheet.tabShifts') }}</label>
          <Select
            v-model="bulkWorkingHourConfigId"
            :options="workingConfigs"
            optionLabel="name"
            optionValue="id"
            :placeholder="$t('timesheet.selectShift')"
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
          />
        </div>

        <!-- Date Range Selection -->
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold text-surface-600 dark:text-surface-300">{{ $t('text.fromDate') }}</label>
            <DatePicker
              v-model="bulkStartDate"
              dateFormat="dd/mm/yy"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold text-surface-600 dark:text-surface-300">{{ $t('text.toDate') }}</label>
            <DatePicker
              v-model="bulkEndDate"
              dateFormat="dd/mm/yy"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
            />
          </div>
        </div>

        <!-- Weekdays Selection -->
        <div class="flex flex-col gap-1.5">
          <label class="text-xs font-bold text-surface-600 dark:text-surface-300">{{ $t('timesheet.applyToWeekdays') }}</label>
          <div class="flex flex-wrap items-center gap-3 bg-surface-50 dark:bg-surface-950/20 p-3.5 rounded-xl border border-surface-200/40 dark:border-surface-700">
            <label v-for="w in weekdaysOptions" :key="w.value" class="flex items-center gap-1.5 text-xs font-semibold text-surface-700 dark:text-surface-300 cursor-pointer">
              <input type="checkbox" v-model="bulkWeekdays" :value="w.value" class="rounded border-surface-300 text-primary focus:ring-primary w-4 h-4" />
              <span>{{ w.label }}</span>
            </label>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end gap-3 pt-4 border-t border-surface-200 dark:border-surface-700">
        <Button :label="$t('btn.cancel')" class="p-button-text !rounded-xl" @click="displayBulkAssignDialog = false" />
        <Button :label="$t('btn.confirm')" class="!rounded-xl !px-5" :loading="submittingAssignment" @click="handleBulkAssignShifts" />
      </div>
    </Dialog>

    <!-- Bulk Reset Shifts Dialog -->
    <Dialog
      v-model:visible="displayBulkResetDialog"
      modal
      :header="$t('timesheet.dialogBulkResetHeader')"
      class="w-full max-w-md !rounded-xl"
      :breakpoints="{ '960px': '75vw', '641px': '90vw' }"
    >
      <div class="flex flex-col gap-5 pt-3">
        <div class="bg-rose-500/5 p-3.5 rounded-xl border border-rose-500/10 flex items-start gap-2.5">
          <i class="pi pi-exclamation-triangle text-rose-500 text-base mt-0.5"></i>
          <span class="text-xs font-semibold text-rose-600 dark:text-rose-400">{{ $t('timesheet.dialogBulkResetWarningPrefix') }} <strong>{{ selectedEmployeeIds.length }}</strong> {{ $t('timesheet.dialogBulkResetWarningSuffix') }}</span>
        </div>

        <!-- Date Range Selection -->
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold text-surface-600 dark:text-surface-300">{{ $t('text.fromDate') }}</label>
            <DatePicker
              v-model="bulkStartDate"
              dateFormat="dd/mm/yy"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-bold text-surface-600 dark:text-surface-300">{{ $t('text.toDate') }}</label>
            <DatePicker
              v-model="bulkEndDate"
              dateFormat="dd/mm/yy"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
            />
          </div>
        </div>

        <!-- Weekdays Selection -->
        <div class="flex flex-col gap-1.5">
          <label class="text-xs font-bold text-surface-600 dark:text-surface-300">{{ $t('timesheet.applyToWeekdays') }}</label>
          <div class="flex flex-wrap items-center gap-3 bg-surface-50 dark:bg-surface-950/20 p-3.5 rounded-xl border border-surface-200/40 dark:border-surface-700">
            <label v-for="w in weekdaysOptions" :key="w.value" class="flex items-center gap-1.5 text-xs font-semibold text-surface-700 dark:text-surface-300 cursor-pointer">
              <input type="checkbox" v-model="bulkWeekdays" :value="w.value" class="rounded border-surface-300 text-primary focus:ring-primary w-4 h-4" />
              <span>{{ w.label }}</span>
            </label>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end gap-3 pt-4 border-t border-surface-200 dark:border-surface-700">
        <Button :label="$t('btn.cancel')" class="p-button-text !rounded-xl" @click="displayBulkResetDialog = false" />
        <Button :label="$t('btn.confirm')" class="!rounded-xl !px-5" :loading="submittingReset" @click="handleBulkResetShifts" />
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDepartment } from '~/composables/master/department';
import { useApiStore } from "~/stores/api";
import { showMessage } from "~/utils/global";
import {
  GET_WORKING_HOUR_CONFIGS,
  GET_EMPLOYEE_SHIFTS_CALENDAR,
  STORE_EMPLOYEE_SHIFT,
  RESET_EMPLOYEE_SHIFTS
} from '~/apis/timesheet';

const { t } = useI18n();
const apiStore = useApiStore();

const userInfo = computed(() => {
  return apiStore.userInfo || JSON.parse(localStorage.getItem("userInfo") || "{}");
});

// Working Hour Configs State (for selects)
const workingConfigs = ref<any[]>([]);

const fetchWorkingConfigs = () => {
  GET_WORKING_HOUR_CONFIGS(
    (res: any) => {
      workingConfigs.value = res.data?.data || [];
    },
    (err: any) => {
      console.error(err);
    }
  );
};

// Paginated employee shifts list calendar state
const currentYearMonthDate = ref<Date>(new Date());
const assignSearchQuery = ref('');
const assignPage = ref(1);
const assignLimit = ref(30);
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

const weekdaysOptions = computed(() => [
  { label: t('timesheet.w1'), value: 1 },
  { label: t('timesheet.w2'), value: 2 },
  { label: t('timesheet.w3'), value: 3 },
  { label: t('timesheet.w4'), value: 4 },
  { label: t('timesheet.w5'), value: 5 },
  { label: t('timesheet.w6'), value: 6 },
  { label: t('timesheet.w0'), value: 0 }
]);
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
      assignTotal.value = dataObj.meta?.total || dataObj.total || emps.length;
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
  return t(`timesheet.w${dow}`);
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

const getDefaultConfig = () => {
  return workingConfigs.value.find((c: any) => c.is_default) || workingConfigs.value[0];
};

const getDayCellDetails = (employee: any, dateStr: string, dow: number) => {
  const leave = getDayLeaveInfo(employee, dateStr);
  let leaveText = '';
  if (leave) {
    const typeAbbr = leave.leave_type === 'ANNUAL' ? 'AL' : leave.leave_type === 'SICK' ? 'SL' : 'PL';
    const statusAbbr = leave.status === 'PENDING' ? ' (CD)' : '';
    leaveText = `${t('timesheet.leave')} ${typeAbbr}${statusAbbr}`;
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
      overtimeText = config.max_overtime_hours ? `OT max ${config.max_overtime_hours}h` : t('timesheet.legendOT');
    } else {
      overtimeText = t('timesheet.legendNoOT');
    }
  } else {
    if (dow === 0 || dow === 6) {
      timeRange = t('timesheet.legendOff');
      overtimeText = '';
      shiftName = t('timesheet.legendOff');
    } else {
      const defaultConfig = getDefaultConfig();
      if (defaultConfig) {
        shiftName = defaultConfig.name;
        const start = defaultConfig.start_time ? defaultConfig.start_time.substring(0, 5) : '';
        const end = defaultConfig.end_time ? defaultConfig.end_time.substring(0, 5) : '';
        timeRange = `${start}-${end}`;
        if (defaultConfig.allow_overtime) {
          overtimeText = defaultConfig.max_overtime_hours ? `OT max ${defaultConfig.max_overtime_hours}h` : t('timesheet.legendOT');
        } else {
          overtimeText = t('timesheet.legendNoOT');
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
  if (details.timeRange === t('timesheet.legendOff')) {
    return 'bg-surface-100 dark:bg-surface-800/40 text-surface-400 dark:text-surface-500 border-l border-surface-200 dark:border-surface-700';
  }

  if (details.isLeave) {
    if (details.isApprovedLeave) {
      return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-l border-surface-200 dark:border-surface-700';
    } else {
      return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-l border-surface-200 dark:border-surface-700';
    }
  }

  if (details.hasShift) {
    return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-l border-surface-200 dark:border-surface-700';
  }

  if (dow === 0) return 'bg-red-500/5 border-l border-surface-200 dark:border-surface-700';
  if (dow === 6) return 'bg-blue-500/5 border-l border-surface-200 dark:border-surface-700';

  return 'border-l border-surface-200 dark:border-surface-700';
};

const getCellTooltip = (employee: any, dateStr: string, dow: number): string => {
  const details = getDayCellDetails(employee, dateStr, dow);
  let tooltip = `${t('timesheet.tooltipDate')}: ${dateStr}\n${t('timesheet.tooltipShift')}: ${details.shiftName}`;
  if (details.timeRange && details.timeRange !== t('timesheet.legendOff')) {
    tooltip += ` (${details.timeRange})`;
  }
  if (details.leaveText) {
    tooltip += `\n${t('timesheet.tooltipLeave')}: ${details.leaveText}`;
  }
  if (details.overtimeText) {
    tooltip += `\n${t('timesheet.tooltipOvertime')}: ${details.overtimeText}`;
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
    showMessage("error", t("text.error"), t('timesheet.msgSelectShift'));
    return;
  }
  if (!singleStartDate.value || !singleEndDate.value) {
    showMessage("error", t("text.error"), t('timesheet.msgSelectDateRange'));
    return;
  }
  if (singleWeekdays.value.length === 0) {
    showMessage("error", t("text.error"), t('timesheet.msgSelectWeekday'));
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
      showMessage("success", t("text.success"), t('timesheet.msgSetShiftSuccess'));
      displaySetShiftDialog.value = false;
      submittingSingleShift.value = false;
      fetchAssignEmployees();
    },
    (err: any) => {
      console.error(err);
      submittingSingleShift.value = false;
      showMessage("error", t("text.error"), t("text.errorSystem"));
    }
  );
};

const resetSingleShift = () => {
  if (!singleStartDate.value || !singleEndDate.value) {
    showMessage("error", t("text.error"), t('timesheet.msgSelectDateRange'));
    return;
  }
  if (singleWeekdays.value.length === 0) {
    showMessage("error", t("text.error"), t('timesheet.msgSelectWeekday'));
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
      showMessage("success", t("text.success"), t('timesheet.msgResetDefaultSuccess'));
      displaySetShiftDialog.value = false;
      resettingSingleShift.value = false;
      fetchAssignEmployees();
    },
    (err: any) => {
      console.error(err);
      resettingSingleShift.value = false;
      showMessage("error", t("text.error"), t("text.errorSystem"));
    }
  );
};

const openBulkAssignDialog = () => {
  if (selectedEmployeeIds.value.length === 0) {
    showMessage("error", t("text.error"), t('timesheet.msgSelectEmployee'));
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
    showMessage("error", t("text.error"), t('timesheet.msgSelectEmployee'));
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
    showMessage("error", t("text.error"), t('timesheet.msgSelectEmployee'));
    return;
  }
  if (!bulkWorkingHourConfigId.value) {
    showMessage("error", t("text.error"), t('timesheet.msgSelectShift'));
    return;
  }
  if (!bulkStartDate.value || !bulkEndDate.value) {
    showMessage("error", t("text.error"), t('timesheet.msgSelectDateRange'));
    return;
  }
  if (bulkWeekdays.value.length === 0) {
    showMessage("error", t("text.error"), t('timesheet.msgSelectWeekdayAssign'));
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
      showMessage("success", t("text.success"), t('timesheet.bulkAssignSuccess'));
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
      showMessage("error", t("text.error"), t("text.errorSystem"));
    }
  );
};

const handleBulkResetShifts = () => {
  if (selectedEmployeeIds.value.length === 0) {
    showMessage("error", t("text.error"), t('timesheet.msgSelectEmployee'));
    return;
  }
  if (!bulkStartDate.value || !bulkEndDate.value) {
    showMessage("error", t("text.error"), t('timesheet.msgSelectDateRange'));
    return;
  }
  if (bulkWeekdays.value.length === 0) {
    showMessage("error", t("text.error"), t('timesheet.msgSelectWeekdayReset'));
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
      showMessage("success", t("text.success"), t('timesheet.bulkResetSuccess'));
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
      showMessage("error", t("text.error"), t("text.errorSystem"));
    }
  );
};

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

onMounted(() => {
  fetchWorkingConfigs();
  fetchDepartments();
  fetchAssignEmployees();
});
</script>
