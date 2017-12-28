const assert = require('chai').assert;
// returns object functions
const app = require('../server');
let sayHelloResult = app.sayHello();
let addNumbersResult = app.addNumbers(5, 12);

describe('Server', function () {
    describe('sayHello()', function () {
        it('sayHello should return hello', function () {
            //    let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello there!');
        });
        it('sayHello should return string', function () {
            // let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });
    describe('addNumbers', function () {
        it('addNumbers should return sum', function () {
            assert.typeOf(addNumbersResult, 'number');
        });
        it('addNumbers should be higher than 10', function () {
            assert.isAbove(addNumbersResult, 10);
        });
    });
});