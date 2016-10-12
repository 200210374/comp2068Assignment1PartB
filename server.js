



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
app.get('/about', function(req, res) {
    res.render('pages/about');
});


app.get('/contact', function(req, res) {
    res.render('pages/contact');
});
app.get('/about', function(req, res) {
    res.render('pages/projects');
});
app.get('/about', function(req, res) {
    res.render('pages/home');
});

app.get('/about', function(req, res) {
    res.render('pages/services');
});




app.listen(3000);
console.log('Port 3000');


/*

var express = require('express');
var app = express();
app.use('/', function(req, res) {
    res.send('Hello World');
});

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/index');
    });

    app.get('/about', function(req, res) {
        res.render('pages/about');
    });


    app.get('/contact', function(req, res) {
        res.render('pages/contact');
    });

    app.get('/Projects', function(req, res) {
        res.render('pages/Projects');
    });

    app.get('/Services', function(req, res) {
        res.render('pages/Services');
    });




app.listen(3000);
console.log('Server running at http://localhost:3000/')};
//module.exports = app; */