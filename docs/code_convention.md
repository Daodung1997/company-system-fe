# Code Convention (Nuxt 4)

> [!NOTE]
> For **Naming Conventions** and **Technical Standards**, refer to [.agent/rules.md](../.agent/rules.md).

## 1. Code Quality & TypeScript

- **Strong Typing**: Use TypeScript interfaces or types for all API payloads, response objects, and complex component props. Avoid `any` whenever possible.
- **Comparison**: Always use `===` instead of `==`.
- **Variables**: Use `const` by default. Use `let` only when the variable needs to be reassigned. `var` is strictly prohibited.
- **Composition API**: Use the `<script setup lang="ts">` syntax.
- **Modularization**: Break down large components into smaller, reusable ones in `app/components/`. Extract complex business logic into composables in `app/composables/`.

## 2. Nuxt 4 Specifics

- **Auto-imports**: Take advantage of Nuxt's auto-importing for components, composables, and utilities to keep script blocks clean.
- **Directory Structure**: Strictly follow the Nuxt 4 `app/` directory convention.
- **Global Styles**: Define global CSS and Tailwind configurations in `app/assets/css/` and reference them in `nuxt.config.ts`.

## 3. Git Convention

- **Commit Message Prefixes**:
  - `feat:` for new features.
  - `fix:` for bug fixes.
  - `docs:` for documentation changes.
  - `style:` for UI/formatting changes (no logic impact).
  - `refactor:` for code improvements that don't add features or fix bugs.
  - `chore:` for updating dependencies or build configurations.

---

## 4. Quy trình phát triển một tính năng/màn hình mới (6-Step Development Workflow)

Để đảm bảo tính nhất quán của mã nguồn Frontend và hỗ trợ lập trình viên (hoặc AI tiếp theo) phát triển nhanh chóng, tất cả các màn hình mới phải tuân thủ nghiêm ngặt quy trình 6 bước dưới đây:

### Bước 1: Khai báo API (API Layer)
*   **Vị trí**: Tạo tệp tin cấu hình API tương ứng trong thư mục `app/apis/` (ví dụ: `app/apis/document.ts`).
*   **Yêu cầu**:
    *   Sử dụng thực thể Axios dùng chung (`$api`) để thực hiện các cuộc gọi mạng.
    *   Tất cả các hàm gọi API cần hỗ trợ nhận tham số callbacks gồm `successCallback` và `errorCallback` để báo trạng thái về tầng UI.
*   **Ví dụ**:
    ```typescript
    export const GET_DOCUMENTS = (params: any, successCallback?: Function, errorCallback?: Function) => {
      return $api.get('/api/documents', { params })
        .then(res => successCallback?.(res.data))
        .catch(err => errorCallback?.(err.response?.data));
    };
    ```

### Bước 2: Xây dựng Composable (Composables Layer)
*   **Vị trí**: Tạo tệp tin composable trong thư mục `app/composables/` (ví dụ: `app/composables/document.ts`).
*   **Yêu cầu**:
    *   Đóng gói các hàm gọi API từ tầng API vào một custom hook để giao diện trang sử dụng trực tiếp.
    *   Giữ cho composable phi trạng thái (stateless) hoặc chỉ quản lý các trạng thái cục bộ dùng chung.
*   **Ví dụ**:
    ```typescript
    import { GET_DOCUMENTS } from "~/apis/document";
    export function useDocument() {
      const getDocuments = (payload: any) => {
        const { params, successCallback, errorCallback } = payload;
        return GET_DOCUMENTS(params, successCallback, errorCallback);
      };
      return { getDocuments };
    }
    ```

### Bước 3: Thiết kế Giao diện & Form (Components Layer & i18n)
*   **Quy tắc vẽ form**:
    *   **Ưu tiên cao nhất**: Tách biệt biểu mẫu/form nhập liệu vào thư mục `app/components/` thay vì viết toàn bộ giao diện trực tiếp trong `app/pages/`.
    *   Các file trang trong `app/pages/` chỉ đóng vai trò chứa container, quản lý routing, gọi API nạp dữ liệu và truyền props/events xuống các components con.
*   **Quy tắc đa ngôn ngữ (i18n)**:
    *   **Tuyệt đối không viết cứng (hardcode) văn bản hiển thị bằng tiếng Việt hoặc tiếng Nhật trực tiếp trên template.**
    *   Sử dụng hàm `$t('key.path')` trên giao diện.
    *   Định nghĩa đầy đủ tất cả các translation key tương ứng vào các tệp đa ngôn ngữ tại `i18n/locales/vi.json`, `en.json`, và `ja.json`.

