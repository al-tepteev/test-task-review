import { reactive } from 'vue'

type ValidatorFn = (value: any) => string | null

interface FieldConfig {
  value: any
  validators: ValidatorFn[]
}

export function useValidation(fieldsConfig: Record<string, FieldConfig>) {
  const fields = reactive<Record<string, any>>({})
  const errors = reactive<Record<string, string | null>>({})

  // Инициализация полей и ошибок
  for (const key in fieldsConfig) {
    fields[key] = fieldsConfig[key].value
    errors[key] = null
  }

  // Функция валидации всех полей
  function validate(): boolean {
    let isValid = true
    for (const key in fieldsConfig) {
      const value = fields[key]
      const validators = fieldsConfig[key].validators

      for (const validator of validators) {
        const error = validator(value)
        
        if (error) {
          errors[key] = error
          isValid = false
          break
        } else {
          errors[key] = null
        }
      }
    }
    return isValid
  }

  return {
    fields,
    errors,
    validate
  }
}
