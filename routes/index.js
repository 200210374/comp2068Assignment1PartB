var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});



/* Contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'projects' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});


router.get('/home', function(req, res, next) {
  res.render('home', { title: 'home' });
});







module.exports = router;



