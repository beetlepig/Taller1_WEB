var express = require('express');
var router = express.Router();
var productosDB= require('../public/js/DBproductos');

/* GET home page. */
router.get('/', function(req, res, next) {
   var id= req.query.boton;
   if (id == "botonRed"){
       console.log("miau miau red");
       productosDB.pushCategoriaArbol();
       console.log(productosDB.getFiltro().length);
   }
    if (id == "botonBlue"){
        console.log("miau miau blue");
        productosDB.pushCategoriaArbusto();
        console.log(productosDB.getFiltro().length);
    }

    if (id == "botonYellow"){
        console.log("miau miau amarillo");
        productosDB.pushCategoriaFlor();
        console.log(productosDB.getFiltro().length);
    }

    if (id == "botonBrow"){
        console.log("miau miau cafe");
        productosDB.pushCategoriaHelecho();
        console.log(productosDB.getFiltro().length);
    }

   if (productosDB.getFiltro().length == 0) {
       console.log("sin filtros");
       res.render('home', {title: 'Jardin Misterioso', productos: productosDB.getall()});



   } else {
       console.log("con filtros");
       res.render('home', {title: 'Jardin Misterioso', productos: productosDB.getFiltro()});

   }


});

module.exports = router;
