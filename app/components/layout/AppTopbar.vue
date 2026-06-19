<template>
  <header class="h-20 fixed top-0 right-0 z-40 transition-all duration-500"
    :style="{ left: sidebarWidth }"
  >
    <!-- Premium Backdrop Container -->
    <div class="absolute inset-0 bg-white/10 dark:bg-surface-950/20 backdrop-blur-2xl border-b border-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
      <!-- Animated Mesh Background Container (Standalone for clipping) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Animated Mesh Background -->
        <div class="absolute inset-0 opacity-30 dark:opacity-20">
          <div class="absolute -top-[50%] -left-[10%] w-[40%] h-[200%] bg-primary/10 blur-[80px] rotate-45 animate-pulse"></div>
          <div class="absolute -bottom-[50%] -right-[10%] w-[40%] h-[200%] bg-blue-500/5 blur-[80px] -rotate-45" style="animation: pulse 8s infinite"></div>
        </div>
      </div>
      
      <!-- Top Glow Accent -->
      <div class="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
      
      <!-- Subtle Noise Texture -->
      <div class="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>

    <!-- Processing Bar -->
    <Transition name="fade">
      <div v-if="apiStore.isLoading" class="absolute top-0 left-0 right-0 h-[3px] z-50 overflow-hidden">
        <ProgressBar mode="indeterminate" class="!h-[3px] !bg-primary/10" />
      </div>
    </Transition>

    <div class="h-full px-8 flex items-center justify-between relative z-10">
      <!-- Left side: Page Identity -->
      <div class="flex items-center gap-6">
        <div class="flex flex-col relative group">
          <div class="absolute -left-6 -top-2 w-12 h-12 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
          
          <div class="flex items-center gap-3">
            <div class="w-1.5 h-7 bg-gradient-to-b from-primary to-primary-600 rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)]"></div>
            <h2 class="text-xl md:text-2xl font-black text-surface-900 dark:text-surface-50 tracking-tighter leading-none italic uppercase">
              {{ pageTitle }}
            </h2>
          </div>
          
          <!-- Dynamic Multilevel Breadcrumbs -->
          <div class="flex items-center flex-wrap gap-2 mt-2 text-[10px] text-surface-450 dark:text-surface-400 font-bold uppercase tracking-[0.15em] pl-4">
            <template v-for="(item, idx) in breadcrumbs" :key="idx">
              <!-- Separator dot -->
              <span v-if="idx > 0" class="w-1.5 h-1.5 rounded-full bg-surface-300 dark:bg-surface-700 flex-shrink-0"></span>
              
              <!-- Link for parent pages -->
              <NuxtLink 
                v-if="item.to && idx < breadcrumbs.length - 1" 
                :to="item.to" 
                class="hover:text-primary transition-colors cursor-pointer opacity-75 hover:opacity-100 flex items-center gap-1"
              >
                <i v-if="idx === 0" class="pi pi-home text-[9px] -mt-[1px]"></i>
                {{ item.label }}
              </NuxtLink>
              
              <!-- Current page or non-link node -->
              <span 
                v-else 
                :class="[idx === breadcrumbs.length - 1 ? 'text-primary italic font-black' : 'opacity-60']"
                class="flex items-center gap-1"
              >
                <i v-if="idx === 0" class="pi pi-home text-[9px] -mt-[1px]"></i>
                {{ item.label }}
              </span>
            </template>
          </div>
        </div>
      </div>

      <!-- Right side: Actions & User -->
      <div class="flex items-center gap-4">
        <!-- Language Switcher -->
         <Select
            v-model="currentLocale"
            :options="locales"
            optionLabel="name"
            optionValue="code"
            appendTo="body"
            class="!border-none !bg-white/50 dark:!bg-surface-900/50 backdrop-blur-md !rounded-xl !h-10 !flex !items-center !px-2 hover:!bg-white dark:hover:!bg-surface-900 transition-all border border-primary/5 hover:border-primary/20"
            @change="changeLocale"
          >
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center gap-2 px-1">
                    <span class="text-xs font-bold uppercase text-surface-700 dark:text-surface-300">{{ slotProps.value }}</span>
                </div>
            </template>
            <template #option="slotProps">
                <div class="flex items-center gap-2">
                    <span class="text-xs font-bold">{{ slotProps.option.name }}</span>
                </div>
            </template>
          </Select>
          
          <!-- Theme Switcher -->
          <Select
            v-model="colorMode.preference"
            :options="themes"
            optionLabel="label"
            optionValue="value"
            appendTo="body"
            class="!border-none !bg-white/50 dark:!bg-surface-900/50 backdrop-blur-md !rounded-xl !h-10 !flex !items-center !px-2 hover:!bg-white dark:hover:!bg-surface-900 transition-all border border-primary/5 hover:border-primary/20"
          >
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex items-center gap-2 px-1">
                <i :class="getThemeIcon(slotProps.value)" class="text-xs text-primary"></i>
                <span class="text-[10px] font-black uppercase text-surface-700 dark:text-surface-300">{{ slotProps.value }}</span>
              </div>
            </template>
            <template #option="slotProps">
              <div class="flex items-center gap-3">
                <i :class="slotProps.option.icon" class="text-xs text-primary"></i>
                <span class="text-xs font-bold uppercase tracking-wider">{{ slotProps.option.label }}</span>
              </div>
            </template>
          </Select>

        <!-- Sidebar Customizer Trigger -->
        <button 
          @click="openSidebarCustomizer"
          class="w-10 h-10 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all group shrink-0"
          v-tooltip.top="$t('sidebarConfig')"
        >
          <i class="pi pi-palette text-lg group-hover:rotate-12 transition-transform"></i>
        </button>

        <!-- Notifications -->
        <div class="relative">
          <button 
            @click="toggleNotificationMenu"
            class="relative w-10 h-10 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all group"
          >
            <i class="pi pi-bell text-lg group-hover:scale-110"></i>
            <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-surface-950"></span>
          </button>

          <!-- Notification Popup -->
          <Transition name="pop">
            <div v-if="isNotificationOpen" ref="notifMenuRef" class="absolute right-0 top-full mt-4 w-80 bg-white/95 dark:bg-surface-900/95 backdrop-blur-2xl rounded-3xl border border-surface-200 dark:border-surface-800 shadow-2xl p-4 z-50">
               <div class="flex items-center justify-between mb-4 px-2">
                  <h3 class="text-sm font-black uppercase tracking-wider text-surface-900 dark:text-surface-0">Notifications</h3>
                  <span class="text-[9px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">4 NEW</span>
               </div>
               <div class="space-y-2 max-h-[300px] overflow-y-auto custom-scrollbar">
                  <div v-for="i in 4" :key="i" class="p-3 rounded-2xl hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-colors cursor-pointer group/item">
                     <div class="flex gap-3">
                        <div class="w-10 h-10 rounded-xl bg-primary/5 flex-shrink-0 flex items-center justify-center">
                           <i class="pi pi-info-circle text-primary"></i>
                        </div>
                        <div class="flex-1">
                           <p class="text-xs font-bold text-surface-900 dark:text-surface-50 leading-tight">System Update Available</p>
                           <p class="text-[10px] text-surface-400 mt-1 line-clamp-1 italic">Version 2.4.0 is now live with enhanced features.</p>
                           <p class="text-[8px] text-primary/60 font-black mt-2 uppercase tracking-tight">2 hours ago</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="mt-4 pt-4 border-t border-surface-100 dark:border-surface-800">
                  <button class="w-full py-2 text-[10px] font-black uppercase tracking-widest text-surface-400 hover:text-primary transition-colors">View All Activities</button>
               </div>
            </div>
          </Transition>
        </div>

        <!-- User Profile -->
        <div class="flex items-center gap-4 pl-4 border-l border-surface-200/50 dark:border-surface-800/50 ml-2 relative">
           <div class="flex flex-col items-end hidden lg:flex">
             <span class="text-sm font-black text-surface-900 dark:text-surface-50 leading-none">{{ userDisplayName }}</span>
             <div class="flex items-center gap-1.5 mt-1">
               <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
               <span class="text-[9px] text-surface-400 font-black uppercase tracking-widest">{{ userRole }}</span>
             </div>
           </div>
           
           <div class="relative group" @click="toggleUserMenu">
             <div class="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
             <Avatar 
               v-if="!userInfo?.avatar"
               icon="pi pi-user" 
               shape="circle" 
               class="!bg-surface-50 dark:!bg-surface-900 !text-primary !w-11 !h-11 !border-2 !border-white dark:!border-surface-950 shadow-lg cursor-pointer relative z-10 hover:scale-105 transition-transform" 
             />
             <Avatar 
               v-else
               :image="userInfo.avatar"
               shape="circle" 
               class="!w-11 !h-11 !border-2 !border-white dark:!border-surface-950 shadow-lg cursor-pointer relative z-10 hover:scale-105 transition-transform" 
             />

             <!-- User Popup Menu -->
             <Transition name="pop">
               <div v-if="isUserMenuOpen" ref="userMenuRef" class="absolute right-0 top-full mt-4 w-64 bg-white/95 dark:bg-surface-900/95 backdrop-blur-2xl rounded-3xl border border-surface-200 dark:border-surface-800 shadow-2xl z-50">
                  <!-- User Brief -->
                  <div class="p-5 bg-gradient-to-br from-primary/10 to-transparent border-b border-surface-100 dark:border-surface-800">
                     <div class="flex items-center gap-3">
                        <Avatar v-if="!userInfo?.avatar" icon="pi pi-user" shape="circle" class="!bg-primary !text-white !w-10 !h-10 shadow-lg" />
                        <Avatar v-else :image="userInfo.avatar" shape="circle" class="!w-10 !h-10 shadow-lg" />
                        <div>
                           <p class="text-sm font-black text-surface-900 dark:text-surface-0 leading-none">{{ userDisplayName }}</p>
                           <p class="text-[10px] text-primary font-bold mt-1">{{ userEmail }}</p>
                        </div>
                     </div>
                  </div>

                  <!-- Menu Items -->
                  <div class="p-2">
                     <button @click="navigateTo('/auth/change-password'); isUserMenuOpen = false" class="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-all group">
                        <div class="w-8 h-8 rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                           <i class="pi pi-user text-xs"></i>
                        </div>
                        <span class="text-[11px] font-black uppercase tracking-wider text-surface-600 dark:text-surface-300 italic group-hover:text-primary transition-colors">{{ $t('menu.myProfile') }}</span>
                     </button>
                     <button @click="navigateTo('/auth/change-password'); isUserMenuOpen = false" class="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-all group">
                        <div class="w-8 h-8 rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                           <i class="pi pi-lock text-xs"></i>
                        </div>
                        <span class="text-[11px] font-black uppercase tracking-wider text-surface-600 dark:text-surface-300 italic group-hover:text-primary transition-colors">{{ $t('menu.changePassword') }}</span>
                     </button>
                  </div>

                  <!-- Logout Section -->
                  <div class="p-2 border-t border-surface-100 dark:border-surface-800 bg-surface-50/50 dark:bg-transparent">
                     <button 
                        @click="handleLogout"
                        class="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-red-50 hover:bg-red-500 text-red-500 hover:text-white transition-all group"
                     >
                        <div class="flex items-center gap-3 font-black text-[11px] uppercase tracking-widest italic">
                           <i class="pi pi-power-off text-xs"></i>
                           {{ $t('menu.logout') }}
                        </div>
                        <i class="pi pi-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0"></i>
                     </button>
                  </div>
               </div>
             </Transition>
           </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, inject, type Ref, ref, onMounted, onUnmounted } from 'vue';
