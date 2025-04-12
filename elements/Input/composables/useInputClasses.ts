import { computed } from "vue";
import { styles } from "../shared/variables";
import type { InputPropsInterface } from "../types/InputProps";

export function useInputClasses(props: InputPropsInterface) {
    const inputClasses = computed(() => [
        styles.basicStyle,
        {
            [styles.borderRed]: props.invalid,
        },
    ]);
    return {
        inputClasses
    }
}
