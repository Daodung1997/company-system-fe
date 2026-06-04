<template>
  <div class="p-6 bg-white dark:bg-surface-950 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/20 dark:shadow-none transition-all duration-300">
    <div v-if="title" class="flex flex-col mb-6">
      <h3 class="text-lg font-black text-surface-900 dark:text-surface-0 tracking-tight">{{ title }}</h3>
      <p v-if="subtitle" class="text-xs text-surface-400 font-medium">{{ subtitle }}</p>
    </div>
    <div class="flex justify-center">
      <Chart type="polarArea" :data="chartData" :options="chartOptions" class="w-full md:w-[18rem]" />
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
        datasets: [
            {
                data: props.data.map((d) => (d ? d['value'] : 0)),
                backgroundColor: [
                    'rgba(99, 102, 241, 0.7)',
                    'rgba(168, 85, 247, 0.7)',
                    'rgba(20, 184, 166, 0.7)',
                    'rgba(249, 115, 22, 0.7)',
                    'rgba(59, 130, 246, 0.7)'
                ],
                label: 'Metric',
                borderWidth: 0
            }
        ],
        labels: props.data.map((d) => (d ? d['label'] : ''))
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color') || '#64748b';
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border') || '#e2e8f0';

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
                    color: surfaceBorder
                },
                ticks: {
                    display: false
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
