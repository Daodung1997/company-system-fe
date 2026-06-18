<template>
  <aside 
    class="fixed left-0 top-0 h-screen z-50 border-r border-surface-200 dark:border-surface-800 flex flex-col shadow-2xl transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) will-change-[width,transform] sidebar-responsive lg:left-3 lg:top-3 lg:h-[calc(100vh-1.5rem)] lg:rounded-2xl lg:border"
    :class="[
      isCollapsed ? 'w-[88px]' : 'w-[290px]',
      isCustomSidebar ? 'text-white border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.2)]' : 'bg-white/95 dark:bg-surface-950/95 backdrop-blur-3xl shadow-surface-200/50 dark:shadow-none',
      { 'sidebar-mobile-open': isMobileSidebarOpen }
    ]"
    :style="sidebarStyle"
  >
    <!-- Custom Sidebar Background Layer (Enables real-time Opacity slider control) -->
    <div 
      v-if="isCustomSidebar"
      class="absolute inset-0 z-0 pointer-events-none transition-all duration-300"
      :style="sidebarBgStyle"
    ></div>

    <!-- Premium Sidebar Background (Only shown if NOT custom theme) -->
    <div 
      v-if="!isCustomSidebar"
      class="absolute inset-0 z-0 opacity-[0.07] dark:opacity-[0.15] bg-cover bg-center pointer-events-none transition-opacity duration-1000"
      style="background-image: url('/sidebar-bg.png');"
    ></div>
    <div 
      v-if="!isCustomSidebar"
      class="absolute inset-0 z-0 bg-gradient-to-b from-white/50 via-transparent to-surface-50/80 dark:from-surface-950/50 dark:to-black/80 pointer-events-none"
    ></div>

    <!-- Custom Glassmorphic overlay for custom backgrounds to keep text ultra sharp -->
    <div 
      v-if="isCustomSidebar"
      class="absolute inset-0 z-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none"
    ></div>

    <!-- Logo Section -->
    <div class="h-24 flex items-center mb-2 relative overflow-hidden flex-shrink-0 transition-all duration-500" :class="[isCollapsed ? 'px-0 justify-center' : 'px-7']">
      <div 
        class="absolute top-0 w-24 h-24 bg-primary/10 blur-[40px] rounded-full transition-all duration-500"
        :class="[isCollapsed ? 'left-1/2 -translate-x-1/2' : '-left-4']"
      ></div>
      
      <div 
        class="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10 group/logo cursor-pointer transition-all duration-500 overflow-hidden"
        :class="[
          isCustomSidebar 
            ? 'bg-white/20 text-white border border-white/10 hover:bg-white/30' 
            : 'bg-gradient-to-br from-primary to-primary-600 shadow-xl shadow-primary/30 text-white'
        ]"
      >
        <img v-if="apiStore.companySetting?.logo_path" :src="apiStore.companySetting.logo_path" class="w-full h-full object-contain p-1" />
        <i v-else class="pi pi-bolt text-2xl group-hover/logo:scale-125 transition-transform duration-500"></i>
      </div>
      
      <div 
        class="flex flex-col relative z-10 transition-all duration-500 overflow-hidden"
        :class="[
          isCollapsed ? 'opacity-0 w-0 -translate-x-4 ml-0' : 'opacity-100 w-auto translate-x-0 ml-4'
        ]"
      >
        <span 
          class="font-black text-lg tracking-tighter whitespace-nowrap uppercase italic bg-clip-text text-transparent bg-gradient-to-r"
          :class="[
            isCustomSidebar 
              ? 'from-white to-white/80' 
              : 'from-primary to-primary-700'
          ]"
        >
          {{ apiStore.companySetting?.sidebar_name || appName }}
        </span>
        <span 
          class="text-[9px] font-black tracking-[0.3em] uppercase -mt-1 opacity-70 whitespace-nowrap"
          :class="isCustomSidebar ? 'text-white/60' : 'text-surface-400'"
        >
          {{ apiStore.companySetting?.sidebar_sub_name || $t('menu.industrialDashboard') }}
        </span>
      </div>
    </div>

    <!-- Navigation Menu -->
    <ClientOnly>
      <div class="flex-1 px-4 py-3 overflow-y-auto overflow-x-hidden space-y-1 custom-scrollbar relative z-10">
        <div v-for="(group, idx) in menuGroups" :key="idx" class="mb-5">
          <div 
            class="px-5 mb-4 text-[11px] font-black uppercase tracking-[0.25em] flex items-center transition-all duration-500"
            :class="[
              isCollapsed ? 'opacity-0 h-0 overflow-hidden mb-0' : 'opacity-100 h-auto',
              isCustomSidebar ? 'text-white/50' : 'text-surface-400'
            ]"
          >
            <div class="flex items-center gap-2.5 whitespace-nowrap">
              <span class="w-1.5 h-1.5 rounded-full" :class="isCustomSidebar ? 'bg-white/40' : 'bg-primary/40'"></span>
              {{ $t(group.label) }}
            </div>
            <div 
              class="h-[1px] flex-1 ml-4 bg-gradient-to-r"
              :class="isCustomSidebar ? 'from-white/10 to-transparent' : 'from-surface-100 to-transparent dark:from-surface-800'"
            ></div>
          </div>
          
          <div class="space-y-1">
            <div v-for="item in group.items" :key="item.label" class="relative">
              <!-- Parent Item (Button for sub-menus) -->
              <button 
                v-if="item.children"
                @click="handleMenuClick(item)"
                class="sidebar-primary-item w-full flex items-center group relative py-3 rounded-[16px] z-10 outline-none cursor-pointer overflow-hidden transition-all duration-300"
                :class="[
                  isItemActive(item) 
                    ? (isCustomSidebar ? 'bg-white/25 border border-white/20 text-white shadow-lg shadow-black/10 font-extrabold scale-[0.98]' : 'active-glow-container text-white border border-transparent') 
                    : (isCustomSidebar ? 'text-white/70 hover:text-white hover:bg-white/10 border border-transparent' : 'text-surface-500 hover:text-primary inactive-glow-hover border border-transparent'),
                  isCollapsed ? 'px-0 justify-center' : 'px-5'
                ]"
              >
                <!-- Left dynamic glow bar indicator -->
                <div 
                  v-if="isItemActive(item)" 
                  class="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-full z-20 transition-all duration-300"
                  :class="[
                    isCustomSidebar ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]' : 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]'
                  ]"
                ></div>

                <!-- Semi-transparent overlay on hover for standard active states -->
                <div v-if="isItemActive(item) && !isCustomSidebar" class="absolute inset-0 bg-gradient-to-br from-primary to-primary-700 z-0"></div>
                <div 
                  class="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 pointer-events-none z-0" 
                  :class="[
                    isItemActive(item) ? 'hidden' : '',
                    isCustomSidebar ? 'bg-white/5' : 'bg-primary/[0.05]'
                  ]"
                ></div>
                
                <div class="relative z-10 flex items-center transition-all duration-300" :class="[isCollapsed ? 'justify-center' : 'w-full', isItemActive(item) && !isCollapsed ? 'pl-2' : '']">
                  <div class="w-6 flex items-center justify-center flex-shrink-0 transition-all duration-300" :class="[isCollapsed ? 'mr-0' : 'mr-4']">
                     <i :class="[item.icon, 'text-xl transition-all duration-300', isItemActive(item) ? 'scale-110' : 'group-hover:scale-125']"></i>
                  </div>
                  
                  <div 
                    class="flex-1 flex items-center justify-between transition-all duration-500 overflow-hidden"
                    :class="[isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto']"
                  >
                    <span class="font-bold text-[14px] tracking-tight whitespace-nowrap">
                      {{ $t(item.label) }}
                    </span>
                    <i 
                      class="pi pi-chevron-right text-[11px] font-bold transition-transform duration-300 flex-shrink-0 ml-2"
                      :class="{ 'rotate-90': expandedMenus.includes(item.label) }"
                    ></i>
                  </div>
                </div>
              </button>

              <!-- Parent Item (NuxtLink for direct links like Dashboard) -->
              <NuxtLink 
                v-else
                :to="item.to"
                class="sidebar-primary-item w-full flex items-center group relative py-3 rounded-[16px] z-10 outline-none cursor-pointer overflow-hidden transition-all duration-300"
                :class="[
                  isItemActive(item) 
                    ? (isCustomSidebar ? 'bg-white/25 border border-white/20 text-white shadow-lg shadow-black/10 font-extrabold scale-[0.98]' : 'active-glow-container text-white border border-transparent') 
                    : (isCustomSidebar ? 'text-white/70 hover:text-white hover:bg-white/10 border border-transparent' : 'text-surface-500 hover:text-primary inactive-glow-hover border border-transparent'),
                  isCollapsed ? 'px-0 justify-center' : 'px-5'
                ]"
              >
                <!-- Left dynamic glow bar indicator -->
                <div 
                  v-if="isItemActive(item)" 
                  class="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-full z-20 transition-all duration-300"
                  :class="[
                    isCustomSidebar ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]' : 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]'
                  ]"
                ></div>

                <div v-if="isItemActive(item) && !isCustomSidebar" class="absolute inset-0 bg-gradient-to-br from-primary to-primary-700 z-0"></div>
                <div 
                  class="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 pointer-events-none z-0" 
                  :class="[
                    isItemActive(item) ? 'hidden' : '',
                    isCustomSidebar ? 'bg-white/5' : 'bg-primary/[0.05]'
                  ]"
                ></div>
                
                <div class="relative z-10 flex items-center transition-all duration-300" :class="[isCollapsed ? 'justify-center' : 'w-full', isItemActive(item) && !isCollapsed ? 'pl-2' : '']">
                  <div class="w-6 flex items-center justify-center flex-shrink-0 transition-all duration-300" :class="[isCollapsed ? 'mr-0' : 'mr-4']">
                     <i :class="[item.icon, 'text-xl transition-all duration-300', isItemActive(item) ? 'scale-110' : 'group-hover:scale-125']"></i>
                  </div>
                  
                  <div 
                    class="flex-1 flex items-center justify-between transition-all duration-500 overflow-hidden"
                    :class="[isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto']"
                  >
                    <span class="font-bold text-[14px] tracking-tight whitespace-nowrap">
                      {{ $t(item.label) }}
                    </span>
                  </div>
                </div>

                <!-- Tooltip for collapsed state -->
                <div v-if="isCollapsed" class="absolute left-full ml-4 px-3 py-2 bg-surface-900 text-white text-[10px] font-black uppercase tracking-wider rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-2xl border border-white/10 pointer-events-none">
                  {{ $t(item.label) }}
                </div>
              </NuxtLink>

              <!-- Children Items -->
              <Transition name="expand">
                <div v-if="item.children && !isCollapsed && expandedMenus.includes(item.label)" class="mt-2 ml-12 relative space-y-1 overflow-hidden">
                  <div 
                    class="absolute left-[-22px] top-[-8px] bottom-6 w-[2px] opacity-50"
                    :class="isCustomSidebar ? 'bg-gradient-to-b from-white/40 via-white/10 to-transparent' : 'bg-gradient-to-b from-primary/50 via-primary/10 to-transparent'"
                  ></div>

                  <NuxtLink 
                    v-for="child in item.children" 
                    :key="child.to"
                    :to="child.to"
                    class="flex items-center group/child relative pl-6 pr-5 py-2.5 rounded-xl transition-all duration-200"
                    :class="[
                      isChildActive(child, item.to) 
                        ? (isCustomSidebar ? 'bg-white/15 text-white font-extrabold shadow-sm' : 'bg-primary/5 text-primary') 
                        : (isCustomSidebar ? 'text-white/60 hover:text-white hover:bg-white/5' : 'text-surface-400 hover:text-surface-900 hover:bg-surface-50 dark:hover:bg-surface-900/50')
                    ]"
                  >
                    <div 
                      class="absolute left-[-22px] top-1/2 -translate-y-1/2 h-[1.5px] transition-all duration-300" 
                      :class="[
                        isChildActive(child, item.to) 
                          ? (isCustomSidebar ? 'w-6 opacity-100 bg-white' : 'w-6 opacity-100 bg-primary')
                          : (isCustomSidebar ? 'w-4 opacity-50 bg-white/20' : 'w-4 bg-primary/20')
                      ]"
                    ></div>
                    <span class="text-[11px] font-bold uppercase tracking-widest whitespace-nowrap transition-transform group-hover/child:translate-x-1">{{ $t(child.label) }}</span>
                  </NuxtLink>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>

    <!-- Bottom Collapse Toggle -->
    <div 
      class="p-6 border-t flex-shrink-0 relative z-10"
      :class="isCustomSidebar ? 'border-white/10' : 'border-surface-100 dark:border-surface-800'"
    >
      <button 
        @click="isCollapsed = !isCollapsed"
        class="w-full flex items-center justify-center h-12 rounded-xl transition-all duration-300 border"
        :class="[
          isCustomSidebar 
            ? 'bg-white/10 border-white/10 text-white/80 hover:text-white hover:bg-white/15' 
            : 'bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-800 text-surface-500 hover:text-primary'
        ]"
      >
        <i :class="['pi text-lg transition-transform duration-500', isCollapsed ? 'pi-angle-double-right' : 'pi-angle-double-left']"></i>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useApiStore } from "~/stores/api";

