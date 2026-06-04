<template>
  <EmployeeForm @save-success="onSaveSuccess" />
</template>

<script setup lang="ts">
import EmployeeForm from "~/components/master/EmployeeForm.vue";

const router = useRouter();
const onSaveSuccess = () => router.push("/master/employee");
</script>
