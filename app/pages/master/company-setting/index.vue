<template>
  <div class="w-full px-4 sm:px-6 space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-10">
    <!-- Header (Premium Glass) -->
    <div class="z-30 flex flex-col sm:flex-row sm:items-center justify-between bg-white dark:bg-surface-900  p-6 rounded-xl border border-surface-200 dark:border-surface-700 shadow-md gap-4">
      <div class="flex items-center gap-5">
        <div class="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 rotate-3 hover:rotate-0 transition-transform duration-500">
          <i class="pi pi-cog text-white text-2xl animate-spin-slow"></i>
        </div>
        <div class="space-y-0.5">
          <h1 class="text-2xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ $t('menu.companySetting') }}
          </h1>
          <p class="text-[10px] text-surface-400 font-black uppercase tracking-[0.2em] flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            {{ $t('companySetting.desc') }}
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3 self-end sm:self-auto">
        <Button
          :label="$t('btn.cancel')"
          icon="pi pi-times"
          severity="secondary"
          outlined
          class="!rounded-xl !px-5 !py-2.5 !font-bold !text-sm !min-w-[120px] !border-surface-200 dark:!border-surface-700 hover:!bg-surface-100 dark:hover:!bg-surface-800"
          @click="goBack"
        />
        <Button
          :label="$t('btn.save')"
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
      <!-- Left side: Form Groups (8 cols) -->
      <div class="col-span-12 lg:col-span-8 space-y-6">
        
        <!-- Section 1: Basic Corporate Profile -->
        <section class="bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm relative overflow-hidden group">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-1.5 h-6 bg-primary rounded-full"></div>
            <div>
              <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('companySetting.basicSectionTitle') }}</h3>
              <p class="text-xs text-surface-400">{{ $t('companySetting.basicSectionDesc') }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="md:col-span-2">
              <AppInputField
                :label="$t('company.name')"
                :isRequired="true"
                :error="formErrors.company_name"
                idLabelFor="company_name"
              >
                <div class="relative group">
                  <i class="pi pi-building absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    id="company_name"
                    v-model.trim="form.company_name"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4 focus:ring-primary/10"
                    :placeholder="$t('companySetting.namePlaceholder')"
                    :invalid="!!formErrors.company_name"
                    @change="onValidate('company_name')"
                  />
                </div>
              </AppInputField>
            </div>

            <AppInputField
              :label="$t('companySetting.nameKana')"
              :error="formErrors.company_name_kana"
              idLabelFor="company_name_kana"
            >
              <div class="relative group">
                <i class="pi pi-language absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                <InputText
                  id="company_name_kana"
                  v-model.trim="form.company_name_kana"
                  class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                  placeholder="TECH SOLUTIONS JSC"
                  :invalid="!!formErrors.company_name_kana"
                />
              </div>
            </AppInputField>

            <AppInputField
              :label="$t('companySetting.capital')"
              :error="formErrors.charter_capital"
              idLabelFor="charter_capital"
            >
              <div class="relative group">
                <i class="pi pi-money-bill absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                <InputText
                  id="charter_capital"
                  v-model.trim="form.charter_capital"
                  class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                  :placeholder="$t('companySetting.capitalPlaceholder')"
                  :invalid="!!formErrors.charter_capital"
                />
              </div>
            </AppInputField>

            <AppInputField
              :label="$t('company.taxCode')"
              :error="formErrors.tax_code"
              idLabelFor="tax_code"
            >
              <div class="relative group">
                <i class="pi pi-percentage absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                <InputText
                  id="tax_code"
                  v-model.trim="form.tax_code"
                  class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                  placeholder="0109283746"
                  :invalid="!!formErrors.tax_code"
                />
              </div>
            </AppInputField>

            <AppInputField
              :label="$t('company.corporateNumber')"
              :error="formErrors.corporate_number"
              idLabelFor="corporate_number"
            >
              <div class="relative group">
                <i class="pi pi-shield absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                <InputText
                  id="corporate_number"
                  v-model.trim="form.corporate_number"
                  class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                  :placeholder="$t('companySetting.corporatePlaceholder')"
                  :invalid="!!formErrors.corporate_number"
                />
              </div>
            </AppInputField>
          </div>
        </section>

        <!-- Section 2: Legal Representative Info -->
        <section class="bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm relative overflow-hidden">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-1.5 h-6 bg-primary rounded-full"></div>
            <div>
              <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('companySetting.legalTitle') }}</h3>
              <p class="text-xs text-surface-400">{{ $t('companySetting.legalDesc') }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AppInputField
              :label="$t('company.legalRepresentative')"
              :error="formErrors.legal_representative"
              idLabelFor="legal_representative"
            >
              <div class="relative group">
                <i class="pi pi-user absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                <InputText
                  id="legal_representative"
                  v-model.trim="form.legal_representative"
                  class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                  :placeholder="$t('companySetting.repPlaceholder')"
                  :invalid="!!formErrors.legal_representative"
                />
              </div>
            </AppInputField>

            <AppInputField
              :label="$t('companySetting.repTitle')"
              :error="formErrors.representative_title"
              idLabelFor="representative_title"
            >
              <div class="relative group">
                <i class="pi pi-briefcase absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                <InputText
                  id="representative_title"
                  v-model.trim="form.representative_title"
                  class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                  :placeholder="$t('companySetting.repTitlePlaceholder')"
                  :invalid="!!formErrors.representative_title"
                />
              </div>
            </AppInputField>

            <AppInputField
              :label="$t('companySetting.repIdNumber')"
              :error="formErrors.representative_id_number"
              idLabelFor="representative_id_number"
            >
              <div class="relative group">
                <i class="pi pi-id-card absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                <InputText
                  id="representative_id_number"
                  v-model.trim="form.representative_id_number"
                  class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                  placeholder="001092837465"
                  :invalid="!!formErrors.representative_id_number"
                />
              </div>
            </AppInputField>

            <AppInputField
              :label="$t('companySetting.repIdDate')"
              :error="formErrors.representative_id_date"
            >
              <DatePickerCommon
                v-model="form.representative_id_date"
                :invalid="!!formErrors.representative_id_date"
              />
            </AppInputField>

            <div class="md:col-span-2">
              <AppInputField
                :label="$t('companySetting.repIdPlace')"
                :error="formErrors.representative_id_place"
                idLabelFor="representative_id_place"
              >
                <div class="relative group">
                  <i class="pi pi-map absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    id="representative_id_place"
                    v-model.trim="form.representative_id_place"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    :placeholder="$t('companySetting.repIdPlacePlaceholder')"
                    :invalid="!!formErrors.representative_id_place"
                  />
                </div>
              </AppInputField>
            </div>
          </div>
        </section>

        <!-- Section 3: Contact & Address Details -->
        <section class="bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm relative overflow-hidden">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-1.5 h-6 bg-primary rounded-full"></div>
            <div>
              <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('companySetting.contactTitle') }}</h3>
              <p class="text-xs text-surface-400">{{ $t('companySetting.contactDesc') }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div class="md:col-span-6">
              <AppInputField :label="$t('company.email')" :error="formErrors.email">
                <div class="relative group">
                  <i class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    v-model.trim="form.email"
                    :invalid="!!formErrors.email"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    placeholder="contact@company.com"
                  />
                </div>
              </AppInputField>
            </div>

            <div class="md:col-span-6">
              <AppInputField :label="$t('companySetting.website')" :error="formErrors.website">
                <div class="relative group">
                  <i class="pi pi-globe absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    v-model.trim="form.website"
                    :invalid="!!formErrors.website"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    placeholder="https://company.com"
                  />
                </div>
              </AppInputField>
            </div>

            <div class="md:col-span-6">
              <AppInputField :label="$t('company.phone')" :error="formErrors.phone_number">
                <div class="relative group">
                  <i class="pi pi-phone absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <AppPhoneInput 
                    v-model.trim="form.phone_number" 
                    :invalid="!!formErrors.phone_number"
                    class="!pl-11 !bg-white dark:!bg-surface-900 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4" 
                  />
                </div>
              </AppInputField>
            </div>

            <div class="md:col-span-6">
              <AppInputField :label="$t('company.fax')" :error="formErrors.fax">
                <div class="relative group">
                  <i class="pi pi-print absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <AppPhoneInput 
                    v-model.trim="form.fax" 
                    :invalid="!!formErrors.fax"
                    class="!pl-11 !bg-white dark:!bg-surface-900 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4" 
                  />
                </div>
              </AppInputField>
            </div>

            <div class="md:col-span-4">
              <AppInputField
                :label="$t('company.postcode')"
                :error="formErrors.postcode"
                idLabelFor="postcode"
              >
                <AppPostcodeInput
                  id="postcode"
                  v-model.trim="form.postcode"
                  :invalid="!!formErrors.postcode"
                  @changePostcode="handlePostcodeChange"
                  @update:modelValue="onPostcodeUpdate"
                  class="!bg-white dark:!bg-surface-900 transition-all focus:!ring-4 focus:ring-primary/10"
                />
              </AppInputField>
            </div>

            <div class="md:col-span-8">
              <AppInputField
                :label="$t('company.address')"
                :error="formErrors.address"
                idLabelFor="address"
              >
                <div class="relative group">
                  <i class="pi pi-map-marker absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    id="address"
                    v-model.trim="form.address"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    :placeholder="$t('companySetting.addressPlaceholder')"
                    :invalid="!!formErrors.address"
                  />
                </div>
              </AppInputField>
            </div>

            <div class="md:col-span-12">
              <AppInputField
                :label="$t('company.addressRegistered')"
                :error="formErrors.address_registered"
                idLabelFor="address_registered"
              >
                <div class="relative group">
                  <i class="pi pi-map-marker absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    id="address_registered"
                    v-model.trim="form.address_registered"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    :placeholder="$t('companySetting.addressRegisteredPlaceholder')"
                    :invalid="!!formErrors.address_registered"
                  />
                </div>
              </AppInputField>
            </div>
          </div>
        </section>

        <!-- Section 4: Custom Branding & Theme -->
        <section class="bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm relative overflow-hidden">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-1.5 h-6 bg-primary rounded-full"></div>
            <div>
              <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('companySetting.brandingTitle') }}</h3>
              <p class="text-xs text-surface-400">{{ $t('companySetting.brandingDesc') }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Sidebar Name & Sub Name -->
            <div class="md:col-span-1">
              <AppInputField
                :label="$t('companySetting.sidebarName')"
                :error="formErrors.sidebar_name"
                idLabelFor="sidebar_name"
              >
                <div class="relative group">
                  <i class="pi pi-bookmark absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    id="sidebar_name"
                    v-model.trim="form.sidebar_name"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    placeholder="Tech Solutions"
                  />
                </div>
              </AppInputField>
            </div>

            <div class="md:col-span-1">
              <AppInputField
                :label="$t('companySetting.sidebarSubName')"
                :error="formErrors.sidebar_sub_name"
                idLabelFor="sidebar_sub_name"
              >
                <div class="relative group">
                  <i class="pi pi-bookmark-fill absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    id="sidebar_sub_name"
                    v-model.trim="form.sidebar_sub_name"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    :placeholder="$t('companySetting.sidebarSubPlaceholder')"
                  />
                </div>
              </AppInputField>
            </div>

            <!-- Logo Upload -->
            <div class="flex flex-col gap-2">
              <label class="text-sm font-bold text-surface-700 dark:text-surface-300">{{ $t('companySetting.logoLabel') }}</label>
              <div class="flex items-center gap-4 p-4 border border-surface-200 dark:border-surface-800 rounded-2xl bg-surface-50/50 dark:bg-surface-950/20">
                <div class="w-16 h-16 rounded-xl border border-surface-200 dark:border-surface-800 flex items-center justify-center overflow-hidden bg-white dark:bg-surface-900 shrink-0">
                  <img v-if="form.logo_path" :src="form.logo_path" class="w-full h-full object-contain" />
                  <i v-else class="pi pi-image text-2xl text-surface-400"></i>
                </div>
                <div class="flex-1 space-y-2">
                  <input type="file" ref="logoInput" class="hidden" accept="image/*" @change="onLogoSelected" />
                  <div class="flex items-center gap-2">
                    <Button
                      :label="$t('btn.upload')"
                      icon="pi pi-upload"
                      severity="secondary"
                      outlined
                      class="!rounded-xl !text-xs !py-2 !px-3"
                      :loading="isUploadingLogo"
                      @click="logoInput?.click()"
                    />
                    <Button
                      v-if="form.logo_path"
                      :label="$t('btn.delete')"
                      icon="pi pi-trash"
                      severity="danger"
                      outlined
                      class="!rounded-xl !text-xs !py-2 !px-3"
                      @click="form.logo_path = ''"
                    />
                  </div>
                  <p class="text-[10px] text-surface-400 leading-normal">{{ $t('companySetting.logoAccept') }}</p>
                </div>
              </div>
            </div>

            <!-- Background Upload -->
            <div class="flex flex-col gap-2">
              <label class="text-sm font-bold text-surface-700 dark:text-surface-300">{{ $t('companySetting.loginBgLabel') }}</label>
              <div class="flex items-center gap-4 p-4 border border-surface-200 dark:border-surface-800 rounded-2xl bg-surface-50/50 dark:bg-surface-950/20">
                <div class="w-16 h-16 rounded-xl border border-surface-200 dark:border-surface-800 flex items-center justify-center overflow-hidden bg-white dark:bg-surface-900 shrink-0">
                  <img v-if="form.background_path" :src="form.background_path" class="w-full h-full object-cover" />
                  <i v-else class="pi pi-image text-2xl text-surface-400"></i>
                </div>
                <div class="flex-1 space-y-2">
                  <input type="file" ref="bgInput" class="hidden" accept="image/*" @change="onBgSelected" />
                  <div class="flex items-center gap-2">
                    <Button
                      :label="$t('btn.upload')"
                      icon="pi pi-upload"
                      severity="secondary"
                      outlined
                      class="!rounded-xl !text-xs !py-2 !px-3"
                      :loading="isUploadingBg"
                      @click="bgInput?.click()"
                    />
                    <Button
                      v-if="form.background_path"
                      :label="$t('btn.delete')"
                      icon="pi pi-trash"
                      severity="danger"
                      outlined
                      class="!rounded-xl !text-xs !py-2 !px-3"
                      @click="form.background_path = ''"
                    />
                  </div>
                  <p class="text-[10px] text-surface-400 leading-normal">{{ $t('companySetting.loginBgAccept') }}</p>
                </div>
              </div>
            </div>

            <!-- Slogan 1 -->
            <div class="md:col-span-2">
              <AppInputField
                :label="$t('companySetting.slogan1')"
                :error="formErrors.slogan_1"
                idLabelFor="slogan_1"
              >
                <div class="relative group">
                  <i class="pi pi-sparkles absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    id="slogan_1"
                    v-model.trim="form.slogan_1"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    :placeholder="$t('companySetting.slogan1Placeholder')"
                  />
                </div>
              </AppInputField>
            </div>

            <!-- Slogan 2 -->
            <div class="md:col-span-2">
              <AppInputField
                :label="$t('companySetting.slogan2')"
                :error="formErrors.slogan_2"
                idLabelFor="slogan_2"
              >
                <div class="relative group">
                  <i class="pi pi-sparkles absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    id="slogan_2"
                    v-model.trim="form.slogan_2"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    :placeholder="$t('companySetting.slogan2Placeholder')"
                  />
                </div>
              </AppInputField>
            </div>

            <!-- Slogan 3 -->
            <div class="md:col-span-2">
              <AppInputField
                :label="$t('companySetting.slogan3')"
                :error="formErrors.slogan_3"
                idLabelFor="slogan_3"
              >
                <div class="relative group">
                  <i class="pi pi-sparkles absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    id="slogan_3"
                    v-model.trim="form.slogan_3"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    :placeholder="$t('companySetting.slogan3Placeholder')"
                  />
                </div>
              </AppInputField>
            </div>
          </div>
        </section>

        <!-- Section 5: Cấu hình Website Doanh nghiệp -->
        <section class="bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm relative overflow-hidden">
          <div class="flex items-center gap-3 mb-8 justify-between flex-wrap gap-y-4">
            <div class="flex items-center gap-3">
              <div class="w-1.5 h-6 bg-primary rounded-full"></div>
              <div>
                <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('companySetting.landingTitle') }}</h3>
                <p class="text-xs text-surface-400">{{ $t('companySetting.landingDescText') }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <Button
                v-if="!form.has_website"
                :label="$t('companySetting.loadMockupBtn')"
                icon="pi pi-sparkles"
                severity="secondary"
                outlined
                class="!rounded-xl !text-xs !py-2 !px-3 hover:!bg-primary/5 hover:!text-primary hover:!border-primary/30"
                @click="loadMockupData"
              />
              <Button
                :label="$t('companySetting.previewLandingBtn')"
                icon="pi pi-eye"
                severity="info"
                outlined
                class="!rounded-xl !text-xs !py-2 !px-3 !border-sky-500/30 hover:!bg-sky-50 dark:hover:!bg-sky-950/20 text-sky-600 dark:text-sky-400"
                @click="previewLanding"
              />
            </div>
          </div>

          <!-- Website Option Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div 
              @click="form.has_website = true"
              :class="[
                'p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex items-start gap-4 relative overflow-hidden select-none',
                form.has_website 
                  ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-md' 
                  : 'border-surface-200 dark:border-surface-800 hover:border-surface-300 dark:hover:border-surface-700 bg-surface-50/20 dark:bg-surface-950/10'
              ]"
            >
              <div :class="['w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-colors', form.has_website ? 'bg-primary text-white' : 'bg-surface-100 dark:bg-surface-800 text-surface-500']">
                <i class="pi pi-globe"></i>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-bold text-surface-900 dark:text-surface-0 mb-1">
                  {{ $t('companySetting.websiteOptionExternal') }}
                </h4>
                <p class="text-xs text-surface-400 leading-relaxed">
                  {{ $t('companySetting.websiteUrlPlaceholder') }}
                </p>
              </div>
              <div v-if="form.has_website" class="absolute top-2 right-2 text-primary">
                <i class="pi pi-check-circle text-lg"></i>
              </div>
            </div>

            <div 
              @click="form.has_website = false"
              :class="[
                'p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex items-start gap-4 relative overflow-hidden select-none',
                !form.has_website 
                  ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-md' 
                  : 'border-surface-200 dark:border-surface-800 hover:border-surface-300 dark:hover:border-surface-700 bg-surface-50/20 dark:bg-surface-950/10'
              ]"
            >
              <div :class="['w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-colors', !form.has_website ? 'bg-primary text-white' : 'bg-surface-100 dark:bg-surface-800 text-surface-500']">
                <i class="pi pi-palette"></i>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-bold text-surface-900 dark:text-surface-0 mb-1">
                  {{ $t('companySetting.websiteOptionInternal') }}
                </h4>
                <p class="text-xs text-surface-400 leading-relaxed">
                  {{ $t('companySetting.landingStyleLabel') }}
                </p>
              </div>
              <div v-if="!form.has_website" class="absolute top-2 right-2 text-primary">
                <i class="pi pi-check-circle text-lg"></i>
              </div>
            </div>
          </div>

          <!-- Option 1 Fields: External Website URL -->
          <div v-if="form.has_website" class="grid grid-cols-1 gap-6">
            <div class="md:col-span-1">
              <AppInputField
                :label="$t('companySetting.websiteUrlLabel')"
                :error="formErrors.website"
                idLabelFor="website_url_field"
              >
                <div class="relative group">
                  <i class="pi pi-globe absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    id="website_url_field"
                    v-model.trim="form.website"
                    class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    :placeholder="$t('companySetting.websiteUrlPlaceholder')"
                    :invalid="!!formErrors.website"
                  />
                </div>
              </AppInputField>
            </div>
          </div>

          <!-- Option 2 Fields: Built-in Landing Page Customization -->
          <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Landing Style Option -->
            <AppInputField :label="$t('companySetting.landingStyleLabel')">
              <Select
                v-model="form.landing_style"
                :options="[
                  { label: $t('companySetting.style1Label'), value: 'style1' },
                  { label: $t('companySetting.style2Label'), value: 'style2' },
                  { label: $t('companySetting.style3Label'), value: 'style3' },
                  { label: $t('companySetting.style4Label'), value: 'style4' },
                  { label: $t('companySetting.style5Label'), value: 'style5' }
                ]"
                optionLabel="label"
                optionValue="value"
                class="w-full !rounded-xl"
              />
            </AppInputField>

            <!-- Business Field -->
            <AppInputField :label="$t('companySetting.businessFieldLabel')">
              <Select
                v-model="form.business_field"
                :options="[
                  { label: $t('companySetting.fieldIt'), value: 'IT' },
                  { label: $t('companySetting.fieldFinance'), value: 'FINANCE' },
                  { label: $t('companySetting.fieldManufacturing'), value: 'MANUFACTURING' },
                  { label: $t('companySetting.fieldLegal'), value: 'LEGAL' },
                  { label: $t('companySetting.fieldServices'), value: 'SERVICES' }
                ]"
                optionLabel="label"
                optionValue="value"
                class="w-full !rounded-xl"
              />
            </AppInputField>

            <!-- About us -->
            <div class="md:col-span-2">
              <AppInputField :label="$t('companySetting.aboutUsLabel')">
                <Textarea
                  v-model="form.about_us"
                  rows="4"
                  class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                  :placeholder="$t('companySetting.aboutUsPlaceholder')"
                />
              </AppInputField>
            </div>

            <!-- Services List -->
            <div class="md:col-span-2">
              <AppInputField :label="$t('companySetting.servicesListLabel')">
                <Textarea
                  v-model="form.services_list"
                  rows="4"
                  class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                  :placeholder="$t('companySetting.servicesListPlaceholder')"
                />
              </AppInputField>
            </div>

            <!-- Image & Slide Configuration -->
            <div class="md:col-span-2 border-t border-surface-200 dark:border-surface-800 pt-6 mt-2 space-y-6">
              <h4 class="text-sm font-bold text-surface-900 dark:text-surface-0">{{ $t('companySetting.bannerDesignTitle') }}</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <!-- Slide Image 1 -->
                <div class="space-y-2">
                  <span class="text-xs font-bold text-surface-400">{{ $t('companySetting.slide1Label') }}</span>
                  <div class="relative w-full h-32 rounded-xl border-2 border-dashed border-surface-250 dark:border-surface-700 flex flex-col items-center justify-center overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer" @click="slide1Input?.click()">
                    <img v-if="form.slide_image_1" :src="form.slide_image_1" class="w-full h-full object-cover" />
                    <div v-else class="flex flex-col items-center gap-2 text-surface-400">
                      <i class="pi pi-image text-xl"></i>
                      <span class="text-[10px]">{{ $t('companySetting.uploadSlide1') }}</span>
                    </div>
                    <div v-if="isUploadingSlide1" class="absolute inset-0 bg-surface-900/50 flex items-center justify-center text-white text-xs">
                      <i class="pi pi-spin pi-spinner text-lg"></i>
                    </div>
                    <input type="file" ref="slide1Input" class="hidden" accept="image/*" @change="onSlide1Selected" />
                  </div>
                </div>

                <!-- Slide Image 2 -->
                <div class="space-y-2">
                  <span class="text-xs font-bold text-surface-400">{{ $t('companySetting.slide2Label') }}</span>
                  <div class="relative w-full h-32 rounded-xl border-2 border-dashed border-surface-250 dark:border-surface-700 flex flex-col items-center justify-center overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer" @click="slide2Input?.click()">
                    <img v-if="form.slide_image_2" :src="form.slide_image_2" class="w-full h-full object-cover" />
                    <div v-else class="flex flex-col items-center gap-2 text-surface-400">
                      <i class="pi pi-image text-xl"></i>
                      <span class="text-[10px]">{{ $t('companySetting.uploadSlide2') }}</span>
                    </div>
                    <div v-if="isUploadingSlide2" class="absolute inset-0 bg-surface-900/50 flex items-center justify-center text-white text-xs">
                      <i class="pi pi-spin pi-spinner text-lg"></i>
                    </div>
                    <input type="file" ref="slide2Input" class="hidden" accept="image/*" @change="onSlide2Selected" />
                  </div>
                </div>

                <!-- Slide Image 3 -->
                <div class="space-y-2">
                  <span class="text-xs font-bold text-surface-400">{{ $t('companySetting.slide3Label') }}</span>
                  <div class="relative w-full h-32 rounded-xl border-2 border-dashed border-surface-250 dark:border-surface-700 flex flex-col items-center justify-center overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer" @click="slide3Input?.click()">
                    <img v-if="form.slide_image_3" :src="form.slide_image_3" class="w-full h-full object-cover" />
                    <div v-else class="flex flex-col items-center gap-2 text-surface-400">
                      <i class="pi pi-image text-xl"></i>
                      <span class="text-[10px]">{{ $t('companySetting.uploadSlide3') }}</span>
                    </div>
                    <div v-if="isUploadingSlide3" class="absolute inset-0 bg-surface-900/50 flex items-center justify-center text-white text-xs">
                      <i class="pi pi-spin pi-spinner text-lg"></i>
                    </div>
                    <input type="file" ref="slide3Input" class="hidden" accept="image/*" @change="onSlide3Selected" />
                  </div>
                </div>

                <!-- About Us Image -->
                <div class="space-y-2">
                  <span class="text-xs font-bold text-surface-400">{{ $t('companySetting.aboutImgLabel') }}</span>
                  <div class="relative w-full h-32 rounded-xl border-2 border-dashed border-surface-250 dark:border-surface-700 flex flex-col items-center justify-center overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer" @click="aboutImgInput?.click()">
                    <img v-if="form.about_image_path" :src="form.about_image_path" class="w-full h-full object-cover" />
                    <div v-else class="flex flex-col items-center gap-2 text-surface-400">
                      <i class="pi pi-image text-xl"></i>
                      <span class="text-[10px]">{{ $t('companySetting.uploadAboutImg') }}</span>
                    </div>
                    <div v-if="isUploadingAboutImg" class="absolute inset-0 bg-surface-900/50 flex items-center justify-center text-white text-xs">
                      <i class="pi pi-spin pi-spinner text-lg"></i>
                    </div>
                    <input type="file" ref="aboutImgInput" class="hidden" accept="image/*" @change="onAboutImgSelected" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 6: Cấu hình Trí tuệ nhân tạo (AI Gemini) -->
        <section class="bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm relative overflow-hidden group">
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
          
          <div class="flex items-center gap-3 mb-8 relative z-10">
            <div class="w-1.5 h-6 bg-primary rounded-full"></div>
            <div>
              <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">Cấu hình Trí tuệ nhân tạo (AI Gemini)</h3>
              <p class="text-xs text-surface-400 font-medium">Cấu hình API Key để sử dụng tính năng đọc và phân tích tự động dữ liệu từ file PDF, Excel bằng trí tuệ nhân tạo.</p>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6 relative z-10">
            <div class="col-span-1">
              <AppInputField
                label="Gemini API Key"
                :error="formErrors.gemini_api_key"
                idLabelFor="gemini_api_key_field"
              >
                <div class="relative group">
                  <i class="pi pi-key absolute left-4 top-[1.1rem] text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <Password
                    id="gemini_api_key_field"
                    v-model="form.gemini_api_key"
                    :feedback="false"
                    toggleMask
                    class="w-full"
                    inputClass="w-full !rounded-xl !py-3.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4"
                    placeholder="Nhập API Key của Google Gemini"
                  />
                </div>
                <p class="text-[10px] text-surface-400 mt-1">
                  API Key này được sử dụng trên máy chủ để gọi các mô hình Gemini OCR nhằm phân tích hồ sơ và hợp đồng tự động.
                </p>
              </AppInputField>
            </div>
          </div>
        </section>
      </div>

      <!-- Right side: Hanko Seal / Special Notes Sidebar (4 cols) -->
      <div class="col-span-12 lg:col-span-4 space-y-6">
        <!-- Compliance Badge Info -->
        <section class="bg-gradient-to-br from-primary/10 to-surface-50 dark:from-surface-900/50 dark:to-surface-950 p-8 rounded-xl border border-primary/20 dark:border-surface-800 space-y-4">
          <div class="compliance-badge flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <i class="pi pi-shield animate-pulse"></i>
            <span class="text-[10px] font-black uppercase tracking-widest">{{ $t('companySetting.complianceBadge') }}</span>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-black text-surface-900 dark:text-surface-150">{{ $t('companySetting.defaultContractTitle') }}</h3>
            <p class="text-xs text-surface-500 leading-relaxed">
              {{ $t('companySetting.defaultContractDesc') }}
            </p>
          </div>
        </section>
      </div>
    </div>

    <!-- Bottom Actions Card -->
    <div class="flex items-center justify-end bg-white dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 shadow-md gap-3">
      <Button
        :label="$t('btn.cancel')"
        icon="pi pi-times"
        severity="secondary"
        outlined
        class="!rounded-xl !px-5 !py-2.5 !font-bold !text-sm !min-w-[120px] !border-surface-200 dark:!border-surface-700 hover:!bg-surface-100 dark:hover:!bg-surface-800"
        @click="goBack"
      />
      <Button
        :label="$t('btn.save')"
        :loading="isLoading"
        icon="pi pi-check"
        severity="primary"
        class="!rounded-xl !px-8 !py-2.5 !shadow-lg !shadow-primary/25 !font-black !text-sm tracking-tight transition-all hover:scale-105 !min-w-[160px]"
        @click="submitForm"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useCompanySetting } from "~/composables/master/companySetting";
