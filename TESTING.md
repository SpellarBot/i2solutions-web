# Template para testing

```js
const request = require('supertest')
const expect = require('chai').expect
const moment = require('moment')
const sinon = require('sinon')
const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
function e(validate) {
  return `${JSON.stringify(validate.errors, null, 2)}`
}
const db = require('./config/db').db
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
})
```

# Template testing describe

it() = specify()
describe() = context()
