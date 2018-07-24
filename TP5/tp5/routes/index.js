var express = require('express');
var router = express.Router();

var controlador = require('../controller/control'); //donde busco el controlador

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// GET
router.get('/', controlador.cargarPagina);

//POST
router.post('/', controlador.pedidoDatos);

module.exports = router;
