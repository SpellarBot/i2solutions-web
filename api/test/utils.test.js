const request = require('supertest')
const expect = require('chai').expect
const moment = require('moment')
const sinon = require('sinon')
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
const utils = require('../utils')
const models = db.db
let docs = []
describe('Utils Test', () => {
  describe('RUC ', () => {
    it('OK', async () => {
      // let res = await request(app).get(`/api/movil/puestosDeUnArea/${areaId}`)
      // const validate = ajv.compile(sres.MOVIL.API_1)
      //expect(validate(datos), e(validate)).to.equal(true)
      // generatorDocs.OK({ docs, doc: API_1, res })
      // const validate = ajv.compile(AUTH.CP1)
      // expect(validate(res.body.datos), e(validate)).to.equal(true)
      // const decoded = jwtDecode(res.body.datos.token)
    })
  })
})