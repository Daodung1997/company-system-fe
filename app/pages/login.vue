<template>
  <div>
    <div class="mb-10">
      <h2 class="text-4xl font-bold text-surface-900 dark:text-white mb-3 tracking-tight">{{ $t('auth.login') }}</h2>
      <p class="text-surface-500 dark:text-surface-400">{{ $t('auth.titleLogin') }}</p>
    </div>

    <form @submit.prevent="login" class="space-y-6">
      <div class="space-y-1.5">
        <label for="username" class="text-[16px] font-black text-surface-800 dark:text-surface-200 ml-1">
          Email / Số điện thoại
          <span class="text-red-500 ml-1">*</span>
        </label>
        <div class="relative group">
          <i class="pi pi-user absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors z-10"></i>
          <InputText
            id="username"
            v-model.trim="auth.username"
            :invalid="!!auth.errorUsername"
            class="w-full !pl-12 !h-[42px] bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-800 !rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm"
            :class="{'!border-red-500 !ring-red-500/20': auth.errorUsername}"
            placeholder="Email hoặc Số điện thoại"
            @update:modelValue="onValidate('username')"
          />
        </div>
        <Message v-if="auth.errorUsername" severity="error" variant="simple" size="small" class="ml-1">{{ auth.errorUsername }}</Message>
      </div>

      <div class="space-y-1.5">
        <div class="flex items-center justify-between mb-1 ml-1">
          <label for="password" class="text-[16px] font-black text-surface-800 dark:text-surface-200">
            {{ $t('auth.password') }}
            <span class="text-red-500 ml-1">*</span>
          </label>
          <NuxtLink to="/auth/forgot-password" class="text-xs font-bold text-primary hover:text-primary-emphasis transition-colors">{{ $t('auth.forgotPassword') }}</NuxtLink>
        </div>
        <div class="relative group">
          <i class="pi pi-lock absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary z-10 transition-colors"></i>
          <Password
            id="password"
            v-model="auth.password"
            :invalid="!!auth.errorPassword"
            :feedback="false"
            toggleMask
            class="w-full"
            :inputClass="['w-full !pl-12 !h-[42px] bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-800 !rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm', {'!border-red-500 !ring-red-500/20': auth.errorPassword}]"
            placeholder="••••••••"
            @update:modelValue="onValidate('password')"
          />
        </div>
        <Message v-if="auth.errorPassword" severity="error" variant="simple" size="small" class="ml-1">{{ auth.errorPassword }}</Message>
      </div>

      <div class="flex items-center gap-2 ml-1">
        <Checkbox v-model="rememberMe" :binary="true" inputId="remember" />
        <label for="remember" class="text-[15px] text-surface-700 dark:text-surface-300 cursor-pointer font-bold">{{ $t('auth.rememberPassword') }}</label>
      </div>

      <Button
        type="submit"
        :loading="isLoading"
        class="w-full !h-[42px] bg-primary text-white border-none !rounded-xl text-sm font-bold shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-all"
      >
        <span class="flex items-center justify-center gap-2">
          {{ $t('auth.login').toUpperCase() }}
          <i class="pi pi-arrow-right text-xs"></i>
        </span>
      </Button>
    </form>

    <p class="mt-10 text-center text-sm text-surface-500 dark:text-surface-400">
      Compliance & Document Control System
    </p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Cookies from "js-cookie";
import { APP_TOKEN_NAME } from "~/config/constants";
import { validateOnField, validateOnAllField } from "~/utils/validate";
import { useAuth } from "~/composables/auth";
import { showMessage } from "~/utils/global";

definePageMeta({
  layout: 'auth'
});

const { loginUser } = useAuth();
const router = useRouter();
const { t } = useI18n();
const rememberMe = ref(false);

const FIELD_VALIDATIONS = {
  username: {
    transitionKey: "auth.email",
    types: ["require", "max50"],
    errorKey: "errorUsername",
  },
  password: {
    transitionKey: "auth.password",
    types: ["require", "passwordStrength"],
    errorKey: "errorPassword",
  },
};

const isLoading = ref(false);
const auth = reactive({
  username: "admin@compliance.vn",
  errorUsername: "",
  password: "P@ssw0rd123",
  errorPassword: "",
});

const login = () => {
  const isValid = validateOnAllField(auth, auth, FIELD_VALIDATIONS, t);
  if (!isValid || isLoading.value) return;

  isLoading.value = true;
  loginUser({
    data: {
      username: auth.username,
      password: auth.password,
    },
    successCallback: (response: any) => {
      isLoading.value = false;
      const data = response?.data?.data;
      const token = data?.access_token;
      if (token) {
        Cookies.set(APP_TOKEN_NAME, token, { expires: rememberMe.value ? 30 : 1, path: '/' });
      }

      // Store employee info (backend returns 'employee' not 'user')
      const employeeInfo = data?.employee;
      if (employeeInfo) {
        localStorage.setItem("userInfo", JSON.stringify(employeeInfo));
      }

      const displayName = employeeInfo?.full_name || auth.username;
      showMessage("success", "Đăng nhập thành công", `Chào mừng ${displayName} quay trở lại!`);
      
      if (data?.must_change_password) {
        showMessage("warn", "Yêu cầu đổi mật khẩu", "Đây là lần đầu đăng nhập. Vui lòng đổi mật khẩu để kích hoạt tài khoản!");
        router.push("/auth/change-password");
      } else {
        router.push("/");
      }
    },
    errorCallback: () => {
      isLoading.value = false;
    },
  });
};

const onValidate = (field: string) => {
  validateOnField(field, auth, auth, FIELD_VALIDATIONS, t);
};
</script>

<style scoped>
:deep(.p-password), :deep(.p-password input) {
  width: 100%;
}
:deep(.p-inputtext) {
  padding-left: 3rem !important;
}
</style>
