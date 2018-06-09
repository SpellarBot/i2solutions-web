import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import EmpresaCrear from '@/components/EmpresaCrear'
import VerEmpresas from '@/components/VerEmpresas'
import AuthGuard from './auth'
import AuthLogin from './authLogin'
import EmpresaEditar from '@/components/EmpresaEditar'

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
    }, {
      path: '/crearEmpresa',
      name: 'CrearEmpresa',
      component: EmpresaCrear,
      beforeEnter: AuthGuard
    }, {
      path: '/empresas',
      name: 'Empresas',
      component: VerEmpresas,
      beforeEnter: AuthGuard
    }, {
      path: '/editarEmpresa',
      name: 'EditarEmpresa',
      component: EmpresaEditar,
      beforeEnter: AuthGuard
    }
  ]
})
