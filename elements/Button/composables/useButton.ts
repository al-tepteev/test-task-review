import type { Emit } from "~/types/Emit";

export function useButton(emit: Emit ) {
  const onClick = () => emit("onClick");

  return {
    onClick,
  };
}
