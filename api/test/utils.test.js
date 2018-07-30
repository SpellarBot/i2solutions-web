const expect = require('chai').expect
const utils = require('../utils')
const sinon = require('sinon')
describe('Utils Test', () => {
  describe('RUC y Cedula', () => {
    context('@T1 Personas naturales ecuatorianos y extranjeros residentes', () => {
      it('@T11 CE62 RUC correcto', () => {
        let ruc = '1702235468001'
        let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
        expect(mensaje).to.equal('')
        expect(err).to.equal(false)
      })
      it('@T12 CE61 RUC de tamano incorrecto', () => {
        let ruc = '170223568001'
        let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
        expect(mensaje.length).to.not.equal(0)
        expect(err).to.equal(true)
      })
      context('@T13 1-2 digitos', () => {
        it('@T131 CE0 0<valor<=24', () => {
          let digito = '24'
          let ruc = `${digito}02223568001`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('')
          expect(err).to.equal(false)
        })
        it('@T132 CE1 valor>24', () => {
          let digito = '25'
          let ruc = `${digito}02223568001`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('El código de la provincia (dos primeros dígitos) es inválido, debe ser entre 01 y 24')
          expect(err).to.equal(true)
        })
        it('@T133 CE2 valor<0', () => {
          let digito = '-10'
          let ruc = `${digito}0223568001`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('Tiene caracteres que no son numeros')
          expect(err).to.equal(true)
        })
      })
      context('@T2 3er digito', () => {
        it('@T21 CE10 valor={0,1,2,3,4,5,6,9}', () => {
          let digito = '3'
          let ruc = `24${digito}0223568001`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('')
          expect(err).to.equal(false)
        })
        it('@T22 CE11 valor={7,8}', () => {
          let digito = '7'
          let ruc = `24${digito}0223568001`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('El tercer dígito ingresado es inválido: debe ser 9 para sociedades privadas y extranjeros, 6 para sociedades publicas, menor que 6 (0,1,2,3,4,5) para personas naturales')
          expect(err).to.equal(true)
        })
      })
      context('@T3 11-13 digito', () => {
        it('@T31 CE20 001=<valor<=999', () => {
          let digito = '001'
          let ruc = `2402235682${digito}`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('')
          expect(err).to.equal(false)
        })
        it('@T32 CE22 valor<001', () => {
          let digito = '000'
          let ruc = `2402235682${digito}`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('El ruc de la persona natural debe terminar con 001')
          expect(err).to.equal(true)
        })
        it('@T33 CE23 valor=9', () => {
          let digito = '9'
          let ruc = `2490223568000`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('El ruc de la empresa del sector privado es incorrecto')
          expect(err).to.equal(true)
        })
        it('@T34 CE24 valor=6', () => {
          let digito = '6'
          let ruc = `2460223568000`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('El ruc de la empresa del sector público debe terminar con 0001')
          expect(err).to.equal(true)
        })
      })
    })
    context('@T9 cédula de identidad', () => {
      it('@T91 CE51 Cedula de tamano incorrecto', () => {
        let cedula = '0931823447'
        let [err, mensaje] = utils.verificadorCedulaRuc(cedula, 'cedula')
        expect(mensaje).to.equal('')
        expect(err).to.equal(false)
      })
    })
  })

  describe('@T4 Nombres y apellidos', () => {
    it('@T41 Nombre tamano correcto', () => {
      let nombre = 'Joel Ñando Cárlos'
      let [err, mensaje] = utils.verificarNombres(nombre)
      expect(mensaje).to.equal('')
      expect(err).to.equal(true)
    })
    it('@T42 nombre tamano minimo incorrecto', () => {
      let nombre = 'J'
      let [err, mensaje] = utils.verificarNombres(nombre)
      expect(mensaje).to.equal('tamaño muy pequeño')
      expect(err).to.equal(false)
    })
    it('@T43 nombre tamano minimo incorrecto', () => {
      let nombre = ''
      for (let i = 0; i < 31; i++) { nombre = nombre + 'a' }
      let [err, mensaje] = utils.verificarNombres(nombre)
      expect(mensaje).to.equal('tamaño muy grande')
      expect(err).to.equal(false)
    })
    it('@T44 tiene caracteres no validos', () => {
      let nombre = 'J.'
      let [err, mensaje] = utils.verificarNombres(nombre)
      expect(mensaje).to.equal('tiene caracteres no validos')
      expect(err).to.equal(false)
    })
  })


  describe('@T5 Fecha nacimiento', () => {
    let clock = {}
    before(() => {
      clock = sinon.useFakeTimers(new Date(2018,7,1).getTime())
    })
    after(() =>{
      clock.restore()
    })

    it('@T50 valido', () => {
      let fecha = '1995-05-21'
      let [err, mensaje] = utils.fechaNacimiento(fecha)
      expect(mensaje).to.equal('')
      expect(err).to.equal(true)
    })

    it('@T52 No fechas atras al 1900', () => {
      let fecha = '1939-05-21'
      let [err, mensaje] = utils.fechaNacimiento(fecha)
      expect(mensaje).to.equal('Tiene que ser fecha mayores a 1900')
      expect(err).to.equal(false)
    })

    it('@T53 fechas con formato incorrecto', () => {
      let fecha = '1995-13'
      let [err, mensaje] = utils.fechaNacimiento(fecha)
      expect(mensaje).to.equal('La fecha tiene formato no valido')
      expect(err).to.equal(false)
    })

    // it('@T54 ingresado un numero', () => {
    //   let fecha = '1'
    //   let [err, mensaje] = utils.fechaNacimiento(fecha)
    //   expect(mensaje).to.equal('La fecha tiene formato no valido')
    //   expect(err).to.equal(false)
    // })

    it('@T55 mayor a 18 años', () => {
      let fecha = '2001-05-21'
      let [err, mensaje] = utils.fechaNacimiento(fecha)
      expect(mensaje).to.equal('La edad mínima es 18 años')
      expect(err).to.equal(false)
    })
  })

  describe('Numeros telefono celular y convencional', () => {

  })
})
