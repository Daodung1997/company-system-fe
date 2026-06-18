<template>
  <div class="antialiased">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="var(--primary-color)" />
    

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Toast />
    <ConfirmDialog />
    <ConfirmPopup />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useApiStore } from '@/stores/api';
const apiStore = useApiStore();

onMounted(() => {
  apiStore.fetchCompanySetting();
});
</script>

<style>
/* Global styles */
:root {
  --primary-color: #10b981;
}
</style>

