const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./capacitaciones.controller')({ responses, db })
const schema = require('./API_SCHEMA')
const validar = require('../../utils').schemaFormato
const utils = require('../../utils')
module.exports = (app) => {
  // TODO: anadir personas a capacitaciones por bulk o individual personasCapacitaciones

  // identificador: API_1
  // crear un establecimiento
  app.route('/capacitaciones')
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
  // actualizar un establecimiento
  app.route('/capacitaciones/:capacitacionesId')
    .put((req, res) => {
      let params = utils.jsonToInt(req.params, ['capacitacionesId'])
      let { BODY, PARAMS } = schema.API_2_SCHEMA
      let [err, mensaje] = validar(BODY, req.body)
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (err || errParams) {
        let resp = responses.NO_OK({ ...mensaje, ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { capacitacionesId } = req.params
        Controller.Actualizar({ ...req.body, id: capacitacionesId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_3
  // eliminar una Capacitación
  app.route('/capacitaciones/:capacitacionesId')
    .delete((req, res) => {
      let params = utils.jsonToInt(req.params, ['capacitacionesId'])
      let { PARAMS } = schema.API_3_SCHEMA
      let [err, mensaje] = validar(PARAMS, params)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { capacitacionesId } = req.params
        Controller.Borrar({ id: capacitacionesId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_4
  // obtener una capacitacion
  app.route('/capacitaciones/:capacitacionesId')
    .get((req, res) => {
      let params = utils.jsonToInt(req.params, ['capacitacionesId'])
      let { PARAMS } = schema.API_4_SCHEMA
      let [err, mensaje] = validar(PARAMS, params)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { capacitacionesId } = req.params
        Controller.Obtener({ id: capacitacionesId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_5
  // capacitaciones por establecimiento
  app.route('/capacitaciones/establecimientos/:establecimientosId')
    .get((req, res) => {
      let params = utils.jsonToInt(req.params, ['establecimientosId'])
      let { PARAMS } = schema.API_5_SCHEMA
      let [err, mensaje] = validar(PARAMS, params)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { establecimientosId } = req.params
        Controller.ObtenerPorEstablecimiento({ id: establecimientosId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_6
  // capacitaciones por area
  app.route('/capacitaciones/areas/:areasId')
    .get((req, res) => {
      let params = utils.jsonToInt(req.params, ['areasId'])
      let { PARAMS } = schema.API_6_SCHEMA
      let [err, mensaje] = validar(PARAMS, params)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { areasId } = req.params
        Controller.ObtenerPorArea({ id: areasId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })
}
