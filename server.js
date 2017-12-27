const express = require('express');
const app = express();
const mongoose = require('mongoose');

const thingObj = {
    first: 'cat',
    second: 'rabbit',
    third: 'dwarf'
};

app.get('/', function(req, res){
    res.send(thingObj);
});

app.post('/', function(req, res){
    let object = req.body;
    // do something with object
    res.sendStatus(202);
});


app.listen(3000, function(){
    console.log('Listenin on port 3000.');
});