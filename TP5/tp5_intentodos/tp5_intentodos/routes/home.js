var express = require('express');
var router = express.Router();

var homeRouter = require('./homeDogs'); //donde busco al home

router.get('/', function (req, res, next) {
	res.render('homeDogs', { title: 'Perritos' });
 
 });

module.exports = router;
