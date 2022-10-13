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
    path: '/CampList',
    component: () => import ('@/components/Camping/CampList.vue'),
  },
  {
    name: 'CampDetail',
    path: '/Camp/:campId',
    component: () => import ('@/components/Camping/CampDetail.vue'),
  },
  {
    name: 'CampRegister',
    path: '/CampRegister',
    component: () => import ('@/components/Camping/CampRegister.vue'),
  },
  {
    name: 'CampModify',
    path: '/CampModify/:campId',
    component: () => import ('@/components/Camping/CampModify.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
