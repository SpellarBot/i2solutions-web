import decode from 'jwt-decode'
export default {
  setError (state, payload) {
    state.error = payload
  },
  setUsuario (state, token) {
    state.usuario = decode(token).data
  },
  setLoggeado (state, estado) {
    state.loggeado = estado
  },
  deleteDataLogout (state) {
    state.usuario = null
  }
}