### Bước 4: Tích hợp logic API và hoàn thiện (Logic Integration)
*   **Quy trình ràng buộc dữ liệu & Kiểm soát lỗi (Validation Rules)**:
    *   Sử dụng `reactive` hoặc `ref` để khai báo form state (`form`) và lỗi validate trả về từ server (`formErrors`).
    *   **Bắt buộc tuân thủ cấu trúc Schema Validation trong `data.ts`**: Nhằm đảm bảo khả năng bảo trì cao, tất cả các cấu hình kiểm tra tính hợp lệ phải được tập trung vào đối tượng `FIELD_VALIDATIONS` trong tệp `data.ts` của trang (giống như màn hình `master/employee/data.ts`).
    *   **Sử dụng helper `validateOnField` và `validateOnAllField`**:
        *   Khi người dùng rời tiêu điểm (`focusout`/`blur`) khỏi một ô nhập liệu hoặc nhấn phím `Enter`, lập tức gọi hàm `onValidate(fieldName)` sử dụng helper `validateOnField` từ `~/utils/validate` để kiểm tra lỗi trường đó.
        *   Khi người dùng click nút submit (Lưu/Gửi), gọi `validateOnAllField` để kiểm duyệt lại toàn bộ form trước khi gửi payload lên server.
    *   Sử dụng biến `isLoading` để vô hiệu hóa (disable) các nút lưu hoặc hiển thị vòng xoay tải trang (spinner) khi API đang chạy.
    *   Sử dụng Toast thông báo trực quan (ví dụ: `toast.add({ severity: 'success', summary: 'Thành công', detail: '...' })`) khi API thực hiện thành công.

*   **Ví dụ Khai báo trong `data.ts`**:
    ```typescript
    export const FIELD_VALIDATIONS = {
      full_name: { transitionKey: "employee.fullName", types: ["require", "max150"], errorKey: "errorFullName" },
      email: { transitionKey: "employee.email", types: ["require", "validEmail", "max150"], errorKey: "errorEmail" },
      phone: { transitionKey: "employee.phone", types: ["require", "max20"], errorKey: "errorPhone" },
    };

    export const DEFAULT_FORM = {
      full_name: '',
      email: '',
      phone: '',
      // Các trường lỗi tương ứng
      errorFullName: '',
      errorEmail: '',
      errorPhone: ''
    };
    ```

*   **Ví dụ tích hợp trong Component**:
    ```typescript
    import { ref, reactive } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { validateOnField, validateOnAllField } from '~/utils/validate';
    import { DEFAULT_FORM, FIELD_VALIDATIONS } from './data';

    const { t } = useI18n();
    const form = reactive({ ...DEFAULT_FORM });
    const isLoading = ref(false);

    // Validate sớm khi focusout (blur) hoặc enter
    const onValidate = (key: string) => {
      validateOnField(key, form, form, FIELD_VALIDATIONS, t);
    };

    const handleSave = () => {
      // Validate toàn bộ form lần cuối trước khi submit
      const isValid = validateOnAllField(form, form, FIELD_VALIDATIONS, t);
      if (!isValid) {
        toast.add({ severity: 'warn', summary: 'Cảnh báo', detail: 'Vui lòng điền đầy đủ các thông tin bắt buộc.' });
        return;
      }

      isLoading.value = true;
      saveData({
        data: form,
        successCallback: (res) => {
          isLoading.value = false;
          // Toast thành công & chuyển trang
        },
        errorCallback: (err) => {
          isLoading.value = false;
          // Gán lỗi validate từ server vào form nếu có
          Object.assign(form, err.messages);
        }
      });
    };
    ```

### Bước 5: Viết Unit Test
*   **Vị trí**: Tạo các file test có hậu tố `.spec.ts` hoặc `.test.ts` đặt cùng thư mục với component/composable hoặc thư mục `tests/`.
*   **Yêu cầu**:
    *   Sử dụng framework kiểm thử được cấu hình (ví dụ: Vitest).
    *   Mock các hàm gọi API và kiểm tra xem component có render đúng các trường thông tin, các nút bấm có kích hoạt đúng hàm xử lý hay không.

### Bước 6: Chạy thử và Kiểm thử cơ bản (Verification)
*   Chạy dev server thông qua lệnh `npm run dev` để chạy thử trực tiếp trên trình duyệt.
*   Kiểm tra tính tương thích Responsive trên thiết bị di động.
*   Xác minh các luồng validation lỗi từ backend hiển thị chính xác lên giao diện.
