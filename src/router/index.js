import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = ({

  routes: [
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
  ]

})

 

export default router
