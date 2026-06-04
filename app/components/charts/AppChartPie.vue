<template>
  <div class="p-6 bg-white dark:bg-surface-950 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/20 dark:shadow-none transition-all duration-300">
    <div v-if="title" class="flex flex-col mb-6">
      <h3 class="text-lg font-black text-surface-900 dark:text-surface-0 tracking-tight">{{ title }}</h3>
      <p v-if="subtitle" class="text-xs text-surface-400 font-medium">{{ subtitle }}</p>
    </div>
    <div class="flex justify-center">
      <Chart type="pie" :data="chartData" :options="chartOptions" class="w-full md:w-[18rem]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

interface DataItem {
  label: string;
  value: number;
}

interface Props {
  data: DataItem[];
  title?: string;
  subtitle?: string;
}

const props = defineProps<Props>();

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    chartData.value = {
        labels: props.data.map((d) => (d ? d['label'] : '')),
        datasets: [
            {
                data: props.data.map((d) => (d ? d['value'] : 0)),
                backgroundColor: [
                    documentStyle.getPropertyValue('--p-indigo-500') || '#6366f1',
                    documentStyle.getPropertyValue('--p-purple-500') || '#a855f7',
                    documentStyle.getPropertyValue('--p-teal-500') || '#14b8a6',
                    documentStyle.getPropertyValue('--p-orange-500') || '#f97316',
                    documentStyle.getPropertyValue('--p-pink-500') || '#ec4899',
                ],
                borderWidth: 0,
                borderRadius: 4
            }
        ]
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color') || '#64748b';

    chartOptions.value = {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: textColor,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: { size: 11, weight: 600 },
                    padding: 20
                }
            },
            tooltip: {
                backgroundColor: '#1e293b',
                padding: 12,
                cornerRadius: 12
            }
        }
    };
};

onMounted(() => {
    setChartData();
    setChartOptions();
});

watch(() => props.data, () => {
    setChartData();
}, { deep: true });
</script>
