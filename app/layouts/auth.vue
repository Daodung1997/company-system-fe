<template>
  <div class="min-h-screen flex items-center justify-center font-outfit relative overflow-hidden p-4 sm:p-6 lg:p-8">

    <!-- ── Full-screen Background ── -->
    <div class="absolute inset-0 z-0">
      <img
        :src="apiStore.companySetting?.background_path || '/images/login-bg.png'"
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-surface-950/90 via-surface-950/75 to-primary/20"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-surface-950/50 via-transparent to-surface-950/40"></div>
      <div class="absolute inset-0 opacity-[0.025]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 32px 32px;"></div>
    </div>

    <!-- Floating Orbs -->
    <div class="absolute top-1/4 -left-20 w-72 h-72 bg-primary/15 rounded-full blur-[120px] animate-float-slow"></div>
    <div class="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[140px] animate-float-reverse"></div>

    <!-- ── Main Card (Slogan + Form in one box) ── -->
    <div class="auth-card relative z-10 w-full max-w-6xl backdrop-blur-2xl bg-white/[0.06] border border-white/[0.1] rounded-3xl shadow-2xl shadow-black/30 overflow-hidden animate-card-enter">
      <!-- Top accent line -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div class="flex flex-col lg:flex-row min-h-[520px]">

        <!-- ═══ LEFT: Branding & Slogans ═══ -->
        <div class="lg:w-[55%] relative p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center overflow-hidden">
          <!-- Subtle inner gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary/[0.06] to-transparent pointer-events-none"></div>
          <!-- Right border on desktop -->
          <div class="hidden lg:block absolute top-8 bottom-8 right-0 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent"></div>

          <div class="relative z-10">
            <!-- Logo + Company Name -->
            <div class="flex items-center gap-3 mb-6 lg:mb-8 animate-fade-in-up">
              <div class="w-11 h-11 lg:w-13 lg:h-13 bg-gradient-to-br from-primary to-primary/70 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25 ring-1 ring-white/10 overflow-hidden shrink-0">
                <img v-if="apiStore.companySetting?.logo_path" :src="apiStore.companySetting.logo_path" class="w-full h-full object-contain p-1.5" />
                <i v-else class="pi pi-bolt text-xl lg:text-2xl text-white"></i>
              </div>
              <div class="min-w-0">
                <h2 class="text-lg lg:text-xl font-black text-white tracking-tight uppercase truncate">
                  {{ apiStore.companySetting?.sidebar_name || 'COMPLIANCE' }}
                </h2>
                <p v-if="apiStore.companySetting?.sidebar_sub_name" class="text-[10px] text-surface-400 font-semibold tracking-widest uppercase truncate">
                  {{ apiStore.companySetting.sidebar_sub_name }}
                </p>
              </div>
            </div>

            <!-- Slogans -->
            <template v-if="apiStore.companySetting?.slogan_1">
              <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 lg:mb-4 leading-snug animate-fade-in-up delay-100">
                {{ apiStore.companySetting.slogan_1 }}
              </h1>
              <p v-if="apiStore.companySetting?.slogan_2" class="text-surface-300 text-sm lg:text-base leading-relaxed mb-2 animate-fade-in-up delay-200">
                {{ apiStore.companySetting.slogan_2 }}
              </p>
              <p v-if="apiStore.companySetting?.slogan_3" class="text-surface-400 text-xs lg:text-sm leading-relaxed mb-5 lg:mb-6 animate-fade-in-up delay-300">
                {{ apiStore.companySetting.slogan_3 }}
              </p>
            </template>
            <template v-else>
              <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 lg:mb-4 leading-snug animate-fade-in-up delay-100">
                {{ $t('auth.defaultSloganTitle1') }} <br class="hidden sm:block" />
                <span class="text-primary">{{ $t('auth.defaultSloganTitle2') }}</span> {{ $t('auth.defaultSloganTitle3') }}
              </h1>
              <p class="text-surface-400 text-sm leading-relaxed mb-5 lg:mb-6 animate-fade-in-up delay-200">
                {{ $t('auth.defaultSloganDesc') }}
              </p>
            </template>

            <!-- Feature Badges -->
            <div class="flex flex-wrap gap-2 animate-fade-in-up delay-300">
              <div class="flex items-center gap-1.5 bg-white/[0.05] px-3 py-1.5 rounded-full border border-white/[0.06]">
                <i class="pi pi-shield text-primary text-[11px]"></i>
                <span class="text-[11px] text-white/70 font-medium">Enterprise Secure</span>
              </div>
              <div class="flex items-center gap-1.5 bg-white/[0.05] px-3 py-1.5 rounded-full border border-white/[0.06]">
                <i class="pi pi-check-circle text-primary text-[11px]"></i>
                <span class="text-[11px] text-white/70 font-medium">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ═══ RIGHT: Form Area ═══ -->
        <div class="lg:w-[45%] p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
          <!-- Mobile divider -->
          <div class="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6"></div>

          <!-- Slot for page content (login, forgot-password, reset-password) -->
          <div class="animate-fade-in-up delay-200">
            <slot />
          </div>

          <!-- Card Footer -->
          <div class="flex items-center justify-between mt-6 pt-4 border-t border-white/[0.05]">
            <!-- Dark mode toggle -->
            <Button
              :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
              rounded
              text
              size="small"
              class="!text-surface-500 hover:!text-white hover:!bg-white/10 !transition-all !duration-300"
              @click="toggleDarkMode"
            />

            <!-- Language Switcher -->
            <div class="flex items-center gap-0.5">
              <button
                v-for="loc in availableLocales"
                :key="loc.code"
                @click="switchLocale(loc.code)"
                class="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all duration-300"
                :class="currentLocale === loc.code
                  ? 'bg-primary/20 text-primary ring-1 ring-primary/30'
                  : 'text-surface-500 hover:text-white hover:bg-white/5'"
              >
                {{ loc.code }}
              </button>
            </div>

            <!-- Security Badge -->
            <div class="flex items-center gap-1.5 text-surface-500">
              <i class="pi pi-shield text-[10px]"></i>
              <span class="text-[10px] font-semibold tracking-wider uppercase">Secure</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom copyright -->
    <p class="absolute bottom-4 left-0 right-0 text-center text-[10px] text-surface-600/40 font-medium z-10">
      © {{ new Date().getFullYear() }} {{ apiStore.companySetting?.company_name || 'ViecVat AI' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useApiStore } from '@/stores/api';

const apiStore = useApiStore();
const isDark = ref(false);
const { locale, locales, setLocale } = useI18n();

const currentLocale = computed(() => locale.value);
const availableLocales = computed(() =>
  (locales.value as Array<{ code: string; name: string }>).map(l => ({ code: l.code, name: l.name }))
);

const switchLocale = (code: string) => {
  setLocale(code);
};

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark');
};

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark');
});
</script>

