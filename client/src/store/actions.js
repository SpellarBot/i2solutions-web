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
  crearEmpresa ({commit}, {nombre, actividadComercial, razonSocial, urlFoto, direccion, ruc}) {
    return new Promise((resolve, reject) => {
      Vue.http.post('/api/web/empresas', {nombre, actividadComercial, razonSocial, urlFoto, direccion, ruc})
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
  crearPersona ({commit}, {nombres, apellidos, correo, cedula, clave, fechaNacimiento, telefono, perfilOcupacional, usuario, rol, puestosId}) {
    return new Promise((resolve, reject) => {
      Vue.http.post('/api/web/personas', {nombres, apellidos, correo, cedula, clave, fechaNacimiento, telefono, perfilOcupacional, usuario, rol, puestosId})
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
  getNovedadesFromAreas ({commit}, areasId) {
    console.log('entre')
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/novedades/areas/' + areasId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setNovedadesAreas', resp.body.datos)
            console.log(resp.body.datos)
            return resolve()
          } else {
            commit('setError', resp.body.datos)
            console.log('error posible', resp.body.datos)
            return reject(resp.body.datos)
          }
        }).catch((err) => {
          commit('setError', err)
          console.log('error:', err)
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
  getEquiposFromPuestos ({commit}, puestosId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/equipos/puestos/' + puestosId)
        .then((resp) => {
          if (resp.body.estado) {
            console.log('Equipos: ', resp.body.datos)
            commit('setEquiposPuestos', resp.body.datos)
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
  getEquiposFromAreas ({commit}, areasId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/equipos/areas/' + areasId)
        .then((resp) => {
          if (resp.body.estado) {
            console.log('Equipos: ', resp.body.datos)
            commit('setEquiposAreas', resp.body.datos)
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
  getRiesgosFromPuestos ({commit}, puestosId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/riesgos/puestos/' + puestosId)
        .then((resp) => {
          if (resp.body.estado) {
            console.log('Riesgos: ', resp.body.datos)
            commit('setRiesgosPuestos', resp.body.datos)
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
      Vue.http.get('/api/web/areasDetalle/establecimientos/' + establecimientoId)
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
  updatePuesto ({commit}, {nombre, descripcion, puestoId, fotoUrl}) {
    let image = fotoUrl.replace(/^data:image\/(png|jpg|gif|jpeg);base64,/, '')
    return new Promise((resolve, reject) => {
      Vue.http.post('https://api.imgur.com/3/image', { image }, {headers: { 'Authorization': 'Client-ID 32ac2643d018e56' }})
          .then((resp) => {
            let fotoUrl = resp.body.data.link
            return fotoUrl
          })
          .then((fotoUrl) => {
            return Vue.http.put('/api/web/puestos/' + puestoId, {nombre, descripcion, fotoUrl})
          })
        .then((resp) => {
          console.log(resp.body.estado)
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
  deleteCapacitaciones ({commit}, capacitacionesId) {
    return new Promise((resolve, reject) => {
      Vue.http.delete('/api/web/capacitaciones/' + capacitacionesId)
        .then((resp) => {
          if (resp.body.estado) {
            console.log('Entre a borrar capacitaciones')
            return resolve()
          } else {
            commit('setError', resp.body.datos)
            console.log(resp.body.datos)
            return reject(resp.body.datos)
          }
        }).catch((err) => {
          commit('setError', err)
          console.log(err)
          return reject(err)
        })
    })
  },
  deleteAccidentes ({commit}, accidentesId) {
    return new Promise((resolve, reject) => {
      Vue.http.delete('/api/web/accidentes/' + accidentesId)
        .then((resp) => {
          if (resp.body.estado) {
            console.log('Entre a borrar Accidenntes')
            return resolve()
          } else {
            commit('setError', resp.body.datos)
            console.log('Segunda Parte de Accidentes')
            console.log(resp.body.datos)
            return reject(resp.body.datos)
          }
        }).catch((err) => {
          commit('setError', err)
          console.log('3 partes', err)
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
  updateEmpresa ({commit}, {empresaId, nombre, actividadComercial, razonSocial, urlFoto, logo}) {
    console.log({ empresaId, nombre })
    console.log(logo)
    if (logo) {
      let image = urlFoto.replace(/^data:image\/(png|jpg|gif|jpeg);base64,/, '')
      console.log(image)
      return new Promise((resolve, reject) => {
        Vue.http.post('https://api.imgur.com/3/image', { image }, {headers: { 'Authorization': 'Client-ID 32ac2643d018e56' }})
          .then((resp) => {
            let urlFoto = resp.body.data.link
            return urlFoto
          })
          .then((urlFoto) => {
            console.log('Entered here')
            return Vue.http.put('/api/web/empresas/' + empresaId, {nombre, actividadComercial, razonSocial, urlFoto})
          })
          .then((resp) => {
            if (resp.body.estado) {
              console.log('done')
              return resolve()
            } else {
              commit('setError', resp.body.datos)
              return reject(resp.body.datos)
            }
          }).catch((err) => {
            if (err.ok === false) {
              console.log('Aqui')
              commit('setError', 'No se pudos subir la imagen por problemas de conexión.\nRevise su conexión e inténtelo de nuevo.')
              return reject(err)
            }
          })
      })
    } else {
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
    }
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
  updatePersona ({commit}, {personasId, nombres, apellidos, cedula, correo, fechaNacimiento, rol, telefono, perfilOcupacional, usuario}) {
    console.log(fechaNacimiento)
    return new Promise((resolve, reject) => {
      Vue.http.put('/api/web/personas/' + personasId, { nombres, apellidos, cedula, correo, fechaNacimiento, rol, telefono, perfilOcupacional, usuario })
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
    console.log(puestosId)
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
  emptyCapacitaciones ({commit}) {
    commit('setCapacitaciones', null)
  },
  emptyAreasPuestos ({commit}) {
    commit('setAreasPuestos', null)
  },
  getPuestosFromArea ({commit}, areaId) {
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
  emptyPuestos ({commit}) {
    commit('setPuestos', null)
  },
  getCapacitacionesFromArea ({commit}, areasId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/capacitaciones/areas/' + areasId)
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
  updateEquipos ({commit}, {nombre, descripcion, fotoUrl, cantidad, equiposId, logo}) {
    if (logo) {
      let image = fotoUrl.replace(/^data:image\/(png|jpg|gif|jpeg);base64,/, '')
      console.log(image)
      return new Promise((resolve, reject) => {
        Vue.http.post('https://api.imgur.com/3/image', { image }, {headers: { 'Authorization': 'Client-ID 32ac2643d018e56' }})
          .then((resp) => {
            let fotoUrl = resp.body.data.link
            return fotoUrl
          })
          .then((fotoUrl) => {
            console.log('Entered here')
            return Vue.http.put('/api/web/equipos/' + equiposId, {nombre, descripcion, fotoUrl, cantidad})
          })
          .then((resp) => {
            if (resp.body.estado) {
              console.log('done')
              return resolve()
            } else {
              commit('setError', resp.body.datos)
              return reject(resp.body.datos)
            }
          }).catch((err) => {
            if (err.ok === false) {
              console.log('Aqui')
              commit('setError', 'No se pudos subir la imagen por problemas de conexión.\nRevise su conexión e inténtelo de nuevo.')
              return reject(err)
            }
          })
      })
    } else {
      return new Promise((resolve, reject) => {
        Vue.http.put('/api/web/equipos/' + equiposId, {nombre, descripcion, fotoUrl, cantidad})
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
  },
  deleteEquipo ({commit}, equiposId) {
    return new Promise((resolve, reject) => {
      Vue.http.delete('/api/web/equipos/' + equiposId)
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
  deleteRiesgo ({commit}, riesgosId) {
    return new Promise((resolve, reject) => {
      Vue.http.delete('/api/web/riesgos/' + riesgosId)
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
  getPersonasFromEstablecimiento ({commit}, establecimientoId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/personas/establecimientos/' + establecimientoId)
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
  emptyPersonas ({commit}) {
    commit('setPersonas', null)
  },
  getPersonasFromPuesto ({commit}, puestoId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/personas/puestos/' + puestoId)
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
  getPersonasFromArea ({commit}, areaId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/personas/areas/' + areaId)
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
  updateRiesgo ({commit}, {tipoRiesgo, porcentajeRiesgo, valoracion, fecha, valoracionLiteral, personasExpuestas, puestosId, riesgosId}) {
    return new Promise((resolve, reject) => {
      Vue.http.put('/api/web/riesgos/' + riesgosId, {tipoRiesgo, porcentajeRiesgo, valoracion, fecha, valoracionLiteral, personasExpuestas, puestosId})
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
  crearCapacitacion ({commit}, {nombre, descripcion, tema, fechaCapacitacion, areasId, personas}) {
    return new Promise((resolve, reject) => {
      Vue.http.post('/api/web/capacitaciones', {nombre, descripcion, tema, fechaCapacitacion, areasId, personas})
        .then((resp) => {
          if (resp.body.estado) {
            commit('setCapacitacionCreada', resp.body.datos)
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
  emptyCapacitacionCreada ({commit}) {
    commit('setCapacitacionCreada', null)
  },
  crearAccidente ({commit}, {nombre, descripcion, fecha, heridos, muertos, atendidoEnEmpresa, diasPerdidos, puestosId}) {
    return new Promise((resolve, reject) => {
      Vue.http.post('/api/web/accidentes', {nombre, descripcion, fecha, heridos, muertos, atendidoEnEmpresa, diasPerdidos, puestosId})
        .then((resp) => {
          if (resp.body.estado) {
            commit('setAccidenteCreado', resp.body.datos)
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
  emptyAccidenteCreado ({commit}) {
    commit('setAccidenteCreado', null)
  },
  crearEquipos ({commit}, {nombre, descripcion, fotoUrl, cantidad, puestosId, logo}) {
    if (logo) {
      let image = fotoUrl.replace(/^data:image\/(png|jpg|gif|jpeg);base64,/, '')
      console.log(image)
      return new Promise((resolve, reject) => {
        Vue.http.post('https://api.imgur.com/3/image', { image }, {headers: { 'Authorization': 'Client-ID 32ac2643d018e56' }})
          .then((resp) => {
            let fotoUrl = resp.body.data.link
            return fotoUrl
          })
          .then((fotoUrl) => {
            console.log('Entered here')
            return Vue.http.post('/api/web/equipos', {nombre, descripcion, fotoUrl, cantidad, puestosId})
          })
          .then((resp) => {
            if (resp.body.estado) {
              commit('setEquipoCreado', resp.body.datos)
              console.log('done')
              return resolve()
            } else {
              commit('setError', resp.body.datos)
              return reject(resp.body.datos)
            }
          }).catch((err) => {
            if (err.ok === false) {
              console.log('Aqui')
              commit('setError', 'No se pudos subir la imagen por problemas de conexión.\nRevise su conexión e inténtelo de nuevo.')
              return reject(err)
            }
          })
      })
    } else {
      return new Promise((resolve, reject) => {
        Vue.http.put('/api/web/equipos', {nombre, descripcion, fotoUrl, cantidad, puestosId})
          .then((resp) => {
            if (resp.body.estado) {
              console.log('done')
              commit('setEquipoCreado', resp.body.datos)
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
  },
  crearMatrizRiesgo ({commit}, {establecimientosId, datos, controles}) {
    console.log(controles)
    return new Promise((resolve, reject) => {
      Vue.http.post('/api/web/matrices', {establecimientosId, datos})
        .then((resp) => {
          if (!resp.body.estado) {
            commit('setError', resp.body.datos)
            return reject(resp.body.datos)
          } else if (controles.length > 0) {
            Vue.http.post('/api/web/controles/bulk', controles)
              .then((resp) => {
                if (resp.body.estado) {
                  console.log('yay')
                  return resolve()
                } else {
                  commit('setError', resp.body.datos)
                  return reject(resp.body.datos)
                }
              })
          } else {
            return resolve()
          }
        })
        .catch((err) => {
          commit('setError', err)
          return reject(err)
        })
    })
  },
  getRiesgos ({commit}) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/riesgos')
        .then((resp) => {
          if (resp.body.estado) {
            commit('setRiesgos', resp.body.datos)
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
  crearRiesgo ({commit}, {clasificacion, descripcion}) {
    return new Promise((resolve, reject) => {
      Vue.http.post('/api/web/riesgos', {clasificacion, descripcion})
        .then((resp) => {
          if (resp.body.estado) {
            console.log('done')
            commit('setRiesgoCreado', resp.body.datos)
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
  emptyRiesgoCreado ({commit}) {
    commit('setRiesgoCreado', null)
  },
  getMatricesRiesgo ({commit}, establecimientoId) {
    console.log(establecimientoId)
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/matrices/establecimientos/' + establecimientoId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setMatricesRiesgo', resp.body.datos)
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
  descargarMatrizRiesgo ({commit}, matricesId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/matrices/descargar/' + matricesId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setMatrizDescarga', resp.body.datos)
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
  getControlesPuestoRiesgo ({commit}, {puestosId, riesgosId}) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/controles/puestos/' + puestosId + '/riesgos/' + riesgosId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setControles', resp.body.datos)
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
  getControlesPuesto ({commit}, puestosId) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/web/controles/puestos/' + puestosId)
        .then((resp) => {
          if (resp.body.estado) {
            commit('setControles', resp.body.datos)
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
  emptyControles ({commit}) {
    commit('setControles', null)
  },
  implementarControl ({commit}, controlId) {
    return new Promise((resolve, reject) => {
      Vue.http.put('/api/web/controles/implementar/' + controlId)
        .then((resp) => {
          if (resp.body.estado) {
            console.log('DONE!')
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
