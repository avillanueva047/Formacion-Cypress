const { invoke } = require("lodash");

describe('Interacciones', () => {
    // it('click', () => {
    //     cy.visit('http://www.w3schools.com/html/html_tables.asp')
    //     cy.get('#accept-choices').click()
    // });

    it('Si introducimos el código correcto (6710) nos muestra en el display el mensaje "Code OK"', () => {
        cy.visit('http://localhost:8080/')
        cy.get('#p6').click()
        cy.get('#p7').click()
        cy.get('#p1').click()
        cy.get('#p0').click()
        cy.get('#pantalla-codigo').should('have.text', 'CODE OK')
    });

    it('Si pulsamos números y pulsamos el boton "CLD" los borra', () => {
        cy.get('#p4, #p5, #p6').click({multiple: true})
        cy.get('#pclear').click()
        cy.get('#pantalla-codigo').should('not.have.text')
    });

    it('Si pulsamos números y pulsamos el botón "DEL", elimina el último número introducido', () => {
        cy.get('#p4, #p5, #p6').click({multiple: true})
        cy.get('#pdel').click()
        cy.get('#pantalla-codigo').invoke('text').should('not.include', '6')
    });

    it('No deja introducir un código de más de 4 numeros', () => {
        cy.get('#p4, #p5, #p6, #p7, #p8').click({multiple: true})
        cy.get('#pantalla-codigo').invoke('text').should('have.length', 4)
    });
});