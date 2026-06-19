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
          <span class="text-xs font-semibold text-primary uppercase tracking-widest">{{ $t('transaction.subtitle') }}</span>
          <h1 class="text-2xl font-black text-surface-900 dark:text-surface-0 mt-0.5">{{ $t('transaction.createTitle') }}</h1>
        </div>
      </div>
    </div>

    <!-- Nhập nhanh giao dịch bằng AI Gemini -->
    <div class="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 rounded-3xl border border-primary/20 shadow-md relative overflow-hidden group">
      <div class="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
      
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 text-primary">
            <i class="pi pi-sparkles text-xl animate-pulse"></i>
          </div>
          <div>
            <h3 class="text-sm font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase flex items-center gap-1.5">
              {{ $t('transaction.ocrTitle') }}
              <span class="bg-primary text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider">AI OCR</span>
            </h3>
            <p class="text-xs text-surface-400">{{ $t('transaction.ocrDesc') }}</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <input type="file" ref="ocrFileInput" class="hidden" accept=".pdf,.png,.jpg,.jpeg,.webp" @change="onOcrFileChange" />
          <Button
            :label="$t('transaction.ocrButton')"
            icon="pi pi-upload"
            :loading="ocrLoading"
            severity="primary"
            outlined
            class="!rounded-xl !px-5 !py-2.5 !font-bold !text-xs !min-w-[180px]"
            @click="ocrFileInput?.click()"
          />
        </div>
      </div>

      <div v-if="ocrLoading" class="mt-4 flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-2xl animate-pulse">
        <ProgressSpinner style="width: 20px; height: 20px" strokeWidth="6" />
        <span class="text-xs font-bold text-primary">{{ $t('transaction.ocrLoading') }}</span>
      </div>
    </div>

    <!-- Main Grid Form -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left side: Form fields (2 cols) -->
      <div class="lg:col-span-2 space-y-6">
        <!-- SECTION 1: TRANSACTION TYPE & PAYMENTS -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-4">
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
                :placeholder="$t('placeholder.selectCategory')"
                class="w-full !rounded-xl"
              />
            </AppInputField>

            <!-- Transaction Code -->
            <AppInputField :label="$t('transaction.code')">
              <InputText
                :value="$t('transaction.codeAutoGenerate')"
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
                :placeholder="$t('placeholder.selectItem')"
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
                :placeholder="$t('placeholder.selectMethod')"
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
                :placeholder="$t('placeholder.selectStatus')"
                class="w-full !rounded-xl"
              />
            </AppInputField>
          </div>
        </div>

        <!-- SECTION 2: AMOUNT & COMPLIANCE TAX CALCULATIONS -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-4">
          <div class="flex items-center gap-2 border-b border-surface-100 dark:border-surface-850 pb-3">
            <i class="pi pi-calculator text-primary text-lg"></i>
            <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('transaction.amountSection') }}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Total Gross Amount -->
            <AppInputField :label="$t('transaction.amount')" :isRequired="true" :error="formErrors.amount">
              <InputNumber
                v-model="form.amount"
                :placeholder="$t('placeholder.enterTotalAmount')"
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
                :placeholder="$t('placeholder.selectTaxRate')"
                class="w-full !rounded-xl"
                @change="onTaxChange"
              />
            </AppInputField>

            <!-- Auto Calculated Net Amount -->
            <AppInputField :label="$t('transaction.netAmount')">
              <InputNumber
                v-model="form.net_amount"
                :placeholder="$t('placeholder.amountBeforeTax')"
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
                :placeholder="$t('placeholder.taxAmount')"
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
                :placeholder="$t('placeholder.taxNoteExample')"
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
                :placeholder="$t('placeholder.japanInvoiceNo')"
                class="rounded-xl font-mono uppercase"
                :invalid="!!formErrors.invoice_registration_number"
                @change="onValidate('invoice_registration_number')"
              />
            </AppInputField>
          </div>
        </div>

        <!-- SECTION 3: DESCRIPTION -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-4">
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
      </div>

      <!-- Right side: Documents Uploader & Actions (1 col) -->
      <div class="space-y-6">
        <!-- SUBMIT / CANCEL ACTIONS -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-3">
          <Button
            :label="$t('transaction.saveTransaction')"
            icon="pi pi-check"
            severity="primary"
            class="w-full !rounded-xl !py-3 !font-bold !shadow-lg !shadow-primary/20"
            :loading="submitting"
            @click="saveTransaction"
          />
          <Button
            :label="$t('btn.cancel')"
            severity="secondary"
            outlined
            class="w-full !rounded-xl !py-3 !font-bold"
            @click="goBack"
          />
        </div>

        <!-- UPLOAD INVOICE / RECEIPTS AREA (LEGAL EVIDENCE) -->
        <div class="bg-white dark:bg-surface-950 p-6 rounded-xl shadow-sm border border-surface-200 dark:border-surface-700 space-y-4">
          <div class="flex items-center justify-between border-b border-surface-100 dark:border-surface-850 pb-3">
            <div class="flex items-center gap-2">
              <i class="pi pi-paperclip text-primary text-lg"></i>
              <h2 class="text-sm font-black uppercase tracking-wider text-surface-800 dark:text-surface-200">{{ $t('transaction.attachSection') }}</h2>
            </div>
            <span v-if="form.type === 'EXPENSE'" class="px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 text-[9px] font-black uppercase tracking-wider animate-pulse">
              {{ $t('transaction.attachRequired') }}
            </span>
          </div>

          <p class="text-xs text-surface-400 font-medium">
            {{ $t('transaction.attachDesc') }}
          </p>

          <!-- Drag Drop area -->
          <div
            class="border-2 border-dashed border-surface-250 dark:border-surface-800 hover:border-primary/50 dark:hover:border-primary/50 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 bg-surface-50/50 dark:bg-surface-950/20"
            @click="triggerPendingFileInput"
          >
            <i class="pi pi-cloud-upload text-3xl text-surface-400 mb-2"></i>
            <p class="text-xs font-bold text-surface-700 dark:text-surface-300">{{ $t('transaction.uploadFile') }}</p>
            <p class="text-[10px] text-surface-400 mt-1">{{ $t('transaction.uploadFormats') }}</p>
            <input
              ref="pendingFileInput"
              type="file"
              multiple
              class="hidden"
              @change="onPendingFileSelected"
            />
          </div>

          <!-- Staged files list -->
          <div v-if="pendingFiles.length > 0" class="space-y-2 mt-4 max-h-[250px] overflow-y-auto">
            <div
              v-for="(file, idx) in pendingFiles"
              :key="idx"
              class="flex items-center justify-between p-3 rounded-xl border border-surface-200 dark:border-surface-700"
              :class="getPendingFileIcon(file).bg"
            >
              <div class="flex items-center gap-3 min-w-0">
                <i class="pi text-lg" :class="getPendingFileIcon(file).icon"></i>
                <div class="flex flex-col min-w-0">
                  <span class="text-xs font-bold text-surface-800 dark:text-surface-200 truncate max-w-[120px]">{{ file.name }}</span>
                  <span class="text-[9px] text-surface-400 font-mono mt-0.5">{{ formatFileSize(file.size) }}</span>
                </div>
              </div>
              <Button
                icon="pi pi-times"
                severity="danger"
                variant="text"
                class="!w-7 !h-7 !rounded-lg"
                @click.stop="pendingFiles.splice(idx, 1)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { CREATE_TRANSACTION } from '~/apis/transaction';
