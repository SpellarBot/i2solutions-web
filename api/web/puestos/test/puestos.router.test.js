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
describe('Puestos', () => {
  let { puestos, areas } = dump
  let puesto = puestos.VALIDOS[0]
  let puesto2 = puestos.VALIDOS[1]
  let puesto3 = puestos.VALIDOS[6]
  let area = areas.VALIDOS[0]
  let area2 = areas.VALIDOS[1]
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    // db.Desconectar()
    generatorDocs.generateAPI({ docs, archivo: 'api.puestos.md', nombre: 'Puestos' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  describe('Obtener puesto por area', () => {
    let { API_1 } = API
    it('@CP1 OK', async () => {
      let puestosCreada = await models.puestos.Crear(puesto)
      let puestosCreada2 = await models.puestos.Crear(puesto2)
      let puestosCreada3 = await models.puestos.Crear(puesto3)
      let areasCreada = await models.areas.Crear(area)
      let areasCreada2 = await models.areas.Crear(area2)
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada2['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada3['id'], areasId: areasCreada2['id'] })
      let res = await request(app).get(`/api/web/puestos/areas/${areasCreada['id']}`)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos.length).to.equal(2)
      generatorDocs.OK({ docs, doc: API_1, res })
    })
  })

  describe('Crear puesto', () => {
    let { API_2 } = API
    it('@CP2 OK', async () => {
      let req = puesto
      let res = await request(app).post(`/api/web/puestos`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos['nombre']).to.equal(req['nombre'])
      generatorDocs.OK({ docs, doc: API_2, res, req })
    })
  })

  describe('Actualizar puesto', () => {
    let { API_3 } = API
    let puestoEditado = JSON.parse(JSON.stringify(puesto))
    puestoEditado['nombre'] = 'Mi nombre editado'
    it('@CP3 OK', async () => {
      let puestosCreada = await models.puestos.Crear(puesto)
      let req = puestoEditado
      let res = await request(app).put(`/api/web/puestos/${puestosCreada['id']}`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(true).to.equal(true)
      generatorDocs.OK({ docs, doc: API_3, res, req })
    })

    it('@CP3.1 puesto id no existe', async () => {
      let req = puestoEditado
      let res = await request(app).put(`/api/web/puestos/50`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ERROR({ nombre: 'El id del puestos no existe', docs, doc: API_3, res, req })
    })
  })

  describe('Obtener un puesto', () => {
    let { API_4 } = API
    it('@CP4 OK', async () => {
      let puestosCreada = await models.puestos.Crear(puesto)
      let res = await request(app).get(`/api/web/puestos/${puestosCreada['id']}`)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      generatorDocs.OK({ docs, doc: API_4, res })
    })
  })

  describe('Borrar', () => {
    let { API_5 } = API
    it('@CP5 OK', async () => {
      let puestosCreada = await models.puestos.Crear(puesto)
      let res = await request(app).delete(`/api/web/puestos/${puestosCreada['id']}`)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos).to.equal(true)
      generatorDocs.OK({ docs, doc: API_5, res })
    })
    it('@CP5 puesto no existe', async () => {
      let res = await request(app).delete(`/api/web/puestos/55`)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ERROR({ nombre: 'El id del puestos no existe', docs, doc: API_5, res })
    })
  })
})
