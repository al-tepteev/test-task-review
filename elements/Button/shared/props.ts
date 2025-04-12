export const buttonProps = {
  value: {
    type: String,
    required: true
  },
  theme: {
    type: String as () => "primary" | "secondary",
    default: "primary"
  },
  size: {
    type: String as () => "sm" | "md" | "lg",
    default: "md"
  }
}