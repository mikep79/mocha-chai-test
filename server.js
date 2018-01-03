const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cat = {
    legs: 4,
    name: 'sniffles',
    whiskers: true,
    speak: function(){
        return 'meow!';
    }
};

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
    res.send(thingObj);
});

app.post('/', function(req, res){
    let object = req.body;
    // do something with object
    // newThing.save(function(err){
    //     if (err){
    //         console.log('update user error: ', err);
    //         res.sendStatus(500);
    //     } else {
    //         res.sendStatus(202);
    //     }
    // });
    res.sendStatus(202);
});


app.listen(3000, function(){
    console.log('Listenin on port 3000.');
});

// module.exports = {
//     sayHello: function(){
//         return 'hello there!';
//     },
//     addNumbers: function(val1, val2){
//         return val1 + val2;
//     }
// }

module.exports = {
    wowTest: function(){
        return 'wow!';
    },
    mathTest: function(){
        return 5 + 5;
    },
    objTest: function(){
        return cat;
    },
    squareTest: function(val1){
        return val1 * val1;
    }
};