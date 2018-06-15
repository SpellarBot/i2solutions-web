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
describe('Areas', () => {
  let { establecimientos, areas } = dump
  let establecimiento = establecimientos.VALIDOS[0]
  let area = areas.VALIDOS[0]
  let area2 = areas.VALIDOS[10]
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    generatorDocs.generateAPI({ docs, archivo: 'api.areas.md', nombre: 'Areas' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  describe('Obtener todas las areas por establecimientos', () => {
    let { API_1 } = API
    it('@CP1 OK', async () => {
      let areasCreada = await models.areas.Crear(area)
      let areasCreada2 = await models.areas.Crear(area2)
      let establecimientosId = area['establecimientosId']
      let res = await request(app).get(`/api/web/areas/establecimientos/${establecimientosId}`)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos.length).to.equal(1)
      generatorDocs.OK({ docs, doc: API_1, res })
    })
  })

  describe('Crear un area', () => {
    let { API_2 } = API
    it('@CP2 OK', async () => {
      let req = area
      let res = await request(app).post(`/api/web/areas`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos['nombre']).to.equal(area['nombre'])
      generatorDocs.OK({ docs, doc: API_2, res, req })
    })
    it('@CP2.1 El establecimiento no existe')
  })

  describe('Actualizar un area', () => {
    let { API_3 } = API
    it('@CP3 OK', async () => {
      let areasCreada = await models.areas.Crear(area)
      let areaEditada = JSON.parse(JSON.stringify(area))
      areaEditada['nombre'] = 'Mi nombre editado'
      let req = areaEditada
      let res = await request(app).put(`/api/web/areas/${areasCreada['id']}`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos).to.equal(true)
      generatorDocs.OK({ docs, doc: API_3, res, req })
    })
    it('@CP3.1 No existe area con ese id', async () => {
      let areaEditada = JSON.parse(JSON.stringify(area))
      areaEditada['nombre'] = 'Mi nombre editado'
      let req = areaEditada
      let res = await request(app).put(`/api/web/areas/50`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ERROR({ nombre: 'El id del area no existe', docs, doc: API_3, res, req })
    })
  })

  describe('Obtener un area', () => {
    let { API_4 } = API
    it('@CP4 OK', async () => {
       let areasCreada = await models.areas.Crear(area)
       let areasCreada2 = await models.areas.Crear(area2)
       let areasId = areasCreada['id']
      let res = await request(app).get(`/api/web/areas/${areasId}`)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos['nombre']).to.equal(areasCreada['nombre'])
      generatorDocs.OK({ docs, doc: API_4, res})
    })
  })

  describe('Borrar un area', () => {
    let { API_5 } = API
    it('@CP5 OK', async () => {
      let areasCreada = await models.areas.Crear(area)
      let res = await request(app).delete(`/api/web/areas/${areasCreada['id']}`)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos).to.equal(true)
      generatorDocs.OK({ docs, doc: API_5, res})
    })
    it('@CP5.1 area no existe', async () => {
      let res = await request(app).delete(`/api/web/areas/55`)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ERROR({ nombre: 'El id del area no existe', docs, doc: API_5, res })
    })
  })
})
