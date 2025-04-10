import type { InputPropsInterface } from "../types/InputProps";
import type { EmitFn } from "../types/EmitFn";

export function useInput(props: InputPropsInterface, emit: EmitFn) {
    const model = computed({
        get: () => props.modelValue,
        set: (value: string) => emit('update:modelValue', value),
    });

    return { model };
}