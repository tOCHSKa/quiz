import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SubscribeView from '@/views/SubscribeView.vue'
import ProfilView from '@/views/ProfilView.vue'
import Layout from '@/components/Layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: HomeView
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    component: SubscribeView
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfilView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
