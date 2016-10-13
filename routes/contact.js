var express = require('express');
var router = express.Router();




// GET handler
router.get('/', function(req, res, next) {



            // load the games view
            res.render('contact', {

            });

    });



module.exports = router;