<template>
  <div class="w-full px-4 sm:px-6 lg:w-[95%] lg:mx-auto xl:w-[92%] 2xl:w-[90%] space-y-6 animate-in fade-in duration-500 pb-10">
    <!-- Header Page with Back link and Edit button -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <Button
          icon="pi pi-arrow-left"
          severity="secondary"
          variant="text"
          class="!w-10 !h-10 !rounded-xl border border-surface-200 dark:border-surface-800 hover:bg-surface-50 dark:hover:bg-surface-900"
          @click="goBack"
        />
        <div>
          <span class="text-xs font-semibold text-primary uppercase tracking-widest">{{ $t('transaction.viewDetails') }}</span>
          <h1 class="text-2xl font-black text-surface-900 dark:text-surface-0 mt-0.5">{{ transactionCode || '—' }}</h1>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <Button
          :label="$t('btn.edit')"
          icon="pi pi-pencil"
          severity="warning"
          class="!rounded-xl !px-5 !py-2.5 !font-bold !shadow-lg !shadow-warning/20"
          @click="goToEdit"
        />
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loadingTransaction" class="flex flex-col items-center justify-center py-20 bg-white dark:bg-surface-950 border border-surface-200 dark:border-surface-700 rounded-xl">
      <i class="pi pi-spin pi-spinner text-3xl text-primary mb-3"></i>
      <span class="text-surface-500 font-medium">{{ $t('transaction.loadingData') }}</span>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left side: Transaction Details (2 cols) -->
      <div class="lg:col-span-2 space-y-6">
        
        <!-- SECTION 1: GENERAL TRANSACTION INFO -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-5">
          <div class="flex items-center gap-2.5 border-b border-surface-100 dark:border-surface-850 pb-4">
            <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <i class="pi pi-credit-card text-lg"></i>
            </div>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('transaction.infoSection') }}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <!-- Transaction Type -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.type') }}</span>
              <div>
                <span
                  class="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider"
                  :class="[
                    form.type === 'REVENUE' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                    'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                  ]"
                >
                  <i class="pi mr-1 text-[9px]" :class="form.type === 'REVENUE' ? 'pi-arrow-up-right' : 'pi-arrow-down-left'"></i>
                  {{ form.type === 'REVENUE' ? $t('transaction.typeRevenue') : $t('transaction.typeExpense') }}
                </span>
              </div>
            </div>

            <!-- Transaction Code -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.code') }}</span>
              <span class="text-xs font-mono font-bold text-surface-800 dark:text-surface-200">
                {{ transactionCode || '—' }}
              </span>
            </div>

            <!-- Category -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.category') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ form.category || '—' }}
              </span>
            </div>

            <!-- Transaction Date -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.date') }}</span>
              <span class="text-xs font-mono font-bold text-surface-700 dark:text-surface-300">
                {{ formatDate(form.transaction_date) }}
              </span>
            </div>

            <!-- Payment Method -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.paymentMethod') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300 inline-flex items-center gap-1.5">
                <i class="pi" :class="getPaymentMethodIcon(form.payment_method)"></i>
                {{ getPaymentMethodLabel(form.payment_method) }}
              </span>
            </div>

            <!-- Status -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.status') }}</span>
              <div>
                <span
                  class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider inline-block"
                  :class="[
                    form.status === 'PAID' ? 'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400' :
                    form.status === 'PENDING' ? 'bg-amber-100 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400' :
                    'bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400'
                  ]"
                >
                  {{ getStatusLabel(form.status) }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 2: AMOUNT & COMPLIANCE TAX CALCULATIONS -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-5">
          <div class="flex items-center gap-2.5 border-b border-surface-100 dark:border-surface-850 pb-4">
            <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <i class="pi pi-calculator text-lg"></i>
            </div>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('transaction.amountSection') }}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <!-- Total Amount -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.amount') }}</span>
              <span class="text-base font-mono font-black" :class="form.type === 'REVENUE' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'">
                {{ formatCurrency(form.amount) }}
              </span>
            </div>

            <!-- Tax Rate type -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.taxRate') }}</span>
              <span class="text-xs font-bold text-surface-700 dark:text-surface-300">
                {{ getTaxRateLabel(form.tax_rate_type) }}
              </span>
            </div>

            <!-- Net Amount -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.netAmount') }}</span>
              <span class="text-xs font-mono font-bold text-surface-700 dark:text-surface-300">
                {{ formatCurrency(form.net_amount) }}
              </span>
            </div>

            <!-- Tax Amount -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.taxAmount') }}</span>
              <span class="text-xs font-mono font-bold text-surface-700 dark:text-surface-300">
                {{ formatCurrency(form.tax_amount) }}
              </span>
            </div>

            <!-- Withholding Tax -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.withholdingTax') }}</span>
              <span class="text-xs font-mono font-bold text-surface-700 dark:text-surface-300">
                {{ formatCurrency(form.withholding_tax) }}
              </span>
            </div>

            <!-- Japanese Qualified Invoice Registration Number -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('transaction.invoiceNumber') }}</span>
              <div v-if="form.invoice_registration_number" class="flex items-center gap-1 mt-0.5 text-xs text-primary font-mono font-bold bg-primary/5 px-2.5 py-1 rounded w-fit border border-primary/10">
                <i class="pi pi-verified text-[10px]"></i>
                {{ form.invoice_registration_number }}
              </div>
              <span v-else class="text-xs font-bold text-surface-500">—</span>
            </div>
          </div>
        </div>

        <!-- SECTION 3: DESCRIPTION -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-4">
          <div class="flex items-center gap-2 border-b border-surface-100 dark:border-surface-850 pb-3">
            <i class="pi pi-align-left text-primary text-lg"></i>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('transaction.descriptionSection') }}</h2>
          </div>
          <p class="text-xs text-surface-700 dark:text-surface-300 whitespace-pre-wrap leading-relaxed">
            {{ form.description || 'Không có mô tả chi tiết.' }}
          </p>
        </div>

        <!-- EDM APP DOCUMENT MANAGER (READ ONLY VIEW) -->
        <div class="bg-white dark:bg-surface-950 p-8 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-5">
          <div class="flex items-center gap-2.5 border-b border-surface-100 dark:border-surface-850 pb-4">
            <div class="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <i class="pi pi-paperclip text-lg"></i>
            </div>
            <div>
              <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200 m-0">{{ $t('transaction.edmSection') }}</h2>
              <p class="text-[10px] text-surface-500 mt-0.5">{{ $t('transaction.edmReadonly') }}</p>
            </div>
          </div>

          <AppDocumentManager
            :key="transactionId"
            documentableType="Transaction"
            :documentableId="transactionId"
            v-model:documents="form.documents"
            :readonly="true"
          />
        </div>
      </div>

      <!-- Right side: Compliance Info Card (1 col) -->
      <div class="space-y-6">
        <!-- COMPLIANCE CARD -->
        <div class="bg-gradient-to-br from-primary/10 to-surface-50 dark:from-surface-900/50 dark:to-surface-950 p-6 rounded-xl border border-primary/20 dark:border-surface-800 space-y-4">
          <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <i class="pi pi-shield"></i>
            <span class="text-[10px] font-black uppercase tracking-widest">{{ $t('transaction.complianceBadge') }}</span>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-black text-surface-900 dark:text-surface-150">{{ $t('transaction.complianceTitle') }}</h3>
            <p class="text-xs text-surface-500 leading-relaxed">
              {{ form.type === 'EXPENSE' 
                ? 'Hệ thống tự động kiểm soát chứng từ, hóa đơn VAT hợp chuẩn và biên bản thanh toán liên quan để bảo vệ doanh nghiệp khỏi rủi ro thuế.' 
                : 'Hệ thống tự động đối chiếu hợp đồng ký kết, hóa đơn và biên bản nghiệm thu để phục vụ đối soát doanh thu chính xác.' }}
            </p>
          </div>

          <div class="pt-4 border-t border-surface-200 dark:border-surface-800 space-y-3">
            <Button
              :label="$t('btn.back')"
              severity="secondary"
              outlined
              class="w-full !rounded-xl !font-bold"
              @click="goBack"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { GET_TRANSACTION } from '~/apis/transaction';