import { useApiStore } from '../../stores/api';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { onClickOutside } from '@vueuse/core';
import Cookies from 'js-cookie';
import { APP_TOKEN_NAME } from '~/config/constants';

const apiStore = useApiStore();
const { locale, locales, setLocale, t } = useI18n();
const route = useRoute();
const router = useRouter();

const sidebarWidth = inject<Ref<string>>('sidebarWidth', ref('280px'));

const isNotificationOpen = ref(false);
const isUserMenuOpen = ref(false);
const notifMenuRef = ref(null);
const userMenuRef = ref(null);

onClickOutside(notifMenuRef, () => {
  isNotificationOpen.value = false;
});

onClickOutside(userMenuRef, () => {
  isUserMenuOpen.value = false;
});

const toggleNotificationMenu = () => {
  isNotificationOpen.value = !isNotificationOpen.value;
  if (isNotificationOpen.value) isUserMenuOpen.value = false;
};

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value;
  if (isUserMenuOpen.value) isNotificationOpen.value = false;
};

const handleLogout = () => {
   Cookies.remove(APP_TOKEN_NAME);
   localStorage.removeItem('userInfo');
   window.location.href = '/login';
};

// Read user info from localStorage
const userInfo = ref<any>(null);

const loadUserInfo = () => {
  try {
    const raw = localStorage.getItem('userInfo');
    if (raw) userInfo.value = JSON.parse(raw);
  } catch {}
};