const route = useRoute();
const apiStore = useApiStore();

const appName = import.meta.env.VITE_APP_NAME || 'BASE DEMO';
const isCollapsed = useState('sidebarCollapsed', () => false);
const isMobileSidebarOpen = useState('mobileSidebarOpen', () => false);
const expandedMenus = ref<string[]>([]);

// Shared State for Sidebar Customizer
const sidebarSettings = useState('sidebarSettings', () => ({
  mode: 'both' as 'color' | 'image' | 'both',
  color: 'rgb(153, 27, 27)',
  colorName: 'Crimson (Đỏ)',
  image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=400&auto=format&fit=crop',
  imageName: 'Glassy Frost',
  opacity: 0.95,
  systemPrimary: 'default',
  systemPrimaryName: 'Mặc định',
  fontFamily: 'Outfit',
  fontFamilyName: 'Outfit'
}));

// Check if user has active custom settings
const isCustomSidebar = computed(() => {
  return sidebarSettings.value.color !== 'default' || sidebarSettings.value.image !== '';
});

// Main sidebar container styling (glass blur effect base)
const sidebarStyle = computed(() => {
  const styles: any = {};
  if (isCustomSidebar.value) {
    // Elegant translucent container base to let backdrop filters shine beautifully
    styles.backgroundColor = 'rgba(15, 23, 42, 0.03)';
    styles.backdropFilter = 'blur(20px)';
  }
  return styles;
});

