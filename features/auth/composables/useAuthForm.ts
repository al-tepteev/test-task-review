// features/auth/composables/useAuthForm.ts
import { required, isEmail, minLength } from "~/utils/validators";

export function useAuthForm() {
    // Определяем начальные значения формы
    const initialValues = reactive({
        email: '',
        password: ''
    });

    // Определяем схему валидации
    const validationSchema = {
        email: [required(), isEmail()],
        password: [required(), minLength(10)]
    };

    // Обработчик отправки формы
    function handleFormSubmit(values: Record<string, any>) {
        console.log('Форма отправлена с данными:', values);
    }

    return {
        initialValues,
        validationSchema,
        handleFormSubmit
    }
}