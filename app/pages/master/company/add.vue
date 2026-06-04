<template>
  <CompanyForm @save-success="onSaveSuccess" />
</template>

<script setup lang="ts">
import CompanyForm from "~/components/master/CompanyForm.vue";

const router = useRouter();
const onSaveSuccess = () => router.push("/master/company");
</script>
