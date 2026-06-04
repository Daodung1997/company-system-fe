<template>
  <div class="flex items-center justify-between mt-4">
    <div class="text-sm text-surface-500 font-medium">
      <span v-html="t('pagination.total', { total: `<span class='font-bold text-surface-900 dark:text-surface-0'>${total}</span>` })"></span>
    </div>
    <Paginator
      :first="first"
      :rows="rowsPerPage"
      :totalRecords="total"
      template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="PER_PAGE_LIST"
      @page="onPage"
      class="bg-transparent border-none"
    >
      <template #start>
        <span class="text-xs text-surface-400 font-bold uppercase tracking-widest hidden md:inline ml-2">
          {{ t('pagination.layout') || 'Page Layout' }}
        </span>
      </template>
    </Paginator>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { PER_PAGE_LIST } from "~/config/constants";

const { t } = useI18n();

interface Props {
  currentPage: number;
  rowsPerPage: number;
  total: number;
}

const props = withDefaults(defineProps<Props>(), {
  currentPage: 0,
  rowsPerPage: 10,
  total: 0
});

const emit = defineEmits(["onPageChange"]);

const first = computed(() => props.currentPage * props.rowsPerPage);

const onPage = (event: any) => {
  emit("onPageChange", event);
};
</script>

<style scoped>
:deep(.p-paginator) {
  @apply py-0;
}
:deep(.p-paginator-page),
:deep(.p-paginator-next),
:deep(.p-paginator-last),
:deep(.p-paginator-first),
:deep(.p-paginator-prev) {
  @apply rounded-lg w-9 h-9 min-w-0 transition-all font-bold text-sm;
}
:deep(.p-paginator-page.p-highlight) {
  @apply bg-primary text-white shadow-lg shadow-primary/25;
}
</style>
