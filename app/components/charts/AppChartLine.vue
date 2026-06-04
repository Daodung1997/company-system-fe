<template>
  <div class="p-6 bg-white dark:bg-surface-950 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/20 dark:shadow-none transition-all duration-300">
    <div v-if="title" class="flex flex-col mb-6">
      <h3 class="text-lg font-black text-surface-900 dark:text-surface-0 tracking-tight">{{ title }}</h3>
      <p v-if="subtitle" class="text-xs text-surface-400 font-medium">{{ subtitle }}</p>
    </div>
    <Chart type="line" :data="chartData" :options="chartOptions" class="h-[18rem] w-full" />
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
    const primaryColor = documentStyle.getPropertyValue('--p-primary-500') || '#3b82f6';

    chartData.value = {
        labels: props.data.map((d) => (d ? d['label'] : '')),
        datasets: [
            {
                label: 'Trend',
                data: props.data.map((d) => (d ? d['value'] : 0)),
                fill: true,
                borderColor: primaryColor,
                tension: 0.4,
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                pointBackgroundColor: primaryColor,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: primaryColor,
                pointRadius: 4,
                pointHoverRadius: 6,
                borderWidth: 3
            }
        ]
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary') || '#94a3b8';
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border') || '#e2e8f0';

    chartOptions.value = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#1e293b',
                padding: 12,
                cornerRadius: 12,
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: { size: 11, weight: 600 }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary,
                    font: { size: 11 }
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
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
