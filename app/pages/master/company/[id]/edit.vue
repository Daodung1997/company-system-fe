<template>
  <CompanyForm :id="id" @save-success="onSaveSuccess" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import CompanyForm from "~/components/master/CompanyForm.vue";

const route = useRoute();
const router = useRouter();
const id = computed(() => route.params.id as string);

const onSaveSuccess = () => router.push("/master/company");
</script>
