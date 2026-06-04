<template>
  <Dialog
    v-model:visible="visible"
    :modal="true"
    :closable="true"
    :draggable="false"
    class="w-full max-w-md mx-4 overflow-hidden"
    :pt="{
      root: 'border-0 shadow-2xl rounded-3xl',
      header: 'px-6 pt-6 border-none flex justify-center',
      content: 'px-8 py-4',
      footer: 'px-8 pb-8 border-none',
    }"
  >
    <template #header>
      <div class="flex flex-col items-center gap-2">
        <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
          <i class="pi pi-file-export text-2xl"></i>
        </div>
        <h3 class="text-xl font-black text-surface-900 dark:text-surface-0 tracking-tight mt-2">
          {{ title }}
        </h3>
      </div>
    </template>

    <div class="space-y-6">
      <div v-if="showLanguageOptions" class="space-y-3">
        <label class="text-xs font-bold text-surface-500 uppercase tracking-widest block">
          {{ $t("confirmModal.language") }}
        </label>
        <div class="grid grid-cols-1 gap-3">
          <div 
            v-for="lang in [{id:'vi', label:'vietnamese'}, {id:'en', label:'english'}, {id:'ja', label:'japanese'}]" 
            :key="lang.id"
            class="flex items-center p-3 bg-surface-50 dark:bg-surface-900 rounded-xl border border-surface-100 dark:border-surface-800 transition-all hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer group"
            @click="toggleLang(lang.id)"
          >
            <Checkbox
              v-model="selectedLanguages"
              :inputId="lang.id"
              :value="lang.id"
              class="mr-3"
              @click.stop
            />
            <label
              :for="lang.id"
              class="text-sm font-semibold text-surface-700 dark:text-surface-200 cursor-pointer flex-1"
            >
              {{ $t(`confirmModal.${lang.label}`) }}
            </label>
          </div>
        </div>
      </div>

      <!-- Custom Content Slot -->
      <div v-if="message" class="text-sm text-surface-500 dark:text-surface-400 bg-surface-50 dark:bg-surface-900 p-4 rounded-xl border border-surface-100 dark:border-surface-800 leading-relaxed italic">
        {{ message }}
      </div>

      <slot name="content"></slot>
    </div>

    <template #footer>
      <div class="flex gap-3 w-full">
        <Button
          :label="cancelText"
          severity="secondary"
          variant="outlined"
          @click="handleCancel"
          class="flex-1 py-3.5 rounded-2xl font-bold border-surface-200 dark:border-surface-800"
        />
        <Button
          :label="confirmText"
          @click="handleConfirm"
          :disabled="showLanguageOptions && selectedLanguages.length === 0"
          class="flex-1 py-3.5 rounded-2xl font-bold shadow-lg shadow-primary/25"
        />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const { t } = useI18n();

interface Props {
  visible?: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  showLanguageOptions?: boolean;
  defaultLanguages?: string[] | string;
}

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  title: () => useI18n().t("confirmModal.confirm"),
  confirmText: () => useI18n().t("confirmModal.confirm"),
  cancelText: () => useI18n().t("confirmModal.cancel"),
  showLanguageOptions: false,
  defaultLanguages: () => ["vi"]
});

const normalizeLanguages = (langs: any) => {
  if (typeof langs === 'string') langs = [langs];
  return (langs || []).map((lang: string) => (lang === "vn" ? "vi" : lang));
};

const emit = defineEmits(["update:visible", "confirm", "cancel"]);

const visible = ref(props.visible);
const selectedLanguages = ref(normalizeLanguages(props.defaultLanguages));

watch(() => props.visible, (newValue) => {
  visible.value = newValue;
  if (newValue) {
    selectedLanguages.value = normalizeLanguages(props.defaultLanguages);
  }
});

watch(visible, (newValue) => {
  emit("update:visible", newValue);
});

const toggleLang = (langId: string) => {
  const index = selectedLanguages.value.indexOf(langId);
  if (index > -1) {
    selectedLanguages.value.splice(index, 1);
  } else {
    selectedLanguages.value.push(langId);
  }
};

const handleConfirm = () => {
  const data = props.showLanguageOptions
    ? { languages: selectedLanguages.value }
    : undefined;

  emit("confirm", data);
  visible.value = false;
};

const handleCancel = () => {
  emit("cancel");
  visible.value = false;
};

defineExpose({
  show: () => { visible.value = true; },
  hide: () => { visible.value = false; },
});
</script>
