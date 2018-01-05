const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const cat = {
    legs: 4,
    name: 'sniffles',
    whiskers: true,
    speak: function(){
        return 'meow!';
    }
};

let animals = [cat];

// establishes MongoDB connection
// mongoose.connect('localhost:/27017/mocha-chai-test');

// const recipeSchema = new mongoose.Schema({
//     name: String,
//     timeInMin: Number,
//     ingredients: Number
// });

// app.get('/recipes', function(req, res){
//     recipeSchema.find({}, function(err, results){
//         if (err){
//             console.log('Get error: ', err);
//             res.sendStatus(500);
//         } else {
//             res.send(results);
//         }
//     })
// });

app.get('/', function(req, res){
    res.send(animals);
});
// can test what:
// - is array
// - has string values
// - is not undefined


app.post('/', function(req, res){
    console.log('req.body: ', req.body);
    let newAnimal = req.body;
    animals.push(newAnimal);
    console.log('animals array: ', animals);
    // do something with object
    // newThing.save(function(err){
    //     if (err){
    //         console.log('update user error: ', err);
    //         res.sendStatus(500);
    //     } else {
    //         res.sendStatus(202);
    //     }
    // });
    res.send(animals);
});

app.delete('/', function(req, res){
    console.log('delete req.body: ', req.body);
    
    for (var i = 0; i < animals.length; i++){
        if (req.body.name == animals[i].name){
            animals.splice(i, 1);
        }
    }
    console.log('animals: ', animals);
    res.send(animals);
});


app.listen(3000, function(){
    console.log('Listening on port 3000.');
});

// module.exports = {
//     sayHello: function(){
//         return 'hello there!';
//     },
//     addNumbers: function(val1, val2){
//         return val1 + val2;
//     }
// }

module.exports = app;
// {
//     wowTest: function(){
//         return 'wow!';
//     },
//     mathTest: function(){
//         return 5 + 5;
//     },
//     objTest: function(){
//         return cat;
//     },
//     squareTest: function(val1){
//         return val1 * val1;
//     },

// };