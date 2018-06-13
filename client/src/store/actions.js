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
  },
  crearEmpresa ({commit}, {nombre, actividadComercial, razonSocial, direccion, ruc}) {
    return new Promise((resolve, reject) => {
      Vue.http.post('/api/web/empresas', {nombre, actividadComercial, razonSocial, direccion, ruc})
        .then((resp) => {
          if (resp.body.estado) {
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
  },
  crearPersona ({commit}, {nombres, apellidos, correo, cedula, clave, fechaNacimiento, telefono, perfilOcupacional, usuario, rol}) {
    return new Promise((resolve, reject) => {
      Vue.http.post('/api/web/personas', {nombres, apellidos, correo, cedula, clave, fechaNacimiento, telefono, perfilOcupacional, usuario, rol})
        .then((resp) => {
          if (resp.body.estado) {
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
  },
  getEmpresas ({commit}) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/empresas')
        .then((resp) => {
          if (resp.body.estado) {
            commit('setEmpresas', resp.body.datos)
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
  },
  getPersonas ({commit}) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/personas')
        .then((resp) => {
          if (resp.body.estado) {
            commit('setPersonas', resp.body.datos)
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
  },
  getEmpresaSola ({commit}, empresaId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/empresas/' + empresaId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setEmpresaSelected', resp.body.datos)
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
  },
  getPersonaSola ({commit}, personaId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/personas/' + personaId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setPersoaSelected', resp.body.datos)
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
  },
  updateEmpresa ({commit}, {empresaId, nombre, actividadComercial, razonSocial}) {
    return new Promise((resolve, reject) => {
      Vue.http.put('/api/web/empresas/' + empresaId, {nombre, actividadComercial, razonSocial})
        .then((resp) => {
          if (resp.body.estado) {
            console.log('done')
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
  },
  updatePersona ({commit}, {personaId, correo, telefono, clave, usuario, rol}) {
    return new Promise((resolve, reject) => {
      Vue.http.put('/api/web/personas/' + personaId, {correo, telefono, clave, usuario, rol})
        .then((resp) => {
          if (resp.body.estado) {
            console.log('done')
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
