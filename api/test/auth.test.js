const request = require('supertest')
const expect = require('chai').expect
const moment = require('moment')
const sinon = require('sinon')
const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
const jwtDecode = require('jwt-decode')

const app = require('../../app')
const db = require('../config/db')
const models = require('../config/db').db
const dump = require('../config/dump')
const Sres = require('../config/schemas/responses')

function e(validate) {
  return `${JSON.stringify(validate.errors, null, 2)}`
}

describe('@AUTH_1 AUTH TEST', () => {

  // id
  // componentes
  // datos prueba
  // resultados esperados
  // resultados obtenidos
  let persona = dump.personas.VALIDOS[0]
  let usuario = {
    usuario: persona['usuario'],
    clave: persona['clave']
  }
  let usuario_NOVALIDO = {
    usuario: persona['usuario'] + 'a',
    clave: persona['clave']
  }

  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  beforeEach('Crear el usuario', async () => {
    await models.personas.Crear(persona)
  })
  after('Desconectar la base de datos', function() {
    // db.Desconectar()
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  const { AUTH } = Sres
  context('usuario y clave valido', () => {
    it('@CP1 valido', async () => {
      let res = await request(app).post(`/api/auth/login`).send(usuario)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      const validate = ajv.compile(AUTH.CP1)
      expect(validate(res.body.datos), e(validate)).to.equal(true)
      // const decoded = jwtDecode(res.body.datos.token)
    })
    it('@CP2 NO valido', async () => {
      let res = await request(app).post(`/api/auth/login`).send(usuario_NOVALIDO)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
    })
  })

  context('autorizacion', () => {
    it('@CP3 NO autorizado', async () => {
      let res = await request(app).get(`/api/auth/verify`).set({ Authorization: 'Bearer AAAAAA'})
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(401)
    })
    it('@CP4 autorizado', async () => {
      let login = await request(app).post(`/api/auth/login`).send(usuario)
      let { token } = login.body.datos
      let res = await request(app).get(`/api/auth/verify`).set({ Authorization: `Bearer ${token}`})
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
    })
  })

  context('tiempo autorizado', () => {
    it('@CP5 verificar un dia de autorizado', async () => {
      let clock = sinon.useFakeTimers()
      const d1 = moment.duration({ days: 1 })
      const h1 = moment.duration({ hours: 5 })
      let login = await request(app).post(`/api/auth/login`).send(usuario)
      let { token } = login.body.datos
      const validate = ajv.compile(AUTH.CP1)
      expect(validate( login.body.datos), e(validate)).to.equal(true)
      clock.tick(h1.asMilliseconds())
      let res = await request(app).get(`/api/auth/verify`).set({ Authorization: `Bearer ${token}`})
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      clock.tick(d1.asMilliseconds())
      let resDay = await request(app).get(`/api/auth/verify`).set({ Authorization: `Bearer ${token}`})
      expect(resDay.body.estado).to.equal(false)
      expect(resDay.body.codigoEstado).to.equal(401)
      clock.restore()
    })
  })
})
