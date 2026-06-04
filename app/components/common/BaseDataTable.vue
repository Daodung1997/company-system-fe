<template>
  <div class="bg-white dark:bg-surface-950 rounded-2xl shadow-xl shadow-surface-200/50 dark:shadow-none border border-surface-100 dark:border-surface-800 overflow-hidden group/table transition-all duration-300">
    <DataTable
      :value="tableData"
      :rows="perPage"
      stripedRows
      showGridlines
      resizableColumns 
      columnResizeMode="fit"
      tableStyle="min-width: 50rem"
      scrollable
      lazy
      :scrollHeight="scrollHeight"
      @page="onPage"
      @sort="onSort"
      :rowStyle="rowStyleComputed"
      class="p-datatable-modern"
    >
      <template v-if="$slots.header" #header>
        <div class="px-2 py-1">
           <slot name="header" />
        </div>
      </template>

      <Column
        v-for="(column, index) in columns"
        :key="index"
        :field="column.key"
        :sortable="column.sortable || false"
        :style="{ minWidth: column.minWidth }"
        class="whitespace-nowrap"
        :frozen="column.frozen || false"
        :alignFrozen="column.frozen ? 'right' : 'left'"
      >
        <template #header>
          <span class="font-bold text-xs uppercase tracking-widest text-surface-500 dark:text-surface-400">
            {{ column.label ? (typeof column.label === 'string' && column.label.includes('.') ? $t(column.label) : column.label) : '' }}
          </span>
        </template>

        <template #body="slotProps">
          <slot
            name="body"
            :column="column"
            :data="slotProps.data"
            :index="slotProps.index"
          >
            <span class="text-surface-700 dark:text-surface-200 font-medium">{{ slotProps.data[column.key] }}</span>
          </slot>
        </template>
      </Column>

      <template #empty>
        <div class="flex flex-col items-center justify-center py-20 px-4">
           <div class="w-16 h-16 rounded-full bg-surface-50 dark:bg-surface-900 flex items-center justify-center mb-4 transition-transform group-hover/table:scale-110 duration-500">
              <i class="pi pi-inbox text-surface-300 text-3xl"></i>
           </div>
           <span class="text-surface-400 font-medium">
             {{ emptyText }}
           </span>
        </div>
      </template>

      <template #loading>
        <div class="flex items-center justify-center py-20">
           <i class="pi pi-spin pi-spinner text-primary text-4xl"></i>
        </div>
      </template>
    </DataTable>

    <div class="p-4 bg-surface-50/50 dark:bg-surface-900/30 border-t border-surface-100 dark:border-surface-800">
      <BasePagination
        :current-page="currentPage"
        :rows-per-page="perPage"
        :total="total"
        @onPageChange="onPageChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from "vue";
import BasePagination from "~/components/common/BasePagination.vue";

interface ColumnConfig {
  key: string;
  label: string;
  minWidth?: string;
  sortable?: boolean;
  frozen?: boolean;
}

interface Props {
  columns: ColumnConfig[];
  fetchApi: (params: { query: string, successCallback: Function, errorCallback: Function }) => any;
  filters?: Record<string, any>;
  search?: { q?: string };
  isReload?: boolean;
  rows?: number;
  scrollHeight?: string;
  emptyText?: string;
  isCustomRowStyle?: boolean;
  searchKeys?: string[];
  advancedFilters?: any[];
}

const props = withDefaults(defineProps<Props>(), {
  filters: () => ({}),
  search: () => ({ q: "" }),
  isReload: false,
  rows: 10,
  scrollHeight: "58vh",
  emptyText: "No results found",
  isCustomRowStyle: false,
  searchKeys: () => ["name", "code"],
  advancedFilters: () => [],
});

const emit = defineEmits(["onPageChange"]);

const tableData = ref<any[]>([]);
const total = ref(0);
const loading = ref(false);

const currentPage = ref(0);
const perPage = ref(props.rows);
const sortField = ref<string | null>(null);
const sortOrder = ref<number | null>(null);

const rowStyle = (data: any) => {
  if (data?.status === 0) {
    return {
      opacity: "0.7",
      pointerEvents: "none",
    };
  }
  return undefined;
};

const rowStyleComputed: any = computed(() =>
  props.isCustomRowStyle ? rowStyle : null
);

const buildQueryString = () => {
  const params = new URLSearchParams();

  params.set("page", String(currentPage.value + 1));
  params.set("limit", String(perPage.value));

  // Handle Advanced Filters
  if (props.advancedFilters && props.advancedFilters.length > 0) {
    params.set("filters", JSON.stringify(props.advancedFilters));
  } else {
    // Handle Simple Filters
    Object.entries(props.filters).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        params.set(`filters[${key}]`, String(value));
      }
    });
  }

  // Handle Search
  const keyword = props.search.q || "";
  if (keyword && props.searchKeys && props.searchKeys.length > 0) {
    props.searchKeys.forEach((key) => {
      params.set(`search[${key}]`, String(keyword));
    });
  }

  // Handle Sorting
  if (sortField.value) {
    params.set(
      `sorts[${sortField.value}]`,
      sortOrder.value === 1 ? "asc" : "desc"
    );
  } else {
    params.set("sorts[id]", "asc");
  }

  return params.toString();
};

const fetchData = () => {
  if (loading.value) return;
  loading.value = true;

  props.fetchApi({
    query: buildQueryString(),
    successCallback: (response: any) => {
      tableData.value = response?.data?.data?.data ?? [];
      total.value = response?.data?.data?.total ?? 0;
      loading.value = false;
    },
    errorCallback: (error: any) => {
      console.error(error);
      tableData.value = [];
      total.value = 0;
      loading.value = false;
    },
  });
};

const onPage = (event: any) => {
  currentPage.value = event.first / event.rows;
  fetchData();
};

const onPageChange = (event: any) => {
  perPage.value = event.rows || 10;
  emit("onPageChange", event);
  currentPage.value = event.page || 0;
  fetchData();
};

const onSort = (event: any) => {
  sortField.value = event.sortField;
  sortOrder.value = event.sortOrder;
  currentPage.value = 0;
  fetchData();
};

watch(
  () => props.isReload,
  () => {
    currentPage.value = 0;
    fetchData();
  }
);

watch(
  () => props.filters,
  () => {
     currentPage.value = 0;
     fetchData();
  },
  { deep: true }
);

watch(
  () => props.search,
  () => {
     currentPage.value = 0;
     fetchData();
  },
  { deep: true }
);

onMounted(fetchData);
</script>

<style scoped>
.p-datatable-modern :deep(.p-datatable-thead > tr > th) {
  @apply bg-surface-50 dark:bg-surface-900 py-4 border-surface-100 dark:border-surface-800 transition-colors;
}

.p-datatable-modern :deep(.p-datatable-tbody > tr) {
  @apply transition-colors duration-200 border-surface-100 dark:border-surface-800;
}

.p-datatable-modern :deep(.p-datatable-tbody > tr:hover) {
  @apply bg-primary/5 dark:bg-primary/10;
}

.p-datatable-modern :deep(.p-datatable-tbody > tr > td) {
  @apply py-4 border-surface-100 dark:border-surface-800;
}

.p-datatable-modern :deep(.p-datatable-column-resizer-helper) {
  @apply bg-primary;
}
</style>
