



// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('index');
});

// about page
app.get('/', function(req, res) {
    res.render('about');
});


app.get('/', function(req, res) {
    res.render('contact');
});
app.get('/', function(req, res) {
    res.render('projects');
});
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/', function(req, res) {
    res.render('services');
});




app.listen(3000);
console.log('Port 3000');


