<template>
  <div class="w-full px-4 sm:px-6 lg:w-[95%] lg:mx-auto xl:w-[92%] 2xl:w-[90%] space-y-6 animate-in fade-in duration-500 pb-10">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <span class="text-xs font-semibold text-primary uppercase tracking-widest">{{ $t('notification.pageTitle') }}</span>
        <h1 class="text-2xl font-black text-surface-900 dark:text-surface-0 mt-0.5">{{ $t('notification.title') }}</h1>
      </div>
      <div class="flex items-center gap-3">
        <Button
          v-if="unreadCount > 0"
          :label="$t('notification.markAllRead')"
          icon="pi pi-check-circle"
          severity="secondary"
          outlined
          class="!rounded-xl !font-bold !text-xs"
          @click="handleMarkAllRead"
        />
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="bg-white dark:bg-surface-950 rounded-2xl border border-surface-200 dark:border-surface-700 p-5 flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <i class="pi pi-bell text-xl text-primary"></i>
        </div>
        <div>
          <span class="text-2xl font-black text-surface-900 dark:text-surface-0">{{ totalNotifications }}</span>
          <p class="text-[10px] font-bold text-surface-400 uppercase tracking-wider mt-0.5">{{ $t('notification.totalLabel') }}</p>
        </div>
      </div>
      <div class="bg-white dark:bg-surface-950 rounded-2xl border border-surface-200 dark:border-surface-700 p-5 flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
          <i class="pi pi-envelope text-xl text-blue-500"></i>
        </div>
        <div>
          <span class="text-2xl font-black text-blue-600 dark:text-blue-400">{{ unreadCount }}</span>
          <p class="text-[10px] font-bold text-surface-400 uppercase tracking-wider mt-0.5">{{ $t('notification.unreadLabel') }}</p>
        </div>
      </div>
      <div class="bg-white dark:bg-surface-950 rounded-2xl border border-surface-200 dark:border-surface-700 p-5 flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
          <i class="pi pi-check-circle text-xl text-emerald-500"></i>
        </div>
        <div>
          <span class="text-2xl font-black text-emerald-600 dark:text-emerald-400">{{ totalNotifications - unreadCount }}</span>
          <p class="text-[10px] font-bold text-surface-400 uppercase tracking-wider mt-0.5">{{ $t('notification.readLabel') }}</p>
        </div>
      </div>
    </div>

    <!-- Filters & Search -->
    <div class="bg-white dark:bg-surface-950 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm p-5">
      <div class="flex flex-col md:flex-row items-stretch md:items-center gap-3">
        <!-- Search -->
        <div class="flex-1 relative">
          <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 text-sm"></i>
          <InputText
            v-model="searchKeyword"
            :placeholder="$t('notification.searchPlaceholder')"
            class="w-full !pl-11 !rounded-xl !h-11 !text-xs !font-bold !bg-surface-50 dark:!bg-surface-900 !border-surface-200 dark:!border-surface-800"
            @keyup.enter="loadNotifications"
          />
        </div>

        <!-- Type Filter -->
        <Select
          v-model="selectedType"
          :options="typeOptions"
          optionLabel="label"
          optionValue="value"
          :placeholder="$t('notification.allTypes')"
          class="!rounded-xl !h-11 !min-w-[200px] !text-xs !font-bold"
          @change="loadNotifications"
        />

        <!-- Read Filter -->
        <Select
          v-model="selectedReadFilter"
          :options="readFilterOptions"
          optionLabel="label"
          optionValue="value"
          class="!rounded-xl !h-11 !min-w-[160px] !text-xs !font-bold"
          @change="loadNotifications"
        />

        <!-- Search Button -->
        <Button
          icon="pi pi-search"
          :label="$t('notification.searchBtn')"
          class="!rounded-xl !h-11 !px-5 !font-bold !text-xs"
          @click="loadNotifications"
        />
      </div>
    </div>

    <!-- Notification List -->
    <div class="bg-white dark:bg-surface-950 rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm overflow-hidden">
      <!-- Loading -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-20">
        <i class="pi pi-spin pi-spinner text-3xl text-primary mb-3"></i>
        <span class="text-surface-500 font-medium text-sm">{{ $t('notification.loading') }}</span>
      </div>

      <!-- Empty State -->
      <div v-else-if="notifications.length === 0" class="flex flex-col items-center justify-center py-20">
        <i class="pi pi-bell-slash text-5xl text-surface-300 dark:text-surface-600 mb-4"></i>
        <p class="text-sm font-bold text-surface-400">{{ $t('notification.empty') }}</p>
        <p class="text-xs text-surface-400 mt-1">{{ $t('notification.emptyDesc') }}</p>
      </div>

      <!-- Notification Items -->
      <div v-else>
        <div
          v-for="notif in notifications"
          :key="notif.id"
          class="flex items-start gap-4 px-6 py-5 border-b border-surface-50 dark:border-surface-800/50 last:border-b-0 hover:bg-surface-50/50 dark:hover:bg-surface-900/30 transition-colors cursor-pointer group"
          :class="{ 'bg-primary/[0.02]': !notif.is_read }"
          @click="handleNotificationClick(notif)"
        >
          <!-- Icon -->
          <div class="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center mt-0.5" :class="getNotifIconBg(notif.type)">
            <i :class="getNotifIcon(notif.type)" class="text-lg"></i>
          </div>

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <h3 class="text-sm font-bold text-surface-900 dark:text-surface-50 leading-snug" :class="{ '!font-black': !notif.is_read }">
                  {{ notif.title }}
                </h3>
                <p class="text-xs text-surface-500 mt-1.5 leading-relaxed line-clamp-2">{{ notif.body }}</p>
                <div class="flex items-center gap-3 mt-2">
                  <span class="text-[10px] font-bold text-primary/60 uppercase tracking-tight">{{ formatTimeAgo(notif.created_at) }}</span>
                  <span
                    class="text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider"
                    :class="getTypeBadgeClass(notif.type)"
                  >
                    {{ getTypeLabel(notif.type) }}
                  </span>
                </div>
              </div>

              <!-- Right side: status + action -->
              <div class="flex items-center gap-2 flex-shrink-0 mt-1">
                <span v-if="!notif.is_read" class="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span v-else class="text-[9px] font-bold text-surface-400 uppercase tracking-wider">{{ $t('notification.readStatus') }}</span>
                <Button
                  v-if="notif.action_url"
                  icon="pi pi-external-link"
                  severity="secondary"
                  variant="text"
                  class="!w-8 !h-8 !rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  v-tooltip.top="$t('notification.goToAction')"
                  @click.stop="navigateToAction(notif)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="px-6 py-4 border-t border-surface-200 dark:border-surface-700 flex items-center justify-between">
        <span class="text-xs text-surface-400 font-bold">
          {{ $t('pagination.total', { total: totalNotifications }) }}
        </span>
        <div class="flex items-center gap-1.5">
          <Button
            icon="pi pi-chevron-left"
            severity="secondary"
            variant="text"
            class="!w-8 !h-8 !rounded-lg"
            :disabled="currentPage <= 1"
            @click="goToPage(currentPage - 1)"
          />
          <template v-for="p in paginationPages" :key="p">
            <Button
              v-if="p !== '...'"
              :label="String(p)"
              :severity="p === currentPage ? 'primary' : 'secondary'"
              :variant="p === currentPage ? undefined : 'text'"
              class="!w-8 !h-8 !rounded-lg !text-xs !font-black"
              @click="goToPage(Number(p))"
            />
            <span v-else class="text-xs text-surface-400 px-1">...</span>
          </template>
          <Button
            icon="pi pi-chevron-right"
            severity="secondary"
            variant="text"
            class="!w-8 !h-8 !rounded-lg"
            :disabled="currentPage >= totalPages"
            @click="goToPage(currentPage + 1)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { GET_NOTIFICATIONS, GET_UNREAD_COUNT, MARK_NOTIFICATION_READ, MARK_ALL_NOTIFICATIONS_READ } from '~/apis/notification';

