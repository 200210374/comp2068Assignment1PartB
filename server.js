


var express = require('express');
var app = express();
app.use('/', function(req, res) {
    res.send('Hello World');
});
app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;






/*
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
    res.render('pages/services');
});

app.get('/about', function(req, res) {
    res.render('pages/home');
});



app.listen(8080);


*/

/*

// ================================================================
// get all the tools we need
// ================================================================
var express = require('express');
var routes = require('/routes/index.js');
var port = process.env.PORT || 3000;

var app = express();

// ================================================================
// setup our express application
// ================================================================
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

// ================================================================
// setup routes
// ================================================================
routes(app);

// ================================================================
// start our server
// ================================================================
app.listen(port, function() {
    console.log('Server listening on port ' + port + '…');
}); */