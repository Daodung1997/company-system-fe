<template>
  <div class="bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm dark:shadow-none space-y-6">
    <!-- Tab Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-surface-200 dark:border-surface-700 pb-6">
      <div>
        <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 tracking-tight">{{ $t('timesheet.configTitle') }}</h3>
        <p class="text-xs text-surface-400 font-semibold mt-1">{{ $t('timesheet.configDesc') }}</p>
      </div>
      <Button
        v-if="canManage"
        :label="$t('timesheet.addConfig')"
        icon="pi pi-plus"
        severity="primary"
        class="!rounded-xl !px-5 !py-3 !shadow-lg !shadow-primary/25 !font-bold"
        @click="openConfigDialog(null)"
      />
    </div>

    <!-- Configurations List Grid -->
    <div v-if="loadingConfigs" class="text-center py-12 text-surface-400 font-medium">
      <i class="pi pi-spin pi-spinner text-2xl mr-2 text-primary"></i> {{ $t('timesheet.loadingConfigs') }}
    </div>
    <div v-else-if="workingConfigs.length === 0" class="text-center py-12 text-surface-400 font-medium">
      {{ $t('timesheet.noConfigsYet') }}
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="config in workingConfigs"
        :key="config.id"
        class="group bg-surface-50 dark:bg-surface-950 p-6 rounded-xl border border-surface-200/60 dark:border-surface-700 hover:border-primary/50 hover:shadow-sm hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between"
      >
        <div class="space-y-4">
          <!-- Top info & Badges -->
          <div class="flex items-start justify-between">
            <div class="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
              <i class="pi pi-clock text-lg"></i>
            </div>
            <span
              v-if="config.is_default"
              class="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
            >
              {{ $t('timesheet.defaultSystem') }}
            </span>
            <span
              v-else
              class="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider bg-primary/10 text-primary"
            >
              {{ $t('timesheet.flexible') }}
            </span>
          </div>

          <!-- Name & Subtitle -->
          <div class="space-y-1">
            <h4 class="font-bold text-surface-900 dark:text-surface-0 tracking-tight text-lg">{{ config.name }}</h4>
            <p class="text-xs text-surface-500 font-medium font-mono">
              <span>{{ config.is_default ? $t('timesheet.defaultSystem') : $t('timesheet.shiftTemplate') }}</span>
            </p>
          </div>

          <!-- Hours Details -->
          <div class="grid grid-cols-2 gap-4 bg-white dark:bg-surface-900 p-4 rounded-2xl border border-surface-200/40 dark:border-surface-700">
            <div class="flex flex-col">
              <span class="text-[9px] font-black uppercase tracking-widest text-surface-400">{{ $t('timesheet.standardIn') }}</span>
              <span class="font-bold text-surface-850 dark:text-surface-150 mt-1 font-mono text-sm">{{ config.start_time }}</span>
            </div>
            <div class="flex flex-col border-l border-surface-200 dark:border-surface-700 pl-4">
              <span class="text-[9px] font-black uppercase tracking-widest text-surface-400">{{ $t('timesheet.standardOut') }}</span>
              <span class="font-bold text-surface-850 dark:text-surface-150 mt-1 font-mono text-sm">{{ config.end_time }}</span>
            </div>
          </div>

          <!-- Overtime Details -->
          <div class="flex items-center justify-between text-xs p-3.5 bg-surface-50 dark:bg-surface-950 rounded-2xl border border-surface-200/45 dark:border-surface-700/80">
            <span class="text-[9px] font-black uppercase tracking-widest text-surface-400">{{ $t('timesheet.overtimeCol') }}</span>
            <span v-if="config.allow_overtime" class="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-455 font-mono text-xs">
              <i class="pi pi-check-circle"></i> {{ $t('timesheet.overtimeAllowedWithMax').replace('{hours}', String(config.max_overtime_hours || 0)) }}
            </span>
            <span v-else class="inline-flex items-center gap-1 font-bold text-rose-500 dark:text-rose-455 font-mono text-xs">
              <i class="pi pi-times-circle"></i> {{ $t('timesheet.overtimeNotAllowed') }}
            </span>
          </div>
        </div>

        <!-- Actions buttons -->
        <div v-if="canManage" class="flex justify-end gap-3 pt-6 border-t border-dashed border-surface-200 dark:border-surface-700 mt-6">
          <Button
            icon="pi pi-pencil"
            severity="warn"
            variant="text"
            class="!w-9 !h-9 !rounded-xl"
            @click="openConfigDialog(config)"
          />
          <Button
            v-if="!config.is_default"
            icon="pi pi-trash"
            severity="danger"
            variant="text"
            class="!w-9 !h-9 !rounded-xl"
            @click="deleteConfig(config.id)"
          />
        </div>
      </div>
    </div>

    <!-- Dialog Cấu hình Giờ Làm Việc (Config Dialog) -->
    <Dialog
      v-model:visible="displayConfigDialog"
      modal
      :header="editingConfig ? $t('timesheet.dialogConfigEdit') : $t('timesheet.dialogConfigCreate')"
      :style="{ width: '32rem' }"
      class="!rounded-[2rem] overflow-hidden"
    >
      <div class="space-y-6 p-2">
        <!-- Configuration Name -->
        <AppInputField :label="$t('timesheet.configName')" :isRequired="true" :error="configErrors.name">
          <InputText
            v-model="configForm.name"
            :placeholder="$t('timesheet.configNamePlaceholder')"
            class="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
            :invalid="!!configErrors.name"
            @change="onValidateConfig('name')"
          />
        </AppInputField>

        <!-- Is Default switch -->
        <div class="flex items-center justify-between bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl border border-surface-200/50 dark:border-surface-700">
          <div class="flex flex-col">
            <span class="text-xs font-bold text-surface-900 dark:text-surface-0">{{ $t('timesheet.setDefaultConfig') }}</span>
            <span class="text-[10px] text-surface-450 mt-0.5">{{ $t('timesheet.setDefaultConfigDesc') }}</span>
          </div>
          <input
            type="checkbox"
            v-model="configForm.is_default"
            class="w-5 h-5 accent-primary rounded cursor-pointer"
          />
        </div>

        <!-- Shift times settings -->
        <div class="grid grid-cols-2 gap-4">
          <AppInputField :label="$t('timesheet.standardIn')" :isRequired="true" :error="configErrors.start_time">
            <DatePicker
              v-model="configForm.start_time"
              timeOnly
              hourFormat="24"
              showSeconds
              :placeholder="$t('timesheet.standardIn')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
              :invalid="!!configErrors.start_time"
              @date-select="onValidateConfig('start_time')"
            />
          </AppInputField>

          <AppInputField :label="$t('timesheet.standardOut')" :isRequired="true" :error="configErrors.end_time">
            <DatePicker
              v-model="configForm.end_time"
              timeOnly
              hourFormat="24"
              showSeconds
              :placeholder="$t('timesheet.standardOut')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
              :invalid="!!configErrors.end_time"
              @date-select="onValidateConfig('end_time')"
            />
          </AppInputField>
        </div>

        <!-- Allow Overtime Switch -->
        <div class="flex items-center justify-between bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl border border-surface-200/50 dark:border-surface-700">
          <div class="flex flex-col">
            <span class="text-xs font-bold text-surface-900 dark:text-surface-0">{{ $t('timesheet.allowOvertime') }}</span>
          </div>
          <input
            type="checkbox"
            v-model="configForm.allow_overtime"
            class="w-5 h-5 accent-primary rounded cursor-pointer"
          />
        </div>

        <!-- Max Overtime Hours (Only if allowed) -->
        <div v-if="configForm.allow_overtime">
          <AppInputField :label="$t('timesheet.maxOvertimeHours')" :error="configErrors.max_overtime_hours">
            <InputNumber
              v-model="configForm.max_overtime_hours"
              :min="0"
              :max="24"
              :maxFractionDigits="1"
              :placeholder="$t('timesheet.maxOvertimeHoursPlaceholder')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-700"
            />
          </AppInputField>
        </div>

        <!-- Buttons -->
        <div class="flex gap-4 justify-end pt-4">
          <Button
            :label="$t('timesheet.btnCancel')"
            severity="secondary"
            variant="text"
            class="!rounded-xl !font-bold"
            @click="displayConfigDialog = false"
          />
          <Button
            :label="$t('timesheet.btnSaveRecord')"
            severity="primary"
            class="!rounded-xl !font-bold !px-6"
            :loading="submittingConfig"
            @click="saveConfig"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  GET_WORKING_HOUR_CONFIGS,
  STORE_WORKING_HOUR_CONFIG,
  DELETE_WORKING_HOUR_CONFIG
} from '~/apis/timesheet';
import { useApiStore } from "~/stores/api";
import { showMessage } from "~/utils/global";
import { validateOnAllField, validateOnField } from '~/utils/validate';

