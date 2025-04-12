export const required = (message = 'Обязательное поле') => (value: any) =>
  value ? null : message

export const minLength = (length: number, message?: string) => (value: string) =>
  value.length >= length ? null : message || `Минимум ${length} символов`

export const isEmail = (message = 'Неверный формат email') => (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : message
