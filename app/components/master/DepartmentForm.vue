<template>
  <div class="w-full px-4 sm:px-6 lg:w-[80%] lg:mx-auto xl:w-[80%] 2xl:w-[75%] space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-10">
    <!-- Header (Premium Glass) -->
    <div class="z-30 flex items-center justify-between bg-white/80 dark:bg-surface-900/80 backdrop-blur-xl p-6 rounded-3xl border border-white dark:border-surface-800 shadow-xl shadow-surface-200/20">
      <div class="flex items-center gap-5">
        <div class="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 rotate-3 hover:rotate-0 transition-transform duration-500">
          <i class="pi pi-sitemap text-white text-2xl"></i>
        </div>
        <div class="space-y-0.5">
          <h1 class="text-2xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ isEdit ? $t('menu.departmentEdit') : $t('menu.departmentAdd') }}
          </h1>
          <p class="text-[10px] text-surface-400 font-black uppercase tracking-[0.2em] flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            {{ isEdit ? $t('department.noteBasic') + ' • ' + form.code : $t('department.noteDetail') }}
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
       <!-- Left: Basic Info -->
       <div class="col-span-12 lg:col-span-8">
          <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 relative overflow-hidden group">
            <div class="flex items-center gap-3 mb-8">
               <div class="w-1.5 h-6 bg-primary rounded-full"></div>
               <div>
                 <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">{{ $t('department.noteBasic') }}</h3>
                 <p class="text-xs text-surface-400 font-medium">{{ $t('department.noteDetail') }}</p>
               </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AppInputField :label="$t('department.code')" idLabelFor="code">
                <div class="relative group">
                  <i class="pi pi-id-card absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                  <InputText
                    id="code"
                    v-model.trim="form.code"
                    class="w-full !rounded-xl !py-2.5 !pl-11 !bg-surface-50 dark:!bg-surface-800 border !border-surface-200 dark:!border-surface-800 !font-mono !font-bold !text-primary"
                    :disabled="true"
                    :placeholder="$t('btn.auto')"
                  />
                </div>
              </AppInputField>

              <AppInputField :label="$t('department.status')">
                 <AppRadioGroup
                    v-model="form.status"
                    :options="[
                      { label: $t('text.active'), value: 'ACTIVE' },
                      { label: $t('text.inactive'), value: 'INACTIVE' }
                    ]"
                    name="departmentStatus"
                  />
              </AppInputField>

              <div class="col-span-2">
                <AppInputField
                  :label="$t('department.name')"
                  :isRequired="true"
                  :error="form.errorName"
                  idLabelFor="name"
                >
                  <div class="relative group">
                    <i class="pi pi-tag absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
                    <InputText
                      id="name"
                      v-model.trim="form.name"
                      class="w-full !rounded-xl !py-2.5 !pl-11 border border-surface-200 dark:border-surface-800 transition-all focus:!ring-4 focus:ring-primary/10"
                      :placeholder="$t('department.namePlaceholder')"
                      :invalid="!!form.errorName"
                      @change="onValidate('name')"
                    />
                  </div>
                </AppInputField>
              </div>

              <!-- Chức vụ thuộc bộ phận -->
              <div class="col-span-2 space-y-4">
                <div class="flex justify-between items-center bg-surface-50 dark:bg-surface-900/50 p-4 rounded-2xl border border-surface-150 dark:border-surface-800">
                  <div class="flex items-center gap-3">
                    <i class="pi pi-briefcase text-primary text-lg"></i>
                    <div>
                      <span class="text-sm font-bold text-surface-700 dark:text-surface-100 block">{{ $t('department.positionListTitle') }}</span>
                      <span class="text-xs text-surface-400 block">{{ $t('department.positionListDesc') }}</span>
                    </div>
                  </div>
                  <Button 
                    :label="$t('department.addPosition')" 
                    icon="pi pi-plus" 
                    severity="secondary" 
                    size="small" 
                    class="!rounded-xl"
                    @click="addJobTitle" 
                  />
                </div>

                <div v-if="!form.job_titles || form.job_titles.length === 0" class="flex flex-col items-center py-10 border border-dashed border-surface-200 dark:border-surface-800 rounded-3xl">
                  <i class="pi pi-briefcase text-4xl text-surface-300 mb-2"></i>
                  <span class="text-xs text-surface-400 font-bold">{{ $t('department.noPositionYet') }}</span>
                </div>

                <div v-else class="space-y-3">
                  <div v-for="(job, index) in form.job_titles" :key="index" class="flex gap-4 items-center bg-surface-50/50 dark:bg-surface-900/30 p-4 rounded-2xl border border-surface-100 dark:border-surface-800 relative group">
                    <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <AppInputField :label="$t('department.positionName')" :isRequired="true" :error="job.errorName">
                        <InputText 
                          v-model.trim="job.name" 
                          class="w-full !rounded-xl !py-2 border border-surface-200 dark:border-surface-800" 
                          :placeholder="$t('department.positionNamePlaceholder')" 
                          :invalid="!!job.errorName"
                        />
                      </AppInputField>
                      <AppInputField :label="$t('department.positionDesc')">
                        <InputText 
                          v-model.trim="job.description" 
                          class="w-full !rounded-xl !py-2 border border-surface-200 dark:border-surface-800" 
                          :placeholder="$t('department.positionDescPlaceholder')" 
                        />
                      </AppInputField>
                    </div>
                    <Button 
                      icon="pi pi-trash" 
                      severity="danger" 
                      outlined 
                      rounded
                      class="!w-9 h-9 !rounded-full shrink-0 align-middle mt-6"
                      @click="removeJobTitle(index)" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
       </div>

       <!-- Right: Notes -->
       <div class="col-span-12 lg:col-span-4 h-full">
          <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 h-full flex flex-col group overflow-hidden relative min-h-[300px] lg:min-h-[400px]">
             <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
             <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase mb-6 relative z-10">{{ $t('department.noteAndDesc') }}</h3>
             <AppInputField idLabelFor="note" class="flex-1 flex flex-col relative z-10">
                <Textarea
                  id="note"
                  v-model.trim="form.note"
                  class="w-full flex-1 !rounded-xl !p-5 !bg-white dark:!bg-surface-900 border !border-surface-200 dark:!border-surface-800 !text-surface-900 dark:!text-surface-0 focus:!ring-4 focus:!ring-primary/10 transition-all !resize-none disabled:!bg-surface-100 dark:disabled:!bg-surface-800 lg:h-full"
                  :placeholder="$t('department.notePlaceholder')"
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
import { validateOnAllField, validateOnField } from "~/utils/validate";
import { showMessage } from "~/utils/global";
import { useDepartment } from "~/composables/master/department";
import { DEFAULT_FORM, FIELD_VALIDATIONS } from "~/pages/master/department/data";

