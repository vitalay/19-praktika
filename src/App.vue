<template>
 <!-- <MainLayout /> -->
  <!--<AuthLayout /> -->

  <component /> -->
  
</template>

 <script>
 import { useRouter } from 'vue-router';
import MainLayout from './layout/MainLayout.vue';
import AuthLayout from './layout/AuthLayout.vue';
export default {
  setup() {
    const router = useRouter();
    return {
      router
    }
  },
  components: {
    MainLayout,
    AuthLayout
  }
}

</script>

