<template>
  <div class="max-w-[1200px] mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-10">
    <!-- Header (Premium Glass) -->
    <div class="z-30 flex items-center justify-between bg-white/80 dark:bg-surface-900/80 backdrop-blur-xl p-6 rounded-3xl border border-white dark:border-surface-800 shadow-xl shadow-surface-200/20">
      <div class="flex items-center gap-5">
        <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-lg border border-primary/20 rotate-3 hover:rotate-0 transition-transform duration-500">
          <i class="pi pi-sitemap text-2xl"></i>
        </div>
        <div class="space-y-0.5">
          <h1 class="text-2xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ department.name || 'Chi tiết phòng ban' }}
          </h1>
          <p class="text-[10px] text-surface-400 font-black uppercase tracking-[0.2em] flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full" :class="department.status === 'ACTIVE' ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'"></span>
            {{ department.code }} • Thông tin bộ phận hành chính
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <Button
          label="Quay lại"
          icon="pi pi-arrow-left"
          severity="secondary"
          outlined
          class="!rounded-xl !px-5 !py-2.5 !font-bold !text-sm hover:!bg-surface-100 dark:hover:!bg-surface-800 !border-surface-200 dark:!border-surface-700"
          @click="goBack"
        />
        <Button
          label="Chỉnh sửa"
          icon="pi pi-pencil"
          severity="primary"
          class="!rounded-xl !px-6 !py-2.5 !shadow-lg !shadow-primary/25 !font-black !text-sm tracking-tight transition-all hover:scale-105"
          @click="goToEdit"
        />
      </div>
    </div>

    <!-- Details Grid -->
    <div class="grid grid-cols-12 gap-6" v-if="!isLoading">
      <!-- Left Column: Department Profile -->
      <div class="col-span-12 lg:col-span-8 space-y-6">
        <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 relative overflow-hidden group">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-1.5 h-6 bg-primary rounded-full"></div>
            <div>
              <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase">Cơ cấu tổ chức phòng ban</h3>
              <p class="text-xs text-surface-400">Các thông tin cơ bản về phòng ban trực thuộc hệ thống</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <!-- Department Code -->
            <div class="flex items-start gap-4 p-4 rounded-2xl bg-surface-50 dark:bg-surface-800/40 border border-surface-100 dark:border-surface-800/60">
              <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <i class="pi pi-id-card text-sm"></i>
              </div>
              <div class="space-y-0.5">
                <p class="text-[10px] text-surface-400 font-bold uppercase tracking-wider">Mã phòng ban</p>
                <p class="text-sm font-black text-surface-900 dark:text-surface-0 font-mono">{{ department.code || '—' }}</p>
              </div>
            </div>

            <!-- Department Name -->
            <div class="flex items-start gap-4 p-4 rounded-2xl bg-surface-50 dark:bg-surface-800/40 border border-surface-100 dark:border-surface-800/60">
              <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <i class="pi pi-sitemap text-sm"></i>
              </div>
              <div class="space-y-0.5">
                <p class="text-[10px] text-surface-400 font-bold uppercase tracking-wider">Tên phòng ban</p>
                <p class="text-sm font-black text-surface-900 dark:text-surface-0">{{ department.name || '—' }}</p>
              </div>
            </div>

            <!-- Job Titles list -->
            <div class="flex flex-col gap-4 p-6 rounded-2xl bg-surface-50 dark:bg-surface-800/40 border border-surface-100 dark:border-surface-800/60 md:col-span-2">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <i class="pi pi-briefcase text-sm"></i>
                </div>
                <div class="space-y-0.5">
                  <h4 class="text-sm font-black text-surface-900 dark:text-surface-0">Danh sách chức vụ trực thuộc</h4>
                  <p class="text-[10px] text-surface-400 font-medium">Chức danh nghề nghiệp được phân bổ cho bộ phận này</p>
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                <div v-if="!department.job_titles || department.job_titles.length === 0" class="col-span-2 flex flex-col items-center py-6 text-center">
                  <i class="pi pi-briefcase text-2xl text-surface-300 dark:text-surface-600 mb-2"></i>
                  <span class="text-xs text-surface-400 font-bold">Chưa bổ nhiệm chức vụ nào cho bộ phận này.</span>
                </div>
                <div 
                  v-else 
                  v-for="job in department.job_titles" 
                  :key="job.id" 
                  class="flex flex-col p-4 rounded-xl bg-white dark:bg-surface-900 border border-surface-100 dark:border-surface-800 shadow-sm relative group overflow-hidden"
                >
                  <div class="absolute -right-6 -bottom-6 w-14 h-14 bg-primary/5 rounded-full blur-md"></div>
                  <span class="text-xs font-mono text-surface-400 font-black uppercase tracking-wider">{{ job.code }}</span>
                  <span class="text-sm font-black text-surface-900 dark:text-surface-0 mt-1">{{ job.name }}</span>
                  <span class="text-[10.5px] text-surface-500 dark:text-surface-400 mt-1 font-medium leading-relaxed" v-if="job.description">
                    {{ job.description }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Right Column: Notes & Metadata -->
      <div class="col-span-12 lg:col-span-4 space-y-6">
        <!-- Notes Section -->
        <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 relative overflow-hidden group">
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>

          <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase mb-6 relative z-10">Mô tả / Ghi chú</h3>
          <div class="p-5 rounded-2xl bg-surface-50/50 dark:bg-surface-800/20 border border-surface-100 dark:border-surface-800/40 min-h-[120px] relative z-10">
            <p class="text-xs text-surface-500 dark:text-surface-400 whitespace-pre-wrap leading-relaxed italic">
              {{ department.note || 'Không có mô tả chi tiết nào cho phòng ban này.' }}
            </p>
          </div>
        </section>

        <!-- Metadata Section -->
        <section class="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 relative overflow-hidden">
          <h3 class="text-base font-black text-surface-900 dark:text-surface-0 tracking-tight uppercase mb-6">Thông tin hệ thống</h3>
          
          <div class="space-y-4 text-xs">
            <div class="flex justify-between items-center py-2 border-b border-surface-100 dark:border-surface-800">
              <span class="text-surface-400 font-bold uppercase tracking-wider text-[10px]">Trạng thái</span>
              <span 
                class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider"
                :class="department.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'"
              >
                {{ department.status === 'ACTIVE' ? 'Hoạt động' : 'Ngừng hoạt động' }}
              </span>
            </div>
            
            <div class="flex justify-between items-center py-2 border-b border-surface-100 dark:border-surface-800">
              <span class="text-surface-400 font-bold uppercase tracking-wider text-[10px]">Ngày tạo</span>
              <span class="font-mono font-bold text-surface-900 dark:text-surface-0">{{ department.created_at ? formatDate(department.created_at) : '—' }}</span>
            </div>

            <div class="flex justify-between items-center py-2">
              <span class="text-surface-400 font-bold uppercase tracking-wider text-[10px]">Cập nhật cuối</span>
              <span class="font-mono font-bold text-surface-900 dark:text-surface-0">{{ department.updated_at ? formatDate(department.updated_at) : '—' }}</span>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Skeleton Loading -->
    <div v-else class="space-y-6">
      <div class="h-64 bg-white dark:bg-surface-900 rounded-3xl border border-surface-100 dark:border-surface-800 animate-pulse"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useDepartment } from "~/composables/master/department";
import { showMessage } from "~/utils/global";

const route = useRoute();
const router = useRouter();
const { t } = useI18n();
const { getDepartmentById } = useDepartment() as any;

const departmentId = computed(() => route.params.id as string);
const department = ref<any>({});
const isLoading = ref(true);

onMounted(() => {
  fetchDepartmentDetails();
});

const fetchDepartmentDetails = () => {
  isLoading.value = true;
  getDepartmentById({
    id: departmentId.value,
    successCallback: (response: any) => {
      department.value = response.data?.data || {};
      isLoading.value = false;
    },
    errorCallback: (error: any) => {
      isLoading.value = false;
      showMessage("error", t("text.error"), error.message || t("text.errorMessage"));
      router.push("/master/department");
    },
  });
};

const goBack = () => router.push("/master/department");
const goToEdit = () => router.push(`/master/department/${departmentId.value}/edit`);

const formatDate = (dateStr: string) => {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    return d.toLocaleString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return dateStr;
  }
};
</script>
