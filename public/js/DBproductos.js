
var productosFiltrados = [];
var arbolCheck=false;
var arbustoCheck=false;
var florCheck=false;
var helechoCheck;

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


exports.getall= function () {
    return productos;
};

exports.clearFiltroArray= function () {
  productosFiltrados= [];
};

exports.getFiltro= function () {
  return productosFiltrados;
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