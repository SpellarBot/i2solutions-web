const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = process.env.MONGO_DB_URL

const dbName = process.env.MONGO_DB_NAME

MongoClient.connect(url, (err, client) => {
  assert.equal(null, err)
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  Promise.all([
    LimpiarColeccion('novedades', db),
    LimpiarColeccion('puestos', db),
    LimpiarColeccion('puestos_detalle', db),
    LimpiarColeccion('areas', db),
    LimpiarColeccion('equipos', db),
    LimpiarColeccion('riesgos', db),
    LimpiarColeccion('counters', db)])
    .then((values) => {
      console.log(values)
      client.close()
    }).catch((err) => {
      console.log(err)
    })
})

function LimpiarColeccion (nombreColeccion, db) {
  return new Promise((resolve, reject) => {
    db.collection(nombreColeccion).remove({}, function (err, numberRemoved) {
      console.log('inside remove call back' + numberRemoved)
      if (err) {
        reject(nombreColeccion)
        throw new Error(`Ha ocurrido un error ${err}`)
      } else {
        resolve(nombreColeccion)
      }
    })
  })
}