const { t } = useI18n();
const apiStore = useApiStore();

const userInfo = computed(() => {
  return apiStore.userInfo || JSON.parse(localStorage.getItem("userInfo") || "{}");
});

const canManage = computed(() => {
  const role = userInfo.value?.role;
  return role === 'ADMIN' || role === 'MANAGER' || role === 'HR';
});

const workingConfigs = ref<any[]>([]);
const loadingConfigs = ref(false);
const displayConfigDialog = ref(false);
const editingConfig = ref<any>(null);
const configForm = ref({
  id: null as number | null,
  name: '',
  start_time: null as Date | null,
  end_time: null as Date | null,
  is_default: false,
  allow_overtime: false,
  max_overtime_hours: null as number | null
});
const submittingConfig = ref(false);

const configErrors = ref<any>({
  name: '',
  start_time: '',
  end_time: '',
  max_overtime_hours: ''
});

const CONFIG_VALIDATIONS = computed(() => {
  return {
    name: { transitionKey: "timesheet.configName", types: ["require"], errorKey: "name" },
    start_time: { transitionKey: "timesheet.standardIn", types: ["require"], errorKey: "start_time" },
    end_time: { transitionKey: "timesheet.standardOut", types: ["require"], errorKey: "end_time" },
  };
});

const onValidateConfig = (field: string) => {
  validateOnField(field, configForm.value, configErrors.value, CONFIG_VALIDATIONS.value, t);
};

