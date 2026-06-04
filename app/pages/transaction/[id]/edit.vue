<template>
  <div class="w-full px-4 sm:px-6 lg:w-[95%] lg:mx-auto xl:w-[92%] 2xl:w-[90%] space-y-6 animate-in fade-in duration-500 pb-10">
    <!-- Header Page with Back link -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Button
          icon="pi pi-arrow-left"
          severity="secondary"
          variant="text"
          class="!w-10 !h-10 !rounded-xl border border-surface-200 dark:border-surface-800 hover:bg-surface-50 dark:hover:bg-surface-900"
          @click="goBack"
        />
        <div>
          <span class="text-xs font-semibold text-primary uppercase tracking-widest">{{ $t('transaction.updateSubtitle') }}</span>
          <h1 class="text-2xl font-black text-surface-900 dark:text-surface-0 mt-0.5">{{ $t('transaction.editTitle') }}: {{ transactionCode }}</h1>
        </div>
      </div>
    </div>

    <!-- Main Grid Form -->
    <div v-if="loadingTransaction" class="flex flex-col items-center justify-center py-20 bg-white dark:bg-surface-950 border border-surface-100 dark:border-surface-800 rounded-3xl">
      <i class="pi pi-spin pi-spinner text-3xl text-primary mb-3"></i>
      <span class="text-surface-500 font-medium">{{ $t('transaction.loadingData') }}</span>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left side: Form fields (2 cols) -->
      <div class="lg:col-span-2 space-y-6">
        <!-- SECTION 1: TRANSACTION TYPE & PAYMENTS -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-3xl shadow-xl shadow-surface-100/50 dark:shadow-none border border-surface-100 dark:border-surface-800 space-y-4">
          <div class="flex items-center gap-2 border-b border-surface-100 dark:border-surface-850 pb-3">
            <i class="pi pi-credit-card text-primary text-lg"></i>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('transaction.infoSection') }}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Transaction Type -->
            <AppInputField :label="$t('transaction.type')" :isRequired="true">
              <Select
                v-model="form.type"
                :options="typeOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="Chọn phân loại"
                class="w-full !rounded-xl"
              />
            </AppInputField>

            <!-- Transaction Code -->
            <AppInputField :label="$t('transaction.code')">
              <InputText
                v-model="transactionCode"
                disabled
                class="rounded-xl font-mono uppercase text-surface-400 bg-surface-50 dark:bg-surface-900"
              />
            </AppInputField>

            <!-- Category -->
            <AppInputField :label="$t('transaction.category')" :isRequired="true" :error="formErrors.category">
              <Select
                v-model="form.category"
                :options="categoryOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="Chọn hạng mục"
                class="w-full !rounded-xl"
                editable
                :invalid="!!formErrors.category"
                @change="onValidate('category')"
              />
            </AppInputField>

            <!-- Transaction Date -->
            <AppInputField :label="$t('transaction.date')" :isRequired="true" :error="formErrors.transaction_date">
              <DatePickerCommon
                v-model="form.transaction_date"
                :invalid="!!formErrors.transaction_date"
                @change="onValidate('transaction_date')"
              />
            </AppInputField>

            <!-- Payment Method -->
            <AppInputField :label="$t('transaction.paymentMethod')" :isRequired="true">
              <Select
                v-model="form.payment_method"
                :options="paymentMethodOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="Chọn phương thức"
                class="w-full !rounded-xl"
              />
            </AppInputField>

            <!-- Transaction Status -->
            <AppInputField :label="$t('transaction.status')" :isRequired="true">
              <Select
                v-model="form.status"
                :options="statusOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="Chọn trạng thái"
                class="w-full !rounded-xl"
              />
            </AppInputField>
          </div>
        </div>

        <!-- SECTION 2: AMOUNT & COMPLIANCE TAX CALCULATIONS -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-3xl shadow-xl shadow-surface-100/50 dark:shadow-none border border-surface-100 dark:border-surface-800 space-y-4">
          <div class="flex items-center gap-2 border-b border-surface-100 dark:border-surface-850 pb-3">
            <i class="pi pi-calculator text-primary text-lg"></i>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('transaction.amountSection') }}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Total Gross Amount -->
            <AppInputField :label="$t('transaction.amount')" :isRequired="true" :error="formErrors.amount">
              <InputNumber
                v-model="form.amount"
                placeholder="Nhập tổng số tiền"
                class="rounded-xl"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                :min="0"
                :invalid="!!formErrors.amount"
                @value-change="onAmountChange"
              />
            </AppInputField>

            <!-- Tax Rate type -->
            <AppInputField :label="$t('transaction.taxRate')" :isRequired="true">
              <Select
                v-model="form.tax_rate_type"
                :options="taxRateOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="Chọn loại thuế suất"
                class="w-full !rounded-xl"
                @change="onTaxChange"
              />
            </AppInputField>

            <!-- Auto Calculated Net Amount -->
            <AppInputField :label="$t('transaction.netAmount')">
              <InputNumber
                v-model="form.net_amount"
                placeholder="Số tiền gốc trước thuế"
                class="rounded-xl bg-surface-50/50 dark:bg-surface-900"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                readonly
              />
            </AppInputField>

            <!-- Auto Calculated Tax Amount -->
            <AppInputField :label="$t('transaction.taxAmount')">
              <InputNumber
                v-model="form.tax_amount"
                placeholder="Tiền thuế"
                class="rounded-xl bg-surface-50/50 dark:bg-surface-900"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                readonly
              />
            </AppInputField>

            <!-- Withholding Tax (Optional) -->
            <AppInputField :label="$t('transaction.withholdingTax')">
              <InputNumber
                v-model="form.withholding_tax"
                placeholder="Ví dụ: thuế TNCN 10%, nhà thầu..."
                class="rounded-xl"
                mode="currency"
                currency="VND"
                locale="vi-VN"
                :min="0"
              />
            </AppInputField>

            <!-- Japanese Qualified Invoice Registration Number -->
            <AppInputField :label="$t('transaction.invoiceNumber')" :error="formErrors.invoice_registration_number">
              <InputText
                v-model="form.invoice_registration_number"
                placeholder="T1234567890123 (Nếu là chi phí tại Nhật)"
                class="rounded-xl font-mono uppercase"
                :invalid="!!formErrors.invoice_registration_number"
                @change="onValidate('invoice_registration_number')"
              />
            </AppInputField>
          </div>
        </div>

        <!-- SECTION 3: DESCRIPTION -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-3xl shadow-xl shadow-surface-100/50 dark:shadow-none border border-surface-100 dark:border-surface-800 space-y-4">
          <div class="flex items-center gap-2 border-b border-surface-100 dark:border-surface-850 pb-3">
            <i class="pi pi-align-left text-primary text-lg"></i>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('transaction.descriptionSection') }}</h2>
          </div>
          <div class="flex flex-col gap-1.5">
            <textarea
              v-model="form.description"
              rows="4"
              :placeholder="$t('transaction.descriptionPlaceholder')"
              class="w-full p-4 rounded-2xl border border-surface-200 dark:border-surface-800 bg-transparent text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none"
            ></textarea>
          </div>
        </div>

        <!-- EDM APP DOCUMENT MANAGER (ACTIVE DOCUMENTS - ENHANCED FULL WIDTH SECTION) -->
        <div class="bg-white dark:bg-surface-950 p-8 rounded-3xl shadow-xl shadow-surface-100/50 dark:shadow-none border border-surface-100 dark:border-surface-800 space-y-5">
          <div class="flex items-center justify-between border-b border-surface-100 dark:border-surface-850 pb-4">
            <div class="flex items-center gap-2.5">
              <div class="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <i class="pi pi-paperclip text-lg"></i>
              </div>
              <div>
                <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200 m-0">{{ $t('transaction.edmSection') }}</h2>
                <p class="text-[10px] text-surface-500 mt-0.5">{{ $t('transaction.edmDesc') }}</p>
              </div>
            </div>
            <span v-if="form.type === 'EXPENSE' && (!form.documents || form.documents.length === 0)" class="px-3 py-1 rounded bg-rose-500/10 text-rose-500 text-[10px] font-black uppercase tracking-wider animate-pulse">
              {{ $t('transaction.edmRequired') }}
            </span>
          </div>

          <AppDocumentManager
            :key="transactionId"
            documentableType="Transaction"
            :documentableId="transactionId"
            v-model:documents="form.documents"
            @upload-success="refreshTransactionDocuments"
            @delete-success="refreshTransactionDocuments"
          />
        </div>
      </div>

      <!-- Right side: Action Buttons (1 col) -->
      <div class="space-y-6">
        <!-- FORM ACTION CARD -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-3xl shadow-xl shadow-surface-100/50 dark:shadow-none border border-surface-100 dark:border-surface-800 space-y-3">
          <Button
            :label="$t('transaction.saveChanges')"
            icon="pi pi-check"
            severity="warning"
            class="w-full !rounded-xl !py-3 !font-bold !shadow-lg !shadow-warning/20"
            :loading="submitting"
            @click="saveTransaction"
          />
          <Button
            :label="$t('btn.back')"
            severity="secondary"
            outlined
            class="w-full !rounded-xl !py-3 !font-bold"
            @click="goBack"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { GET_TRANSACTION, UPDATE_TRANSACTION } from '~/apis/transaction';
