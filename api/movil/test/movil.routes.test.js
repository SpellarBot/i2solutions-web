const request = require('supertest')
const assert = require('assert')
const _ = require('lodash')
const expect = require('chai').expect
const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
require('ajv-errors')(ajv /*, {singleError: true} */);

const db = require('../../config/db')
const app = require('../../../app')
const models = require('../../config/db').db
const generatorDocs = require('../../config/documentacion')
const sres = require('../../config/schemas/responses.js')
const sreq = require('../../config/schemas/request.js')
let docs = []

function e(validate) {
  return `${JSON.stringify(validate.errors, null, 2)}`
}

describe('MOVIL TEST', () => {
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    generatorDocs.generateAPI({ docs })
    db.Desconectar()
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })

  describe('@API_1 OBTENER AREAS TRABAJO DADA UN AREA', () => {
    const novedad = require('../../config/dump/novedades.js').VALIDOS[0]

    /*
      variables request
      : areaId

      variables response
      [{ nombre, descripcion, id }]
    */

    let doc = {
      nombre: 'Obtener areas de trabajo por area',
      metodo: 'GET',
      descripcion: '',
      url: '/api/movil/puestosDeUnArea/:areaId',
      params: [
        { nombre: 'areaId', tipo: 'integer', descripcion: ' --- ' }
      ],
      body: [],
      errors: []
    }

    let cp = [
      {
        id: 'CP1',
        descripcion: '',
        datos: '',
        resultadoEsperado: '',
        resultadoObtenido: '',
        paso: ''
      }
    ]

    let ce = [
      {
        variable: 'areaId',
        ce: 'CE0',
        valores: 'areaId >= 1',
        EsValido: true
      },
      {
        variable: 'areaId',
        ce: 'CE1',
        valores: 'areaId < 1',
        EsValido: false
      }
    ]

    // test array vacio y con parametros
    it('@CP1 OK', async () => {
      let areaId = 1
      let res = await request(app).get(`/api/movil/puestosDeUnArea/${areaId}`)
      console.log(sreq.MOVIL.API_1)
      console.log(sres.MOVIL.API_1)
      // let datos = [{ id: 1, descripcion: 'aa', nombre: 'aa'}]
      // const validate = ajv.compile(sres.MOVIL.API_1)
      // expect(validate(datos), e(validate)).to.equal(true)
      // let n = await models.novedades.Crear(novedad)
      // let res = {}
      // let req = {}
      // req['body'] = [{ id: 'aa'}]
      // generatorDocs.OK({ docs, doc, res, req })
    })
    // for (let foo of ['nl', 'fr', 'de']) {
    //   it('This thing should behave like this', function(done) {
    //     done()
    //   })
    // }
  })

  describe('@t2 CREAR UNA NOVEDAD', () => {
  })

  describe('@t5 ATENDER NOVEDAD', () => {
  })

  describe('@t4 CREAR OBTENER DATOS INICIO', () => {
  })
})
