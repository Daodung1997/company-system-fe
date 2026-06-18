<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700  shadow-md">
      <div class="flex items-center gap-5">
        <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
          <i class="pi pi-clock text-2xl"></i>
        </div>
        <div class="space-y-1">
          <h1 class="text-3xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ $t('menu.timesheet') }}
          </h1>
          <p class="text-sm text-surface-500 dark:text-surface-400 font-medium">
            {{ $t('timesheet.desc') }}
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <!-- Live Calendar Indicator -->
        <div class="px-5 py-3 rounded-2xl bg-white dark:bg-surface-800 border border-surface-100 dark:border-surface-700 shadow-md flex items-center gap-3">
          <i class="pi pi-calendar text-primary text-lg"></i>
          <span class="text-xs font-bold text-surface-700 dark:text-surface-200 uppercase tracking-wider font-mono">
            {{ currentDate }}
          </span>
        </div>
      </div>
    </div>

    <!-- Clock and Check Panel -->
    <!-- Clock and Check Panel -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Live Clock Card -->
      <div class="lg:col-span-4 shadow-md" style="background: linear-gradient(135deg, #0f172a, #020617); border: 1px solid rgba(255, 255, 255, 0.1); color: #ffffff; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; min-h: 320px; border-radius: 2.5rem; padding: 2rem;">
        <!-- Decorative high-opacity glowing orbs for vibrant sharp colors -->
        <div style="position: absolute; right: -80px; top: -80px; width: 250px; height: 250px; background: radial-gradient(circle, rgba(6,182,212,0.45) 0%, rgba(99,102,241,0.2) 50%, rgba(0,0,0,0) 100%); filter: blur(40px); pointer-events: none;"></div>
        <div style="position: absolute; left: -80px; bottom: -80px; width: 250px; height: 250px; background: radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(20,184,166,0.15) 50%, rgba(0,0,0,0) 100%); filter: blur(40px); pointer-events: none;"></div>

        <div style="position: relative; z-index: 10; display: flex; flex-direction: column; gap: 0.75rem;">
          <div>
            <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 10px; font-weight: 900; letter-spacing: 0.2em; background-color: rgba(6,182,212,0.15); color: #22d3ee; border: 1px solid rgba(6,182,212,0.3); text-transform: uppercase;">
              {{ $t('timesheet.standardTimeSystem') }}
            </span>
          </div>
          <h2 style="font-size: 1.35rem; font-weight: 900; letter-spacing: -0.025em; margin: 0; color: #ffffff; line-height: 1.25;">
            {{ $t('timesheet.workingTimeVN') }} <span style="color: #22d3ee;">(GMT+7)</span>
          </h2>
        </div>

        <div style="position: relative; z-index: 10; margin-top: 1.5rem; margin-bottom: 1.5rem;">
          <div style="font-size: 3.25rem; font-weight: 900; letter-spacing: -0.05em; font-family: monospace; background: linear-gradient(to right, #22d3ee, #38bdf8, #34d399); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 15px rgba(34,211,238,0.55)); line-height: 1;">
            {{ currentTime || '--:--:--' }}
          </div>
          <p style="font-size: 0.75rem; color: rgba(34,211,238,0.85); font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; font-family: monospace; margin: 0.5rem 0 0 0;">
            Asia/Ho_Chi_Minh Timezone
          </p>
        </div>

        <div style="position: relative; z-index: 10; display: flex; align-items: center; gap: 0.5rem; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">
          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 700; color: rgba(255, 255, 255, 0.85);">
            <span style="width: 10px; height: 10px; border-radius: 50%; background-color: #22d3ee; box-shadow: 0 0 8px #22d3ee; display: inline-block;"></span>
            <span>{{ $t('timesheet.gpsClock') }}</span>
          </div>
        </div>
      </div>

      <!-- Action Control Card -->
      <div class="lg:col-span-4 bg-white dark:bg-surface-900 p-8 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm flex flex-col justify-between min-h-[320px]">
        <div class="space-y-4">
          <h3 class="text-sm font-black text-surface-900 dark:text-surface-0 tracking-tight flex items-center gap-2">
            <i class="pi pi-shield text-primary"></i> {{ $t('timesheet.todayTracking') }}
          </h3>
          <p class="text-[10px] text-surface-400 font-semibold leading-relaxed">
            {{ $t('timesheet.trackingDesc') }}
          </p>
        </div>

        <div class="flex flex-col gap-3 my-4">
          <!-- Check-in block -->
          <div class="bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl border border-surface-200 dark:border-surface-700 flex items-center justify-between gap-4 relative overflow-hidden group">
            <div class="flex flex-col">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('timesheet.checkInTime') }}</span>
              <div class="text-xl font-black tracking-tight text-surface-900 dark:text-surface-0 font-mono mt-0.5">
                {{ todayCheckInTime || '--:--' }}
              </div>
            </div>
            <Button
              :label="isCheckedIn ? $t('timesheet.checkedIn') : $t('timesheet.checkIn')"
              icon="pi pi-sign-in"
              severity="primary"
              class="!rounded-xl !py-2 !px-4 !font-bold transition-all text-xs"
              :class="{ 'opacity-55 hover:!scale-100 pointer-events-none': isCheckedIn }"
              @click="handleCheckIn"
            />
          </div>

          <!-- Check-out block -->
          <div class="bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl border border-surface-200 dark:border-surface-700 flex items-center justify-between gap-4 relative overflow-hidden group">
            <div class="flex flex-col">
              <span class="text-[10px] font-black uppercase tracking-wider text-surface-400">{{ $t('timesheet.checkOutTime') }}</span>
              <div class="text-xl font-black tracking-tight text-surface-900 dark:text-surface-0 font-mono mt-0.5">
                {{ todayCheckOutTime || '--:--' }}
              </div>
            </div>
            <Button
              :label="isCheckedOut ? $t('timesheet.checkedOut') : $t('timesheet.checkOut')"
              icon="pi pi-sign-out"
              severity="secondary"
              class="!rounded-xl !py-2 !px-4 !font-bold transition-all text-xs"
              :class="{ 'opacity-55 hover:!scale-100 pointer-events-none': isCheckedOut || !isCheckedIn }"
              @click="handleCheckOut"
            />
          </div>
        </div>
      </div>

      <!-- Alternative Check-in Card (QR & Fingerprint Sync) -->
      <div class="lg:col-span-4 bg-white dark:bg-surface-900 p-8 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm flex flex-col justify-between min-h-[320px]">
        <div class="space-y-4 flex-1">
          <div class="flex items-center justify-between border-b border-surface-200 dark:border-surface-700 pb-3">
            <h3 class="text-sm font-black text-surface-900 dark:text-surface-0 tracking-tight flex items-center gap-2">
              <i class="pi pi-qrcode text-primary"></i> {{ $t('timesheet.multiModalCheckin') }}
            </h3>
            <!-- Tabs Toggle -->
            <div class="flex bg-surface-100 dark:bg-surface-800 p-1 rounded-xl">
              <button
                @click="activeCheckinTab = 'qr'"
                class="px-3 py-1 text-[10px] font-black rounded-lg transition-all"
                :class="activeCheckinTab === 'qr' ? 'bg-white dark:bg-surface-700 text-primary shadow-sm' : 'text-surface-500 hover:text-surface-800'"
              >
                {{ $t('timesheet.qrTab') }}
              </button>
              <button
                @click="activeCheckinTab = 'device'"
                class="px-3 py-1 text-[10px] font-black rounded-lg transition-all"
                :class="activeCheckinTab === 'device' ? 'bg-white dark:bg-surface-700 text-primary shadow-sm' : 'text-surface-500 hover:text-surface-800'"
              >
                {{ $t('timesheet.deviceTab') }}
              </button>
            </div>
          </div>

          <!-- Tab Content 1: QR CODE -->
          <div v-if="activeCheckinTab === 'qr'" class="flex flex-col items-center justify-center py-2 space-y-3 animate-in fade-in duration-300">
            <p class="text-[10px] text-center text-surface-400 font-semibold leading-normal max-w-[220px]">
              {{ $t('timesheet.qrDesc') }}
            </p>
            <!-- Stylized QR Code with a moving Laser Scan Line -->
            <div class="relative w-28 h-28 bg-white dark:bg-surface-950 p-2 rounded-2xl border border-surface-200 dark:border-surface-800 flex items-center justify-center shadow-inner overflow-hidden">
              <svg viewBox="0 0 100 100" class="w-full h-full text-surface-900 dark:text-surface-100 fill-current opacity-85">
                <!-- Outer borders -->
                <path d="M 5 5 H 30 V 15 H 15 V 30 H 5 Z M 70 5 H 95 V 30 H 85 V 15 H 70 Z M 5 70 H 15 V 85 H 30 V 95 H 5 Z M 85 70 H 95 V 95 H 70 V 85 H 85 Z" />
                <!-- Position detection markers -->
                <rect x="10" y="10" width="15" height="15" rx="2" />
                <rect x="75" y="10" width="15" height="15" rx="2" />
                <rect x="10" y="75" width="15" height="15" rx="2" />
                <!-- Inner marker points -->
                <rect x="14" y="14" width="7" height="7" rx="1" fill="#3b82f6" />
                <rect x="79" y="14" width="7" height="7" rx="1" fill="#3b82f6" />
                <rect x="14" y="79" width="7" height="7" rx="1" fill="#3b82f6" />
                <!-- Random mock QR pixel dots -->
                <rect x="35" y="10" width="5" height="5" />
                <rect x="45" y="15" width="10" height="5" />
                <rect x="60" y="10" width="5" height="10" />
                <rect x="35" y="30" width="10" height="5" />
                <rect x="50" y="25" width="5" height="15" />
                <rect x="65" y="35" width="10" height="5" />
                
                <rect x="10" y="35" width="5" height="10" />
                <rect x="20" y="45" width="15" height="5" />
                <rect x="10" y="55" width="10" height="5" />
                
                <rect x="80" y="35" width="5" height="10" />
                <rect x="70" y="45" width="10" height="5" />
                <rect x="85" y="55" width="5" height="5" />
                
                <rect x="35" y="60" width="15" height="5" />
                <rect x="55" y="55" width="5" height="10" />
                <rect x="65" y="65" width="10" height="5" />
                
                <rect x="35" y="75" width="5" height="15" />
                <rect x="45" y="85" width="15" height="5" />
                <rect x="65" y="80" width="5" height="10" />
                <rect x="75" y="75" width="10" height="5" />
                <!-- Center Logo background -->
                <rect x="40" y="40" width="20" height="20" rx="4" fill="white" />
                <!-- Center blue dot -->
                <circle cx="50" cy="50" r="5" fill="#3b82f6" />
              </svg>
              <!-- Animated Scanning Laser Line -->
              <div class="absolute left-0 right-0 h-[2px] bg-primary shadow-[0_0_8px_#3b82f6] style-scan-line"></div>
            </div>
            
            <div class="text-[10px] text-primary font-black tracking-wider uppercase flex items-center gap-1.5 font-mono">
              <i class="pi pi-spin pi-spinner text-[9px]"></i>
              {{ $t('timesheet.qrRefreshesIn').replace('{seconds}', String(qrTimer)) }}
            </div>
            
            <button
              @click="simulateQrScan"
              class="px-3 py-1.5 text-[9px] font-black text-primary bg-primary/10 hover:bg-primary/20 rounded-xl transition-all flex items-center gap-1.5"
            >
              <i class="pi pi-desktop"></i>
              {{ $t('timesheet.simulateQrBtn') }}
            </button>
          </div>

          <!-- Tab Content 2: DEVICE SYNC -->
          <div v-else class="flex flex-col justify-between py-2 space-y-4 animate-in fade-in duration-300">
            <div class="bg-surface-50 dark:bg-surface-950 p-4 rounded-2xl border border-surface-200 dark:border-surface-700 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-[10px] text-surface-500 dark:text-surface-400 font-bold uppercase tracking-wider">{{ $t('timesheet.deviceConnected') }}</span>
                <span class="px-2 py-0.5 rounded-full text-[8px] font-black tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  {{ $t('timesheet.deviceStatusConnected') }}
                </span>
              </div>
              <p class="text-[10px] text-surface-400 font-semibold leading-relaxed">
                {{ $t('timesheet.deviceSyncDesc') }}
              </p>
            </div>

            <Button
              :label="isSyncingDevice ? $t('timesheet.syncingText') : $t('timesheet.syncButtonLabel')"
              :icon="isSyncingDevice ? 'pi pi-spin pi-spinner' : 'pi pi-sync'"
              severity="secondary"
              class="w-full !rounded-xl !py-3.5 !font-bold transition-all"
              :disabled="isSyncingDevice"
              @click="handleDeviceSync"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Monthly Log List -->
    <div class="bg-white dark:bg-surface-900 p-8 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-200 dark:border-surface-700 pb-6">
        <div class="space-y-1">
          <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 tracking-tight">{{ $t('timesheet.history') }}</h3>
          <p class="text-xs text-surface-400 font-semibold">{{ $t('timesheet.historyDesc') }}</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-48">
            <DatePicker
              v-model="monthPickerValue"
              view="month"
              dateFormat="mm/yy"
              :placeholder="$t('timesheet.selectMonth')"
              class="w-full !rounded-xl border border-surface-200 dark:border-surface-800"
              @date-select="onMonthChange"
            />
          </div>
        </div>
      </div>

      <!-- Modern Data Table -->
      <BaseDataTable
        :columns="columns"
        :fetchApi="fetchTimesheetsWrapper"
        :isReload="isReload"
        :emptyText="$t('timesheet.noData')"
        scrollHeight="50vh"
      >
        <template #body="{ column, data, index }">
          <!-- STT -->
          <template v-if="column.key === 'stt'">
            <span class="font-mono font-bold text-surface-400 text-xs">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </template>

          <!-- Ngày -->
          <template v-else-if="column.key === 'date'">
            <div class="flex flex-col">
              <span class="font-bold text-surface-800 dark:text-surface-200 tracking-tight">
                {{ formatDate(data.date) }}
              </span>
              <span class="text-[10px] text-surface-400 font-bold uppercase tracking-widest font-mono mt-0.5">
                {{ getDayOfWeek(data.date) }}
              </span>
            </div>
          </template>

          <!-- Giờ vào -->
          <template v-else-if="column.key === 'check_in'">
            <span class="font-mono font-bold text-surface-700 dark:text-surface-300 text-sm">
              {{ formatTime(data.check_in) || '--:--' }}
            </span>
          </template>

          <!-- Giờ ra -->
          <template v-else-if="column.key === 'check_out'">
            <span class="font-mono font-bold text-surface-700 dark:text-surface-300 text-sm">
              {{ formatTime(data.check_out) || '--:--' }}
            </span>
          </template>

          <!-- Trạng thái -->
          <template v-else-if="column.key === 'status'">
            <span
              class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
              :class="[
                data.status === 'PRESENT' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                data.status === 'LATE' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' :
                'bg-rose-500/10 text-rose-600 dark:text-rose-400'
              ]"
            >
              <span
                class="w-1.5 h-1.5 rounded-full mr-2"
                :class="[
                  data.status === 'PRESENT' ? 'bg-emerald-500' :
                  data.status === 'LATE' ? 'bg-amber-500' :
                  'bg-rose-500'
                ]"
              ></span>
              {{ data.status }}
            </span>
          </template>
        </template>
      </BaseDataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import BaseDataTable from '~/components/common/BaseDataTable.vue';