import { showMessage } from '~/utils/global';
import AppDocumentManager from '~/components/common/AppDocumentManager.vue';
import { validateOnAllField, validateOnField } from '~/utils/validate';

const { t } = useI18n();

const route = useRoute();
const transactionId = Number(route.params.id);

const loadingTransaction = ref(true);
const submitting = ref(false);
const transactionCode = ref('');

const form = ref<any>({
  type: 'EXPENSE',
  amount: null as number | null,
  net_amount: null as number | null,
  tax_amount: null as number | null,
  tax_rate_type: 'NONE',
  invoice_registration_number: '',
  withholding_tax: null as number | null,
  payment_method: 'BANK_TRANSFER',
  category: '',
  transaction_date: '',
  description: '',
  status: 'PAID',
  documents: [],
});

// Form error fields reactive object
const formErrors = ref<any>({
  category: '',
  transaction_date: '',
  amount: '',
  invoice_registration_number: '',
});

// Dropdowns & Options lists
const FIELD_VALIDATIONS = {
  category: { transitionKey: "transaction.category", types: ["require"], errorKey: "category" },
  transaction_date: { transitionKey: "transaction.date", types: ["require"], errorKey: "transaction_date" },
  amount: { transitionKey: "transaction.amount", types: ["require"], errorKey: "amount" },
  invoice_registration_number: { transitionKey: "transaction.invoiceNumber", types: [], errorKey: "invoice_registration_number" },
};

