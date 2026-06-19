<template>
  <div class="w-full px-4 sm:px-6 space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-10">
    <!-- Header (Premium Glass) -->
    <div class="z-30 flex items-center justify-between bg-white/80 dark:bg-surface-900/80 backdrop-blur-xl p-6 rounded-3xl border border-white dark:border-surface-800 shadow-xl shadow-surface-200/20">
      <div class="flex items-center gap-5">
        <div class="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 rotate-3 hover:rotate-0 transition-transform duration-500">
          <i class="pi text-white text-2xl" :class="isEdit ? 'pi-user-edit' : 'pi-user-plus'"></i>
        </div>
        <div class="space-y-0.5">
          <h1 class="text-2xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ isEdit ? $t('employee.editTitle') : $t('employee.addTitle') }}
          </h1>
          <p class="text-[10px] text-surface-400 font-black uppercase tracking-[0.2em] flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            {{ isEdit ? $t('employee.editSubtitle') + ' • ' + form.code : $t('employee.addSubtitle') }}
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <Button
          :label="$t('btn.cancel')"
          icon="pi pi-times"
          severity="secondary"
          outlined
          class="!rounded-xl !px-5 !py-2.5 !font-bold !text-sm !min-w-[120px]"
          @click="goBack"
        />
        <Button
          :label="$t('employee.saveProfile')"
          :loading="submitting"
          severity="primary"
          class="!rounded-xl !px-8 !py-2.5 !shadow-lg !shadow-primary/25 !font-black !text-sm tracking-tight transition-all hover:scale-105 !min-w-[160px]"
          icon="pi pi-check"
          @click="handleSubmit"
        />
      </div>
    </div>

    <div v-if="loading && isEdit" class="flex justify-center py-20">
      <ProgressSpinner />
    </div>

    <template v-else>
      <!-- Nhập nhanh hồ sơ bằng AI Gemini -->
      <div v-if="!isEdit" class="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 rounded-3xl border border-primary/20 shadow-md relative overflow-hidden group">
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
        
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 text-primary">
              <i class="pi pi-sparkles text-xl animate-pulse"></i>
            </div>
            <div>
              <h3 class="text-sm font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase flex items-center gap-1.5">
                {{ $t('employee.ocrTitle') }}
                <span class="bg-primary text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider">AI OCR</span>
              </h3>
              <p class="text-xs text-surface-400">{{ $t('employee.ocrDesc') }}</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <input type="file" ref="ocrFileInput" class="hidden" accept=".pdf,.png,.jpg,.jpeg,.webp,.xlsx,.xls,.csv" multiple @change="onOcrFileChange" />
            <Button
              :label="$t('employee.ocrButton')"
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
          <span class="text-xs font-bold text-primary">{{ $t('employee.ocrLoading') }}</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        <!-- Left Column: Profile Card (Glassmorphism) -->
        <div class="lg:col-span-1 bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 rounded-3xl p-6 shadow-xl space-y-6 text-center relative overflow-hidden group">
          <div class="absolute -right-16 -top-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
          
          <!-- Avatar Uploader -->
          <div class="flex flex-col items-center gap-3 relative z-10 pt-4">
            <div class="relative group/avatar cursor-pointer w-32 h-32 rounded-full border-4 border-white dark:border-surface-800 shadow-2xl flex items-center justify-center overflow-hidden transition-all bg-surface-50 dark:bg-surface-950/40 hover:border-primary" @click="triggerAvatarUpload">
              <img v-if="form.avatar" :src="form.avatar" class="w-full h-full object-cover" />
              <div v-else class="flex flex-col items-center justify-center text-surface-400 group-hover/avatar:text-primary transition-colors">
                <i class="pi pi-camera text-3xl mb-1"></i>
                <span class="text-[9px] font-black uppercase tracking-wider">{{ $t('employee.uploadPhoto') }}</span>
              </div>
              <div v-if="form.avatar" class="absolute inset-0 bg-black/40 opacity-0 group-hover/avatar:opacity-100 flex items-center justify-center text-white transition-opacity">
                <i class="pi pi-pencil text-lg"></i>
              </div>
            </div>
            <input type="file" ref="avatarInput" class="hidden" accept="image/*" @change="onAvatarFileChange" />
            <Button v-if="form.avatar" :label="$t('employee.removePhoto')" severity="danger" text class="!py-0 !px-2 !text-xs !font-bold" @click="form.avatar = ''" />
          </div>

          <!-- Dynamic Info Card -->
          <div class="space-y-2 relative z-10">
            <h2 class="text-xl font-black text-surface-900 dark:text-surface-0 tracking-tight truncate px-2">
              {{ form.full_name || $t('employee.fullName') }}
            </h2>
            <p class="text-xs text-surface-400 font-mono truncate px-2">
              {{ form.email || 'email@company.com' }}
            </p>
            
            <!-- Badges -->
            <div class="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span class="px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                {{ form.role || 'STAFF' }}
              </span>
              <span :class="[
                'px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase border',
                form.status === 'ACTIVE' ? 'bg-green-500/10 text-green-600 border-green-200 dark:border-green-900/30' :
                form.status === 'PROBATION' ? 'bg-orange-500/10 text-orange-600 border-orange-200 dark:border-orange-900/30' :
                'bg-red-500/10 text-red-600 border-red-200 dark:border-red-900/30'
              ]">
                {{ form.status === 'ACTIVE' ? $t('employee.statusActive') : form.status === 'PROBATION' ? $t('employee.statusProbation') : $t('employee.statusInactive') }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right Column: Tabs Container -->
        <div class="lg:col-span-3 bg-white dark:bg-surface-900 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl overflow-hidden">
          <TabView class="modern-tabs">
            
            <!-- Tab 1: Personal Info -->
            <TabPanel>
              <template #header>
                <div class="flex items-center gap-2 py-1">
                  <i class="pi pi-user text-sm"></i>
                  <span class="font-bold">{{ $t('employee.personalInfo') }}</span>
                  <span v-if="tabErrors[0] > 0" class="flex items-center justify-center bg-red-500 text-white text-[10px] font-black w-5 h-5 rounded-full animate-bounce">
                    {{ tabErrors[0] }}
                  </span>
                </div>
              </template>
              
              <div class="p-8 space-y-8">
                <!-- Cụm 1: Thông tin cá nhân cơ bản -->
                <div class="p-6 sm:p-8 bg-surface-50/40 dark:bg-surface-950/20 border border-surface-100 dark:border-surface-800 rounded-3xl relative overflow-hidden group">
                  <div class="absolute -right-24 -top-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <div class="flex items-center gap-3 mb-6 border-b border-surface-100 dark:border-surface-800 pb-4 relative z-10">
                    <div class="w-1.5 h-6 bg-primary rounded-full"></div>
                    <div>
                      <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">1. Thông tin cá nhân cơ bản</h3>
                      <p class="text-xs text-surface-400">Các thông tin định danh cá nhân và lý lịch cơ bản</p>
                    </div>
                  </div>

                  <!-- Fields Grid -->
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-10">
                    <AppInputField :label="$t('employee.fullName')" :isRequired="true" :error="form.errorFullName">
                      <div class="relative group">
                        <i class="pi pi-user absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                        <InputText v-model="form.full_name" :invalid="!!form.errorFullName" class="w-full !rounded-xl !pl-11 !py-2.5 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4 focus:ring-primary/10" :placeholder="$t('placeholder.fullNameExample')" @change="onValidate('full_name')" />
                      </div>
                    </AppInputField>

                    <!--
                    <AppInputField :label="$t('employee.katakanaName')" :error="form.errorFullNameKana">
                      <div class="relative group">
                        <i class="pi pi-language absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                        <InputText v-model="form.full_name_kana" :invalid="!!form.errorFullNameKana" class="w-full !rounded-xl !pl-11 !py-2.5 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4 focus:ring-primary/10" placeholder="グエン ヴァン" @change="onValidate('full_name_kana')" />
                      </div>
                    </AppInputField>

                    <AppInputField :label="$t('employee.romajiName')" :error="form.errorRomajiName">
                      <div class="relative group">
                        <i class="pi pi-globe absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                        <InputText v-model="form.romaji_name" :invalid="!!form.errorRomajiName" class="w-full !rounded-xl !pl-11 !py-2.5 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4 focus:ring-primary/10" placeholder="Nguyen Van A" @change="onValidate('romaji_name')" />
                      </div>
                    </AppInputField>
                    -->

                    <AppInputField :label="$t('employee.dateOfBirth')" :error="form.errorDateOfBirth">
                      <DatePickerCommon v-model="form.date_of_birth" :invalid="!!form.errorDateOfBirth" @change="onValidate('date_of_birth')" />
                    </AppInputField>

                    <AppInputField :label="$t('employee.gender')" :error="form.errorGender">
                      <Select v-model="form.gender" :options="[{label: $t('gender.male'), value: 'MALE'}, {label: $t('gender.female'), value: 'FEMALE'}, {label: $t('gender.other'), value: 'OTHER'}]" optionLabel="label" optionValue="value" class="w-full !rounded-xl border border-surface-200 dark:border-surface-800" @change="onValidate('gender')" />
                    </AppInputField>

                    <AppInputField :label="$t('employee.hometown')" :error="form.errorHometown">
                      <InputText v-model="form.hometown" :invalid="!!form.errorHometown" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4" :placeholder="$t('employee.placeholderHometown')" @change="onValidate('hometown')" />
                    </AppInputField>

                    <AppInputField :label="$t('employee.placeOfBirth')" :error="form.errorPlaceOfBirth">
                      <InputText v-model="form.place_of_birth" :invalid="!!form.errorPlaceOfBirth" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4" :placeholder="$t('employee.placeholderPlaceOfBirth')" @change="onValidate('place_of_birth')" />
                    </AppInputField>

                    <AppInputField :label="$t('employee.nationality')" :error="form.errorNationality">
                      <InputText v-model="form.nationality" :invalid="!!form.errorNationality" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4" :placeholder="$t('employee.placeholderNationality')" @change="onValidate('nationality')" />
                    </AppInputField>

                    <AppInputField :label="$t('employee.ethnicity')" :error="form.errorEthnicity">
                      <InputText v-model="form.ethnicity" :invalid="!!form.errorEthnicity" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4" placeholder="Kinh" @change="onValidate('ethnicity')" />
                    </AppInputField>

                    <AppInputField :label="$t('employee.religion')" :error="form.errorReligion">
                      <InputText v-model="form.religion" :invalid="!!form.errorReligion" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4" :placeholder="$t('employee.placeholderReligion')" @change="onValidate('religion')" />
                    </AppInputField>
                  </div>
                </div>

                <!-- Cụm 2: Thông tin tài khoản & Công việc -->
                <div class="p-6 sm:p-8 bg-surface-50/40 dark:bg-surface-950/20 border border-surface-100 dark:border-surface-800 rounded-3xl relative overflow-hidden group">
                  <div class="absolute -right-24 -top-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <div class="flex items-center gap-3 mb-6 border-b border-surface-100 dark:border-surface-800 pb-4 relative z-10">
                    <div class="w-1.5 h-6 bg-primary rounded-full"></div>
                    <div>
                      <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('employee.sectionAccountWork') }}</h3>
                      <p class="text-xs text-surface-400">{{ $t('employee.sectionAccountWorkDesc') }}</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-10">
                    <AppInputField :label="$t('employee.email')" :isRequired="true" :error="form.errorEmail">
                      <div class="relative group">
                        <i class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                        <InputText v-model="form.email" :invalid="!!form.errorEmail" class="w-full !rounded-xl !pl-11 !py-2.5 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4 focus:ring-primary/10" placeholder="email@company.com" @change="onValidate('email')" />
                      </div>
                    </AppInputField>

                    <AppInputField :label="$t('employee.phone')" :isRequired="true" :error="form.errorPhone">
                      <div class="relative group">
                        <i class="pi pi-phone absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                        <AppPhoneInput v-model.trim="form.phone" :invalid="!!form.errorPhone" class="!pl-11 !bg-white dark:!bg-surface-900 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4 focus:ring-primary/10 disabled:!bg-surface-100 dark:disabled:!bg-surface-800" placeholder="098-7654-3210" @change="onValidate('phone')" />
                      </div>
                    </AppInputField>

                    <AppInputField :label="$t('employee.department')" :isRequired="true">
                      <AppMasterSelect
                        v-model="form.department_id"
                        :error="form.errorDepartmentId"
                        :apiFunction="getDepartments"
                        cacheKey="departments"
                        optionValue="id"
                        optionLabel="name"
                        :placeholder="$t('employee.selectDepartment')"
                        :initItem="initDepartment"
                        :disabled="!canManageOrg"
                        @change="onDepartmentChange"
                      />
                    </AppInputField>

                    <AppInputField :label="$t('employee.jobTitle')" :isRequired="true" :error="form.errorJobTitleId">
                      <Select
                        v-model="form.job_title_id"
                        :options="jobTitleOptions"
                        optionLabel="name"
                        optionValue="id"
                        :placeholder="$t('employee.selectJobTitle')"
                        class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
                        :disabled="!form.department_id || !canManageOrg"
                        @change="onValidate('job_title_id')"
                      />
                    </AppInputField>

                    <AppInputField :label="$t('employee.joinDate')" :isRequired="true" :error="form.errorJoinDate">
                      <DatePickerCommon v-model="form.join_date" :invalid="!!form.errorJoinDate" :disabled="!canManageOrg" @change="onValidate('join_date')" />
                    </AppInputField>

                    <AppInputField :label="$t('employee.role')">
                      <template #label>
                        <i
                          class="pi pi-question-circle text-primary cursor-help hover:text-primary-emphasis transition-colors ml-1"
                          v-tooltip.right="{
                            value: roleTooltipHtml,
                            escape: false
                          }"
                        ></i>
                      </template>
                      <Select v-model="form.role" :options="roleOptions" optionLabel="label" optionValue="value" class="w-full !rounded-xl border border-surface-200 dark:border-surface-800" :disabled="!canManageOrg">
                        <template #option="optProps">
                          <div class="flex items-center justify-between w-full">
                            <span>{{ optProps.option.label }}</span>
                            <span class="text-[10px] text-surface-400 font-normal italic ml-2">
                              {{ getRoleDesc(optProps.option.value) }}
                            </span>
                          </div>
                        </template>
                      </Select>
                    </AppInputField>

                    <AppInputField :label="$t('text.status')">
                      <Select v-model="form.status" :options="statusOptions" optionLabel="label" optionValue="value" class="w-full !rounded-xl border border-surface-200 dark:border-surface-800" :disabled="!canManageOrg" />
                    </AppInputField>
                  </div>
                </div>

                <!-- Cụm 3: Địa chỉ liên lạc -->
                <div class="p-6 sm:p-8 bg-surface-50/40 dark:bg-surface-950/20 border border-surface-100 dark:border-surface-800 rounded-3xl relative overflow-hidden group">
                  <div class="absolute -right-24 -top-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <div class="flex items-center gap-3 mb-6 border-b border-surface-100 dark:border-surface-800 pb-4 relative z-10">
                    <div class="w-1.5 h-6 bg-primary rounded-full"></div>
                    <div>
                      <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('employee.sectionContactAddress') }}</h3>
                      <p class="text-xs text-surface-400">{{ $t('employee.sectionContactAddressDesc') }}</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative z-10">
                    <AppInputField :label="$t('employee.registeredAddress')" class="md:col-span-2" :error="form.errorAddressRegistered">
                      <InputText v-model="form.address_registered" :invalid="!!form.errorAddressRegistered" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" @change="onValidate('address_registered')" />
                    </AppInputField>

                    <AppInputField :label="$t('employee.currentAddress')" class="md:col-span-2" :error="form.errorAddressCurrent">
                      <InputText v-model="form.address_current" :invalid="!!form.errorAddressCurrent" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" @change="onValidate('address_current')" />
                    </AppInputField>
                  </div>
                </div>
              </div>
            </TabPanel>

          <!-- Tab 2: Thuế, Bảo hiểm & Ngân hàng -->
          <TabPanel>
            <template #header>
              <div class="flex items-center gap-2 py-1">
                <i class="pi pi-wallet text-sm"></i>
                <span class="font-bold">{{ $t('employee.taxInsuranceBank') }}</span>
                <span v-if="(tabErrors[1] + tabErrors[2]) > 0" class="flex items-center justify-center bg-red-500 text-white text-[10px] font-black w-5 h-5 rounded-full animate-bounce">
                  {{ tabErrors[1] + tabErrors[2] }}
                </span>
              </div>
            </template>
            
            <div class="p-8 space-y-8">
              <!-- Section 1: Thuế & Bảo hiểm -->
              <div class="p-6 sm:p-8 bg-surface-50/40 dark:bg-surface-950/20 border border-surface-100 dark:border-surface-800 rounded-3xl relative overflow-hidden group">
                <div class="absolute -right-24 -top-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
                
                <div class="flex items-center gap-3 mb-6 border-b border-surface-100 dark:border-surface-800 pb-4 relative z-10">
                  <div class="w-1.5 h-6 bg-primary rounded-full"></div>
                  <div>
                    <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('employee.taxInsuranceTitle') }}</h3>
                    <p class="text-xs text-surface-400">{{ $t('employee.taxInsuranceDesc') }}</p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                  <AppInputField :label="$t('employee.identityType')">
                    <Select v-model="form.identity_type" :options="identityTypes" optionLabel="label" optionValue="value" class="w-full !rounded-xl border border-surface-200 dark:border-surface-800" />
                  </AppInputField>

                  <AppInputField :label="$t('employee.identityNumber')" :error="form.errorIdentityNumber">
                    <div class="relative group">
                      <i class="pi pi-credit-card absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                      <InputText v-model="form.identity_number" :invalid="!!form.errorIdentityNumber" class="w-full !rounded-xl !pl-11 !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" @change="onValidate('identity_number')" />
                    </div>
                  </AppInputField>

                  <AppInputField :label="$t('employee.zairyuExpiry')">
                    <DatePickerCommon v-model="form.zairyu_card_expiry" />
                  </AppInputField>

                  <AppInputField :label="$t('employee.taxCode')" :error="form.errorTaxCode">
                    <InputText v-model="form.tax_code" :invalid="!!form.errorTaxCode" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" @change="onValidate('tax_code')" />
                  </AppInputField>

                  <AppInputField :label="$t('employee.socialInsurance')" :error="form.errorSocialInsuranceCode">
                    <InputText v-model="form.social_insurance_code" :invalid="!!form.errorSocialInsuranceCode" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" @change="onValidate('social_insurance_code')" />
                  </AppInputField>

                  <AppInputField :label="$t('employee.pensionNumber')" :error="form.errorPensionNumber">
                    <InputText v-model="form.pension_number" :invalid="!!form.errorPensionNumber" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" @change="onValidate('pension_number')" />
                  </AppInputField>

                  <AppInputField :label="$t('employee.employmentInsurance')" :error="form.errorEmploymentInsuranceNumber">
                    <InputText v-model="form.employment_insurance_number" :invalid="!!form.errorEmploymentInsuranceNumber" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" @change="onValidate('employment_insurance_number')" />
                  </AppInputField>
                </div>
              </div>

              <!-- Section 2: Tài khoản ngân hàng -->
              <div class="p-6 sm:p-8 bg-surface-50/40 dark:bg-surface-950/20 border border-surface-100 dark:border-surface-800 rounded-3xl relative overflow-hidden group">
                <div class="absolute -right-24 -top-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
                
                <div class="flex items-center gap-3 mb-6 border-b border-surface-100 dark:border-surface-800 pb-4 relative z-10">
                  <div class="w-1.5 h-6 bg-primary rounded-full"></div>
                  <div>
                    <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('employee.bankInfoTitle') }}</h3>
                    <p class="text-xs text-surface-400">{{ $t('employee.bankInfoDesc') }}</p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                  <AppInputField :label="$t('employee.bankCode')" :error="form.errorBankCode">
                    <InputText v-model="form.bank_code" :invalid="!!form.errorBankCode" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" placeholder="0001" @change="onValidate('bank_code')" />
                  </AppInputField>

                  <AppInputField :label="$t('employee.bankBranch')" :error="form.errorBankBranchCode">
                    <InputText v-model="form.bank_branch_code" :invalid="!!form.errorBankBranchCode" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" placeholder="001" @change="onValidate('bank_branch_code')" />
                  </AppInputField>

                  <AppInputField :label="$t('employee.bankAccountType')" :error="form.errorBankAccountType">
                    <InputText v-model="form.bank_account_type" :invalid="!!form.errorBankAccountType" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" :placeholder="$t('employee.placeholderBankAccountType')" @change="onValidate('bank_account_type')" />
                  </AppInputField>

                  <AppInputField :label="$t('employee.bankAccountNumber')" :error="form.errorBankAccountNumber">
                    <InputText v-model="form.bank_account_number" :invalid="!!form.errorBankAccountNumber" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" @change="onValidate('bank_account_number')" />
                  </AppInputField>

                  <AppInputField :label="$t('employee.bankAccountHolder')" class="md:col-span-2" :error="form.errorBankAccountHolderKana">
                    <InputText v-model="form.bank_account_holder_kana" :invalid="!!form.errorBankAccountHolderKana" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" @change="onValidate('bank_account_holder_kana')" />
                  </AppInputField>
                </div>
              </div>
            </div>
          </TabPanel>

          <!-- Tab 3: Relatives -->
          <TabPanel>
            <template #header>
              <div class="flex items-center gap-2 py-1">
                <i class="pi pi-users text-sm"></i>
                <span class="font-bold">{{ $t('employee.relatives') }}</span>
                <span v-if="tabErrors[3] > 0" class="flex items-center justify-center bg-red-500 text-white text-[10px] font-black w-5 h-5 rounded-full animate-bounce">
                  {{ tabErrors[3] }}
                </span>
              </div>
            </template>
            
            <div class="p-8 space-y-6">
              <div class="flex justify-between items-center bg-surface-50 dark:bg-surface-900/50 p-4 rounded-2xl border border-surface-100 dark:border-surface-800">
                <div class="flex items-center gap-3">
                  <i class="pi pi-info-circle text-primary"></i>
                  <div>
                    <span class="text-sm font-bold text-surface-700 dark:text-surface-100 block">{{ $t('employee.relativesTitle') }}</span>
                    <span class="text-xs text-surface-400 block">{{ $t('employee.relativesDesc') }}</span>
                  </div>
                </div>
                <Button :label="$t('employee.addRelative')" icon="pi pi-plus" size="small" @click="addRelative" class="!rounded-xl" />
              </div>

              <div v-if="!form.relatives || form.relatives.length === 0" class="flex flex-col items-center py-16 border border-dashed border-surface-200 dark:border-surface-800 rounded-3xl">
                <i class="pi pi-users text-5xl text-surface-300 mb-3"></i>
                <span class="text-sm text-surface-400 font-bold">{{ $t('employee.noRelatives') }}</span>
              </div>

              <div v-else class="space-y-6">
                <div v-for="(relative, index) in form.relatives" :key="index" class="p-6 bg-surface-50/50 dark:bg-surface-950/40 border border-surface-150 dark:border-surface-800 rounded-3xl relative overflow-hidden group">
                  <div class="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <!-- Card Header with Title and Delete Button -->
                  <div class="flex justify-between items-center border-b border-surface-100 dark:border-surface-800 pb-4 mb-6 relative z-10">
                    <h4 class="font-black text-primary flex items-center gap-2">
                      <i class="pi pi-user-plus text-xs"></i> {{ $t('employee.relativeNumber') }}{{ index + 1 }}
                    </h4>
                    <Button 
                      icon="pi pi-trash" 
                      severity="danger" 
                      outlined
                      rounded
                      class="!w-8 !h-8 !p-0 !rounded-full hover:!bg-red-50 dark:hover:!bg-red-950/20" 
                      v-tooltip.top="$t('employee.deleteRelativeTooltip')" 
                      @click="removeRelative(index)" 
                    />
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                    <AppInputField :label="$t('employee.fullName')" :isRequired="true" :error="form.relativeErrors?.[index]?.full_name">
                      <InputText v-model="relative.full_name" :invalid="!!form.relativeErrors?.[index]?.full_name" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" @change="onValidateRelative(index, 'full_name')" />
                    </AppInputField>
                    
                    <AppInputField :label="$t('employee.relationship')" :isRequired="true" :error="form.relativeErrors?.[index]?.relationship">
                      <Select v-model="relative.relationship" :invalid="!!form.relativeErrors?.[index]?.relationship" :options="relOptions" optionLabel="label" optionValue="value" class="w-full !rounded-xl border border-surface-200 dark:border-surface-800" @change="onValidateRelative(index, 'relationship')" />
                    </AppInputField>
                    
                    <AppInputField :label="$t('employee.phone')" :isRequired="true" :error="form.relativeErrors?.[index]?.phone">
                      <div class="relative group">
                        <i class="pi pi-phone absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                        <AppPhoneInput v-model.trim="relative.phone" :invalid="!!form.relativeErrors?.[index]?.phone" class="!pl-11 !bg-white dark:!bg-surface-900 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4 focus:ring-primary/10 disabled:!bg-surface-100 dark:disabled:!bg-surface-800" placeholder="098-7654-3210" @change="onValidateRelative(index, 'phone')" />
                      </div>
                    </AppInputField>
                    
                    <AppInputField label="Email" :error="form.relativeErrors?.[index]?.email">
                      <InputText v-model="relative.email" :invalid="!!form.relativeErrors?.[index]?.email" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" @change="onValidateRelative(index, 'email')" />
                    </AppInputField>
                    
                    <AppInputField label="Nghề nghiệp" :error="form.relativeErrors?.[index]?.occupation">
                      <InputText v-model="relative.occupation" :invalid="!!form.relativeErrors?.[index]?.occupation" class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" @change="onValidateRelative(index, 'occupation')" />
                    </AppInputField>
                    
                    <AppInputField :label="$t('employee.birthday')">
                      <DatePickerCommon v-model="relative.date_of_birth" />
                    </AppInputField>
                    
                    <div class="lg:col-span-3 flex gap-8 items-center pt-2">
                      <div class="flex items-center gap-2">
                        <Checkbox v-model="relative.is_emergency_contact" :binary="true" />
                        <span class="text-sm font-bold text-surface-600">{{ $t('employee.emergencyContact') }}</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <Checkbox v-model="relative.is_dependent" :binary="true" />
                        <span class="text-sm font-bold text-surface-600">{{ $t('employee.dependentTax') }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <!-- Tab 4: Hợp đồng & Tài liệu cá nhân -->
          <TabPanel>
            <template #header>
              <div class="flex items-center gap-2 py-1">
                <i class="pi pi-file-pdf text-sm"></i>
                <span class="font-bold">{{ $t('employee.contractDocument') }}</span>
              </div>
            </template>
            
            <div class="p-8 space-y-8">
              <!-- Section 1: Hợp đồng lao động (Chỉ xem - chỉ hiện khi Edit) -->
              <div v-if="isEdit" class="p-6 sm:p-8 bg-surface-50/40 dark:bg-surface-950/20 border border-surface-100 dark:border-surface-800 rounded-3xl relative overflow-hidden group">
                <div class="absolute -right-24 -top-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
                
                <div class="flex items-center gap-3 mb-6 border-b border-surface-100 dark:border-surface-800 pb-4 relative z-10">
                  <div class="w-1.5 h-6 bg-primary rounded-full"></div>
                  <div>
                    <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('employee.contractListTitle') }}</h3>
                    <p class="text-xs text-surface-400">{{ $t('employee.contractListDesc') }}</p>
                  </div>
                </div>

                <div v-if="!form.contracts || form.contracts.length === 0" class="flex flex-col items-center py-10 border border-dashed border-surface-200 dark:border-surface-800 rounded-3xl relative z-10">
                  <i class="pi pi-file text-4xl text-surface-300 mb-2"></i>
                  <span class="text-sm text-surface-400 font-bold">{{ $t('employee.contractEmpty') }}</span>
                </div>

                <div v-else class="border border-surface-200 dark:border-surface-800 rounded-2xl overflow-hidden shadow-sm relative z-10 bg-white dark:bg-surface-950/60">
                  <table class="w-full text-left border-collapse">
                    <thead>
                      <tr class="bg-surface-50 dark:bg-surface-950/60 text-xs font-bold text-surface-600 dark:text-surface-300 border-b border-surface-150 dark:border-surface-800 uppercase tracking-wider">
                        <th class="p-4">{{ $t('employee.contractCode') }}</th>
                        <th class="p-4">{{ $t('employee.contractType') }}</th>
                        <th class="p-4">{{ $t('employee.contractDuration') }}</th>
                        <th class="p-4">{{ $t('employee.contractSalary') }}</th>
                        <th class="p-4">{{ $t('employee.contractStatus') }}</th>
                        <th class="p-4 text-center">{{ $t('employee.contractAction') }}</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-surface-100 dark:divide-surface-800 text-sm">
                      <tr v-for="contract in form.contracts" :key="contract.id" class="hover:bg-surface-50/50 dark:hover:bg-surface-950/20 transition-colors">
                        <td class="p-4 font-mono font-bold text-primary">{{ contract.contract_code }}</td>
                        <td class="p-4">
                          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300">
                            {{ contract.type }}
                          </span>
                        </td>
                        <td class="p-4 text-surface-500">
                          {{ contract.start_date }} ~ {{ contract.end_date || $t('employee.contractIndefinite') }}
                        </td>
                        <td class="p-4 font-black">
                          {{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(contract.value) }}
                        </td>
                        <td class="p-4">
                          <span :class="[
                            'px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase',
                            contract.status === 'ACTIVE' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'
                          ]">
                            {{ contract.status === 'ACTIVE' ? $t('employee.contractActive') : $t('employee.contractInactive') }}
                          </span>
                        </td>
                        <td class="p-4 text-center">
                          <div v-if="contract.documents && contract.documents.length > 0" class="flex justify-center gap-2">
                            <Button 
                              v-for="doc in contract.documents"
                              :key="doc.id"
                              icon="pi pi-download" 
                              severity="primary" 
                              text
                              rounded
                              size="small"
                              class="hover:scale-105"
                              v-tooltip.top="doc.title"
                              @click="downloadFile(doc)"
                            />
                          </div>
                          <span v-else class="text-xs text-surface-400 italic">{{ $t('employee.contractNoScan') }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Section 2: Chứng từ & Tài liệu cá nhân -->
              <div class="p-6 sm:p-8 bg-surface-50/40 dark:bg-surface-950/20 border border-surface-100 dark:border-surface-800 rounded-3xl relative overflow-hidden group">
                <div class="absolute -right-24 -top-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
                
                <div class="flex items-center justify-between mb-6 border-b border-surface-100 dark:border-surface-800 pb-4 relative z-10">
                  <div class="flex items-center gap-3">
                    <div class="w-1.5 h-6 bg-primary rounded-full"></div>
                    <div>
                      <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('employee.personalDocTitle') }}</h3>
                      <p class="text-xs text-surface-400">{{ $t('employee.personalDocDesc') }}</p>
                    </div>
                  </div>
                  <div>
                    <Button 
                      :label="$t('employee.btnUploadDoc')" 
                      icon="pi pi-upload" 
                      severity="primary"
                      class="!rounded-xl"
                      @click="triggerDocUpload"
                    />
                    <input type="file" ref="docInput" class="hidden" @change="onDocFileChange" />
                  </div>
                </div>

                <!-- Uploading State -->
                <div v-if="uploadingDoc" class="flex items-center gap-3 p-4 mb-6 bg-primary/5 border border-primary/20 rounded-2xl animate-pulse relative z-10">
                  <ProgressSpinner style="width: 24px; height: 24px" strokeWidth="6" />
                  <span class="text-sm font-bold text-primary">{{ $t('employee.msgUploadingDoc') }}</span>
                </div>

                <div v-if="(!form.documents || form.documents.length === 0) && pendingFiles.length === 0" class="flex flex-col items-center py-16 border border-dashed border-surface-200 dark:border-surface-800 rounded-3xl relative z-10">
                  <i class="pi pi-folder text-5xl text-surface-300 mb-3"></i>
                  <span class="text-sm text-surface-400 font-bold mb-1">{{ $t('employee.docEmptyTitle') }}</span>
                  <span class="text-xs text-surface-400">{{ $t('employee.docEmptyDesc') }}</span>
                </div>

                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                  <!-- RENDER EXISTING DOCS -->
                  <template v-if="form.documents && form.documents.length > 0">
                    <div v-for="doc in form.documents" :key="doc.id" class="p-4 bg-white dark:bg-surface-950/40 border border-surface-150 dark:border-surface-800 rounded-2xl flex items-center justify-between group hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
                      <div class="flex items-center gap-3 w-[70%]">
                        <div class="w-10 h-10 rounded-xl flex items-center justify-center shadow-md bg-surface-50 dark:bg-surface-900 border border-surface-100 dark:border-surface-800 text-surface-500">
                          <i class="pi text-xl" :class="getFileIcon(doc.extension)"></i>
                        </div>
                        <div class="overflow-hidden space-y-0.5">
                          <span class="text-sm font-bold text-surface-700 dark:text-surface-100 block truncate" v-tooltip.bottom="doc.title">{{ doc.title }}</span>
                          <span class="text-[10px] text-surface-400 block uppercase font-black tracking-wider">
                            {{ doc.extension }} • {{ (doc.filesize / 1024).toFixed(1) }} KB
                          </span>
                        </div>
                      </div>
                      <div class="flex items-center gap-1.5 relative z-10">
                        <Button 
                          icon="pi pi-eye" 
                          severity="secondary" 
                          text
                          rounded
                          class="!w-8 !h-8 hover:!bg-surface-100 dark:hover:!bg-surface-800" 
                          v-tooltip.top="$t('employee.tooltipViewDoc')"
                          @click="previewFile(doc)"
                        />
                        <Button 
                          icon="pi pi-download" 
                          severity="secondary" 
                          text
                          rounded
                          class="!w-8 !h-8 hover:!bg-surface-100 dark:hover:!bg-surface-800" 
                          v-tooltip.top="$t('employee.tooltipDownloadDoc')"
                          @click="downloadFile(doc)"
                        />
                        <Button 
                          icon="pi pi-trash" 
                          severity="danger" 
                          text
                          rounded
                          class="!w-8 !h-8 hover:!bg-red-50 dark:hover:!bg-red-950/20" 
                          v-tooltip.top="$t('employee.tooltipDeleteDoc')"
                          @click="confirmDeleteDoc(doc.id)"
                        />
                      </div>
                    </div>
                  </template>

                  <!-- RENDER PENDING DOCS -->
                  <template v-if="pendingFiles && pendingFiles.length > 0">
                    <div v-for="doc in pendingFiles" :key="doc.id" class="p-4 bg-primary/5 dark:bg-surface-950/40 border border-primary-200 dark:border-surface-800 rounded-2xl flex items-center justify-between group hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
                      <div class="flex items-center gap-3 w-[70%]">
                        <div class="w-10 h-10 rounded-xl flex items-center justify-center shadow-md bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 text-primary">
                          <i class="pi text-xl animate-bounce" :class="getFileIcon(doc.extension)"></i>
                        </div>
                        <div class="overflow-hidden space-y-0.5">
                          <span class="text-sm font-black text-primary block truncate" v-tooltip.bottom="doc.title">{{ doc.title }}</span>
                          <span class="text-[10px] text-primary/80 block uppercase font-black tracking-wider flex items-center gap-1">
                            {{ doc.extension }} • {{ (doc.filesize / 1024).toFixed(1) }} KB • <span class="bg-primary/20 px-1.5 py-0.5 rounded text-[8px] font-extrabold text-primary">{{ $t('employee.pendingUpload') }}</span>
                          </span>
                        </div>
                      </div>
                      <div class="flex items-center gap-1.5 relative z-10">
                        <Button 
                          icon="pi pi-trash" 
                          severity="danger" 
                          text
                          rounded
                          class="!w-8 !h-8 hover:!bg-red-50 dark:hover:!bg-red-950/20" 
                          v-tooltip.top="$t('employee.deletePendingFileTooltip')" 
                          @click="removePendingFile(doc.id)"
                        />
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </TabPanel>

          <!-- Tab 5: Quá trình làm việc -->
          <TabPanel>
            <template #header>
              <div class="flex items-center gap-2 py-1">
                <i class="pi pi-history text-sm"></i>
                <span class="font-bold">{{ $t('employee.workHistory') }}</span>
                <span v-if="tabErrors[4] > 0" class="flex items-center justify-center bg-red-500 text-white text-[10px] font-black w-5 h-5 rounded-full animate-bounce">
                  {{ tabErrors[4] }}
                </span>
              </div>
            </template>

            <div class="p-8 space-y-6">
              <div class="flex justify-between items-center bg-surface-50 dark:bg-surface-900/50 p-4 rounded-2xl border border-surface-100 dark:border-surface-800">
                <div class="flex items-center gap-3">
                  <i class="pi pi-info-circle text-primary"></i>
                  <div>
                    <span class="text-sm font-bold text-surface-700 dark:text-surface-100 block">{{ $t('employee.workHistoryTitle') }}</span>
                    <span class="text-xs text-surface-400 block">{{ $t('employee.workHistoryDesc') }}</span>
                  </div>
                </div>
                <Button :label="$t('employee.btnAddWorkHistory')" icon="pi pi-plus" size="small" @click="addWorkHistory" class="!rounded-xl" />
              </div>

              <div v-if="!form.work_histories || form.work_histories.length === 0" class="flex flex-col items-center py-16 border border-dashed border-surface-200 dark:border-surface-800 rounded-3xl">
                <i class="pi pi-history text-5xl text-surface-300 mb-3"></i>
                <span class="text-sm text-surface-400 font-bold">{{ $t('employee.workHistoryEmpty') }}</span>
              </div>

              <div v-else class="space-y-6">
                <div v-for="(history, index) in form.work_histories" :key="index" class="p-6 bg-surface-50/50 dark:bg-surface-950/40 border border-surface-150 dark:border-surface-800 rounded-3xl relative overflow-hidden group">
                  <div class="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <div class="flex justify-between items-center border-b border-surface-100 dark:border-surface-800 pb-4 mb-6 relative z-10">
                    <h4 class="font-black text-primary flex items-center gap-2">
                      <i class="pi pi-briefcase text-xs"></i> {{ $t('employee.workHistoryStage') }} #{{ index + 1 }}
                      <span v-if="index === 0" class="px-2 py-0.5 rounded text-[8px] bg-primary/20 text-primary font-black uppercase tracking-wider">{{ $t('employee.workHistoryDefault') }}</span>
                    </h4>
                    <Button 
                      v-if="index > 0"
                      icon="pi pi-trash" 
                      severity="danger" 
                      outlined
                      rounded
                      class="!w-8 !h-8 !p-0 !rounded-full hover:!bg-red-50 dark:hover:!bg-red-950/20" 
                      v-tooltip.top="$t('employee.deletePeriodTooltip')" 
                      @click="removeWorkHistory(index)" 
                    />
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                    <AppInputField :label="$t('employee.department')" :isRequired="true" :error="form.workHistoryErrors?.[index]?.department_id">
                      <Select 
                        v-model="history.department_id" 
                        :options="departmentsList" 
                        optionLabel="name" 
                        optionValue="id" 
                        class="w-full !rounded-xl border border-surface-200 dark:border-surface-800" 
                        :disabled="!isEdit && index === 0"
                        @change="onWorkHistoryDeptChange(index)" 
                      />
                      <small v-if="!isEdit && index === 0" class="text-[10px] text-surface-400">{{ $t('employee.workHistorySyncDept') }}</small>
                    </AppInputField>
                    
                    <AppInputField :label="$t('employee.jobTitle')" :isRequired="true" :error="form.workHistoryErrors?.[index]?.job_title_id">
                      <Select 
                        v-model="history.job_title_id" 
                        :options="getJobTitles(history.department_id)" 
                        optionLabel="name" 
                        optionValue="id" 
                        class="w-full !rounded-xl border border-surface-200 dark:border-surface-800" 
                        :disabled="(!isEdit && index === 0) || !history.department_id" 
                        @change="onValidateWorkHistory(index, 'job_title_id')" 
                      />
                      <small v-if="!isEdit && index === 0" class="text-[10px] text-surface-400">{{ $t('employee.workHistorySyncDept') }}</small>
                    </AppInputField>
                    
                    <AppInputField :label="$t('employee.workHistoryStartDate')" :isRequired="true" :error="form.workHistoryErrors?.[index]?.start_date">
                      <DatePickerCommon 
                        v-model="history.start_date" 
                        :invalid="!!form.workHistoryErrors?.[index]?.start_date" 
                        :disabled="!isEdit && index === 0"
                        @change="onValidateWorkHistory(index, 'start_date')" 
                      />
                      <small v-if="!isEdit && index === 0" class="text-[10px] text-surface-400">{{ $t('employee.workHistorySyncJoin') }}</small>
                    </AppInputField>
                    
                    <AppInputField :label="$t('employee.workHistoryEndDate')" :error="form.workHistoryErrors?.[index]?.end_date">
                      <DatePickerCommon 
                        v-model="history.end_date" 
                        :invalid="!!form.workHistoryErrors?.[index]?.end_date" 
                        @change="onValidateWorkHistory(index, 'end_date')" 
                      />
                    </AppInputField>

                    <AppInputField :label="$t('employee.workHistorySalary')" :error="form.workHistoryErrors?.[index]?.salary">
                      <div class="relative group">
                        <i class="pi pi-money-bill absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                        <InputNumber 
                          v-model="history.salary" 
                          :invalid="!!form.workHistoryErrors?.[index]?.salary" 
                          mode="decimal" 
                          class="w-full !rounded-xl !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4" 
                          :placeholder="$t('employee.placeholderSalary')" 
                          @change="onValidateWorkHistory(index, 'salary')" 
                        />
                      </div>
                    </AppInputField>

                    <AppInputField :label="$t('employee.workHistoryNote')" :error="form.workHistoryErrors?.[index]?.note">
                      <InputText 
                        v-model="history.note" 
                        class="w-full !rounded-xl !py-2.5 border border-surface-200 dark:border-surface-800 focus:!ring-4" 
                        :placeholder="$t('employee.placeholderSalaryReason')" 
                      />
                    </AppInputField>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  </template>
