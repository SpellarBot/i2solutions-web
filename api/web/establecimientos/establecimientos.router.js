const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./establecimientos.controller')({ responses, db })
const schema = require('./API_SCHEMA')
const validar = require('../../utils').schemaFormato
const utils = require('../../utils')
module.exports = (app) => {
  // identificador: API_1
  // obtener establecimientos por empresa
  app.route('/establecimientos/:empresasId')
    .get((req, res) => {
      let params = utils.jsonToInt(req.params, ['empresasId'])
      let { PARAMS } = schema.API_1_SCHEMA
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (errParams) {
        let resp = responses.NO_OK({ ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { empresasId } = req.params
        Controller.ObtenerTodos({ empresasId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_2
  // crear un establecimiento
  app.route('/establecimientos')
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
  // actualizar un establecimiento
  app.route('/establecimientos/:establecimientosId')
    .put((req, res) => {
      let params = utils.jsonToInt(req.params, ['establecimientosId'])
      let { BODY, PARAMS } = schema.API_3_SCHEMA
      let [err, mensaje] = validar(BODY, req.body)
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (err || errParams) {
        let resp = responses.NO_OK({ ...mensaje, ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { establecimientosId } = req.params
        delete req.body['empresasId']
        Controller.Actualizar({ ...req.body, id: establecimientosId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_4
  // eliminar un establecimiento
  app.route('/establecimientos/:establecimientosId')
    .delete((req, res) => {
      let params = utils.jsonToInt(req.params, ['establecimientosId'])
      let { PARAMS } = schema.API_4_SCHEMA
      let [err, mensaje] = validar(PARAMS, params)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { establecimientosId } = req.params
        Controller.Borrar({ id: establecimientosId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_5
  // obtener establecimientos de empresa
  app.route('/principal/establecimientos/empresas/:empresasId')
    .get((req, res) => {
      if (!req.params['empresasId']) {
        req.params['empresasId'] = '1'
      }
      let params = utils.jsonToInt(req.params, ['empresasId'])
      let { PARAMS } = schema.API_5_SCHEMA
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (errParams) {
        let resp = responses.NO_OK({ ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { empresasId } = req.params
        Controller.VistaPrincipal({ empresasId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_6
  // obtener establecimientos por ruc
  app.route('/establecimientos/buscar/por')
    .get((req, res) => {
      let rucs = []
      if (req.query['ruc']) {
        rucs = req.query['ruc'].split(',')
      }
      let { QUERY } = schema.API_6_SCHEMA
      let [errParams, mensajeParams] = validar(QUERY, rucs)
      if (errParams) {
        let resp = responses.NO_OK({ ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        Controller.BuscarPor({ rucs }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })
}
