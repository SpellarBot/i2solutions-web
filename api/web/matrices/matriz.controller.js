const co = require('co')
const excel = require('exceljs')
const unstream = require('unstream')
const _ = require('lodash')
module.exports = ({ responses, db }) => {
  const proto = {
    /*
      * Crear una matriz
      * @param {json} datos - datos para crear una matriz
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    Crear (datos) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let { establecimientosId } = datos
          let establecimiento = yield db.establecimientos.Obtener({ id: establecimientosId })
          if (!establecimiento) {
            resolve(responses.NO_OK('El id de establecimiento no existe'))
          }
          let creada = yield db.matrices.Crear(datos)
          if (creada) {
            resolve(responses.OK({ ...creada }))
          } else {
            resolve(responses.NO_OK('Ocurrio un error al crearse'))
          }
        }).catch((err) => {
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    /*
      * Obtener un establecimiento
      * @param {number} id - id del establecimiento
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    ObtenerPorEstablecimiento ({ id }) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let establecimientosId = id
          let establecimiento = yield db.establecimientos.Obtener({ id: establecimientosId })
          if (!establecimiento) {
            resolve(responses.NO_OK('El id de establecimiento no existe'))
          } else {
            let matrices = yield db.matrices.ObtenerPorEstablecimiento({ id: establecimientosId })
            resolve(responses.OK(matrices))
          }
        }).catch((err) => {
          console.log(err)
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    /*
      * Descargar una matriz
      * @param {number} id - id del establecimiento
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    Descargar ({ id }) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let matriz = yield db.matrices.Obtener({ id })
          if (!matriz) {
            resolve(responses.NO_OK('El id de matriz no existe'))
          } else {
            let workbook = new excel.Workbook()
            workbook.creator = 'No lo se'
            workbook.created = new Date()
            workbook.modified = new Date()
            let sheetName = 'matriz'
            let worksheet = workbook.addWorksheet(sheetName, {
              pageSetup: { paperSize: 9, orientation: 'landscape', defaultRowHeight: 15 }
            })
            // worksheet.properties.defaultRowHeight = 15
            // No aceptable
            // Aceptable con control específico
            // Aceptable
            worksheet.addRow([
              'PROCESO',
              'ZONA/LUGAR',
              'ACTIVIDAD',
              'CLASIFICACIÓN DEL PELIGO',
              'DESCRIPCIÓN DEL PELIGO',
              'CONTROLES EXISTENTES',
              '',
              '',
              'EVALUACIÓN DEL RIESGO',
              '',
              '',
              '',
              '',
              '',
              '',
              'VALORACION DE RIESGO',
              'CRITERIOS PARA ESTABLECER CONTROLES',
              '',
              '',
              'MEDIDAS DE CONTROL A IMPLEMENTAR',
              '',
              ''
            ])
            worksheet.addRow([
              'PROCESO',
              'ZONA/LUGAR',
              'ACTIVIDAD',
              'CLASIFICACIÓN DEL PELIGO',
              'DESCRIPCIÓN DEL PELIGO',
              'FUENTE',
              'MEDIO',
              'INDIVIDUO',
              'NIVEL DE DEFICIENCIA',
              'NIVEL DE EXPOSICIÓN',
              'NIVEL DE PROBABILIDAD (ND X NE)',
              'INTERPRETACIÓN DEL NIVEL DE PROBABILIDAD',
              'NIVEL DE CONSECUENCIA',
              'NIVEL DEL RIESGO (NR) E INTERVENCIÓN',
              'INTERPRETACIÓN DEL NR',
              'ACEPTABILIDAD DEL RIESGO',
              'N0 DE EXPUESTOS',
              'PEOR CONSECUENCIA',
              'EXISTENCIA DE REQUISITOS LEGALES ASOCIADOS',
              'FUENTE',
              'MEDIO',
              'INDIVIDUO'
            ])

            let titulos = {
              name: 'Arial',
              family: 4,
              size: 9,
              bold: true
            }

            let celdas = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'L1', 'M1', 'N1', 'O1', 'P1', 'Q1', 'R1', 'S1', 'T1', 'U1', 'V1']
            let fill = { type: 'pattern', pattern: 'darkTrellis', fgColor: { argb: '99cc00' }, bgColor: { argb: '99cc00' } }
            let fill2 = { type: 'pattern', pattern: 'darkTrellis', fgColor: { argb: 'FF9900' }, bgColor: { argb: 'FF9900' } }
            worksheet.mergeCells('A1:A2')
            worksheet.mergeCells('B1:B2')
            worksheet.mergeCells('C1:C2')
            worksheet.mergeCells('D1:D2')
            worksheet.mergeCells('E1:E2')
            worksheet.mergeCells('F1', 'H1')
            worksheet.mergeCells('I1', 'O1')
            worksheet.mergeCells('Q1', 'S1')
            worksheet.mergeCells('T1', 'V1')
            worksheet.getRow(1).height = 100
            worksheet.getRow(2).height = 100
            worksheet.getRow(1).border = {
              top: {style: 'thin'},
              left: {style: 'thin'},
              bottom: {style: 'thin'},
              right: {style: 'thin'}
            }

            worksheet.getRow(2).border = {
              top: {style: 'thin'},
              left: {style: 'thin'},
              bottom: {style: 'thin'},
              right: {style: 'thin'}
            }

            for (let celda of ['A1', 'B1', 'C1', 'D1', 'E1']) {
              worksheet.getCell(celda).font = titulos
              // worksheet.getCell(celda).alignment = aligin
              worksheet.getCell(celda).fill = fill
              worksheet.getCell(celda).alignment = { textRotation: 90, vertical: 'middle', horizontal: 'center', wrapText: true }
              // worksheet.getCell(celda).alignment = { wrapText: true }
            }

            for (let celda of ['F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'L1', 'M1', 'N1', 'O1', 'P1', 'Q1', 'R1', 'S1', 'T1', 'U1', 'V1']) {
              worksheet.getCell(celda).font = titulos
              // worksheet.getCell(celda).alignment = aligin
              worksheet.getCell(celda).fill = fill2
              worksheet.getCell(celda).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true }
              // worksheet.getCell(celda).alignment = { wrapText: true }
            }

            for (let celda of ['F2', 'G2', 'H2', 'I2', 'J2', 'K2', 'L2', 'M2', 'N2', 'O2', 'P2', 'Q2', 'R2', 'S2', 'T2', 'U2', 'V2']) {
              worksheet.getCell(celda).font = titulos
              worksheet.getCell(celda).size = 16
              // worksheet.getCell(celda).alignment = aligin
              worksheet.getCell(celda).fill = fill
              worksheet.getCell(celda).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true }
              // worksheet.getCell(celda).alignment = { wrapText: true }
            }
            worksheet.getCell('C1').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true }
            worksheet.getCell('D1').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true }
            worksheet.getCell('E1').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true }
            let matrizDatos = JSON.parse(matriz['datos'])
            matrizDatos = _.sortBy(matrizDatos, o => {
              if (o.aceptabilidad.trim() === 'No aceptable') {
                return 1
              } else if (o.aceptabilidad.trim() === 'Aceptable con control específico') {
                return 2
              }
              return 3
            })

            for (let columnaMatriz of matrizDatos) {
              worksheet.addRow([
                columnaMatriz['areaNombre'],
                columnaMatriz['puestoNombre'],
                columnaMatriz['actividad'],
                columnaMatriz['riesgo'],
                columnaMatriz['riesgoDescripcion'],
                columnaMatriz['controlesExistentesFuente'],
                columnaMatriz['controlesExistentesMedio'],
                columnaMatriz['controlesExistentesIndividuo'],
                columnaMatriz['ND'],
                columnaMatriz['NE'],
                columnaMatriz['NP'],
                columnaMatriz['interpretacionNP'],
                columnaMatriz['NC'],
                columnaMatriz['NR'],
                columnaMatriz['interpretacionNR'],
                columnaMatriz['aceptabilidad'],
                columnaMatriz['numeroExpuestos'],
                columnaMatriz['peorConsecuencia'],
                columnaMatriz['requisitoLegal'] ? 'SI' : 'NO',
                columnaMatriz['controlesFuente'],
                columnaMatriz['controlesMedio'],
                columnaMatriz['controlesIndividuo']
                // '22': 'NO LO SE',
                // '23': 'NO LO SE',
                // '24': 'NO LO SE',
                // '25': 'NO LO SE'
              ])

              for (let celda in celdas) {
                worksheet.getColumn(parseInt(celda) + 1).width = 25
              }
            }

            // anadir colores
            let noAceptable = { type: 'pattern', pattern: 'darkTrellis', fgColor: { argb: 'FF0000' }, bgColor: { argb: 'FF0000' } } // rojo
            let acetableConControl = { type: 'pattern', pattern: 'darkTrellis', fgColor: { argb: 'FFA500' }, bgColor: { argb: 'FFA500' } } // anaranjado
            let aceptable = { type: 'pattern', pattern: 'darkTrellis', fgColor: { argb: '008000' }, bgColor: { argb: '008000' } } // verde

            for (let current = 0; current < matrizDatos.length; current++) {
              if (matrizDatos[current].aceptabilidad.trim() === 'No aceptable') {
                worksheet.getCell(`P${current + 3}`).fill = noAceptable
              } else if (matrizDatos[current].aceptabilidad.trim() === 'Aceptable con control específico') {
                worksheet.getCell(`P${current + 3}`).fill = acetableConControl
              } else {
                console.log('aceptable')
                worksheet.getCell(`P${current + 3}`).fill = aceptable
              }
            }
            workbook.xlsx.write(unstream({}, function (data) {
              resolve(responses.OK(data.toString('base64')))
            }))
          }
        }).catch((err) => {
          console.log(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
