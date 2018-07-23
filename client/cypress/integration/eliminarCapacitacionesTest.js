describe('Eliminar Capacitación', function () {
  it('Desde login hasta eliminar una capacitacióncy mostrar la vista actuallizada', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa3').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.verAreas9').click() // el numero es el id del establecimiento
    cy.wait(1000)
    cy.get('.capacitacionesArea20').click() // el numero es el id del area
    cy.wait(1000)
    cy.get('.eliminarCapacitacion80').click({force: true}) // el numero es el id de la capacitacion
    cy.wait(1000)
    cy.get('.boraarCapacitacion80').click()
    cy.wait(1500)
  })
})
