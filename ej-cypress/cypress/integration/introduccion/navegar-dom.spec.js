// describe('Navegar por el DOM', () => {
//     it('listado de cosas tiene 3 elementos', () => {
//         cy.visit('http://localhost:8080');
//         cy.get('#listaCosas').children().should('have.length', 3)
//     });

//     it('El tercer elemento de listaItems es el Item 3', () => {
//         cy.visit('http://localhost:8080')

//         cy.get('#listaItems').children().last().should('have.text', 'Item 3')
//     });

//     it('La listaItems va desde el Item 1 al Item 3', () => {
//         cy.get('#listaItems').children().each((li, pos) => {
//             const numeroItem = pos + 1;
//             expect(li.text()).to.equal('Item ' + numeroItem)
//         })
//     });
// });

describe('Navegar por el DOM de W3Schools', () => {
    it('Comprueba que la tabla existe y que tiene 7 filas', () => {
        cy.visit('http://www.w3schools.com/html/html_tables.asp');

        // Guardamos la tabla
        const table = cy.get('table#customers');

        // Test 01
        table.should('exist');

        // Test 02
        table.find('tbody').children().should('have.length', 7)
    });

    it('Comprueba que el numero de celdas de la ultima fila es el correcto', () => {
        cy.visit('http://www.w3schools.com/html/html_tables.asp');

        // Guardamos la tabla
        const row = cy.get('table#customers > tbody > tr');

        row.last().children().should('have.length', 3);
    });

    it('Comprueba que despues de la 5ta fila, hay 2 filas más', () => {
        cy.visit('http://www.w3schools.com/html/html_tables.asp');

        // Guardamos la tabla. En Jquery la numeración es a partir de 0
        const row = cy.get('table#customers > tbody > tr:eq(4)');

        row.nextAll().should('have.length', 2);
    });

    it('Comprueba que todas las celdas de la tabla tiene contenido', () => {
        cy.visit('http://www.w3schools.com/html/html_tables.asp');

        // each tiene dos argumentos:
        // td -> el elemento
        // pos -> la posicion
        cy.get('table#customers td').each((td, pos) => {
            expect(td.text()).not.be.empty;
        })
    })

    it('[retry-ability] Encuentra el botón que aparece a los 3.5 seg', () =>{
        cy.visit('http://localhost:8080');
        cy.get('#btn-lazy-3500').should('be.visible').and('have.text', 'Soy un botón perezoso');
    })

    it('[retry-ability] No encuentra el botón que aparece a los 5.5 seg', () =>{
        cy.visit('http://localhost:8080');
        cy.get('#btn-lazy-5500').should('not.exist')
    })
});