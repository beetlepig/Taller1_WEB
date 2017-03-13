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
       if(productosDB.getSegundoArray().length==0 || (!productosDB.getArbolCheck()  && !productosDB.getCategoriatrue())){
           productosDB.unirArrays();
       }else if(productosDB.getArbolCheck() || productosDB.getCategoriatrue()) {
           productosDB.interceptarArrays();
       }
   }
    if (id == "botonBlue"){
        console.log("miau miau blue");
        productosDB.pushCategoriaArbusto();
        console.log(productosDB.getFiltro().length);
        if(productosDB.getSegundoArray().length==0 || (!productosDB.getArbustoCheck()) && !productosDB.getCategoriatrue()){
            productosDB.unirArrays();
        }else if(productosDB.getArbustoCheck() || productosDB.getCategoriatrue()) {
            productosDB.interceptarArrays();
        }
    }

    if (id == "botonYellow"){
        console.log("miau miau amarillo");
        productosDB.pushCategoriaFlor();
        console.log(productosDB.getFiltro().length);
        if(productosDB.getSegundoArray().length==0 || (!productosDB.getFlorCheck()  && !productosDB.getCategoriatrue())){
            productosDB.unirArrays();
        }else if(productosDB.getFlorCheck() || productosDB.getCategoriatrue()) {
            productosDB.interceptarArrays();
        }
    }

    if (id == "botonBrow"){
        console.log("miau miau cafe");
        productosDB.pushCategoriaHelecho();
        console.log(productosDB.getFiltro().length);
        if(productosDB.getSegundoArray().length==0 || (!productosDB.getHelechoCheck()  && !productosDB.getCategoriatrue())){
            productosDB.unirArrays();
        }else if(productosDB.getHelechoCheck() || productosDB.getCategoriatrue()) {
            productosDB.interceptarArrays();
        }
    }

    if (id == "Frio_check"){
        console.log("grr frio");
        productosDB.filtroFrio();
        if(productosDB.getFiltro().length==0 || (!productosDB.getFrioCkeck() && !productosDB.getClimatrue())){
            productosDB.unirArrays();
        }else if(productosDB.getFrioCkeck() || productosDB.getClimatrue()) {
            productosDB.interceptarArrays();
        }
    }
    if (id == "Caliente_check"){
        console.log("grr caliente");
        productosDB.filtroCaliente();
        if(productosDB.getFiltro().length==0 || (!productosDB.getCalienteCkeck() && !productosDB.getClimatrue())){
            productosDB.unirArrays();
        }else if(productosDB.getCalienteCkeck() || productosDB.getClimatrue()) {
            productosDB.interceptarArrays();
        }
    }

    if (id == "Templado_check"){
        console.log("grr templado");
        productosDB.filtroTemplado();
        if(productosDB.getFiltro().length==0 || (!productosDB.getTempladoCkeck() && !productosDB.getClimatrue())){
            productosDB.unirArrays();
        }else if(productosDB.getTempladoCkeck() || productosDB.getClimatrue()) {
            productosDB.interceptarArrays();
        }
    }
    if (id == "Lluvioso_check"){
        console.log("grr lluvioso");
        productosDB.filtroLluvioso();
        if(productosDB.getFiltro().length==0 || (!productosDB.getLluviosoCheck() && !productosDB.getClimatrue())){
            productosDB.unirArrays();
        }else if(productosDB.getLluviosoCheck() || productosDB.getClimatrue()) {
            productosDB.interceptarArrays();
        }
    }

    if (id == "Seco_check"){
        console.log("grr seco");
        productosDB.filtroSeco();
        if(productosDB.getFiltro().length==0 || (!productosDB.getSecoCheck() && !productosDB.getClimatrue())){
            productosDB.unirArrays();
        }else if(productosDB.getSecoCheck() || productosDB.getClimatrue()) {
            productosDB.interceptarArrays();
        }
    }

    if (!productosDB.comprobarFiltroActivo()) {
       console.log("sin filtros");
       res.render('home', {title: 'Jardin Misterioso', productos: productosDB.getall(), mostrar: "none"});



   }  else if(productosDB.getArrayFinal().length == 0 && productosDB.comprobarFiltroActivo()){
        console.log("no hay elementos")
        res.render('home', {title: 'Jardin Misterioso', productos: productosDB.getArrayFinal(), mostrar: "flex"});

    } else {
        console.log("Con filtros");
        res.render('home', {title: 'Jardin Misterioso', productos: productosDB.getArrayFinal(), mostrar: "none"});
    }




    req.on("close", function() {
       console.log("desconectado");
    });




});



module.exports = router;
