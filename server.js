



// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/', function(req, res) {
    res.render('pages/about');
});


app.get('/', function(req, res) {
    res.render('pages/contact');
});
app.get('/', function(req, res) {
    res.render('pages/projects');
});
app.get('/', function(req, res) {
    res.render('pages/home');
});

app.get('/', function(req, res) {
    res.render('pages/services');
});




app.listen(3000);
console.log('Port 3000');


