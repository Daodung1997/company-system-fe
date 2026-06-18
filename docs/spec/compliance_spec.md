# FRONTEND SPECIFICATION: ĐỘNG CƠ KIỂM SOÁT TUÂN THỦ (COMPLIANCE SPEC)

Đặc tả hoạt động của giao diện giám sát vi phạm tuân thủ và cảnh báo rủi ro vận hành trong ứng dụng Nuxt.js/Vue 3.

---

## 1. Màn hình Giám sát Tuân thủ (`app/pages/compliance/index.vue`)
*   **Chức năng:** Hiển thị danh sách các cảnh báo vi phạm được động cơ tuân thủ phát hiện trong hệ thống, hỗ trợ xem báo cáo chi tiết và xử lý sự cố.
*   **Thành phần chính:**
    1.  **Nút Quét hệ thống (Trigger Scan Button):** Cho phép người quản trị kích hoạt quét nhanh dữ liệu chấm công, tài chính, hợp đồng của tháng hiện tại (`POST /api/compliance/scan`). Trong lúc quét, hiển thị trạng thái loading spinner.
    2.  **Bộ lọc sự cố:** Lọc theo Mức độ nghiêm trọng (Đỏ - Nghiêm trọng, Vàng - Trung bình, Xám - Thấp) và Trạng thái (`Đang xử lý` / `Đã xử lý`).
    3.  **Bảng hiển thị sự cố (DataTable):** Hiển thị loại vi phạm, mô tả chi tiết, ngày phát hiện và các nút hành động tương ứng.
    4.  **Nút Giải quyết (Resolve Button):** Khi người dùng xử lý xong sự cố thực tế ngoài đời thực, họ bấm nút "Giải quyết" trên UI và điền ghi chú xử lý để gửi request (`PUT /api/compliance/{id}/resolve`) lên backend, đánh dấu sự cố là `RESOLVED`.
*   **Form State:**
    ```typescript
    const issues = ref([]);
    const isScanning = ref(false);
    const filter = reactive({
      severity: "",
      status: "DETECTED"
    });
    ```

---

## 3. Mối liên hệ với Cấu hình Công ty (Company Settings Integration)
*   **Hiển thị Cảnh báo Hồ sơ Doanh nghiệp:** Giao diện Dashboard kiểm soát tuân thủ hiển thị các cảnh báo rủi ro về tính pháp lý (ví dụ: thiếu mã số thuế hoặc địa chỉ trong `CompanySetting`) để người dùng quản trị có thể phát hiện và nhấp liên kết chuyển hướng trực tiếp đến trang `/master/company-setting` để cập nhật nhanh chóng.

