export const buttonProps = {
  value: {
    type: String,
    required: true
  },
  theme: {
    type: String as () => "primary" | "secondary",
    default: "primary"
  }
}