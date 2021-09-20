describe('Ejemplo', () => {
    it('1', () => {
        cy.visit('https://nodejs.org/es/');
        cy.get('#logo')
            .should('have.attr', 'id', 'logo');
        //'find' se usa despues de un 'get'
        cy.contains('a', 'Documentación')
            .should('exist')
    });
})
