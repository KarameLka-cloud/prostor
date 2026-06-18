import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '@/components/layouts/HomeLayout.vue'

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
    // {
    //   path: 'auth',
    //   component: () => import('@/components/layouts/AuthLayout.vue'),
    //   children: [
    //     {
    //       path: 'login',
    //       name: 'login',
    //       component: () => import('@/views/Auth/LoginPage.vue'),
    //     },
    //     {
    //       path: 'registration',
    //       name: 'registration',
    //       component: () => import('@/views/Auth/RegistrationPage.vue'),
    //     },
    //   ],
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('@/views/Home/AboutPage.vue'),
    // },
  ],
})

export default router
