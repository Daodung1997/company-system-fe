<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/40 dark:bg-surface-900/40 p-8 rounded-[2rem] border border-white dark:border-surface-800 backdrop-blur-md shadow-2xl shadow-surface-200/20">
      <div class="flex items-center gap-5">
        <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
          <i class="pi pi-folder-open text-2xl"></i>
        </div>
        <div class="space-y-1">
          <h1 class="text-3xl font-black text-surface-900 dark:text-surface-0 tracking-tighter">
            {{ $t('menu.document') }}
          </h1>
          <p class="text-sm text-surface-500 dark:text-surface-400 font-medium">
            Quản lý tài liệu tập trung, tải lên và gắn hồ sơ thông minh vào nhân sự, hợp đồng và chi phí.
          </p>
        </div>
      </div>
      <div>
        <Button
          label="Tải lên tài liệu"
          icon="pi pi-upload"
          severity="primary"
          class="!rounded-xl !px-6 !py-3 !shadow-lg !shadow-primary/25 !font-bold"
          @click="openUploadDialog"
        />
      </div>
    </div>

    <!-- Quick Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="bg-white dark:bg-surface-900 p-6 rounded-3xl border border-surface-150 dark:border-surface-800 shadow-xl shadow-surface-200/5 flex items-center justify-between">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-surface-400">Tổng tài liệu</span>
          <h3 class="text-2xl font-black text-surface-900 dark:text-surface-0">{{ stats.total }}</h3>
        </div>
        <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
          <i class="pi pi-file text-lg"></i>
        </div>
      </div>
      <div class="bg-white dark:bg-surface-900 p-6 rounded-3xl border border-surface-150 dark:border-surface-800 shadow-xl shadow-surface-200/5 flex items-center justify-between">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-surface-400">Hồ sơ Nhân sự</span>
          <h3 class="text-2xl font-black text-surface-900 dark:text-surface-0">{{ stats.employee }}</h3>
        </div>
        <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
          <i class="pi pi-user text-lg"></i>
        </div>
      </div>
      <div class="bg-white dark:bg-surface-900 p-6 rounded-3xl border border-surface-150 dark:border-surface-800 shadow-xl shadow-surface-200/5 flex items-center justify-between">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-surface-400">Hợp đồng</span>
          <h3 class="text-2xl font-black text-surface-900 dark:text-surface-0">{{ stats.contract }}</h3>
        </div>
        <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
          <i class="pi pi-paperclip text-lg"></i>
        </div>
      </div>
      <div class="bg-white dark:bg-surface-900 p-6 rounded-3xl border border-surface-150 dark:border-surface-800 shadow-xl shadow-surface-200/5 flex items-center justify-between">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-surface-400">Invoice & Thu Chi</span>
          <h3 class="text-2xl font-black text-surface-900 dark:text-surface-0">{{ stats.transaction }}</h3>
        </div>
        <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
          <i class="pi pi-wallet text-lg"></i>
        </div>
      </div>
    </div>

    <!-- Filter & Main Tabs Panel -->
    <div class="bg-white dark:bg-surface-900 p-8 rounded-[2.5rem] border border-surface-100 dark:border-surface-800 shadow-xl shadow-surface-200/5 dark:shadow-none space-y-6">
      <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-6 border-b border-surface-100 dark:border-surface-800 pb-6">
        <!-- Inner Category Tabs -->
        <div class="flex bg-surface-100/60 dark:bg-surface-950 p-1.5 rounded-2xl w-fit">
          <button
            v-for="tab in tabOptions"
            :key="tab.value"
            class="px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300"
            :class="[
              filters.documentable_type === tab.value
                ? 'bg-white dark:bg-surface-900 text-primary shadow-md'
                : 'text-surface-500 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-200'
            ]"
            @click="filters.documentable_type = tab.value"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Filters form -->
        <div class="flex flex-wrap items-center gap-4">
          <div class="relative group w-full sm:w-[260px]">
            <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
            <InputText
              v-model="filters.keyword"
              placeholder="Mã tài liệu, tên file..."
              class="w-full !rounded-xl !pl-11"
            />
          </div>

          <Select
            v-model="filters.extension"
            :options="extensionOptions"
            optionLabel="label"
            optionValue="value"
            placeholder="Định dạng file"
            class="w-full sm:w-[180px] !rounded-xl"
            showClear
          />

          <Button
            icon="pi pi-refresh"
            severity="secondary"
            outlined
            class="!rounded-xl !w-11 !h-11"
            @click="resetFilters"
          />
        </div>
      </div>

      <!-- Modern Data Table -->
      <BaseDataTable
        :columns="columns"
        :fetchApi="fetchDocumentsWrapper"
        :filters="filters"
        :isReload="isReload"
        emptyText="Không tìm thấy tài liệu nào trên hệ thống"
        scrollHeight="58vh"
      >
        <template #body="{ column, data }">
          <!-- Tên Tài Liệu -->
          <template v-if="column.key === 'origin_name'">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center shadow-md bg-surface-50 dark:bg-surface-900 border border-surface-100 dark:border-surface-800" :class="getFileIconColor(data.extension)">
                <i class="pi text-lg" :class="getFileIcon(data.extension)"></i>
              </div>
              <div class="overflow-hidden space-y-0.5">
                <span class="text-sm font-bold text-surface-800 dark:text-surface-100 block truncate max-w-xs" v-tooltip.bottom="data.origin_name">
                  {{ data.origin_name }}
                </span>
                <span class="text-[10px] text-surface-400 block uppercase font-black tracking-wider">
                  {{ data.code }} • {{ data.extension }} • {{ formatSize(data.filesize) }}
                </span>
              </div>
            </div>
          </template>

          <!-- Phân Loại Gắn Kết -->
          <template v-else-if="column.key === 'documentable_type'">
            <span
              class="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider"
              :class="[
                data.documentable_type === 'App\\Models\\Employee' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' :
                data.documentable_type === 'App\\Models\\Contract' ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400' :
                'bg-amber-500/10 text-amber-600 dark:text-amber-400'
              ]"
            >
              {{ getDocTypeLabel(data.documentable_type) }}
            </span>
          </template>

          <!-- Đang Gắn Vào -->
          <template v-else-if="column.key === 'linked_target'">
            <div class="text-xs space-y-0.5">
              <div v-if="data.documentable_type === 'App\\Models\\Employee' && data.employee" class="font-bold text-surface-700 dark:text-surface-300">
                <i class="pi pi-user text-[10px] mr-1"></i> {{ data.employee.full_name }} ({{ data.employee.code }})
              </div>
              <div v-else-if="data.documentable_type === 'App\\Models\\Contract' && data.contract" class="font-bold text-surface-700 dark:text-surface-300">
                <i class="pi pi-file text-[10px] mr-1"></i> {{ data.contract.contract_code }} ({{ getContractTypeLabel(data.contract.type) }})
              </div>
              <div v-else-if="data.documentable_type === 'App\\Models\\Transaction'" class="font-bold text-surface-700 dark:text-surface-300">
                <i class="pi pi-wallet text-[10px] mr-1"></i> Mã thu chi #{{ data.documentable_id }}
              </div>
              <span v-else class="text-surface-400 italic">Chưa gắn liên kết</span>
            </div>
          </template>

          <!-- Ngày Tải Lên -->
          <template v-else-if="column.key === 'created_at'">
            <span class="text-xs text-surface-500">
              {{ formatDate(data.created_at) }}
            </span>
          </template>

          <!-- Hành Động -->
          <template v-else-if="column.key === 'actions'">
            <div class="flex items-center justify-end gap-1.5">
              <Button
                icon="pi pi-eye"
                severity="secondary"
                text
                rounded
                class="!w-8 !h-8 hover:scale-105"
                v-tooltip.top="'Xem trước'"
                @click="previewFile(data)"
              />
              <Button
                icon="pi pi-download"
                severity="success"
                text
                rounded
                class="!w-8 !h-8 hover:scale-105"
                v-tooltip.top="'Tải xuống'"
                @click="downloadFile(data)"
              />
              <Button
                icon="pi pi-trash"
                severity="danger"
                text
                rounded
                class="!w-8 !h-8 hover:scale-105"
                v-tooltip.top="'Xóa tài liệu'"
                @click="confirmDeleteDoc(data)"
              />
            </div>
          </template>
        </template>
      </BaseDataTable>
    </div>

    <!-- UPLOAD & LINK CENTRALIZED DIALOG -->
    <Dialog
      v-model:visible="uploadDialog"
      modal
      header="TẢI LÊN & GẮN LIÊN KẾT TÀI LIỆU"
      class="w-full max-w-lg !rounded-3xl"
      contentClass="p-6 space-y-6"
    >
      <div class="space-y-4">
        <!-- Pick file zone -->
        <div
          class="border-2 border-dashed border-surface-200 dark:border-surface-800 hover:border-primary/50 dark:hover:border-primary/50 rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer bg-surface-50/50 dark:bg-surface-900/30 flex flex-col items-center justify-center gap-3 group"
          @click="triggerFileInput"
        >
          <input
            ref="fileInputRef"
            type="file"
            class="hidden"
            @change="handleFileSelect"
          />
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <i class="pi pi-upload text-primary text-lg animate-pulse"></i>
          </div>
          <div>
            <p v-if="!selectedFile" class="text-xs font-bold text-surface-700 dark:text-surface-300">
              Nhấp hoặc kéo thả file để chọn tài liệu
            </p>
            <p v-else class="text-xs font-black text-primary truncate max-w-xs">
              {{ selectedFile.name }} ({{ formatSize(selectedFile.size) }})
            </p>
            <p class="text-[10px] text-surface-400 mt-1">Hỗ trợ PDF, Word, Excel, JPG, PNG tối đa 10MB</p>
          </div>
        </div>

        <!-- Document Type selection -->
        <div class="space-y-2">
          <label class="text-xs font-black text-surface-600 dark:text-surface-300 uppercase tracking-wider block">Loại Hồ sơ & Tài liệu</label>
          <Select
            v-model="uploadForm.type"
            :options="docTypeOptions"
            optionLabel="label"
            optionValue="value"
            placeholder="Chọn phân loại hồ sơ"
            class="w-full !rounded-xl"
            @change="onDocTypeChange"
          />
        </div>

        <!-- Target Searchable dropdown -->
        <div v-if="uploadForm.type" class="space-y-2">
          <label class="text-xs font-black text-surface-600 dark:text-surface-300 uppercase tracking-wider block">
            Gắn liên kết vào {{ getDocTypeTitle(uploadForm.type) }}
          </label>
          <Select
            v-model="uploadForm.target_id"
            :options="targetOptions"
            optionLabel="label"
            optionValue="value"
            filter
            :placeholder="`Tìm kiếm và chọn ${getDocTypeTitle(uploadForm.type)}...`"
            class="w-full !rounded-xl"
            :loading="loadingTargets"
          />
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-3 justify-end pt-4 border-t border-surface-150 dark:border-surface-850">
          <Button
            label="Hủy"
            severity="secondary"
            outlined
            class="!rounded-xl !font-bold"
            @click="uploadDialog = false"
          />
          <Button
            label="Xử lý Tải lên"
            icon="pi pi-check"
            severity="primary"
            class="!rounded-xl !font-bold"
            :loading="submitting"
            @click="submitUpload"
          />
        </div>
      </template>
    </Dialog>

    <!-- PREVIEW DIALOG -->
    <Dialog
      v-model:visible="previewDialog"
      modal
      :header="`XEM TÀI LIỆU: ${previewDoc?.origin_name || ''}`"
      class="w-full max-w-4xl h-[85vh] !rounded-3xl"
      contentClass="p-0 overflow-hidden"
    >
      <div v-if="previewDoc" class="w-full h-full bg-surface-900/10 flex items-center justify-center relative">
        <iframe
          v-if="previewDoc.extension.toLowerCase() === 'pdf'"
          :src="previewBlobUrl"
          class="w-full h-[75vh] border-none"
        ></iframe>
        <div v-else-if="['jpg', 'jpeg', 'png', 'gif'].includes(previewDoc.extension.toLowerCase())" class="max-w-full max-h-full p-6 flex items-center justify-center">
          <img :src="previewBlobUrl" class="max-w-full max-h-[70vh] rounded-2xl shadow-2xl object-contain border border-surface-200 dark:border-surface-800" />
        </div>
        <div v-else class="text-center p-12 space-y-4">
          <div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
            <i class="pi pi-file text-3xl"></i>
          </div>
          <div>
            <h3 class="text-base font-bold text-surface-900 dark:text-surface-0">Không hỗ trợ xem trực tuyến</h3>
            <p class="text-xs text-surface-400 max-w-sm mt-1">Định dạng file này ({{ previewDoc.extension }}) không thể xem trực tiếp. Vui lòng tải xuống thiết bị của bạn.</p>
          </div>
          <Button
            label="Tải xuống tệp"
            icon="pi pi-download"
            severity="primary"
            class="!rounded-xl"
            @click="downloadFile(previewDoc)"
          />
        </div>
      </div>
    </Dialog>

    <!-- DELETE DIALOG -->
    <Dialog
      v-model:visible="deleteDialog"
      modal
      header="XÁC NHẬN XÓA TÀI LIỆU"
      class="w-full max-w-md !rounded-3xl"
    >
      <div class="space-y-4 text-center py-4">
        <div class="w-16 h-16 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto text-2xl">
          <i class="pi pi-exclamation-triangle"></i>
        </div>
        <div class="space-y-1">
          <h3 class="text-base font-bold text-surface-900 dark:text-surface-0">Xóa vĩnh viễn tệp này?</h3>
          <p class="text-xs text-surface-400 leading-relaxed px-4">
            Tài liệu <span class="font-bold text-surface-800 dark:text-surface-200">"{{ deleteTarget?.origin_name }}"</span> sẽ bị xóa vĩnh viễn khỏi máy chủ. Bạn không thể hoàn tác thao tác này.
          </p>
        </div>
      </div>
      <template #footer>
        <div class="flex items-center gap-3 justify-center w-full pt-4 border-t border-surface-150 dark:border-surface-850">
          <Button
            label="Quay lại"
            severity="secondary"
            outlined
            class="!rounded-xl !font-bold flex-1"
            @click="deleteDialog = false"
          />
          <Button
            label="Đồng ý Xóa"
            severity="danger"
            class="!rounded-xl !font-bold flex-1"
            :loading="deleting"
            @click="executeDeleteDoc"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { showMessage } from '~/utils/global';
