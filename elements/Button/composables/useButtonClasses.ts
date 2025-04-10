import { computed } from "vue";
import { styles } from "../shared/variables";

export function useButtonClasses(theme: string) {
  const buttonClasses = computed(() => [
    styles.basicStyle,
    {
      [styles.primaryStyle]: !theme || theme === "primary",
      [styles.secondaryStyle]: theme === "secondary",
    },
  ]);

  return {
    buttonClasses,
  };
}
