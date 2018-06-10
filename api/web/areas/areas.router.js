const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./empresas.controller')({ responses, db })
module.exports = (app) => {
  // GET ALL API_1
  app.route('/personas')
    .get((req, res) => {
      Controller.ObtenerTodos({}).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // GET ONE
  app.route('/personas/:personasId')
    .get((req, res) => {
      let { empresasId } = req.params
      Controller.Obtener({ id: empresasId }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // CREATE
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

  // UPDATE
  app.route('/personas/:personasId')
    .put((req, res) => {
      let { empresasId } = req.params
      let id = empresasId
      let { nombre, actividadComercial, razonSocial } = req.body
      Controller.Actualizar({ id, nombre, actividadComercial, razonSocial }).then((resp) => {
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
