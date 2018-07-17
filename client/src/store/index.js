import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
Vue.use(VueResource)

export const store = new Vuex.Store({
  state: {
    usuario: null,
    loggeado: false,
    empresas: null,
    personas: null,
    areas: null,
    empresaSelected: null,
    personaSelected: null,
    establecimientos: null,
    establecimientoSelected: null,
    areaSelected: null,
    puestos: null,
    puestoSelected: null,
    novedades: null,
    novedadSelected: null,
    areasPuestos: null,
    novedadesEstablecimientos: null,
    novedadesPuestos: null,
    equipos: null,
    verified: true,
    equipoPuesto: null,
    riesgoPuesto: null,
    equipoSelected: null,
    capacitaciones: null,
    accidentes: null
  },
  mutations,
  actions,
  getters
})
