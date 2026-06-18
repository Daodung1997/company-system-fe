# FRONTEND SPECIFICATION: QUẢN LÝ THU CHI & CHI PHÍ (TRANSACTION SPEC)

Đặc tả hoạt động của giao diện ghi nhận thu chi và báo cáo chi phí doanh nghiệp trong ứng dụng Nuxt.js/Vue 3.

---

## 1. Màn hình Danh sách Giao dịch (`app/pages/transaction/index.vue`)
*   **Chức năng:** Quản lý lịch sử dòng tiền thu và chi của doanh nghiệp theo các bộ lọc thời gian và danh mục.
*   **Thành phần chính:**
    1.  **Bộ lọc dòng tiền:** Lọc theo Khoảng ngày (`transaction_date`), Loại thu/chi (`type`), Danh mục (`category`) và Trạng thái.
    2.  **Thẻ tóm tắt dòng tiền (KPI Cards):** Hiển thị tổng thu, tổng chi và số dư dòng tiền trong kỳ lọc.
    3.  **Bảng hiển thị giao dịch:** Hiển thị mã giao dịch, ngày, loại, tổng tiền, thuế suất và hóa đơn hợp chuẩn đi kèm.
*   **Form State:**
    ```typescript
    const filter = reactive({
      dateRange: null,
      type: "",
      category: ""
    });
    const transactionsList = ref([]);
    const summary = reactive({
      totalIncome: 0,
      totalExpense: 0,
      balance: 0
    });
    ```

---

## 2. Màn hình Thêm Giao dịch mới (`app/pages/transaction/create.vue`)
*   **Chức năng:** Cho phép kế toán hoặc quản trị viên ghi nhận các khoản thu chi phát sinh.
*   **Thành phần chính:**
    1.  **Form nhập dữ liệu tài chính:**
        *   **Loại thu/chi:** Nút chuyển đổi (Income/Expense).
        *   **Danh mục:** Dropdown chứa các danh mục định sẵn (Lương, Thuê văn phòng, Dịch vụ ngoài...).
        *   **Thuế suất (`tax_rate_type`):** Dropdown chọn VAT 10%, 8%, 0%, hoặc Miễn thuế.
        *   **Tự động tính toán số tiền:** Khi nhập "Tổng số tiền giao dịch (`amount`)" và chọn "Thuế suất", hệ thống sử dụng JavaScript tự động tính toán ra "Số tiền trước thuế (`net_amount`)" và "Tiền thuế (`tax_amount`)" hiển thị lên giao diện dạng chỉ đọc để hỗ trợ kiểm tra chéo trước khi lưu.
    2.  **Thông tin Hóa đơn chuẩn (Qualified Invoice):** Hỗ trợ nhập mã số đăng ký hóa đơn của nhà cung cấp (`invoice_registration_number`).
    3.  **Đính kèm Chứng từ:** Vùng tải lên hóa đơn, biên lai dạng ảnh hoặc PDF để liên kết lưu trữ.
*   **Form State:**
    ```typescript
    const form = reactive({
      type: "EXPENSE",
      amount: 0,
      net_amount: 0,
      tax_amount: 0,
      tax_rate_type: "VAT_10",
      invoice_registration_number: "",
      payment_method: "BANK_TRANSFER",
      category: "",
      transaction_date: new Date(),
      description: ""
    });
    ```

---

## 3. Mối liên hệ với Cấu hình Công ty (Company Settings Integration)
*   **Báo cáo Thu chi Doanh nghiệp:** Khi kết xuất dữ liệu dòng tiền hoặc báo cáo thuế thu chi từ trang danh sách giao dịch, tiêu đề báo cáo hiển thị tên chính thức của công ty (`company_name`) và mã số thuế (`tax_code`) được lấy tự động từ store `apiStore.companySetting` để phục vụ công tác thanh tra/đối chiếu tài chính.

