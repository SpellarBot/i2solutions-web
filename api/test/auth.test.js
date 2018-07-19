const request = require('supertest')
const expect = require('chai').expect
const moment = require('moment')
const sinon = require('sinon')
const Ajv = require('ajv')
const rfr = require('rfr')
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
const jwtDecode = require('jwt-decode')

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

describe('@AUTH_1 AUTH TEST', () => {
  let { establecimientos, empresas, areas, puestos, accidentes, capacitaciones, personas, novedades } = dump
  // id
  // componentes
  // datos prueba
  // resultados esperados
  // resultados obtenidos
  // let persona = personas.INSPECTOR_SEGURIDAD
  // let persona2 = personas.ADMIN_I2SOLUTIONS
  // let usuario = {
  //   usuario: persona['usuario'],
  //   clave: 'aaa'
  // }
  // let usuario_NOVALIDO = {
  //   usuario: persona['usuario'] + 'a',
  //   clave: 'aaa'
  // }

  // before('Limpiar la base de datos', async () => {
  //   await db.Limpiar()
  // })
  // beforeEach('Crear el usuario', async () => {
  //   await models.personas.Crear(persona)
  // })
  // after('Desconectar la base de datos', function() {
  //   generatorDocs.generateAPI({ docs, archivo: 'api.auth.md', nombre: 'Auth' })
  // })
  // afterEach('Limpiar la base de datos', async () => {
  //   await db.Limpiar()
  // })

  // context('usuario y clave valido', () => {
  //   it('@CP1 valido', async () => {
  //     let { API_1 } = API
  //     let req = usuario
  //     let res = await request(app).post(`/api/auth/login`).send(req)
  //     expect(res.body.estado).to.equal(true)
  //     expect(res.body.codigoEstado).to.equal(200)
  //     generatorDocs.OK({ docs, doc: API_1, res, req })
  //   })
  //   it('@CP2 NO valido', async () => {
  //     let { API_1 } = API
  //     let req = usuario_NOVALIDO
  //     let res = await request(app).post(`/api/auth/login`).send(req)
  //     expect(res.body.estado).to.equal(false)
  //     expect(res.body.codigoEstado).to.equal(200)
  //     generatorDocs.ERROR({ nombre: 'Usuario no valido', docs, doc: API_1, res, req })
  //   })
  // })

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