import { onSearchAddressByPostcode } from "~/utils/getAddress";
import { showMessage } from "~/utils/global";
import { validateOnAllField, validateOnField } from "~/utils/validate";
import { UPLOAD_DOCUMENT } from "~/apis/document";
import { useApiStore } from "@/stores/api";

const router = useRouter();
const { t } = useI18n();
const { getCompanySetting, updateCompanySetting } = useCompanySetting();
const apiStore = useApiStore();

const isLoading = ref(false);
const isUploadingLogo = ref(false);
const isUploadingBg = ref(false);
const isUploadingSlide1 = ref(false);
const isUploadingSlide2 = ref(false);
const isUploadingSlide3 = ref(false);
const isUploadingAboutImg = ref(false);

const logoInput = ref<HTMLInputElement | null>(null);
const bgInput = ref<HTMLInputElement | null>(null);
const slide1Input = ref<HTMLInputElement | null>(null);
const slide2Input = ref<HTMLInputElement | null>(null);
const slide3Input = ref<HTMLInputElement | null>(null);
const aboutImgInput = ref<HTMLInputElement | null>(null);

// Form State
const form = reactive({
  company_name: "",
  company_name_kana: "",
  tax_code: "",
  corporate_number: "",
  address_registered: "",
  legal_representative: "",
  representative_title: "",
  representative_id_number: "",
  representative_id_date: null as Date | string | null,
  representative_id_place: "",
  charter_capital: "",
  phone_number: "",
  email: "",
  fax: "",
  postcode: "",
  address: "",
  website: "",
  logo_path: "",
  background_path: "",
  sidebar_name: "",
  sidebar_sub_name: "",
  slogan_1: "",
  slogan_2: "",
  slogan_3: "",
  landing_style: "style1",
  business_field: "IT",
  about_us: "",
  services_list: "",
  slide_image_1: "",
  slide_image_2: "",
  slide_image_3: "",
  about_image_path: "",
  has_website: false,
  gemini_api_key: "",
});

