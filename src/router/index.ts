import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AluraTrackerView from '@/views/AluraTrackerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/login',
      name: 'login',
      component: LoginView
    },
    {
      path:'/aluratracker',
      name:'aluraTracker',
      component: AluraTrackerView
    }
  ]
})

export default router
