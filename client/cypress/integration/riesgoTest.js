describe('Editar Riesgo', function () {
  it('Desde login hasta editar un riesgo', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa2').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.verPuestos4').click() // el numero es el id del establecimiento
    cy.wait(1000)
    cy.get('.riesgosPuesto19').click() // el numero es el id del puesto
    cy.wait(1000)
    cy.get('.editarRiesgo32').last().click() // el numero es el id del riesgo
    cy.wait(1000)
    cy.get('.tipoRiesgo32').find('input').type('{selectall}{del}Riesgo por radiación')// el numero es el id del riesgo
    cy.wait(600)
    cy.get('.porcentajeRiesgo32').find('input').type('{selectall}{del}35')// el numero es el id del riesgo
    cy.wait(600)
    cy.get('.valoracionRiesgo32').find('input').type('{selectall}{del}214')// el numero es el id del riesgo
    cy.wait(600)
    cy.get('.valoracionLiteralRiesgo32').find('input').type('{selectall}{del}Aceptable con medidas de control')// el numero es el id del riesgo
    cy.wait(600)
    cy.get('.personasExpuestasRiesgo32').find('input').type('{selectall}{del}2')// el numero es el id del riesgo
    cy.wait(600)
    cy.get('.editRiesgo32').click()// el numero es el id del riesgo
    cy.wait(1500)
  })
})
