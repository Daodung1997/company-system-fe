// @ts-ignore
import ToastEventBus from 'primevue/toasteventbus';

// Helper to show messages via PrimeVue Toast
// Uses PrimeVue's ToastEventBus directly to bypass Vue's async lifecycle/inject limitations
export const showMessage = (severity: 'success' | 'info' | 'warn' | 'error', summary: string, detail: string) => {
  try {
    ToastEventBus.emit('add', { severity, summary, detail, life: 4000 });
  } catch (e) {
    // Fallback to console if ToastEventBus is not available
    console.log(`[${severity.toUpperCase()}] ${summary}: ${detail}`);
  }
};
