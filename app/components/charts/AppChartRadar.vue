<template>
  <div class="p-6 bg-white dark:bg-surface-950 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/20 dark:shadow-none transition-all duration-300">
    <div v-if="title" class="flex flex-col mb-6">
      <h3 class="text-lg font-black text-surface-900 dark:text-surface-0 tracking-tight">{{ title }}</h3>
      <p v-if="subtitle" class="text-xs text-surface-400 font-medium">{{ subtitle }}</p>
    </div>
    <div class="flex justify-center">
      <Chart type="radar" :data="chartData" :options="chartOptions" class="w-full md:w-[18rem]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

interface Dataset {
  label: string;
  values: number[];
}

interface Props {
  data: Dataset[];
  labels: string[];
  title?: string;
  subtitle?: string;
}

const props = defineProps<Props>();

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color') || '#64748b';

    chartData.value = {
        labels: props.labels,
        datasets: props.data.map((ds, i) => ({
            label: ds['label'],
            borderColor: i === 0 ? (documentStyle.getPropertyValue('--p-primary-500') || '#3b82f6') : '#f97316',
            backgroundColor: i === 0 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(249, 115, 22, 0.2)',
            pointBackgroundColor: i === 0 ? (documentStyle.getPropertyValue('--p-primary-500') || '#3b82f6') : '#f97316',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: textColor,
            data: ds['values'],
            borderWidth: 2
        }))
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color') || '#64748b';
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary') || '#94a3b8';

    chartOptions.value = {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: textColor,
                    usePointStyle: true,
                    font: { size: 11, weight: 600 },
                    padding: 20
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: textColorSecondary
                },
                ticks: {
                    display: false
                },
                pointLabels: {
                    font: { size: 10, weight: 600 },
                    color: textColorSecondary
                }
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
