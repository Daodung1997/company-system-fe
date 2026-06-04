<template>
  <div class="space-y-6">
    <!-- Drag & Drop Upload Area -->
    <div
      v-if="!readonly"
      class="relative border-2 border-dashed rounded-3xl p-10 flex flex-col items-center justify-center transition-all duration-350 group cursor-pointer overflow-hidden"
      :class="[
        isDragging
          ? 'border-primary bg-primary/5 scale-[0.99] shadow-inner shadow-primary/10'
          : 'border-surface-200 dark:border-surface-800 bg-gradient-to-b from-white to-surface-50/30 dark:from-surface-900 dark:to-surface-950/30 hover:border-primary hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-none'
      ]"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
      @drop.prevent="onDrop"
      @click="triggerFileInput"
    >
      <!-- Visual Decorative Blobs on Hover -->
      <div class="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500"></div>
      <div class="absolute -bottom-10 -left-10 w-24 h-24 bg-warning/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500"></div>

      <input
        ref="fileInput"
        type="file"
        multiple
        class="hidden"
        accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
        @change="onFileSelected"
      />

      <div class="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 mb-5 shadow-sm">
        <i class="pi pi-cloud-upload text-4xl"></i>
      </div>

      <h4 class="text-lg font-black text-surface-900 dark:text-surface-0 mb-1.5">
        {{ $t('document.dragDropText') || 'Kéo thả tài liệu vào đây hoặc click để tải lên' }}
      </h4>
      <p class="text-xs text-surface-500 dark:text-surface-400 text-center max-w-sm leading-relaxed">
        {{ $t('document.allowedFormats') || 'Hỗ trợ định dạng: PDF, Word, Excel, JPG, PNG' }}
        <span class="block mt-1 font-semibold text-primary/80">Dung lượng tối đa: 10MB</span>
      </p>
    </div>

    <!-- Active Uploading Progress List -->
    <div v-if="uploadingFiles.length > 0" class="space-y-3 bg-surface-50 dark:bg-surface-900/60 p-5 rounded-2xl border border-surface-100 dark:border-surface-800">
      <div class="flex items-center gap-2">
        <i class="pi pi-spin pi-spinner text-primary text-xs"></i>
        <h5 class="text-xs font-black text-surface-500 uppercase tracking-widest">
          {{ $t('document.uploading') || 'Đang tải lên tài liệu...' }}
        </h5>
      </div>
      <div v-for="(file, idx) in uploadingFiles" :key="idx" class="space-y-1.5">
        <div class="flex justify-between items-center text-xs font-bold text-surface-700 dark:text-surface-200">
          <span class="truncate max-w-[80%] flex items-center gap-2">
            <i class="pi pi-file text-surface-400"></i>
            {{ file.name }}
          </span>
          <span>{{ file.progress }}%</span>
        </div>
        <div class="w-full bg-surface-250 dark:bg-surface-800 h-2 rounded-full overflow-hidden">
          <div class="bg-primary h-full transition-all duration-350 rounded-full" :style="{ width: `${file.progress}%` }"></div>
        </div>
      </div>
    </div>

    <!-- Document List Container -->
    <div v-if="localDocuments.length > 0" class="space-y-4">
      <!-- Toolbar: View Switcher and Total -->
      <div class="flex justify-between items-center bg-surface-50/50 dark:bg-surface-900/20 px-5 py-3 rounded-2xl border border-surface-100/50 dark:border-surface-800/50">
        <div class="flex items-center gap-2">
          <i class="pi pi-folder-open text-primary text-sm"></i>
          <span class="text-xs font-black text-surface-600 dark:text-surface-300 uppercase tracking-wider">
            {{ $t('document.totalFiles') || 'Danh sách tài liệu đính kèm' }} ({{ localDocuments.length }})
          </span>
        </div>
        <div class="flex items-center gap-1 bg-surface-100 dark:bg-surface-800 p-1 rounded-xl">
          <button
            class="w-8 h-8 rounded-lg text-sm flex items-center justify-center transition-all"
            :class="viewMode === 'grid' ? 'bg-white dark:bg-surface-900 text-primary shadow-md font-bold' : 'text-surface-500 hover:text-surface-800 dark:hover:text-surface-300'"
            v-tooltip.top="'Hiển thị lưới'"
            @click="viewMode = 'grid'"
          >
            <i class="pi pi-th-large"></i>
          </button>
          <button
            class="w-8 h-8 rounded-lg text-sm flex items-center justify-center transition-all"
            :class="viewMode === 'list' ? 'bg-white dark:bg-surface-900 text-primary shadow-md font-bold' : 'text-surface-500 hover:text-surface-800 dark:hover:text-surface-300'"
            v-tooltip.top="'Hiển thị danh sách'"
            @click="viewMode = 'list'"
          >
            <i class="pi pi-list"></i>
          </button>
        </div>
      </div>

      <!-- GRID VIEW (ENHANCED & SPACIOUS) -->
      <div v-if="viewMode === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div
          v-for="doc in localDocuments"
          :key="doc.id"
          class="group relative border border-surface-150 dark:border-surface-800/80 bg-white dark:bg-surface-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-56"
        >
          <!-- Thumbnail / Visual Icon -->
          <div class="flex-1 bg-surface-50 dark:bg-surface-950/50 flex items-center justify-center overflow-hidden relative border-b border-surface-100 dark:border-surface-850">
            <template v-if="isImage(doc.extension)">
              <img :src="doc.url" :alt="doc.origin_name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <!-- Glassmorphic Image Badge -->
              <span class="absolute top-3 left-3 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white bg-black/40 backdrop-blur-md rounded-lg">
                {{ doc.extension }}
              </span>
            </template>
            <template v-else>
              <div class="flex flex-col items-center p-4">
                <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 shadow-sm transition-transform duration-300 group-hover:scale-110" :class="getFileIconClass(doc.extension).bg">
                  <i class="pi text-3xl" :class="getFileIconClass(doc.extension).icon"></i>
                </div>
                <span class="px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-surface-500 bg-surface-100 dark:bg-surface-800 rounded-md">
                  {{ doc.extension }}
                </span>
              </div>
            </template>

            <!-- Quick Action Overlay -->
            <div class="absolute inset-0 bg-surface-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
              <Button
                icon="pi pi-eye"
                severity="secondary"
                class="!w-10 !h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-transform duration-300 scale-75 group-hover:scale-100"
                v-tooltip.top="$t('document.view') || 'Xem trực tiếp'"
                @click.stop="previewDocument(doc)"
              />
              <Button
                icon="pi pi-download"
                severity="secondary"
                class="!w-10 !h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-transform duration-300 scale-75 group-hover:scale-100"
                v-tooltip.top="$t('document.download') || 'Tải xuống máy'"
                @click.stop="downloadFile(doc)"
              />
              <Button
                v-if="!readonly"
                icon="pi pi-trash"
                severity="danger"
                class="!w-10 !h-10 rounded-full bg-red-500/80 hover:bg-red-500 border-none text-white transition-transform duration-300 scale-75 group-hover:scale-100"
                v-tooltip.top="$t('document.delete') || 'Xóa tài liệu'"
                @click.stop="confirmDelete(doc)"
              />
            </div>
          </div>

          <!-- File Info Footer -->
          <div class="p-4 bg-white dark:bg-surface-900">
            <h5 class="text-xs font-black text-surface-850 dark:text-surface-100 truncate mb-1" :title="doc.origin_name">
              {{ doc.origin_name }}
            </h5>
            <div class="flex flex-col gap-1 text-[10px] text-surface-500">
              <div class="flex justify-between">
                <span>Dung lượng: <strong class="text-surface-700 dark:text-surface-300">{{ formatSize(doc.filesize) }}</strong></span>
                <span>{{ formatDate(doc.created_at) }}</span>
              </div>
              <div v-if="doc.created_by" class="flex items-center gap-1 mt-0.5">
                <i class="pi pi-user text-[9px] text-primary"></i>
                <span>Tải lên bởi: <strong class="text-primary">{{ doc.created_by }}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- LIST VIEW (PREMIUM STORAGE STYLE) -->
      <div v-else class="border border-surface-200 dark:border-surface-800 rounded-3xl overflow-hidden bg-white dark:bg-surface-900 shadow-lg shadow-surface-100/30 dark:shadow-none">
        <div class="hidden sm:grid grid-cols-12 gap-4 px-6 py-3.5 bg-surface-50/50 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800 text-[10px] font-black uppercase tracking-wider text-surface-500">
          <div class="col-span-6">Tên tài liệu</div>
          <div class="col-span-2 text-right">Dung lượng</div>
          <div class="col-span-2 text-center">Người tải lên</div>
          <div class="col-span-2 text-right">Hành động</div>
        </div>
        <div class="divide-y divide-surface-100 dark:divide-surface-800/80">
          <div
            v-for="doc in localDocuments"
            :key="doc.id"
            class="grid grid-cols-1 sm:grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-surface-50/50 dark:hover:bg-surface-850/20 transition-all duration-200 group"
          >
            <!-- Left side: File icon & name (Col 6) -->
            <div class="col-span-6 flex items-center gap-3.5 min-w-0">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm" :class="getFileIconClass(doc.extension).bg">
                <i class="pi text-xl" :class="getFileIconClass(doc.extension).icon"></i>
              </div>
              <div class="min-w-0">
                <h5 class="text-sm font-bold text-surface-800 dark:text-surface-100 truncate group-hover:text-primary transition-colors cursor-pointer" :title="doc.origin_name" @click="previewDocument(doc)">
                  {{ doc.origin_name }}
                </h5>
                <div class="flex items-center gap-2 text-[10px] text-surface-550 mt-1">
                  <span class="uppercase font-extrabold text-primary">{{ doc.extension }}</span>
                  <span>•</span>
                  <span>{{ formatDate(doc.created_at) }}</span>
                </div>
              </div>
            </div>

            <!-- Size (Col 2) -->
            <div class="col-span-2 text-right text-xs font-semibold text-surface-700 dark:text-surface-300 hidden sm:block">
              {{ formatSize(doc.filesize) }}
            </div>

            <!-- Creator (Col 2) -->
            <div class="col-span-2 text-center text-xs font-semibold text-surface-700 dark:text-surface-300 hidden sm:block">
              <span class="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold">
                {{ doc.created_by || 'Hệ thống' }}
              </span>
            </div>

            <!-- Actions (Col 2) -->
            <div class="col-span-2 flex items-center justify-end gap-1 ml-4 sm:ml-0">
              <Button
                icon="pi pi-eye"
                severity="secondary"
                variant="text"
                class="!w-9 !h-9 p-0 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800"
                v-tooltip.top="'Xem trực tiếp'"
                @click.stop="previewDocument(doc)"
              />
              <Button
                icon="pi pi-download"
                severity="secondary"
                variant="text"
                class="!w-9 !h-9 p-0 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800"
                v-tooltip.top="'Tải xuống'"
                @click.stop="downloadFile(doc)"
              />
              <Button
                v-if="!readonly"
                icon="pi pi-trash"
                severity="danger"
                variant="text"
                class="!w-9 !h-9 p-0 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/20 text-red-500"
                v-tooltip.top="'Xóa bỏ'"
                @click.stop="confirmDelete(doc)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else-if="readonly" class="flex flex-col items-center justify-center p-12 border-2 border-dashed border-surface-200 dark:border-surface-800 rounded-3xl bg-surface-50/50 dark:bg-surface-900/10 text-surface-400 dark:text-surface-600">
      <div class="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-850 flex items-center justify-center mb-3">
        <i class="pi pi-folder text-2xl text-surface-400"></i>
      </div>
      <p class="text-sm font-bold text-surface-500">{{ $t('document.noDocuments') || 'Không có tài liệu/chứng từ nào được đính kèm.' }}</p>
    </div>

    <!-- PREMIUM DOCUMENT VIEWER MODAL -->
    <Dialog
      v-model:visible="viewerVisible"
      :header="activeDoc?.origin_name || ''"
      :modal="true"
      :draggable="false"
      class="w-full max-w-5xl mx-4"
      :pt="{
        root: 'border-none shadow-2xl rounded-3xl overflow-hidden bg-white dark:bg-surface-900',
        header: 'p-6 border-b border-surface-100 dark:border-surface-800 font-black text-surface-800 dark:text-surface-100',
        content: 'p-0',
      }"
    >
      <div class="w-full h-[75vh] bg-surface-950 flex items-center justify-center relative">
        <template v-if="activeDoc && isImage(activeDoc.extension)">
          <img :src="previewBlobUrl" :alt="activeDoc.origin_name" class="max-w-full max-h-full object-contain p-6" />
        </template>
        <template v-else-if="activeDoc && activeDoc.extension === 'pdf'">
          <iframe :src="previewBlobUrl" class="w-full h-full border-none" />
        </template>
        <template v-else>
          <div class="text-center text-surface-400 p-8 space-y-4">
            <div class="w-20 h-20 rounded-3xl bg-surface-800 flex items-center justify-center mx-auto mb-2 text-warning">
              <i class="pi pi-exclamation-triangle text-4xl"></i>
            </div>
            <h4 class="text-lg font-black text-white">{{ $t('document.viewerNotSupportedTitle') || 'Không hỗ trợ xem trực tuyến' }}</h4>
            <p class="text-sm max-w-sm mx-auto text-surface-400 leading-relaxed">
              {{ $t('document.viewerNotSupportedDesc') || 'Trình duyệt không hỗ trợ xem trước các định dạng tệp tin Word/Excel để bảo mật. Vui lòng tải xuống máy cá nhân để mở.' }}
            </p>
            <Button
              :label="$t('document.downloadFile') || 'Tải xuống tệp tin'"
              icon="pi pi-download"
              severity="warning"
              class="!rounded-xl font-bold mt-2 shadow-lg shadow-warning/20"
              @click="downloadFile(activeDoc!)"
            />
          </div>
        </template>
      </div>
    </Dialog>

    <!-- Delete Confirmation Dialog -->
    <Dialog
      v-model:visible="deleteConfirmVisible"
      :header="$t('document.deleteConfirmTitle') || 'Xác nhận gỡ bỏ tài liệu'"
      :modal="true"
      :draggable="false"
      class="w-full max-w-md mx-4"
      :pt="{
        root: 'border-none shadow-2xl rounded-3xl overflow-hidden bg-white dark:bg-surface-900',
        header: 'p-6 border-none text-red-500 font-black',
        content: 'px-6 pb-6',
        footer: 'p-6 border-none bg-surface-50 dark:bg-surface-950'
      }"
    >
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 rounded-full bg-red-50 dark:bg-red-950/20 text-red-500 flex items-center justify-center shrink-0">
          <i class="pi pi-exclamation-triangle text-xl"></i>
        </div>
        <div class="space-y-1">
          <p class="text-sm font-semibold text-surface-800 dark:text-surface-100">Hành động này không thể hoàn tác!</p>
          <p class="text-xs text-surface-500 leading-relaxed">
            Hệ thống sẽ tiến hành xóa vĩnh viễn tệp đính kèm <strong class="text-surface-700 dark:text-surface-300 font-bold">{{ docToDelete?.origin_name }}</strong> khỏi lưu trữ đám mây. Hãy chắc chắn trước khi tiếp tục.
          </p>
        </div>
      </div>
      <template #footer>
        <div class="flex gap-3 w-full">
          <Button
            :label="$t('common.cancel') || 'Hủy bỏ'"
            severity="secondary"
            variant="outlined"
            class="flex-1 py-3 rounded-xl font-bold"
            @click="deleteConfirmVisible = false"
          />
          <Button
            :label="$t('common.delete') || 'Xóa vĩnh viễn'"
            severity="danger"
            class="flex-1 py-3 rounded-xl font-bold"
            @click="deleteDocument"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { UPLOAD_DOCUMENT, DELETE_DOCUMENT, GET_DOWNLOAD_URL } from "~/apis/document";