</div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { showMessage } from '~/utils/global';
import Api from "~/utils/api";
import { useAi } from '~/composables/ai';
import { useDepartment } from '~/composables/master/department';
import { validateOnAllField, validateOnField } from '~/utils/validate';
import { DEFAULT_FORM, FIELD_VALIDATIONS } from '~/pages/master/employee/data';

const props = defineProps({
  id: { type: String, default: null }
});

const emit = defineEmits(['save-success']);

const router = useRouter();
const { t } = useI18n();
const { createEmployee, updateEmployee, getEmployee, uploadDocument, deleteDocument } = useEmployee();
const { getDepartments, getDepartmentById } = useDepartment() as any;
const { analyzeFileOcr } = useAi();

const loading = ref(true);
const submitting = ref(false);
const form = reactive<any>({ ...DEFAULT_FORM });

const ocrLoading = ref(false);
const ocrFileInput = ref<HTMLInputElement | null>(null);

const onOcrFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const files = target.files;
  if (!files || files.length === 0) return;

  const validFiles: File[] = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.size > 10 * 1024 * 1024) {
      showMessage('warn', t('employee.ocrFileTooLarge'), t('employee.ocrFileTooLargeDesc', { name: file.name }));
      return;
    }
    validFiles.push(file);
  }

  ocrLoading.value = true;
  const formData = new FormData();
  validFiles.forEach((file) => {
    formData.append('files[]', file);
  });
  formData.append('mode', 'employee');

  analyzeFileOcr({
    data: formData,
    successCallback: (res: any) => {
      const data = res.data?.data;
      if (data) {
        if (data.full_name) form.full_name = data.full_name;
        if (data.full_name_kana) form.full_name_kana = data.full_name_kana;
        if (data.romaji_name) form.romaji_name = data.romaji_name;
        if (data.date_of_birth) form.date_of_birth = new Date(data.date_of_birth);
        if (data.gender) form.gender = data.gender;
        if (data.phone) form.phone = data.phone;
        if (data.email) form.email = data.email;
        if (data.hometown) form.hometown = data.hometown;
        if (data.place_of_birth) form.place_of_birth = data.place_of_birth;
        if (data.nationality) form.nationality = data.nationality;
        if (data.ethnicity) form.ethnicity = data.ethnicity;
        if (data.religion) form.religion = data.religion;
        if (data.join_date) form.join_date = new Date(data.join_date);
        if (data.identity_type) form.identity_type = data.identity_type;
        if (data.identity_number) form.identity_number = data.identity_number;
        if (data.address_registered) form.address_registered = data.address_registered;
        if (data.address_current) form.address_current = data.address_current;
        if (data.tax_code) form.tax_code = data.tax_code;
        if (data.social_insurance_code) form.social_insurance_code = data.social_insurance_code;
        if (data.pension_number) form.pension_number = data.pension_number;
        if (data.employment_insurance_number) form.employment_insurance_number = data.employment_insurance_number;
        if (data.bank_code) form.bank_code = data.bank_code;
        if (data.bank_branch_code) form.bank_branch_code = data.bank_branch_code;
        if (data.bank_account_type) form.bank_account_type = data.bank_account_type;
        if (data.bank_account_number) form.bank_account_number = data.bank_account_number;
        if (data.bank_account_holder_kana) form.bank_account_holder_kana = data.bank_account_holder_kana;

        showMessage('success', t('employee.ocrSuccessTitle'), t('employee.ocrSuccessDesc'));
      } else {
        showMessage('error', t('employee.ocrErrorTitle'), t('employee.ocrErrorDesc'));
      }
    },
    errorCallback: (err: any) => {
      const errorMsg = err?.response?.data?.messages?.message || err?.response?.data?.message || t('employee.ocrConnectError');
      showMessage('error', t('employee.ocrErrorTitle'), errorMsg);
    }
  }).finally(() => {
    ocrLoading.value = false;
    if (target) target.value = '';
  });
};
const jobTitleOptions = ref<any[]>([]);

