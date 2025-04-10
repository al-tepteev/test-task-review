export function useButton() {
  const emit = defineEmits(["onClick"]);

  const onClick = () => emit("onClick");

  return {
    onClick,
  };
}