const fetchWorkingConfigs = () => {
  loadingConfigs.value = true;
  GET_WORKING_HOUR_CONFIGS(
    (res: any) => {
      workingConfigs.value = res.data?.data || [];
      loadingConfigs.value = false;
    },
    (err: any) => {
      console.error(err);
      loadingConfigs.value = false;
    }
  );
};

const openConfigDialog = (config: any = null) => {
  Object.keys(configErrors.value).forEach(k => configErrors.value[k] = '');

  const parseTimeToDate = (timeStr: string) => {
    if (!timeStr) return null;
    const parts = timeStr.split(':').map(Number);
    const d = new Date();
    d.setHours(parts[0] || 0, parts[1] || 0, parts[2] || 0, 0);
    return d;
  };

  if (config) {
    editingConfig.value = config;
    configForm.value = {
      id: config.id,
      name: config.name,
      start_time: parseTimeToDate(config.start_time),
      end_time: parseTimeToDate(config.end_time),
      is_default: !!config.is_default,
      allow_overtime: !!config.allow_overtime,
      max_overtime_hours: config.max_overtime_hours !== null ? Number(config.max_overtime_hours) : null
    };
  } else {
    editingConfig.value = null;
    const defStart = new Date();
    defStart.setHours(8, 30, 0, 0);
    const defEnd = new Date();
    defEnd.setHours(17, 30, 0, 0);

    configForm.value = {
      id: null,
      name: '',
      start_time: defStart,
      end_time: defEnd,
      is_default: false,
      allow_overtime: false,
      max_overtime_hours: null
    };
  }
  displayConfigDialog.value = true;
};

const saveConfig = () => {
  Object.keys(configErrors.value).forEach(k => configErrors.value[k] = '');

  const isValid = validateOnAllField(configForm.value, configErrors.value, CONFIG_VALIDATIONS.value, t);
  if (!isValid) {
    showMessage("error", t('text.error'), t('text.errorInput'));
    return;
  }

  const formatTimeOnlyStr = (dt: Date | null) => {
    if (!dt) return '00:00:00';
    const h = String(dt.getHours()).padStart(2, '0');
    const m = String(dt.getMinutes()).padStart(2, '0');
    const s = String(dt.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const payload = {
    id: configForm.value.id,
    name: configForm.value.name,
    start_time: formatTimeOnlyStr(configForm.value.start_time),
    end_time: formatTimeOnlyStr(configForm.value.end_time),
    is_default: configForm.value.is_default ? 1 : 0,
    allow_overtime: configForm.value.allow_overtime ? 1 : 0,
    max_overtime_hours: configForm.value.allow_overtime ? configForm.value.max_overtime_hours : null
  };

  submittingConfig.value = true;
  STORE_WORKING_HOUR_CONFIG(
    payload,
    (res: any) => {
      showMessage("success", t("text.success"), t("timesheet.msgSaveConfigSuccess"));
      displayConfigDialog.value = false;
      submittingConfig.value = false;
      fetchWorkingConfigs();
    },
    (err: any) => {
      console.error(err);
      submittingConfig.value = false;
    }
  );
};

const deleteConfig = (id: number) => {
  if (confirm(t("timesheet.msgDeleteConfigConfirm"))) {
    DELETE_WORKING_HOUR_CONFIG(
      id,
      (res: any) => {
        showMessage("success", t("text.success"), t("timesheet.msgDeleteConfigSuccess"));
        fetchWorkingConfigs();
      },
      (err: any) => {
        console.error(err);
      }
    );
  }
};

onMounted(() => {
  fetchWorkingConfigs();
});
</script>
