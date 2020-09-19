let app = require('./app/index');
var assert = require("chai").assert;
let result = app.init();
//RESULTADOS BIEN:
//1,2,Music,4,TI,Music,7,8,Music,TI,11,Music,13,14,Musical,16,17,Music,19,TI,Music,22,23,Music,TI,26,Music,28,29,Musical,
//31,32,Music,34,TI,Music,37,38,Music,TI,41,Music,43,44,Musical,46,47,Music,49,TI,Music,52,53,Music,TI,56,Music,58,59,
//Musical,61,62,Music,64,TI,Music,67,68,Music,TI,71,Music,73,74,Musical,76,77,Music,79,TI,Music,82,83,Music,TI,86,Music,
//88,89,Musical,91,92,Music,94,TI,Music,97,98,Music,TI
describe("Prints all the numbers from 1 to 100.", function() {
    describe("Verificando funcion: ", function() {
        it("Verificando multiplos de 3", function() {
            assert.equal(result[3], "Music");
            assert.equal(result[6], "Music");
            assert.equal(result[9], "Music");
            assert.equal(result[12], "Music");
            assert.equal(result[21], "Music");
            assert.equal(result[24], "Music");
            assert.equal(result[27], "Music");
            assert.equal(result[33], "Music");
            assert.equal(result[36], "Music");
            assert.equal(result[39], "Music");
            assert.equal(result[42], "Music");
            assert.equal(result[48], "Music");
            assert.equal(result[51], "Music");
            assert.equal(result[54], "Music");
            assert.equal(result[57], "Music");
            assert.equal(result[63], "Music");
            assert.equal(result[66], "Music");
            assert.equal(result[69], "Music");
            assert.equal(result[72], "Music");
            assert.equal(result[78], "Music");
            assert.equal(result[84], "Music");
            assert.equal(result[87], "Music");
            assert.equal(result[93], "Music");
            assert.equal(result[96], "Music");
            assert.equal(result[99], "Music");

        });
        it("Verificando multiplos de 5", function() {
            assert.equal(result[5], "TI");
            assert.equal(result[10], "TI");
            assert.equal(result[20], "TI");
            assert.equal(result[25], "TI");
            assert.equal(result[35], "TI");
            assert.equal(result[40], "TI");
            assert.equal(result[50], "TI");
            assert.equal(result[55], "TI");
            assert.equal(result[65], "TI");
            assert.equal(result[70], "TI");
            assert.equal(result[80], "TI");
            assert.equal(result[85], "TI");
            assert.equal(result[95], "TI");
            assert.equal(result[100], "TI");

        });
        it("Verificando multiplos de 3 y 5", function() {
            assert.equal(result[15], "Musical");
            assert.equal(result[30], "Musical");
            assert.equal(result[45], "Musical");
            assert.equal(result[60], "Musical");
            assert.equal(result[75], "Musical");
            assert.equal(result[90], "Musical");
        });
    });
});

app.init()