// @ts-ignore
import ToastEventBus from 'primevue/toasteventbus';

const recentMessages = new Map<string, number>();
const DEDUPLICATE_WINDOW_MS = 1500; // 1.5 seconds window

// Helper to show messages via PrimeVue Toast
// Uses PrimeVue's ToastEventBus directly to bypass Vue's async lifecycle/inject limitations
export const showMessage = (severity: 'success' | 'info' | 'warn' | 'error', summary: string, detail: string) => {
  const key = `${severity}|${summary}|${detail}`;
  const now = Date.now();
  const lastTime = recentMessages.get(key);

  if (lastTime && (now - lastTime) < DEDUPLICATE_WINDOW_MS) {
    // Skip duplicate toast message in the current window
    return;
  }

  recentMessages.set(key, now);

  // Clean up old entries to prevent memory leaks
  if (recentMessages.size > 50) {
    for (const [k, timestamp] of recentMessages.entries()) {
      if (now - timestamp > DEDUPLICATE_WINDOW_MS) {
        recentMessages.delete(k);
      }
    }
  }

  try {
    ToastEventBus.emit('add', { severity, summary, detail, life: 4000 });
  } catch (e) {
    // Fallback to console if ToastEventBus is not available
    console.log(`[${severity.toUpperCase()}] ${summary}: ${detail}`);
  }
};
