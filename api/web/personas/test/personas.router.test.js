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

describe('PERSONAS', () => {
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
    let empresaCreada = await models.empresas.Crear(empresa)
    let empresasId = empresaCreada['id']
    let establecimientosCreada = await models.establecimientos.Crear(establecimiento)
    let establecimientosId = establecimientosCreada['id']
    let establecimientosCreada2 = await models.establecimientos.Crear(establecimiento2)
    let establecimientosId2 = establecimientosCreada2['id']
    let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
    let areasId = areaCreada['id']
    let puestosCreada = await models.puestos.Crear({ ...puesto })
    await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
    puestosId = puestosCreada['id']
  })
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    // generatorDocs.EQUI({ equivalencias, nombre: 'Personas' })
    generatorDocs.generateAPI({ docs, archivo: 'api.personas.md', nombre: 'Personas' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })

  describe('API_1 CREAR', () => {
    const { API_1 } = API
    const { API_1_EQUI } = EQUI
    const codigoApi = 'API_1'

    it('@ICE_API_1_01 Crear correctamente', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol }
      let res = await request(app).post(`/api/web/personas`).send(req)
      let personaCreada = await models.personas.Obtener({ id: res.body.datos['id'] })
      expect(personaCreada).to.not.equal(null)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.OK({ docs, doc: API_1, res })
    })
  })

  describe('ACTUALIZAR', () => {
    const { API_2 } = API
    const { API_2_EQUI } = EQUI
    const codigoApi = 'API_2'

    let personasId = -1

    beforeEach(async () => {
      let personaCreada = await models.personas.Crear(persona_ADMIN_I2SOLUTIONS)
      await models.personasPuestos.Crear({ personasId: personaCreada['id'], puestosId })
      personasId = personaCreada['id']
    })

    it('@ICE_API_2_01 Actualizar correctamente', async () => {
      // let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = persona_EMPLEADO
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let personaCreada = await models.personas.Obtener({ id: personasId })
      expect(personaCreada).to.not.equal(null)
      let res = await request(app).put(url).send(req)
      personaActualizada = await models.personas.Obtener({ id: personasId })
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.OK({ docs, doc: API_2, res, req })
      // TODO: comprobar que al actualizacion de todos los datos fue correcta
    })
    // it('@CP3.1 persona con ese id no existe', async () => {
    //   let req = persona
    //   let res = await request(app).put(`/api/web/personas/5`).send(req)
    //   expect(res.body.estado).to.equal(false)
    //   expect(res.body.codigoEstado).to.equal(200)
    //   generatorDocs.ERROR({ nombre: 'El id de la persona no existe', docs, doc: API_2, res, req })
    // })
  })

  describe('BORRAR', () => {
    const { API_3 } = API
    const { API_3_EQUI } = EQUI
    const codigoApi = 'API_3'

    let personasId = -1

    beforeEach(async () => {
      let personaCreada = await models.personas.Crear(persona_ADMIN_I2SOLUTIONS)
      await models.personasPuestos.Crear({ personasId: personaCreada['id'], puestosId })
      personasId = personaCreada['id']
    })

    it('@ICE_API_3_01 Eliminar correctamente', async () => {
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      let personaCreada = await models.personas.Obtener({ id: personasId })
      expect(personaCreada).to.equal(null)
      let personaPuestosCreada = await models.personasPuestos.ObtenerPorPersona({ id: personasId })
      expect(personaPuestosCreada).to.equal(null)
      generatorDocs.OK({ docs, doc: API_3, res })
      // generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })
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
    // it('@CP4.1 la persona no existe persona', async () => {
    //   let res = await request(app).delete(`/api/web/personas/50`)
    //   expect(res.body.estado).to.equal(false)
    //   expect(res.body.codigoEstado).to.equal(200)
    //   generatorDocs.ERROR({ nombre: 'El id de la persona no existe', docs, doc: API_3, res })
    // })
  })

  describe('API_4 OBTENER UNA', () => {
    const { API_4 } = API
    const { API_4_EQUI } = EQUI
    const codigoApi = 'API_4'

    let personasId = -1

    beforeEach(async () => {
      let personaCreada = await models.personas.Crear(persona_ADMIN_I2SOLUTIONS)
      await models.personasPuestos.Crear({ personasId: personaCreada['id'], puestosId })
      personasId = personaCreada['id']
    })

    it('@ICE_API_4_01 OBTENER CORRECTAMENTE', async () => {
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.OK({ docs, doc: API_4, res })
      // generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })
  })

  describe('API_8 ANADIR UNA PERSONA A UN PUESTO', () => {
    const { API_8 } = API
    // const { API_8_EQUI } = EQUI
    const codigoApi = 'API_8'

    let personasId = -1

    beforeEach(async () => {
      let personaCreada = await models.personas.Crear(persona_ADMIN_I2SOLUTIONS)
      personasId = personaCreada['id']
    })

    it('@ICE_API_8_01 ANADIR CORRECTAMENTE', async () => {
      let params = { personasId, puestosId }
      let url = `/api/web/personas/${params['personasId']}/puestos/${params['puestosId']}`
      let res = await request(app).put(url)
      let personaPuestosCreada = await models.personasPuestos.ObtenerPorPersona({ id: personasId })
      expect(personaPuestosCreada).to.not.equal(null)
      generatorDocs.OK({ docs, doc: API_8, res })
      // generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
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
