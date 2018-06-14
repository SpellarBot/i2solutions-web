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
  crearArea ({commit}, {actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar, establecimientosId}) {
    return new Promise((resolve, reject) => {
      Vue.http.post('/api/web/areas', {actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar, establecimientosId})
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
  getAreas ({commit}) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/areas/establecimientos/' + 1)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setAreas', resp.body.datos)
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
  getAreaSola ({commit}, areaId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/areas/' + areaId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setAreaSelected', resp.body.datos)
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
  getPersonaSola ({commit}, personasId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/personas/' + personasId)
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
  updateEmpresa ({commit}, {empresasId, nombre, actividadComercial, razonSocial}) {
    return new Promise((resolve, reject) => {
      Vue.http.put('/api/web/empresas/' + empresasId, {nombre, actividadComercial, razonSocial})
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
  crearEstablecimento ({commit}, datos) {
    return new Promise((resolve, reject) => {
      console.log(datos)
      Vue.http.post('/api/web/establecimientos', datos)
        .then((resp) => {
          console.log(resp.body)
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
  updatePersona ({commit}, {personasId, correo, telefono, clave, usuario, rol}) {
    return new Promise((resolve, reject) => {
      Vue.http.put('/api/web/personas/' + personasId, {correo, telefono, clave, usuario, rol})
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
  updateArea ({commit}, {areasId, nombre, actividad, fotoUrl, metrosCuadrados, descripcionLugar}) {
    return new Promise((resolve, reject) => {
      Vue.http.put('/api/web/areas/' + areasId, {nombre, actividad, fotoUrl, metrosCuadrados, descripcionLugar})
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