// Validation rules schema
const FIELD_VALIDATIONS = {
  company_name: { transitionKey: "company.name", types: ["require"], errorKey: "company_name" },
};

const formErrors = reactive({
  company_name: "",
  company_name_kana: "",
  tax_code: "",
  corporate_number: "",
  address_registered: "",
  legal_representative: "",
  representative_title: "",
  representative_id_number: "",
  representative_id_date: "",
  representative_id_place: "",
  charter_capital: "",
  phone_number: "",
  email: "",
  fax: "",
  postcode: "",
  address: "",
  website: "",
  logo_path: "",
  background_path: "",
  sidebar_name: "",
  sidebar_sub_name: "",
  slogan_1: "",
  slogan_2: "",
  slogan_3: "",
  landing_style: "",
  business_field: "",
  about_us: "",
  services_list: "",
  slide_image_1: "",
  slide_image_2: "",
  slide_image_3: "",
  about_image_path: "",
  has_website: "",
  gemini_api_key: "",
});

const onLogoSelected = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    isUploadingLogo.value = true;
    UPLOAD_DOCUMENT(
      file,
      "company_settings",
      1,
      (res: any) => {
        isUploadingLogo.value = false;
        const url = res.data?.data?.url || res.data?.url;
        if (url) {
          form.logo_path = url;
          showMessage("success", t("text.success"), t("companySetting.uploadLogoSuccess"));
        }
      },
      (err: any) => {
        isUploadingLogo.value = false;
        showMessage("error", t("text.error"), t("companySetting.uploadLogoError"));
      }
    );
  }
};

