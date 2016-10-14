var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});



/* Contact page */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

router.get('/', function(req, res, next) {
  res.render('about', { title: 'about' });
});
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'projects' });
});
router.get('/', function(req, res, next) {
  res.render('services', { title: 'services' });
});






'use strict';

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('views/index');
  });

  app.get('about', function(req, res, next) {
    res.render('about');
  });


  app.get('contact', function(req, res, next) {
    res.render('contact');
  });

  app.get('Projects', function(req, res,next) {
    res.render('Projects');
  });

  app.get('Services', function(req, res, next) {
    res.render('Services');
  });

  app.get('home', function(req, res,next) {
    res.render('home');
  });


};


/* Contact page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;



