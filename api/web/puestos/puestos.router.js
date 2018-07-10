const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./puestos.controller')({ responses, db })
const schema = require('./API_SCHEMA')
const validar = require('../../utils').schemaFormato
const utils = require('../../utils')
module.exports = (app) => {
  // TODO: anadir personas a puestos por bulk

  // identificador API_1
  // obtener un puesto por area
  app.route('/puestos/areas/:areasId')
    .get((req, res) => {
      let params = utils.jsonToInt(req.params, ['areasId'])
      let { PARAMS } = schema.API_1_SCHEMA
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (errParams) {
        let resp = responses.NO_OK({ ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { areasId } = req.params
        Controller.ObtenerTodosPorArea({ id: areasId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador API_2
  // crear un puestos
  app.route('/puestos')
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

  // identificador API_3
  // actualizar un puesto
  app.route('/puestos/:puestosId')
    .put((req, res) => {
      let params = utils.jsonToInt(req.params, ['puestosId'])
      let { BODY, PARAMS } = schema.API_3_SCHEMA
      let [err, mensaje] = validar(BODY, req.body)
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (err || errParams) {
        let resp = responses.NO_OK({ ...mensaje, ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { puestosId } = req.params
        let id = puestosId
        let { nombre, descripcion } = req.body
        Controller.Actualizar({ id, nombre, descripcion }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador API_4
  // eliminar un puesto
  app.route('/puestos/:puestosId')
    .delete((req, res) => {
      let params = utils.jsonToInt(req.params, ['puestosId'])
      let { PARAMS } = schema.API_4_SCHEMA
      let [err, mensaje] = validar(PARAMS, params)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { puestosId } = req.params
        Controller.Borrar({ id: puestosId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador API_5
  // obtener un puesto
  app.route('/puestos/:puestosId')
    .get((req, res) => {
      let params = utils.jsonToInt(req.params, ['puestosId'])
      let { PARAMS } = schema.API_5_SCHEMA
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (errParams) {
        let resp = responses.NO_OK({ ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { puestosId } = req.params
        Controller.Obtener({ id: puestosId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })
}