const onBgSelected = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    isUploadingBg.value = true;
    UPLOAD_DOCUMENT(
      file,
      "company_settings",
      1,
      (res: any) => {
        isUploadingBg.value = false;
        const url = res.data?.data?.url || res.data?.url;
        if (url) {
          form.background_path = url;
          showMessage("success", t("text.success"), t("companySetting.uploadBgSuccess"));
        }
      },
      (err: any) => {
        isUploadingBg.value = false;
        showMessage("error", t("text.error"), t("companySetting.uploadBgError"));
      }
    );
  }
};

const onSlide1Selected = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    isUploadingSlide1.value = true;
    UPLOAD_DOCUMENT(
      file,
      "company_settings",
      1,
      (res: any) => {
        isUploadingSlide1.value = false;
        const url = res.data?.data?.url || res.data?.url;
        if (url) {
          form.slide_image_1 = url;
          showMessage("success", t("text.success"), "Tải lên ảnh Slide 1 thành công");
        }
      },
      (err: any) => {
        isUploadingSlide1.value = false;
        showMessage("error", t("text.error"), "Tải lên ảnh Slide 1 thất bại");
      }
    );
  }
};

const onSlide2Selected = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    isUploadingSlide2.value = true;
    UPLOAD_DOCUMENT(
      file,
      "company_settings",
      1,
      (res: any) => {
        isUploadingSlide2.value = false;
        const url = res.data?.data?.url || res.data?.url;
        if (url) {
          form.slide_image_2 = url;
          showMessage("success", t("text.success"), "Tải lên ảnh Slide 2 thành công");
        }
      },
      (err: any) => {
        isUploadingSlide2.value = false;
        showMessage("error", t("text.error"), "Tải lên ảnh Slide 2 thất bại");
      }
    );
  }
};

