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
                    // assert style
                    assert.equal(res.status, 200);
                    assert.typeOf(res, 'object');
                    assert.typeOf(res.body, 'array');
                    assert.equal(res.body.length, 1);
                    // should style
                    res.should.have.status(200);
                    res.should.be.a('object');
                    res.body.should.be.a('array');
                    res.body.should.have.lengthOf(1);
                    res.body[0].name.should.include('snif');
                    res.body[0].name.should.equal('sniffles');
                    // expect style
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res).to.be.a('object');
                    expect(res).to.be.json;
                    expect(res.body).to.be.a('array');
                    expect(res.body).to.have.lengthOf(1);
                    // include => good for testing that emails contain @
                    expect(res.body[0].name).to.include('snif');
                    expect(res.body[0].name).to.equal('sniffles');
                    // required!
                    done();
                });
        });
    });
    describe('POST animal req', function () {
        it('it should add an animal to animals array', function (done) {
            let newAnimal = { name: 'jimbo', legs: 4 };
            chai.request(app)
                .post('/')
                .send(newAnimal)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    // not working. no headers?
                    // expect(res.body).to.be.json;
                    expect(res.body).to.have.property('SUCCESS');
                    expect(res.body.SUCCESS).to.have.property('name').that.is.a('string');
                    expect(res.body.SUCCESS).to.have.property('legs').that.is.a('number');
                    expect(res.body.SUCCESS).to.have.property('legs').to.equal(4);
                    expect(res.body.SUCCESS).to.have.property('name').to.equal(newAnimal.name);
                    expect(res.body.SUCCESS).to.have.all.keys('name', 'legs');
                    done();
                })
        })
    });
});