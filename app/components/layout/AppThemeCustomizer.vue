<template>
  <div>
    <!-- Backdrop Blur Overlay -->
    <Transition name="fade">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 bg-transparent z-[90] transition-all"
        @click="isOpen = false"
      ></div>
    </Transition>

    <!-- Slide-over Customizer Panel -->
    <Transition name="slide">
      <div 
        v-if="isOpen" 
        class="fixed right-0 top-0 h-screen w-[380px] sm:w-[420px] bg-white/95 dark:bg-surface-900/95 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_rgba(0,0,0,0.4)] border-l border-surface-200/50 dark:border-surface-800/50 flex flex-col z-[100] overflow-hidden"
      >
        <!-- Header -->
        <div class="p-6 border-b border-surface-150 dark:border-surface-800 flex items-center justify-between bg-gradient-to-r from-primary/5 to-transparent">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <i class="pi pi-palette text-lg"></i>
            </div>
            <div>
              <h3 class="text-sm font-black uppercase tracking-wider text-surface-900 dark:text-surface-50">
                {{ $t('themeCustomizer.title') }}
              </h3>
              <p class="text-[10px] text-surface-450 dark:text-surface-400 mt-0.5 uppercase tracking-widest font-bold">
                {{ $t('themeCustomizer.subtitle') }}
              </p>
            </div>
          </div>
          <button 
            @click="isOpen = false"
            class="w-9 h-9 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800 flex items-center justify-center text-surface-500 hover:text-surface-900 transition-colors"
          >
            <i class="pi pi-times text-sm"></i>
          </button>
        </div>

        <!-- Scrollable Body content -->
        <div class="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          
          <!-- GLOBAL SECTION A: SYSTEM BRAND STYLE -->
          <div class="space-y-6 bg-surface-50 dark:bg-surface-950 p-5 rounded-3xl border border-surface-200/65 dark:border-surface-800/40">
            <!-- A1. SYSTEM PRIMARY BRAND COLOR SELECTOR -->
            <div class="space-y-3.5">
              <div class="flex flex-col gap-0.5">
                <span class="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  {{ $t('themeCustomizer.systemPrimaryLabel') }}
                </span>
                <span class="text-[9px] text-surface-450 dark:text-surface-400 italic">
                  {{ $t('themeCustomizer.systemPrimarySub') }}
                </span>
              </div>

              <div class="grid grid-cols-3 gap-2">
                <button 
                  v-for="c in systemColorPresets" 
                  :key="c.key"
                  @click="setSystemPrimary(c.key, $t(c.labelKey))"
                  class="py-2 px-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all flex items-center justify-center gap-1.5"
                  :class="[
                    settings.systemPrimary === c.key 
                      ? 'border-primary ring-2 ring-primary/20 bg-white dark:bg-surface-900 text-primary shadow-sm' 
                      : 'border-surface-200 dark:border-surface-800 bg-transparent text-surface-600 dark:text-surface-300 hover:border-surface-400'
                  ]"
                >
                  <!-- Small dynamic color dot -->
                  <span class="w-2 h-2 rounded-full flex-shrink-0" :style="{ backgroundColor: c.value }"></span>
                  <span class="truncate">{{ $t(c.labelKey) }}</span>
                </button>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-[1px] bg-surface-200 dark:bg-surface-800"></div>

            <!-- A2. SYSTEM FONT FAMILY SELECTOR (Dropdown Select Option format) -->
            <div class="space-y-3">
              <div class="flex flex-col gap-0.5">
                <span class="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  {{ $t('themeCustomizer.fontLabel') }}
                </span>
                <span class="text-[9px] text-surface-450 dark:text-surface-400 italic">
                  {{ $t('themeCustomizer.fontSub') }}
                </span>
              </div>

              <div class="relative pt-1">
                <!-- Google Fonts prefetching list to render previews inside options list -->
                <link 
                  rel="stylesheet" 
                  href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Pacifico&family=Lora&family=Bitter&family=Playfair+Display&family=Oswald&family=Quicksand&family=Roboto+Mono&family=Outfit&family=Inter&family=Poppins&family=Montserrat&display=swap"
                />

                <Select
                  v-model="selectedFontObj"
                  :options="fontPresets"
                  optionLabel="name"
                  placeholder="Chọn phông chữ..."
                  class="w-full rounded-2xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 text-xs shadow-sm focus:ring-2 focus:ring-primary/20"
                  @change="onFontChange"
                >
                  <!-- Custom Selected Value preview inside select bar -->
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center gap-2.5 py-0.5">
                      <span class="text-sm font-bold italic text-primary w-5 text-center" :style="{ fontFamily: slotProps.value.key }">Aa</span>
                      <span class="text-xs font-semibold" :style="{ fontFamily: slotProps.value.key }">{{ slotProps.value.name }}</span>
                    </div>
                    <span v-else>{{ slotProps.placeholder }}</span>
                  </template>

                  <!-- Custom Dropdown Options items list display styled with the specific font -->
                  <template #option="slotProps">
                    <div class="flex items-center gap-3 py-1">
                      <span class="text-base font-bold italic text-primary w-6 text-center" :style="{ fontFamily: slotProps.option.key }">Aa</span>
                      <span class="text-xs font-semibold" :style="{ fontFamily: slotProps.option.key }">{{ slotProps.option.name }}</span>
                    </div>
                  </template>
                </Select>
              </div>
            </div>
          </div>

          <!-- SIDEBAR SECTION B: LEFT SIDEBAR THEME SETTINGS -->
          <div class="space-y-8">
            <!-- 1. THEME MODE SELECTOR -->
            <div class="space-y-3">
              <span class="text-[10px] font-black uppercase tracking-[0.2em] text-surface-400">
                {{ $t('themeCustomizer.mode') }}
              </span>
              <div class="grid grid-cols-3 gap-2 bg-surface-50 dark:bg-surface-950 p-1.5 rounded-2xl border border-surface-200/50 dark:border-surface-800/30">
                <button 
                  v-for="mode in modes" 
                  :key="mode.value"
                  @click="setMode(mode.value)"
                  class="py-2.5 px-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                  :class="[
                    settings.mode === mode.value 
                      ? 'bg-white dark:bg-surface-900 text-primary shadow-md' 
                      : 'text-surface-500 hover:text-surface-800 dark:hover:text-surface-300'
                  ]"
                >
                  {{ $t(mode.labelKey) }}
                </button>
              </div>
            </div>

            <!-- 2. COLOR PALETTE (6 OPTIONS) -->
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-[10px] font-black uppercase tracking-[0.2em] text-surface-400">
                  {{ $t('themeCustomizer.colorLabel') }}
                </span>
                <span class="text-[10px] font-extrabold text-primary uppercase italic">
                  {{ settings.color === 'default' ? $t('themeCustomizer.colorNameDefault') : settings.colorName }}
                </span>
              </div>
              
              <div class="grid grid-cols-4 gap-3">
                <!-- Default Option -->
                <button 
                  @click="setColor('default', 'Mặc định')"
                  class="h-11 rounded-xl border flex items-center justify-center transition-all group relative overflow-hidden"
                  :class="[
                    settings.color === 'default' 
                      ? 'border-primary ring-2 ring-primary/20 bg-primary/5 shadow-sm' 
                      : 'border-surface-200 dark:border-surface-800 hover:border-surface-400 dark:hover:border-surface-600 bg-transparent'
                  ]"
                >
                  <span class="text-[10px] font-black uppercase tracking-wider group-hover:scale-105 transition-transform" :class="settings.color === 'default' ? 'text-primary' : 'text-surface-600 dark:text-surface-300'">
                    {{ $t('themeCustomizer.colorNameGoc') }}
                  </span>
                </button>

                <!-- Custom Colors -->
                <button 
                  v-for="c in colorPresets" 
                  :key="c.value"
                  @click="setColor(c.value, c.name)"
                  class="h-11 rounded-xl transition-all flex items-center justify-center relative overflow-hidden group shadow-sm hover:scale-[1.05]"
                  :style="{ backgroundColor: c.value }"
                  :title="c.name"
                >
                  <!-- Active dot -->
                  <span 
                    v-if="settings.color === c.value" 
                    class="w-2.5 h-2.5 rounded-full bg-white shadow-lg animate-bounce"
                  ></span>
                </button>
              </div>
            </div>

            <!-- 3. BACKGROUND IMAGES (6 OPTIONS) -->
            <div v-if="settings.mode !== 'color'" class="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div class="flex justify-between items-center">
                <span class="text-[10px] font-black uppercase tracking-[0.2em] text-surface-400">
                  {{ $t('themeCustomizer.imageLabel') }}
                </span>
                <span class="text-[10px] font-extrabold text-primary uppercase italic">
                  {{ settings.image === '' ? $t('themeCustomizer.imageNone') : settings.imageName }}
                </span>
              </div>
              
              <div class="grid grid-cols-2 gap-3">
                <!-- None Option -->
                <button 
                  @click="setImage('', 'Không có')"
                  class="h-16 rounded-2xl border flex flex-col items-center justify-center transition-all gap-1.5"
                  :class="[
                    settings.image === '' 
                      ? 'border-primary ring-2 ring-primary/20 bg-primary/5 text-primary' 
                      : 'border-surface-200 dark:border-surface-800 hover:border-surface-400 dark:hover:border-surface-600 text-surface-400 dark:text-surface-500'
                  ]"
                >
                  <i class="pi pi-ban text-sm"></i>
                  <span class="text-[9px] font-black uppercase tracking-widest">
                    {{ $t('themeCustomizer.imageNone') }}
                  </span>
                </button>

                <!-- Image Options -->
                <button 
                  v-for="img in imagePresets" 
                  :key="img.value"
                  @click="setImage(img.value, img.name)"
                  class="h-16 rounded-2xl relative overflow-hidden group transition-all"
                  :class="[
                    settings.image === img.value 
                      ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-surface-900 scale-[0.98]' 
                      : 'opacity-70 hover:opacity-100 hover:scale-[1.02]'
                  ]"
                >
                  <!-- Thumbnail -->
                  <img :src="img.value" :alt="img.name" class="w-full h-full object-cover" />
                  
                  <!-- Overlay mask -->
                  <div class="absolute inset-0 bg-black/40 flex items-end p-2 transition-opacity group-hover:bg-black/20">
                    <span class="text-[8px] font-black uppercase tracking-wider text-white truncate max-w-full">
                      {{ img.name }}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <!-- 4. OPACITY SLIDER -->
            <div class="space-y-4 bg-surface-50 dark:bg-surface-950 p-5 rounded-3xl border border-surface-150 dark:border-surface-800/40">
              <div class="flex justify-between items-center">
                <div class="flex flex-col gap-0.5">
                  <span class="text-[10px] font-black uppercase tracking-[0.2em] text-surface-400">
                    {{ $t('themeCustomizer.opacityLabel') }}
                  </span>
                  <span class="text-[9px] text-surface-400 italic">
                    {{ $t('themeCustomizer.opacitySub') }}
                  </span>
                </div>
                <span class="text-xs font-black font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-xl">{{ Math.round(settings.opacity * 100) }}%</span>
              </div>

              <!-- Custom Slider -->
              <div class="flex items-center gap-3 pt-2">
                <span class="text-[9px] font-black text-surface-450 uppercase">
                  {{ $t('themeCustomizer.opacityStart') }}
                </span>
                <input 
                  type="range" 
                  min="0.1" 
                  max="1.0" 
                  step="0.05" 
                  v-model.number="settings.opacity"
                  class="flex-1 h-1.5 bg-surface-200 dark:bg-surface-800 rounded-full appearance-none cursor-pointer accent-primary"
                  @input="saveSettings"
                />
                <span class="text-[9px] font-black text-surface-450 uppercase">
                  {{ $t('themeCustomizer.opacityEnd') }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-6 border-t border-surface-150 dark:border-surface-800 bg-surface-50/50 dark:bg-surface-950/20 flex gap-3">
          <button 
            @click="resetToDefault"
            class="flex-1 py-3 px-4 rounded-xl border border-surface-250 dark:border-surface-800 text-[11px] font-black uppercase tracking-widest text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
          >
            {{ $t('themeCustomizer.btnReset') }}
          </button>
          <button 
            @click="isOpen = false"
            class="flex-1 py-3 px-4 rounded-xl bg-primary text-white text-[11px] font-black uppercase tracking-widest hover:bg-primary-600 transition-colors shadow-lg shadow-primary/20"
          >
            {{ $t('themeCustomizer.btnDone') }}
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

// Shared state for Sidebar and Global Settings
const settings = useState('sidebarSettings', () => ({
  mode: 'both' as 'color' | 'image' | 'both',
  color: 'rgb(153, 27, 27)',
  colorName: 'Crimson (Đỏ)',
  image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=400&auto=format&fit=crop',
  imageName: 'Glassy Frost',
  opacity: 0.95,
  systemPrimary: 'default', // 'default' = Emerald Green
  systemPrimaryName: 'Mặc định',
  fontFamily: 'Outfit', // Default font family
  fontFamilyName: 'Outfit'
}));

// Shared visibility state
const isOpen = useState('sidebarSettingsOpen', () => false);

const modes = [
  { labelKey: 'themeCustomizer.modeColor', value: 'color' as const },
  { labelKey: 'themeCustomizer.modeImage', value: 'image' as const },
  { labelKey: 'themeCustomizer.modeBoth', value: 'both' as const }
];

// 6 Premium Theme Colors presets for Left Sidebar (Tailwind aesthetic tones)
const colorPresets = [
  { name: 'Royal Blue (Xanh)', value: 'rgb(30, 64, 175)' },
  { name: 'Emerald (Lá cây)', value: 'rgb(6, 95, 70)' },
  { name: 'Amethyst (Tím)', value: 'rgb(109, 40, 217)' },
  { name: 'Crimson (Đỏ)', value: 'rgb(153, 27, 27)' },
  { name: 'Sunset (Cam)', value: 'rgb(194, 65, 12)' },
  { name: 'Obsidian (Than)', value: 'rgb(24, 24, 27)' }
];

// 6 Gorgeous abstract background images presets (Unsplash, static and instantly loadable)
const imagePresets = [
  { name: 'Deep Space Nebula', value: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop' },
  { name: 'Northern Lights', value: 'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?q=80&w=400&auto=format&fit=crop' },
  { name: 'Sakura Dream', value: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=400&auto=format&fit=crop' },
  { name: 'Cyberpunk Neon', value: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=400&auto=format&fit=crop' },
  { name: 'Dark Gold Mesh', value: '/dark-gold-mesh.png' },
  { name: 'Glassy Frost', value: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=400&auto=format&fit=crop' }
];

// 6 Premium system brand colors presets (shades 50-950) that override PrimeVue Aura variables
const primaryColorPresets: Record<string, Record<string, string>> = {
  blue: {
    '50': '#eff6ff', '100': '#dbeafe', '200': '#bfdbfe', '300': '#93c5fd', '400': '#60a5fa',
    '500': '#3b82f6', '600': '#2563eb', '700': '#1d4ed8', '800': '#1e40af', '900': '#1e3a8a', '950': '#172554'
  },
  purple: {
    '50': '#f5f3ff', '100': '#ede9fe', '200': '#ddd6fe', '300': '#c084fc', '400': '#a78bfa',
    '500': '#8b5cf6', '600': '#7c3aed', '700': '#6d28d9', '800': '#5b21b6', '900': '#4c1d95', '950': '#2e1065'
  },
  orange: {
    '50': '#fff7ed', '100': '#ffedd5', '200': '#fed7aa', '300': '#fdba74', '400': '#fb923c',
    '500': '#f97316', '600': '#ea580c', '700': '#c2410c', '800': '#9a3412', '900': '#7c2d12', '950': '#431407'
  },
  red: {
    '50': '#fef2f2', '100': '#fee2e2', '200': '#fecaca', '300': '#fca5a5', '400': '#f87171',
    '500': '#ef4444', '600': '#dc2626', '700': '#b91c1c', '800': '#991b1b', '900': '#7f1d1d', '950': '#450a0a'
  },
  teal: {
    '50': '#f0fdfa', '100': '#ccfbf1', '200': '#99f6e4', '300': '#5eead4', '400': '#2dd4bf',
    '500': '#14b8a6', '600': '#0d9488', '700': '#0f766e', '800': '#115e59', '900': '#134e4a', '950': '#042f2e'
  }
};

const systemColorPresets = [
  { key: 'default', labelKey: 'themeCustomizer.colorEmerald', value: '#10b981' }, // Emerald Green (Original)
  { key: 'blue', labelKey: 'themeCustomizer.colorBlue', value: '#3b82f6' },
  { key: 'purple', labelKey: 'themeCustomizer.colorPurple', value: '#8b5cf6' },
  { key: 'orange', labelKey: 'themeCustomizer.colorOrange', value: '#f97316' },
  { key: 'red', labelKey: 'themeCustomizer.colorRed', value: '#ef4444' },
  { key: 'teal', labelKey: 'themeCustomizer.colorTeal', value: '#14b8a6' }
];

// 27 Premium popular Google Fonts supporting vietnamese and latin subsets
const fontPresets = [
  { key: 'Outfit', name: 'Outfit' },
  { key: 'Inter', name: 'Inter' },
  { key: 'Poppins', name: 'Poppins' },
  { key: 'Montserrat', name: 'Montserrat' },
  { key: 'Roboto', name: 'Roboto' },
  { key: 'Open Sans', name: 'Open Sans' },
  { key: 'Lato', name: 'Lato' },
  { key: 'Raleway', name: 'Raleway' },
  { key: 'Ubuntu', name: 'Ubuntu' },
  { key: 'Nunito', name: 'Nunito' },
  { key: 'Playfair Display', name: 'Playfair Display' },
  { key: 'Roboto Mono', name: 'Roboto Mono' },
  { key: 'Oswald', name: 'Oswald' },
  { key: 'Source Sans Pro', name: 'Source Sans Pro' },
  { key: 'Merriweather', name: 'Merriweather' },
  { key: 'Lora', name: 'Lora' },
  { key: 'Quicksand', name: 'Quicksand' },
  { key: 'Cabin', name: 'Cabin' },
  { key: 'Fira Sans', name: 'Fira Sans' },
  { key: 'Work Sans', name: 'Work Sans' },
  { key: 'Kanit', name: 'Kanit' },
  { key: 'Dosis', name: 'Dosis' },
  { key: 'Josefin Sans', name: 'Josefin Sans' },
  { key: 'Arimo', name: 'Arimo' },
  { key: 'Bitter', name: 'Bitter' },
  { key: 'Dancing Script', name: 'Dancing Script' },
  { key: 'Pacifico', name: 'Pacifico' }
];

// Selected font object local ref in customizer
const selectedFontObj = ref(fontPresets[0]);

// Helper function to inject style block on document head for system primary brand color
const applySystemPrimaryColor = (colorKey: string) => {
  if (!process.client) return;
  
  const existing = document.getElementById('primevue-custom-primary-theme');
  if (existing) existing.remove();
  
  if (colorKey === 'default') {
    return; // default uses original preset
  }
  
  const shades = primaryColorPresets[colorKey];
  if (!shades) return;
  
  const styleEl = document.createElement('style');
  styleEl.id = 'primevue-custom-primary-theme';
  
  let css = `:root {\n`;
  Object.entries(shades).forEach(([shade, hex]) => {
    css += `  --p-primary-${shade}: ${hex} !important;\n`;
  });
  
  css += `  --p-primary-color: ${shades['500']} !important;\n`;
  css += `  --p-primary-color-hover: ${shades['600']} !important;\n`;
  css += `  --p-primary-color-active: ${shades['700']} !important;\n`;
  
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };
  const rgb = hexToRgb(shades['500']);
  css += `  --primary-color-rgb: ${rgb} !important;\n`;
  
  css += `}\n`;
  
  styleEl.innerHTML = css;
  document.head.appendChild(styleEl);
};

// Helper function to dynamically pull and apply google web font families
const applyFontFamily = (fontName: string) => {
  if (!process.client) return;
  
  const existingLink = document.getElementById('google-font-custom-link');
  if (existingLink) existingLink.remove();
  
  if (fontName === 'Outfit') {
    // Revert to original built-in Outfit font by removing our dynamic root overrides
    const existingStyle = document.getElementById('custom-font-family-style');
    if (existingStyle) existingStyle.remove();
    return;
  }
  
  // Create dynamic Google Font link element
  const fontUrl = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, '+')}:wght@300;400;500;600;700;800;900&display=swap`;
  const linkEl = document.createElement('link');
  linkEl.id = 'google-font-custom-link';
  linkEl.rel = 'stylesheet';
  linkEl.href = fontUrl;
  document.head.appendChild(linkEl);
  
  // Override root HTML elements to completely apply typography consistently
  const existingStyle = document.getElementById('custom-font-family-style');
  if (existingStyle) existingStyle.remove();
  
  const styleEl = document.createElement('style');
  styleEl.id = 'custom-font-family-style';
  styleEl.innerHTML = `
    body, html, .font-sans, .p-component, button, input, textarea, select {
      font-family: '${fontName}', sans-serif !important;
    }
  `;
  document.head.appendChild(styleEl);
};

// State Action wrappers
const setSystemPrimary = (key: string, name: string) => {
  settings.value.systemPrimary = key;
  settings.value.systemPrimaryName = name;
  applySystemPrimaryColor(key);
  saveSettings();
};

const setFontFamily = (key: string, name: string) => {
  settings.value.fontFamily = key;
  settings.value.fontFamilyName = name;
  applyFontFamily(key);
  saveSettings();
};

const onFontChange = (e: any) => {
  if (e.value) {
    setFontFamily(e.value.key, e.value.name);
  }
};

const setMode = (mode: 'color' | 'image' | 'both') => {
  settings.value.mode = mode;
  // Fallbacks to keep contrast beautiful
  if (mode === 'image' && settings.value.image === '') {
    settings.value.image = imagePresets[0].value;
    settings.value.imageName = imagePresets[0].name;
  }
  if ((mode === 'color' || mode === 'both') && settings.value.color === 'default') {
    settings.value.color = colorPresets[0].value;
    settings.value.colorName = colorPresets[0].name;
  }
  saveSettings();
};

const setColor = (color: string, name: string) => {
  settings.value.color = color;
  settings.value.colorName = name;
  saveSettings();
};

const setImage = (img: string, name: string) => {
  settings.value.image = img;
  settings.value.imageName = name;
  saveSettings();
};

const saveSettings = () => {
  if (process.client) {
    localStorage.setItem('sidebarSettings', JSON.stringify(settings.value));
  }
};

const resetToDefault = () => {
  settings.value = {
    mode: 'both',
    color: 'rgb(153, 27, 27)',
    colorName: 'Crimson (Đỏ)',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=400&auto=format&fit=crop',
    imageName: 'Glassy Frost',
    opacity: 0.95,
    systemPrimary: 'default',
    systemPrimaryName: 'Mặc định',
    fontFamily: 'Outfit',
    fontFamilyName: 'Outfit'
  };
  applySystemPrimaryColor('default');
  applyFontFamily('Outfit');
  selectedFontObj.value = fontPresets[0];
  saveSettings();
};

watch(() => settings.value.systemPrimary, (newKey) => {
  applySystemPrimaryColor(newKey);
});

watch(() => settings.value.fontFamily, (newKey) => {
  applyFontFamily(newKey);
  const match = fontPresets.find(f => f.key === newKey);
  if (match) {
    selectedFontObj.value = match;
  }
});

// Initial Sync from localStorage
onMounted(() => {
  if (process.client) {
    const saved = localStorage.getItem('sidebarSettings');
    if (saved) {
      try {
        settings.value = JSON.parse(saved);
        if (settings.value.systemPrimary) {
          applySystemPrimaryColor(settings.value.systemPrimary);
        }
        if (settings.value.fontFamily) {
          applyFontFamily(settings.value.fontFamily);
          const match = fontPresets.find(f => f.key === settings.value.fontFamily);
          if (match) {
            selectedFontObj.value = match;
          }
        }
      } catch (e) {}
    }
  }
});
</script>

<style scoped>
/* Slide Transition */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
  opacity: 0.9;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Custom Scrollbar for Drawer */
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

/* Webkit input range styling */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--p-primary-color);
  box-shadow: 0 4px 10px rgba(var(--primary-color-rgb), 0.3);
  transition: transform 0.2s;
}
input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}
</style>
