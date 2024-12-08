import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';

const routes = [
  {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
          layout: 'main',
          auth: true
      }
  },
  {
      path: '/help',
      name: 'help',
      component: () => import('../views/Help.vue'),
      meta: {
          layout: 'main',
          auth: true
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

router.beforeEach((to, from, next) => {
const requiredAuth = to.meta.auth;

if (requiredAuth && store.getters['auth/isAuthenticated']) {
  next();
} else {
  if (requiredAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth');
  } else {
    next();
  }

}
});

export default router;
