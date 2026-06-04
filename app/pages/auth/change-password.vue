<template>
  <div class="max-w-2xl mx-auto">
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-surface-900 dark:text-white tracking-tight">
        <i class="pi pi-lock mr-3 text-primary"></i>
        {{ $t('auth.resetPass') }}
      </h1>
      <p class="text-surface-500 dark:text-surface-400 mt-2">
        Thay đổi mật khẩu tài khoản của bạn. Mật khẩu mới phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt.
      </p>
    </div>

    <!-- Change Password Form -->
    <div class="bg-white dark:bg-surface-900 rounded-3xl shadow-xl shadow-surface-200/50 dark:shadow-none border border-surface-100 dark:border-surface-800 p-8">
      <form @submit.prevent="handleChangePassword" class="space-y-6">
        <!-- Current Password -->
        <div class="group">
          <label class="block text-sm font-semibold text-surface-700 dark:text-surface-300 mb-2">
            Mật khẩu hiện tại
            <span class="text-red-500 ml-1">*</span>
          </label>
          <div class="relative">
            <i class="pi pi-shield absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
            <Password
              id="currentPassword"
              v-model="form.currentPassword"
              :invalid="!!form.errorCurrentPassword"
              :feedback="false"
              toggleMask
              class="w-full"
              inputClass="w-full !rounded-2xl !py-3.5 !pl-11 focus:!ring-4 focus:!ring-primary/10 transition-all"
              placeholder="Nhập mật khẩu hiện tại"
              @update:modelValue="onValidate('currentPassword')"
            />
          </div>
          <Message v-if="form.errorCurrentPassword" severity="error" variant="simple" size="small" class="mt-1">{{ form.errorCurrentPassword }}</Message>
        </div>

        <!-- Divider -->
        <div class="border-t border-surface-200 dark:border-surface-800"></div>

        <!-- New Password -->
        <div class="group">
          <label class="block text-sm font-semibold text-surface-700 dark:text-surface-300 mb-2">
            Mật khẩu mới
            <span class="text-red-500 ml-1">*</span>
          </label>
          <div class="relative">
            <i class="pi pi-lock absolute left-4 top-[1.1rem] text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
            <Password
              id="newPassword"
              v-model="form.newPassword"
              :invalid="!!form.errorNewPassword"
              :feedback="true"
              toggleMask
              class="w-full"
              inputClass="w-full !rounded-2xl !py-3.5 !pl-11 focus:!ring-4 focus:!ring-primary/10 transition-all"
              placeholder="Nhập mật khẩu mới"
              @update:modelValue="onValidate('newPassword')"
            />
          </div>
          <Message v-if="form.errorNewPassword" severity="error" variant="simple" size="small" class="mt-1">{{ form.errorNewPassword }}</Message>
          <!-- Password strength hints -->
          <div class="mt-3 grid grid-cols-2 gap-2 text-xs" v-if="form.newPassword">
            <div class="flex items-center gap-1.5" :class="hasLowercase ? 'text-green-600' : 'text-surface-400'">
              <i :class="hasLowercase ? 'pi pi-check-circle' : 'pi pi-circle'" class="text-[10px]"></i>
              Chữ thường (a-z)
            </div>
            <div class="flex items-center gap-1.5" :class="hasUppercase ? 'text-green-600' : 'text-surface-400'">
              <i :class="hasUppercase ? 'pi pi-check-circle' : 'pi pi-circle'" class="text-[10px]"></i>
              Chữ hoa (A-Z)
            </div>
            <div class="flex items-center gap-1.5" :class="hasDigit ? 'text-green-600' : 'text-surface-400'">
              <i :class="hasDigit ? 'pi pi-check-circle' : 'pi pi-circle'" class="text-[10px]"></i>
              Chữ số (0-9)
            </div>
            <div class="flex items-center gap-1.5" :class="hasSpecial ? 'text-green-600' : 'text-surface-400'">
              <i :class="hasSpecial ? 'pi pi-check-circle' : 'pi pi-circle'" class="text-[10px]"></i>
              Ký tự đặc biệt (!@#$...)
            </div>
            <div class="flex items-center gap-1.5" :class="hasMinLength ? 'text-green-600' : 'text-surface-400'">
              <i :class="hasMinLength ? 'pi pi-check-circle' : 'pi pi-circle'" class="text-[10px]"></i>
              Ít nhất 8 ký tự
            </div>
            <div class="flex items-center gap-1.5" :class="hasMaxLength ? 'text-green-600' : 'text-surface-400'">
              <i :class="hasMaxLength ? 'pi pi-check-circle' : 'pi pi-circle'" class="text-[10px]"></i>
              Tối đa 50 ký tự
            </div>
          </div>
        </div>

        <!-- Confirm Password -->
        <div class="group">
          <label class="block text-sm font-semibold text-surface-700 dark:text-surface-300 mb-2">
            Xác nhận mật khẩu mới
            <span class="text-red-500 ml-1">*</span>
          </label>
          <div class="relative">
            <i class="pi pi-lock absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
            <Password
              id="confirmPassword"
              v-model="form.confirmPassword"
              :invalid="!!form.errorConfirmPassword"
              :feedback="false"
              toggleMask
              class="w-full"
              inputClass="w-full !rounded-2xl !py-3.5 !pl-11 focus:!ring-4 focus:!ring-primary/10 transition-all"
              placeholder="Nhập lại mật khẩu mới"
              @update:modelValue="onValidate('confirmPassword')"
            />
          </div>
          <Message v-if="form.errorConfirmPassword" severity="error" variant="simple" size="small" class="mt-1">{{ form.errorConfirmPassword }}</Message>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center justify-end gap-4 pt-4">
          <Button
            v-if="!mustChangePassword"
            :label="'Hủy bỏ'"
            severity="secondary"
            variant="outlined"
            class="!rounded-2xl !px-8 !font-semibold"
            @click="router.push('/')"
          />
          <Button
            v-else
            :label="'Đăng xuất'"
            severity="danger"
            variant="outlined"
            class="!rounded-2xl !px-8 !font-semibold"
            @click="handleLogout"
          />
          <Button
            type="submit"
            :label="'Đổi mật khẩu'"
            :loading="isLoading"
            icon="pi pi-check"
            class="!rounded-2xl !px-8 !font-bold !shadow-lg !shadow-primary/25"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import Cookies from "js-cookie";
import { APP_TOKEN_NAME } from "~/config/constants";
import { validateOnField, validateOnAllField } from "~/utils/validate";
import { useAuth } from "~/composables/auth";
import { showMessage } from "~/utils/global";

const router = useRouter();
const { t } = useI18n();
const { changePassword } = useAuth();

const mustChangePassword = computed(() => {
  if (import.meta.client) {
    const userStr = localStorage.getItem("userInfo");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        return !!user.must_change_password;
      } catch (e) {}
    }
  }
  return false;
});

