<template>
  <div :class="['app-input-container w-full', { 'has-error': !!error }]" v-if="inputCheckBox">
    <div class="flex items-center group cursor-pointer">
      <slot></slot>
      <label 
        v-if="label"
        :for="idLabelFor" 
        class="min-h-[23px] font-bold ml-3 flex items-center gap-2 text-surface-700 dark:text-surface-300 transition-colors group-hover:text-primary text-[14px]"
      >
        {{ label }}
        <span v-if="isRequired" class="text-red-500 ml-1">*</span>
      </label>
    </div>
    <AppMessageError :error="error" />
  </div>

  <div 
    v-else 
    :class="['app-input-container w-full transition-all duration-300', isRow ? 'flex flex-col md:flex-row md:items-baseline gap-4 md:gap-0' : 'flex flex-col items-stretch', { 'has-error': !!error }]"
  >
    <label
      v-if="label || $slots.label"
      :for="idLabelFor"
      :class="[
        'font-bold tracking-tight flex items-center gap-2 text-surface-700 dark:text-surface-300 mb-1 transition-colors text-[14px]',
        isRow ? 'w-full md:w-1/4 md:justify-end md:pr-6 md:mb-0' : 'w-full',
      ]"
    >
      {{ label }}
      <span v-if="isRequired" class="text-red-500 ml-1">*</span>
      <slot name="label"></slot>
    </label>

    <div
      :class="[
        'relative transition-all',
        isRow ? 'flex-1' : 'flex-1 flex flex-col',
      ]"
    >
      <slot></slot>
      <div v-if="hint" class="mt-1.5 text-xs text-surface-500 dark:text-surface-400 italic">
        {{ hint }}
      </div>
      <AppMessageError :error="error" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  isRequired?: boolean;
  inputCheckBox?: boolean;
  error?: string | boolean | any;
  idLabelFor?: string;
  isNote?: boolean;
  isRow?: boolean;
  hint?: string;
}

withDefaults(defineProps<Props>(), {
  isRequired: false,
  inputCheckBox: false,
  error: "",
  idLabelFor: "",
  isNote: false,
  isRow: false,
  hint: ""
});
</script>

<style scoped>
.app-input-container :deep(.p-inputtext),
.app-input-container :deep(.p-password-input),
.app-input-container :deep(.p-inputnumber-input),
.app-input-container :deep(.p-inputnumber) {
  border-radius: 0.75rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.app-input-container :deep(.p-select),
.app-input-container :deep(.p-datepicker),
.app-input-container :deep(.p-multiselect) {
  border-radius: 0.75rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.app-input-container :deep(.p-inputtext:focus) {
  transform: translateY(-1px);
}

/* Error styles to enforce red borders on inner PrimeVue inputs */
.app-input-container.has-error :deep(.p-inputtext),
.app-input-container.has-error :deep(.p-password-input),
.app-input-container.has-error :deep(.p-inputnumber-input),
.app-input-container.has-error :deep(.p-inputnumber) {
  border-color: #ef4444 !important;
  box-shadow: 0 0 0 1px #ef4444 !important;
}

.app-input-container.has-error :deep(.p-select),
.app-input-container.has-error :deep(.p-datepicker),
.app-input-container.has-error :deep(.p-multiselect) {
  border-color: #ef4444 !important;
  box-shadow: 0 0 0 1px #ef4444 !important;
}
</style>
