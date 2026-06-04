<template>
  <div class="mt-1 ml-1" v-if="error">
    <Message severity="error" variant="simple" size="small" class="font-medium animate-in fade-in slide-in-from-top-1 duration-200">
      {{ error }}
    </Message>
  </div>
</template>

<script setup lang="ts">
interface Props {
  error?: string | boolean | any;
}

defineProps<Props>();
</script>

<style scoped>
.message-error {
  color: #ef4444;
  font-size: 0.75rem;
  line-height: 1rem;
}
</style>