const departmentsList = ref<any[]>([]);
const jobTitlesForDept = reactive<Record<number, any[]>>({});

const fetchDepartmentsList = () => {
  getDepartments({
    query: 'per_page=-1',
    successCallback: (res: any) => {
      departmentsList.value = Array.isArray(res.data?.data) ? res.data.data : [];
    },
    errorCallback: () => {}
  });
};

const loadJobTitlesForDept = (deptId: number) => {
  if (!deptId || jobTitlesForDept[deptId]) return;
  getDepartmentById({
    id: deptId,
    successCallback: (res: any) => {
      const data = res.data?.data;
      if (data && data.job_titles) {
        jobTitlesForDept[deptId] = data.job_titles;
      }
    },
    errorCallback: () => {}
  });
};

const getJobTitles = (deptId: any) => {
  if (!deptId) return [];
  return Array.isArray(jobTitlesForDept[deptId]) ? jobTitlesForDept[deptId] : [];
};

const addWorkHistory = () => {
  if (!form.work_histories) form.work_histories = [];
  if (!form.workHistoryErrors) form.workHistoryErrors = [];

  let nextStartDate = null;
  if (form.work_histories.length > 0) {
    const lastItem = form.work_histories[form.work_histories.length - 1];
    if (lastItem.end_date) {
      const d = new Date(lastItem.end_date);
      d.setDate(d.getDate() + 1);
      nextStartDate = d;
    }
  }

  form.work_histories.push({
    department_id: null,
    job_title_id: null,
    start_date: nextStartDate,
    end_date: null,
    salary: null,
    note: ''
  });
  form.workHistoryErrors.push({
    department_id: '', job_title_id: '', start_date: '', end_date: '', salary: ''
  });
};

