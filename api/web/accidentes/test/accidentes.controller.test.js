var expect = require('chai').expect
const rfr = require('rfr')
const responses = rfr('api/responses')
const db = rfr('api/config/db').db

function crearStub(tipo, metodo, response) {
  let modelStub = {}
  if (tipo === 'resolve') {
    modelStub[metodo] = () => { return Promise.resolve(response) }
    return modelStub
  }
  modelStub[metodo] = () => { return Promise.reject(response) }
  return modelStub
}

// describe('ACCIDENTES CONTROLLER', () => {
//   it('Crear', function() {
//     let db = {}
//     db['puestos'] = crearStub('reject', 'Obtener', true)
//     const Controller = require('../accidentes.controller')({ responses, db })
//     Controller.Crear({ puestosId: 1 }).catch((err) => {
//       expect(err).to.equal(true)
//     })
//   })

//   it('Obtener', function() {
//     let db = {}
//     db['accidentes'] = crearStub('reject', 'Obtener', true)
//     const Controller = require('../accidentes.controller')({ responses, db })
//     Controller.Obtener({ id: 1 }).catch((err) => {
//       expect(err).to.equal(true)
//     })
//   })

//   describe('Actualizar', () => {
//     it('Obtener puesto', function() {
//       let db = {}
//       db['puestos'] = crearStub('reject', 'Obtener', true)
//       const Controller = require('../accidentes.controller')({ responses, db })
//       Controller.Actualizar({ id: 1 }).catch((err) => {
//         expect(err).to.equal(true)
//       })
//     })
//     it('Actualizar accidente', function() {
//       let db = {}
//       db['puestos'] = crearStub('reject', 'Obtener', true)
//       db['accidentes'] = crearStub('reject', 'Actualizar', true)
//       const Controller = require('../accidentes.controller')({ responses, db })
//       Controller.Actualizar({ id: 1 }).catch((err) => {
//         expect(err).to.equal(true)
//       })
//     })
//   })

//   it('Borrar', function() {
//     let db = {}
//     db['accidentes'] = crearStub('reject', 'Borrar', true)
//     const Controller = require('../accidentes.controller')({ responses, db })
//     Controller.Borrar({ id: 1 }).catch((err) => {
//       expect(err).to.equal(true)
//     })
//   })

//   it('ObtenerPorEstablecimiento', function() {
//     let db = {}
//     db['accidentes'] = crearStub('reject', 'ObtenerPorEstablecimiento', true)
//     const Controller = require('../accidentes.controller')({ responses, db })
//     Controller.ObtenerPorEstablecimiento({ id: 1 }).catch((err) => {
//       expect(err).to.equal(true)
//     })
//   })

//   it('ObtenerPorAreas', function() {
//     let db = {}
//     db['accidentes'] = crearStub('reject', 'ObtenerPorAreas', true)
//     const Controller = require('../accidentes.controller')({ responses, db })
//     Controller.ObtenerPorAreas({ id: 1 }).catch((err) => {
//       expect(err).to.equal(true)
//     })
//   })

//   it('ObtenerPorPuestos', function() {
//     let db = {}
//     db['accidentes'] = crearStub('reject', 'ObtenerPorPuestos', true)
//     const Controller = require('../accidentes.controller')({ responses, db })
//     Controller.ObtenerPorPuestos({ id: 1 }).catch((err) => {
//       expect(err).to.equal(true)
//     })
//   })
// })

// require('mocha-sinon')
// this.sinon.stub(logger, 'error')
// beforeEach(function() {
//       this.sinon.stub(logger, 'error')
//     })
// expect(logger.error.calledOnce).to.be.true
