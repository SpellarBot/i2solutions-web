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
let docs = []
describe('TEST', () => {
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    // db.Desconectar()
    generatorDocs.generateAPI({ docs, archivo: '', nombre: '' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  describe('@API_1 ', () => {
    it('@CP1 OK', async () => {
      let res = await request(app).get(`/api/movil/puestosDeUnArea/${areaId}`)
      const validate = ajv.compile(sres.MOVIL.API_1)
      expect(validate(datos), e(validate)).to.equal(true)
      generatorDocs.OK({ docs, doc: API_1, res })
      // const validate = ajv.compile(AUTH.CP1)
    // expect(validate(res.body.datos), e(validate)).to.equal(true)
    // const decoded = jwtDecode(res.body.datos.token)
    })
  })
})
```

```js
for (let foo of ['nl', 'fr', 'de']) {
      it('This thing should behave like this', function(done) {
        done()
      })
    }
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

# Controller

```js
const co = require('co')
module.exports = (app) => {
  const proto = {

  }
  return Object.assign(Object.create(proto), {})
}

```

# Router

```js
const responses = require('../../responses')
const db = require('../../config/db').db
const Controller = require('./empresas.controller')({ responses, db })
module.exports = (app) => {

}

```

