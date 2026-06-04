<template>
  <div class="min-h-screen bg-surface-50 dark:bg-surface-950 font-sans selection:bg-primary/20 relative">
    <!-- Decorative Background Elements -->
    <div class="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px] animate-pulse" style="animation-delay: 2s"></div>
      <div class="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-primary/3 rounded-full blur-[150px] animate-pulse" style="animation-delay: 4s"></div>
    </div>

    <!-- Sidebar -->
    <AppSidebar />

    <!-- Main Content Area -->
    <main 
      class="transition-all duration-500 min-h-screen flex flex-col pt-20"
      :style="{ paddingLeft: isCollapsed ? '80px' : '280px' }"
    >
      <AppTopbar />
      
      <div class="flex-1 p-8 overflow-x-hidden">
        <slot />
      </div>
    </main>

    <!-- Global App Confirm & Popups -->
    <AppConfirm />
    <AppThemeCustomizer />
  </div>
</template>

<script setup lang="ts">
import AppSidebar from '~/components/layout/AppSidebar.vue';
import AppTopbar from '~/components/layout/AppTopbar.vue';
import AppConfirm from '~/components/AppConfirm.vue';
import AppThemeCustomizer from '~/components/layout/AppThemeCustomizer.vue';

const appName = import.meta.env.VITE_APP_NAME || 'BASE DEMO';

// Sync state between sidebar and main layout padding
// In a real app we might use a store or provide/inject, 
// for now let's use a shared ref if needed or just hardcode/reactive
const isCollapsed = useState('sidebarCollapsed', () => false);
const sidebarWidthString = computed(() => isCollapsed.value ? '80px' : '280px');
provide('sidebarWidth', sidebarWidthString);
provide('isSidebarCollapsed', isCollapsed);
</script>

<style>
/* Global Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Scrollbar Style */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  @apply bg-transparent;
}
::-webkit-scrollbar-thumb {
  @apply bg-surface-200 dark:bg-surface-800 rounded-full border-4 border-solid border-transparent bg-clip-padding;
}
::-webkit-scrollbar-thumb:hover {
  @apply bg-surface-300 dark:bg-surface-700;
}
</style>
