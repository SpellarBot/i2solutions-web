const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./areas.controller')({ responses, db })
const schema = require('./API_SCHEMA')
const validar = require('../../utils').schemaFormato
const utils = require('../../utils')
module.exports = (app) => {
  // identificador: API_1
  // obtener las areas de un establecimiento
  app.route('/areas/establecimientos/:establecimientosId')
    .get((req, res) => {
      let params = utils.jsonToInt(req.params, ['establecimientosId'])
      let { PARAMS } = schema.API_1_SCHEMA
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (errParams) {
        let resp = responses.NO_OK({ ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { establecimientosId } = req.params
        Controller.ObtenerPorEstablecimiento({ establecimientosId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_2
  // crear un area
  app.route('/areas')
    .post((req, res) => {
      let { BODY } = schema.API_2_SCHEMA
      let [err, mensaje] = validar(BODY, req.body)
      if (err) {
        let resp = responses.NO_OK({ ...mensaje })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        Controller.Crear(req.body).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_3
  // actualizar un area
  app.route('/areas/:areasId')
    .put((req, res) => {
      let params = utils.jsonToInt(req.params, ['areasId'])
      let { BODY, PARAMS } = schema.API_3_SCHEMA
      let [err, mensaje] = validar(BODY, req.body)
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (err || errParams) {
        let resp = responses.NO_OK({ ...mensaje, ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { areasId } = req.params
        let id = areasId
        let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = req.body
        Controller.Actualizar({ actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar, id }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_4
  // eliminar un area
  app.route('/areas/:areasId')
    .delete((req, res) => {
      let params = utils.jsonToInt(req.params, ['areasId'])
      let { PARAMS } = schema.API_4_SCHEMA
      let [err, mensaje] = validar(PARAMS, params)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { areasId } = req.params
        Controller.Borrar({ id: areasId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_5
  // obtener un area
  app.route('/areas/:areasId')
    .get((req, res) => {
      let params = utils.jsonToInt(req.params, ['areasId'])
      let { PARAMS } = schema.API_5_SCHEMA
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (errParams) {
        let resp = responses.NO_OK({ ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { areasId } = req.params
        Controller.Obtener({ id: areasId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })
}
