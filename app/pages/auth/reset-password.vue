<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div class="space-y-2">
      <h2 class="text-3xl font-black text-surface-900 dark:text-white tracking-tighter uppercase italic">
        {{ $t("auth.resetPassword") }}
      </h2>
      <p class="text-surface-500 dark:text-surface-400 font-medium">
        {{ $t("auth.settingPassword") }}
      </p>
    </div>

    <form @submit.prevent="handleResetPassword" class="space-y-6">
      <div class="space-y-5">
        <!-- OTP -->
        <div class="group">
          <label class="block text-[10px] font-black text-surface-400 group-focus-within:text-primary uppercase tracking-[0.2em] mb-2 px-1 transition-colors">
            {{ $t("auth.code") }}
            <span class="text-red-500 ml-1">*</span>
          </label>
          <div class="relative">
            <i class="pi pi-key absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors"></i>
            <InputText
              id="otp"
              v-model.trim="resetPass.otp"
              :invalid="!!resetPass.errorOtp"
              type="text"
              class="w-full !rounded-2xl !py-4 !pl-11 focus:!ring-4 focus:!ring-primary/10 transition-all"
              placeholder="000000"
              maxlength="6"
              @change="onValidate('otp')"
            />
          </div>
          <AppMessageError :error="resetPass.errorOtp" class="mt-2" />
          <div class="mt-3 flex items-center justify-between px-1">
            <span class="text-xs text-surface-400 font-medium">
              {{ $t("auth.receiveOtp") }}
            </span>
            <button
              type="button"
              @click="handleResendOtp"
              class="text-xs text-primary hover:text-primary-600 font-black flex items-center gap-1 transition-colors"
            >
              <i class="pi pi-refresh text-[10px]" :class="{'pi-spin': isResendingOtp}"></i>
              {{ $t("auth.retransmission") }}
            </button>
          </div>
        </div>

        <!-- New Password -->
        <div class="group">
          <label class="block text-[10px] font-black text-surface-400 group-focus-within:text-primary uppercase tracking-[0.2em] mb-2 px-1 transition-colors">
            {{ $t("auth.newPassword") }}
            <span class="text-red-500 ml-1">*</span>
          </label>
          <div class="relative">
            <i class="pi pi-lock absolute left-4 top-[1.3rem] text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
            <Password
              id="newPassword"
              v-model="resetPass.newPassword"
              :invalid="!!resetPass.errorNewPassword"
              :feedback="true"
              toggleMask
              class="w-full"
              inputClass="w-full !rounded-2xl !py-4 !pl-11 focus:!ring-4 focus:!ring-primary/10 transition-all"
              placeholder="********"
              @change="onValidate('newPassword')"
            />
          </div>
          <AppMessageError :error="resetPass.errorNewPassword" class="mt-2" />
          <!-- Password strength hints -->
          <div class="mt-2 grid grid-cols-2 gap-1.5 text-[10px]" v-if="resetPass.newPassword">
            <div class="flex items-center gap-1" :class="/[a-z]/.test(resetPass.newPassword) ? 'text-green-600' : 'text-surface-400'">
              <i :class="/[a-z]/.test(resetPass.newPassword) ? 'pi pi-check-circle' : 'pi pi-circle'" class="text-[8px]"></i>
              Chữ thường
            </div>
            <div class="flex items-center gap-1" :class="/[A-Z]/.test(resetPass.newPassword) ? 'text-green-600' : 'text-surface-400'">
              <i :class="/[A-Z]/.test(resetPass.newPassword) ? 'pi pi-check-circle' : 'pi pi-circle'" class="text-[8px]"></i>
              Chữ hoa
            </div>
            <div class="flex items-center gap-1" :class="/[0-9]/.test(resetPass.newPassword) ? 'text-green-600' : 'text-surface-400'">
              <i :class="/[0-9]/.test(resetPass.newPassword) ? 'pi pi-check-circle' : 'pi pi-circle'" class="text-[8px]"></i>
              Chữ số
            </div>
            <div class="flex items-center gap-1" :class="/[!@#$%^&*()_+\-=\[\]{};':&quot;\\|,.<>\/?`~]/.test(resetPass.newPassword) ? 'text-green-600' : 'text-surface-400'">
              <i :class="/[!@#$%^&*()_+\-=\[\]{};':&quot;\\|,.<>\/?`~]/.test(resetPass.newPassword) ? 'pi pi-check-circle' : 'pi pi-circle'" class="text-[8px]"></i>
              Ký tự đặc biệt
            </div>
            <div class="flex items-center gap-1" :class="resetPass.newPassword.length >= 8 ? 'text-green-600' : 'text-surface-400'">
              <i :class="resetPass.newPassword.length >= 8 ? 'pi pi-check-circle' : 'pi pi-circle'" class="text-[8px]"></i>
              Ít nhất 8 ký tự
            </div>
            <div class="flex items-center gap-1" :class="resetPass.newPassword.length <= 50 ? 'text-green-600' : 'text-surface-400'">
              <i :class="resetPass.newPassword.length <= 50 ? 'pi pi-check-circle' : 'pi pi-circle'" class="text-[8px]"></i>
              Tối đa 50 ký tự
            </div>
          </div>
        </div>

        <!-- Confirm Password -->
        <div class="group">
          <label class="block text-[10px] font-black text-surface-400 group-focus-within:text-primary uppercase tracking-[0.2em] mb-2 px-1 transition-colors">
            {{ $t("auth.newPasswordConfirm") }}
            <span class="text-red-500 ml-1">*</span>
          </label>
          <div class="relative">
            <i class="pi pi-lock absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
            <Password
              id="confirmPassword"
              v-model="resetPass.confirmPassword"
              :invalid="!!resetPass.errorConfirmPassword"
              :feedback="false"
              toggleMask
              class="w-full"
              inputClass="w-full !rounded-2xl !py-4 !pl-11 focus:!ring-4 focus:!ring-primary/10 transition-all"
              placeholder="********"
              @change="onValidate('confirmPassword')"
            />
          </div>
          <AppMessageError :error="resetPass.errorConfirmPassword" class="mt-2" />
        </div>
      </div>

      <div class="flex flex-col gap-4 pt-4">
        <Button
          :label="$t('auth.resetPassword')"
          :loading="isLoading"
          class="w-full !rounded-2xl !py-4 !font-black !tracking-tight !shadow-xl !shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          type="submit"
        />
        <Button
          :label="$t('btn.cancel')"
          severity="secondary"
          variant="text"
          class="w-full !rounded-2xl !font-bold"
          @click="router.push('/login')"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { showMessage } from "~/utils/global";
