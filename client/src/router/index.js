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
import PuestoCrear from '@/components/PuestoCrear'
import DashboardEstablecimiento from '@/components/DashboardEstablecimiento'
import ResetClave from '@/components/ResetClave'
import AuthAdmin from './authAdmin'
import MatrizRiesgoMenu from '@/components/MatrizRiesgo/MatrizRiesgoMenu'
import MatrizRiesgoVer from '@/components/MatrizRiesgo/MatrizRiesgoVer'
import MatrizRiesgoAgregar from '@/components/MatrizRiesgo/MatrizRiesgoAgregar'
import administracionRiesgos from '@/components/AdministracionRiesgos/administracionRiesgos'

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
      beforeEnter: AuthAdmin
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
    }, {
      path: '/crearPuesto',
      name: 'CrearPuesto',
      component: PuestoCrear,
      beforeEnter: AuthGuard
    }, {
      path: '/dashboard/:empresaId',
      name: 'DashboardEstablecimiento',
      component: DashboardEstablecimiento,
      beforeEnter: AuthGuard
    }, {
      path: '/crearClave/:token',
      name: 'ResetClave',
      component: ResetClave
    }, {
      path: '/matrizRiesgo',
      name: 'MatrizRiesgoMenu',
      component: MatrizRiesgoMenu,
      beforeEnter: AuthAdmin
    }, {
      path: '/matrizRiesgo/ver',
      name: 'MatrizRiesgoVer',
      component: MatrizRiesgoVer,
      beforeEnter: AuthAdmin
    }, {
      path: '/matrizRiesgo/agregar',
      name: 'MatrizRiesgoAgregar',
      component: MatrizRiesgoAgregar,
      beforeEnter: AuthAdmin
    }, {
      path: '/riesgos',
      name: 'AdministracionRiesgos',
      component: administracionRiesgos,
      beforeEnter: AuthAdmin
    }
  ]
})
