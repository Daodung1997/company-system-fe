<template>
  <div class="min-h-screen bg-surface-50 dark:bg-surface-950 font-sans selection:bg-primary/20 relative">

    <!-- Sidebar -->
    <AppSidebar />

    <!-- Mobile Sidebar Backdrop Overlay -->
    <Transition name="fade">
      <div 
        v-if="isMobileSidebarOpen" 
        class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden cursor-pointer"
        @click="isMobileSidebarOpen = false"
      ></div>
    </Transition>

    <!-- Top mask strip: hides scrolling content visible above the floating topbar -->
    <div class="hidden lg:block fixed top-0 left-0 right-0 h-4 bg-surface-50 dark:bg-surface-950 z-30"></div>

    <!-- Main Content Area -->
    <main class="transition-all duration-500 min-h-screen flex flex-col pt-20 lg:pt-[76px] main-content-responsive">
      <AppTopbar />
      
      <div class="flex-1 p-4 sm:p-8 overflow-x-hidden">
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
const isMobileSidebarOpen = useState('mobileSidebarOpen', () => false);
const sidebarWidthString = computed(() => isCollapsed.value ? '80px' : '280px');
provide('sidebarWidth', sidebarWidthString);
provide('isSidebarCollapsed', isCollapsed);
</script>

<style>
.main-content-responsive {
  padding-left: 0;
}
@media (min-width: 1024px) {
  .main-content-responsive {
    padding-left: calc(v-bind(sidebarWidthString) + 1.5rem);
  }
}

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
