import { store } from '../store'

export default (to, from, next) => {
  store.dispatch('estaLoggeado')
  if (store.getters.loggeado) {
    next()
  } else {
    next('/')
  }
}
