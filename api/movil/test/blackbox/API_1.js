const { Sreq, Sres } = require('../../../config/schemas')
module.exports = {
  Sreq,
  Sres,
  nombre: 'API_1',
  doc: {
    nombre: 'Obtener areas de trabajo por area',
    metodo: 'GET',
    descripcion: '',
    url: '/api/movil/puestosDeUnArea/:areaId',
    params: [
      { nombre: 'areaId', tipo: 'integer', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  cp: {
    'CP1': [
      {
        id: 'CP1',
        descripcion: 'area existe',
        datos: { params: { areaId: 1 }, body: {} },
        resultadoEsperado: 'Array con un puesto de trabajo',
        resultadoObtenido: '',
        paso: true
      },
      {
        id: 'CP1',
        descripcion: 'area NO existe',
        datos: { params: { areaId: 2 }, body: {} },
        resultadoEsperado: 'Array vacio sin puestos de trabajo',
        resultadoObtenido: '',
        paso: true
      }
    ],
    'CP2': [
      {
        id: 'CP2',
        descripcion: 'areaId NO es valido',
        datos: { params: { areaId: 0 }, body: {} },
        resultadoEsperado: 'Error de que no es valido ese numero',
        resultadoObtenido: '',
        paso: true
      }
    ]
  },
  ce: [
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
}