import { useToast } from "primevue/usetoast";
import Api from "~/utils/api";

interface DocumentItem {
  id: number;
  code: string;
  origin_name: string;
  file_path: string;
  extension: string;
  filesize: number;
  url: string;
  created_at: string;
  created_by?: string;
}

interface Props {
  documentableType?: string;
  documentableId?: number;
  documents?: DocumentItem[];
  readonly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  readonly: false,
  documents: () => []
});

const emit = defineEmits(["update:documents", "upload-success", "delete-success"]);

const toast = useToast();

const isDragging = ref(false);
const viewMode = ref<"grid" | "list">("grid");
const fileInput = ref<HTMLInputElement | null>(null);
const localDocuments = ref<DocumentItem[]>([...props.documents]);
const uploadingFiles = ref<{ name: string; progress: number }[]>([]);

// Viewer state
const viewerVisible = ref(false);
const activeDoc = ref<DocumentItem | null>(null);

// Delete state
const deleteConfirmVisible = ref(false);
const docToDelete = ref<DocumentItem | null>(null);

// Watch for changes in prop documents to keep in sync
watch(() => props.documents, (newVal) => {
  localDocuments.value = [...newVal];
}, { deep: true });

// Drag & Drop handlers
const onDragOver = () => {
  isDragging.value = true;
};