import { CHECK_IN, CHECK_OUT, GET_MONTHLY_TIMESHEETS } from '~/apis/timesheet';
import { showMessage } from "~/utils/global";

const { t, locale } = useI18n();

const currentTime = ref('');
const currentDate = ref('');
let timerId: any = null;

const activeCheckinTab = ref('qr');
const qrTimer = ref(30);
const isSyncingDevice = ref(false);
let qrIntervalId: any = null;

const startQrTimer = () => {
  qrIntervalId = setInterval(() => {
    if (qrTimer.value > 1) {
      qrTimer.value--;
    } else {
      qrTimer.value = 30;
    }
  }, 1000);
};

const handleDeviceSync = () => {
  isSyncingDevice.value = true;
  setTimeout(() => {
    isSyncingDevice.value = false;
    showMessage("success", t('timesheet.success'), t('timesheet.syncSuccess'));
    reloadTable();
  }, 1500);
};

const simulateQrScan = () => {
  if (isCheckedIn.value && isCheckedOut.value) {
    showMessage("warn", t('timesheet.success'), t('timesheet.alreadyCheckedOut'));
    return;
  }
  
  showMessage("info", t('timesheet.syncingText'), t('timesheet.simulatingScan'));
  
  setTimeout(() => {
    if (!isCheckedIn.value) {
      handleCheckIn();
    } else {
      handleCheckOut();
    }
  }, 1000);
};

