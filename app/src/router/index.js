import { createRouter, createWebHistory } from 'vue-router'
import FroyoCreate from '@/views/liu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'froyo',
      component: FroyoCreate,
    },
  ],
})

export default router