import { UPLOAD_DOCUMENT } from '~/apis/document';
import { showMessage } from '~/utils/global';
import { validateOnAllField, validateOnField } from '~/utils/validate';
import { useAi } from '~/composables/ai';

const { t } = useI18n();
const { analyzeFileOcr } = useAi();
const submitting = ref(false);

// AI OCR Reactive State
const ocrLoading = ref(false);
const ocrFileInput = ref<HTMLInputElement | null>(null);

const form = ref({
  type: 'EXPENSE',
  amount: null as number | null,
  net_amount: null as number | null,
  tax_amount: null as number | null,
  tax_rate_type: 'NONE',
  invoice_registration_number: '',
  withholding_tax: null as number | null,
  payment_method: 'BANK_TRANSFER',
  category: '',
  transaction_date: new Date(),
  description: '',
  status: 'PAID',
});

// Staged files
const pendingFiles = ref<File[]>([]);
const pendingFileInput = ref<HTMLInputElement | null>(null);

// Form error fields reactive object
const formErrors = ref<any>({
  category: '',
  transaction_date: '',
  amount: '',
  invoice_registration_number: '',
});

// Dropdowns and configurations
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
  { label: t('transaction.expense'), value: 'EXPENSE' },
  { label: t('transaction.revenue'), value: 'REVENUE' },
]);