const onDragLeave = () => {
  isDragging.value = false;
};

const onDrop = (e: DragEvent) => {
  isDragging.value = false;
  const files = e.dataTransfer?.files;
  if (files && files.length > 0) {
    handleFiles(files);
  }
};

const triggerFileInput = () => {
  fileInput.value?.click();
};

const onFileSelected = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    handleFiles(target.files);
  }
};

// Validate and upload files
const handleFiles = (files: FileList) => {
  const allowedExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'png', 'jpg', 'jpeg'];
  const maxSize = 10 * 1024 * 1024; // 10MB

  Array.from(files).forEach((file) => {
    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    
    // Validate extension
    if (!allowedExtensions.includes(ext)) {
      toast?.add({
        severity: "error",
        summary: "Lỗi định dạng",
        detail: `Định dạng .${ext} của tệp ${file.name} không hỗ trợ.`,
        life: 4000
      });
      return;
    }

    // Validate size
    if (file.size > maxSize) {
      toast?.add({
        severity: "error",
        summary: "Dung lượng quá lớn",
        detail: `Tệp ${file.name} vượt quá giới hạn dung lượng 10MB.`,
        life: 4000
      });
      return;
    }

    // Process upload
    uploadFile(file);
  });
};

const uploadFile = (file: File) => {
  const uploadTracker = { name: file.name, progress: 0 };
  uploadingFiles.value.push(uploadTracker);

  // We perform upload using UPLOAD_DOCUMENT with standard Api client
  UPLOAD_DOCUMENT(
    file,
    props.documentableType,
    props.documentableId,
    (res: any) => {
      // Remove progress tracker
      uploadingFiles.value = uploadingFiles.value.filter(f => f.name !== file.name);

      const uploadedDoc = res.data?.data || res.data;
      if (uploadedDoc) {
        localDocuments.value.push(uploadedDoc);
        emit("update:documents", localDocuments.value);
        emit("upload-success", uploadedDoc);

        toast?.add({
          severity: "success",
          summary: "Tải lên thành công",
          detail: `Tài liệu ${file.name} đã được đính kèm vào hệ thống.`,
          life: 3000
        });
      }
    },
    (err: any) => {
      uploadingFiles.value = uploadingFiles.value.filter(f => f.name !== file.name);
      
      const errMsg = err?.response?.data?.messages?.message || `Lỗi tải lên tài liệu ${file.name}`;
      toast?.add({
        severity: "error",
        summary: "Lỗi tải lên",
        detail: errMsg,
        life: 4000
      });
    }
  );

  // Simulate progress steps if upload is super fast
  const interval = setInterval(() => {
    if (uploadTracker.progress < 90) {
      uploadTracker.progress += Math.floor(Math.random() * 15) + 5;
    } else {
      clearInterval(interval);
    }
  }, 100);
};

