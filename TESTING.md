```sh
NODE_ENV=testing yarn mocha api/web/empresas/test/empresas.router.test.js
```

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
const generatorDocs = rfr('api/config/documentacion')
const db = rfr('api/config/db')
const app = rfr('app')
const dump = rfr('api/config/dump')
const API = require('./API_DOCS')
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
    generatorDocs.generateAPI({ docs, archivo: '', nombre: '' })
  })
  describe('@API_1 ', () => {
    it('@CP1 OK', async () => {
      let res = await request(app).get(`/api/movil/puestosDeUnArea/${areaId}`)
      expect(validate(datos), e(validate)).to.equal(true)
      generatorDocs.OK({ docs, doc: API_1, res })
    })
  })
})
```

# Template testing describe

it() = specify()
describe() = context()

# API_DOCS

```js
module.exports = {
  API_1 : {
    nombre: 'Obtener todas las empresas',
    metodo: 'GET',
    descripcion: 'Obtener todas las empresas de i2Solutions',
    url: '/api/web/empresas',
    params: [],
    body: [],
    errors: []
  },
  API_2 : {
    nombre: 'Crear empresas',
    metodo: 'POST',
    descripcion: 'Crear una empresa, esto tambien deberia crear un establecimiento por defecto',
    url: '/api/web/empresas',
    params: [],
    body: [],
    errors: []
  }
}

```