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

const props = defineProps(inputProps);
const emit = defineEmits(["update:modelValue"]);

const inputClasses = useInputClasses(props)
const { model } = useInput(props, emit);
</script>
