<template>
    <form class="card" @submit.prevent="onSubmit" >
        <h1>Войти в систему</h1>

        <div :class="['form-control', {invalid: emailError}]">

            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" @blur="emailBlur">
            <small v-if="emailError">{{ emailError }}</small>
        </div>

        <div :class="['form-control', {invalid: passwordError}]">
            <label for="password">Пароль</label>
            <input type="password" id="password" v-model="password" @blur="passwordBlur">
            <small v-if="passwordError">{{ passwordError }}</small>
        </div>  

        <button class="btn primary" :disabled="isSubmitting || isTooManyAttempts" type="submit">Войти</button>
        <div class="text-danger" v-if="isTooManyAttempts"> 
            Слишком много попыток попробуйте позже
        </div>

    </form>
</template>

<script>
import {computed, watch} from 'vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate';

export default {

    setup() {
   

        const isTooManyAttempts = computed(() => submitCount.value >= 3)    
 
     
      

        const { handleSubmit, isSubmitting, submitCount} = useForm();

        watch(isTooManyAttempts, val => {
            if (val) {
                setTimeout(() => submitCount.value = 0, 2000)
            }
        })

      const {value: email, errorMessage: emailError , handleBlur: emailBlur  } =  useField(
        'email',
        yup
        .string()
        .trim()
        .required( 'Введите email' )
        .email('Введите корректный email')
    )
         const MIN_PASSWORD_LENGTH = 6

      const { value: password, errorMessage: passwordError , handleBlur: passwordBlur  } =  useField(
        'password',
        yup
        .string()
        .trim()
        .required('Введите пароль')
        .min(MIN_PASSWORD_LENGTH, `Минимальная длина пароля ${MIN_PASSWORD_LENGTH}  символов`)
    )
     
     const onSubmit = handleSubmit((values) => {
        
     })

      return {
        email,
        emailError,
        emailBlur,
        password,
        passwordError,
        passwordBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttempts

      }
    
    }

     
    
}
</script>


<style scoped>
/* Общие стили */
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    margin: 0;
}

/* Стилизация карточки */
.card {
    width: 400px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
}

/* Заголовок */
.card h1 {
    text-align: center;
    margin-bottom: 30px;
}

/* Поля ввода */
.form-control {
    margin-bottom: 15px;
}

.form-control label {
    display: block;
    margin-bottom: 5px;
}

.form-control input {
    width: 100%;
    padding: 12px 20px;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

/* Ошибки */
.invalid input {
    border-color: red;
}

.form-control small {
    color: red;
    display: block;
    margin-top: 5px;
}

/* Кнопка */
.btn {
    padding: 12px 20px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.primary {
    background-color: #007bff;
    color: white;
}

.primary:hover {
    background-color: #0056b3;
}

</style>
