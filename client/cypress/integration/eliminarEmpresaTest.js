describe('Eliminar Empresa', function () {
  it('Desde login hasta eliminar una Empresa y ver la vista actualizada', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa4').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.eliminarEmpresa').click()
    cy.wait(1000)
    cy.get('.eliminar').click()
    cy.wait(1500)
  })
})
