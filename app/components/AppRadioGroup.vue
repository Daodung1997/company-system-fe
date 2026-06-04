<template>
  <div class="flex items-center gap-6 h-[46px]">
    <div
      v-for="option in options"
      :key="String(option.value)"
      class="flex items-center gap-2 cursor-pointer group/radio"
    >
      <RadioButton
        v-model="computedValue"
        :inputId="`${name}-${option.value}`"
        :name="name"
        :value="option.value"
        :disabled="disabled"
      />
      <label
        :for="`${name}-${option.value}`"
        class="text-sm font-bold text-surface-600 dark:text-surface-400 cursor-pointer transition-colors"
        :class="[
          disabled ? 'opacity-50 cursor-not-allowed' : 'group-hover/radio:text-primary',
          option.colorClass || ''
        ]"
      >
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface RadioOption {
  label: string;
  value: string | number | boolean;
  colorClass?: string;
}

interface Props {
  modelValue?: any;
  options: RadioOption[];
  name?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  name: 'radio-group',
  disabled: false
});

const emit = defineEmits(['update:modelValue']);

const computedValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
});
</script>
