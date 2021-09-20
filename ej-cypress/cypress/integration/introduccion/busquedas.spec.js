describe('Búsquedas', () => {
    it('Buscar h2 con texto Listados', () => {
        cy.visit('http://localhost:8080');
    });

    it('Buscar h2 con el texto Listados', () => {
        cy.get('#titulo').should('have.text', 'Listados')
    });
    
    it('El segundo item de cosas tiene Cosa 2', () => {
        cy.get('#listaCosas').find('.li2').should('have.text', 'Cosa 2')
    });

    it('El segundo item de cosas tiene Cosa 2', () => {
        cy.get('#listaCosas > .li2').should('have.text', 'Cosa 2')
    });

    it('El item 3 sin get ni find', () => {
        cy.contains('li','Item 3').should('have.text', 'Item 3')
    });
});