const onValidate = (field: string) => {
  validateOnField(field, form.value, formErrors.value, FIELD_VALIDATIONS, t);
  if (field === 'invoice_registration_number' && form.value.invoice_registration_number) {
    formErrors.value.invoice_registration_number = '';
  }
};

const onAmountChange = () => {
  calculateTaxAndNet();
  onValidate('amount');
};

const onTaxChange = () => {
  calculateTaxAndNet();
};

const typeOptions = computed(() => [
  { label: t('transaction.typeExpense'), value: 'EXPENSE' },
  { label: t('transaction.typeRevenue'), value: 'REVENUE' },
]);

const paymentMethodOptions = computed(() => [
  { label: t('transaction.methodBankTransfer'), value: 'BANK_TRANSFER' },
  { label: t('transaction.methodCash'), value: 'CASH' },
  { label: t('transaction.methodCreditCard'), value: 'CREDIT_CARD' },
]);

const statusOptions = computed(() => [
  { label: t('transaction.statusPaid'), value: 'PAID' },
  { label: t('transaction.statusPending'), value: 'PENDING' },
]);

const taxRateOptions = computed(() => [
  { label: t('transaction.taxNone'), value: 'NONE' },
  { label: t('transaction.taxVat8Vn'), value: 'VAT_8_VN' },
  { label: t('transaction.taxVat10Vn'), value: 'VAT_10_VN' },
]);

const categoryOptions = computed(() => [
  { label: t('transaction.categorySalary'), value: 'Salary' },
  { label: t('transaction.categoryRent'), value: 'Office Rent' },
  { label: t('transaction.categoryUtilities'), value: 'Utilities' },
  { label: t('transaction.categoryOutsourcing'), value: 'Outsourcing Cost' },
  { label: t('transaction.categorySoftware'), value: 'Software & SaaS' },
  { label: t('transaction.categoryTravel'), value: 'Travel/Transport' },
  { label: t('transaction.categoryMarketing'), value: 'Marketing' },
  { label: t('transaction.categoryRevenue'), value: 'Client Revenue' },
  { label: t('transaction.categoryConsulting'), value: 'Consulting Fee' },
  { label: t('transaction.categoryOthers'), value: 'Others' },
]);

