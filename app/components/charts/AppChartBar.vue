<template>
  <div class="p-6 bg-white dark:bg-surface-950 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/20 dark:shadow-none transition-all duration-300">
    <div v-if="title" class="flex flex-col mb-6">
      <h3 class="text-lg font-black text-surface-900 dark:text-surface-0 tracking-tight">{{ title }}</h3>
      <p v-if="subtitle" class="text-xs text-surface-400 font-medium">{{ subtitle }}</p>
    </div>
    <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[18rem] w-full" />
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
                label: 'Data',
                backgroundColor: documentStyle.getPropertyValue('--p-primary-500') || '#3b82f6',
                borderColor: documentStyle.getPropertyValue('--p-primary-500') || '#3b82f6',
                data: props.data.map((d) => (d ? d['value'] : 0)),
                borderRadius: 12,
                barThickness: 24,
                hoverBackgroundColor: documentStyle.getPropertyValue('--p-primary-600') || '#2563eb',
            }
        ]
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color') || '#64748b';
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary') || '#94a3b8';
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border') || '#e2e8f0';

    chartOptions.value = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#1e293b',
                padding: 12,
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 13 },
                cornerRadius: 12,
                displayColors: false
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 600,
                        size: 11
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        size: 11
                    }
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false,
                    lineWidth: 1
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
