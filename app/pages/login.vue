<template>
  <div>
    <!-- Header -->
    <div class="mb-8 text-center sm:text-left">
      <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">{{ $t('auth.login') }}</h2>
      <p class="text-surface-400 text-sm">{{ $t('auth.titleLogin') }}</p>
    </div>

    <form @submit.prevent="login" class="space-y-5">
      <!-- Username Field -->
      <div class="space-y-1.5">
        <label for="username" class="text-[11px] font-bold text-surface-400 uppercase tracking-[0.15em] ml-1">
          {{ $t('auth.usernameLabel') }}
          <span class="text-red-400 ml-0.5">*</span>
        </label>
        <div class="relative group">
          <i class="pi pi-user absolute left-4 top-1/2 -translate-y-1/2 text-surface-500 group-focus-within:text-primary transition-colors z-10"></i>
          <InputText
            id="username"
            v-model.trim="auth.username"
            :invalid="!!auth.errorUsername"
            class="w-full !pl-11 !h-[44px] !rounded-xl !text-sm"
            :class="{'!border-red-500/50 !ring-red-500/20': auth.errorUsername}"
            :placeholder="$t('auth.usernamePlaceholder')"
            @update:modelValue="onValidate('username')"
          />
        </div>
        <Message v-if="auth.errorUsername" severity="error" variant="simple" size="small" class="ml-1 !text-red-400">{{ auth.errorUsername }}</Message>
      </div>

      <!-- Password Field -->
      <div class="space-y-1.5">
        <div class="flex items-center justify-between ml-1">
          <label for="password" class="text-[11px] font-bold text-surface-400 uppercase tracking-[0.15em]">
            {{ $t('auth.password') }}
            <span class="text-red-400 ml-0.5">*</span>
          </label>
          <NuxtLink to="/auth/forgot-password" class="text-[11px] font-bold text-primary/80 hover:text-primary transition-colors">
            {{ $t('auth.forgotPassword') }}
          </NuxtLink>
        </div>
        <div class="relative group">
          <i class="pi pi-lock absolute left-4 top-1/2 -translate-y-1/2 text-surface-500 group-focus-within:text-primary z-10 transition-colors"></i>
          <Password
            id="password"
            v-model="auth.password"
            :invalid="!!auth.errorPassword"
            :feedback="false"
            toggleMask
            class="w-full"
            :inputClass="['w-full !pl-11 !h-[44px] !rounded-xl !text-sm', {'!border-red-500/50 !ring-red-500/20': auth.errorPassword}]"
            placeholder="••••••••"
            @update:modelValue="onValidate('password')"
          />
        </div>
        <Message v-if="auth.errorPassword" severity="error" variant="simple" size="small" class="ml-1 !text-red-400">{{ auth.errorPassword }}</Message>
      </div>

      <!-- Remember Me -->
      <div class="flex items-center gap-2.5 ml-1">
        <Checkbox v-model="rememberMe" :binary="true" inputId="remember" />
        <label for="remember" class="text-sm text-surface-300 cursor-pointer font-medium select-none">
          {{ $t('auth.rememberPassword') }}
        </label>
      </div>

      <!-- Submit Button -->
      <Button
        type="submit"
        :loading="isLoading"
        class="w-full !h-[46px] !rounded-xl !text-sm !font-bold !tracking-wide !border-none hover:!-translate-y-0.5 active:!translate-y-0 !transition-all !duration-300"
      >
        <span class="flex items-center justify-center gap-2.5">
          {{ $t('auth.login').toUpperCase() }}
          <i class="pi pi-arrow-right text-xs"></i>
        </span>
      </Button>

      <!-- Landing Page Link -->
      <div class="text-center pt-2">
        <a 
          v-if="apiStore.companySetting?.has_website && apiStore.companySetting?.website"
          :href="apiStore.companySetting.website"
          target="_blank"
          class="text-xs font-bold text-surface-400 hover:text-white transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <i class="pi pi-home"></i>
          Xem Trang Giới Thiệu Công Ty
        </a>
        <NuxtLink 
          v-else
          to="/landing" 
          class="text-xs font-bold text-surface-400 hover:text-white transition-colors flex items-center justify-center gap-1.5"
        >
          <i class="pi pi-home"></i>
          Xem Trang Giới Thiệu Công Ty
        </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Cookies from "js-cookie";
import { APP_TOKEN_NAME } from "~/config/constants";
import { validateOnField, validateOnAllField } from "~/utils/validate";
import { useAuth } from "~/composables/auth";
import { showMessage } from "~/utils/global";
import { useApiStore } from "@/stores/api";

definePageMeta({
  layout: 'auth'
});

const { loginUser } = useAuth();
const apiStore = useApiStore();
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
      showMessage("success", t("text.success"), t("auth.msgWelcomeBack", { name: displayName }));
      
      if (data?.must_change_password) {
        showMessage("warn", t("auth.msgMustChangePassword"), t("auth.msgMustChangePasswordDesc"));
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
</style>