const monthPickerValue = ref<Date>(new Date());
const selectedMonth = computed(() => {
  const date = monthPickerValue.value;
  if (!date) return '';
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
});

const timesheets = ref<any[]>([]);
const loading = ref(false);
const isReload = ref(false);

const reloadTable = () => {
  isReload.value = !isReload.value;
};

const columns = computed(() => [
  { key: 'stt', label: t('leaveRequest.stt'), minWidth: '60px' },
  { key: 'date', label: t('timesheet.date'), minWidth: '130px' },
  { key: 'check_in', label: t('timesheet.checkInTime'), minWidth: '120px' },
  { key: 'check_out', label: t('timesheet.checkOutTime'), minWidth: '120px' },
  { key: 'status', label: t('timesheet.status'), minWidth: '135px' }
]);

const fetchTimesheetsWrapper = (payload: { query: string, successCallback: Function, errorCallback: Function }) => {
  const params = Object.fromEntries(new URLSearchParams(payload.query));
  
  return GET_MONTHLY_TIMESHEETS(
    { year_month: selectedMonth.value },
    (res: any) => {
      const rawList = res.data?.data || [];
      timesheets.value = [...rawList];
      
      // Sort by date desc
      rawList.sort((a: any, b: any) => b.date.localeCompare(a.date));
      
      const page = parseInt(params.page || '1');
      const limit = parseInt(params.limit || '30');
      const startIndex = (page - 1) * limit;
      const paginatedData = rawList.slice(startIndex, startIndex + limit);
      
      const mockResponse = {
        data: {
          data: {
            data: paginatedData,
            total: rawList.length
          }
        }
      };
      
      payload.successCallback(mockResponse);
    },
    payload.errorCallback
  );
};

