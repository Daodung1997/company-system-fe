<template>
  <span class="relative inline-flex w-full group">
    <DatePicker
      v-model="value"
      showIcon
      fluid
      :invalid="invalid"
      iconDisplay="input"
      showButtonBar
      :disabled="disabled"
      :manualInput="false"
      @update:modelValue="onChangeData"
      :minDate="minDate"
      :maxDate="maxDate"
      :selectionMode="selectionMode"
      :dateFormat="dateFormat"
      :inputClass="['w-full !rounded-xl !py-3 !pl-4 transition-all duration-300 group-hover:border-primary focus:!border-primary focus:!ring-4 focus:!ring-primary/10', inputClass]"
      :view="viewDate"
      class="w-full"
    />
    <Button
      v-if="isValue && !disabled"
      icon="pi pi-times-circle"
      severity="secondary"
      variant="text"
      class="absolute right-14 top-1/2 -translate-y-1/2 !p-0 !w-8 !h-8 opacity-0 group-hover:opacity-100 transition-opacity z-10"
      @click="onClearValue"
    />
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

const value = defineModel<any>();

const isValue = computed(() => {
  let valueDate = value.value;
  if (props.selectionMode === "single") {
    return !!valueDate;
  } else if (props.selectionMode === "range") {
    return (
      valueDate &&
      Array.isArray(valueDate) &&
      valueDate.filter((v) => !!v).length >= 1
    );
  }
  return false;
});

const emit = defineEmits(["change"]);

interface Props {
  selectionMode?: "single" | "range" | "multiple";
  invalid?: boolean;
  minDate?: Date;
  maxDate?: Date;
  inputClass?: string;
  disabled?: boolean;
  dateFormat?: string;
  viewDate?: "date" | "month" | "year";
}

const props = withDefaults(defineProps<Props>(), {
  selectionMode: "single",
  invalid: false,
  disabled: false,
  dateFormat: "yy-mm-dd",
  viewDate: "date"
});

const onClearValue = (e: Event) => {
  e.stopPropagation();
  value.value = null;
  emit("change");
};

const onChangeData = () => {
  emit("change");
};
</script>
