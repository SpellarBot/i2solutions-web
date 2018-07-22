import decode from 'jwt-decode'
import Vue from "vue"
import Vuex from 'vuex'

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
  setEstablecimientos (state, establecimientos) {
    state.establecimientos = establecimientos
  },
  setEstablecimientoSelected (state, establecimientoSelected) {
    state.establecimientoSelected = establecimientoSelected
  },
  setAreaSelected (state, areaSelected) {
    state.areaSelected = areaSelected
  },
  setPuestos (state, puestos) {
    state.puestos = puestos
  },
  setPuestoSelected (state, puestoSelected) {
    state.puestoSelected = puestoSelected
  },
  setNovedades (state, novedades) {
    state.novedades = novedades
  },
  setNovedadSelected (state, novedadSelected) {
    state.novedadSelected = novedadSelected
  },
  setNovedadesEstablecimientos (state, novedadesEstablecimientos) {
    state.novedadesEstablecimientos = novedadesEstablecimientos
  },
  setNovedadesAreas (state, novedadesAreas) {
    state.novedadesAreas = novedadesAreas
  },
  setNovedadesPuestos (state, novedadesPuestos) {
    state.novedadesPuestos = novedadesPuestos
  },
  setAreasPuestos (state, areasPuestos) {
    state.areasPuestos = areasPuestos
  },
  setEquipos (state, equipos) {
    state.equipos = equipos
  },
  setEquipoSelected (state, equipoSelected) {
    state.equipoSelected = equipoSelected
  },
  setVerified (state, payload) {
    state.verified = payload
  },
  setEquiposPuestos (state, equipoPuesto) {
    state.equipoAreas = equipoPuesto
  },
  setEquiposAreas (state, equipoAreas) {
    state.equipoAreas = equipoAreas
  },
  setRiesgosPuestos (state, riesgoPuesto) {
    state.riesgoPuesto = riesgoPuesto
  },
  setCapacitaciones (state, capacitaciones) {
    state.capacitaciones = capacitaciones
  },
  setAccidentes (state, accidentes) {
    state.accidentes = accidentes
  }
}
