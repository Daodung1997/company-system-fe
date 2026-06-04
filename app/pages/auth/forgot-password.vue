<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div class="space-y-2">
      <h2 class="text-3xl font-black text-surface-900 dark:text-white tracking-tighter uppercase italic">
        {{ $t("auth.forgotPassword") }}
      </h2>
      <p class="text-surface-500 dark:text-surface-400 font-medium">
        {{ $t("auth.enterEmailResetPass") }}
      </p>
    </div>

    <form @submit.prevent="handleForgotPassword" class="space-y-6">
      <div class="group">
        <label class="block text-[10px] font-black text-surface-400 group-focus-within:text-primary uppercase tracking-[0.2em] mb-2 px-1 transition-colors">
          {{ $t("auth.email") }}
          <span class="text-red-500 ml-1">*</span>
        </label>
        <div class="relative">
          <i class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors"></i>
          <InputText
            id="email"
            v-model.trim="forgotPass.email"
            type="email"
            :invalid="!!forgotPass.errorEmail"
            class="w-full !rounded-2xl !py-4 !pl-11 focus:!ring-4 focus:!ring-primary/10 transition-all"
            placeholder="name@company.com"
            @change="onValidate('email')"
          />
        </div>
        <AppMessageError :error="forgotPass.errorEmail" class="mt-2" />
      </div>

      <div class="flex flex-col gap-4">
        <Button
          :label="$t('auth.sendForgotPass')"
          :loading="isLoading"
          class="w-full !rounded-2xl !py-4 !font-black !tracking-tight !shadow-xl !shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          type="submit"
        />
        <Button
          :label="$t('auth.haveAnPassword') || 'Quay về đăng nhập'"
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
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from '~/composables/auth';
import { useI18n } from "vue-i18n";
import { showMessage } from "~/utils/global";
import { validateOnField, validateOnAllField } from "~/utils/validate";

definePageMeta({
  layout: 'auth'
});

const router = useRouter();
const { t } = useI18n();
const { forgotPassword } = useAuth();

const FIELD_VALIDATIONS = {
  email: {
    transitionKey: "auth.email",
    types: ["require", "validEmail"],
    errorKey: "errorEmail",
  },
};

const isLoading = ref(false);
const forgotPass = reactive({
  email: "",
  errorEmail: "",
});

const onValidate = (field: string) => {
  return validateOnField(field, forgotPass, forgotPass, FIELD_VALIDATIONS, t);
};

const handleForgotPassword = () => {
  const check = validateOnAllField(forgotPass, forgotPass, FIELD_VALIDATIONS, t);
  if (!check) return;
  
  if (isLoading.value) return;
  isLoading.value = true;

  forgotPassword({
    data: { email: forgotPass.email },
    successCallback: (response: any) => {
      const msg = response?.data?.data?.message || t("auth.sendResetSuccess");
      showMessage("success", t("text.success") || "Thành công", msg);
      router.push({
        path: "/auth/reset-password",
        query: { email: forgotPass.email },
      });
      isLoading.value = false;
    },
    errorCallback: (error: any) => {
      const errMsg = error?.response?.data?.messages?.message
        || error?.response?.data?.messages?.[0]
        || t("text.errorMessage") || "Có lỗi xảy ra.";
      showMessage("error", t("text.error") || "Lỗi", errMsg);
      isLoading.value = false;
    },
  });
};
</script>
