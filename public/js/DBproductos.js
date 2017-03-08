
var productos= [
    {"nombre":"Rosa", "srcIMG":"/images/imgProductos/2.jpg", "categoria":"Flor", "color":"249,168,37 ,1"},
    {"nombre":"Saman", "srcIMG":"/images/imgProductos/1.jpg", "categoria":"Arbol", "color":"229,57,53 ,1"},
    {"nombre":"Helecho", "srcIMG":"/images/imgProductos/3.jpg", "categoria":"Helecho", "color":"109,76,65 ,1"},
    {"nombre":"Dolar", "srcIMG":"/images/imgProductos/4.jpg", "categoria":"Arbusto o planta pequeña", "color":"3,155,229 ,1"},
    {"nombre":"Tulipán", "srcIMG":"/images/imgProductos/5.jpg", "categoria":"Flor", "color":"249,168,37 ,1"},
    {"nombre":"Cedro", "srcIMG":"/images/imgProductos/6.jpg", "categoria":"Arbol", "color":"229,57,53 ,1"},
    {"nombre":"Culantrillo", "srcIMG":"/images/imgProductos/7.jpg", "categoria":"Helecho", "color":"109,76,65 ,1"},
    {"nombre":"Nogal", "srcIMG":"/images/imgProductos/8.jpg", "categoria":"Arbol", "color":"229,57,53 ,1"}

];


exports.getall= function () {
    return productos;
};