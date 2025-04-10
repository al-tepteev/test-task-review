import type { InputPropsInterface } from "../types/InputProps";
import type { Emit } from "~/types/Emit";

export function useInput(props: InputPropsInterface, emit: Emit) {
    const model = computed({
        get: () => props.modelValue,
        set: (value: string) => emit('update:modelValue', value),
    });

    return { model };
}