import { showMessage } from '~/utils/global';
import AppDocumentManager from '~/components/common/AppDocumentManager.vue';

const { t } = useI18n();
const route = useRoute();
const transactionId = Number(route.params.id);

const loadingTransaction = ref(true);
const transactionCode = ref('');

const form = ref<any>({
  type: 'EXPENSE',
  amount: null,
  net_amount: null,
  tax_amount: null,
  tax_rate_type: 'NONE',
  invoice_registration_number: '',
  withholding_tax: null,
  payment_method: 'BANK_TRANSFER',
  category: '',
  transaction_date: '',
  description: '',
  status: 'PAID',
  documents: [],
});

const goBack = () => {
  navigateTo('/transaction');
};

const goToEdit = () => {
  navigateTo(`/transaction/${transactionId}/edit`);
};

// Fetch current transaction details
const loadTransactionDetails = () => {
  loadingTransaction.value = true;
  GET_TRANSACTION(
    transactionId,
    (res: any) => {
      const data = res?.data?.data || res?.data || res;
      if (data) {
        transactionCode.value = data.code || `TXN${String(data.id).padStart(10, '0')}`;
        
        let loadedTaxRate = data.tax_rate_type || 'NONE';
        if (loadedTaxRate === 'VAT_8') loadedTaxRate = 'VAT_8_VN';
        if (loadedTaxRate === 'VAT_10') loadedTaxRate = 'VAT_10_VN';

        form.value = {
          type: data.type || 'EXPENSE',
          amount: data.amount ? Number(data.amount) : null,
          net_amount: data.net_amount ? Number(data.net_amount) : null,
          tax_amount: data.tax_amount ? Number(data.tax_amount) : null,
          tax_rate_type: loadedTaxRate,
          invoice_registration_number: data.invoice_registration_number || '',
          withholding_tax: data.withholding_tax ? Number(data.withholding_tax) : null,
          payment_method: data.payment_method || 'BANK_TRANSFER',
          category: data.category || '',
          transaction_date: data.transaction_date || '',
          description: data.description || '',
          status: data.status || 'PAID',
          documents: data.documents || [],
        };
      }
      loadingTransaction.value = false;
    },
    (err: any) => {
      loadingTransaction.value = false;
      showMessage('error', t('transaction.loadError'), err.message);
      goBack();
    }
  );
};

// Formatting and Translation Helpers
const formatCurrency = (val: any) => {
  if (!val) return '0 ₫';
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
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
    case 'VAT_8_VN':
    case 'VAT_8': return 'VAT 8% (VN)';
    case 'VAT_10_VN':
    case 'VAT_10': return 'VAT 10% (VN)';
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
    default: return method || '—';
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

onMounted(() => {
  loadTransactionDetails();
});
</script>
