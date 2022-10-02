import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/Login',
    name: 'LoginSignup',
    component: () => import ('@/components/LoginSignup.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
