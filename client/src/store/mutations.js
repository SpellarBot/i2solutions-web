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
  },
  setEmpresas (state, empresas) {
    state.empresas = empresas
  },
  setPersonas (state, personas) {
    state.personas = personas
  },
  setAreas (state, areas) {
    state.areas = areas
  },
  setEmpresaSelected (state, empresaSelected) {
    state.empresaSelected = empresaSelected
  },
  setPersonaSelected (state, personaSelected) {
    state.personaSelected = personaSelected
  },
<<<<<<< HEAD
  setEstablecimientos (state, establecimientos) {
    state.establecimientos = establecimientos
  },
  setEstablecimientoSelected (state, establecimientoSelected) {
    state.establecimientos = establecimientoSelected
=======
  setAreaSelected (state, areaSelected) {
    state.areaSelected = areaSelected
>>>>>>> 134c2bd88b45412bb83923c7a1d14db269006429
  }
}
