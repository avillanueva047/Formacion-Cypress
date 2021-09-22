const { invoke } = require("lodash");

describe('Interacciones', () => {
    xit('click', () => {
        cy.visit('http://www.w3schools.com/html/html_tables.asp')
        cy.get('#accept-choices').click()
    });

    xit('Si introducimos el código correcto (6710) nos muestra en el display el mensaje "Code OK"', () => {
        cy.visit('http://localhost:8080/')
        cy.get('#p6').click()
        cy.get('#p7').click()
        cy.get('#p1').click()
        cy.get('#p0').click()
        cy.get('#pantalla-codigo').should('have.text', 'CODE OK')
    });

    xit('Si pulsamos números y pulsamos el boton "CLD" los borra', () => {
        cy.get('#p4, #p5, #p6').click({multiple: true})
        cy.get('#pclear').click()
        cy.get('#pantalla-codigo').should('not.have.text')
    });

    xit('Si pulsamos números y pulsamos el botón "DEL", elimina el último número introducido', () => {
        cy.get('#p4, #p5, #p6').click({multiple: true})
        cy.get('#pdel').click()
        cy.get('#pantalla-codigo').invoke('text').should('not.include', '6')
    });

    xit('No deja introducir un código de más de 4 numeros', () => {
        cy.get('#p4, #p5, #p6, #p7, #p8').click({multiple: true})
        cy.get('#pantalla-codigo').invoke('text').should('have.length', 4)
    });

    xit('[Encadenar 3 condiciones] la tabla existe, tiene 7 filas y la ultima fila tiene 3 celdas', () => {
        cy.visit('http://www.w3schools.com/html/html_tables.asp')

        cy.get('#customers')
            .should('exist')
            .find('tr')
            .should('have.length', 7)
            .last()
            .find('td')
            .should('have.length', 3)
    });

    xit('Deberia escribir "Hola Mundo"', () => {
        cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada');

        cy.get('[name="search"]').type('Hola Mundo');
        cy.get('#searchform').submit()

        cy.get('#firstHeading').should('have.text', 'Hola mundo')

        cy.title()
            .should('equal', 'Hola mundo - Wikipedia, la enciclopedia libre')
            .and('contain', 'Hola mundo -')
    });

    xit('Añadir 3 tareas y deberían mostrarse las 3 además de los botones de activas y completadas', () => {
        cy.visit('https://todomvc.com/examples/vue/');
        const inputTask = cy.get('input.new-todo')

        var text1 = 'Clean the House';
        var text2 = 'Go to Work';
        var text3 = 'Buy Food';

        inputTask.type(text1).type('{enter}')   //1era Tarea
            .type(text2).type('{enter}')        //2da Tarea
            .type(text3).type('{enter}')        //3era Tarea

        cy.get('li.todo').each((el, num) => {
            if (num == 0) {
                expect(el.text()).contains(text1)
            }
            if (num == 1) {
                expect(el.text()).contains(text2)
            }
            if (num == 2) {
                expect(el.text()).contains(text3)
            }
        })

        cy.get('ul.filters > li').each((el, num) => {
            if (num == 1) {
                expect(el.text()).contains('Active')
            }
            if (num == 2) {
                expect(el.text()).contains('Completed')
            }
        })

        cy.get('a[href="#/completed"], a[href="#/active"]')
            .should('have.length', 2)
    });

    xit('Añadir 3 tareas y marcar 1 como completada', () => {

    });

    xit('Añadir 3 tareas, completar todas y eliminar las completadas', () => {
        cy.get('.toggle').check()
        cy.get('.destroy').each((el, index) => {
            cy.get(el).invoke('show').click()
        })

    });

    xit('Selecciona las opciones Xpeng y Nio', () => {
        cy.visit('http://localhost:8080');

        cy.get('#select-coches-electricos-multiple').select(['xpeng-p7', 'nio-et7'])

        cy.get('#select-coches-electricos-multiple > option:selected')
            .each((option) => {
                expect(['Nio eT7', 'Xpeng P7']).contain(option.text())
            })
    });

    it('Drag And Drop', () => {
        cy.visit('http://cookbook.seleniumacademy.com/DragDropDemo.html')
        cy.get('#draggable')
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { pageX: 185, pageY: 70})
            .trigger('mouseup')
    });
});