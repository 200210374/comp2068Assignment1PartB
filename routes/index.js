var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});



/* Contact page */
router.get('/', function(req, res, next) {
  res.render('/pages/contact.html', { title: 'Contact' });
});



'use strict';

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



};


/* Contact page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




//module.exports = router;



