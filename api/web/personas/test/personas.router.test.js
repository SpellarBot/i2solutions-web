const request = require('supertest')
const expect = require('chai').expect
const rfr = require('rfr')
const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, jsonPointers: true })

const generatorDocs = rfr('api/config/documentacion')
const db = rfr('api/config/db')
const app = rfr('app')
const dump = rfr('api/config/dump')
const utils = rfr('api/utils')

const SCHEMA = require('../API_SCHEMA')
const API = require('./API_DOCS')
const EQUI = require('./API_EQUI')
const models = db.db
let docs = []
let equivalencias = {}

describe('Personas', () => {
  let { personas, establecimientos, capacitaciones, empresas, puestos } = dump
  let persona = personas.VALIDOS[0]
  let persona2 = personas.VALIDOS[1]
  let puesto = puestos.VALIDOS0]
  let puesto2 = puestos.VALIDOS[1]
  let establecimiento = establecimientos.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let capacitacion = capacitaciones.VALIDOS[0]
  let empresa = empresas.VALIDOS[0]
  beforeEach(async () => {
    let empresaCreada = await models.empresas.Crear(empresa)
    let empresasId = empresaCreada['id']
    let establecimientosCreada = await models.establecimientos.Crear(establecimiento)
    establecimientosId = establecimientosCreada['id']
    let establecimientosCreada2 = await models.establecimientos.Crear(establecimiento2)
    establecimientosId2 = establecimientosCreada2['id']
  })
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    generatorDocs.EQUI({ equivalencias, nombre: 'Personas' })
    generatorDocs.generateAPI({ docs, archivo: 'api.personas.md', nombre: 'Personas' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })

  describe('Crear una persona', () => { // como se manejara las claves?
    it('@CP2 crearla sin anadirla a un establecimiento', async () => {
      let { API_1 } = API
      let req = persona
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.nombres).to.equal(persona['nombres'])
      generatorDocs.OK({ docs, doc: API_1, res, req })
    })
    it('@CP2.1 crearla y anadirla a establecimiento')
  })

  describe('Actualizar una persona', () => {
    let { API_2 } = API
    it('@CP3 solo la persona', async () => {
      let personaCreada = await models.personas.Crear(persona)
      personaCreada['nombres'] = 'Nombre cambiado'
      let req = personaCreada
      let res = await request(app).put(`/api/web/personas/${personaCreada['id']}`).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.OK({ docs, doc: API_2, res, req })
    })
    it('@CP3.1 persona con ese id no existe', async () => {
      let req = persona
      let res = await request(app).put(`/api/web/personas/5`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ERROR({ nombre: 'El id de la persona no existe', docs, doc: API_2, res, req })
    })
  })

  describe('Borrar una persona', () => {
    let { API_3 } = API
    // it('@CP4 OK', async () => {
    //   let personaCreada = await models.personas.Crear(persona)
    //   let personaCreada2 = await models.personas.Crear(persona2)
    //   await models.personasEstablecimientos.Crear({ personasId: personaCreada['id'], establecimientosId: 1})
    //   await models.personasCapacitaciones.Crear({ personasId: personaCreada['id'], capacitacionesId: 1})
    //   let res = await request(app).delete(`/api/web/personas/${personaCreada['id']}`)
    //   expect(res.body.estado).to.equal(true)
    //   expect(res.body.codigoEstado).to.equal(200)
    //   generatorDocs.OK({ docs, doc: API_4, res })
    // })
    it('@CP4.1 la persona no existe persona', async () => {
      let res = await request(app).delete(`/api/web/personas/50`)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ERROR({ nombre: 'El id de la persona no existe', docs, doc: API_3, res })
    })
  })

  describe('Obtener una persona', () => {
    let { API_4 } = API
    it('@CP5 obtener una persona', async () => {
      let personaCreada = await models.personas.Crear(persona)
      let res = await request(app).get(`/api/web/personas/${personaCreada['id']}`)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos['nombres']).to.equal(personaCreada['nombres'])
      generatorDocs.OK({ docs, doc: API_4, res })
    })
  })

  // describe('Obtener todas las personas ', () => {
  //   it('@CP1 OK', async () => {
  //     let { API_1 } = API
  //     let personaCreada = await models.personas.Crear(persona)
  //     let res = await request(app).get(`/api/web/personas`)
  //     expect(res.body.estado).to.equal(true)
  //     expect(res.body.codigoEstado).to.equal(200)
  //     expect(res.body.datos.length).to.equal(1)
  //     generatorDocs.OK({ docs, doc: API_1, res })
  //   })
  //   it('@CP1.1 por empresa')
  // })

  // describe('Obtener una personas por establecimiento', () => {
  //   let { API_6 } = API
  //   it('@CP6 OK', async () => {
  //     let establecimientoCreada = await models.establecimientos.Crear(establecimiento)
  //     let personaCreada2 = await models.personas.Crear(persona2)
  //     let personaCreada = await models.personas.Crear(persona)
  //     await models.personasEstablecimientos.Crear({ personasId: personaCreada['id'], establecimientosId: establecimientoCreada['id'], rol: 'jefe' })
  //     await models.personasEstablecimientos.Crear({ personasId: personaCreada2['id'], establecimientosId: establecimientoCreada['id'], rol: 'empleado' })
  //     let res = await request(app).get(`/api/web/personas/establecimientos/${establecimientoCreada['id']}`)
  //     expect(res.body.estado).to.equal(true)
  //     expect(res.body.codigoEstado).to.equal(200)
  //     expect(res.body.datos.length).to.equal(2)
  //     generatorDocs.OK({ docs, doc: API_6, res })
  //   })
  // })
})
