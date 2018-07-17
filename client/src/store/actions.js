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
  crearPuesto ({commit}, {nombre, descripcionLugar, areaId}) {
    return new Promise((resolve, reject) => {
      Vue.http.post('/api/web/puestos', { nombre, descripcionLugar, areasId: areaId })
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
      Vue.http.get('/api/web/administrador/empresas')
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
  getEstablecimientos ({commit}, empresaId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/establecimientos/' + empresaId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setEstablecimientos', resp.body.datos)
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
  getPuestosFromEstablecimiento ({commit}, establecimientoId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/areas/puestos/establecimientos/' + establecimientoId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setAreasPuestos', resp.body.datos)
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
  getNovedadesFromEstablecimiento ({commit}, establecimientoId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/novedades/establecimientos/' + establecimientoId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setNovedadesEstablecimientos', resp.body.datos)
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
  getNovedadesFromPuestos ({commit}, puestosId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/novedades/puestos/' + puestosId)
        .then((resp) => {
          if (resp.body.estado) {
            console.log('Novedades no Atendida', resp.body.datos.novedadesNoAtendidas)
            commit('setNovedadesPuestos', resp.body.datos)
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
  getRiesgosSolo ({commit}, puestosId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/riesgos/puestos/' + puestosId)
        .then((resp) => {
          if (resp.body.estado) {
            console.log('Novedades no Atendida', resp.body.datos)
            commit('setNovedadesPuestos', resp.body.datos)
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
  getAreas ({commit}, establecimientoId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/areas/establecimientos/' + establecimientoId)
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
  getPuestos ({commit}, areaId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/puestos/areas/' + areaId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setPuestos', resp.body.datos)
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
  getPuestoSolo ({commit}, puestoId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/puestos/' + puestoId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setPuestoSelected', resp.body.datos)
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
  updatePuesto ({commit}, {nombre, descripcion, puestoId}) {
    return new Promise((resolve, reject) => {
      Vue.http.put('/api/web/puestos/' + puestoId, {nombre, descripcion})
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
  deletePuesto ({commit}, puestosId) {
    return new Promise((resolve, reject) => {
      Vue.http.delete('/api/web/puestos/' + puestosId)
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
  getEmpresaSola ({commit}, empresasId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/empresas/' + empresasId)
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
  getEstablecimientosFront ({commit}, empresasId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/principal/establecimientos/empresas/' + empresasId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setEstablecimientos', resp.body.datos)
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
  getEstablecimientoSoloID ({commit}, establecimientoId) {
    commit('setEstablecimientoSelected', establecimientoId)
  },
  getAreaSelected ({commit}, area) {
    commit('setAreaSelected', area)
  },
  deleteEmpresa ({commit}, empresaId) {
    return new Promise((resolve, reject) => {
      Vue.http.delete('/api/web/empresas/' + empresaId)
        .then((resp) => {
          if (resp.body.estado) {
            console.log('entre')
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
  deletePersona ({commit}, personaId) {
    return new Promise((resolve, reject) => {
      Vue.http.delete('/api/web/personas/' + personaId)
        .then((resp) => {
          if (resp.body.estado) {
            console.log('entre')
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
  deleteEstablecimiento ({commit}, datos) {
    return new Promise((resolve, reject) => {
      Vue.http.delete('/api/web/establecimientos/' + datos.datos.establecimientoId)
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
  deleteArea ({commit}, areasId) {
    return new Promise((resolve, reject) => {
      Vue.http.delete('/api/web/areas/' + areasId)
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
            commit('setPersonaSelected', resp.body.datos)
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
  updateEmpresa ({commit}, {empresaId, nombre, actividadComercial, razonSocial, urlFoto}) {
    console.log({ empresaId, nombre })
    return new Promise((resolve, reject) => {
      Vue.http.put('/api/web/empresas/' + empresaId, {nombre, actividadComercial, razonSocial, urlFoto})
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
  updateEstablecimiento ({commit}, {nombres, direccion, ruc, empresasId, establecimientoId}) {
    console.log({nombres, direccion, ruc, empresasId})
    return new Promise((resolve, reject) => {
      Vue.http.put('/api/web/establecimientos/' + establecimientoId, {nombres, direccion, ruc, empresasId})
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
      Vue.http.put('/api/web/personas/' + personasId, { correo, telefono, clave, usuario, rol })
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
  },
  getCapacitacionesFromEstablecimiento ({commit}, establecimientoId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/capacitaciones/establecimientos/' + establecimientoId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setCapacitaciones', resp.body.datos)
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
  updateCapacitacion ({commit}, {tema, descripcion, fechaCapacitacion, nombre, capacitacionId}) {
    return new Promise((resolve, reject) => {
      Vue.http.put('/api/web/capacitaciones/' + capacitacionId, { tema, descripcion, fechaCapacitacion, nombre })
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
  getAccidentesFromEstablecimiento ({commit}, establecimientoId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/accidentes/establecimientos/' + establecimientoId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setAccidentes', resp.body.datos)
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
  updateAccidente ({commit}, {nombre, descripcion, fecha, heridos, muertos, atendidoEnEmpresa, puestosId, accidentesId}) {
    return new Promise((resolve, reject) => {
      Vue.http.put('/api/web/accidentes/' + accidentesId, { nombre, descripcion, fecha, heridos, muertos, atendidoEnEmpresa, puestosId })
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
  getAccidentesFromPuesto ({commit}, puestoId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/accidentes/puestos/' + puestoId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setAccidentes', resp.body.datos)
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
  emptyAccidentes ({commit}) {
    commit('setAccidentes', null)
  },
  emptyAreasPuestos ({commit}) {
    commit('setAreasPuestos', null)
  }
}
