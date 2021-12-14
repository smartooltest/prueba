//alert("conexion");

//var z;

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var fondo ={
url : "tile.png",
cargaOK: false
}

fondo.imagen  = new Image();    //Añadimos elemento al JSON fondo
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();    //Añadimos elemento al JSON vaca
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);


function cargarFondo()
{
fondo.cargaOK = true;
dibujar();
}

function cargarVaca()
{
vaca.cargaOK = true;
dibujar();
}

function dibujar()
{
  if(fondo.cargaOK){
    papel.drawImage(fondo.imagen,0,0);
  }

  if(vaca.cargaOK){
    var cantidadVacas = aleatorio(5,50);
    console.log(cantidadVacas);
    for (var i = 0; i < cantidadVacas; i++) {
   var x = aleatorio(0,420);
   var y = aleatorio(0,420);
   papel.drawImage(vaca.imagen,x,y);
 }
  }
}


/*
for (var i = 0; i < 10; i++) {
  z = aleatorio(-5,5);
  document.write(z+",");
} */



function aleatorio(min,maxi){
var resultado;
resultado = Math.floor((Math.random() * (maxi-min +1))) + min;
return resultado;
}