import { validateOnField, validateOnAllField } from "~/utils/validate";
import { useAuth } from "~/composables/auth";

definePageMeta({
  layout: 'auth'
});

const router = useRouter();
const route = useRoute();
const { t } = useI18n();
const { resetPassword, forgotPassword } = useAuth();

const FIELD_VALIDATIONS = reactive({
  otp: { transitionKey: "auth.code", types: ["require"], errorKey: "errorOtp" },
  newPassword: { transitionKey: "auth.newPassword", types: ["require", "passwordStrength"], errorKey: "errorNewPassword" },
  confirmPassword: {
    transitionKey: "auth.newPasswordConfirm",
    types: ["require", "passwordMatch"],
    errorKey: "errorConfirmPassword",
    extraData: { matchValue: "" },
  },
});

const isLoading = ref(false);
const isResendingOtp = ref(false);
const resetPass = reactive({
  email: "",
  otp: "",
  errorOtp: "",
  newPassword: "",
  errorNewPassword: "",
  confirmPassword: "",
  errorConfirmPassword: "",
});

onMounted(() => {
  if (route.query.email) {
    resetPass.email = String(route.query.email);
  }
});

const validateOtp = () => {
  if (!resetPass.otp) {
    resetPass.errorOtp = t("auth.errorOtp");
    return false;
  }
  if (resetPass.otp.length !== 6) {
    resetPass.errorOtp = t("text.errorOtpLength");
    return false;
  }
  resetPass.errorOtp = "";
  return true;
};

const validateConfirmPassword = () => {
  if (!resetPass.confirmPassword) {
    resetPass.errorConfirmPassword = t("auth.errorRePass");
    return false;
  }
  if (resetPass.newPassword !== resetPass.confirmPassword) {
    resetPass.errorConfirmPassword = t("auth.rePassNotMatch");
    return false;
  }
  resetPass.errorConfirmPassword = "";
  return true;
};

const onValidate = (field: string) => {
  if (field === "otp") return validateOtp();
  // Keep matchValue in sync before validating confirm password
  FIELD_VALIDATIONS.confirmPassword.extraData.matchValue = resetPass.newPassword;
  if (field === "confirmPassword") return validateConfirmPassword();
  return validateOnField(field, resetPass, resetPass, FIELD_VALIDATIONS, t);
};

const handleResendOtp = () => {
  if (!resetPass.email) {
    showMessage("warn", t("text.warning") || "Cảnh báo", t("auth.errorMail") || "Vui lòng nhập email.");
    return;
  }
  if (isResendingOtp.value) return;
  isResendingOtp.value = true;

  forgotPassword({
    data: { email: resetPass.email },
    successCallback: (response: any) => {
      const msg = response?.data?.data?.message || t("auth.reSendResetSuccess");
      showMessage("success", t("text.success") || "Thành công", msg);
      isResendingOtp.value = false;
    },
    errorCallback: (error: any) => {
      const errMsg = error?.response?.data?.messages?.message
        || error?.response?.data?.messages?.[0]
        || t("text.errorMessage") || "Có lỗi xảy ra.";
      showMessage("error", t("text.error") || "Lỗi", errMsg);
      isResendingOtp.value = false;
    },
  });
};

const handleResetPassword = () => {
  const check = validateOnAllField(resetPass, resetPass, FIELD_VALIDATIONS, t);
  const isOtpValid = validateOtp();
  const isConfirmPasswordValid = validateConfirmPassword();

  if (check && isOtpValid && isConfirmPasswordValid) {
    if (isLoading.value) return;
    isLoading.value = true;

    resetPassword({
      data: {
        email: resetPass.email,
        token: resetPass.otp,
        password: resetPass.newPassword,
        password_confirmation: resetPass.confirmPassword,
      },
      successCallback: () => {
        showMessage("success", t("text.success"), t("auth.resetSuccess"));
        isLoading.value = false;
        router.push("/login");
      },
      errorCallback: (error: any) => {
        const errMsg = error?.response?.data?.messages?.message
          || error?.response?.data?.messages?.[0]
          || t("text.errorMessage") || "Có lỗi xảy ra.";
        showMessage("error", t("text.error") || "Lỗi", errMsg);
        isLoading.value = false;
      },
    });
  }
};
</script>
