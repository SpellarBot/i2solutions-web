const request = require('supertest')
const sinon = require('sinon')
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
  let persona_INSPECTOR_SEGURIDAD = personas.INSPECTOR_SEGURIDAD
  let persona = personas.ADMIN_I2SOLUTIONS
  let persona2 = personas.INSPECTOR_SEGURIDAD
  let persona3 = personas.EMPLEADO
  let puesto = puestos.VALIDOS[0]
  let puesto2 = puestos.VALIDOS[1]
  let establecimiento = establecimientos.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let capacitacion = capacitaciones.VALIDOS[0]
  let empresa = empresas.VALIDOS[0]
  let area = areas.VALIDOS[0]
  let puestosId = -1
  let establecimientosId = -1
  let areasId = -1
  let clock = {}
  beforeEach(async () => {
    clock = sinon.useFakeTimers(new Date(2018,7,1).getTime())
    let empresaCreada = await models.empresas.Crear(empresa)
    let empresasId = empresaCreada['id']
    let establecimientosCreada = await models.establecimientos.Crear(establecimiento)
    establecimientosId = establecimientosCreada['id']
    let establecimientosCreada2 = await models.establecimientos.Crear(establecimiento2)
    let establecimientosId2 = establecimientosCreada2['id']
    let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
    areasId = areaCreada['id']
    let puestosCreada = await models.puestos.Crear({ ...puesto })
    await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
    puestosId = puestosCreada['id']
  })
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    clock.restore()
    generatorDocs.EQUI({ equivalencias, nombre: 'Personas' })
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
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_INSPECTOR_SEGURIDAD
      let req = { nombres, apellidos, correo: 'joelerll@gmail.com', cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol, puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      let personaCreada = await models.personas.Obtener({ id: res.body.datos['id'] })
      expect(personaCreada).to.not.equal(null)
      let relacion = await models.personasPuestos.ObtenerPorPersona({ id: personaCreada['id'] })
      expect(relacion).to.not.equal(null)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.OK({ docs, doc: API_1, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })

    it('@ICE_API_1_02 nombres tipo no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = { nombres: 1, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol, puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })

    it('@ICE_API_1_03 nombres tamano no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = { nombres: 'a', apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol, puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })

    it('@ICE_API_1_04 apellidos tipo no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = { nombres, apellidos: 1, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol, puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })

    it('@ICE_API_1_05 apellidos tamano no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = { nombres, apellidos: 'a', correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol, puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })

    it('@ICE_API_1_06 cedula no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = { nombres, apellidos, correo, cedula: '093564', telefono, fechaNacimiento, perfilOcupacional, usuario, rol, puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })

    it('@ICE_API_1_07 correo no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = { nombres, apellidos, correo: 'joelerll@', cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol, puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })

    it('@ICE_API_1_08 telefono no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = { nombres, apellidos, correo, cedula, telefono: 1, fechaNacimiento, perfilOcupacional, usuario, rol, puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })

    it('@ICE_API_1_09 fechaNacimiento no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento: '2017-13-10', perfilOcupacional, usuario, rol, puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })

    it('@ICE_API_1_10 perfilOcupacional tipo no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional: 1, usuario, rol, puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })

    it('@ICE_API_1_11 perfilOcupacional tamano no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional: '', usuario, rol, puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })

    it('@ICE_API_1_12 usuario tipo no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario: 1, rol, puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '12', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })

    it('@ICE_API_1_13 usuario tamano no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario: 'a', rol, puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '13', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })

    it('@ICE_API_1_14 rol no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_ADMIN_I2SOLUTIONS
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol: 'otro rol', puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '14', equivalencias, equi: API_1_EQUI, res, codigoApi })
    })
  })

  describe('API_2 ACTUALIZAR', () => {
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
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol }
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
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
      // TODO: comprobar que al actualizacion de todos los datos fue correcta
    })

    it('@ICE_API_2_02 nombres tipo no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres: 1, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol }
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_03 nombres tamano no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres: '', apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol }
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_04 apellidos tipo no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos: 1, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol }
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_05 apellidos tamano no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos: '', correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol }
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_06 cedula no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos, correo, cedula: '093213', telefono, fechaNacimiento, perfilOcupacional, usuario, rol }
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_07 correo no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos, correo: 'joelerll@', cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol }
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_08 telefono no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos, correo, cedula, telefono: 1, fechaNacimiento, perfilOcupacional, usuario, rol }
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_09 fechaNacimiento no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento:'2017-13-05', perfilOcupacional, usuario, rol }
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_10 perfilOcupacional tipo no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional: 1, usuario, rol }
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_11 perfilOcupacional tamano no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional: 'a', usuario, rol }
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_12 usuario tipo no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario: 1, rol }
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '12', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_13 usuario tamano no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario: '', rol }
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '13', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_14 rol no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol: 'otro rol' }
      let params = { personasId }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '14', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_15 personasId tipo no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol }
      let params = { personasId: 'a' }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '15', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_16 personasId tamano no valido', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol }
      let params = { personasId: 0 }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '16', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_17 personasId no existe', async () => {
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_EMPLEADO
      let req = { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol }
      let params = { personasId: 50 }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '17', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })
  })

  describe('API_3 BORRAR', () => {
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
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_02 personasId no valido tipo de dato', async () => {
      let params = { personasId: 'a' }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_03 personasId  no valido numero', async () => {
      let params = { personasId: 0 }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_04 personasId no exite', async () => {
      let params = { personasId: 50 }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })
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
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_02 personasId no valido tipo de dato', async () => {
      let params = { personasId: 'a' }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_03 personasId  no valido numero', async () => {
      let params = { personasId: 0 }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_04 personasId no exite', async () => {
      let params = { personasId: 50 }
      let url = `/api/web/personas/${params['personasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })
  })

  describe('API_5 OBTENER PERSONAS POR ESTABLECIMIENTO', () => {
    const { API_5 } = API
    const { API_5_EQUI } = EQUI
    const codigoApi = 'API_5'

    let personasId = -1

    beforeEach(async () => {
      let personaCreada = await models.personas.Crear(persona_ADMIN_I2SOLUTIONS)
      await models.personasPuestos.Crear({ personasId: personaCreada['id'], puestosId })
      personasId = personaCreada['id']
    })

    it('@ICE_API_5_01 OBTENER CORRECTAMENTE', async () => {
      let params = { establecimientosId }
      let url = `/api/web/personas/establecimientos/${params['establecimientosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.OK({ docs, doc: API_5, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_5_02 establecimientosId no valido tipo de dato', async () => {
      let params = { establecimientosId: 'a' }
      let url = `/api/web/personas/establecimientos/${params['establecimientosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_5_03 establecimientosId no valido numero', async () => {
      let params = { establecimientosId: 0 }
      let url = `/api/web/personas/establecimientos/${params['establecimientosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_5_04 establecimientosId no exite', async () => {
      let params = { establecimientosId: 50 }
      let url = `/api/web/personas/establecimientos/${params['establecimientosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })
  })

  describe('API_6 OBTENER PERSONAS POR AREAS', () => {
    const { API_6 } = API
    const { API_6_EQUI } = EQUI
    const codigoApi = 'API_6'

    let personasId = -1

    beforeEach(async () => {
      let personaCreada = await models.personas.Crear(persona_ADMIN_I2SOLUTIONS)
      await models.personasPuestos.Crear({ personasId: personaCreada['id'], puestosId })
      personasId = personaCreada['id']
    })

    it('@ICE_API_6_01 OBTENER CORRECTAMENTE', async () => {
      let params = { areasId }
      let url = `/api/web/personas/areas/${params['areasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.OK({ docs, doc: API_6, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_6_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_6_02 areasId no valido tipo de dato', async () => {
      let params = { areasId: 'a' }
      let url = `/api/web/personas/areas/${params['areasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_6_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_6_03 areasId  no valido numero', async () => {
      let params = { areasId: 0 }
      let url = `/api/web/personas/areas/${params['areasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_6_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_6_04 areasId no exite', async () => {
      let params = { areasId: 50 }
      let url = `/api/web/personas/areas/${params['areasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_6_EQUI, res, codigoApi, url, params })
    })
  })

  describe('API_7 OBTENER PERSONAS POR PUESTO', () => {
    const { API_7 } = API
    const { API_7_EQUI } = EQUI
    const codigoApi = 'API_7'

    let personasId = -1

    beforeEach(async () => {
      let personaCreada = await models.personas.Crear(persona_ADMIN_I2SOLUTIONS)
      await models.personasPuestos.Crear({ personasId: personaCreada['id'], puestosId })
      personasId = personaCreada['id']
    })

    it('@ICE_API_7_01 OBTENER CORRECTAMENTE', async () => {
      let params = { puestosId }
      let url = `/api/web/personas/puestos/${params['puestosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.OK({ docs, doc: API_7, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_7_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_7_02 puestosId no valido tipo de dato', async () => {
      let params = { puestosId: 'a' }
      let url = `/api/web/personas/puestos/${params['puestosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_7_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_7_03 puestosId  no valido numero', async () => {
      let params = { puestosId: 0 }
      let url = `/api/web/personas/puestos/${params['puestosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_7_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_7_04 puestosId no exite', async () => {
      let params = { puestosId: 50 }
      let url = `/api/web/personas/puestos/${params['puestosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_7_EQUI, res, codigoApi, url, params })
    })
  })

  describe('API_8 ANADIR UNA PERSONA A UN PUESTO', () => {
    const { API_8 } = API
    const { API_8_EQUI } = EQUI
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
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      let personaPuestosCreada = await models.personasPuestos.ObtenerPorPersona({ id: personasId })
      expect(personaPuestosCreada).to.not.equal(null)
      generatorDocs.OK({ docs, doc: API_8, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_8_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_8_02 personasId no valido tipo de dato', async () => {
      let params = { personasId: 'a', puestosId }
      let url = `/api/web/personas/${params['personasId']}/puestos/${params['puestosId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_8_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_8_03 personasId  no valido numero', async () => {
      let params = { personasId: 0, puestosId }
      let url = `/api/web/personas/${params['personasId']}/puestos/${params['puestosId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_8_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_8_04 personasId no exite', async () => {
      let params = { personasId: 50, puestosId }
      let url = `/api/web/personas/${params['personasId']}/puestos/${params['puestosId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_8_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_8_05 puestosId no valido tipo de dato', async () => {
      let params = { personasId, puestosId: 'a' }
      let url = `/api/web/personas/${params['personasId']}/puestos/${params['puestosId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_8_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_8_06 puestosId  no valido numero', async () => {
      let params = { personasId, puestosId: 0 }
      let url = `/api/web/personas/${params['personasId']}/puestos/${params['puestosId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_8_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_8_07 puestosId no exite', async () => {
      let params = { personasId, puestosId: 50 }
      let url = `/api/web/personas/${params['personasId']}/puestos/${params['puestosId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_8_EQUI, res, codigoApi, url, params })
    })

  })

  describe('API_9 GENERAR CLAVE', () => {
    it('@ICE_API_9_01 Crear correctamente', async () => {
      clock.restore()
      let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = persona_INSPECTOR_SEGURIDAD
      let req = { nombres, apellidos, correo: 'joelerll@gmail.com', cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol, puestosId }
      let res = await request(app).post(`/api/web/personas`).send(req)
      let personaCreada = await models.personas.Obtener({ id: res.body.datos['id'] })
      expect(personaCreada).to.not.equal(null)
      let relacion = await models.personasPuestos.ObtenerPorPersona({ id: personaCreada['id'] })
      expect(relacion).to.not.equal(null)
    })
  })

  describe('API_10 CAMBIO CLAVE', () => {
    const { API_10 } = API
    let personasId = -1
    let correo = ''

    beforeEach(async () => {
      let personaCreada = await models.personas.Crear(persona_ADMIN_I2SOLUTIONS)
      await models.personasPuestos.Crear({ personasId: personaCreada['id'], puestosId })
      personasId = personaCreada['id']
      correo = personaCreada['correo']
    })
    it('@ICE_API_10_01 Crear correctamente', async () => {
      clock.restore()
      let req = { correo }
      let res = await request(app).put(`/api/web/personas/CambioClave/enviarToken`).send(req)
      generatorDocs.OK({ docs, doc: API_10, res })
    })
  })

  describe('API_11 EXISTENCIA DE CLAVE O CORREO', () => {
    const { API_11 } = API
    let personasId = -1
    let correo = ''
    let cedula = ''
    let personaCreada = {}, personaCreada2 = {}, personaCreada3 = {}

    beforeEach(async () => {
      personaCreada = await models.personas.Crear(persona_ADMIN_I2SOLUTIONS)
      await models.personasPuestos.Crear({ personasId: personaCreada['id'], puestosId })
      personaCreada2 = await models.personas.Crear(persona2)
      personaCreada3 = await models.personas.Crear(persona3)
      personasId = personaCreada['id']
      correo = personaCreada['correo']
      cedula = personaCreada['cedula']
    })
    it('@ICE_API_11_01 Encontrado correctamente', async () => {
      let query = { cedula, correo: personaCreada2['correo'], usuario: personaCreada3['usuario'] }
      let res = await request(app).get(`/api/web/personas/buscar/existenciaDe?cedula=${query['cedula']}&correo=${query['correo']}&usuario=${query['usuario']}`)
      generatorDocs.OK({ docs, doc: API_11, res })
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
    })
  })

})
