const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = process.env.MONGO_DB_URL

const dbName = process.env.MONGO_DB_NAME

MongoClient.connect(url, (err, client) => {
  assert.equal(null, err)
  console.log('Connected successfully to server')

  const db = client.db(dbName)
  db.collection('novedades').remove({}, function (err, numberRemoved) {
    if (err) {
      throw new Error(`Ha ocurrido un error ${err}`)
    }
    console.log('inside remove call back' + numberRemoved)
  })
  db.collection('puestos').remove({}, function (err, numberRemoved) {
    console.log('inside remove call back' + numberRemoved)
    if (err) {
      throw new Error(`Ha ocurrido un error ${err}`)
    }
  })
  db.collection('puestos_detalle').remove({}, function (err, numberRemoved) {
    console.log('inside remove call back' + numberRemoved)
    if (err) {
      throw new Error(`Ha ocurrido un error ${err}`)
    }
  })
  db.collection('counters').remove({}, function (err, numberRemoved) {
    console.log('inside remove call back' + numberRemoved)
    if (err) {
      throw new Error(`Ha ocurrido un error ${err}`)
    }
  })
})