const props = defineProps({
  id: { type: String, default: null }
});

const emit = defineEmits(['save-success']);

const router = useRouter();
const { t } = useI18n();
const { createDepartment, updateDepartment, getDepartmentById } = useDepartment() as any;

const form = reactive({ ...DEFAULT_FORM });
const isLoading = ref(false);
const isEdit = computed(() => !!props.id);

onMounted(() => {
  if (isEdit.value) {
    fetchDepartment();
  } else {
    form.job_titles = [];
  }
});

const fetchDepartment = () => {
  isLoading.value = true;
  getDepartmentById({
    id: props.id,
    successCallback: (response: any) => {
      const data = response.data?.data;
      if (data) {
        Object.assign(form, {
          ...data,
          job_titles: data.job_titles ? data.job_titles.map((job: any) => ({
            id: job.id,
            code: job.code,
            name: job.name,
            description: job.description,
            errorName: ""
          })) : []
        });
      }
      isLoading.value = false;
    },
    errorCallback: (error: any) => {
      isLoading.value = false;
      showMessage("error", t("text.error"), error.message || t("text.errorMessage"));
    },
  });
};

const addJobTitle = () => {
  if (!form.job_titles) {
    form.job_titles = [];
  }
  form.job_titles.push({
    name: "",
    description: "",
    errorName: ""
  });
};

const removeJobTitle = (index: number) => {
  form.job_titles.splice(index, 1);
};

const onValidate = (key: string) => {
  return validateOnField(key, form, form, FIELD_VALIDATIONS, t);
};

const goBack = () => router.push("/master/department");

const submitForm = () => {
  if (isLoading.value) return;
  const isValid = validateOnAllField(form, form, FIELD_VALIDATIONS, t);
  if (!isValid) return;

  // Validate job titles
  let isJobTitlesValid = true;
  if (form.job_titles && form.job_titles.length > 0) {
    form.job_titles.forEach((job: any) => {
      if (!job.name) {
        job.errorName = t("department.valMissPositionName");
        isJobTitlesValid = false;
      } else {
        job.errorName = "";
      }
    });
  }
  if (!isJobTitlesValid) {
    showMessage("warn", t("employee.missingInfo"), t("department.valMissPositionDesc"));
    return;
  }

  isLoading.value = true;
  
  const submitData = {
    name: form.name,
    note: form.note,
    status: form.status,
    job_titles: form.job_titles ? form.job_titles.map((job: any) => {
      const item: any = {
        name: job.name,
        description: job.description
      };
      if (job.id) {
        item.id = job.id;
      }
      return item;
    }) : []
  };

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
    updateDepartment({ id: props.id as string, data: submitData, ...callback });
  } else {
    createDepartment({ data: submitData, ...callback });
  }
};
</script>