const removeWorkHistory = (index: number) => {
  form.work_histories.splice(index, 1);
  form.workHistoryErrors.splice(index, 1);
};

const onWorkHistoryDeptChange = (index: number) => {
  const item = form.work_histories[index];
  if (!item) return;
  item.job_title_id = null;
  onValidateWorkHistory(index, 'department_id');
  onValidateWorkHistory(index, 'job_title_id');
  if (item.department_id) {
    loadJobTitlesForDept(item.department_id);
  }
};

const onValidateWorkHistory = (index: number, field: string) => {
  const item = form.work_histories[index];
  if (!item) return;
  if (!form.workHistoryErrors[index]) {
    form.workHistoryErrors[index] = { department_id: '', job_title_id: '', start_date: '', end_date: '', salary: '' };
  }
  const itemError = form.workHistoryErrors[index];

  const FIELD_VALIDATIONS_HIST = {
    department_id: { transitionKey: "employee.department", types: ["require"], errorKey: "department_id" },
    job_title_id: { transitionKey: "employee.jobTitle", types: ["require"], errorKey: "job_title_id" },
    start_date: { transitionKey: "employee.startDate", types: ["require"], errorKey: "start_date" },
    salary: { transitionKey: "employee.salary", types: ["min0"], errorKey: "salary" }
  };

  validateOnField(field, item, itemError, FIELD_VALIDATIONS_HIST, t);

  if (field === 'end_date' || field === 'start_date') {
    if (item.start_date && item.end_date && new Date(item.end_date) < new Date(item.start_date)) {
      itemError.end_date = t("employee.endDateBeforeStartDate");
    } else {
      itemError.end_date = "";
    }
  }
};

