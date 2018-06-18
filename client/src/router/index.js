import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import EmpresaCrear from '@/components/EmpresaCrear'
import PersonasCrear from '@/components/PersonaCrear'
import VerEmpresas from '@/components/VerEmpresas'
import VerPersonas from '@/components/VerPersonas'
import verAreas from '@/components/verAreas'
import AuthGuard from './auth'
import AuthLogin from './authLogin'
import EmpresaEditar from '@/components/EmpresaEditar'
import PersonaEditar from '@/components/PersonaEditar'
import AreaEditar from '@/components/AreaEditar'
import EstablecimientoCrearDialog from '@/components/EstablecimientoCrear'
import EstablecimientoVer from '@/components/EstablecimientoVer'
import VerPuestos from '@/components/VerPuestos'
import PuestoEditar from '@/components/PuestoEditar'

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
      path: '/personas',
      name: 'Personas',
      component: VerPersonas,
      beforeEnter: AuthGuard
    }, {
      path: '/areas',
      name: 'Areas',
      component: verAreas,
      beforeEnter: AuthGuard
    }, {
      path: '/crearPersona',
      name: 'CrearPersona',
      component: PersonasCrear,
      beforeEnter: AuthGuard
    }, {
      path: '/editarEmpresa',
      name: 'EditarEmpresa',
      component: EmpresaEditar,
      beforeEnter: AuthGuard
    }, {
      path: '/editarArea',
      name: 'EditarArea',
      component: AreaEditar,
      beforeEnter: AuthGuard
    }, {
      path: '/editarPersona',
      name: 'EditarPersona',
      component: PersonaEditar,
      beforeEnter: AuthGuard
    }, {
      path: '/crearEstablecimiento',
      name: 'crearEstablecimiento',
      component: EstablecimientoCrearDialog,
      beforeEnter: AuthGuard
    }, {
      path: '/EstablecimientoVer',
      name: 'EstablecimientoVer',
      component: EstablecimientoVer,
      beforeEnter: AuthGuard
    }, {
      path: '/puestos',
      name: 'Puestos',
      component: VerPuestos,
      beforeEnter: AuthGuard
    }, {
      path: '/editarPuesto',
      name: 'EditarPuesto',
      component: PuestoEditar,
      beforeEnter: AuthGuard
    }
  ]
})
