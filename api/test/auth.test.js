const request = require('supertest')
const expect = require('chai').expect
const moment = require('moment')
const sinon = require('sinon')
const Ajv = require('ajv')
const rfr = require('rfr')
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
const jwt_decode = require('jwt-decode')

const generatorDocs = rfr('api/config/documentacion')
const db = rfr('api/config/db')
const app = rfr('app')
const dump = rfr('api/config/dump')
const API = require('./API_DOCS')
const models = db.db
let docs = []

function e(validate) {
  return `${JSON.stringify(validate.errors, null, 2)}`
}

describe('AUTH TEST', () => {
  let { personas, establecimientos, capacitaciones, empresas, puestos, areas } = dump
  let persona_ADMIN_I2SOLUTIONS = personas.ADMIN_I2SOLUTIONS
  let persona_EMPLEADO = personas.EMPLEADO
  let persona2 = personas[1]
  let puesto = puestos.VALIDOS[0]
  let puesto2 = puestos.VALIDOS[1]
  let establecimiento = establecimientos.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let capacitacion = capacitaciones.VALIDOS[0]
  let empresa = empresas.VALIDOS[0]
  let area = areas.VALIDOS[0]
  let puestosId = -1
  beforeEach(async () => {
    clock = sinon.useFakeTimers(new Date(2011,9,1).getTime())
    let empresaCreada = await models.empresas.Crear(empresa)
    let empresasId = empresaCreada['id']
    let establecimientosCreada = await models.establecimientos.Crear({ ...establecimiento, empresasId })
    let establecimientosId = establecimientosCreada['id']
    let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
    let areasId = areaCreada['id']
    let puestosCreada = await models.puestos.Crear({ ...puesto })
    let ap = await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
    puestosId = puestosCreada['id']
  })
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    clock.restore()
    // generatorDocs.EQUI({ equivalencias, nombre: 'Personas' })
    generatorDocs.generateAPI({ docs, archivo: 'api.auth.md', nombre: 'Auth' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })

  context('API_1 Autenticarse', () => {
    let { API_1 } = API

    beforeEach(async () => {
      let personaCreada = await models.personas.CrearConClave({ ...persona_ADMIN_I2SOLUTIONS, clave: 'aa' })
      let pp = await models.personasPuestos.Crear({ personasId: personaCreada['id'], puestosId })
      personasId = personaCreada['id']
    })
    it('@ICE_API_1_01 VALIDOS', async () => {
      let req = { usuario: persona_ADMIN_I2SOLUTIONS['usuario'], clave: 'aa' }
      let res = await request(app).post(`/api/auth/login`).send(req)
      var decoded = jwt_decode(res.body.datos.token)
      // console.log(decoded)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.OK({ docs, doc: API_1, res, req })
    })
    it('@ICE_API_1_02 NO valido', async () => {
      let req = { usuario: 'usaer', clave: 'aa' }
      let res = await request(app).post(`/api/auth/login`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ERROR({ nombre: 'Usuario no valido', docs, doc: API_1, res, req })
    })
  })

  // context('autorizacion', () => {
  //   let { API_2 } = API
  //   it('@CP4 autorizado', async () => {
  //     let login = await request(app).post(`/api/auth/login`).send(usuario)
  //     let { token } = login.body.datos
  //     let res = await request(app).get(`/api/auth/verify`).set({ Authorization: `Bearer ${token}`})
  //     expect(res.body.estado).to.equal(true)
  //     expect(res.body.codigoEstado).to.equal(200)
  //     generatorDocs.OK({ docs, doc: API_2, res })
  //   })
  //   it('@CP3 NO autorizado', async () => {
  //     let res = await request(app).get(`/api/auth/verify`).set({ Authorization: 'Bearer AAAAAA'})
  //     expect(res.body.estado).to.equal(false)
  //     expect(res.body.codigoEstado).to.equal(401)
  //     generatorDocs.ERROR({ nombre: 'Usuario no autorizado', docs, doc: API_2, res })
  //   })
  // })

  // context('tiempo autorizado', () => {
  //   it('@CP5 verificar un dia de autorizado', async () => {
  //     let clock = sinon.useFakeTimers()
  //     const d1 = moment.duration({ days: 1 })
  //     const h1 = moment.duration({ hours: 5 })
  //     let login = await request(app).post(`/api/auth/login`).send(usuario)
  //     let { token } = login.body.datos
  //     const validate = ajv.compile(AUTH.CP1)
  //     expect(validate( login.body.datos), e(validate)).to.equal(true)
  //     clock.tick(h1.asMilliseconds())
  //     let res = await request(app).get(`/api/auth/verify`).set({ Authorization: `Bearer ${token}`})
  //     expect(res.body.estado).to.equal(true)
  //     expect(res.body.codigoEstado).to.equal(200)
  //     clock.tick(d1.asMilliseconds())
  //     let resDay = await request(app).get(`/api/auth/verify`).set({ Authorization: `Bearer ${token}`})
  //     expect(resDay.body.estado).to.equal(false)
  //     expect(resDay.body.codigoEstado).to.equal(401)
  //     clock.restore()
  //   })
  // })
})
