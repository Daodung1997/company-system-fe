<template>
  <div class="w-full px-4 sm:px-6 lg:w-[80%] lg:mx-auto xl:w-[80%] 2xl:w-[75%] space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-10">
    <!-- Header (Premium Glass) -->
    <div class="z-30 flex items-center justify-between bg-white/80 dark:bg-surface-900/80 backdrop-blur-xl p-6 rounded-3xl border border-white dark:border-surface-800 shadow-xl shadow-surface-200/20">
      <div class="flex items-center gap-5">
        <div class="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 rotate-3 hover:rotate-0 transition-transform duration-500">
          <i class="pi pi-building text-white text-2xl"></i>
        </div>
        <div class="space-y-0.5">
          <h1 class="text-2xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ isEdit ? $t('company.editTitle') : $t('company.createTitle') }}
          </h1>
          <p class="text-[10px] text-surface-400 font-black uppercase tracking-[0.2em] flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            {{ isEdit ? $t('company.editDesc') + ' • ' + form.code : $t('company.createDesc') }}
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <Button
          :label="$t('btn.cancel')"
          icon="pi pi-times"
          severity="secondary"
          outlined
          class="!rounded-xl !px-5 !py-2.5 !font-bold !text-sm !min-w-[120px] !border-surface-200 dark:!border-surface-700 hover:!bg-surface-100 dark:hover:!bg-surface-800"
          @click="goBack"
        />
        <Button
          :label="$t('company.saveProfile')"
          :loading="isLoading"
          icon="pi pi-check"
          severity="primary"
          class="!rounded-xl !px-8 !py-2.5 !shadow-lg !shadow-primary/25 !font-black !text-sm tracking-tight transition-all hover:scale-105 !min-w-[160px]"
          @click="submitForm"
        />
      </div>
    </div>

    <!-- Form Content -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Left side: Form Groups -->
      <div class="col-span-12 lg:col-span-8 space-y-6">
        
        <!-- Section 1: Basic Corporate Profile -->
        <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 relative overflow-hidden group">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-1.5 h-6 bg-primary rounded-full"></div>
            <div>
              <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('company.basicInfo') }}</h3>
              <p class="text-xs text-surface-400">{{ $t('company.basicInfoDesc') }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AppInputField :label="$t('company.code')" idLabelFor="code">
              <div class="relative group">
                <i class="pi pi-id-card absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                <InputText
                  id="code"
                  v-model.trim="form.code"
                  class="w-full !rounded-xl !py-2.5 !pl-11 !bg-surface-50 dark:!bg-surface-800 border !border-surface-200 dark:!border-surface-800 !font-mono !font-bold !text-primary"
                  :disabled="true"
                  placeholder="Hệ thống tự động cấp phát"
                />
              </div>
            </AppInputField>

            <AppInputField :label="$t('company.status')">
              <AppRadioGroup
                v-model="form.status"
                :options="[
                  { label: $t('company.statusActive'), value: 'ACTIVE' },
                  { label: $t('company.statusInactive'), value: 'INACTIVE' }
                ]"
                name="companyStatus"
              />
            </AppInputField>

            <div class="md:col-span-2">
              <AppInputField
                :label="$t('company.name')"
                :isRequired="true"
                :error="form.errorName"
                idLabelFor="name"
              >
                <div class="relative group">
                  <i class="pi pi-building absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    id="name"
                    v-model.trim="form.name"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4 focus:ring-primary/10"
                    placeholder="Công ty TNHH Giải pháp Công nghệ"
                    :invalid="!!form.errorName"
                    @change="onValidate('name')"
                  />
                </div>
              </AppInputField>
            </div>

            <AppInputField
              :label="$t('company.nameKana')"
              :error="form.errorNameKana"
              idLabelFor="name_kana"
            >
              <div class="relative group">
                <i class="pi pi-language absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                <InputText
                  id="name_kana"
                  v-model.trim="form.name_kana"
                  class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                  placeholder="グエン・ヴァン・A"
                  :invalid="!!form.errorNameKana"
                  @change="onValidate('name_kana')"
                />
              </div>
            </AppInputField>

            <AppInputField
              :label="$t('company.legalRepresentative')"
              :error="form.errorLegalRepresentative"
              idLabelFor="legal_representative"
            >
              <div class="relative group">
                <i class="pi pi-user absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                <InputText
                  id="legal_representative"
                  v-model.trim="form.legal_representative"
                  class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                  placeholder="Nguyễn Văn A"
                  :invalid="!!form.errorLegalRepresentative"
                  @change="onValidate('legal_representative')"
                />
              </div>
            </AppInputField>
          </div>
        </section>

        <!-- Section 2: Tax & Legal Identifiers -->
        <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 relative overflow-hidden">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-1.5 h-6 bg-primary rounded-full"></div>
            <div>
              <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('company.taxSection') }}</h3>
              <p class="text-xs text-surface-400">{{ $t('company.taxSectionDesc') }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AppInputField
              :label="$t('company.taxCode')"
              :error="form.errorTaxCode"
              idLabelFor="tax_code"
            >
              <div class="relative group">
                <i class="pi pi-percentage absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                <InputText
                  id="tax_code"
                  v-model.trim="form.tax_code"
                  class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                  placeholder="0109283746"
                  :invalid="!!form.errorTaxCode"
                  @change="onValidate('tax_code')"
                />
              </div>
            </AppInputField>

            <AppInputField
              :label="$t('company.corporateNumber')"
              :error="form.errorCorporateNumber"
              idLabelFor="corporate_number"
            >
              <div class="relative group">
                <i class="pi pi-shield absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                <InputText
                  id="corporate_number"
                  v-model.trim="form.corporate_number"
                  class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                  placeholder="1234567890123"
                  :invalid="!!form.errorCorporateNumber"
                  @change="onValidate('corporate_number')"
                />
              </div>
            </AppInputField>
          </div>
        </section>

        <!-- Section 3: Contact Details -->
        <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 relative overflow-hidden">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-1.5 h-6 bg-primary rounded-full"></div>
            <div>
              <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('company.contactSection') }}</h3>
              <p class="text-xs text-surface-400">{{ $t('company.contactSectionDesc') }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-3">
              <AppInputField :label="$t('company.email')" :error="form.errorEmail">
                <div class="relative group">
                  <i class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    v-model.trim="form.email"
                    :invalid="!!form.errorEmail"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    placeholder="contact@company.com"
                    @change="onValidate('email')"
                  />
                </div>
              </AppInputField>
            </div>

            <div class="md:col-span-1.5">
              <AppInputField :label="$t('company.phone')" :error="form.errorPhone">
                <div class="relative group">
                  <i class="pi pi-phone absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <AppPhoneInput 
                    v-model.trim="form.phone_number" 
                    :invalid="!!form.errorPhone"
                    class="!pl-11 !bg-white dark:!bg-surface-900 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4" 
                    @change="onValidate('phone_number')"
                  />
                </div>
              </AppInputField>
            </div>

            <div class="md:col-span-1.5">
              <AppInputField :label="$t('company.fax')" :error="form.errorFax">
                <div class="relative group">
                  <i class="pi pi-print absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <AppPhoneInput 
                    v-model.trim="form.fax" 
                    :invalid="!!form.errorFax"
                    class="!pl-11 !bg-white dark:!bg-surface-900 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4" 
                    @change="onValidate('fax')"
                  />
                </div>
              </AppInputField>
            </div>
          </div>
        </section>

        <!-- Section 4: Address Details -->
        <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 relative overflow-hidden">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-1.5 h-6 bg-primary rounded-full"></div>
            <div>
              <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('company.addressSection') }}</h3>
              <p class="text-xs text-surface-400">{{ $t('company.addressSectionDesc') }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div class="md:col-span-4">
              <AppInputField
                :label="$t('company.postcode')"
                :error="form.errorPostcode"
                idLabelFor="postcode"
              >
                <AppPostcodeInput
                  id="postcode"
                  v-model.trim="form.postcode"
                  :invalid="!!form.errorPostcode"
                  @changePostcode="handlePostcodeChange"
                  @update:modelValue="onPostcodeUpdate"
                  class="!bg-white dark:!bg-surface-900 transition-all focus:!ring-4 focus:ring-primary/10"
                />
              </AppInputField>
            </div>

            <div class="md:col-span-8">
              <AppInputField
                :label="$t('company.address')"
                :error="form.errorAddress"
                idLabelFor="address"
              >
                <div class="relative group">
                  <i class="pi pi-map-marker absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    id="address"
                    v-model.trim="form.address"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    placeholder="Tòa nhà Keangnam, Mễ Trì, Nam Từ Liêm, Hà Nội"
                    :invalid="!!form.errorAddress"
                    @change="onValidate('address')"
                  />
                </div>
              </AppInputField>
            </div>

            <div class="md:col-span-12">
              <AppInputField
                :label="$t('company.addressRegistered')"
                :error="form.errorAddressRegistered"
                idLabelFor="address_registered"
              >
                <div class="relative group">
                  <i class="pi pi-map-marker absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    id="address_registered"
                    v-model.trim="form.address_registered"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    placeholder="Tầng 12, Tòa nhà Keangnam, Mễ Trì, Nam Từ Liêm, Hà Nội"
                    :invalid="!!form.errorAddressRegistered"
                    @change="onValidate('address_registered')"
                  />
                </div>
              </AppInputField>
            </div>
          </div>
        </section>
      </div>

      <!-- Right side: Notes Sidebar -->
      <div class="col-span-12 lg:col-span-4 h-full">
        <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 h-full flex flex-col group overflow-hidden relative">
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>

          <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase mb-6 relative z-10">{{ $t('company.noteSection') }}</h3>

          <AppInputField idLabelFor="note" class="flex-1 flex flex-col relative z-10">
            <Textarea
              id="note"
              v-model.trim="form.note"
              class="w-full flex-1 !rounded-xl !p-5 !bg-white dark:!bg-surface-900 border !border-surface-200 dark:!border-surface-800 !text-surface-900 dark:!text-surface-0 focus:!ring-4 focus:!ring-primary/10 transition-all !resize-none disabled:!bg-surface-100 dark:disabled:!bg-surface-800 min-h-[300px] lg:h-full"
              placeholder="Nhập các thông tin ghi chú đặc biệt về doanh nghiệp này..."
            />
          </AppInputField>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { onSearchAddressByPostcode } from "~/utils/getAddress";
import { validateOnAllField, validateOnField } from "~/utils/validate";
import { showMessage } from "~/utils/global";
import { useCompany } from "~/composables/master/company";
import { DEFAULT_FORM, FIELD_VALIDATIONS } from "~/pages/master/company/data";

const props = defineProps({
  id: { type: String, default: null }
});

const emit = defineEmits(['save-success']);

const router = useRouter();
const { t } = useI18n();
const { createCompany, updateCompany, getCompanyById } = useCompany() as any;

const form = reactive({ ...DEFAULT_FORM });
const isLoading = ref(false);
const isEdit = computed(() => !!props.id);

onMounted(() => {
  if (isEdit.value) {
    fetchCompany();
  }
});

const fetchCompany = () => {
  isLoading.value = true;
  getCompanyById({
    id: props.id,
    successCallback: (response: any) => {
      Object.assign(form, response.data?.data);
      isLoading.value = false;
    },
    errorCallback: (error: any) => {
      isLoading.value = false;
      showMessage("error", t("text.error"), error.message || t("text.errorMessage"));
    },
  });
};

const onValidate = (key: string) => {
  return validateOnField(key, form, form, FIELD_VALIDATIONS, t);
};

const handlePostcodeChange = (address: any) => {
  if (address) {
    const formattedAddress = `${address.prefecture}${address.city}${address.town}`;
    form.address = formattedAddress;
    if (!form.address_registered) {
      form.address_registered = formattedAddress;
    }
    onValidate("address");
  }
};

const onPostcodeUpdate = async (value: string) => {
  const rawPostcode = value.replace(/\D/g, "");
  if (rawPostcode.length === 7) {
    const address: any = await onSearchAddressByPostcode(rawPostcode, true);
    if (address) {
      const formattedAddress = `${address.prefecture}${address.city}${address.town}`;
      form.address = formattedAddress;
      if (!form.address_registered) {
        form.address_registered = formattedAddress;
      }
      onValidate("address");
    }
  }
};

const goBack = () => router.push("/master/company");

const submitForm = () => {
  if (isLoading.value) return;
  const isValid = validateOnAllField(form, form, FIELD_VALIDATIONS, t);
  if (!isValid) return;

  isLoading.value = true;
  const submitData = { ...form };

  // Remove validation fields
  Object.keys(submitData).forEach((k: string) => {
    if (k.startsWith('error')) {
      delete (submitData as any)[k];
    }
  });

  const callback = {
    successCallback: () => {
      isLoading.value = false;
      showMessage("success", t("text.success"), isEdit.value ? t("text.udSuccess") : t("text.addSuccess"));
      emit('save-success');
    },
    errorCallback: (error: any) => {
      isLoading.value = false;
      showMessage("error", t("text.error"), error.message || t("text.errorMessage"));
    },
  };

  if (isEdit.value) {
    updateCompany({ id: props.id as string, data: submitData, ...callback });
  } else {
    createCompany({ data: submitData, ...callback });
  }
};
</script>