const { t } = useI18n();

const loading = ref(true);
const notifications = ref<any[]>([]);
const totalNotifications = ref(0);
const unreadCount = ref(0);
const currentPage = ref(1);
const totalPages = ref(1);
const perPage = 15;

// Filters
const searchKeyword = ref('');
const selectedType = ref('');
const selectedReadFilter = ref('');

const typeOptions = [
  { label: t('notification.allTypes'), value: '' },
  { label: t('notification.typeLeaveCreated'), value: 'LEAVE_REQUEST_CREATED' },
  { label: t('notification.typeLeaveApproved'), value: 'LEAVE_REQUEST_APPROVED' },
  { label: t('notification.typeLeaveRejected'), value: 'LEAVE_REQUEST_REJECTED' },
  { label: t('notification.typeCompliance'), value: 'COMPLIANCE_ALERT' },
  { label: t('notification.typeContract'), value: 'CONTRACT_CREATED' },
  { label: t('notification.typeTransaction'), value: 'TRANSACTION_CREATED' },
];

const readFilterOptions = [
  { label: t('notification.filterAll'), value: '' },
  { label: t('notification.filterUnread'), value: 'unread' },
  { label: t('notification.filterRead'), value: 'read' },
];

// Load notifications
const loadNotifications = () => {
  loading.value = true;
  const params: any = {
    limit: perPage,
    page: currentPage.value,
  };
  if (searchKeyword.value) params.keyword = searchKeyword.value;
  if (selectedType.value) params.type = selectedType.value;
  if (selectedReadFilter.value === 'unread') params.unread_only = true;

  GET_NOTIFICATIONS(
    params,
    (res: any) => {
      const data = res?.data?.data || res?.data;
      const meta = res?.data?.meta;
      notifications.value = Array.isArray(data) ? data : [];
      if (meta) {
        totalNotifications.value = meta.total || 0;
        currentPage.value = meta.current_page || 1;
        totalPages.value = meta.last_page || 1;
      }

      // Filter read-only on client side if needed
      if (selectedReadFilter.value === 'read') {
        notifications.value = notifications.value.filter((n: any) => n.is_read);
      }

      loading.value = false;
    },
    () => {
      loading.value = false;
    }
  );
};

