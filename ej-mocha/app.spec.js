const assert = require('assert');
const { hola } = require("./app");

// Chai Imports
const should = require('chai').should();
const expect = require('chai').expect;

describe('La función Hola', () => {

    var nombre = 'Adalid';

    it('Devuelve \'Hola mundo\' si no le pasamos un nombre', () => {
        const msg = hola();
        assert.ok('Hola mundo' === msg);
    })
    it('Devuelve \'Hola ' + `${nombre}` + '\' si le pasamos la varible \"nombre\"', () => {
        const msg = hola(`${nombre}`);
        assert.ok('Hola Adalid' === msg);
    })
    // Using chai
    it('Devuelve \'Hola ' + `${nombre}` + '\' si le pasamos la varible \"nombre\"', () => {
        const msg = hola(`${nombre}`);
        msg.should.be.equal('Hola ' + `${nombre}`);
    })

})