const updateClock = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false });
  const lang = locale.value === 'vi' ? 'vi-VN' : locale.value === 'ja' ? 'ja-JP' : 'en-US';
  currentDate.value = now.toLocaleDateString(lang, { timeZone: 'Asia/Ho_Chi_Minh', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
};

const getTodayDateString = () => {
  const now = new Date();
  return now.toLocaleDateString('sv-SE', { timeZone: 'Asia/Ho_Chi_Minh' }); // YYYY-MM-DD
};

const todayRecord = computed(() => {
  const todayStr = getTodayDateString();
  return timesheets.value.find(item => item.date === todayStr);
});

const isCheckedIn = computed(() => !!todayRecord.value?.check_in);
const isCheckedOut = computed(() => !!todayRecord.value?.check_out);

const todayCheckInTime = computed(() => {
  if (!todayRecord.value?.check_in) return null;
  return new Date(todayRecord.value.check_in).toLocaleTimeString('en-US', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false, hour: '2-digit', minute: '2-digit' });
});

const todayCheckOutTime = computed(() => {
  if (!todayRecord.value?.check_out) return null;
  return new Date(todayRecord.value.check_out).toLocaleTimeString('en-US', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false, hour: '2-digit', minute: '2-digit' });
});

const sortedTimesheets = computed(() => {
  return [...timesheets.value].sort((a, b) => b.date.localeCompare(a.date));
});

