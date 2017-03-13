
var productosFiltrados = [];
var arrayFinal= [];
var arrayFinalFinal= [];
var arbolCheck=false;
var arbustoCheck=false;
var florCheck=false;
var helechoCheck=false;
var frioCheck=false;
var calienteCheck=false;
var templadoCheck=false;
var lluviosoCheck=false;
var secoCheck=false;

var productos= [
    {"nombre":"Rosa", "srcIMG":"/images/imgProductos/2.jpg", "categoria":"Flor", "color":"249,168,37 ,1", "clima":"Frio"},
    {"nombre":"Saman", "srcIMG":"/images/imgProductos/1.jpg", "categoria":"Arbol", "color":"229,57,53 ,1", "clima":"Caliente"},
    {"nombre":"Helecho", "srcIMG":"/images/imgProductos/3.jpg", "categoria":"Helecho", "color":"109,76,65 ,1", "clima":"Templado"},
    {"nombre":"Dolar", "srcIMG":"/images/imgProductos/4.jpg", "categoria":"Arbusto o planta pequeña", "color":"3,155,229 ,1", "clima":"Lluvioso"},
    {"nombre":"Tulipán", "srcIMG":"/images/imgProductos/5.jpg", "categoria":"Flor", "color":"249,168,37 ,1", "clima":"Seco"},
    {"nombre":"Cedro", "srcIMG":"/images/imgProductos/6.jpg", "categoria":"Arbol", "color":"229,57,53 ,1", "clima":"Frio"},
    {"nombre":"Culantrillo", "srcIMG":"/images/imgProductos/7.jpg", "categoria":"Helecho", "color":"109,76,65 ,1","clima":"Caliente"},
    {"nombre":"Nogal", "srcIMG":"/images/imgProductos/8.jpg", "categoria":"Arbol", "color":"229,57,53 ,1", "clima":"Templado"},
    {"nombre":"Rocio de Oro", "srcIMG":"/images/imgProductos/9.jpg", "categoria":"Arbusto o planta pequeña", "color":"3,155,229 ,1","clima":"Lluvioso"},
    {"nombre":"Aloe Vera", "srcIMG":"/images/imgProductos/10.jpg", "categoria":"Flor", "color":"249,168,37 ,1", "clima":"Seco"}
];

exports.getProductosTamano=function () {
  return productos.length;
};

exports.getFrioCkeck=function () {
  return frioCheck;
};

exports.getCalienteCkeck=function () {
    return calienteCheck;
};

exports.getTempladoCkeck=function () {
    return templadoCheck;
};

exports.getLluviosoCheck=function () {
    return lluviosoCheck;
};

exports.getSecoCheck=function () {
    return secoCheck;
};

exports.getArbolCheck=function () {
    return arbolCheck;
};

exports.getFlorCheck=function () {
    return florCheck;
};

exports.getArbustoCheck=function () {
    return arbustoCheck;
};

exports.getHelechoCheck=function () {
    return helechoCheck;
};

exports.getCategoriatrue=function () {
    if(arbolCheck | arbustoCheck | florCheck | helechoCheck){
        return true;
    }  else {
        return false;
    }
};

exports.comprobarFiltroActivo= function () {
    if(arbolCheck | arbustoCheck | florCheck | helechoCheck | frioCheck | calienteCheck | templadoCheck |lluviosoCheck | secoCheck){
        return true;
    }  else {
        return false;
    }
};

exports.getClimatrue= function () {
  if(frioCheck | calienteCheck | templadoCheck |lluviosoCheck | secoCheck){
      return true;
  }  else {
      return false;
  }
};


exports.getall= function () {
    return productos;
};

exports.clearFiltroArray= function () {
  productosFiltrados= [];
};

exports.getFiltro= function () {
  return productosFiltrados;
};

exports.getArrayFinal= function () {
  return arrayFinal;
};

exports.getSegundoArray= function () {
    return arrayFinalFinal;
};

exports.pushCategoriaFlor= function () {

    for (i = 0; i < productos.length; i++) {
        if (productos[i].color == "249,168,37 ,1") {
            if (florCheck==false) {
                productosFiltrados.push(productos[i]);

            } else {
                var index =productosFiltrados.indexOf(productos[i]);
                if (index >= 0) {
                    productosFiltrados.splice(index, 1);
                }

            }
        }
    }

    if(!florCheck){
        florCheck=true;
    } else {
        florCheck=false;
    }

};