// Fetch unread count
const fetchUnreadCount = () => {
  GET_UNREAD_COUNT(
    (res: any) => {
      const data = res?.data?.data || res?.data;
      unreadCount.value = data?.count ?? 0;
    },
    () => {}
  );
};

// Click notification
const handleNotificationClick = (notif: any) => {
  if (!notif.is_read) {
    MARK_NOTIFICATION_READ(notif.id, () => {
      notif.is_read = true;
      notif.read_at = new Date().toISOString();
      unreadCount.value = Math.max(0, unreadCount.value - 1);
    }, () => {});
  }
  navigateToAction(notif);
};

const navigateToAction = (notif: any) => {
  const actionUrl = notif.action_url || notif.data?.action_url;
  if (actionUrl) {
    navigateTo(actionUrl);
  }
};

// Mark all as read
const handleMarkAllRead = () => {
  MARK_ALL_NOTIFICATIONS_READ(
    () => {
      unreadCount.value = 0;
      notifications.value.forEach(n => {
        n.is_read = true;
        n.read_at = new Date().toISOString();
      });
    },
    () => {}
  );
};

// Pagination
const goToPage = (page: number) => {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
  loadNotifications();
};

const paginationPages = computed(() => {
  const pages: (number | string)[] = [];
  const total = totalPages.value;
  const current = currentPage.value;
  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    pages.push(1);
    if (current > 3) pages.push('...');
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
      pages.push(i);
    }
    if (current < total - 2) pages.push('...');
    pages.push(total);
  }
  return pages;
});

// Icon & style helpers
const getNotifIcon = (type: string) => {
  const map: Record<string, string> = {
    'LEAVE_REQUEST_CREATED': 'pi pi-calendar-plus text-blue-500',
    'LEAVE_REQUEST_APPROVED': 'pi pi-check-circle text-emerald-500',
    'LEAVE_REQUEST_REJECTED': 'pi pi-times-circle text-rose-500',
    'COMPLIANCE_ALERT': 'pi pi-shield text-amber-500',
    'CONTRACT_CREATED': 'pi pi-file-plus text-primary',
    'TRANSACTION_CREATED': 'pi pi-wallet text-violet-500',
  };
  return map[type] || 'pi pi-info-circle text-primary';
};

const getNotifIconBg = (type: string) => {
  const map: Record<string, string> = {
    'LEAVE_REQUEST_CREATED': 'bg-blue-500/10',
    'LEAVE_REQUEST_APPROVED': 'bg-emerald-500/10',
    'LEAVE_REQUEST_REJECTED': 'bg-rose-500/10',
    'COMPLIANCE_ALERT': 'bg-amber-500/10',
    'CONTRACT_CREATED': 'bg-primary/10',
    'TRANSACTION_CREATED': 'bg-violet-500/10',
  };
  return map[type] || 'bg-primary/5';
};

const getTypeLabel = (type: string) => {
  const map: Record<string, string> = {
    'LEAVE_REQUEST_CREATED': t('notification.typeLeaveCreated'),
    'LEAVE_REQUEST_APPROVED': t('notification.typeLeaveApproved'),
    'LEAVE_REQUEST_REJECTED': t('notification.typeLeaveRejected'),
    'COMPLIANCE_ALERT': t('notification.typeCompliance'),
    'CONTRACT_CREATED': t('notification.typeContract'),
    'TRANSACTION_CREATED': t('notification.typeTransaction'),
  };
  return map[type] || type;
};

const getTypeBadgeClass = (type: string) => {
  const map: Record<string, string> = {
    'LEAVE_REQUEST_CREATED': 'bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400',
    'LEAVE_REQUEST_APPROVED': 'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400',
    'LEAVE_REQUEST_REJECTED': 'bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400',
    'COMPLIANCE_ALERT': 'bg-amber-100 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400',
    'CONTRACT_CREATED': 'bg-primary/10 text-primary',
    'TRANSACTION_CREATED': 'bg-violet-100 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400',
  };
  return map[type] || 'bg-surface-100 text-surface-500';
};

const formatTimeAgo = (dateStr: string) => {
  if (!dateStr) return '';
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHour = Math.floor(diffMs / 3600000);
  const diffDay = Math.floor(diffMs / 86400000);

  if (diffMin < 1) return t('notification.justNow');
  if (diffMin < 60) return t('notification.minutesAgo', { n: diffMin });
  if (diffHour < 24) return t('notification.hoursAgo', { n: diffHour });
  if (diffDay < 7) return t('notification.daysAgo', { n: diffDay });
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

onMounted(() => {
  loadNotifications();
  fetchUnreadCount();
});
</script>