const handleCheckIn = () => {
  CHECK_IN(
    (res: any) => {
      showMessage("success", t('timesheet.success'), t('timesheet.checkInSuccess'));
      reloadTable();
    },
    (err: any) => {
      // Errors are handled globally
    }
  );
};

const handleCheckOut = () => {
  CHECK_OUT(
    (res: any) => {
      showMessage("success", t('timesheet.success'), t('timesheet.checkOutSuccess'));
      reloadTable();
    },
    (err: any) => {
      // Errors are handled globally
    }
  );
};

const onMonthChange = () => {
  reloadTable();
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

const getDayOfWeek = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return t(`timesheet.day${date.getDay()}`);
};

const formatTime = (timeStr: string) => {
  if (!timeStr) return null;
  return new Date(timeStr).toLocaleTimeString('en-US', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false, hour: '2-digit', minute: '2-digit' });
};

onMounted(() => {
  updateClock();
  timerId = setInterval(updateClock, 1000);
  startQrTimer();
});

onUnmounted(() => {
  if (timerId) clearInterval(timerId);
  if (qrIntervalId) clearInterval(qrIntervalId);
});
</script>

<style scoped>
@keyframes scan {
  0%, 100% {
    top: 5%;
  }
  50% {
    top: 95%;
  }
}
.style-scan-line {
  animation: scan 2s ease-in-out infinite;
}
</style>