// Dedicated background layer styling to apply user preset color/image/blend & custom opacity
const sidebarBgStyle = computed(() => {
  const settings = sidebarSettings.value;
  const styles: any = {};
  
  if (settings.mode === 'color') {
    if (settings.color !== 'default') {
      styles.backgroundColor = settings.color;
      styles.opacity = settings.opacity;
    }
  } else if (settings.mode === 'image') {
    if (settings.image) {
      styles.backgroundImage = `url(${settings.image})`;
      styles.backgroundSize = 'cover';
      styles.backgroundPosition = 'center';
      styles.opacity = settings.opacity;
    }
  } else if (settings.mode === 'both') {
    if (settings.color !== 'default') {
      styles.backgroundImage = `linear-gradient(${settings.color}, ${settings.color}), url(${settings.image})`;
      styles.backgroundBlendMode = 'multiply';
    } else {
      styles.backgroundImage = `url(${settings.image})`;
    }
    styles.backgroundSize = 'cover';
    styles.backgroundPosition = 'center';
    styles.opacity = settings.opacity;
  }

  return styles;
});

const userInfo = computed(() => {
  if (process.client) {
    return apiStore.userInfo || JSON.parse(localStorage.getItem("userInfo") || "{}");
  }
  return null;
});

const isManagerOrAdmin = computed(() => {
  const role = userInfo.value?.role;
  return role === 'ADMIN' || role === 'MANAGER';
});

