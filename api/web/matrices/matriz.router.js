const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./matriz.controller')({ responses, db })
const schema = require('./API_SCHEMA')
const validar = require('../../utils').schemaFormato
const utils = require('../../utils')
module.exports = (app) => {
  // identificador: API_1
  // crear una matriz
  app.route('/matrices')
    .post((req, res) => {
      let datos = JSON.stringify(req.body.datos)
      let reqTemp = { datos, establecimientosId: req.body.establecimientosId }
      let { BODY } = schema.API_1_SCHEMA
      let [err, mensaje] = validar(BODY, reqTemp)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        Controller.Crear(reqTemp).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_2
  // matrices por establecimiento
  app.route('/matrices/establecimientos/:establecimientosId')
    .get((req, res) => {
      let params = utils.jsonToInt(req.params, ['establecimientosId'])
      let { PARAMS } = schema.API_2_SCHEMA
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

  // identificador: API_3
  // descargar una matriz
  app.route('/matrices/descargar/:matricesId')
    .get((req, res) => {
      let params = utils.jsonToInt(req.params, ['matricesId'])
      let { PARAMS } = schema.API_3_SCHEMA
      let [err, mensaje] = validar(PARAMS, params)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { matricesId } = req.params
        Controller.Descargar({ id: matricesId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })
}
