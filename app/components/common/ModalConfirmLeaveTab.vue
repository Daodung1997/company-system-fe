<template>
  <Dialog
    :visible="props.modelValue"
    @update:visible="(val) => emit('update:modelValue', val)"
    modal
    :closable="false"
    class="w-full max-w-[450px]"
    :pt="{
      root: 'rounded-3xl border-none shadow-2xl',
      header: 'px-6 pt-6 flex justify-center border-none',
      content: 'px-8 py-4 text-center',
      footer: 'px-8 pb-8 flex justify-center !border-none',
    }"
  >
    <template #header>
      <div class="flex flex-col items-center gap-2">
        <div class="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
          <i class="pi pi-exclamation-triangle text-2xl"></i>
        </div>
        <h3 class="text-xl font-black text-surface-900 dark:text-surface-0 tracking-tight mt-2">
          {{ title }}
        </h3>
      </div>
    </template>

    <p class="text-surface-500 dark:text-surface-400 font-medium leading-relaxed">
      {{ message }}
    </p>

    <template #footer>
      <div class="flex gap-3 w-full max-w-[300px]">
        <Button
          :label="$t('btn.cancel')"
          severity="secondary"
          variant="outlined"
          @click="cancel"
          class="flex-1 py-3 rounded-2xl font-bold border-surface-100 dark:border-surface-800"
        />
        <Button 
          :label="$t('btn.ok')" 
          severity="primary" 
          @click="confirm" 
          class="flex-1 py-3 rounded-2xl font-bold shadow-lg shadow-primary/25"
        />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean;
  title?: string;
  message?: string;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue", "confirm", "cancel"]);

const confirm = () => {
  emit("confirm");
  emit("update:modelValue", false);
};

const cancel = () => {
  emit("cancel");
  emit("update:modelValue", false);
};
</script>
