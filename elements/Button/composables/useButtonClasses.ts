import { computed } from "vue";
import { styles } from "../shared/variables";

export function useButtonClasses(theme: string, size: string) {
  const buttonClasses = computed(() => [
    styles.basicStyle,
    {
      [styles.primaryStyle]: !theme || theme === "primary",
      [styles.secondaryStyle]: theme === "secondary",
      "px-3 py-1 text-sm": size === "sm",
      "px-4 py-2 text-base": !size || size === "md",
      "px-6 py-3 text-lg": size === "lg",
    },
    
  ]);

  return {
    buttonClasses,
  };
}