<style scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}

/* ── Card Enter ── */
@keyframes card-enter {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.97);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.animate-card-enter {
  animation: card-enter 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

/* ── Background Zoom ── */
@keyframes slow-zoom {
  0% { transform: scale(1.05); }
  100% { transform: scale(1.2); }
}
.animate-slow-zoom {
  animation: slow-zoom 25s infinite alternate ease-in-out;
}

/* ── Floating Orbs ── */
@keyframes float-slow {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(25px, -15px); }
}
@keyframes float-reverse {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-20px, 20px); }
}
.animate-float-slow { animation: float-slow 15s infinite ease-in-out; }
.animate-float-reverse { animation: float-reverse 20s infinite ease-in-out; }

/* ── Fade-in-up ── */
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-500 { animation-delay: 0.5s; }

/* ── Glass form overrides ── */
.auth-card :deep(.p-inputtext),
.auth-card :deep(input.p-inputtext),
.auth-card :deep(.p-password input) {
  background-color: rgba(255, 255, 255, 0.06) !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
  color: #f1f5f9 !important;
}
.auth-card :deep(.p-inputtext:hover),
.auth-card :deep(input.p-inputtext:hover),
.auth-card :deep(.p-password input:hover) {
  border-color: rgba(255, 255, 255, 0.18) !important;
}
.auth-card :deep(.p-inputtext:focus),
.auth-card :deep(input.p-inputtext:focus),
.auth-card :deep(.p-password input:focus) {
  background-color: rgba(255, 255, 255, 0.08) !important;
  border-color: var(--p-primary-color) !important;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.12) !important;
}
.auth-card :deep(::placeholder) {
  color: rgba(148, 163, 184, 0.45) !important;
}
.auth-card :deep(.p-checkbox-box) {
  border-color: rgba(255, 255, 255, 0.15) !important;
  background: rgba(255, 255, 255, 0.04) !important;
}
.auth-card :deep(.p-password-toggle-mask-icon),
.auth-card :deep(.p-password .p-icon) {
  color: rgba(148, 163, 184, 0.5) !important;
}
.auth-card :deep(.p-button:not(.p-button-text):not(.p-button-outlined)) {
  box-shadow: 0 8px 24px -4px rgba(16, 185, 129, 0.3) !important;
}
.auth-card :deep(.p-message-error) {
  background: transparent !important;
}
</style>
