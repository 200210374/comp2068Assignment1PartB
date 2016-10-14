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







module.exports = router;



