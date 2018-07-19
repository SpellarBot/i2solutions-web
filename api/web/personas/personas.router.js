const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./personas.controller')({ responses, db })
const schema = require('./API_SCHEMA')
const validar = require('../../utils').schemaFormato
const utils = require('../../utils')
module.exports = (app) => {
  // identificador: API_1
  // crear una persona
  app.route('/personas')
    .post((req, res) => {
      let { BODY } = schema.API_1_SCHEMA
      let [err, mensaje] = validar(BODY, req.body)
      if (err) {
        let resp = responses.NO_OK({ ...mensaje })
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
  // actualizar una persona
  app.route('/personas/:personasId')
    .put((req, res) => {
      let params = utils.jsonToInt(req.params, ['personasId'])
      let { BODY, PARAMS } = schema.API_2_SCHEMA
      let [err, mensaje] = validar(BODY, req.body)
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (err || errParams) {
        let resp = responses.NO_OK({ ...mensaje, ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { personasId } = req.params
        Controller.Actualizar({ ...req.body, id: personasId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_3
  // borrar una persona
  app.route('/personas/:personasId')
    .delete((req, res) => {
      let params = utils.jsonToInt(req.params, ['personasId'])
      let { PARAMS } = schema.API_3_SCHEMA
      let [err, mensaje] = validar(PARAMS, params)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { personasId } = req.params
        Controller.Borrar({ id: personasId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_4
  // obtener una persona
  app.route('/personas/:personasId')
    .get((req, res) => {
      let params = utils.jsonToInt(req.params, ['personasId'])
      let { PARAMS } = schema.API_4_SCHEMA
      let [err, mensaje] = validar(PARAMS, params)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { personasId } = req.params
        Controller.Obtener({ id: personasId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_8
  // anadir persona a un puesto
  app.route('/personas/:personasId/puestos/:puestosId')
    .put((req, res) => {
      let params = utils.jsonToInt(req.params, ['personasId', 'puestosId'])
      let { PARAMS } = schema.API_8_SCHEMA
      let [errParams, mensajeParams] = validar(PARAMS, params)
      if (errParams) {
        let resp = responses.NO_OK({ ...mensajeParams })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        Controller.AnadirAPuesto({ ...req.params }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // // obtener todas las personas
  // app.route('/personas')
  //   .get((req, res) => {
  //     Controller.ObtenerTodos().then((resp) => {
  //       res.status(resp.codigoEstado)
  //       res.json(resp)
  //     }).catch(resp => {
  //       res.status(resp.codigoEstado)
  //       res.json(resp)
  //     })
  //   })

  // // obtener personas por establecimiento
  // app.route('/personas/establecimientos/:establecimientosId')
  //   .get((req, res) => {
  //     let { establecimientosId } = req.params
  //     Controller.ObtenerTodosPorEstablecimiento({ establecimientosId }).then((resp) => {
  //       res.status(resp.codigoEstado)
  //       res.json(resp)
  //     }).catch(resp => {
  //       res.status(resp.codigoEstado)
  //       res.json(resp)
  //     })
  //   })
}
