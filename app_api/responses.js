// https://github.com/adaltas/node-http-status/blob/master/src/index.litcoffee
// 200 OK
// 201 creatre
// 401 NO_AUTORIZADO
// 500 ERROR_SERVIDOR
// 403 soloAdministrador
// 404 urlNoValido
// 406 noJson
// 400 malRequest dd

const ERROR_SERVIDOR = { datos: { mensaje_error: 'Error en el servidor' }, codigo_estado: 500, estado: false }

const NO_AUTORIZADO = { datos: { mensaje_error: 'No autorizado' }, codigo_estado: 401, estado: false }

// const URL_NO_VALIDO = { datos: { mensaje_error: 'Url no valido' }, codigo_estado: 404, estado: false }

const CREADO = { datos: { mensaje: 'Creado Correctamente' }, codigo_estado: 201, estado: true }

const ERROR_VALIDACION = (dato) => {
  const resp = { datos: { mensaje_error: `Error en ${dato}` }, codigo_estado: 404, estado: false }
  return resp
}

const OK = (datos) => {
  const resp = { estado: true, datos, codigo_estado: 200 }
  return resp
}

module.exports = {
  ERROR_SERVIDOR,
  NO_AUTORIZADO,
  OK,
  ERROR_VALIDACION,
  CREADO
}
