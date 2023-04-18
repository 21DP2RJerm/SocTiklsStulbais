import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import pProfile from '../views/Personalprofile.vue'
import searchTab from '../views/SearchTab.vue'

import LogIn from '../views/Register-LogIn/LogIn.vue'
import SignUp from '../views/Register-LogIn/SignUp.vue'

import Chess from '../views/Chess.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: pProfile
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/search',
      name: 'search',
      component: searchTab
    },
    {
      path: '/chess',
      name: 'chess',
      component: Chess
    },

  ]
})

export default router
