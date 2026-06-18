# FRONTEND SPECIFICATION: QUẢN LÝ TÀI LIỆU & HỒ SƠ LƯU TRỮ (DOCUMENT SPEC)

Đặc tả hoạt động của giao diện tải lên và quản lý tệp đính kèm trong ứng dụng Nuxt.js/Vue 3.

---

## 1. Thành phần Tải tệp lên (`app/components/document/DocumentUploader.vue` hoặc tích hợp trực tiếp)
*   **Chức năng:** Cung cấp khu vực kéo thả (drag and drop) hoặc bấm để chọn tệp tải lên từ máy tính cá nhân.
*   **Kiểm soát và ràng buộc dữ liệu đầu vào:**
    1.  **Dung lượng tối đa:** Cho phép tệp tối đa 10MB (`invalidFileSize` nếu vượt quá).
    2.  **Định dạng hợp lệ:** Hỗ trợ các đuôi mở rộng: `pdf`, `doc`, `docx`, `xls`, `xlsx`, `png`, `jpg`, `jpeg`.
*   **Hành vi UI:**
    *   Hiển thị thanh tiến trình (progress bar) hoặc trạng thái "Đang tải lên..." trong quá trình API hoạt động.
    *   Tự động sinh ra danh sách xem trước (thumbnail) đối với các file ảnh, hoặc biểu tượng định dạng (PDF icon, Word icon) đối với tài liệu văn bản.

---

## 2. Trình Xem trước Tài liệu trực tuyến (Document Preview Modal)
*   **Chức năng:** Cho phép người dùng xem trực tiếp nội dung tệp PDF hoặc ảnh mà không cần tải về máy tính.
*   **Thành phần chính:**
    1.  **Iframe/PDF Viewer:** Embed file PDF vào modal để người dùng đọc trực tiếp trên trình duyệt.
    2.  **Image Viewer:** Hiển thị hình ảnh phóng to thu nhỏ.
    3.  **Fallback cho tệp không hỗ trợ:** Đối với các định dạng văn bản như Excel, Word không hỗ trợ xem trực tuyến, hệ thống hiển thị thông báo: "Trình duyệt không hỗ trợ xem trực tiếp định dạng này. Vui lòng tải xuống máy để mở" và hiển thị nổi bật nút **Tải xuống**.
*   **Form State:**
    ```typescript
    const previewUrl = ref("");
    const isPreviewVisible = ref(false);
    const fileExtension = ref("");
    ```

---

## 3. Mối liên hệ với Cấu hình Công ty (Company Settings Integration)
*   **Tải ảnh và Quản lý Tệp Cấu hình:** Chức năng tải ảnh Logo, Ảnh nền đăng nhập và Con dấu doanh nghiệp trong trang Cấu hình Công ty hoạt động dựa trên logic tải lên tài liệu trung tâm được mô tả trong spec này. Khi tải ảnh cấu hình thành công, API trả về thông tin đường dẫn và được lưu trữ trực tiếp vào hồ sơ công ty.

