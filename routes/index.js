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



/* Contact page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;



