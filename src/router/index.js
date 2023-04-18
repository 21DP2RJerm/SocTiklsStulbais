import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import pProfile from '../views/Personalprofile.vue'
import searchTab from '../views/SearchTab.vue'

import LogIn from '../views/Register-LogIn/LogIn.vue'
import SignUp from '../views/Register-LogIn/SignUp.vue'
import { getUserState } from '../firebase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresUnauth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: pProfile,
      meta: { requiresUnauth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn,
      meta: { requiresUnauth: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      meta: { requiresUnauth: true }
    },
    {
      path: '/search',
      name: 'search',
      component: searchTab,
      meta: { requiresUnauth: true }
    },

  ]
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth)

  const isAuth = await getUserState()

  if (requiresAuth && !isAuth) next('/login')
  else if (requiresUnauth && isAuth) next('/')
  else next()
})

export default router