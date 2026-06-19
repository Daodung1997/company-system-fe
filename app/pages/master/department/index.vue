<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <!-- Header Page Section -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700  shadow-md">
      <div class="flex items-center gap-5">
        <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
           <i class="pi pi-sitemap text-2xl"></i>
        </div>
        <div class="space-y-1">
          <h1 class="text-3xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ $t('menu.department') }}
          </h1>
          <p class="text-sm text-surface-500 dark:text-surface-400 font-medium">
            Define organizational structure, branches, and functional units.
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <Button
          :label="$t('menu.departmentAdd')"
          icon="pi pi-plus"
          class="!rounded-2xl !px-8 !py-4 !shadow-lg !shadow-primary/25 !font-bold transition-transform hover:scale-105"
          @click="goToAdd"
        />
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="overflow-hidden">
      <BaseDataTable
        :columns="HEADER_TABLE"
        :fetch-api="getDepartments"
        :is-reload="isReload"
        :search="{ q: search.q }"
        :advanced-filters="advancedFilters"
        @onPageChange="onPageChange"
      >
        <!-- Header Template -->
        <template #header>
          <div class="flex flex-wrap items-center justify-between gap-6 p-2">
            <div class="flex flex-wrap items-center gap-4 flex-1">
              <div class="relative w-full md:w-96 group">
                <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors"></i>
                <InputText
                  v-model="search.q"
                  :placeholder="$t('position.placeholderSearch')"
                  class="w-full !rounded-xl !py-2.5 !pl-11 !bg-white dark:!bg-surface-900 border border-surface-200 dark:border-surface-800 focus:!ring-4 focus:ring-primary/10 transition-all"
                  @input="onFilterData"
                />
              </div>
              
              <div class="w-full md:w-64">
                <MultiSelect
                  v-model="filters.status"
                  :options="statusOptions"
                  optionLabel="label"
                  optionValue="value"
                  :placeholder="$t('text.status')"
                  display="chip"
                  class="w-full !rounded-xl !bg-white dark:!bg-surface-900 border border-surface-200 dark:border-surface-800"
                  @change="onFilterData"
                />
              </div>
            </div>
          </div>
        </template>

        <!-- Body Template -->
        <template #body="{ column, data, index }">
          <template v-if="column.key === 'no'">
            <span class="text-xs font-black text-surface-400 font-mono">
              {{ String(first + index + 1).padStart(2, '0') }}
            </span>
          </template>

          <template v-else-if="column.key === 'name'">
            <div class="flex flex-col">
              <span class="font-bold text-surface-900 dark:text-surface-0 tracking-tight cursor-pointer hover:text-primary transition-colors" @click="viewDepartment(data)">{{ data.name }}</span>
              <span class="text-[10px] text-surface-400 font-black uppercase tracking-widest font-mono mt-0.5">{{ data.code }}</span>
            </div>
          </template>

          <template v-else-if="column.key === 'job_titles'">
            <div class="flex flex-wrap gap-1.5 max-w-[320px]">
              <span v-if="!data.job_titles || data.job_titles.length === 0" class="text-xs text-surface-400 font-bold">{{ $t('department.noJobTitles') }}</span>
              <div 
                v-else 
                v-for="job in data.job_titles" 
                :key="job.id" 
                class="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 cursor-pointer"
                v-tooltip.top="job.description || $t('text.noDescription')"
              >
                <i class="pi pi-briefcase mr-1.5 text-[9px]"></i>
                {{ job.name }}
              </div>
            </div>
          </template>

          <template v-else-if="column.key === 'status'">
            <div 
              class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
              :class="[
                 data.status?.toUpperCase() === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-600' : 
                 data.status?.toUpperCase() === 'INACTIVE' ? 'bg-amber-500/10 text-amber-600' : 
                 'bg-surface-200 text-surface-600'
              ]"
            >
              <div class="w-1.5 h-1.5 rounded-full mr-2" :class="data.status?.toUpperCase() === 'ACTIVE' ? 'bg-emerald-500' : 'bg-amber-500'"></div>
              {{ t('text.' + data.status?.toLowerCase()) }}
            </div>
          </template>

          <template v-else-if="column.key === 'action'">
            <div class="flex items-center gap-1 justify-end">
              <Button
                icon="pi pi-eye"
                v-tooltip.top="t('btn.detail')"
                severity="secondary"
                variant="text"
                class="!w-9 !h-9 !rounded-xl hover:!bg-primary/10 hover:!text-primary transition-all"
                @click="viewDepartment(data)"
              />
              <Button
                icon="pi pi-pencil"
                v-tooltip.top="$t('btn.edit')"
                severity="secondary"
                variant="text"
                class="!w-9 !h-9 !rounded-xl hover:!bg-primary/10 hover:!text-primary transition-all"
                @click="editDepartment(data)"
              />
              <Button
                icon="pi pi-trash"
                v-tooltip.top="$t('btn.delete')"
                severity="danger"
                variant="text"
                class="!w-9 !h-9 !rounded-xl hover:!bg-red-500/10 transition-all text-red-400"
                @click="deleteDepartmentItem(data.code)"
              />
            </div>
          </template>
        </template>
      </BaseDataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useConfirm } from "primevue/useconfirm";
import { showMessage } from "~/utils/global";
import { useDepartment } from "~/composables/master/department";
import { CONFIRM_DIALOG } from "~/config/constants";
import { getStatusOptions } from "~/utils/constants";
import { HEADER_TABLE } from "./data";

const router = useRouter();
const { t } = useI18n();
const confirm = useConfirm();
const { getDepartments, deleteDepartment } = useDepartment() as any;

const statusOptions = getStatusOptions(t);
const search = ref({ q: "" });
const filters = ref({ status: [] });

const advancedFilters = computed(() => {
  const result = [];
  if (filters.value.status && filters.value.status.length > 0) {
    result.push({
      field: "DE.status",
      condition: "=",
      value: filters.value.status,
    });
  }
  return result;
});

const isReload = ref(false);
const first = ref(0);

const onFilterData = () => {
  isReload.value = !isReload.value;
};

const onPageChange = (event: any) => {
  first.value = event.first || 0;
};

const goToAdd = () => router.push("/master/department/add");
const viewDepartment = (department: any) => {
  router.push(`/master/department/${department.code}`);
};
const editDepartment = (department: any) => {
  router.push(`/master/department/${department.code}/edit`);
};

function deleteDepartmentItem(id: string) {
  confirm.require({
    group: CONFIRM_DIALOG,
    header: t("deleteModal.areYouSure"),
    message: t("deleteModal.confirmDelete"),
    accept: () => {
      deleteDepartment({
        id: id,
        successCallback: () => {
          showMessage("success", t("text.success"), t("text.deleteSuccess"));
          onFilterData();
        },
        errorCallback: (error: any) => {
          showMessage("error", t("text.error"), error.message || t("text.errorMessage"));
        },
      });
    },
  });
}
</script>

<style scoped>
:deep(.p-multiselect-label) {
  @apply py-2.5;
}
</style>
