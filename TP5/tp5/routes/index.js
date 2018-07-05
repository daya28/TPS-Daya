var express = require('express');
var router = express.Router();
var controlador = require('../controller/control');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// GET
router.get('/', controlador.renIndex);

//POST
router.post('/', controlador.keepData);

module.exports = router;
