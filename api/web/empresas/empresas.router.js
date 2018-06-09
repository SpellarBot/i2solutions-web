const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./empresas.controller')({ responses, db })
module.exports = (app) => {
  // GET ALL
  app.route('/empresas')
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
  app.route('/empresas/:empresasId')
    .get((req, res) => {
      res.send('empresas')
    })

  // CREATE
  app.route('/empresas')
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
  app.route('/empresas/:empresasId')
    .put((req, res) => {
      Controller.Crear(req.body).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // DELETE
  // borrar todos los datos dependientes
  app.route('/empresas/:empresasId')
    .delete((req, res) => {
      res.send('empresas')
    })
}
