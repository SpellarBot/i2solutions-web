describe('Eliminar Establecimiento', function () {
  it('Desde login hasta eliminar un establecimiento y ver la vista actualizda', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa1').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.eliminarEstablecimiento2').click({force: true})
    cy.wait(1000)
    cy.get('.eliminarEstablecimiento').click()
    cy.wait(1500)
  })
})
