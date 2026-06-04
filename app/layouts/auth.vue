<template>
  <div class="min-h-screen flex overflow-hidden font-outfit">
    <!-- Left Side: Branding & Image -->
    <div class="hidden lg:flex lg:w-3/5 relative bg-surface-950 items-center justify-center p-12 overflow-hidden">
      <!-- Background Image -->
      <img src="/images/login-bg.png" alt="Branding Background" class="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom" />
      
      <!-- Overlays for Depth -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent mix-blend-overlay"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-transparent"></div>

      <!-- Branding Content -->
      <div class="relative z-10 max-w-xl">
        <div class="flex items-center gap-3 mb-8 animate-fade-in-up">
          <div class="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
            <i class="pi pi-bolt text-2xl text-white"></i>
          </div>
          <span class="text-3xl font-black text-white tracking-tighter uppercase italic">COMPLIANCE</span>
        </div>
        
        <h1 class="text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
          Kiểm soát <br />
          <span class="text-primary italic">tuân thủ</span> toàn <br />
          diện.
        </h1>
        
        <p class="text-surface-400 text-lg leading-relaxed mb-8 animate-fade-in-up delay-200">
          Hệ thống quản lý hồ sơ pháp lý, nhân sự, hợp đồng và tài liệu doanh nghiệp đa quốc gia Việt Nam - Nhật Bản.
        </p>
        
        <div class="flex gap-4 animate-fade-in-up delay-300">
          <div class="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <i class="pi pi-shield text-primary"></i>
            <span class="text-sm text-white font-medium">Enterprise Secure</span>
          </div>
          <div class="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <i class="pi pi-check-circle text-primary"></i>
            <span class="text-sm text-white font-medium">99.9% Uptime</span>
          </div>
        </div>
      </div>

      <!-- Abstract Decorative Elements -->
      <div class="absolute bottom-12 left-12 right-12 flex justify-between items-center animate-fade-in-up delay-500">
        <div class="flex -space-x-3">
          <Avatar image="https://api.dicebear.com/7.x/avataaars/svg?seed=1" shape="circle" class="border-2 border-surface-950" />
          <Avatar image="https://api.dicebear.com/7.x/avataaars/svg?seed=2" shape="circle" class="border-2 border-surface-950" />
          <Avatar image="https://api.dicebear.com/7.x/avataaars/svg?seed=3" shape="circle" class="border-2 border-surface-950" />
          <div class="w-10 h-10 rounded-full bg-surface-800 border-2 border-surface-950 flex items-center justify-center text-xs text-white font-bold">+10k</div>
        </div>
        <div class="text-surface-400 text-sm italic font-medium">Trusted by professional teams worldwide.</div>
      </div>
    </div>

    <!-- Right Side: Content Area (Login/Forgot/Reset) -->
    <div class="w-full lg:w-2/5 flex items-center justify-center bg-white dark:bg-surface-950 p-8 md:p-12 relative">
      <!-- Dark Mode Toggle -->
      <div class="absolute top-8 right-8">
        <Button 
          :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'" 
          rounded 
          text 
          severity="secondary" 
          @click="toggleDarkMode"
          class="hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
        />
      </div>

      <div class="w-full max-w-md animate-fade-in">
        <!-- Mobile Logo -->
        <div class="lg:hidden flex items-center gap-3 mb-10">
          <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <i class="pi pi-bolt text-xl text-white"></i>
          </div>
          <span class="text-2xl font-black text-surface-900 dark:text-white tracking-tighter uppercase italic">COMPLIANCE</span>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDark = ref(false);

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

@keyframes slow-zoom {
  0% { transform: scale(1.05); }
  100% { transform: scale(1.2); }
}

.animate-slow-zoom {
  animation: slow-zoom 20s infinite alternate ease-in-out;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-500 { animation-delay: 0.5s; }
</style>
