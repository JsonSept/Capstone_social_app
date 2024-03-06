import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'

const routes = [
  {
    path: '/start',
    name: 'start',
    component: StartView
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import( '../views/SignupView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import( '../views/UserInfoView.vue')
  },
  {
    path: '/chats',
    name: 'chats',
    component: () => import( '../views/ChatsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
