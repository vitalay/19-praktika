<template>


<component  is="layout + '-layout'" v-if="layout" />
  
</template>

 <script>
 
 import { useRouter } from 'vue-router';
import MainLayout from './layout/MainLayout.vue';
import AuthLayout from './layout/AuthLayout.vue';
import { computed } from 'vue';
export default {
  setup() {
    const router = useRouter();
    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: {
    MainLayout,
    AuthLayout
  }
}

</script>

