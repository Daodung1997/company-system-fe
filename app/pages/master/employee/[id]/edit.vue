<template>
  <EmployeeForm :id="route.params.id" @save-success="onSaveSuccess" />
</template>

<script setup lang="ts">
import EmployeeForm from "~/components/master/EmployeeForm.vue";

const route = useRoute();
const router = useRouter();
const onSaveSuccess = () => router.push("/master/employee");
</script>
