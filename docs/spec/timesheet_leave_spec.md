# FRONTEND SPECIFICATION: QUẢN LÝ CHẤM CÔNG & NGHỈ PHÉP (TIMESHEETS & LEAVE SPEC)

Đặc tả hoạt động của giao diện chấm công và đơn xin nghỉ phép trong ứng dụng Nuxt.js/Vue 3.

---

## 1. Màn hình Chấm công Cá nhân (`app/pages/timesheet/index.vue`)
*   **Chức năng:** Cho phép nhân viên check-in, check-out hàng ngày và theo dõi lịch sử chấm công của tháng hiện tại.
*   **Thành phần chính:**
    1.  **Đồng hồ thời gian thực:** Hiển thị giờ hệ thống dạng số lớn chính xác cao.
    2.  **Nút Check-in / Check-out:**
        *   Nút Check-in kích hoạt khi nhân viên chưa check-in trong ngày. Nếu check-in sau 09:00, ghi nhận đi muộn.
        *   Nút Check-out kích hoạt sau khi đã check-in thành công.
    3.  **Lịch/Bảng chấm công hàng tháng:** Hiển thị danh sách các ngày trong tháng kèm theo giờ vào, giờ ra và thẻ trạng thái (`ON_TIME` - Xanh lá, `LATE` - Cam, `ABSENT` - Đỏ).
*   **Form State:**
    ```typescript
    const selectedMonth = ref(new Date()); // Đối tượng Date lưu tháng đang xem
    const timesheetData = ref([]);        // Danh sách dòng chấm công nhận từ API
    ```

---

## 2. Màn hình Phê duyệt Nghỉ phép (`app/pages/leave-request/pending.vue`)
*   **Chức năng:** Dành cho cấp quản trị (Manager/Admin) xét duyệt hoặc từ chối các đơn xin nghỉ phép của nhân sự.
*   **Thành phần chính:**
    1.  **Bảng danh sách đơn chờ duyệt:** Hiển thị tên nhân viên, loại nghỉ phép, số ngày nghỉ, lý do, tài liệu đính kèm (nếu có).
    2.  **Hộp thoại Phê duyệt (Approval Dialog):**
        *   Khi bấm nút "Phê duyệt" hoặc "Từ chối", hiển thị Dialog yêu cầu điền "Ghi chú phê duyệt" (`approver_note`).
        *   Gửi request phê duyệt (`POST /api/leave-requests/{id}/approve`) lên backend để cập nhật trạng thái đơn nghỉ.
    3.  **Ràng buộc UI:** Các đơn đã được duyệt/từ chối sẽ vô hiệu hóa các nút hành động để tránh phê duyệt lặp lại.
*   **Form State:**
    ```typescript
    const pendingRequests = ref([]);
    const approvalForm = reactive({
      id: null,
      status: "APPROVED", // hoặc REJECTED
      approver_note: ""
    });
    ```

---

## 3. Mối liên hệ với Cấu hình Công ty (Company Settings Integration)
*   **Hiển thị Logo & Tên phụ trên Sidebar:** Khi nhân viên thao tác tại trang chấm công cá nhân, thành phần `AppSidebar.vue` sử dụng dữ liệu phản hồi từ store `apiStore.companySetting` để render logo và tên phụ hiển thị ở góc trái màn hình.
*   **Hình nền Trang Login Chấm công:** Khi phiên đăng nhập chấm công hết hạn, người dùng bị chuyển hướng ra màn hình đăng nhập (`auth.vue` layout). Hình nền đăng nhập sẽ tự động hiển thị theo tệp ảnh nền (`background_path`) được thiết lập trong cấu hình công ty, hoặc sử dụng ảnh mặc định của hệ thống nếu cấu hình này trống.