// Viewer state
const previewBlobUrl = ref<string | null>(null);

watch(viewerVisible, (newVal) => {
  if (!newVal && previewBlobUrl.value) {
    URL.revokeObjectURL(previewBlobUrl.value);
    previewBlobUrl.value = null;
  }
});

// Document Actions
const previewDocument = (doc: DocumentItem) => {
  if (!doc.id) return;
  activeDoc.value = doc;
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
      viewerVisible.value = true;
    })
    .catch((err: any) => {
      toast?.add({
        severity: "error",
        summary: "Lỗi",
        detail: "Không thể tải file xem trước.",
        life: 4000
      });
    });
};

const downloadFile = (doc: DocumentItem) => {
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
      toast?.add({
        severity: "error",
        summary: "Lỗi",
        detail: "Không thể tải tệp tin.",
        life: 4000
      });
    });
};

const confirmDelete = (doc: DocumentItem) => {
  docToDelete.value = doc;
  deleteConfirmVisible.value = true;
};

const deleteDocument = () => {
  if (!docToDelete.value) return;

  const doc = docToDelete.value;
  DELETE_DOCUMENT(
    doc.id,
    () => {
      localDocuments.value = localDocuments.value.filter(d => d.id !== doc.id);
      emit("update:documents", localDocuments.value);
      emit("delete-success", doc.id);

      deleteConfirmVisible.value = false;
      docToDelete.value = null;

      toast?.add({
        severity: "success",
        summary: "Đã xóa tài liệu",
        detail: "Tài liệu đã được gỡ bỏ khỏi hệ thống.",
        life: 3000
      });
    },
    (err: any) => {
      const errMsg = err?.response?.data?.messages?.message || "Lỗi khi xóa tài liệu.";
      toast?.add({
        severity: "error",
        summary: "Lỗi khi xóa",
        detail: errMsg,
        life: 4000
      });
    }
  );
};

// Utility methods
const isImage = (ext: string): boolean => {
  return ['png', 'jpg', 'jpeg'].includes(ext.toLowerCase());
};

const getFileIconClass = (ext: string) => {
  const e = ext.toLowerCase();
  if (['doc', 'docx'].includes(e)) {
    return { icon: "pi-file-word text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/20" };
  }
  if (['xls', 'xlsx'].includes(e)) {
    return { icon: "pi-file-excel text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-950/20" };
  }
  if (e === 'pdf') {
    return { icon: "pi-file-pdf text-rose-500", bg: "bg-rose-50 dark:bg-rose-950/20" };
  }
  return { icon: "pi-file text-surface-500", bg: "bg-surface-50 dark:bg-surface-850" };
};

const formatSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const formatDate = (dateStr: string): string => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
};
</script>
