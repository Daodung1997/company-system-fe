<template>
  <div class="flex flex-col gap-1">
    <InputGroup class="input-focus-glow rounded-xl overflow-hidden border border-surface-200 dark:border-surface-800 focus-within:!ring-4 focus-within:!ring-primary/10 transition-all !bg-white dark:!bg-surface-900">
      <div class="relative flex-1 group/input">
        <i class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 z-10 transition-colors pointer-events-none group-focus-within/input:text-primary"></i>
        <InputText
          :value="modelValue"
          @input="handleInput"
          @keypress="handleKeyPress"
          :disabled="disabled"
          placeholder="000-0000"
          class="!w-full !pl-12 !py-2.5 !border-none focus:!ring-0 !shadow-none !bg-transparent disabled:opacity-50 !font-mono"
          v-bind="$attrs"
        />
      </div>
      <Button
        icon="pi pi-search"
        severity="secondary"
        variant="text"
        class="!border-y-0 !border-r-0 !border-l !border-surface-100 dark:!border-surface-800 rounded-none !px-5 !py-2.5 !bg-surface-50/30 dark:!bg-surface-800/30 hover:!bg-primary hover:!text-white transition-all"
        @click="onShowModal"
        :disabled="disabled"
      />
    </InputGroup>

    <Dialog
      v-model:visible="isVisible"
      :modal="true"
      :id="idModal"
      class="w-full max-w-[1100px] !border-none"
      contentClass="p-0 overflow-hidden"
      pt:root:class="!rounded-3xl border-none shadow-2xl overflow-hidden"
      pt:header:class="!bg-surface-50 dark:!bg-surface-900 !px-8 !py-6 !border-b !border-surface-100 dark:!border-surface-800 !rounded-t-3xl"
    >
      <template #header>
        <div class="flex items-center gap-4">
           <div class="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner">
              <i class="pi pi-map-marker text-primary text-xl"></i>
           </div>
           <div class="flex flex-col">
              <h3 class="text-lg font-black text-surface-900 dark:text-surface-0 leading-tight uppercase tracking-tight">{{ $t('company.searchAddress') }}</h3>
              <p class="text-[9px] text-surface-400 font-bold uppercase tracking-[0.2em] mt-0.5 italic flex items-center gap-1.5">
                <span class="w-1 h-1 rounded-full bg-primary/40"></span>
                Location Mapping Intelligence
              </p>
           </div>
        </div>
      </template>

      <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        <!-- left side: selection fields -->
        <div class="col-span-12 lg:col-span-4 py-4 px-6 bg-surface-50/50 dark:bg-surface-900/50 border-r border-surface-100 dark:border-surface-800 flex flex-col gap-6 max-h-[700px] overflow-y-auto custom-scrollbar">
          <!-- Global Smart Search -->
          <div class="flex flex-col gap-3 p-4 bg-primary/5 rounded-3xl border border-primary/10 mb-2">
            <label class="text-[10px] font-black text-primary uppercase tracking-[0.2em] px-1 flex items-center gap-2">
              <i class="pi pi-bolt"></i>
              Smart Location Search
            </label>
            <InputGroup class="shadow-sm rounded-2xl overflow-hidden border border-surface-200 dark:border-surface-700">
               <InputText 
                 v-model="searchKeyword" 
                 placeholder="Type address or landmark..." 
                 class="!border-none !text-xs !py-3 !pl-4 focus:!ring-0"
                 @keyup.enter="onGlobalSearch"
               />
               <Button 
                 icon="pi pi-search" 
                 @click="onGlobalSearch" 
                 :loading="isSearchingGlobal"
                 class="!px-4 !bg-primary !border-none !text-white"
               />
            </InputGroup>
            <p class="text-[9px] text-surface-400 italic px-1 leading-relaxed">Try typing "Tokyo Tower" or a specific street name for precision.</p>
          </div>

          <div class="space-y-6">
            <!-- Area -->
            <div class="flex flex-col gap-2.5">
              <label class="text-[10px] font-black text-surface-400 uppercase tracking-[0.2em] pl-1">{{ $t('company.area') }}</label>
              <Select
                v-model="area"
                :options="JAPAN_REGIONS"
                optionLabel="name"
                optionValue="name"
                class="w-full !rounded-xl !bg-white dark:!bg-surface-800 !border-surface-200 dark:!border-surface-700 shadow-sm"
                @change="() => onGetPrefectureByArea()"
              />
            </div>

            <!-- Prefecture -->
            <div class="flex flex-col gap-2.5">
              <label class="text-[10px] font-black text-surface-400 uppercase tracking-[0.2em] pl-1">{{ $t('company.prefecture') }}</label>
              <Select
                v-model="prefecture"
                :options="listPrefectures"
                optionLabel="name"
                optionValue="name"
                class="w-full !rounded-xl !bg-white dark:!bg-surface-800 !border-surface-200 dark:!border-surface-700 shadow-sm"
                :disabled="!area"
                @change="() => funcGetCitiesByPrefecture()"
              />
            </div>

            <!-- City -->
            <div class="flex flex-col gap-2.5">
              <label class="text-[10px] font-black text-surface-400 uppercase tracking-[0.2em] pl-1">{{ $t('company.city') }}</label>
              <Select
                v-model="city"
                :options="listCities"
                optionLabel="name"
                optionValue="name"
                class="w-full !rounded-xl !bg-white dark:!bg-surface-800 !border-surface-200 dark:!border-surface-700 shadow-sm"
                :disabled="!prefecture"
                @change="() => funcGetTownsByCity()"
              />
            </div>

            <!-- Town -->
            <div class="flex flex-col gap-2.5">
              <label class="text-[10px] font-black text-surface-400 uppercase tracking-[0.2em] pl-1">{{ $t('company.town') }}</label>
              <Select
                v-model="town"
                :options="listTowns"
                optionLabel="name"
                optionValue="name"
                class="w-full !rounded-xl !bg-white dark:!bg-surface-800 !border-surface-200 dark:!border-surface-700 shadow-sm"
                :disabled="!city"
                @change="onGetPostCode"
              />
            </div>
          </div>

          <!-- Postcode Result -->
          <div class="flex flex-col gap-3 mt-auto">
            <label class="text-[10px] font-black text-surface-400 uppercase tracking-[0.2em] pl-1">{{ $t('company.postcode') }}</label>
            <div class="p-3 bg-primary/5 dark:bg-primary/10 border-2 border-dashed border-primary/20 rounded-3xl flex items-center justify-center font-mono text-3xl font-black text-primary tracking-tighter shadow-inner relative overflow-hidden group/postcode">
              <div class="absolute inset-0 bg-primary/5 -translate-x-full group-hover/postcode:translate-x-0 transition-transform duration-700"></div>
              <span class="relative z-10">{{ postcode || '--- ----' }}</span>
            </div>
          </div>
        </div>

        <!-- right side: larger map -->
        <div class="col-span-12 lg:col-span-8 relative">
          <div 
            id="map-container" 
            class="w-full h-full min-h-[450px] bg-surface-100 dark:bg-surface-950"
          ></div>

          <!-- Map Loading / Placeholder State -->
          <div v-if="!mapInstance" class="absolute inset-0 z-[1100] bg-surface-50 dark:bg-surface-900/40 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-700 overflow-hidden">
            <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 24px 24px;"></div>
            <div class="relative">
              <div class="w-24 h-24 rounded-[2rem] bg-primary/10 flex items-center justify-center mb-6 relative group">
                <!-- Outer spinning ring -->
                <div class="absolute -inset-2 border-2 border-primary/20 border-dashed rounded-[2.5rem] animate-[spin_8s_linear_infinite]"></div>
                <!-- Inner spinning ring -->
                <div class="absolute -inset-4 border border-primary/10 rounded-[3rem] animate-[spin_12s_linear_infinite_reverse]"></div>
                <i class="pi pi-spin pi-spinner text-primary text-4xl"></i>
              </div>
            </div>
            <div class="flex flex-col items-center gap-2">
              <h4 class="text-xs font-black text-surface-900 dark:text-surface-0 uppercase tracking-[0.3em] ml-1">Spatial Engine</h4>
              <p class="text-[9px] text-surface-400 font-bold italic uppercase tracking-widest animate-pulse">Initializing Map Layers...</p>
            </div>
          </div>

          <!-- Map Layer Switcher (Elegant Light Glass) -->
          <div class="absolute top-6 right-6 z-[1000] flex flex-col items-end gap-4">
            <button 
              @click="isLayerMenuOpen = !isLayerMenuOpen"
              class="group/layer-toggle !text-primary relative w-14 h-14 rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-white/60 dark:border-surface-700 active:scale-95"
              :class="isLayerMenuOpen ? 'ring-2 ring-primary ring-offset-4 scale-105' : 'hover:-translate-y-1'"
              v-tooltip.left="'Viewing Modes'"
            >
              <!-- Crystal Glass Background -->
              <div class="absolute inset-0 bg-white/90 dark:bg-surface-900/90 backdrop-blur-2xl transition-colors duration-500"></div>
              <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover/layer-toggle:opacity-100 transition-opacity"></div>
              
              <!-- Soft Aura Glow -->
              <div class="absolute -inset-2 bg-primary/20 blur-2xl opacity-0 group-hover/layer-toggle:opacity-100 transition-opacity duration-700"></div>

              <!-- Content -->
              <div class="relative flex flex-col items-center justify-center h-full gap-1">
                <i 
                  class="pi pi-layers text-xl transition-all duration-700"
                  :class="isLayerMenuOpen ? 'text-primary' : 'text-surface-700 dark:text-surface-200 group-hover/layer-toggle:text-primary'"
                ></i>
                <span class="text-[8px] font-black text-primary/60 uppercase tracking-[0.2em] opacity-0 group-hover/layer-toggle:opacity-100 transition-all transform translate-y-1 group-hover/layer-toggle:translate-y-0">Map</span>
              </div>
            </button>

            <Transition name="pop">
              <div 
                v-if="isLayerMenuOpen" 
                ref="layerMenuRef"
                class="bg-white/95 dark:bg-surface-900/95 backdrop-blur-3xl p-3 rounded-[2rem] border border-white/60 dark:border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col gap-2 w-72 origin-top-right animate-in fade-in zoom-in-95 duration-300"
              >
                <div class="px-4 py-3 border-b border-surface-100 dark:border-white/5 flex items-center justify-between mb-1">
                  <span class="text-[10px] font-black text-surface-900 dark:text-surface-0 uppercase tracking-[0.3em] flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary pulse"></span>
                    Display settings
                  </span>
                  <i class="pi pi-sliders-h text-surface-400 text-xs"></i>
                </div>

                <div class="flex flex-col gap-1.5">
                  <button 
                    v-for="layer in MAP_LAYERS" 
                    :key="layer.id"
                    @click="() => { changeMapLayer(layer.id); isLayerMenuOpen = false; }"
                    class="flex items-center gap-4 px-4 py-3 rounded-2xl transition-all group/layer-btn relative"
                    :class="[
                      currentLayerId === layer.id 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-surface-500 hover:bg-surface-50 dark:hover:bg-white/5 hover:text-surface-900 dark:hover:text-white'
                    ]"
                  >
                    <div class="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-surface-200 dark:border-white/10 relative">
                      <img :src="layer.preview" :alt="layer.name" class="w-full h-full object-cover group-hover/layer-btn:scale-125 transition-transform duration-700" />
                      <div v-if="currentLayerId === layer.id" class="absolute inset-0 bg-primary/20 flex items-center justify-center">
                         <i class="pi pi-check text-white text-xs drop-shadow-md"></i>
                      </div>
                    </div>
                    <div class="flex flex-col text-left overflow-hidden">
                      <span class="text-[11px] font-black uppercase tracking-tight leading-none" :class="currentLayerId === layer.id ? 'text-primary' : 'text-surface-900 dark:text-surface-0'">{{ layer.name }}</span>
                      <span class="text-[9px] opacity-70 font-bold mt-1.5 leading-relaxed">{{ layer.description }}</span>
                    </div>

                    <!-- Indicator -->
                    <div v-if="currentLayerId === layer.id" class="absolute right-4 w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-primary/50"></div>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
          
          <!-- Map Overlay Detail -->
          <div v-if="postcode" class="absolute bottom-6 left-6 z-[1000] bg-white/90 dark:bg-surface-900/90 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-4 animate-in fade-in slide-in-from-left-4 group/overlay">
             <a 
               :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(prefecture + city + town)}`" 
               target="_blank"
               class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-lg shadow-primary/30 cursor-pointer"
               v-tooltip.top="'View on Google Maps'"
             >
                <i class="pi pi-directions text-white text-sm"></i>
             </a>
             <div class="flex flex-col">
                <p class="text-[10px] font-black text-surface-900 dark:text-surface-0 uppercase tracking-tighter">{{ prefecture }}{{ city }}</p>
                <p class="text-[9px] text-surface-400 font-bold italic">{{ town }}</p>
             </div>
          </div>

          <div v-if="mapError" class="absolute top-6 right-6 z-[1000] bg-red-500/90 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in shake">
            <i class="pi pi-exclamation-triangle"></i>
            <span class="text-xs font-black uppercase tracking-wider">{{ $t('text.msgMapNotFound') }}</span>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="px-8 py-5 flex justify-end gap-3 bg-surface-50 dark:bg-surface-950 border-t border-surface-100 dark:border-surface-800 !rounded-b-3xl">
          <Button
            :label="$t('btn.cancel')"
            icon="pi pi-times"
            severity="secondary"
            outlined
            @click="isVisible = false"
            class="!rounded-xl !px-6 !py-2.5 !font-bold !text-sm !border-surface-200 dark:!border-surface-700 hover:!bg-surface-100 dark:hover:!bg-surface-800 transition-all !min-w-[120px]"
          />
          <Button
            :label="$t('btn.ok')"
            icon="pi pi-check"
            severity="primary"
            @click="onSetDataAddress"
            :disabled="!postcode"
            class="!rounded-xl !px-10 !py-2.5 !font-black !text-sm !shadow-lg !shadow-primary/25 transition-all hover:scale-[1.03] active:scale-95 !min-w-[140px]"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from "vue";
import { debounce, cloneDeep } from "lodash-es";
import { onClickOutside } from "@vueuse/core";
import "leaflet/dist/leaflet.css";

let L: any;

import {
  onGetCitiesByPrefecture,
  onGetTownsByCity,
  onSearchAddressByPostcode,
} from "~/utils/getAddress";
import {
  JAPAN_REGIONS,
  prefFindByRegion,
  regionFindByPref,
  remakePostcode,
  sortJapanese,
} from "~/utils/geography";

interface Props {
  modelValue?: string;
  idModal?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  idModal: "boxSearchAddressByPostcode",
  disabled: false
});

const emit = defineEmits(["update:modelValue", "changePostcode"]);

const isVisible = ref(false);
const listPrefectures = ref<any[]>([]);
const listCities = ref<any[]>([]);
const listTowns = ref<any[]>([]);
const mapInstance = ref<L.Map | null>(null);
const markerInstance = ref<L.Marker | null>(null);
const mapError = ref(false);

const area = ref("");
const prefecture = ref("");
const city = ref("");
const town = ref("");
const postcode = ref("");
const searchKeyword = ref("");
const isSearchingGlobal = ref(false);
const isLayerMenuOpen = ref(false);
const layerMenuRef = ref(null);

onClickOutside(layerMenuRef, () => {
  isLayerMenuOpen.value = false;
});

const MAP_LAYERS = [
  { 
    id: 'standard', 
    name: 'Standard', 
    description: 'Detailed OpenStreetMap',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    preview: 'https://b.tile.openstreetmap.org/12/3637/1613.png',
    attribution: '&copy; OpenStreetMap'
  },
  { 
    id: 'satellite', 
    name: 'Satellite', 
    description: 'High-res Google Imagery',
    url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    preview: 'https://mt1.google.com/vt/lyrs=s&x=3637&y=1613&z=12',
    attribution: '&copy; Google'
  },
  { 
    id: 'terrain', 
    name: 'Terrain', 
    description: 'Elevation & Relief',
    url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
    preview: 'https://mt1.google.com/vt/lyrs=p&x=3637&y=1613&z=12',
    attribution: '&copy; Google'
  },
  { 
    id: 'streets', 
    name: 'Streets', 
    description: 'Clear Google Routing',
    url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    preview: 'https://mt1.google.com/vt/lyrs=m&x=3637&y=1613&z=12',
    attribution: '&copy; Google'
  },
  { 
    id: 'dark', 
    name: 'Dark Mode', 
    description: 'Midnight Smooth Carto',
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    preview: 'https://a.basemaps.cartocdn.com/dark_all/12/3637/1613.png',
    attribution: '&copy; CartoDB'
  }
];

const currentLayerId = ref('standard');
const tileLayerInstance = ref<L.TileLayer | null>(null);

const changeMapLayer = (id: string) => {
  if (!mapInstance.value || !L) return;
  
  const layerData = MAP_LAYERS.find(l => l.id === id);
  if (!layerData) return;

  // Remove old layer
  if (tileLayerInstance.value) {
    mapInstance.value.removeLayer(tileLayerInstance.value);
  }

  // Add new layer
  tileLayerInstance.value = L.tileLayer(layerData.url, {
    attribution: layerData.attribution
  }).addTo(mapInstance.value);
  
  currentLayerId.value = id;
};

const onGlobalSearch = async () => {
  if (!searchKeyword.value) return;
  isSearchingGlobal.value = true;
  mapError.value = false;

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        searchKeyword.value
      )}&accept-language=ja&addressdetails=1&limit=1`
    );
    const data = await response.json();

    if (data && data[0]) {
      const { lat, lon, address } = data[0];
      const coords: [number, number] = [parseFloat(lat), parseFloat(lon)];
      
      if (mapInstance.value) {
        mapInstance.value.setView(coords, 16);
        if (markerInstance.value) {
          markerInstance.value.setLatLng(coords);
        } else if (L) {
          markerInstance.value = L.marker(coords).addTo(mapInstance.value);
        }
      }

      if (address) {
        // Robust Japanese Address Mapping
        const foundPref = address.province || address.state || address.prefecture;
        const foundCity = address.city || address.town || address.village || address.city_district;
        const foundTown = address.suburb || address.neighbourhood || address.quarter || address.residential;
        const foundPostcode = address.postcode;

        // 1. Identify Area & Load Prefectures list
        if (foundPref) {
           const areaObj = regionFindByPref(foundPref);
           if (areaObj) {
              area.value = areaObj.name;
              onGetPrefectureByArea(foundPref);
              
              // 2. Always load Cities list for the prefecture
              funcGetCitiesByPrefecture(foundCity || null);
              
              // 3. Always attempt to load Towns list for the city if city is present
              if (city.value) {
                 funcGetTownsByCity(foundTown || null);
              }
           }
        }
        
        if (foundPostcode) {
          postcode.value = remakePostcode(foundPostcode);
        }
      }
    } else {
      mapError.value = true;
    }
  } catch (error) {
    console.error("Global search failed:", error);
    mapError.value = true;
  } finally {
    isSearchingGlobal.value = false;
  }
};

