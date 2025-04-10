<template>
  <div class="wrapper-input">
    <input
      v-model="model"
      v-bind="$attrs"
      :class="inputClasses"
    />
  </div>
</template>

<script lang="ts" setup>
import { useInput } from "./composables/useInput"
import { useInputClasses } from "./composables/useInputClasses";
import { inputProps } from "./shared/props"

const props = defineProps<typeof inputProps>(inputProps);
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const inputClasses = useInputClasses(props)
const { model } = useInput(props, emit);
</script>
