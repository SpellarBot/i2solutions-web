const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./establecimientos.controller')({ responses, db })
module.exports = (app) => {
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

  // GET ONE
  // app.route('/establecimientos/:establecimientosId')
  //   .get((req, res) => {
  //     let { establecimientosId } = req.params
  //     Controller.Obtener({ id: establecimientosId }).then((resp) => {
  //       res.status(resp.codigoEstado)
  //       res.json(resp)
  //     }).catch(resp => {
  //       res.status(resp.codigoEstado)
  //       res.json(resp)
  //     })
  //   })

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
