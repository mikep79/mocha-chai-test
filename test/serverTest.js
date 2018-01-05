const chai = require('chai');
const assert = require('chai').assert;
// returns object functions
const chaiHttp = require('chai-http');
const app = require('../server');
// expect assertion style OR should style
var expect = require('chai').expect;
var should = chai.should();
chai.use(chaiHttp);
// let sayHelloResult = app.sayHello();
// let addNumbersResult = app.addNumbers(5, 12);
var thing;
// const mtVal = app.mathTest();


describe('server', function () {
    // name of tests
    // describe('wowTest()', function () {
    //     // each test statement
    //     it('should return string', function () {
    //         assert.typeOf(app.wowTest(), 'string');
    //     });
    //     it('should return "wow!"', function () {
    //         assert.equal(app.wowTest(), 'wow!');
    //     });
    //     it('should be equal to wow!', function () {
    //         assert.notEqual(app.wowTest(), 'wow!!!');
    //     });
    //     it('should be undefined', function () {
    //         assert.isUndefined(thing);
    //     });
    // });
    // describe('mathTest()', function () {
    //     it('should be a function', function () {
    //         assert.typeOf(app.mathTest, 'function');
    //     });
    //     it('should return a number', function () {
    //         assert.typeOf(app.mathTest(), 'number');
    //     });
    //     it('should be above 5', function () {
    //         assert.isAbove(mtVal, 5);
    //     });
    //     it('should be below 20', function () {
    //         assert.isBelow(mtVal, 20);
    //     });
    //     it('should be equal to 10', function () {
    //         assert.equal(mtVal, 10);
    //     });
    //     it('should be defined', function () {
    //         assert.isDefined(mtVal);
    //     });
    // });
    // describe('objTest()', function () {
    //     it('should be an object', function () {
    //         assert.typeOf(app.objTest(), 'object');
    //     })
    //     it('should have a property "legs"', function () {
    //         assert.property(app.objTest(), 'legs');
    //     })
    //     it('should have value of legs = 4', function () {
    //         assert.propertyVal(app.objTest(), 'legs', 4);
    //     })
    //     it('should have whiskers = true', function () {
    //         assert.isTrue(app.objTest().whiskers);
    //     })
    //     it('should have a property type string of name', function () {
    //         assert.typeOf(app.objTest().name, 'string');
    //     })
    //     it('should have keys name, legs, whiskers, speak', function () {
    //         assert.hasAllKeys(app.objTest(), ['name', 'legs', 'whiskers', 'speak']);
    //     })
    // });
    // describe('square test', function () {
    //     it('should return the square of the number', function () {
    //         assert.equal(app.squareTest(5), 25);
    //     })
    // });
    describe('GET req test', function () {
        it('should return the animals array', function (done) {
            chai.request(app)
                .get('/')
                .end(function (err, res) {
                    console.log('res: ', res);
                    assert.typeOf(res, 'object');
                    assert.typeOf(res.body, 'array');
                    assert.equal(res.body.length, 1);
                    res.should.have.status(200);
                    res.should.be.json;
                    // expect(err).to.be.null;
                    // expect(res).to.have.status(200);
                    // or...
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});

// chai.request(app)
//   .put('/user/me')
//   .send({ password: '123', confirmPassword: '123' })
//   .end(function (err, res) {
//      expect(err).to.be.null;
//      expect(res).to.have.status(200);
//   });