import { GET_EMPLOYEES } from '~/apis/employee';
import { GET_CONTRACTS } from '~/apis/contract';
import { GET_TRANSACTIONS } from '~/apis/transaction';
import Api from '~/utils/api';

const { t } = useI18n();
const { getDocuments, uploadDocument, deleteDocument, getDownloadUrl } = useDocument();

const isReload = ref(0);
const isReloadStats = ref(0);

const filters = reactive({
  keyword: '',
  documentable_type: '',
  extension: '',
});

const stats = reactive({
  total: 0,
  employee: 0,
  contract: 0,
  transaction: 0,
});

const columns = computed(() => [
  { key: 'origin_name', label: 'Tên Tài liệu / Tập tin', sortable: false },
  { key: 'documentable_type', label: 'Phân loại', sortable: false, width: '130px' },
  { key: 'linked_target', label: 'Gắn liên kết tới', sortable: false },
  { key: 'created_at', label: 'Ngày tải lên', sortable: false, width: '150px' },
  { key: 'actions', label: '', sortable: false, width: '130px', style: 'text-align: right' },
]);

const tabOptions = computed(() => [
  { label: 'Tất cả tài liệu', value: '' },
  { label: 'Hồ sơ nhân sự', value: 'employee' },
  { label: 'Hợp đồng lao động', value: 'contract' },
  { label: 'Invoice & Chi phí', value: 'transaction' },
]);