interface MenuItem {
  label: string;
  icon: string;
  to: string;
  children?: { label: string; to: string }[];
}

const menuGroups = computed(() => {
  const role = userInfo.value?.role || 'STAFF';
  
  const list = [
    {
      label: 'menu.main',
      items: [
        { label: 'menu.dashboard', icon: 'pi pi-chart-pie', to: '/' },
        { label: 'menu.companyBoard', icon: 'pi pi-megaphone', to: '/board' }
      ]
    }
  ];

  // 1. Personal standard menus (for all roles)
  list[0].items.push({ label: 'menu.timesheet', icon: 'pi pi-clock', to: '/timesheet' });
  list[0].items.push({ label: 'menu.leaveRequest', icon: 'pi pi-calendar-plus', to: '/leave-request' });

  // 2. Timesheet Administration
  if (['ADMIN', 'MANAGER', 'HR', 'ACCOUNTANT'].includes(role)) {
    list[0].items.push({
      label: 'menu.timesheetManage',
      icon: 'pi pi-sliders-h',
      to: '/timesheet/manage'
    });
  }

  // 3. Leave Requests Approvals
  if (['ADMIN', 'MANAGER', 'HR'].includes(role)) {
    list[0].items.push({
      label: 'menu.leaveRequestPending',
      icon: 'pi pi-calendar-times',
      to: '/leave-request/pending'
    });
  }

  // 4. Contracts Management
  if (['ADMIN', 'MANAGER', 'HR', 'ACCOUNTANT'].includes(role)) {
    list[0].items.push({
      label: 'menu.contract',
      icon: 'pi pi-file',
      to: '/contract'
    });
  }

  // 5. Financial Transactions
  if (['ADMIN', 'MANAGER', 'ACCOUNTANT'].includes(role)) {
    list[0].items.push({
      label: 'menu.transaction',
      icon: 'pi pi-wallet',
      to: '/transaction'
    });
  }

  // 6. Documents Vault
  if (['ADMIN', 'MANAGER', 'HR', 'ACCOUNTANT'].includes(role)) {
    list[0].items.push({
      label: 'menu.document',
      icon: 'pi pi-folder-open',
      to: '/document'
    });
  }

  // 7. Compliance Audit Panel
  if (['ADMIN', 'MANAGER', 'HR', 'ACCOUNTANT'].includes(role)) {
    list[0].items.push({
      label: 'menu.compliance',
      icon: 'pi pi-shield',
      to: '/compliance'
    });
  }

  // 8. Master Data Settings Group
  const masterItems = [];
  
  if (['ADMIN', 'MANAGER'].includes(role)) {
    masterItems.push({ label: 'menu.companySetting', icon: 'pi pi-cog', to: '/master/company-setting' });
  }
  
  if (['ADMIN', 'MANAGER', 'HR'].includes(role)) {
    masterItems.push({ label: 'menu.department', icon: 'pi pi-sitemap', to: '/master/department' });
    masterItems.push({ label: 'menu.employee', icon: 'pi pi-id-card', to: '/master/employee' });
  }

  // Personal profile shortcut for STAFF & ACCOUNTANT
  if (['STAFF', 'ACCOUNTANT'].includes(role) && userInfo.value?.id) {
    masterItems.push({
      label: 'menu.myProfile',
      icon: 'pi pi-user',
      to: `/master/employee/${userInfo.value.id}`
    });
  }

  if (masterItems.length > 0) {
    list.push({
      label: 'menu.masterData',
      items: masterItems
    });
  }

  return list;
});

