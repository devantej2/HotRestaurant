// Declaring Dependencies
const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/tables', function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get('/reserve', function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});


app.listen(port, function (){
    console.log(`Example app listening on port port!`);
});