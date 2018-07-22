describe('Editar Capacitación', function () {
  it('Desde login hasta editar una capacitación', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa2').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.verAreas4').click() // el numero es el id del establecimiento
    cy.wait(1000)
    cy.get('.capacitacionesArea9').click() // el numero es el id del area
    cy.wait(1000)
    cy.get('.editarCapacitacion43').click() // el numero es el id de la capacitacion
    cy.wait(1000)
    cy.get('.temaCapacitacion43').find('input').type('{selectall}{del}Uso apropiado de equipos de seguridad') // el numero es el id de la capacitacion
    cy.wait(600)
    cy.get('.descripcionCapacitacion43').find('input').type('{selectall}{del}Capacitación para mejorar la eficiencia de uso de equipos básicos de seguridad') // el numero es el id de la capacitacion
    cy.wait(600)
    cy.get('.fechaCapacitacion43').click() // el numero es el id de la capacitacion
    cy.wait(600)
    cy.get('button').contains('Jan').click()
    cy.wait(600)
    cy.get('button').contains('10').click()
    cy.wait(600)
    cy.get('.capacitadorCapacitacion43').find('input').type('{selectall}{del}Joaquín Pérez') // el numero es el id de la capacitacion
    cy.wait(600)
    cy.get('.editCapacitacion43').click()
    cy.wait(1500)
  })
})
