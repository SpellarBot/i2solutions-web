const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./personas.controller')({ responses, db })
module.exports = (app) => {
  // obtener todas las personas
  app.route('/personas')
    .get((req, res) => {
      Controller.ObtenerTodos().then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // obtener una persona
  app.route('/personas/:personasId')
    .get((req, res) => {
      let { personasId } = req.params
      Controller.Obtener({ id: personasId }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // crear una persona
  app.route('/personas')
    .post((req, res) => {
      Controller.Crear(req.body).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // actualizar una persona
  app.route('/personas/:personasId')
    .put((req, res) => {
      let { personasId } = req.params
      Controller.Actualizar({ ...req.body, id: personasId }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // borrar una persona
  app.route('/personas/:personasId')
    .delete((req, res) => {
      let { personasId } = req.params
      Controller.Borrar({ id: personasId }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // obtener personas por establecimiento
  app.route('/personas/establecimientos/:establecimientosId')
    .get((req, res) => {
      let { establecimientosId } = req.params
      Controller.ObtenerTodosPorEstablecimiento({ establecimientosId }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })
}
