var express = require('express');
var router = express.Router();
var control = require('../controller/control');

/* GET home page. */
router.get('/', function(req, res, next){res.redirect('/homeDogs')});
router.get('/homeDogs', control.mostrarPerros);



/* posts */
router.post('/filtrados', control.filtrarPerros); //muestra la vista de filtrados una vez selecciono cualquiera de las options







module.exports = router;