const extensionOptions = computed(() => [
  { label: 'Tệp PDF (.pdf)', value: 'pdf' },
  { label: 'Ảnh (.png, .jpg)', value: 'image' },
  { label: 'Microsoft Word (.doc, .docx)', value: 'doc' },
  { label: 'Microsoft Excel (.xls, .xlsx)', value: 'xls' },
]);

const docTypeOptions = computed(() => [
  { label: 'Hồ sơ Nhân sự (CCCD, Bằng cấp...)', value: 'employee' },
  { label: 'Hợp đồng lao động / Thương mại', value: 'contract' },
  { label: 'Invoice, Thu Chi & Chứng từ', value: 'transaction' },
]);

// Wrapper for BaseDataTable to fetch search results
const fetchDocumentsWrapper = (payload: { query: string, successCallback: Function, errorCallback: Function }) => {
  const params = Object.fromEntries(new URLSearchParams(payload.query));
  
  if (filters.keyword) params.keyword = filters.keyword;
  if (filters.documentable_type) params.documentable_type = filters.documentable_type;
  if (filters.extension) {
    if (filters.extension === 'image') params.extension = 'png'; // backend filter by single ext standard
    else params.extension = filters.extension;
  }

  return getDocuments({
    params,
    successCallback: (res: any) => {
      payload.successCallback(res);
      fetchStats();
    },
    errorCallback: payload.errorCallback,
  });
};

