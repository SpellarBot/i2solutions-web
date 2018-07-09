const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./equipos.controller')({ responses, db })
const schema = require('./API_SCHEMA')
const validar = require('../../utils').schemaFormato
const utils = require('../../utils')
module.exports = (app) => {
  // identificador: API_1
  // crear un equipo
  app.route('/equipos')
    .post((req, res) => {
      let { BODY } = schema.API_1_SCHEMA
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

  // identificador: API_2
  // actualizar un equipo
  app.route('/equipos/:equiposId')
    .put((req, res) => {
      let params = utils.jsonToInt(req.params, ['equiposId'])
      let { BODY, PARAMS } = schema.API_2_SCHEMA
      let [err, mensaje] = validar(BODY, req.body)
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (err || errParams) {
        let resp = responses.NO_OK({ ...mensaje, ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { equiposId } = req.params
        Controller.Actualizar({ ...req.body, id: equiposId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_3
  // eliminar un equipo
  // eliminar tambien lo de las tablas de areas y puestos
  app.route('/equipos/:equiposId')
    .delete((req, res) => {
      let params = utils.jsonToInt(req.params, ['equiposId'])
      let { PARAMS } = schema.API_3_SCHEMA
      let [err, mensaje] = validar(PARAMS, params)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { equiposId } = req.params
        Controller.Borrar({ id: equiposId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_4
  // anadir equipo a un puesto
  app.route('/equipos/:equiposId/puestos/:puestosId')
    .put((req, res) => {
      let params = utils.jsonToInt(req.params, ['equiposId', 'puestosId'])
      let { PARAMS } = schema.API_4_SCHEMA
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (errParams) {
        let resp = responses.NO_OK({ ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        Controller.AnadirAPuesto({ ...req.params }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_5
  // anadir equipo a un area
  app.route('/equipos/:equiposId/areas/:areasId')
    .put((req, res) => {
      let params = utils.jsonToInt(req.params, ['equiposId', 'areasId'])
      let { PARAMS } = schema.API_5_SCHEMA
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (errParams) {
        let resp = responses.NO_OK({ ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        Controller.AnadirAArea(req.params).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })
}
