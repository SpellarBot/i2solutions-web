describe('Eliminar Equipo', function () {
  it('Desde login hasta Eliminar un equipo y mostrar la vista actualizada', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa2').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.verPuestos4').click() // el numero es el id del establecimiento
    cy.wait(1000)
    cy.get('.equiposPuesto25').click() // el numero es el id del puesto
    cy.wait(1000)
    cy.get('.eliminarEquipos65').last().click({force: true}) // el numero es el id del equipo
    cy.wait(1000)
    cy.get('.borrarEquipo65').click()// el numero es el id del puesto
    cy.wait(1500)
  })
})
