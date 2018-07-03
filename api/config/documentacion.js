const path = require('path')
const fs = require('fs')
const del = require('del')
const nunjucks = require('nunjucks')

function generateAPI ({ docs, archivo, nombre }) {
  del.sync([path.join(__dirname, `../../docs/${archivo}`)], { force: true })
  nunjucks.configure(path.join(__dirname, 'templates'), { autoescape: false })
  const res = nunjucks.render(path.join(__dirname, 'templates/api.template.md'), { docs, nombre, blockInicio: '{%', blockFin: '%}' })
  fs.appendFileSync(path.join(__dirname, `../../docs/${archivo}`), res)
}

function toString (objeto) {
  return JSON.stringify(objeto, null, 2)
}

function OK ({ docs, doc, res, req }) {
  doc['request'] = toString(req)
  doc['response'] = toString(res.body)
  docs.push(doc)
}

function ADDINTER ({ equivalencias, equi, req, res, params, codigo, codigoApi, url }) {
  let equiTmp = {}
  if (equivalencias[codigoApi]) {
    equiTmp = equivalencias[codigoApi]
  } else {
    equiTmp = JSON.parse(JSON.stringify(equi))
  }
  for (let bodyDato in req) {
    equiTmp['intersecciones'][codigo]['body'][bodyDato]['valor'] = req[bodyDato]
  }
  for (let paramsDato in params) {
    equiTmp['intersecciones'][codigo]['params'][paramsDato]['valor'] = params[paramsDato]
  }
  equiTmp['intersecciones'][codigo]['request'] = toString(req)
  equiTmp['intersecciones'][codigo]['response'] = toString(res.body)
  if (url) {
    equiTmp['intersecciones'][codigo]['url'] = url
  }
  // equiTmp['intersecciones'].push({ ...equiTmp })
  equivalencias[codigoApi] = equiTmp
  // equivalencias.push(equiTmp)
}

// function OKEQUI ({ descripcion, equivalencia, interseccion, res, req }) {
//   doc['interseccion'].push({ descripcion, response: toString(res.body), request: toString(req), descripcion })
// }

function EQUI ({ nombre, equivalencias }) {
  let ruta = path.join(__dirname, `../../docs/${nombre.toLowerCase()}/${nombre.toLowerCase()}.equivalencia.md`)
  del.sync([ruta], { force: true })
  nunjucks.configure(path.join(__dirname, 'templates'), { autoescape: false })
  const res = nunjucks.render(path.join(__dirname, 'templates/equivalencia.template.md'), { datos: equivalencias, nombre, blockInicio: '{%', blockFin: '%}' })
  fs.appendFileSync(ruta, res)
}

function ERROR ({docs, doc, res, req, nombre, descripcion}) {
  doc['errors'].push({ nombre, response: toString(res.body), request: toString(req), descripcion })
}

module.exports = {
  generateAPI,
  toString,
  OK,
  ERROR,
  EQUI,
  ADDINTER
}
