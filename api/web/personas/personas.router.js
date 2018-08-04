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

  // identificador: API_5_SCHEMA
  // obtener personas por establecimiento
  app.route('/personas/establecimientos/:establecimientosId')
    .get((req, res) => {
      let params = utils.jsonToInt(req.params, ['establecimientosId'])
      let { PARAMS } = schema.API_5_SCHEMA
      let [err, mensaje] = validar(PARAMS, params)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { establecimientosId } = req.params
        Controller.ObtenerTodosPorEstablecimiento({ id: establecimientosId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_6_SCHEMA
  // obtener personas por areas
  app.route('/personas/areas/:areasId')
    .get((req, res) => {
      let params = utils.jsonToInt(req.params, ['areasId'])
      let { PARAMS } = schema.API_6_SCHEMA
      let [err, mensaje] = validar(PARAMS, params)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { areasId } = req.params
        Controller.ObtenerTodosPorAreas({ id: areasId }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  // identificador: API_7_SCHEMA
  // obtener personas por puestos
  app.route('/personas/puestos/:puestosId')
    .get((req, res) => {
      let params = utils.jsonToInt(req.params, ['puestosId'])
      let { PARAMS } = schema.API_7_SCHEMA
      let [err, mensaje] = validar(PARAMS, params)
      if (err) {
        let resp = responses.NO_OK(mensaje)
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let { puestosId } = req.params
        Controller.ObtenerTodosPorPuestos({ id: puestosId }).then((resp) => {
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

  // identificador: API_9
  // crear clave
  app.route('/personas/crear_clave/:token')
    .post((req, res) => {
      let { BODY } = schema.API_9_SCHEMA
      let [err, mensaje] = validar(BODY, req.body)
      if (err) {
        let resp = responses.NO_OK({ ...mensaje })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let token = req.params['token']
        Controller.CrearClave({ ...req.body, token }).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

  app.route('/personas/CambioClave/enviarToken')
    .put((req, res) => {
      let { QUERY } = schema.API_10_SCHEMA
      let [err, mensaje] = validar(QUERY, req.body)
      if (err) {
        let resp = responses.NO_OK({ ...mensaje })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        Controller.CambioClave(req.body).then((resp) => {
          res.status(resp.codigoEstado)
          res.json(resp)
        }).catch(resp => {
          res.status(resp.codigoEstado)
          res.json(resp)
        })
      }
    })

//  claveCreada
// resetClaveToken
// resetClaveExpires
}