const validateAllWorkHistories = () => {
  let allValid = true;
  form.workHistoryErrors = [];

  if (form.work_histories) {
    form.work_histories.forEach((item: any, index: number) => {
      form.workHistoryErrors.push({
        department_id: '', job_title_id: '', start_date: '', end_date: '', salary: ''
      });

      const FIELD_VALIDATIONS_HIST = {
        department_id: { transitionKey: t('employee.department'), types: ["require"], errorKey: "department_id" },
        job_title_id: { transitionKey: t('employee.jobTitle'), types: ["require"], errorKey: "job_title_id" },
        start_date: { transitionKey: t('employee.workHistoryStartDate'), types: ["require"], errorKey: "start_date" },
        salary: { transitionKey: t('employee.workHistorySalary'), types: ["min0"], errorKey: "salary" }
      };

      const isValid = validateOnAllField(item, form.workHistoryErrors[index], FIELD_VALIDATIONS_HIST, t);
      
      if (item.start_date && item.end_date && new Date(item.end_date) < new Date(item.start_date)) {
        form.workHistoryErrors[index].end_date = t('employee.workHistoryDateError');
        allValid = false;
      }

      if (!isValid) {
        allValid = false;
      }
    });
  }
  return allValid;
};

watch(
  () => [form.join_date, form.department_id, form.job_title_id],
  ([newJoinDate, newDeptId, newJobTitleId]) => {
    if (isEdit.value) return;
    if (!form.work_histories) {
      form.work_histories = [];
    }
    if (form.work_histories.length === 0) {
      form.work_histories.push({
        department_id: newDeptId,
        job_title_id: newJobTitleId,
        start_date: newJoinDate,
        salary: null,
        note: t('employee.workHistoryDefault')
      });
      form.workHistoryErrors.push({
        department_id: '', job_title_id: '', start_date: '', end_date: '', salary: ''
      });
    } else {
      const first = form.work_histories[0];
      first.department_id = newDeptId;
      first.job_title_id = newJobTitleId;
      first.start_date = newJoinDate;
    }
    if (newDeptId) {
      loadJobTitlesForDept(newDeptId);
    }
  },
  { deep: true }
);

