describe('Eliminar  Accidente', function () {
  it('Desde login hasta eliminar un accidente y mostar accidentes actualizado', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa3').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.verPuestos8').click() // el numero es el id del establecimiento
    cy.wait(1000)
    cy.get('.accidentesPuesto34').click() // el numero es el id del puesto
    cy.wait(1000)
    cy.get('.accidenteEliminar71').click({force: true, multiple: true})// el numero es el id del accidente
    cy.wait(600)
    cy.get('.borrarAccidente71').click({force: true, multiple: true})
    cy.wait(1500)
  })
})