const onSlide3Selected = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    isUploadingSlide3.value = true;
    UPLOAD_DOCUMENT(
      file,
      "company_settings",
      1,
      (res: any) => {
        isUploadingSlide3.value = false;
        const url = res.data?.data?.url || res.data?.url;
        if (url) {
          form.slide_image_3 = url;
          showMessage("success", t("text.success"), "Tải lên ảnh Slide 3 thành công");
        }
      },
      (err: any) => {
        isUploadingSlide3.value = false;
        showMessage("error", t("text.error"), "Tải lên ảnh Slide 3 thất bại");
      }
    );
  }
};

const onAboutImgSelected = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    isUploadingAboutImg.value = true;
    UPLOAD_DOCUMENT(
      file,
      "company_settings",
      1,
      (res: any) => {
        isUploadingAboutImg.value = false;
        const url = res.data?.data?.url || res.data?.url;
        if (url) {
          form.about_image_path = url;
          showMessage("success", t("text.success"), "Tải lên ảnh Giới thiệu thành công");
        }
      },
      (err: any) => {
        isUploadingAboutImg.value = false;
        showMessage("error", t("text.error"), "Tải lên ảnh Giới thiệu thất bại");
      }
    );
  }
};

onMounted(() => {
  fetchSettings();
});

const fetchSettings = () => {
  isLoading.value = true;
  getCompanySetting({
    successCallback: (res: any) => {
      const data = res?.data?.data || res?.data;
      if (data) {
        Object.assign(form, data);
        if (data.representative_id_date) {
          form.representative_id_date = new Date(data.representative_id_date);
        }
      }
      isLoading.value = false;
    },
    errorCallback: (err: any) => {
      isLoading.value = false;
      showMessage("error", t("text.error"), err.message || t("text.errorMessage"));
    }
  });
};