// Tax and net calculations
const calculateTaxAndNet = () => {
  const amt = form.value.amount || 0;
  let rate = 0;
  
  if (form.value.tax_rate_type === 'VAT_8_VN') {
    rate = 0.08;
  } else if (form.value.tax_rate_type === 'VAT_10_VN') {
    rate = 0.10;
  }

  form.value.net_amount = Math.round(amt / (1 + rate));
  form.value.tax_amount = Math.round(amt - form.value.net_amount);
};

// Navigation
const goBack = () => {
  navigateTo('/transaction');
};

// Fetch current transaction details from database
const loadTransactionDetails = () => {
  loadingTransaction.value = true;
  GET_TRANSACTION(
    transactionId,
    (res: any) => {
      const data = res?.data?.data || res?.data || res;
      if (data) {
        transactionCode.value = data.code || `TXN${String(data.id).padStart(10, '0')}`;
        form.value = {
          type: data.type || 'EXPENSE',
          amount: data.amount ? Number(data.amount) : null,
          net_amount: data.net_amount ? Number(data.net_amount) : null,
          tax_amount: data.tax_amount ? Number(data.tax_amount) : null,
          tax_rate_type: data.tax_rate_type || 'NONE',
          invoice_registration_number: data.invoice_registration_number || '',
          withholding_tax: data.withholding_tax ? Number(data.withholding_tax) : null,
          payment_method: data.payment_method || 'BANK_TRANSFER',
          category: data.category || '',
          transaction_date: data.transaction_date ? new Date(data.transaction_date) : null,
          description: data.description || '',
          status: data.status || 'PAID',
          documents: data.documents || [],
        };
      }
      loadingTransaction.value = false;
    },
    (err: any) => {
      loadingTransaction.value = false;
      showMessage('error', t('transaction.loadError'), err.message || 'Error loading transaction.');
      goBack();
    }
  );
};

// Refresh document list dynamically
const refreshTransactionDocuments = () => {
  GET_TRANSACTION(
    transactionId,
    (res: any) => {
      const data = res?.data?.data || res?.data || res;
      if (data) {
        form.value.documents = data.documents || [];
      }
    },
    () => {}
  );
};

// Save transaction changes
const saveTransaction = () => {
  // Clear old errors
  Object.keys(formErrors.value).forEach(k => formErrors.value[k] = '');

  const isValid = validateOnAllField(form.value, formErrors.value, FIELD_VALIDATIONS, t);

  // Qualified Invoice format validation
  let invoiceValid = true;
  if (form.value.invoice_registration_number) {
    formErrors.value.invoice_registration_number = '';
  }

  if (!isValid || !invoiceValid) {
    showMessage('error', t('text.error'), t('text.errorInput'));
    return;
  }

  if (form.value.type === 'EXPENSE' && (!form.value.documents || form.value.documents.length === 0)) {
    showMessage('warning', t('transaction.missingEvidence'), t('transaction.missingEvidenceDesc'));
    return;
  }

  submitting.value = true;
  
  const formatDate = (d: any) => { if (!d) return null; const dt = new Date(d); if (isNaN(dt.getTime())) return d; return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`; };
  const payload = {
    ...form.value,
    transaction_date: formatDate(form.value.transaction_date),
    invoice_registration_number: form.value.invoice_registration_number ? form.value.invoice_registration_number.toUpperCase() : null
  };

  UPDATE_TRANSACTION(
    transactionId,
    payload,
    () => {
      submitting.value = false;
      showMessage('success', t('transaction.updateSuccess'), t('transaction.updateSuccessDesc'));
      goBack();
    },
    (err: any) => {
      submitting.value = false;
      const msg = err.response?.data?.messages?.message || err.message || 'Error';
      showMessage('error', t('transaction.saveError'), msg);
    }
  );
};

onMounted(() => {
  loadTransactionDetails();
});
</script>
