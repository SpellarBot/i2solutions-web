const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./areas.controller')({ responses, db })
module.exports = (app) => {
  // obtener las areas de un establecimiento
  app.route('/areas/establecimientos/:establecimientosId')
    .get((req, res) => {
      let { establecimientosId } = req.params
      Controller.ObtenerPorEstablecimiento({ establecimientosId }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // obtener un area
  app.route('/areas/:areasId')
    .get((req, res) => {
      let { areasId } = req.params
      Controller.Obtener({ id: areasId }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // crear un area
  app.route('/areas')
    .post((req, res) => {
      Controller.Crear(req.body).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // actualizar un area
  app.route('/areas/:areasId')
    .put((req, res) => {
      let { areasId } = req.params
      let id = areasId
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = req.body
      Controller.Actualizar({ actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar, id }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })

  // eliminar un area
  app.route('/areas/:areasId')
    .delete((req, res) => {
      let { areasId } = req.params
      Controller.Borrar({ id: areasId }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })
}
