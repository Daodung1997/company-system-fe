<template>
  <DepartmentForm :id="id" @save-success="onSaveSuccess" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import DepartmentForm from "~/components/master/DepartmentForm.vue";

const route = useRoute();
const router = useRouter();
const id = computed(() => route.params.id as string);

const onSaveSuccess = () => router.push("/master/department");
</script>