const fetchStats = () => {
  // Query total list to extract counts
  getDocuments({
    params: { limit: 1000 },
    successCallback: (res: any) => {
      const data = res.data?.data?.data || [];
      stats.total = data.length;
      stats.employee = data.filter((d: any) => d.documentable_type === 'App\\Models\\Employee').length;
      stats.contract = data.filter((d: any) => d.documentable_type === 'App\\Models\\Contract').length;
      stats.transaction = data.filter((d: any) => d.documentable_type === 'App\\Models\\Transaction').length;
    },
    errorCallback: () => {}
  });
};

const resetFilters = () => {
  filters.keyword = '';
  filters.documentable_type = '';
  filters.extension = '';
  isReload.value++;
};

// Upload state
const uploadDialog = ref(false);
const submitting = ref(false);
const selectedFile = ref<File | null>(null);
const fileInputRef = ref<HTMLInputElement | null>(null);
const loadingTargets = ref(false);
const targetOptions = ref<{ label: string; value: number }[]>([]);

const uploadForm = reactive({
  type: '',
  target_id: null as number | null,
});

const openUploadDialog = () => {
  selectedFile.value = null;
  uploadForm.type = '';
  uploadForm.target_id = null;
  targetOptions.value = [];
  uploadDialog.value = true;
};

