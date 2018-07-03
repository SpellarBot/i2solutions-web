const expect = require('chai').expect
const utils = require('../utils')

describe('Utils Test', () => {
  describe('RUC y Cedula', () => {
    context('Personas naturales ecuatorianos y extranjeros residentes', () => {
      it('CE62 RUC correcto', () => {
        let ruc = '1702235468001'
        let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
        expect(mensaje).to.equal('')
        expect(err).to.equal(false)
      })
      it('CE61 RUC de tamano incorrecto', () => {
        let ruc = '170223568001'
        let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
        expect(mensaje.length).to.not.equal(0)
        expect(err).to.equal(true)
      })
      context('@T1 1-2 digitos', () => {
        it('CE0 0<valor<=24', () => {
          let digito = '24'
          let ruc = `${digito}02223568001`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('')
          expect(err).to.equal(false)
        })
        it('CE1 valor>24', () => {
          let digito = '25'
          let ruc = `${digito}02223568001`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('El código de la provincia (dos primeros dígitos) es inválido, debe ser entre 01 y 24')
          expect(err).to.equal(true)
        })
        it('CE2 valor<0', () => {
          let digito = '-10'
          let ruc = `${digito}0223568001`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('Tiene caracteres que no son numeros')
          expect(err).to.equal(true)
        })
      })
      context('@T2 3er digito', () => {
        it('CE10 valor={0,1,2,3,4,5,6,9}', () => {
          let digito = '3'
          let ruc = `24${digito}0223568001`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('')
          expect(err).to.equal(false)
        })
        it('CE11 valor={7,8}', () => {
          let digito = '7'
          let ruc = `24${digito}0223568001`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('El tercer dígito ingresado es inválido: debe ser 9 para sociedades privadas y extranjeros, 6 para sociedades publicas, menor que 6 (0,1,2,3,4,5) para personas naturales')
          expect(err).to.equal(true)
        })
      })
      context('@T3 11-13 digito', () => {
        it('CE20 001=<valor<=999', () => {
          let digito = '001'
          let ruc = `2402235682${digito}`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('')
          expect(err).to.equal(false)
        })
        it('CE22 valor<001', () => {
          let digito = '000'
          let ruc = `2402235682${digito}`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('El ruc de la persona natural debe terminar con 001')
          expect(err).to.equal(true)
        })
        it('CE23 valor=9', () => {
          let digito = '9'
          let ruc = `2490223568000`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('El ruc de la empresa del sector privado es incorrecto')
          expect(err).to.equal(true)
        })
        it('CE24 valor=6', () => {
          let digito = '6'
          let ruc = `2460223568000`
          let [err, mensaje] = utils.verificadorCedulaRuc(ruc, 'ruc')
          expect(mensaje).to.equal('El ruc de la empresa del sector público debe terminar con 0001')
          expect(err).to.equal(true)
        })
      })
    })
    context('@T9 cédula de identidad', () => {
      it('CE51 Cedula de tamano incorrecto', () => {
        let cedula = '0931823447'
        let [err, mensaje] = utils.verificadorCedulaRuc(cedula, 'cedula')
        expect(mensaje).to.equal('')
        expect(err).to.equal(false)
      })
    })
  })
})
