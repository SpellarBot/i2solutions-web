const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./establecimientos.controller')({ responses, db })
module.exports = (app) => {
  // obtener establecimientos por empresa
  app.route('/establecimientos/:empresasId')
    .get((req, res) => {
      let { empresasId } = req.params
      Controller.ObtenerTodos({ empresasId }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // crear una empresa
  app.route('/establecimientos')
    .post((req, res) => {
      Controller.Crear(req.body).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // obtener un establecimiento
  app.route('/establecimientos/:establecimientosId')
    .put((req, res) => {
      let { establecimientosId } = req.params
      delete req.body['empresasId']
      Controller.Actualizar({ ...req.body, id: establecimientosId }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // eliminar un establecimiento
  app.route('/establecimientos/:establecimientosId')
    .delete((req, res) => {
      let { establecimientosId } = req.params
      Controller.Borrar({ id: establecimientosId }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })
}
