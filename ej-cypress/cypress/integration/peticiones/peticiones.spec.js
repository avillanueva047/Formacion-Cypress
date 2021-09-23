describe('Peticiones HTTP y Mocks', () => {
    it('Debería pintar el emoji nevado si nieva', () => {
        cy.intercept('/get-weather', { weather: 'nevado'} )
        cy.visit('http://localhost:8080')
        cy.get('#tiempo')
            .should('have.text', '🌨️' )
    });

    it('Debería pintar el emoji sol si está soleado', () => {
        cy.intercept('/get-weather', { weather: 'soleado'} )
        cy.visit('http://localhost:8080')
        cy.get('#tiempo')
            .should('have.text', '☀️' )
    });

    it('El usuario 1 debería de llamarse Leanne Graham', () => {
        cy.request('http://jsonplaceholder.typicode.com/users')
            .then(resp => {
                console.log(resp)
                const todosLosUsuarios = resp.body
                const usuario1 = todosLosUsuarios.find((usuario) => {
                    return usuario.id === 1
                })
                expect(usuario1.name).to.be.equal('Leanne Graham')
            })
            .then(resp => {
                console.log(resp)
                const todosLosUsuarios = resp.body
        
                const usuario2 = todosLosUsuarios.find((usuario) => {
                  return usuario.id === 2
                })
        
                expect(usuario2.name).to.be.eq('Ervin Howell')
              })
        
    })
});