const paymentMethodOptions = computed(() => [
  { label: t('transaction.bankTransfer'), value: 'BANK_TRANSFER' },
  { label: t('transaction.cash'), value: 'CASH' },
  { label: t('transaction.creditCard'), value: 'CREDIT_CARD' },
]);

const statusOptions = computed(() => [
  { label: t('transaction.statusPaid'), value: 'PAID' },
  { label: t('transaction.statusPending'), value: 'PENDING' },
]);

const taxRateOptions = computed(() => [
  { label: t('transaction.noTax'), value: 'NONE' },
  { label: (t('transaction.taxRate')) + ' 8% (VN)', value: 'VAT_8_VN' },
  { label: (t('transaction.taxRate')) + ' 10% (VN)', value: 'VAT_10_VN' },
]);

const categoryOptions = computed(() => [
  { label: t('transaction.catSalary'), value: 'Salary' },
  { label: t('transaction.catOfficeRent'), value: 'Office Rent' },
  { label: t('transaction.catUtilities'), value: 'Utilities' },
  { label: t('transaction.catOutsourcing'), value: 'Outsourcing Cost' },
  { label: t('transaction.catSoftware'), value: 'Software & SaaS' },
  { label: t('transaction.catTravel'), value: 'Travel/Transport' },
  { label: t('transaction.catMarketing'), value: 'Marketing' },
  { label: t('transaction.catClientRevenue'), value: 'Client Revenue' },
  { label: t('transaction.catConsulting'), value: 'Consulting Fee' },
  { label: t('transaction.catOthers'), value: 'Others' },
]);

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

// Handle navigation back
const goBack = () => {
  navigateTo('/transaction');
};

