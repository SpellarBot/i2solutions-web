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
const db = rfr('api/config/db')
const app = rfr('app')
const dump = rfr('api/config/dump')
const models = db.db
describe('EMPRESAS', () => {
  let { empresas } = dump
  let empresa = empresas.VALIDOS[0]
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function () {
    db.Desconectar()
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  describe('Obtener todos', () => {
    it('@CP1 una empresa creada', async () => {
      await models.empresas.Crear(empresa)
      let res = await request(app).get('/api/web/empresas')
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(1)
    })
    it('@CP2 sin empresas creadas', async () => {
      let res = await request(app).get('/api/web/empresas')
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(0)
    })
  })
  describe('Crear', () => {
    it('@CP3 una empresa creada', async () => {
      let res = await request(app).post('/api/web/empresas').send(empresa)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos['id']).to.equal(1)
    })
  })
})
