# FRONTEND SPECIFICATION: CẤU HÌNH THÔNG TIN DOANH NGHIỆP (COMPANY SETTINGS SPEC)

Tài liệu đặc tả các thay đổi và cấu trúc thành phần giao diện Frontend (Nuxt.js / Vue 3) cho tính năng Cấu hình doanh nghiệp.

---

## 1. Thành phần Giao diện & Form State (`app/pages/master/company-setting/index.vue`)

### 1.1. Cấu trúc Trạng thái Form (Form States)
*   **Trạng thái form nhập liệu (`form`):**
    ```typescript
    const form = reactive({
      // ...các trường thông tin pháp nhân khác
      logo_path: "",         // Đường dẫn URL ảnh logo đã upload, rỗng nếu khôi phục mặc định
      background_path: "",   // Đường dẫn URL ảnh nền đăng nhập đã upload, rỗng nếu khôi phục mặc định
      sidebar_name: "",      // Tên hiển thị chính ở Sidebar
      sidebar_sub_name: "",  // Tên hiển thị phụ ở Sidebar (MỚI)
      slogan_1: "",
      slogan_2: "",
      slogan_3: ""
    });
    ```
*   **Trạng thái lỗi validate (`formErrors`):**
    ```typescript
    const formErrors = reactive({
      // ...các trường lỗi khác
      sidebar_name: "",
      sidebar_sub_name: ""   // Nhận thông điệp lỗi nếu vi phạm validation
    });
    ```

### 1.2. Thêm Trường Nhập liệu mới trên Form
*   Phần tên hiển thị trên Sidebar hiện tại được phân chia lại bố cục từ 1 cột rộng (`col-span-2`) thành 2 cột đều (`col-span-1` mỗi trường) chạy song song trên màn hình máy tính (`md:grid-cols-2`):
    1.  **Trường "Tên hiển thị ở Sidebar":** Liên kết dữ liệu với `form.sidebar_name`.
    2.  **Trường "Tên hiển thị phụ ở Sidebar" (MỚI):** Liên kết dữ liệu với `form.sidebar_sub_name`. Placeholder mặc định hiển thị: `Hệ thống Quản lý Tuân thủ`.

### 1.3. Khôi phục ảnh mặc định (Revert Uploaded Images)
*   Tại 2 vùng quản lý upload ảnh (Logo công ty & Hình nền trang đăng nhập), bổ sung nút **"Xóa ảnh"** (nút màu đỏ với đường viền mờ, hiển thị biểu tượng `pi pi-trash`).
*   **Hành vi:**
    *   Nút chỉ hiển thị khi `form.logo_path` hoặc `form.background_path` có giá trị (tức là đã có ảnh được cấu hình).
    *   Khi người dùng nhấn vào nút này, giá trị của `form.logo_path` hoặc `form.background_path` sẽ được gán lại bằng chuỗi rỗng `""`.
    *   Hệ thống sẽ cập nhật trạng thái hiển thị preview ảnh rỗng, và khi người dùng bấm nút **"Lưu hồ sơ"**, yêu cầu gửi lên API sẽ ghi đè giá trị rỗng/null này vào Database.

---

## 2. Giao diện Sidebar (`app/components/layout/AppSidebar.vue`)

*   **Logic hiển thị tiêu đề chính:**
    ```html
    {{ apiStore.companySetting?.sidebar_name || appName }}
    ```
*   **Logic hiển thị tiêu đề phụ (Sub-name) (MỚI):**
    ```html
    {{ apiStore.companySetting?.sidebar_sub_name || $t('menu.industrialDashboard') }}
    ```
*   **Hành vi:** Hệ thống ưu tiên đọc và kết xuất thông tin cấu hình `sidebar_sub_name` từ store API toàn cục (`apiStore.companySetting`). Nếu giá trị này bằng `null` hoặc rỗng (chưa được cấu hình), sidebar sẽ tự động hiển thị giá trị dịch đa ngôn ngữ mặc định của ứng dụng (`menu.industrialDashboard` - tương ứng với "Bảng điều khiển công nghiệp" hoặc "Industrial dashboard").

---

## 3. Giao diện Đăng nhập (`app/layouts/auth.vue`)

*   **Logic hiển thị hình nền đăng nhập:**
    ```html
    :style="{ backgroundImage: `url(${apiStore.companySetting?.background_path || '/images/login-bg.png'})` }"
    ```
*   **Hành vi:** Sử dụng cơ chế fallback hình ảnh tĩnh. Nếu cấu hình đường dẫn hình nền rỗng hoặc `null` (do người dùng xóa ảnh tùy chọn trên trang cấu hình), giao diện đăng nhập sẽ tự động hiển thị ảnh tĩnh mặc định tại `/images/login-bg.png`.
