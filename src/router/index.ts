import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '@/components/layouts/HomeLayout.vue'
import AuthLayout from '@/components/layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home/HomePage.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/Home/AboutPage.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: AuthLayout,
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('@/views/Auth/LoginPage.vue'),
        },
      ],
    },
    {
      path: '/registration',
      component: AuthLayout,
      children: [
        {
          path: '',
          name: 'registration',
          component: () => import('@/views/Auth/RegistrationPage.vue'),
        },
      ],
    },
  ],
})

export default router
