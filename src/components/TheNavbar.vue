<template>
  <nav class="navbar">
    <h3>Online Bank</h3>
    <ul class="navbar-menu">
      <li><router-link to="/">Заявки</router-link></li>
       <li><router-link to="/">Помощь</router-link></li>
      <li><a href="#">Сообщение</a></li>
      <li><a href="#">выход</a></li>

    </ul>

     
   

  </nav>
</template>

<script>
export default {
   
};
</script>

<style scoped>  
/* Общие стили */
body {
  font-family: Arial, sans-serif;
}

/* Навигационное меню */
.navbar {
  background-color: #f8f9fa;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar h3 {
  margin: 0;
  color: #212529;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.navbar li {
  margin-left: 15px;
}

.navbar a {
  text-decoration: none;
  color: #007bff;
}

.navbar a:hover {
  text-decoration: underline;
}


</style>
