const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./puestos.controller')({ responses, db })
module.exports = (app) => {
  app.route('/puestos/areas/:areasId')
    .get((req, res) => {
      let { areasId } = req.params
      Controller.ObtenerTodosPorArea({ id: areasId }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // GET ONE
  app.route('/puestos/:puestosId')
    .get((req, res) => {
      let { puestosId } = req.params
      Controller.Obtener({ id: puestosId }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // CREATE
  app.route('/puestos')
    .post((req, res) => {
      Controller.Crear(req.body).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // UPDATE
  app.route('/puestos/:puestosId')
    .put((req, res) => {
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
    })

  // DELETE
  // borrar todos los datos dependientes
  app.route('/personas/:personasId')
    .delete((req, res) => {
      res.send('empresas')
    })
}
