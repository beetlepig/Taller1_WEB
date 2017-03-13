var btnArray=[];
var countArray=[];
var countProducto=[];

window.onload = function(){

    for(i=0;i<count;i++){
        countProducto.push(0);
    }
    for (i=0;i<9;i++){
        btnArray.push(document.getElementById("button"+i));

    }
    for (i=0;i<9;i++){
        countArray.push(0);
    }

    for (i=0;i<9;i++){
        if(localStorage["bg-color"+i]){
            btnArray[i].style.backgroundColor = localStorage.getItem("bg-color"+i);

        }
    }


    for (i=0;i<9;i++){
        if(localStorage["count"+i]){
            countArray[i]= localStorage.getItem("count"+i);
        }
    }



    // remove from storage localStorage.removeItem("bg-color")
};



function setColor(btn, colorOne, colorTwo){


    if (countArray[btn] == 0) {
        localStorage.removeItem("bg-color"+btn);
        localStorage.setItem("bg-color"+btn, colorOne);
        countArray[btn] = 1;
    }
    else {
        localStorage.removeItem("bg-color"+btn);
        localStorage.setItem("bg-color"+btn, colorTwo);
        countArray[btn] = 0;
    }
    localStorage.setItem("count"+btn, countArray[btn]);
    // btn.style.backgroundColor = localStorage.getItem("bg-color");
}


function selProducto(producto) {
console.log("entro");


    var property = document.getElementById(producto);
    if (countProducto[producto] == 0) {
        property.style.backgroundColor= 'rgba(0,0,0,0.0)';
        countProducto[producto] = 1;
    }
    else {
        property.style.backgroundColor= 'rgba(0,0,0,0.3)';
        countProducto[producto] = 0;
    }
}




function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}



