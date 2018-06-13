const request = require('supertest')
const expect = require('chai').expect
const moment = require('moment')
const sinon = require('sinon')
const Ajv = require('ajv')
const rfr = require('rfr')
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
function e(validate) {
  return `${JSON.stringify(validate.errors, null, 2)}`
}
const generatorDocs = rfr('api/config/documentacion')
const db = rfr('api/config/db')
const app = rfr('app')
const dump = rfr('api/config/dump')
const API = require('./API_DOCS')
const models = db.db
let docs = []
describe('Establecimientos', () => {
  let { establecimientos } = dump
  let establecimiento = establecimientos.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let establecimiento3 = establecimientos.VALIDOS[5]
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    // db.Desconectar()
    generatorDocs.generateAPI({ docs, archivo: 'api.establecimientos.md', nombre: 'Establecimientos' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  describe('Obtener los establecimientos de una empresa', () => {
    let { API_1 } = API
    it('@CP1 OK', async () => {
      let establecimientosCreada = await models.establecimientos.Crear(establecimiento)
      let establecimientosCreada2 = await models.establecimientos.Crear(establecimiento2)
      let establecimientosCreada3 = await models.establecimientos.Crear(establecimiento3)
      let res = await request(app).get(`/api/web/establecimientos/${establecimientosCreada['id']}`)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(2)
      generatorDocs.OK({ docs, doc: API_1, res })
    })
  })

  describe('Crear', () => {
    let { API_2 } = API
    it('@CP2 OK', async () => {
      let req = establecimiento
      let res = await request(app).post(`/api/web/establecimientos`).send(establecimiento)
      generatorDocs.OK({ docs, doc: API_2, res, req })
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos['ruc']).to.equal(establecimiento['ruc'])
    })

    it('@CP2.1 empresaId no existe')
  })

  describe('Editar', () => {
    let { API_3 } = API
    it('@CP3 OK', async () => {
      let establecimientosCreada = await models.establecimientos.Crear(establecimiento)
      let establecimientoEditado = JSON.parse(JSON.stringify(establecimiento))
      delete establecimientoEditado['empresasId']
      let req = establecimientoEditado
      let res = await request(app).put(`/api/web/establecimientos/${establecimientosCreada['id']}`).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.OK({ docs, doc: API_3, res, req })
    })
    it('@CP3.1 establecimiento con ese id no existe', async () => {
      let req = JSON.parse(JSON.stringify(establecimiento))
      let res = await request(app).put(`/api/web/establecimientos/56`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ERROR({ nombre: 'El id del establecimiento no exite', docs, doc: API_3, res, req })
    })
  })
})
