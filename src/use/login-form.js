
import { computed, watch } from 'vue';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


export function useLoginForm() {


    const store = useStore();
    const router = useRouter();
    
        
        const { handleSubmit, isSubmitting, submitCount } = useForm();

        const isTooManyAttempts = computed(() => submitCount.value >= 3);

        watch(isTooManyAttempts, (val) => {
            if (val) {
                setTimeout(() => (submitCount.value = 0), 2000);
            }
        });

        const MIN_PASSWORD_LENGTH = 6;

        const { value: email, errorMessage: emailError, handleBlur: emailBlur } = useField(
            'email',
            yup.string().trim().required('Введите email').email('Введите корректный email')
        );

        const { value: password, errorMessage: passwordError, handleBlur: passwordBlur } = useField(
            'password',
            yup
                .string()
                .trim()
                .required('Введите пароль')
                .min(MIN_PASSWORD_LENGTH, `Минимальная длина пароля ${MIN_PASSWORD_LENGTH} символов`)
        );

        const onSubmit = handleSubmit(async values => {
             console.log('Form:', values)

             try {
                await store.dispatch('auth/login', values)
                router.push('/')
             } catch (e) {
           
             }

        
  });
        return {
            email,
            emailError,
            emailBlur,
            password,
            passwordError,
            passwordBlur,
            onSubmit,
            isSubmitting,
            isTooManyAttempts,
        }
    }
