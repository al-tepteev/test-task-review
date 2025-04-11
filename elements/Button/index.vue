<template>
    <div v-if="value" class="wrapper-btn">
        <button 
            type="submit" 
            class="tw-button"
            :class="buttonClasses"
            v-text="value"
            @click="onClick"
        ></button>
    </div>
</template>

<script setup lang="ts">
import { buttonProps } from "./shared/props";
import { useButtonClasses } from "./composables/useButtonClasses";
import { useButton } from "./composables/useButton";

const emit = defineEmits(["onClick"]);
const { theme } = defineProps(buttonProps);

const { buttonClasses } = useButtonClasses(theme)

const { onClick } = useButton(emit);
</script>
