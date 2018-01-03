const assert = require('chai').assert;
// returns object functions
const app = require('../server');
// let sayHelloResult = app.sayHello();
// let addNumbersResult = app.addNumbers(5, 12);
var thing;
const mtVal = app.mathTest();

// describe('Server', function () {
//     describe('sayHello()', function () {
//         it('sayHello should return hello', function () {
//             //    let result = app.sayHello();
//             assert.equal(sayHelloResult, 'hello there!');
//         });
//         it('sayHello should return string', function () {
//             // let result = app.sayHello();
//             assert.typeOf(sayHelloResult, 'string');
//         });
//     });
//     describe('addNumbers', function () {
//         it('addNumbers should return sum', function () {
//             assert.typeOf(addNumbersResult, 'number');
//         });
//         it('addNumbers should be higher than 10', function () {
//             assert.isAbove(addNumbersResult, 10);
//         });
//     });
// });

describe('server', function(){
    // name of tests
    describe('wowTest()', function(){
        // each test statement
        it('should return string', function(){
            assert.typeOf(app.wowTest(), 'string');
        });
        it('should return "wow!"', function(){
            assert.equal(app.wowTest(), 'wow!');
        });
        it('should be equal to wow!', function(){
            assert.notEqual(app.wowTest(), 'wow!!!');
        });
        it('should be undefined', function(){
            assert.isUndefined(thing);
        });
    });
    describe('mathTest()', function(){
        it('should be a function', function(){
            assert.typeOf(app.mathTest, 'function');
        });
        it('should return a number', function(){
            assert.typeOf(app.mathTest(), 'number');
        });
        it('should be above 5', function(){
            assert.isAbove(mtVal, 5);
        });
        it('should be below 20', function(){
            assert.isBelow(mtVal, 20);
        });
        it('should be equal to 10', function(){
            assert.equal(mtVal, 10);
        });
        it('should be defined', function(){
            assert.isDefined(mtVal);
        });
    });
    describe('objTest()', function(){
        it('should be an object', function(){
            assert.typeOf(app.objTest(), 'object');
        })
        it('should have a property "legs"', function(){
            assert.property(app.objTest(), 'legs');
        })
        it('should have value of legs = 4', function(){
            assert.propertyVal(app.objTest(), 'legs', 4);
        })
        it('should have whiskers = true', function(){
            assert.isTrue(app.objTest().whiskers);
        })
        it('should have a property type string of name', function(){
            assert.typeOf(app.objTest().name, 'string');
        })
        it('should have keys name, legs, whiskers, speak', function(){
            assert.hasAllKeys(app.objTest(), ['name', 'legs', 'whiskers', 'speak']);
        })
    });
    describe('square test', function(){
        it('should return the square of the number', function(){
            assert.equal(app.squareTest(5), 25);
        })
    })
});