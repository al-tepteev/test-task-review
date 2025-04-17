<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="space-y-4">
      <slot :fields="fields" :errors="errors" />
    </div>
    
    <Button type="submit" :value="submitLabel" />
  </form>
</template>

<script setup lang="ts">
import Button from "~/elements/Button/index.vue"
import { useValidation } from '~/composables/useValidation'

const props = defineProps({
  initialValues: {
    type: Object,
    required: true
  },
  validationSchema: {
    type: Object,
    required: true
  },
  submitLabel: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['submit'])
const { fields, errors, validate } = useValidation(props.initialValues, props.validationSchema)

function handleSubmit() {
  if (validate()) {
    emit('submit', { ...fields })
  }
}
</script>
