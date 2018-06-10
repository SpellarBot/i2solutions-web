const request = require('supertest')
const expect = require('chai').expect
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
describe('Personas', () => {
  let { personas } = dump
  let persona = personas.VALIDOS[0]
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    // db.Desconectar()
    generatorDocs.generateAPI({ docs, archivo: 'api.personas.md', nombre: 'Personas' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  describe('Obtener todas las personas ', () => {
    it('@CP1 OK', async () => {
      let { API_1 } = API
      let personaCreada = await models.personas.Crear(persona)
      let res = await request(app).get(`/api/web/personas`)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(1)
      generatorDocs.OK({ docs, doc: API_1, res })
    })
    it('@CP1.1 por empresa')
    it('@CP1.2 por establecimiento')
  })

  describe('Crear una persona', () => { // como se manejara las claves?
    it('@CP2 crearla sin anadirla a un establecimiento', async () => {
      let { API_2 } = API
      let req = persona
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.nombres).to.equal(persona['nombres'])
      generatorDocs.OK({ docs, doc: API_2, res, req })
    })
    it('@CP2.1 crearla y anadirla a establecimiento')
  })

  describe('Actualizar una persona', () => {
    let { API_3 } = API
    it('@CP3 solo la persona', async () => {
      let personaCreada = await models.personas.Crear(persona)
      personaCreada['nombres'] = 'Nombre cambiado'
      let req = personaCreada
      let res = await request(app).put(`/api/web/personas/${personaCreada['id']}`).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.OK({ docs, doc: API_3, res, req })
    })
    it('@CP3.1 persona con ese id no existe', async () => {
      let req = persona
      let res = await request(app).put(`/api/web/personas/5`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ERROR({ nombre: 'El id de la persona no existe', docs, doc: API_3, res, req })
    })
  })
})
