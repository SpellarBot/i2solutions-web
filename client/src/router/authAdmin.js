import { store } from '../store'

export default (to, from, next) => {
  store.dispatch('estaLoggeado')
  if (store.getters.loggeado) {
    if (store.getters.usuario.rol === 'admin-i2solutions') {
      next()
    } else {
      let empresaId = store.getters.usuario.empresasId
      next('/dashboard/' + empresaId)
    }
  } else {
    next('/')
  }
}