const onValidate = (field: string) => {
  validateOnField(field, form, formErrors, FIELD_VALIDATIONS, t);
};

// Postcode handling
const handlePostcodeChange = (address: any) => {
  if (address) {
    const formattedAddress = `${address.prefecture}${address.city}${address.town}`;
    form.address = formattedAddress;
    if (!form.address_registered) {
      form.address_registered = formattedAddress;
    }
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
    }
  }
};

const goBack = () => {
  router.push("/");
};

const submitForm = () => {
  // Clear errors
  Object.keys(formErrors).forEach(k => (formErrors as any)[k] = "");

  if (form.has_website) {
    if (!form.website) {
      formErrors.website = "Vui lòng nhập địa chỉ URL Website";
      showMessage("error", t("text.error"), "Vui lòng nhập địa chỉ URL Website");
      return;
    }
    if (!/^https?:\/\/.+/.test(form.website)) {
      formErrors.website = "Địa chỉ website phải bắt đầu bằng http:// hoặc https://";
      showMessage("error", t("text.error"), "Địa chỉ website không hợp lệ (phải bắt đầu bằng http:// hoặc https://)");
      return;
    }
  }

  const isValid = validateOnAllField(form, formErrors, FIELD_VALIDATIONS, t);
  if (!isValid) {
    showMessage("error", t("text.error"), t("text.errorInput"));
    return;
  }

  isLoading.value = true;

  const formatDate = (d: any) => {
    if (!d) return null;
    const dt = new Date(d);
    if (isNaN(dt.getTime())) return d;
    return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
  };

  const submitData = {
    ...form,
    representative_id_date: formatDate(form.representative_id_date),
  };

  updateCompanySetting({
    data: submitData,
    successCallback: () => {
      isLoading.value = false;
      apiStore.fetchCompanySetting();
      showMessage("success", t("text.success"), t("text.udSuccess"));
    },
    errorCallback: (err: any) => {
      isLoading.value = false;
      showMessage("error", t("text.error"), err.message || t("text.errorMessage"));
    }
  });
};

