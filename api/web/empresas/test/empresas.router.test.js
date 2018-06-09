const request = require('supertest')
const expect = require('chai').expect
// const moment = require('moment')
// const sinon = require('sinon')
// const Ajv = require('ajv')
const rfr = require('rfr')

// const ajv = new Ajv({ allErrors: true, jsonPointers: true })
// function e (validate) {
//   return `${JSON.stringify(validate.errors, null, 2)}`
// }
const generatorDocs = rfr('api/config/documentacion')
const db = rfr('api/config/db')
const app = rfr('app')
const dump = rfr('api/config/dump')
const API = require('./API_DOCS')
const models = db.db
let docs = []
describe('EMPRESAS', () => {
  let { empresas, establecimientos } = dump
  let empresa = empresas.VALIDOS[0]
  let establecimiento = establecimientos.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let establecimiento3 = establecimientos.VALIDOS[2]
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function () {
    db.Desconectar()
    generatorDocs.generateAPI({ docs, archivo: 'api.empresas.md', nombre: 'Empresas' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  describe('Obtener todos', () => {
    const { API_1 } = API
    it('@CP1 una empresa creada', async () => {
      await models.empresas.Crear(empresa)
      let res = await request(app).get('/api/web/empresas')
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(1)
      generatorDocs.OK({ docs, doc: API_1, res })
    })
    it('@CP2 sin empresas creadas', async () => {
      let res = await request(app).get('/api/web/empresas')
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(0)
    })
  })
  describe('Crear', () => {
    const { API_2 } = API
    it('@CP3 una empresa creada', async () => {
      let req = { ...empresa, direccion: establecimiento['direccion'], ruc: establecimiento['ruc'] }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos['id']).to.equal(1)
      expect(res.body.datos['establecimiento']['id']).to.equal(1)
      expect(res.body.datos['establecimiento']['nombres']).to.equal(res.body.datos['nombre'])
      generatorDocs.OK({ docs, doc: API_2, res, req })
    })
  })
  describe('Actualizar', () => {
    const { API_3 } = API
    it('@CP4 actualizar datos de empresa')
  })
  describe('Eliminar', () => {
    const { API_4 } = API
    it('@CP5 eliminar por id')
  })
  describe('Obtener una empresa', () => {
    const { API_5 } = API
    it('@CP6 obtener por id', async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let establecimientoCreada = await models.establecimientos.Crear(establecimiento)
      let establecimientoCreada2 = await models.establecimientos.Crear(establecimiento2)
      establecimiento3['empresasId'] = 5
      let establecimientoCreada3 = await models.establecimientos.Crear(establecimiento3)
      let res = await request(app).get(`/api/web/empresas/${empresaCreada['id']}`)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos['id']).to.equal(1)
      expect(res.body.datos['establecimientos'].length).to.equal(2)
      generatorDocs.OK({ docs, doc: API_5, res })
    })
  })
})