const triggerFileInput = () => {
  fileInputRef.value?.click();
};

const handleFileSelect = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    if (file.size > 10 * 1024 * 1024) {
      showMessage('warn', 'Tệp quá lớn', 'Vui lòng chọn tệp có dung lượng dưới 10MB.');
      return;
    }
    selectedFile.value = file;
  }
};

const onDocTypeChange = () => {
  uploadForm.target_id = null;
  targetOptions.value = [];
  if (!uploadForm.type) return;

  loadingTargets.value = true;

  if (uploadForm.type === 'employee') {
    GET_EMPLOYEES(
      { limit: 200 },
      (res: any) => {
        const list = res.data?.data?.data || res.data?.data || [];
        targetOptions.value = list.map((item: any) => ({
          label: `${item.full_name} (${item.code || 'NV'})`,
          value: item.id,
        }));
        loadingTargets.value = false;
      },
      () => { loadingTargets.value = false; }
    );
  } else if (uploadForm.type === 'contract') {
    GET_CONTRACTS(
      { limit: 200 },
      (res: any) => {
        const list = res.data?.data?.data || res.data?.data || [];
        targetOptions.value = list.map((item: any) => ({
          label: `${item.contract_code} - ${getContractTypeLabel(item.type)}`,
          value: item.id,
        }));
        loadingTargets.value = false;
      },
      () => { loadingTargets.value = false; }
    );
  } else if (uploadForm.type === 'transaction') {
    GET_TRANSACTIONS(
      { limit: 200 },
      (res: any) => {
        const list = res.data?.data?.data || res.data?.data || [];
        targetOptions.value = list.map((item: any) => ({
          label: `Thu chi #${item.id} - ${item.amount.toLocaleString()} VNĐ (${item.type === 'INCOME' ? 'Thu' : 'Chi'})`,
          value: item.id,
        }));
        loadingTargets.value = false;
      },
      () => { loadingTargets.value = false; }
    );
  }
};

const submitUpload = () => {
  if (!selectedFile.value) {
    showMessage('warn', 'Chưa chọn file', 'Vui lòng bấm chọn tài liệu cần tải lên.');
    return;
  }
  if (!uploadForm.type) {
    showMessage('warn', 'Thiếu loại hồ sơ', 'Vui lòng chọn loại hồ sơ cần lưu trữ.');
    return;
  }
  if (!uploadForm.target_id) {
    showMessage('warn', 'Chưa gắn liên kết', 'Vui lòng chọn một bản ghi tương ứng để gắn tài liệu.');
    return;
  }

  submitting.value = true;

  // Determine polymorphic target
  let docableType = '';
  if (uploadForm.type === 'employee') docableType = 'App\\Models\\Employee';
  else if (uploadForm.type === 'contract') docableType = 'App\\Models\\Contract';
  else if (uploadForm.type === 'transaction') docableType = 'App\\Models\\Transaction';

  uploadDocument({
    file: selectedFile.value,
    documentableType: docableType,
    documentableId: Number(uploadForm.target_id),
    successCallback: () => {
      submitting.value = false;
      uploadDialog.value = false;
      showMessage('success', 'Thành công', 'Đã tải lên và liên kết tài liệu thành công.');
      isReload.value++;
    },
    errorCallback: (err: any) => {
      submitting.value = false;
      showMessage('error', 'Lỗi', err.message || 'Lỗi xảy ra khi tải lên tài liệu.');
    }
  });
};

