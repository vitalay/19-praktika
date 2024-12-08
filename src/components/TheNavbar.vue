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

import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {

  setup() {
    const router = useRoute();
    const store = useStore();
  }
   
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2a2a72;
  color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar h3 {
  margin: 0;
  font-size: 1.5rem;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  margin-left: 1.5rem;
}

.navbar-menu a {
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 4px;
}

.navbar-menu a:hover {
  background-color: #fff;
  color: #2a2a72;
}

.navbar-menu .router-link-active {
  background-color: #fff;
  color: #2a2a72;
}
</style>