exports.pushCategoriaArbusto= function () {

    for (i = 0; i < productos.length; i++) {
        if (productos[i].color == "3,155,229 ,1") {
            if (arbustoCheck==false) {
                productosFiltrados.push(productos[i]);

            } else {
                var index =productosFiltrados.indexOf(productos[i]);
                if (index >= 0) {
                    productosFiltrados.splice(index, 1);
                }

            }
        }
    }

    if(!arbustoCheck){
        arbustoCheck=true;
    } else {
        arbustoCheck=false;
    }

};

exports.pushCategoriaArbol= function () {

    for (i = 0; i < productos.length; i++) {
        if (productos[i].color == "229,57,53 ,1") {

                 if (arbolCheck==false) {
                     productosFiltrados.push(productos[i]);

                 } else {
                     var index =productosFiltrados.indexOf(productos[i]);
                     if (index >= 0) {
                         productosFiltrados.splice(index, 1);
                     }

                 }


        }
    }
    if(!arbolCheck){
        arbolCheck=true;
    } else {
        arbolCheck=false;
    }


};

exports.pushCategoriaHelecho= function () {

    for (i = 0; i < productos.length; i++) {
        if (productos[i].color == "109,76,65 ,1") {
            if (helechoCheck==false) {
                productosFiltrados.push(productos[i]);

            } else {
                var index =productosFiltrados.indexOf(productos[i]);
                if (index >= 0) {
                    productosFiltrados.splice(index, 1);
                }

            }
        }
    }

    if(!helechoCheck){
        helechoCheck=true;
    } else {
        helechoCheck=false;
    }

};

exports.filtroFrio= function () {
    for (i = 0; i < productos.length; i++) {
        if (productos[i].clima == "Frio") {
            if (frioCheck==false) {
                arrayFinalFinal.push(productos[i]);

            } else {
                var index =arrayFinalFinal.indexOf(productos[i]);
                if (index >= 0) {
                    arrayFinalFinal.splice(index, 1);
                }

            }
        }
    }

    if(!frioCheck){
        frioCheck=true;
    } else {
        frioCheck=false;
    }
};

exports.filtroTemplado= function () {
    for (i = 0; i < productos.length; i++) {
        if (productos[i].clima == "Templado") {
            if (templadoCheck==false) {
                arrayFinalFinal.push(productos[i]);

            } else {
                var index =arrayFinalFinal.indexOf(productos[i]);
                if (index >= 0) {
                    arrayFinalFinal.splice(index, 1);
                }

            }
        }
    }

    if(!templadoCheck){
        templadoCheck=true;
    } else {
        templadoCheck=false;
    }
};

exports.filtroCaliente= function () {
    for (i = 0; i < productos.length; i++) {
        if (productos[i].clima == "Caliente") {
            if (calienteCheck==false) {
                arrayFinalFinal.push(productos[i]);

            } else {
                var index =arrayFinalFinal.indexOf(productos[i]);
                if (index >= 0) {
                    arrayFinalFinal.splice(index, 1);
                }

            }
        }
    }

    if(!calienteCheck){
        calienteCheck=true;
    } else {
        calienteCheck=false;
    }
};

exports.filtroLluvioso= function () {
    for (i = 0; i < productos.length; i++) {
        if (productos[i].clima == "Lluvioso") {
            if (lluviosoCheck==false) {
                arrayFinalFinal.push(productos[i]);

            } else {
                var index =arrayFinalFinal.indexOf(productos[i]);
                if (index >= 0) {
                    arrayFinalFinal.splice(index, 1);
                }

            }
        }
    }

    if(!lluviosoCheck){
        lluviosoCheck=true;
    } else {
        lluviosoCheck=false;
    }
};

exports.filtroSeco= function () {
    for (i = 0; i < productos.length; i++) {
        if (productos[i].clima == "Seco") {
            if (secoCheck==false) {
                arrayFinalFinal.push(productos[i]);

            } else {
                var index =arrayFinalFinal.indexOf(productos[i]);
                if (index >= 0) {
                    arrayFinalFinal.splice(index, 1);
                }

            }
        }
    }

    if(!secoCheck){
        secoCheck=true;
    } else {
        secoCheck=false;
    }
};

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

exports.unirArrays= function () {
    arrayFinal= productosFiltrados.concat(arrayFinalFinal).unique();
};

exports.interceptarArrays= function () {
    arrayFinal= intersect(arrayFinalFinal,productosFiltrados);
};

function intersect(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}