const handleLogout = () => {
  Cookies.remove(APP_TOKEN_NAME, { path: '/' });
  localStorage.removeItem("userInfo");
  router.push("/login");
};

const FIELD_VALIDATIONS = reactive({
  currentPassword: {
    transitionKey: "auth.password",
    types: ["require", "minLength8"],
    errorKey: "errorCurrentPassword",
  },
  newPassword: {
    transitionKey: "auth.newPassword",
    types: ["require", "passwordStrength"],
    errorKey: "errorNewPassword",
  },
  confirmPassword: {
    transitionKey: "auth.newPasswordConfirm",
    types: ["require", "passwordMatch"],
    errorKey: "errorConfirmPassword",
    extraData: { matchValue: "" },
  },
});

const isLoading = ref(false);
const form = reactive({
  currentPassword: "",
  errorCurrentPassword: "",
  newPassword: "",
  errorNewPassword: "",
  confirmPassword: "",
  errorConfirmPassword: "",
});

// Real-time password strength indicators
const hasLowercase = computed(() => /[a-z]/.test(form.newPassword));
const hasUppercase = computed(() => /[A-Z]/.test(form.newPassword));
const hasDigit = computed(() => /[0-9]/.test(form.newPassword));
const hasSpecial = computed(() => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(form.newPassword));
const hasMinLength = computed(() => form.newPassword.length >= 8);
const hasMaxLength = computed(() => form.newPassword.length <= 50);

const onValidate = (field: string) => {
  FIELD_VALIDATIONS.confirmPassword.extraData.matchValue = form.newPassword;
  return validateOnField(field, form, form, FIELD_VALIDATIONS, t);
};

const handleChangePassword = () => {
  FIELD_VALIDATIONS.confirmPassword.extraData.matchValue = form.newPassword;
  const check = validateOnAllField(form, form, FIELD_VALIDATIONS, t);
  if (!check || isLoading.value) return;

  isLoading.value = true;
  changePassword({
    data: {
      current_password: form.currentPassword,
      password: form.newPassword,
      password_confirmation: form.confirmPassword,
    },
    successCallback: (response: any) => {
      isLoading.value = false;
      const data = response?.data?.data;

      // Update token with new JWT from response
      if (data?.access_token) {
        Cookies.set(APP_TOKEN_NAME, data.access_token, { expires: 1, path: '/' });
      }

      // Update local storage to clear must_change_password flag
      if (import.meta.client) {
        const userStr = localStorage.getItem("userInfo");
        if (userStr) {
          try {
            const user = JSON.parse(userStr);
            user.must_change_password = false;
            localStorage.setItem("userInfo", JSON.stringify(user));
          } catch (e) {}
        }
      }

      showMessage("success", "Thành công", data?.message || "Mật khẩu đã được thay đổi thành công.");
      router.push("/");
    },
    errorCallback: (error: any) => {
      isLoading.value = false;
      const errorMsg = error?.response?.data?.messages?.message
        || error?.response?.data?.messages?.[0]
        || "Có lỗi xảy ra. Vui lòng thử lại.";
      showMessage("error", "Lỗi", errorMsg);
    },
  });
};
</script>

<style scoped>
:deep(.p-password) {
  width: 100%;
}
</style>
