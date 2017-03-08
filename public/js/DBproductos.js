
var productos= [
    {"nombre":"Rosa", "srcIMG":"/images/imgProductos/2.jpg", "categoria":"Flor", "color":"249,168,37 ,1"},
    {"nombre":"Saman", "srcIMG":"/images/imgProductos/1.jpg", "categoria":"Arbol", "color":"229,57,53 ,1"},
    {"nombre":"Helecho", "srcIMG":"/images/imgProductos/3.jpg", "categoria":"Helecho", "color":"109,76,65 ,1"}


];


exports.getall= function () {
    return productos;
};