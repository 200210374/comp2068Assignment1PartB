/**
 * Created by Brandon Roy on 13/10/2016.
 */

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('contact', { title: 'contact' });
});


module.exports = router;
