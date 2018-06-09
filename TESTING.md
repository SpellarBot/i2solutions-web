# Template para testing

```js
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
const db = rfr('api/config/db')
const app = rfr('app')
const dump = rfr('api/config/dump')
const models = db.db
describe('TEST', () => {
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    db.Desconectar()
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  describe('@API_1 ', () => {
    it('@CP1 OK', async () => {
      let res = await request(app).get(`/api/movil/puestosDeUnArea/${areaId}`)
      expect(validate(datos), e(validate)).to.equal(true)
    })
  })
})
```

# Template testing describe

it() = specify()
describe() = context()