// Preview
const previewDialog = ref(false);
const previewDoc = ref<any>(null);
const previewBlobUrl = ref<any>(null);

const previewFile = (doc: any) => {
  if (!doc.id) return;
  previewDoc.value = doc;
  Api.get(`/documents/${doc.id}/download`, { responseType: 'blob' })
    .then((response: any) => {
      let mimeType = 'application/pdf';
      const ext = doc.extension.toLowerCase();
      if (['png', 'jpg', 'jpeg', 'gif'].includes(ext)) {
        mimeType = `image/${ext === 'jpg' ? 'jpeg' : ext}`;
      }
      const file = new Blob([response.data], { type: mimeType });
      if (previewBlobUrl.value) {
        URL.revokeObjectURL(previewBlobUrl.value);
      }
      previewBlobUrl.value = URL.createObjectURL(file);
      previewDialog.value = true;
    })
    .catch((err: any) => {
      showMessage('error', t('btn.error') || 'Lỗi', 'Không thể xem tài liệu.');
    });
};

const downloadFile = (doc: any) => {
  if (!doc.id) return;
  Api.get(`/documents/${doc.id}/download`, { responseType: 'blob' })
    .then((response: any) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', doc.origin_name || 'document.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch((err: any) => {
      showMessage('error', t('btn.error') || 'Lỗi', 'Không thể tải tài liệu.');
    });
};

// Delete
const deleteDialog = ref(false);
const deleting = ref(false);
const deleteTarget = ref<any>(null);

const confirmDeleteDoc = (doc: any) => {
  deleteTarget.value = doc;
  deleteDialog.value = true;
};

const executeDeleteDoc = () => {
  if (!deleteTarget.value) return;
  deleting.value = true;

  deleteDocument({
    id: deleteTarget.value.id,
    successCallback: () => {
      deleting.value = false;
      deleteDialog.value = false;
      showMessage('success', 'Thành công', 'Đã xóa tài liệu khỏi hệ thống.');
      isReload.value++;
    },
    errorCallback: (err: any) => {
      deleting.value = false;
      showMessage('error', 'Lỗi', err.message || 'Có lỗi xảy ra khi xóa tài liệu.');
    }
  });
};

// Helper utils
const formatSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const getFileIcon = (ext: string) => {
  if (!ext) return 'pi-file';
  const extension = ext.toLowerCase();
  if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) return 'pi-image';
  if (['pdf'].includes(extension)) return 'pi-file-pdf';
  if (['doc', 'docx'].includes(extension)) return 'pi-file-word';
  if (['xls', 'xlsx'].includes(extension)) return 'pi-file-excel';
  return 'pi-file';
};

const getFileIconColor = (ext: string) => {
  if (!ext) return 'text-surface-500';
  const extension = ext.toLowerCase();
  if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) return 'text-purple-500 bg-purple-50 dark:bg-purple-950/20';
  if (['pdf'].includes(extension)) return 'text-red-500 bg-red-50 dark:bg-red-950/20';
  if (['doc', 'docx'].includes(extension)) return 'text-blue-500 bg-blue-50 dark:bg-blue-950/20';
  if (['xls', 'xlsx'].includes(extension)) return 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20';
  return 'text-surface-500 bg-surface-50 dark:bg-surface-900';
};

const getDocTypeLabel = (type: string) => {
  if (type === 'App\\Models\\Employee') return 'Hồ sơ Nhân sự';
  if (type === 'App\\Models\\Contract') return 'Hợp đồng';
  if (type === 'App\\Models\\Transaction') return 'Invoice / Chi phí';
  return 'Tài liệu khác';
};

const getDocTypeTitle = (type: string) => {
  if (type === 'employee') return 'Nhân sự';
  if (type === 'contract') return 'Hợp đồng';
  if (type === 'transaction') return 'Bản ghi thu chi / Chi phí';
  return '';
};

const getContractTypeLabel = (type: string) => {
  if (type === 'LABOR') return 'HĐ Lao Động';
  if (type === 'VENDOR') return 'HĐ Đối Tác';
  if (type === 'CLIENT') return 'HĐ Khách Hàng';
  return type;
};

onMounted(() => {
  fetchStats();
});
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(var(--p-surface-300), 0.1);
  border-radius: 10px;
}
</style>
