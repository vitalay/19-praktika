<template>
   <div class="container">
<router-view />
</div> 
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container {
  max-width: 1200px; /* Максимальная ширина для содержимого */
  margin: 0 auto; /* Центровка контейнера */
  padding: 1rem; /* Внутренние отступы */
  box-sizing: border-box; /* Учет отступов в размере элемента */
}
</style>

