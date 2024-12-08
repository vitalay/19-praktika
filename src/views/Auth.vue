<template>
    <form class="card" @submit.prevent >
        <h1>Войти в систему</h1>

        <div class="form-control">
            <label for="email">Email</label>
            <input type="email" id="email">
        </div>

        <div class="form-control">
            <label for="password">Пароль</label>
            <input type="password" id="password">
        </div>  

        <button class="btn primary" type="submit">Войти</button>

    </form>
</template>

<script>
export default {

     
    
}
</script>


<style scoped>
.card {
  max-width: 400px; /* Ограничиваем ширину формы */
  margin: 2rem auto; /* Центруем форму на странице */
  padding: 2rem; /* Внутренние отступы */
  background-color: #fff; /* Фон формы */
  border-radius: 8px; /* Скругленные углы */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Тень для эффекта объема */
  box-sizing: border-box; /* Учитываем отступы и границы */
  text-align: center; /* Выравниваем текст по центру */
}

h1 {
  font-size: 1.5rem; /* Размер заголовка */
  margin-bottom: 1rem; /* Отступ снизу */
  color: #333; /* Темный текст */
}

.form-control {
  margin-bottom: 1.5rem; /* Отступ между элементами формы */
  text-align: left; /* Выравнивание текста меток */
}

label {
  font-size: 0.9rem; /* Размер шрифта метки */
  color: #555; /* Нейтральный цвет текста */
  display: block; /* Метка занимает всю ширину строки */
  margin-bottom: 0.5rem; /* Отступ снизу */
}

input {
  width: 100%; /* Поле ввода занимает всю ширину родителя */
  padding: 0.8rem; /* Внутренние отступы */
  border: 1px solid #ccc; /* Цвет рамки */
  border-radius: 4px; /* Скругленные углы */
  font-size: 1rem; /* Размер шрифта */
  box-sizing: border-box; /* Учитываем отступы и границы */
  transition: border-color 0.3s ease; /* Плавный переход для фокуса */
}

input:focus {
  border-color: #007bff; /* Цвет рамки при фокусе */
  outline: none; /* Убираем стандартный фокус */
}

.btn {
  width: 100%; /* Кнопка занимает всю ширину формы */
  padding: 0.8rem; /* Внутренние отступы */
  font-size: 1rem; /* Размер шрифта */
  border: none; /* Убираем рамку */
  border-radius: 4px; /* Скругленные углы */
  cursor: pointer; /* Указатель при наведении */
  transition: background-color 0.3s ease; /* Плавный переход для цвета */
}

.btn.primary {
  background-color: #007bff; /* Основной цвет кнопки */
  color: #fff; /* Белый текст */
}

.btn.primary:hover {
  background-color: #0056b3; /* Более темный цвет при наведении */
}
</style>