const expandActiveParent = () => {
  if (isCollapsed.value) return;
  menuGroups.value.forEach(group => {
    group.items.forEach(item => {
      const isMatch = route.path === item.to || route.path.startsWith(item.to + '/') || route.path.startsWith(item.to + '?');
      if (item.children && isMatch) {
        if (!expandedMenus.value.includes(item.label)) expandedMenus.value.push(item.label);
      }
    });
  });
};

onMounted(() => {
  expandActiveParent();
  if (process.client) {
    const saved = localStorage.getItem('sidebarSettings');
    if (saved) {
      try {
        sidebarSettings.value = JSON.parse(saved);
      } catch (e) {}
    }
  }
});

watch(() => route.path, () => {
  expandActiveParent();
  isMobileSidebarOpen.value = false;
}, { immediate: true });
watch(isCollapsed, (newVal) => !newVal && expandActiveParent());

const router = useRouter();

const toggleMenu = (label: string) => {
  const index = expandedMenus.value.indexOf(label);
  index > -1 ? expandedMenus.value.splice(index, 1) : expandedMenus.value.push(label);
};

const handleMenuClick = (item: MenuItem) => {
  if (isCollapsed.value && item.children && item.children.length > 0) {
    navigateTo(item.children[0].to);
  } else {
    toggleMenu(item.label);
  }
};

const allMenuPaths = computed(() => {
  const paths: string[] = [];
  menuGroups.value.forEach(group => {
    group.items.forEach(item => {
      paths.push(item.to);
      if (item.children) {
        item.children.forEach((child: any) => paths.push(child.to));
      }
    });
  });
  return paths;
});

const isItemActive = (item: MenuItem) => {
  const currentPath = route.path;
  if (item.to === '/') return currentPath === '/';
  if (currentPath === item.to) return true;

  if (currentPath.startsWith(item.to + '/')) {
    const hasBetterMatch = allMenuPaths.value.some(otherPath => {
      return otherPath !== item.to
        && otherPath.length > item.to.length
        && (currentPath === otherPath || currentPath.startsWith(otherPath + '/'));
    });
    return !hasBetterMatch;
  }

  return false;
};

const isChildActive = (child: { to: string }, parentPath: string) => {
  const currentPath = route.path;
  if (child.to.endsWith('/add')) return currentPath === child.to;
  return (currentPath === child.to || (currentPath.startsWith(parentPath + '/') && !currentPath.includes('/add')));
};
</script>

<style scoped>
.sidebar-primary-item { background: transparent !important; }
.active-glow-container {
  box-shadow: 0 12px 20px -8px rgba(var(--primary-color-rgb), 0.3) !important;
  color: white !important;
}
.inactive-glow-hover:hover { background-color: transparent !important; color: var(--p-primary-color) !important; }

.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 10px; }

.expand-enter-active, .expand-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 500px;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}

aside {
  contain: paint;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

span, i {
  flex-shrink: 0;
}

.sidebar-responsive {
  transform: translateX(-100%);
}
@media (min-width: 1024px) {
  .sidebar-responsive {
    transform: translateX(0);
  }
}
.sidebar-mobile-open {
  transform: translateX(0) !important;
}
</style>