const initMap = async () => {
  if (import.meta.server) return;
  
  if (!L) {
    L = (await import('leaflet')).default;
  }

  if (mapInstance.value) return;
  const container = document.getElementById("map-container");
  if (!container) return;

  mapInstance.value = L.map("map-container", {
    zoomControl: false
  }).setView([35.6895, 139.6917], 13);
  
  L.control.zoom({
    position: 'bottomright'
  }).addTo(mapInstance.value);

  // Initialize with selected layer
  changeMapLayer(currentLayerId.value);
};

const updateMap = async (addressStr: string) => {
  if (!mapInstance.value || !addressStr) return;
  mapError.value = false;

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        addressStr
      )}&limit=1`
    );
    const data = await response.json();

    if (data && data[0]) {
      const { lat, lon } = data[0];
      const coords: [number, number] = [parseFloat(lat), parseFloat(lon)];
      
      mapInstance.value.setView(coords, 15);

      if (markerInstance.value) {
        markerInstance.value.setLatLng(coords);
      } else if (L) {
        markerInstance.value = L.marker(coords).addTo(mapInstance.value);
      }
    } else {
      mapError.value = true;
    }
  } catch (error) {
    console.error("Geocoding failed:", error);
    mapError.value = true;
  }
};

watch(isVisible, async (val) => {
  if (val) {
    await nextTick();
    setTimeout(() => {
      if (!isVisible.value) return;
      initMap();
      if (mapInstance.value) {
        mapInstance.value.invalidateSize();
        if (prefecture.value || city.value || town.value) {
          syncMapWithAddress();
        }
      }
    }, 500);
  } else {
    if (mapInstance.value) {
      mapInstance.value.remove();
      mapInstance.value = null;
      markerInstance.value = null;
    }
  }
});

const syncMapWithAddress = debounce(() => {
  const fullAddress = `${prefecture.value || ""}${city.value || ""}${town.value || ""}`;
  if (fullAddress && mapInstance.value) {
    updateMap(fullAddress);
  }
}, 500);

onBeforeUnmount(() => {
  if (mapInstance.value) {
    mapInstance.value.remove();
    mapInstance.value = null;
  }
});

const handleKeyPress = (event: KeyboardEvent) => {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
    return;
  }
  const currentDigits = props.modelValue.replace(/\D/g, "");
  if (currentDigits.length >= 7) {
    event.preventDefault();
  }
};

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  let value = input.value.replace(/\D/g, "");
  if (value.length > 7) value = value.slice(0, 7);

  let formattedValue = value;
  if (value.length > 3) {
    formattedValue = `${value.slice(0, 3)}-${value.slice(3)}`;
  }
  emit("update:modelValue", formattedValue);
};

const onShowModal = async () => {
  isVisible.value = true;
  
  if (props.modelValue) {
    const rawPostcode = props.modelValue.replace(/\D/g, "");
    if (rawPostcode.length === 7) {
      const address = await onSearchAddressByPostcode(rawPostcode, true);
      if (address) {
        const areaObj = regionFindByPref(address.prefecture);
        if (areaObj) {
          area.value = areaObj.name;
          onGetPrefectureByArea(address.prefecture);
          funcGetCitiesByPrefecture(address.city);
          funcGetTownsByCity(address.town);
          postcode.value = remakePostcode(address.postal);
        }
      }
    }
  }
};

const onGetPrefectureByArea = (prefectureP: string | null = null) => {
  listPrefectures.value = prefFindByRegion(area.value);
  prefecture.value = prefectureP || "";
  if (!prefectureP) {
    city.value = "";
    town.value = "";
    postcode.value = "";
  }
};

const funcGetCitiesByPrefecture = (cityP: string | null = null) => {
  listCities.value = [];
  city.value = cityP || "";
  if (!cityP) {
    town.value = "";
    postcode.value = "";
  }
  if (area.value && prefecture.value) {
    onGetCitiesByPrefecture(area.value, prefecture.value, (response) => {
      if (response && response.location) {
        let dataCities = response.location || [];
        dataCities = sortJapanese(dataCities, "city_kana", true);
        listCities.value = dataCities.map((elm: any, index: number) => ({
          name: elm.city,
          id: elm.city + index,
        }));
      }
    });
  }
};

const funcGetTownsByCity = (townP: string | null = null) => {
  listTowns.value = [];
  town.value = townP || "";
  if (city.value && prefecture.value) {
    onGetTownsByCity(city.value, prefecture.value, (response) => {
      if (response && response.location) {
        let dataTowns = response.location || [];
        dataTowns = sortJapanese(dataTowns, "town_kana", true);
        listTowns.value = dataTowns.map((elm: any, index: number) => ({
          name: elm.town,
          id: elm.postal + index,
          postcode: elm.postal,
        }));
      }
    });
  }
};

const onGetPostCode = () => {
  postcode.value = "";
  if (town.value) {
    const findTown = listTowns.value.find((elm) => elm.name === town.value);
    postcode.value = findTown ? remakePostcode(findTown.postcode) : "";
    syncMapWithAddress();
  }
};

const onSetDataAddress = () => {
  const addressObject = {
    city: city.value,
    town: town.value,
    prefecture: prefecture.value,
    area: area.value,
    postcode: postcode.value,
  };
  emit("update:modelValue", postcode.value);
  emit("changePostcode", cloneDeep(addressObject));
  isVisible.value = false;
};
</script>

<style scoped>
:deep(.p-select-label) {
  @apply py-2.5;
}

#map-container :deep(.leaflet-marker-icon) {
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2));
}

#map-container :deep(.leaflet-bar) {
  border: none !important;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
}

#map-container :deep(.leaflet-bar a) {
  background: white !important;
  color: #334155 !important;
  border: 1px solid #e2e8f0 !important;
  transition: all 0.2s;
}

#map-container :deep(.leaflet-bar a:hover) {
  background: #f8fafc !important;
  color: var(--p-primary-color) !important;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
.shake {
  animation: shake 0.4s ease-in-out;
}
</style>
