<template>
  <div>
    <!-- Header -->
    <div class="mb-8 text-center sm:text-left">
      <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
        {{ $t("auth.forgotPassword") }}
      </h2>
      <p class="text-surface-400 text-sm">
        {{ $t("auth.enterEmailResetPass") }}
      </p>
    </div>

    <form @submit.prevent="handleForgotPassword" class="space-y-5">
      <!-- Email Field -->
      <div class="space-y-1.5">
        <label class="text-[11px] font-bold text-surface-400 uppercase tracking-[0.15em] ml-1">
          {{ $t("auth.email") }}
          <span class="text-red-400 ml-0.5">*</span>
        </label>
        <div class="relative group">
          <i class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-surface-500 group-focus-within:text-primary transition-colors z-10"></i>
          <InputText
            id="email"
            v-model.trim="forgotPass.email"
            type="email"
            :invalid="!!forgotPass.errorEmail"
            class="w-full !rounded-xl !h-[44px] !pl-11 !text-sm"
            placeholder="name@company.com"
            @change="onValidate('email')"
          />
        </div>
        <AppMessageError :error="forgotPass.errorEmail" class="mt-2" />
      </div>

      <!-- Actions -->
      <div class="flex flex-col gap-3 pt-2">
        <Button
          :label="$t('auth.sendForgotPass')"
          :loading="isLoading"
          class="w-full !rounded-xl !h-[46px] !font-bold !tracking-wide !border-none hover:!-translate-y-0.5 active:!translate-y-0 !transition-all !duration-300"
          type="submit"
        />
        <Button
          :label="$t('auth.backToLogin')"
          severity="secondary"
          variant="text"
          class="w-full !rounded-xl !font-bold !text-surface-400 hover:!text-white hover:!bg-white/5"
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
      showMessage("success", t("text.success"), msg);
      router.push({
        path: "/auth/reset-password",
        query: { email: forgotPass.email },
      });
      isLoading.value = false;
    },
    errorCallback: (error: any) => {
      const errMsg = error?.response?.data?.messages?.message
        || error?.response?.data?.messages?.[0]
        || t("text.errorMessage");
      showMessage("error", t("text.error"), errMsg);
      isLoading.value = false;
    },
  });
};
</script>
