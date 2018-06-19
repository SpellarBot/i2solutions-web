const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./empresas.controller')({ responses, db })
const schema = require('./API_SCHEMA')
const validar = require('../../utils').schemaFormato
module.exports = (app) => {
  // identificador: API_1
  // obtener todas las empresas
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

  // obtener una empresa
  app.route('/empresas/:empresasId')
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

  // identificador: API_2
  // crear una empresa
  app.route('/empresas')
    .post((req, res) => {
      let { BODY } = schema.API_2_SCHEMA
      let { err, mensaje } = validar(BODY, req.body)
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

  // identificador: API_4
  // actualizar una empresa
  app.route('/empresas/:empresasId')
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

  // identificador: API_5
  // borrar una empresa
  app.route('/empresas/:empresasId')
    .delete((req, res) => {
      let { empresasId } = req.params
      Controller.Borrar({ id: empresasId }).then((resp) => {
        res.status(resp.codigoEstado)
        res.json(resp)
      }).catch(resp => {
        res.status(resp.codigoEstado)
        res.json(resp)
      })
    })
}
