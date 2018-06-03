import Vue from 'vue'

export default {
  login ({commit}, {usuario, clave}) {
    return new Promise((resolve, reject) => {
      Vue.http.post('/api/auth/login', {usuario, clave})
        .then((resp) => {
          if (resp.body.estado) {
            commit('setUsuario', resp.body.datos.token)
            Vue.localStorage.set('token', resp.body.datos.token)
            return resolve()
          } else {
            commit('setError', resp.body.datos)
            return reject(resp.body.datos)
          }
        }).catch((err) => {
          commit('setError', err)
          return reject(err)
        })
    })
  }
}
