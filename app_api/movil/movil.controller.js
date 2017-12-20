const proto = {
  PuestosTrabajo () {
    return {nombres: 'Puesto Trabajo', apellidos: 'Xavier Idrovo'}
  },

  VistaPrincipal() {
    return {nombres: 'Vista Principal', apellidos: 'Xavier Idrovo'}
  },

  NovedadesSinAtender() {
    return {nombres: 'Novedades Sin atender', apellidos: 'Roberth Loor'}
  },

  IngresarNovedad() {
    return {nombres: 'Ingresar Novedad', apellidos: 'Alex Ferrin'}
  },

  CambiarEstadoNovedad() {
    return {nombres: 'Cambiar estado novedad', apellidos: 'Roberth Loor'}
  },
}

module.exports = () => { return Object.create(proto) }
