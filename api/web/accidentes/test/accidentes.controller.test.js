var expect = require('chai').expect
const rfr = require('rfr')
const responses = rfr('api/responses')
const db = rfr('api/config/db').db
let dbDump = {
  puestos: {
    Obtener() {
      return new Promise((resolve, reject) => {
        reject(true)
      })
    }
  },
  accidentes: {
    Crear() {
      return new Promise((resolve, reject) => {
        reject(true)
      })
    },
    Obtener() {
      return new Promise((resolve, reject) => {
        reject(true)
      })
    },
    Actualizar() {
      return new Promise((resolve, reject) => {
        reject(true)
      })
    },
    Borrar() {
      return new Promise((resolve, reject) => {
        reject(true)
      })
    },
    ObtenerPorEstablecimiento() {
      return new Promise((resolve, reject) => {
        reject(true)
      })
    },
    ObtenerPorAreas() {
      return new Promise((resolve, reject) => {
        reject(true)
      })
    },
    ObtenerPorPuestos() {
      return new Promise((resolve, reject) => {
        reject(true)
      })
    }
  }
}
const Controller = require('../accidentes.controller')({ responses, db: dbDump })
it('should do something with promises', function(done) {
  // const a = rfr('api/config/db/models/accidentes')
  // let model = sequelize['import']('../../db/models/accidentes.js')
  console.log(typeof db.accidentes)
  // for(var propertyName in myObject) {

  // }
  Controller.Crear({ puestosId: 1 }).catch(err => {
    done()
  })
});
