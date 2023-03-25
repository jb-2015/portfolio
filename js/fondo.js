const imgs = ["img/fondoPrincipal.png","img/fondo2.jpg","img/fondo3.jpg"];
//const menuIt= document.querySelector("");

window.addEventListener("scroll", function() {
  var educacion = document.getElementById("educacion"); // Reemplaza "miElemento" por el ID de tu elemento
  let proyectos =document.getElementById("proyectos"); //obtengo el elemento donde estan los proyectos
  var elementoPosicion = educacion.offsetTop; // Posición del elemento en relación con la parte superior de la página
  var ventanaPosicion = window.pageYOffset || document.documentElement.scrollTop; // Posición de la parte superior de la ventana
  if(ventanaPosicion<elementoPosicion){
  	document.body.style.backgroundImage = `url(${imgs[0]})`;
  }
  else if(ventanaPosicion>=elementoPosicion){
  	document.body.style.backgroundImage = `url(${imgs[1]})`;
  }
  else{
  	document.body.style.backgroundImage = `url(${imgs[2]})`;
  }
 

});

