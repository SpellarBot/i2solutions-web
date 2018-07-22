describe('Eliminar Área', function () {
  it('Desde login hasta eliminar un área y mostar la vista actualizada', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa3').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.verAreas6').click() // el numero es el id del establecimiento
    cy.wait(1000)
    cy.get('.eliminarArea15').click({force: true}) // el numero es el id del area
    cy.wait(2000)
    cy.get('.eliminarAreas15').click()//
    cy.wait(1500)
  })
})
