import Vue from 'vue'

export default {
  login ({commit}, {usuario, clave}) {
    return new Promise((resolve, reject) => {
      Vue.http.post('/api/auth/login', {usuario, clave})
        .then((resp) => {
          if (resp.body.estado) {
            commit('setUsuario', resp.body.datos.token)
            commit('setLoggeado', true)
            Vue.localStorage.set('token', resp.body.datos.token)
            return resolve()
          } else {
            commit('setError', resp.body.datos)
            commit('setLoggeado', false)
            return reject(resp.body.datos)
          }
        }).catch((err) => {
          commit('setError', err)
          commit('setLoggeado', false)
          return reject(err)
        })
    })
  },
  logout ({commit}) {
    commit('deleteDataLogout')
    commit('setLoggeado', false)
    Vue.localStorage.remove('token')
  },
  estaLoggeado ({commit}) {
    let token = Vue.localStorage.get('token')
    if (token) {
      commit('setLoggeado', true)
      commit('setUsuario', token)
    }
  }
}
