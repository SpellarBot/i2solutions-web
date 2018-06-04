import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import AuthGuard from './auth'
import AuthLogin from './authLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      beforeEnter: AuthLogin
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: AuthGuard
    }
  ]
})
