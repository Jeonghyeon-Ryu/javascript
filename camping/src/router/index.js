import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    name: 'LoginSignup',
    path: '/Login',
    component: () => import ('@/components/User/LoginSignup.vue'),
  },
  {
    name: 'UserInfo',
    path: '/MyInfo',
    component: () => import ('@/components/User/UserInfo.vue'),
  },
  {
    name: 'CampList',
    path: '/Camp',
    component: () => import ('@/components/Camping/CampList.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
