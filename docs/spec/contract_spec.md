# FRONTEND SPECIFICATION: QUẢN LÝ HỢP ĐỒNG (CONTRACT SPEC)

Đặc tả hoạt động của giao diện đăng ký và hiển thị danh sách hợp đồng thương mại/lao động trong ứng dụng Nuxt.js/Vue 3.

---

## 1. Màn hình Danh sách Hợp đồng (`app/pages/contract/index.vue`)
*   **Chức năng:** Tìm kiếm, phân loại và quản lý tất cả hợp đồng của tổ chức.
*   **Thành phần chính:**
    1.  **Thanh tìm kiếm nâng cao:** Cho phép lọc hợp đồng theo loại (`Hợp đồng lao động` / `Thương mại`), trạng thái (`Đang hoạt động`, `Hết hiệu lực`, `Chờ duyệt`) và tìm kiếm văn bản theo mã hợp đồng hoặc tên nhân viên.
    2.  **Bảng hiển thị (DataTable):** Hiển thị cột số HĐ, loại hợp đồng, đối tác/nhân viên, khoảng thời gian hiệu lực, giá trị/lương và cột thao tác.
    3.  **Tải file mẫu (Export PDF):** Cho phép người dùng kết xuất hợp đồng ra PDF với 3 phong cách giao diện khác nhau (Classic, Modern, Academic).
*   **Form State:**
    ```typescript
    const filter = reactive({
      search: "",
      type: "",
      status: ""
    });
    const contractsList = ref([]);
    const totalRecords = ref(0);
    ```

---

## 2. Màn hình Tạo mới/Chỉnh sửa Hợp đồng (`app/pages/contract/create.vue` và `edit.vue`)
*   **Chức năng:** Tạo mới hoặc chỉnh sửa thông tin chi tiết của hợp đồng.
*   **Thành phần chính:**
    1.  **Chọn loại hợp đồng:** Đổi biểu mẫu nhập động dựa trên việc chọn `Hợp đồng lao động` hay `Hợp đồng thương mại`.
    2.  **Thông tin tuân thủ lao động (Chỉ dành cho HĐ Lao động):**
        *   Tùy chọn thỏa thuận giới hạn tăng ca 36 (`is_36_agreement_applicable`).
        *   Tùy chọn bao gồm lương tăng ca khoán (`overtime_allowance_included`) và trường số giờ khoán.
    3.  **Đính kèm chứng từ (EDM Upload):** Vùng kéo thả tệp tin scan hợp đồng dạng PDF hoặc ảnh để tải lên lưu trữ đính kèm vào bản ghi hợp đồng.
*   **Form State:**
    ```typescript
    const form = reactive({
      employee_id: null,
      type: "LABOR",
      employment_type: "SEISHAIN",
      contract_code: "",
      is_36_agreement_applicable: false,
      overtime_allowance_included: false,
      included_overtime_hours: 0,
      sign_date: null,
      start_date: null,
      end_date: null,
      value: 0
    });
    ```

---

## 3. Mối liên hệ với Cấu hình Công ty (Company Settings Integration)
*   **Tự động điền Thông tin Công ty:** Trong form tạo mới hợp đồng (`create.vue`), khi trang được khởi tạo, hệ thống tự động tải cấu hình doanh nghiệp từ `apiStore.companySetting` và điền sẵn vào các trường thông tin ẩn/chỉ đọc đại diện cho Bên A (Tên công ty, mã số thuế, địa chỉ, người đại diện). Điều này giúp nhân viên soạn thảo hợp đồng không cần nhập lại thông tin doanh nghiệp thủ công.
*   **Hiển thị Con dấu trên File PDF mẫu:** Khi nhấn nút "Xuất PDF" tại trang chi tiết hợp đồng, giao diện in ấn sẽ đọc đường dẫn con dấu `companySetting?.hanko_seal_path` để hiển thị đóng dấu tròn đại diện Bên A vào văn bản hiển thị trước khi chuyển đổi định dạng PDF.

