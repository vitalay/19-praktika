<template>
  <TheNavbar />
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
export default {
  components: { TheNavbar },
};
</script>

<style scoped>
.container {
  max-width: 1200px; /* Ограничивает максимальную ширину контента */
  margin: 0 auto; /* Центрует контейнер */
  padding: 1rem; /* Внутренние отступы */
  box-sizing: border-box; /* Учет отступов в размере элемента */
}

.with-nav {
  margin-top: 70px; /* Отступ сверху для учета высоты навбара */
}

/* Опционально: стили для адаптивности */
@media (max-width: 768px) {
  .container {
    padding: 0.5rem; /* Уменьшение отступов на малых экранах */
  }

  .with-nav {
    margin-top: 60px; /* Адаптация отступа для меньших экранов */
  }
}
</style>
