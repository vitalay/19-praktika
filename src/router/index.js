import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
          layout: 'main'
      }
  },
  {
      path: '/help',
      name: 'help',
      component: () => import('../views/Help.vue'),
      meta: {
          layout: 'main'
      }
  },
  {
      path: '/Auth',
      name: 'Auth',
      component: () => import('../views/Auth.vue'),
      meta: {
          layout: 'auth'
      }
  },
]

const router = createRouter({
  history: createWebHistory('/19-praktika'),
  routes,
});

export default router;
