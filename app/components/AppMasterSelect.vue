<template>
  <div class="flex flex-col gap-1 w-full app-master-select">
    <label v-if="label" :for="id" class="font-bold text-surface-700 dark:text-surface-300 ml-1 mb-1">
      {{ label }}
      <span v-if="isRequired" class="text-red-500 ml-1">*</span>
    </label>
    <Select
      :id="id"
      v-model="internalValue"
      :options="options"
      :optionLabel="optionLabel"
      :optionValue="optionValue"
      :placeholder="placeholder"
      :loading="loading"
      :filter="true"
      :disabled="disabled"
      showClear
      @filter="onFilter"
      @before-show="onShow"
      :virtualScrollerOptions="{ 
        lazy: true, 
        onLazyLoad: onLazyLoad, 
        itemSize: 42,
        showLoader: true,
        loading: loadingMore
      }"
      class="w-full rounded-xl transition-all duration-200"
      :class="{ '!border-red-500 !ring-red-500/20': error }"
    >
      <template #option="slotProps">
        <slot name="option" :option="slotProps.option">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary text-xs font-bold">
              {{ String(slotProps.option[optionValue]).slice(0, 2) }}
            </div>
            <div class="flex flex-col">
              <span class="font-medium text-surface-900 dark:text-surface-0">{{ slotProps.option[optionLabel] }}</span>
              <span class="text-[10px] text-surface-400 font-mono uppercase">{{ slotProps.option[optionValue] }}</span>
            </div>
          </div>
        </slot>
      </template>
      
      <template #dropdownicon>
        <i v-if="loading" class="pi pi-spin pi-spinner text-surface-400"></i>
        <i v-else class="pi pi-chevron-down text-surface-400 text-xs"></i>
      </template>

      <template #loadingicon>
        <i class="pi pi-spin pi-spinner text-primary"></i>
      </template>
    </Select>
    <AppMessageError :error="error" />
  </div>
</template>

<script lang="ts">
/**
 * Global cache to share options across multiple AppMasterSelect instances to improve UX and reduce API calls
 */
const globalCache: Record<string, any[]> = {};
const globalTotalPages: Record<string, number> = {};
</script>

<script setup lang="ts">
import { ref, watch } from "vue";
import { debounce } from "lodash-es";

interface Props {
  modelValue?: any;
  id?: string;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  error?: string | boolean | any;
  apiFunction: (params: { query: string, successCallback: Function, errorCallback: Function }) => any;
  optionLabel?: string;
  optionValue?: string;
  pageSize?: number;
  searchKeys?: string[];
  cacheKey: string;
  initItem?: any;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  placeholder: "",
  isRequired: false,
  error: "",
  optionLabel: "name",
  optionValue: "code",
  pageSize: 30,
  searchKeys: () => ["name", "code"],
  initItem: null,
  disabled: false
});

const emit = defineEmits(["update:modelValue", "change"]);

const internalValue = ref(props.modelValue);
const loading = ref(false);
const loadingMore = ref(false);
const page = ref(1);
const keyword = ref("");
const options = ref<any[]>([]);

// Sync initial value
watch(() => props.modelValue, (newVal) => {
  internalValue.value = newVal;
}, { immediate: true });

// Sync options when initItem changes
watch(() => props.initItem, (item) => {
  if (item && !options.value.find((o) => o[props.optionValue] === item[props.optionValue])) {
    options.value = [item, ...options.value];
  }
}, { immediate: true });

watch(internalValue, (newVal) => {
  emit("update:modelValue", newVal);
  emit("change", newVal);
});

const fetchData = async (isNewSearch = false) => {
  if (isNewSearch) {
    page.value = 1;
  }

  if (loading.value || loadingMore.value) return;

  if (isNewSearch) {
    loading.value = true;
  } else {
    loadingMore.value = true;
  }

  const queryParams = new URLSearchParams();
  queryParams.set("page", page.value.toString());
  queryParams.set("limit", props.pageSize.toString());
  queryParams.set("sorts[id]", "asc");

  if (props.searchKeys && props.searchKeys.length > 0 && keyword.value) {
    props.searchKeys.forEach((key) => {
      queryParams.set(`search[${key}]`, keyword.value);
    });
  }

  try {
    await props.apiFunction({
      query: queryParams.toString(),
      successCallback: (response: any) => {
        const newData = response?.data?.data?.data ?? [];
        
        if (isNewSearch) {
          const filteredNewData = props.initItem 
            ? newData.filter((item: any) => item[props.optionValue] !== props.initItem[props.optionValue]) 
            : newData;
          options.value = props.initItem ? [props.initItem, ...filteredNewData] : newData;
          // Only cache the first page of default search to keep it clean
          if (!keyword.value) {
            globalCache[props.cacheKey] = options.value;
            globalTotalPages[props.cacheKey] = response?.data?.data?.total_pages ?? 1;
          }
        } else {
          // Prevent duplicates
          const uniqueNewData = newData.filter((item: any) => 
            !options.value.some(o => o[props.optionValue] === item[props.optionValue])
          );
          options.value = [...options.value, ...uniqueNewData];
        }
        
        loading.value = false;
        loadingMore.value = false;
      },
      errorCallback: (error: any) => {
        console.error(error);
        loading.value = false;
        loadingMore.value = false;
      },
    });
  } catch (err) {
    console.error(err);
    loading.value = false;
    loadingMore.value = false;
  }
};

const onShow = () => {
  // Use cached data if available and no keyword
  if (!keyword.value && globalCache[props.cacheKey]?.length > 0) {
    options.value = globalCache[props.cacheKey];
    return;
  }
  
  if (options.value.length <= (props.initItem ? 1 : 0)) {
    fetchData(true);
  }
};

const onLazyLoad = (event: any) => {
  const { last } = event;
  const totalItems = options.value.length;
  const totalPages = keyword.value ? 999 : (globalTotalPages[props.cacheKey] || 1);

  if (last >= totalItems && page.value < totalPages) {
    page.value++;
    fetchData();
  }
};

const onFilter = debounce((event: any) => {
  keyword.value = event.value;
  fetchData(true);
}, 500);
</script>

<style scoped>
.app-master-select :deep(.p-select) {
  @apply bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 transition-all;
}

.app-master-select :deep(.p-select.p-focus) {
  @apply border-primary ring-4 ring-primary/10;
}

.app-master-select :deep(.p-select-label) {
  @apply py-2.5 px-4;
}

.app-master-select :deep(.p-select.p-disabled) {
  @apply bg-surface-100 dark:bg-surface-800 border-surface-200 dark:border-surface-700 opacity-60;
}
</style>
