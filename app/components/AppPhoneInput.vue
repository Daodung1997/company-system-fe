<template>
  <InputText
    :value="modelValue"
    @input="handleInput"
    @keypress="handleKeyPress"
    v-bind="$attrs"
    class="w-full !rounded-xl !py-2.5 !bg-white dark:!bg-surface-900 border transition-all focus:!ring-4 focus:ring-primary/10 disabled:!bg-surface-100 dark:disabled:!bg-surface-800"
    :class="[
      invalid || $attrs.invalid ? '!border-red-500 !ring-red-500/20' : '!border-surface-200 dark:!border-surface-800'
    ]"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string;
  invalid?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  invalid: false
});

const emit = defineEmits(["update:modelValue"]);

const handleKeyPress = (event: KeyboardEvent) => {
  // Only allow numbers
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
    return;
  }

  // Strict 11-digit limit (strip hyphens to check actual numbers)
  const currentDigits = props.modelValue.replace(/\D/g, "");
  if (currentDigits.length >= 11) {
    event.preventDefault();
  }
};

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  let value = input.value.replace(/\D/g, ""); // Strip non-digits

  // Limit to 11 digits (max for Japanese mobile/standard numbers)
  if (value.length > 11) {
    value = value.slice(0, 11);
  }

  let formattedValue = value;

  if (value.length > 0) {
    if (value.length <= 10) {
      // 10-digit formats
      if (value.startsWith("03") || value.startsWith("06")) {
        // Tokyo (03) or Osaka (06) - format: 2-4-4
        if (value.length > 2 && value.length <= 6) {
          formattedValue = `${value.slice(0, 2)}-${value.slice(2)}`;
        } else if (value.length > 6) {
          formattedValue = `${value.slice(0, 2)}-${value.slice(2, 6)}-${value.slice(6)}`;
        }
      } else {
        // General 10-digit - format: 3-3-4 (common)
        if (value.length > 3 && value.length <= 6) {
          formattedValue = `${value.slice(0, 3)}-${value.slice(3)}`;
        } else if (value.length > 6) {
          formattedValue = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
        }
      }
    } else {
      // 11-digit format (mobile) - format: 3-4-4
      formattedValue = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
    }
  }

  emit("update:modelValue", formattedValue);
};
</script>