if (import.meta.client) {
  loadUserInfo();
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('userInfoUpdated', loadUserInfo);
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('userInfoUpdated', loadUserInfo);
  }
});

const userDisplayName = computed(() => userInfo.value?.full_name || t('text.user'));
const userEmail = computed(() => userInfo.value?.email || '');
const userRole = computed(() => {
  const role = userInfo.value?.role;
  if (!role) return 'Active';
  const roleMap: Record<string, string> = {
    'ADMIN': t('text.roleAdmin'),
    'MANAGER': t('text.roleManager'),
    'EMPLOYEE': t('text.roleEmployee'),
  };
  return roleMap[role] || role;
});

const currentLocale = computed({
  get: () => locale.value,
  set: (val) => setLocale(val)
});

// Computes high-end responsive multilevel breadcrumbs dynamically based on current route path
const breadcrumbs = computed(() => {
  const path = route.path;
  const list: { label: string; to?: string }[] = [];

  // Home Dashboard is always the first node
  list.push({ label: t('menu.dashboard'), to: '/' });

  if (path === '/' || path === '') {
    return list;
  }

  const parts = path.split('/').filter(Boolean);

  // Dynamic recognition of all core routers in our layout
  if (parts[0] === 'master') {
    list.push({ label: 'Master' });

    if (parts[1] === 'employee') {
      list.push({ label: t('menu.employee'), to: '/master/employee' });
      
      if (parts[2] === 'add') {
        list.push({ label: t('btn.add') });
      } else if (parts[2] && parts[2] !== '') {
        const id = parts[2];
        if (parts[3] === 'edit') {
          list.push({ label: `${t('btn.detail')} (#${id})`, to: `/master/employee/${id}` });
          list.push({ label: t('btn.edit') });
        } else {
          list.push({ label: `${t('btn.detail')} (#${id})` });
        }
      }
    } else if (parts[1] === 'department') {
      list.push({ label: t('menu.department'), to: '/master/department' });

      if (parts[2] === 'add') {
        list.push({ label: t('btn.add') });
      } else if (parts[2] && parts[2] !== '') {
        const id = parts[2];
        if (parts[3] === 'edit') {
          list.push({ label: `${t('btn.detail')} (#${id})`, to: `/master/department/${id}` });
          list.push({ label: t('btn.edit') });
        } else {
          list.push({ label: `${t('btn.detail')} (#${id})` });
        }
      }
    } else if (parts[1] === 'company') {
      list.push({ label: t('menu.company'), to: '/master/company' });

      if (parts[2] === 'add') {
        list.push({ label: t('btn.add') });
      } else if (parts[2] && parts[2] !== '') {
        const id = parts[2];
        if (parts[3] === 'edit') {
          list.push({ label: `${t('btn.detail')} (#${id})`, to: `/master/company/${id}` });
          list.push({ label: t('btn.edit') });
        } else {
          list.push({ label: `${t('btn.detail')} (#${id})` });
        }
      }
    }
  } else if (parts[0] === 'timesheet') {
    list.push({ label: t('menu.timesheet'), to: '/timesheet' });
    if (parts[1] === 'manage') {
      list.push({ label: t('menu.timesheetManage') });
    }
  } else if (parts[0] === 'leave-request') {
    list.push({ label: t('menu.leaveRequest'), to: '/leave-request' });
    if (parts[1] === 'pending') {
      list.push({ label: t('menu.leaveRequestPending') });
    }
  } else if (parts[0] === 'contract') {
    list.push({ label: t('menu.contract'), to: '/contract' });
    if (parts[1] === 'add') {
      list.push({ label: t('btn.add') });
    } else if (parts[1] && parts[1] !== '') {
      const id = parts[1];
      if (parts[2] === 'edit') {
        list.push({ label: `${t('btn.detail')} (#${id})`, to: `/contract/${id}` });
        list.push({ label: t('btn.edit') });
      } else {
        list.push({ label: `${t('btn.detail')} (#${id})` });
      }
    }
  } else if (parts[0] === 'transaction') {
    list.push({ label: t('menu.transaction'), to: '/transaction' });
    if (parts[1] === 'add') {
      list.push({ label: t('btn.add') });
    } else if (parts[1] && parts[1] !== '') {
      const id = parts[1];
      if (parts[2] === 'edit') {
        list.push({ label: `${t('btn.detail')} (#${id})`, to: `/transaction/${id}` });
        list.push({ label: t('btn.edit') });
      } else {
        list.push({ label: `${t('btn.detail')} (#${id})` });
      }
    }
  } else if (parts[0] === 'compliance') {
    list.push({ label: t('menu.compliance'), to: '/compliance' });
  } else if (parts[0] === 'board') {
    list.push({ label: t('menu.companyBoard'), to: '/board' });
  } else {
    // Dynamic fallback for any other custom sub-routes
    parts.forEach((part, index) => {
      const isLast = index === parts.length - 1;
      const formattedLabel = part.charAt(0).toUpperCase() + part.slice(1);
      list.push({
        label: formattedLabel,
        to: isLast ? undefined : '/' + parts.slice(0, index + 1).join('/')
      });
    });
  }

  return list;
});

const pageTitle = computed(() => {
  if (breadcrumbs.value.length === 0) return 'Dashboard';
  const lastItem = breadcrumbs.value[breadcrumbs.value.length - 1];
  return lastItem.label;
});

const changeLocale = (e: any) => {
  setLocale(e.value);
};

// useColorMode is auto-imported by Nuxt if configured correctly
const colorMode = useColorMode();
const themes = [
  { label: 'Light', value: 'light', icon: 'pi pi-sun' },
  { label: 'Dark', value: 'dark', icon: 'pi pi-moon' },
  { label: 'System', value: 'system', icon: 'pi pi-desktop' }
];

const getThemeIcon = (value: string) => {
  return themes.find(t => t.value === value)?.icon || 'pi pi-desktop';
};

const isSidebarCustomizerOpen = useState('sidebarSettingsOpen', () => false);
const openSidebarCustomizer = () => {
  isSidebarCustomizerOpen.value = true;
};
</script>

<style scoped>
/* Pop Animation */
.pop-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pop-leave-active {
  transition: all 0.25s ease-in;
}
.pop-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(10px);
}
.pop-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(var(--p-surface-300), 0.2);
  border-radius: 10px;
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
