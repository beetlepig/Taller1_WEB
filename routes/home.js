var express = require('express');
var router = express.Router();
var productosDB= require('../public/js/DBproductos');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', {title: 'Jardin Misterioso',productos:productosDB.getall()});

});

module.exports = router;
