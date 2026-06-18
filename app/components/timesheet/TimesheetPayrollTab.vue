<template>
  <div class="bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm dark:shadow-none space-y-6">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-surface-200 dark:border-surface-700 pb-6">
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
              class="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-surface-200 dark:border-surface-700 bg-transparent text-surface-900 dark:text-surface-100 focus:ring-1 focus:ring-primary outline-none"
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
            class="w-40 !rounded-xl border border-surface-200 dark:border-surface-700"
            @date-select="onPayrollMonthChange"
          />
        </div>

        <!-- Excel & PDF Export -->
        <div class="flex items-center gap-2 mt-4">
          <Button
            :label="$t('btn.exportExcel') || 'Excel'"
            icon="pi pi-file-excel"
            severity="success"
            class="!rounded-xl !font-bold"
            @click="exportPayrollExcel"
          />
          <Button
            :label="$t('btn.exportPdf') || 'PDF'"
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
    <div v-else class="overflow-auto max-h-[58vh] bg-white dark:bg-surface-950 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm0 dark:shadow-none transition-all duration-300">
      <table class="w-full text-xs border-collapse">
        <thead class="bg-surface-50 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-700 sticky top-0 z-10">
          <tr>
            <th class="px-4 py-4 text-left font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap">{{ $t('common.index') || 'STT' }}</th>
            <th class="px-4 py-4 text-left font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap w-64 min-w-[240px]">{{ $t('timesheet.staff') }}</th>
            <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap">{{ $t('timesheet.baseSalary') }}</th>
            <th class="px-4 py-4 text-center font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap">{{ $t('timesheet.workingDaysActualStandard') }}</th>
            <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap">{{ $t('timesheet.overtimeSalary') }}</th>
            <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap text-emerald-600 dark:text-emerald-400">{{ $t('timesheet.attendanceAllowanceLabel') }}</th>
            <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap text-rose-500">{{ $t('timesheet.deductionLateLabel') }}</th>
            <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400 whitespace-nowrap text-rose-500">{{ $t('timesheet.deductionLeaveLabel') }}</th>
            <th class="px-4 py-4 text-right font-bold text-xs uppercase tracking-widest text-rose-500 whitespace-nowrap">{{ $t('timesheet.insuranceLabel') }}</th>
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
            class="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-200 border-b border-surface-200 dark:border-surface-700"
          >
            <td class="px-4 py-4 font-mono text-surface-450 dark:text-surface-400 border-b border-surface-200 dark:border-surface-700">{{ String(idx + 1).padStart(2,'0') }}</td>
            <td class="px-4 py-4 border-b border-surface-200 dark:border-surface-700 w-64 min-w-[240px]">
              <div class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight">{{ row.full_name }}</div>
              <div class="text-xs font-black text-surface-450 dark:text-surface-400 font-mono uppercase mt-0.5">{{ row.employee_code }}</div>
              <div v-if="row.department_name" class="text-xs font-bold text-surface-500 dark:text-surface-400 mt-1">
                {{ row.department_name }} <span class="text-surface-300 dark:text-surface-600 font-normal">|</span> {{ row.job_title_name }}
              </div>
            </td>
            <td class="px-4 py-4 text-right font-mono font-bold border-b border-surface-200 dark:border-surface-700 whitespace-nowrap text-surface-800 dark:text-surface-200">{{ formatVND(row.base_salary) }}</td>
            <td class="px-4 py-4 text-center font-mono font-bold border-b border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-300">{{ row.actual_working_days }}/{{ row.standard_working_days }}</td>
            <td class="px-4 py-4 text-right font-mono border-b border-surface-200 dark:border-surface-700 whitespace-nowrap text-surface-700 dark:text-surface-300">
              <div class="space-y-0.5 text-[9px] text-surface-400 font-semibold">
                <div>{{ $t('timesheet.otNormal') }} {{ formatVND(row.overtime_salary_normal) }}</div>
                <div>{{ $t('timesheet.otWeekend') }} {{ formatVND(row.overtime_salary_weekend) }}</div>
                <div>{{ $t('timesheet.otHoliday') }} {{ formatVND(row.overtime_salary_holiday) }}</div>
              </div>
              <div class="font-bold text-surface-800 dark:text-surface-200 mt-1 pt-1 border-t border-surface-200/50 dark:border-surface-700/50 text-[10px]">
                {{ $t('timesheet.total') }} {{ formatVND(row.overtime_salary) }}
              </div>
            </td>
            <td class="px-4 py-4 text-right font-mono border-b border-surface-200 dark:border-surface-700 whitespace-nowrap text-emerald-600 dark:text-emerald-400">{{ formatVND(row.allowance_attendance) }}</td>
            <td class="px-4 py-4 text-right font-mono border-b border-surface-200 dark:border-surface-700 whitespace-nowrap text-rose-500">-{{ formatVND(row.deduction_late) }}</td>
            <td class="px-4 py-4 text-right font-mono border-b border-surface-200 dark:border-surface-700 whitespace-nowrap text-rose-500">-{{ formatVND(row.deduction_leave) }}</td>
            <td class="px-4 py-4 text-right font-mono border-b border-surface-200 dark:border-surface-700 whitespace-nowrap text-rose-500">
              <div class="text-rose-500 font-bold">-{{ formatVND(getInsuranceAmount(row)) }}</div>
              <div class="space-y-0.5 text-[9px] text-surface-400 font-semibold text-right">
                <div>{{ $t('timesheet.socialInsurance') }} -{{ formatVND(getGrossSalaryAmount(row) * 0.08) }}</div>
                <div>{{ $t('timesheet.healthInsurance') }} -{{ formatVND(getGrossSalaryAmount(row) * 0.015) }}</div>
                <div>{{ $t('timesheet.unemploymentInsurance') }} -{{ formatVND(getGrossSalaryAmount(row) * 0.01) }}</div>
              </div>
            </td>
            <td class="px-4 py-4 text-right font-mono border-b border-surface-200 dark:border-surface-700 whitespace-nowrap text-rose-500">-{{ formatVND(row.deduction_union) }}</td>
            <td class="px-4 py-4 text-right font-mono border-b border-surface-200 dark:border-surface-700 whitespace-nowrap text-primary font-bold">-{{ formatVND(row.deduction_tax) }}</td>
            <td class="px-4 py-4 text-right font-mono border-b border-surface-200 dark:border-surface-700 whitespace-nowrap text-amber-600">-{{ formatVND(row.advance_payment) }}</td>
            <td class="px-4 py-4 text-right font-mono font-black border-b border-surface-200 dark:border-surface-700 whitespace-nowrap text-emerald-600 dark:text-emerald-400 text-sm">{{ formatVND(row.net_salary) }}</td>
            <td class="px-4 py-4 text-center border-b border-surface-200 dark:border-surface-700">
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
      class="border-t border-surface-200 dark:border-surface-700 pt-4"
    />

    <!-- Dialog Chi tiết/Cập nhật Bảng lương -->
    <Dialog
      v-model:visible="displayPayrollDialog"
      modal
      :header="$t('timesheet.payrollDetailsFor', { name: payrollForm.full_name, code: payrollForm.employee_code })"
      :style="{ width: '56rem' }"
      class="!rounded-[2rem] overflow-hidden"
    >
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 p-2">
        <!-- Left panel: Inputs -->
        <div class="lg:col-span-7 space-y-4">
          <h4 class="font-bold text-surface-900 dark:text-surface-0 border-b border-surface-200 dark:border-surface-700 pb-2">{{ $t('timesheet.payrollAdjustmentInfo') }}</h4>
          
          <div class="grid grid-cols-2 gap-4">
            <AppInputField :label="$t('timesheet.baseSalary')" :isRequired="true">
              <InputNumber
                v-model="payrollForm.base_salary"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>
            
            <div class="grid grid-cols-2 gap-2">
              <AppInputField :label="$t('timesheet.standardWorkingDays')" :isRequired="true">
                <InputNumber
                  v-model="payrollForm.standard_working_days"
                  class="w-full"
                  inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
                  :min="0"
                  :max="31"
                  :maxFractionDigits="1"
                  @input="updatePayrollFormCalculations"
                />
              </AppInputField>
              <AppInputField :label="$t('timesheet.actualWorkingDays')" :isRequired="true">
                <InputNumber
                  v-model="payrollForm.actual_working_days"
                  class="w-full"
                  inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
                  :min="0"
                  :max="31"
                  :maxFractionDigits="1"
                  @input="updatePayrollFormCalculations"
                />
              </AppInputField>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3">
            <AppInputField :label="$t('timesheet.otNormalHours')">
              <InputNumber
                v-model="payrollForm.overtime_hours_normal"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
                :min="0"
                :maxFractionDigits="1"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>
            
            <AppInputField :label="$t('timesheet.otWeekendHours')">
              <InputNumber
                v-model="payrollForm.overtime_hours_weekend"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
                :min="0"
                :maxFractionDigits="1"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>

            <AppInputField :label="$t('timesheet.otHolidayHours')">
              <InputNumber
                v-model="payrollForm.overtime_hours_holiday"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
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
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>

            <AppInputField :label="$t('timesheet.dependents')">
              <InputNumber
                v-model="payrollForm.dependents_count"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
                :min="0"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>
          </div>

          <div class="grid grid-cols-3 gap-3">
            <AppInputField :label="$t('timesheet.deductionLate')">
              <InputNumber
                v-model="payrollForm.deduction_late"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>
            
            <AppInputField :label="$t('timesheet.deductionLeave')">
              <InputNumber
                v-model="payrollForm.deduction_leave"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                @input="updatePayrollFormCalculations"
              />
            </AppInputField>

            <AppInputField :label="$t('timesheet.deductionUnion')">
              <InputNumber
                v-model="payrollForm.deduction_union"
                class="w-full"
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
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
                inputClass="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
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
                class="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
              />
            </AppInputField>
          </div>

          <AppInputField :label="$t('timesheet.noteLabel')">
            <Textarea
              v-model="payrollForm.note"
              rows="2"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
            />
          </AppInputField>
        </div>

        <!-- Right panel: Calculation sheet -->
        <div class="lg:col-span-5 bg-surface-50 dark:bg-surface-950 p-5 rounded-xl border border-surface-200/80 dark:border-surface-700 flex flex-col justify-between">
          <div>
            <h4 class="font-bold text-surface-900 dark:text-surface-0 border-b border-surface-200 dark:border-surface-700 pb-2 mb-4">{{ $t('timesheet.taxAndNetSalaryDetails') }}</h4>
            
            <div class="space-y-3.5 text-xs">
              <div class="flex justify-between items-center">
                <span class="text-surface-500 font-semibold">{{ $t('timesheet.baseSalary') }}</span>
                <span class="font-bold font-mono">{{ formatVND(payrollForm.base_salary) }}</span>
              </div>
              
              <div class="flex justify-between items-center text-[11px] text-surface-400 font-medium pl-3 border-l-2 border-surface-200 dark:border-surface-700">
                <span>{{ $t('timesheet.dailyRate') }}</span>
                <span class="font-mono">
                  {{ formatVND(payrollForm.standard_working_days > 0 ? payrollForm.base_salary / payrollForm.standard_working_days : 0) }} / {{ $t('timesheet.dayUnit') }}
                </span>
              </div>

              <div class="flex justify-between items-center">
                <span class="text-surface-500 font-semibold">{{ $t('timesheet.overtimePay') }}</span>
                <span class="font-bold font-mono text-emerald-600">+{{ formatVND(payrollForm.overtime_salary) }}</span>
              </div>
              
              <div class="space-y-1.5 pl-3 border-l-2 border-surface-200 dark:border-surface-700 text-[11px] text-surface-450">
                <div class="flex justify-between">
                  <span>{{ $t('timesheet.otNormalRate') }}</span>
                  <span class="font-mono">{{ payrollForm.overtime_hours_normal || 0 }}h = {{ formatVND(payrollForm.overtime_salary_normal) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>{{ $t('timesheet.otWeekendRate') }}</span>
                  <span class="font-mono">{{ payrollForm.overtime_hours_weekend || 0 }}h = {{ formatVND(payrollForm.overtime_salary_weekend) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>{{ $t('timesheet.otHolidayRate') }}</span>
                  <span class="font-mono">{{ payrollForm.overtime_hours_holiday || 0 }}h = {{ formatVND(payrollForm.overtime_salary_holiday) }}</span>
                </div>
              </div>

              <div class="flex justify-between items-center">
                <span class="text-surface-500 font-semibold">{{ $t('timesheet.attendanceAllowance') }}</span>
                <span class="font-bold font-mono text-emerald-600">+{{ formatVND(payrollForm.allowance_attendance) }}</span>
              </div>

              <div class="flex justify-between items-center">
                <span class="text-surface-500 font-semibold">{{ $t('timesheet.attendanceDeduction') }}</span>
                <span class="font-bold font-mono text-rose-500">-{{ formatVND((Number(payrollForm.deduction_late) || 0) + (Number(payrollForm.deduction_leave) || 0)) }}</span>
              </div>

              <div class="border-t border-surface-200 dark:border-surface-700 my-2 pt-2 flex justify-between items-center font-bold text-surface-900 dark:text-surface-0">
                <span>{{ $t('timesheet.grossSalary') }}</span>
                <span class="font-mono">{{ formatVND(calculatedGrossSalary) }}</span>
              </div>

              <div class="flex justify-between items-center">
                <span class="text-surface-500 font-semibold">{{ $t('timesheet.insuranceDeduction') }}</span>
                <span class="font-bold font-mono text-rose-500">-{{ formatVND(calculatedInsurance) }}</span>
              </div>
              <div class="space-y-1 pl-3 border-l-2 border-surface-200 dark:border-surface-700 text-[10px] text-surface-450 font-mono">
                <div class="flex justify-between">
                  <span>{{ $t('timesheet.socialInsuranceDeduction') }}</span>
                  <span>-{{ formatVND(calculatedGrossSalary * 0.08) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>{{ $t('timesheet.healthInsuranceDeduction') }}</span>
                  <span>-{{ formatVND(calculatedGrossSalary * 0.015) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>{{ $t('timesheet.unemploymentInsuranceDeduction') }}</span>
                  <span>-{{ formatVND(calculatedGrossSalary * 0.01) }}</span>
                </div>
              </div>

              <div class="flex justify-between items-center font-bold text-surface-700 dark:text-surface-300">
                <span>{{ $t('timesheet.incomeBeforeTax') }}</span>
                <span class="font-mono">{{ formatVND(calculatedIncomeBeforeTax) }}</span>
              </div>

              <div class="flex justify-between items-center">
                <span class="text-surface-500 font-semibold">{{ $t('timesheet.progressivePit') }}</span>
                <span class="font-bold font-mono text-primary">-{{ formatVND(payrollForm.deduction_tax) }}</span>
              </div>
              
              <div class="space-y-1.5 pl-3 border-l-2 border-surface-200 dark:border-surface-700 text-[11px] text-surface-450">
                <div class="flex justify-between">
                  <span>{{ $t('timesheet.selfDeduction') }}</span>
                  <span class="font-mono">15,500,000 ₫</span>
                </div>
                <div class="flex justify-between">
                  <span>{{ $t('timesheet.dependentDeduction') }}</span>
                  <span class="font-mono">{{ payrollForm.dependents_count || 0 }} {{ $t('timesheet.personUnit') }} = {{ formatVND((payrollForm.dependents_count || 0) * 6200000) }}</span>
                </div>
                <div class="flex justify-between font-bold text-surface-600 dark:text-surface-400">
                  <span>{{ $t('timesheet.taxableIncome') }}</span>
                  <span class="font-mono">{{ formatVND(calculatedTaxableIncome) }}</span>
                </div>
              </div>

              <div class="flex justify-between items-center">
                <span class="text-surface-500 font-semibold">{{ $t('timesheet.unionAndAdvance') }}</span>
                <span class="font-bold font-mono text-rose-500">
                  -{{ formatVND((Number(payrollForm.deduction_union) || 0) + (Number(payrollForm.advance_payment) || 0)) }}
                </span>
              </div>
            </div>
          </div>

          <div class="mt-6 bg-white dark:bg-surface-900 p-4 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-inner flex flex-col items-center">
            <span class="text-[10px] font-black uppercase tracking-widest text-surface-400 mb-1">{{ $t('timesheet.netSalary') }}</span>
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
import { useI18n } from 'vue-i18n';
import BasePagination from '~/components/common/BasePagination.vue';
import {
  GET_PAYROLL,
  SAVE_PAYROLL,
  EXPORT_PAYROLL_EXCEL,
  EXPORT_PAYROLL_PDF
} from '~/apis/timesheet';
import { useApiStore } from "~/stores/api";
import { showMessage } from "~/utils/global";

const { t } = useI18n();
const apiStore = useApiStore();

const userInfo = computed(() => {
  return apiStore.userInfo || JSON.parse(localStorage.getItem("userInfo") || "{}");
});

const payrollMonthValue = ref<Date>(new Date());
const payrollSearchQ = ref('');
const payrollData = ref<any[]>([]);
const loadingPayroll = ref(false);
const displayPayrollDialog = ref(false);
const submittingPayroll = ref(false);

const payrollCurrentPage = ref(0);
const payrollPerPage = ref(30);
const payrollTotal = ref(0);

const handlePayrollPageChange = (event: any) => {
  payrollCurrentPage.value = event.page || 0;
  payrollPerPage.value = event.rows || 30;
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
  deduction_union: 50000,
  deduction_tax: 0,
  advance_payment: 0,
  net_salary: 0,
  status: 'PENDING',
  note: '',
  dependents_count: 0
});

const calculatedGrossSalary = computed(() => {
  if (!payrollForm.value) return 0;
  return (Number(payrollForm.value.base_salary) || 0) + 
         (Number(payrollForm.value.overtime_salary) || 0) + 
         (Number(payrollForm.value.allowance_attendance) || 0) - 
         (Number(payrollForm.value.deduction_late) || 0) - 
         (Number(payrollForm.value.deduction_leave) || 0);
});

const calculatedInsurance = computed(() => {
  return calculatedGrossSalary.value * 0.105;
});

const calculatedIncomeBeforeTax = computed(() => {
  return Math.max(0, calculatedGrossSalary.value - calculatedInsurance.value);
});

const calculatedTaxableIncome = computed(() => {
  const self = 15500000;
  const dep = (Number(payrollForm.value.dependents_count) || 0) * 6200000;
  return Math.max(0, calculatedIncomeBeforeTax.value - self - dep);
});

const calculateRowPayroll = (row: any) => {
  const baseSalary = Number(row.base_salary) || 0;
  const standardDays = Number(row.standard_working_days) || 22;
  const actualDays = Number(row.actual_working_days) || 0;
  const dependentsCount = Number(row.dependents_count) || 0;

  // Standard rates
  const dailyRate = standardDays > 0 ? (baseSalary / standardDays) : 0;
  const hourlyRate = dailyRate / 8;

  // Overtime calculations
  const otNormalHours = Number(row.overtime_hours_normal) || 0;
  const otWeekendHours = Number(row.overtime_hours_weekend) || 0;
  const otHolidayHours = Number(row.overtime_hours_holiday) || 0;

  const otNormalPay = otNormalHours * hourlyRate * 1.5;
  const otWeekendPay = otWeekendHours * hourlyRate * 2.0;
  const otHolidayPay = otHolidayHours * hourlyRate * 3.0;

  const overtime_salary_normal = Math.round(otNormalPay * 100) / 100;
  const overtime_salary_weekend = Math.round(otWeekendPay * 100) / 100;
  const overtime_salary_holiday = Math.round(otHolidayPay * 100) / 100;

  const totalOtSalary = otNormalPay + otWeekendPay + otHolidayPay;
  const overtime_salary = Math.round(totalOtSalary * 100) / 100;
  const overtime_hours = otNormalHours + otWeekendHours + otHolidayHours;

  // Allowances and Deductions
  const allowanceAttendance = Number(row.allowance_attendance) || 0;
  const deductionLate = Number(row.deduction_late) || 0;
  const deductionLeave = Number(row.deduction_leave) || 0;
  const deductionUnion = Number(row.deduction_union) || 0;
  const advancePayment = Number(row.advance_payment) || 0;

  // Gross Salary
  const grossSalary = baseSalary + totalOtSalary + allowanceAttendance - deductionLate - deductionLeave;

  // Compulsory Insurance (10.5%: 8% BHXH + 1.5% BHYT + 1% BHTN)
  const insuranceDeduction = grossSalary * 0.105;
  const incomeBeforeTax = Math.max(0, grossSalary - insuranceDeduction);

  // Progressive personal income tax (PIT)
  const selfDeduction = 15500000;
  const dependentDeduction = dependentsCount * 6200000;
  const taxableIncome = Math.max(0, incomeBeforeTax - selfDeduction - dependentDeduction);

  let defaultTax = 0;
  if (taxableIncome > 0) {
    if (taxableIncome <= 10000000) {
      defaultTax = taxableIncome * 0.05;
    } else if (taxableIncome <= 30000000) {
      defaultTax = taxableIncome * 0.10 - 500000;
    } else if (taxableIncome <= 60000000) {
      defaultTax = taxableIncome * 0.20 - 3500000;
    } else if (taxableIncome <= 100000000) {
      defaultTax = taxableIncome * 0.30 - 9500000;
    } else {
      defaultTax = taxableIncome * 0.35 - 14500000;
    }
  }

  const deduction_tax = Math.round(defaultTax * 100) / 100;

  // Net Salary: Income Before Tax - Union - Tax - Advance
  const netSalary = Math.round(Math.max(0, incomeBeforeTax - deductionUnion - defaultTax - advancePayment) * 100) / 100;

  return {
    ...row,
    overtime_hours,
    overtime_salary,
    overtime_salary_normal,
    overtime_salary_weekend,
    overtime_salary_holiday,
    deduction_tax,
    net_salary: netSalary,
    gross_salary: grossSalary,
    insurance_deduction: insuranceDeduction,
  };
};

const getGrossSalaryAmount = (row: any) => {
  return Number(row.gross_salary) || 0;
};

const getInsuranceAmount = (row: any) => {
  return Number(row.insurance_deduction) || 0;
};

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
      const rawList = dataObj.data || res.data?.data || [];
      payrollData.value = rawList.map((row: any) => calculateRowPayroll(row));
      payrollTotal.value = dataObj.meta?.total || dataObj.total || payrollData.value.length;
      loadingPayroll.value = false;
    },
    (err: any) => {
      console.error(err);
      loadingPayroll.value = false;
      showMessage("error", t('text.error'), t('timesheet.msgPayrollLoadError'));
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

  // Gross Salary
  const grossSalary = baseSalary + totalOtSalary + allowanceAttendance - deductionLate - deductionLeave;

  // Compulsory Insurance (10.5%: 8% BHXH + 1.5% BHYT + 1% BHTN)
  const insuranceDeduction = grossSalary * 0.105;
  const incomeBeforeTax = Math.max(0, grossSalary - insuranceDeduction);

  // Progressive personal income tax (PIT)
  const selfDeduction = 15500000;
  const dependentDeduction = dependentsCount * 6200000;
  const taxableIncome = Math.max(0, incomeBeforeTax - selfDeduction - dependentDeduction);

  let defaultTax = 0;
  if (taxableIncome > 0) {
    if (taxableIncome <= 10000000) {
      defaultTax = taxableIncome * 0.05;
    } else if (taxableIncome <= 30000000) {
      defaultTax = taxableIncome * 0.10 - 500000;
    } else if (taxableIncome <= 60000000) {
      defaultTax = taxableIncome * 0.20 - 3500000;
    } else if (taxableIncome <= 100000000) {
      defaultTax = taxableIncome * 0.30 - 9500000;
    } else {
      defaultTax = taxableIncome * 0.35 - 14500000;
    }
  }

  payrollForm.value.deduction_tax = Math.round(defaultTax * 100) / 100;

  // Net Salary: Income Before Tax - Union - Tax - Advance
  const netSalary = incomeBeforeTax - deductionUnion - defaultTax - advancePayment;
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
      showMessage("success", t('text.success'), t('timesheet.msgPayrollSaveSuccess'));
      fetchPayroll();
    },
    (err: any) => {
      console.error(err);
      submittingPayroll.value = false;
      showMessage("error", t('text.error'), t('timesheet.msgPayrollSaveError'));
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
      showMessage("error", t('text.error'), t('timesheet.msgExportExcelError'));
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
      showMessage("error", t('text.error'), t('timesheet.msgExportPdfError'));
    });
};

onMounted(() => {
  const role = userInfo.value?.role;
  if (role === 'ADMIN' || role === 'MANAGER' || role === 'ACCOUNTANT') {
    fetchPayroll();
  }
});
</script>

<style scoped>
table th, table td {
  @apply border border-surface-200 dark:border-surface-700;
}
</style>
