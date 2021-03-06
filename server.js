const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

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
    // console.log('req.body: ', req.body);
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
    res.send({'SUCCESS': newAnimal});
});

app.delete('/', function(req, res){
    console.log('DELETE req.body: ', req.body);
    let deletedAnimal;
    for (var i = 0; i < animals.length; i++){
        if (req.body.name == animals[i].name){
            deletedAnimal = animals[i];
            animals.splice(i, 1);
        }
    }
    // console.log('deletedAnimal: ', deletedAnimal);
    res.send({ 'DELETED': deletedAnimal });
});

app.put('/:id', function(req, res){
    console.log('PUT req.body and req.params: ', req.body, req.params);
    let editId = req.body.id
    animals[1].name = req.body.name;
    res.send({ 'EDITED': animals[1] });
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