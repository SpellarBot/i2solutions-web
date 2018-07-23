describe('Eliminar Riesgo', function () {
  it('Desde login hasta eliminar un riesgo', function () {
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
    cy.get('.elimiaRiesgo32').last().click({force: true}) // el numero es el id del riesgo
    cy.wait(1000)
    cy.get('.borraRiesgo32').click()// el numero es el id del riesgo
    cy.wait(1500)
  })
})
