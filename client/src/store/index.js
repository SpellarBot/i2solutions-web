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
<<<<<<< HEAD
    establecimientos: null,
    establecimientoSelected: null
=======
    areaSelected: null
>>>>>>> 134c2bd88b45412bb83923c7a1d14db269006429
  },
  mutations,
  actions,
  getters
})
