import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_HOME, ROUTES_AUTH } from '@/constants/routes'
import HomeLayout from '@/components/layouts/HomeLayout.vue'
import AuthLayout from '@/components/layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Пути home
    {
      path: ROUTES_HOME.ROOT.path,
      component: HomeLayout,
      children: [
        {
          path: '',
          name: ROUTES_HOME.HOME.name,
          component: () => import('@/views/Home/HomePage.vue'),
        },
        {
          path: ROUTES_HOME.ABOUT.path,
          name: ROUTES_HOME.ABOUT.name,
          component: () => import('@/views/Home/AboutPage.vue'),
        },
      ],
    },

    // Пути auth
    {
      path: ROUTES_HOME.ROOT.path,
      component: AuthLayout,
      children: [
        {
          path: ROUTES_AUTH.LOGIN.path,
          name: ROUTES_AUTH.LOGIN.name,
          component: () => import('@/views/Auth/LoginPage.vue'),
        },
        {
          path: ROUTES_AUTH.REGISTRATION.path,
          name: ROUTES_AUTH.REGISTRATION.name,
          component: () => import('@/views/Auth/RegistrationPage.vue'),
        },
      ],
    },
  ],
})

export default router