const pendingFiles = ref<{ id: string, file: File, title: string, extension: string, filesize: number }[]>([]);

const removePendingFile = (id: string) => {
  pendingFiles.value = pendingFiles.value.filter(f => f.id !== id);
  showMessage('success', t('text.success'), 't("employee.removedPendingFile")');
};

const onDepartmentChange = (deptId: any) => {
  form.job_title_id = null;
  jobTitleOptions.value = [];
  onValidate('department_id');
  onValidate('job_title_id');

  if (deptId) {
    getDepartmentById({
      id: deptId,
      successCallback: (res: any) => {
        const data = res.data?.data;
        if (data && data.job_titles) {
          jobTitleOptions.value = data.job_titles;
        }
      },
      errorCallback: () => {}
    });
  }
};

const avatarInput = ref<HTMLInputElement | null>(null);

const triggerAvatarUpload = () => {
  avatarInput.value?.click();
};

const onAvatarFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;

  if (file.size > 2 * 1024 * 1024) {
    showMessage('warn', 'Ảnh quá lớn', 'Vui lòng chọn ảnh có dung lượng dưới 2MB.');
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    form.avatar = event.target?.result as string;
  };
  reader.readAsDataURL(file);
};

const currentUser = ref<any>(null);

const canManageOrg = computed(() => {
  if (!currentUser.value) return false;
  const role = currentUser.value.role;
  return role === 'ADMIN' || role === 'MANAGER' || role === 'HR';
});

const roleTooltipHtml = computed(() => {
  return `<div class='p-3 space-y-2 text-xs line-clamp-none'>
    <div class='font-bold text-sm border-b border-surface-200 dark:border-surface-700 pb-1 mb-2'>${t('employee.roleRbacTooltipTitle')}</div>
    <div><strong>• ${t('employee.roleAdmin')}:</strong> ${t('employee.roleAdminDesc')}</div>
    <div><strong>• ${t('employee.roleManager')}:</strong> ${t('employee.roleManagerDesc')}</div>
    <div><strong>• ${t('employee.roleHr')}:</strong> ${t('employee.roleHrDesc')}</div>
    <div><strong>• ${t('employee.roleAccountant')}:</strong> ${t('employee.roleAccountantDesc')}</div>
    <div><strong>• ${t('employee.roleStaff')}:</strong> ${t('employee.roleStaffDesc')}</div>
  </div>`;
});

const initDepartment = ref<any>(null);
const isEdit = computed(() => !!props.id);

