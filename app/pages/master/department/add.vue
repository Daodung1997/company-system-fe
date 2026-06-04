<template>
  <DepartmentForm @save-success="onSaveSuccess" />
</template>

<script setup lang="ts">
import DepartmentForm from "~/components/master/DepartmentForm.vue";

const router = useRouter();
const onSaveSuccess = () => router.push("/master/department");
</script>