// Handle form submission
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

  if (form.value.type === 'EXPENSE' && pendingFiles.value.length === 0) {
    showMessage('warning', t('transaction.valMissDocs'), t('transaction.valMissDocsDesc'));
    return;
  }

  submitting.value = true;
  
  const formatDate = (d: any) => { if (!d) return null; const dt = new Date(d); if (isNaN(dt.getTime())) return d; return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`; };
  const payload = {
    ...form.value,
    transaction_date: formatDate(form.value.transaction_date),
    invoice_registration_number: form.value.invoice_registration_number ? form.value.invoice_registration_number.toUpperCase() : null
  };

  CREATE_TRANSACTION(
    payload,
    (res: any) => {
      const createdTxn = res.data?.data || res.data;
      const txnId = createdTxn?.id;

      if (txnId && pendingFiles.value.length > 0) {
        uploadPendingFiles(txnId, () => {
          submitting.value = false;
          showMessage('success', t('transaction.msgSaveSuccess'), t('transaction.msgSaveSuccessDesc'));
          navigateTo('/transaction');
        });
      } else {
        submitting.value = false;
        showMessage('success', t('transaction.msgSaveSuccess'), t('transaction.msgSaveSuccessShort'));
        navigateTo('/transaction');
      }
    },
    (err: any) => {
      submitting.value = false;
      const msg = err.response?.data?.messages?.message || err.message || t('transaction.msgSaveFailedDesc');
      showMessage('error', t('transaction.msgSaveFailed'), msg);
    }
  );
};

const triggerPendingFileInput = () => {
  pendingFileInput.value?.click();
};

const onPendingFileSelected = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const allowedExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'png', 'jpg', 'jpeg'];
    const maxSize = 10 * 1024 * 1024;
    Array.from(target.files).forEach(file => {
      const ext = file.name.split('.').pop()?.toLowerCase() || '';
      if (!allowedExtensions.includes(ext)) {
        showMessage('error', t('transaction.msgFormatError'), t('transaction.msgFormatErrorDesc', { ext }));
        return;
      }
      if (file.size > maxSize) {
        showMessage('error', t('transaction.msgSizeError'), t('transaction.msgSizeErrorDesc', { name: file.name }));
        return;
      }
      pendingFiles.value.push(file);
    });
    target.value = '';
  }
};

const getPendingFileIcon = (file: File) => {
  const ext = file.name.split('.').pop()?.toLowerCase() || '';
  if (['doc', 'docx'].includes(ext)) return { icon: 'pi-file-word text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/20' };
  if (['xls', 'xlsx'].includes(ext)) return { icon: 'pi-file-excel text-green-500', bg: 'bg-green-50 dark:bg-green-950/20' };
  if (ext === 'pdf') return { icon: 'pi-file-pdf text-red-500', bg: 'bg-red-50 dark:bg-red-950/20' };
  if (['png', 'jpg', 'jpeg'].includes(ext)) return { icon: 'pi-image text-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/20' };
  return { icon: 'pi-file text-surface-500', bg: 'bg-surface-50 dark:bg-surface-850' };
};

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const uploadPendingFiles = (txnId: number, onComplete: () => void) => {
  let completed = 0;
  const total = pendingFiles.value.length;
  if (total === 0) { onComplete(); return; }

  pendingFiles.value.forEach(file => {
    UPLOAD_DOCUMENT(
      file,
      'Transaction',
      txnId,
      () => {
        completed++;
        if (completed >= total) onComplete();
      },
      (err: any) => {
        console.error('Lỗi tải tệp: ', file.name, err);
        completed++;
        if (completed >= total) onComplete();
      }
    );
  });
};

// AI OCR Handlers
const onOcrFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const files = target.files;
  if (!files || files.length === 0) return;

  const validFiles: File[] = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.size > 10 * 1024 * 1024) {
      showMessage('warn', t('transaction.ocrFileTooLarge'), t('transaction.ocrFileTooLargeDesc', { name: file.name }));
      return;
    }
    validFiles.push(file);
  }

  ocrLoading.value = true;
  const formData = new FormData();
  validFiles.forEach((file) => {
    formData.append('files[]', file);
  });
  formData.append('mode', 'transaction');

  analyzeFileOcr({
    data: formData,
    successCallback: (res: any) => {
      const data = res.data?.data || res.data;
      if (data) {
        // Map to form
        if (data.type) form.value.type = data.type;
        if (data.amount !== undefined && data.amount !== null) form.value.amount = Number(data.amount);
        if (data.tax_rate_type) form.value.tax_rate_type = data.tax_rate_type;
        
        // Auto-recalculate net and tax
        calculateTaxAndNet();

        if (data.invoice_registration_number) {
          form.value.invoice_registration_number = data.invoice_registration_number;
        }
        if (data.withholding_tax !== undefined && data.withholding_tax !== null) {
          form.value.withholding_tax = Number(data.withholding_tax);
        }
        if (data.payment_method) {
          form.value.payment_method = data.payment_method;
        }
        
        // Map category if match, otherwise search closest
        if (data.category) {
          const catValue = data.category.toLowerCase().replace(/\s+/g, '');
          const matched = categoryOptions.value.find(opt => 
            opt.value.toLowerCase().replace(/\s+/g, '') === catValue || 
            opt.label.toLowerCase().includes(data.category.toLowerCase())
          );
          if (matched) {
            form.value.category = matched.value;
          } else {
            form.value.category = 'Others';
          }
        }

        if (data.transaction_date) {
          form.value.transaction_date = new Date(data.transaction_date);
        }
        if (data.description) {
          form.value.description = data.description;
        }

        // Add the analyzed files to pendingFiles so they get saved as evidence
        validFiles.forEach(file => {
          const fileExists = pendingFiles.value.some(f => f.name === file.name && f.size === file.size);
          if (!fileExists) {
            pendingFiles.value.push(file);
          }
        });

        showMessage('success', t('transaction.ocrSuccessTitle'), t('transaction.ocrSuccessDesc'));
      } else {
        showMessage('error', t('transaction.ocrErrorTitle'), t('transaction.ocrErrorDesc'));
      }
    },
    errorCallback: (err: any) => {
      console.error('OCR Error:', err);
      const msg = err.response?.data?.messages?.[0] || err.response?.data?.message || t('transaction.ocrErrorDesc');
      showMessage('error', t('transaction.ocrErrorTitle'), msg);
    }
  }).finally(() => {
    ocrLoading.value = false;
    if (target) target.value = '';
  });
};
</script>