const roleOptions = computed(() => [
  { label: t('employee.roleAdmin'), value: 'ADMIN' },
  { label: t('employee.roleManager'), value: 'MANAGER' },
  { label: t('employee.roleHr'), value: 'HR' },
  { label: t('employee.roleAccountant'), value: 'ACCOUNTANT' },
  { label: t('employee.roleStaff'), value: 'STAFF' }
]);

const getRoleDesc = (val: string) => {
  const map: Record<string, string> = {
    ADMIN: t('employee.roleAdminDesc'),
    MANAGER: t('employee.roleManagerDesc'),
    HR: t('employee.roleHrDesc'),
    ACCOUNTANT: t('employee.roleAccountantDesc'),
    STAFF: t('employee.roleStaffDesc')
  };
  return map[val] || '';
};
const statusOptions = computed(() => [
  { label: t('employee.statusActive'), value: 'ACTIVE' },
  { label: t('employee.statusProbation'), value: 'PROBATION' },
  { label: t('employee.statusInactive'), value: 'INACTIVE' }
]);
const identityTypes = [{ label: 'CCCD', value: 'CCCD' }, { label: 'My Number', value: 'MY_NUMBER' }, { label: 'Thẻ cư trú', value: 'ZAIRYU_CARD' }, { label: 'Hộ chiếu', value: 'PASSPORT' }];
const relOptions = [{ label: 'Vợ/Chồng', value: 'SPOUSE' }, { label: 'Con', value: 'CHILD' }, { label: 'Bố/Mẹ', value: 'PARENT' }, { label: 'Anh/Chị/Em', value: 'SIBLING' }, { label: 'Khác', value: 'OTHER' }];

onMounted(() => {
  if (process.client) {
    const raw = localStorage.getItem("userInfo");
    if (raw) {
      currentUser.value = JSON.parse(raw);
    }
  }
  fetchDepartmentsList();
  if (isEdit.value) {
    fetchEmployee();
  } else {
    loading.value = false;
  }
});

const fetchEmployee = () => {
  getEmployee({
    id: Number(props.id),
    successCallback: (res: any) => {
      const data = res.data?.data;
      Object.assign(form, {
        ...data,
        password: '',
        department_id: data.department?.id,
        job_title_id: data.job_title?.id,
        relatives: Array.isArray(data.relatives) ? data.relatives.map((rel: any) => ({
          ...rel,
          date_of_birth: rel.date_of_birth ? new Date(rel.date_of_birth) : null
        })) : [],
        relativeErrors: Array.isArray(data.relatives) ? data.relatives.map(() => ({
          full_name: '', relationship: '', phone: '', email: '', occupation: ''
        })) : [],
        work_histories: Array.isArray(data.work_histories) ? data.work_histories.map((hist: any) => ({
          ...hist,
          start_date: hist.start_date ? new Date(hist.start_date) : null,
          end_date: hist.end_date ? new Date(hist.end_date) : null,
          salary: hist.salary ? Number(hist.salary) : null
        })) : [],
        workHistoryErrors: Array.isArray(data.work_histories) ? data.work_histories.map(() => ({
          department_id: '', job_title_id: '', start_date: '', end_date: '', salary: ''
        })) : []
      });

      if (data.department) {
        initDepartment.value = { id: data.department.id, name: data.department.name };
        getDepartmentById({
          id: data.department.id,
          successCallback: (response: any) => {
            const deptData = response.data?.data;
            if (deptData && deptData.job_titles) {
              jobTitleOptions.value = deptData.job_titles;
            }
          },
          errorCallback: () => {}
        });
      }

      if (Array.isArray(data.work_histories)) {
        data.work_histories.forEach((hist: any) => {
          if (hist.department_id) {
            loadJobTitlesForDept(hist.department_id);
          }
        });
      }

      if (data.join_date) form.join_date = new Date(data.join_date);
      if (data.zairyu_card_expiry) form.zairyu_card_expiry = new Date(data.zairyu_card_expiry);
      if (data.date_of_birth) form.date_of_birth = new Date(data.date_of_birth);
      loading.value = false;
    },
    errorCallback: () => { loading.value = false; }
  });
};

const onValidate = (key: string) => {
  return validateOnField(key, form, form, FIELD_VALIDATIONS, t);
};

const onValidateRelative = (index: number, field: string) => {
  const relative = form.relatives[index];
  if (!relative) return;
  if (!form.relativeErrors[index]) {
    form.relativeErrors[index] = { full_name: '', relationship: '', phone: '', email: '', occupation: '' };
  }
  const relError = form.relativeErrors[index];

  const FIELD_VALIDATIONS_REL = {
    full_name: { transitionKey: "employee.fullName", types: ["require", "max150"], errorKey: "full_name" },
    relationship: { transitionKey: "employee.relationship", types: ["require"], errorKey: "relationship" },
    phone: { transitionKey: "employee.phone", types: ["require", "max20"], errorKey: "phone" },
    email: { transitionKey: "employee.email", types: ["validEmail", "max150"], errorKey: "email" },
    occupation: { transitionKey: "employee.occupation", types: ["max150"], errorKey: "occupation" }
  };

  validateOnField(field, relative, relError, FIELD_VALIDATIONS_REL, t);
};

const validateAllRelatives = () => {
  let allValid = true;
  form.relativeErrors = [];
  
  if (form.relatives) {
    form.relatives.forEach((relative: any, index: number) => {
      form.relativeErrors.push({
        full_name: '', relationship: '', phone: '', email: '', occupation: ''
      });

      const FIELD_VALIDATIONS_REL = {
        full_name: { transitionKey: "employee.fullName", types: ["require", "max150"], errorKey: "full_name" },
        relationship: { transitionKey: "employee.relationship", types: ["require"], errorKey: "relationship" },
        phone: { transitionKey: "employee.phone", types: ["require", "max20"], errorKey: "phone" },
        email: { transitionKey: "employee.email", types: ["validEmail", "max150"], errorKey: "email" },
        occupation: { transitionKey: "employee.occupation", types: ["max150"], errorKey: "occupation" }
      };

      const isValid = validateOnAllField(relative, form.relativeErrors[index], FIELD_VALIDATIONS_REL, t);
      if (!isValid) {
        allValid = false;
      }
    });
  }
  return allValid;
};

const tabErrors = computed(() => {
  const errors = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };

  // Tab 0 errors
  const tab0Fields = [
    'errorFullName', 'errorFullNameKana', 'errorRomajiName', 'errorEmail', 'errorPhone', 
    'errorPassword', 'errorDepartmentId', 'errorJobTitleId', 'errorJoinDate',
    'errorDateOfBirth', 'errorGender', 'errorHometown', 'errorPlaceOfBirth', 
    'errorNationality', 'errorEthnicity', 'errorReligion', 'errorAddressRegistered', 'errorAddressCurrent'
  ];
  tab0Fields.forEach(k => { if (form[k]) errors[0]++; });

  // Tab 1 errors
  const tab1Fields = ['errorIdentityNumber', 'errorTaxCode', 'errorSocialInsuranceCode', 'errorPensionNumber', 'errorEmploymentInsuranceNumber'];
  tab1Fields.forEach(k => { if (form[k]) errors[1]++; });

  // Tab 2 errors
  const tab2Fields = ['errorBankCode', 'errorBankBranchCode', 'errorBankAccountType', 'errorBankAccountNumber', 'errorBankAccountHolderKana'];
  tab2Fields.forEach(k => { if (form[k]) errors[2]++; });

  // Tab 3 errors (Relatives)
  if (form.relativeErrors) {
    form.relativeErrors.forEach((relErr: any) => {
      Object.values(relErr).forEach(val => { if (val) errors[3]++; });
    });
  }

  // Tab 4 errors (Work History)
  if (form.workHistoryErrors) {
    form.workHistoryErrors.forEach((histErr: any) => {
      Object.values(histErr).forEach(val => { if (val) errors[4]++; });
    });
  }

  return errors;
});

const addRelative = () => {
  if (!form.relatives) form.relatives = [];
  if (!form.relativeErrors) form.relativeErrors = [];

  form.relatives.push({
    relationship: 'SPOUSE', full_name: '', phone: '', email: '', occupation: '', date_of_birth: null, is_emergency_contact: false, is_dependent: false
  });
  form.relativeErrors.push({
    full_name: '', relationship: '', phone: '', email: '', occupation: ''
  });
};

const removeRelative = (index: number) => {
  form.relatives.splice(index, 1);
  form.relativeErrors.splice(index, 1);
};

