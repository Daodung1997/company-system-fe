<template>
  <div class="relative w-full group">
    <!-- Input hiển thị -->
    <InputText
      readonly
      :modelValue="displayValue"
      placeholder="HH:mm"
      class="w-full !rounded-xl !py-3 !pl-10 cursor-pointer transition-all duration-300 group-hover:border-primary focus:!border-primary focus:!ring-4 focus:!ring-primary/10"
      @click="op.toggle($event)"
      :disabled="disabled"
    />
    <i class="pi pi-clock absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors"></i>

    <!-- Popover (Replace OverlayPanel in PrimeVue 4) -->
    <Popover ref="op">
      <div class="p-2 w-64">
        <div class="time-picker-grid">
          <!-- Hour -->
          <div class="flex flex-col gap-1 items-stretch">
            <span class="text-[10px] font-bold text-surface-400 uppercase tracking-widest text-center mb-1">Hours</span>
            <ScrollPanel class="time-col h-48 border border-surface-100 dark:border-surface-800 rounded-xl">
              <div
                v-for="h in hours"
                :key="h"
                :class="['time-item', { active: h === hour }]"
                @click.stop="hour = h"
              >
                {{ pad(h) }}
              </div>
            </ScrollPanel>
          </div>

          <!-- Minute -->
          <div class="flex flex-col gap-1 items-stretch">
             <span class="text-[10px] font-bold text-surface-400 uppercase tracking-widest text-center mb-1">Minutes</span>
            <ScrollPanel class="time-col h-48 border border-surface-100 dark:border-surface-800 rounded-xl">
              <div
                v-for="m in minutes"
                :key="m"
                :class="['time-item', { active: m === minute }]"
                @click.stop="minute = m"
              >
                {{ pad(m) }}
              </div>
            </ScrollPanel>
          </div>
        </div>

        <Button 
          label="OK" 
          severity="primary" 
          class="mt-4 w-full rounded-xl font-bold py-2" 
          @click="confirm" 
        />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

interface Props {
  modelValue?: string | Date;
  minuteStep?: number;
  returnType?: "string" | "date";
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  minuteStep: 5,
  returnType: "string",
  disabled: false
});

const emit = defineEmits(["update:modelValue"]);

const op = ref<any>(null);

const hour = ref(0);
const minute = ref(0);

const hours = Array.from({ length: 24 }, (_, i) => i);
const minutes = Array.from({ length: Math.ceil(60 / props.minuteStep) }, (_, i) => i * props.minuteStep);

const pad = (n: number) => String(n).padStart(2, "0");

const normalizeToDate = (val: any) => {
  if (!val) return null;
  if (val instanceof Date) return val;
  if (typeof val === "string") {
    const parts = val.split(":");
    if (parts.length >= 2) {
      const h = parseInt(parts[0]);
      const m = parseInt(parts[1]);
      const d = new Date();
      d.setHours(isNaN(h) ? 0 : h, isNaN(m) ? 0 : m, 0, 0);
      return d;
    }
  }
  return null;
};

watch(
  () => props.modelValue,
  (val) => {
    const d = normalizeToDate(val);
    if (!d) return;
    hour.value = d.getHours();
    minute.value = d.getMinutes();
  },
  { immediate: true }
);

const displayValue = computed(() => {
  return `${pad(hour.value)}:${pad(minute.value)}`;
});

const confirm = () => {
  op.value.hide();
};

const emitValue = () => {
  const d = new Date();
  d.setHours(hour.value);
  d.setMinutes(minute.value);
  d.setSeconds(0);
  d.setMilliseconds(0);

  if (props.returnType === "string") {
    emit("update:modelValue", `${pad(hour.value)}:${pad(minute.value)}`);
  } else {
    emit("update:modelValue", d);
  }
};

watch([hour, minute], emitValue);
</script>

<style scoped>
.time-picker-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.time-col :deep(.p-scrollpanel-content) {
  @apply p-1;
}

.time-item {
  height: 36px;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 600;
  color: #64748b;
  transition: all 0.2s;
}

.time-item:hover {
  background: #f1f5f9;
  color: #1e293b;
}

.time-item.active {
  background: var(--primary-color);
  color: #fff;
  box-shadow: 0 4px 10px rgba(var(--primary-color-rgb), 0.3);
}
</style>