const previewLanding = () => {
  if (form.has_website) {
    if (form.website) {
      window.open(form.website, '_blank');
    } else {
      showMessage("error", t("text.error"), "Chưa cấu hình URL website");
    }
  } else {
    window.open(`/landing?style=${form.landing_style}`, '_blank');
  }
};

const loadMockupData = () => {
  const field = form.business_field || "IT";
  
  if (field === "IT") {
    form.slogan_1 = "Đột phá giải pháp công nghệ số";
    form.slogan_2 = "Kiến tạo hệ sinh thái vững bền";
    form.slogan_3 = "Chúng tôi cung cấp dịch vụ phát triển phần mềm chất lượng cao, tích hợp AI và hạ tầng Cloud bảo mật hàng đầu cho doanh nghiệp toàn cầu.";
    form.about_us = "Chúng tôi là tập thể các chuyên gia công nghệ đam mê sáng tạo, cam kết đem lại các giải pháp chuyển đổi số thông minh nhất cho đối tác toàn cầu. Dựa trên triết lý đặt khách hàng làm trung tâm, chúng tôi không ngừng cải tiến quy trình công nghệ.";
    form.services_list = "Phát triển phần mềm: Thiết kế app & web theo yêu cầu chất lượng cao.\nTư vấn hạ tầng Cloud: Tối ưu chi phí và tăng tốc hiệu năng hệ thống.\nTích hợp Trí tuệ nhân tạo (AI): Áp dụng machine learning nâng tầm dịch vụ doanh nghiệp.";
    form.slide_image_1 = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80";
    form.slide_image_2 = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";
    form.slide_image_3 = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80";
    form.about_image_path = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
  } else if (field === "FINANCE") {
    form.slogan_1 = "Tinh hoa giải pháp tài chính";
    form.slogan_2 = "Tối đa hóa giá trị tài sản";
    form.slogan_3 = "Đồng hành quản trị dòng tiền, tối ưu hóa các sắc thuế doanh nghiệp và phòng ngừa rủi ro tài chính chuyên sâu.";
    form.about_us = "Với hơn 10 năm kinh nghiệm trong lĩnh vực tư vấn kế toán, kiểm toán và quản lý đầu tư, chúng tôi tự tin mang lại giải pháp minh bạch, chuẩn mực pháp lý cao nhất cho quý doanh nghiệp.";
    form.services_list = "Tư vấn đầu tư & Quản lý: Xây dựng chiến lược tài chính toàn diện nhằm tối đa hóa lợi nhuận.\nKế toán & Kiểm toán: Quản lý dòng tiền, quyết toán thuế chuẩn xác, minh bạch theo luật định.\nPhòng ngừa Rủi ro: Phân tích thị trường nhằm dự báo và giảm thiểu các rủi ro tài chính.";
    form.slide_image_1 = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80";
    form.slide_image_2 = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80";
    form.slide_image_3 = "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80";
    form.about_image_path = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80";
  } else if (field === "MANUFACTURING") {
    form.slogan_1 = "Chất lượng vượt trội";
    form.slogan_2 = "Sản xuất chuẩn xác toàn cầu";
    form.slogan_3 = "Cung cấp hệ thống giải pháp gia công cơ khí, lắp ráp thiết bị và quy trình logistics hiện đại, tối ưu hóa chuỗi cung ứng.";
    form.about_us = "Chúng tôi vận hành hệ thống nhà xưởng đạt chuẩn ISO với công nghệ tự động hóa hiện đại, đáp ứng nhanh chóng mọi đơn hàng lớn nhỏ từ đối tác trong và ngoài nước.";
    form.services_list = "Chế tạo & Lắp ráp: Dây chuyền tự động hóa cao cung cấp sản phẩm chuẩn xác, bền bỉ.\nChuỗi cung ứng & Kho: Vận chuyển, xuất nhập khẩu, kiểm soát lưu kho hiệu quả tối đa.\nKiểm định chất lượng: Quy trình QC nghiêm ngặt bảo đảm mọi lô hàng xuất xưởng đạt tiêu chuẩn.";
    form.slide_image_1 = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80";
    form.slide_image_2 = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80";
    form.slide_image_3 = "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80";
    form.about_image_path = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80";
  } else if (field === "LEGAL") {
    form.slogan_1 = "Vững vàng nền tảng pháp lý";
    form.slogan_2 = "Đồng hành tuân thủ trọn đời";
    form.slogan_3 = "Bảo vệ quyền lợi hợp pháp, tư vấn soạn thảo hợp đồng thương mại và đại diện giải quyết các tranh chấp doanh nghiệp tối ưu nhất.";
    form.about_us = "Đội ngũ luật sư và chuyên gia pháp chế uy tín của chúng tôi luôn tận tâm đồng hành bảo vệ sự tuân thủ tối đa, giảm thiểu rủi ro pháp lý cho các đối tác của mình.";
    form.services_list = "Tư vấn Pháp chế: Đồng hành pháp lý trọn đời cho doanh nghiệp trong giao dịch ký kết.\nBảo hộ Sở hữu trí tuệ: Đăng ký thương hiệu, sáng chế bảo vệ bản quyền tác giả toàn cầu.\nGiải quyết tranh chấp: Đại diện đàm phán, xử lý tranh chấp thương mại chuyên nghiệp.";
    form.slide_image_1 = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80";
    form.slide_image_2 = "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80";
    form.slide_image_3 = "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80";
    form.about_image_path = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80";
  } else if (field === "SERVICES") {
    form.slogan_1 = "Tận tâm phục vụ";
    form.slogan_2 = "Nâng tầm trải nghiệm khách hàng";
    form.slogan_3 = "Giải pháp tối ưu hóa vận hành, quản trị thương hiệu và cung cấp dịch vụ chăm sóc khách hàng chuyên nghiệp đa kênh.";
    form.about_us = "Chúng tôi không ngừng nâng cao chất lượng dịch vụ để mang lại sự hài lòng cao nhất. Sự tin tưởng của quý khách là động lực phát triển vững chắc của công ty.";
    form.services_list = "Chăm sóc Khách hàng: Đội ngũ chuyên nghiệp trực tuyến 24/7 tối ưu hóa tỷ lệ chuyển đổi.\nTư vấn Vận hành: Đào tạo nhân sự, setup quy trình nâng cao hiệu suất làm việc đội ngũ.\nQuản trị Thương hiệu: Truyền thông tích hợp định vị vững chắc sản phẩm trên thị trường.";
    form.slide_image_1 = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80";
    form.slide_image_2 = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80";
    form.slide_image_3 = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80";
    form.about_image_path = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
  }
  
  showMessage("success", "Thành công", "Đã tải dữ liệu mẫu cho lĩnh vực " + field);
};
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 8s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
