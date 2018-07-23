describe('Eliminar Puesto', function () {
  it('Desde login hasta eliminar un puesto y mostrar el resultado actualizado', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa1').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.verPuestos1').click() // el numero es el id del establecimiento
    cy.wait(1000)
    cy.get('.eliminarPuesto2').click({force: true}) // el numero es el id del puesto
    cy.wait(1000)
    cy.get('.borrarPuesto2').click()// el numero es el id del puesto
    cy.wait(1500)
  })
})