const goBack = () => router.push('/master/employee');
const formatDate = (d: any) => { if (!d) return null; const dt = new Date(d); return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`; };

const handleSubmit = () => {
  if (submitting.value) return;
  submitting.value = true;
  
  // Custom validations (password never validated on edit)
  const validationSchema = { ...FIELD_VALIDATIONS } as any;
  delete validationSchema.password;

  const isEmployeeValid = validateOnAllField(form, form, validationSchema, t);
  const areRelativesValid = validateAllRelatives();
  const areHistoriesValid = validateAllWorkHistories();

  if (!isEmployeeValid || !areRelativesValid || !areHistoriesValid) {
    showMessage('warn', 'Thiếu thông tin', 'Vui lòng kiểm tra các tab có đánh dấu lỗi đỏ để hoàn thiện thông tin.');
    submitting.value = false;
    return;
  }

  const payload = JSON.parse(JSON.stringify(form));
  
  payload.join_date = formatDate(form.join_date);
  payload.zairyu_card_expiry = formatDate(form.zairyu_card_expiry);
  payload.date_of_birth = formatDate(form.date_of_birth);

  if (payload.relatives) {
    payload.relatives = payload.relatives.map((rel: any) => ({
      ...rel,
      date_of_birth: formatDate(rel.date_of_birth)
    }));
  }

  if (payload.work_histories) {
    payload.work_histories = payload.work_histories.map((hist: any) => ({
      ...hist,
      start_date: formatDate(hist.start_date),
      end_date: formatDate(hist.end_date),
      salary: hist.salary ? Number(hist.salary) : null
    }));
  }

  // Clean validation helper fields from payload
  delete payload.company; delete payload.department; delete payload.created_at; delete payload.updated_at; delete payload.id; delete payload.code;
  if (isEdit.value) delete payload.password;

  Object.keys(payload).forEach(k => {
    if (k.startsWith('error') || k === 'relativeErrors' || k === 'workHistoryErrors') {
      delete payload[k];
    }
  });

  Object.keys(payload).forEach(k => { if (payload[k] === '' || payload[k] === null) delete payload[k]; });

  const callback = {
    successCallback: (res?: any) => {
      const updatedEmployee = res?.data?.data;
      if (updatedEmployee && import.meta.client) {
        try {
          const raw = localStorage.getItem('userInfo');
          if (raw) {
            const userInfo = JSON.parse(raw);
            if (userInfo.id === updatedEmployee.id) {
              localStorage.setItem('userInfo', JSON.stringify(updatedEmployee));
              window.dispatchEvent(new Event('userInfoUpdated'));
            }
          }
        } catch (e) {}
      }

      const newEmployeeId = updatedEmployee?.id;
      if (newEmployeeId && pendingFiles.value.length > 0) {
        uploadPendingFiles(newEmployeeId);
      } else {
        submitting.value = false;
        showMessage('success', t('text.success'), isEdit.value ? 'Đã cập nhật thông tin nhân viên.' : 'Đã tạo nhân viên mới thành công.');
        emit('save-success');
      }
    },
    errorCallback: (error: any) => {
      submitting.value = false;
      showMessage('error', t('text.error'), error.message || t('text.errorMessage'));
    }
  };

  if (isEdit.value) {
    updateEmployee({ id: Number(props.id), data: payload, ...callback });
  } else {
    createEmployee({ data: payload, ...callback });
  }
};

const uploadPendingFiles = async (employeeId: number) => {
  submitting.value = true;
  uploadingDoc.value = true;
  
  let successCount = 0;
  let failCount = 0;
  
  for (const item of pendingFiles.value) {
    const formData = new FormData();
    formData.append('file', item.file);
    formData.append('title', item.title);
    
    try {
      await new Promise<void>((resolve, reject) => {
        uploadDocument({
          employeeId: employeeId,
          data: formData,
          successCallback: () => {
            successCount++;
            resolve();
          },
          errorCallback: (err: any) => {
            failCount++;
            reject(err);
          }
        });
      });
    } catch (e) {
      console.error('Lỗi khi tải lên file:', item.title, e);
    }
  }
  
  submitting.value = false;
  uploadingDoc.value = false;
  
  if (failCount === 0) {
    showMessage('success', t('text.success'), t("employee.createAndUploadSuccess", { successCount }));
  } else {
    showMessage('warn', 'Tải tài liệu có lỗi', t("employee.createSuccessUploadError", { successCount, failCount }));
  }
  
  emit('save-success');
};

const docInput = ref<HTMLInputElement | null>(null);
const uploadingDoc = ref(false);

const triggerDocUpload = () => {
  docInput.value?.click();
};

const onDocFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;

  // Giới hạn dung lượng 10MB
  if (file.size > 10 * 1024 * 1024) {
    showMessage('warn', 'File quá lớn', 'Vui lòng chọn tài liệu có dung lượng dưới 10MB.');
    return;
  }

  if (!isEdit.value) {
    // Thêm vào hàng đợi pendingFiles
    const ext = file.name.split('.').pop() || '';
    pendingFiles.value.push({
      id: Date.now().toString() + Math.random().toString(),
      file: file,
      title: file.name,
      extension: ext,
      filesize: file.size
    });
    showMessage('success', t('text.success'), 't("employee.addedPendingFile")');
    target.value = '';
    return;
  }

  uploadingDoc.value = true;
  const formData = new FormData();
  formData.append('file', file);
  formData.append('title', file.name);

  uploadDocument({
    employeeId: Number(props.id),
    data: formData,
    successCallback: (res: any) => {
      uploadingDoc.value = false;
      showMessage('success', t('text.success'), 't("employee.uploadDocsSuccess")');
      // Refresh dữ liệu nhân viên để cập nhật danh sách documents
      fetchEmployee();
    },
    errorCallback: (err: any) => {
      uploadingDoc.value = false;
      showMessage('error', t('text.error'), err.message || 't("employee.uploadDocsFailed")');
    }
  });

  // Reset input
  target.value = '';
};

const getFileIcon = (ext: string) => {
  if (!ext) return 'pi-file';
  const extension = ext.toLowerCase();
  if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) return 'pi-image';
  if (['pdf'].includes(extension)) return 'pi-file-pdf';
  if (['doc', 'docx'].includes(extension)) return 'pi-file-word';
  if (['xls', 'xlsx'].includes(extension)) return 'pi-file-excel';
  return 'pi-file';
};

const previewFile = (doc: any) => {
  if (!doc.id) return;
  Api.get(`/documents/${doc.id}/download`, { responseType: 'blob' })
    .then((response: any) => {
      const file = new Blob([response.data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank');
    })
    .catch((err: any) => {
      showMessage('error', t('btn.error'), t('employee.viewError'));
    });
};

const downloadFile = (doc: any) => {
  if (!doc.id) return;
  Api.get(`/documents/${doc.id}/download`, { responseType: 'blob' })
    .then((response: any) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', doc.origin_name || 'document.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch((err: any) => {
      showMessage('error', t('btn.error'), t('employee.downloadError'));
    });
};

const confirmDeleteDoc = (docId: number) => {
  if (!confirm('Bạn có chắc chắn muốn xóa chứng từ này không? Hành động này không thể hoàn tác.')) {
    return;
  }

  deleteDocument({
    documentId: docId,
    successCallback: () => {
      showMessage('success', t('text.success'), 't("employee.deleteDocSuccess")');
      fetchEmployee();
    },
    errorCallback: (err: any) => {
      showMessage('error', t('text.error'), err.message || 't("employee.deleteDocFailed")');
    }
  });
};
</script>

<style scoped>
/* Tab Container Glassmorphic & Premium Card styling */
:deep(.modern-tabs) {
  border: none !important;
  background: transparent !important;
}

/* Tab Bar container (Thanh điều hướng tab dạng viên thuốc Pill sang trọng) */
:deep(.p-tabview-nav-container) {
  position: relative;
  border-bottom: 1px solid #f1f5f9 !important; /* slate-100 */
}
.dark :deep(.p-tabview-nav-container) {
  border-bottom: 1px solid #1e293b !important; /* slate-800 */
}

:deep(.p-tabview-nav) {
  display: flex !important;
  gap: 8px !important;
  padding: 10px 14px !important;
  background: #f8fafc !important; /* slate-50 */
  border: none !important;
  border-bottom-left-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

.dark :deep(.p-tabview-nav) {
  background: #0f172a !important; /* deep slate-900 */
}

/* Từng Tab Header item */
:deep(.p-tabview-header) {
  background: transparent !important;
  border: none !important;
  margin: 0 !important;
}

/* Thẻ A bên trong (Nút bấm) */
:deep(.p-tabview-nav-link) {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  padding: 10px 18px !important;
  font-size: 13px !important;
  font-weight: 700 !important;
  color: #64748b !important; /* slate-500 */
  background: transparent !important;
  border: none !important;
  border-radius: 12px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  cursor: pointer !important;
  box-shadow: none !important;
}

.dark :deep(.p-tabview-nav-link) {
  color: #94a3b8 !important; /* slate-400 */
}

/* Hover State */
:deep(.p-tabview-header:not(.p-highlight) .p-tabview-nav-link:hover) {
  background: #e2e8f0 !important; /* slate-200 */
  color: #0f172a !important;
}

.dark :deep(.p-tabview-header:not(.p-highlight) .p-tabview-nav-link:hover) {
  background: #1e293b !important; /* slate-800 */
  color: #f8fafc !important;
}

/* Active Highlight State (Nổi bật hẳn lên với shadow và background màu trắng tinh khiết) */
:deep(.p-tabview-header.p-highlight .p-tabview-nav-link) {
  background: #ffffff !important;
  color: #3b82f6 !important; /* primary color */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03) !important;
  transform: translateY(-1px);
}

.dark :deep(.p-tabview-header.p-highlight .p-tabview-nav-link) {
  background: #1e293b !important; /* active dark mode card */
  color: #3b82f6 !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
}

/* Panels styling */
:deep(.p-tabview-panels) {
  padding: 0 !important;
  background: transparent !important;
}
</style>

