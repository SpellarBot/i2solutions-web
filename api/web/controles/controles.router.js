const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./controles.controller')({ responses, db })
const schema = require('./API_SCHEMA')
const validar = require('../../utils').schemaFormato
// const utils = require('../../utils')
module.exports = (app) => {
  // identificador: API_1
  // crear un control
  app.route('/controles')
    .post((req, res) => {
      let { BODY } = schema.API_1_SCHEMA
      let [err, mensaje] = validar(BODY, req.body)
      if (err) {
        let resp = responses.NO_OK(mensaje)
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
  // crear varios controles
  app.route('/controles/bulk')
    .post((req, res) => {
      Controller.CrearBulk(req.body).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
      // let { BODY } = schema.API_2_SCHEMA
      // let [err, mensaje] = validar(BODY, req.body)
      // if (err) {
      //   let resp = responses.NO_OK(mensaje)
      //   res.status(resp.codigoEstado)
      //   res.json(resp)
      // } else {

      // }
    })
}
