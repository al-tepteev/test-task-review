<template>
  <BaseForm
    :initial-values="initialValues"
    :validation-schema="validationSchema"
    submit-label="Отправить"
    @submit="handleFormSubmit"
  >
    <template #default="{ fields, errors }">
      <Input v-model="fields.email" type="email" placeholder="Введите Email"/>
      <Input v-model="fields.password" type="password" placeholder="Введите пароль"/>
    </template>
  </BaseForm>
</template>

<script setup lang="ts">
import BaseForm from "~/components/Block/BaseForm/index.vue";
import Input from "~/elements/Input/index.vue"
import { useAuthForm } from "~/features/auth/composables/useAuthForm";

const { 
    initialValues,
    validationSchema,
    handleFormSubmit
} = useAuthForm();
</script>
