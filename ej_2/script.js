window.onload=SetupPage;

function SetupPage(){
   ocultarContenidoUno();
   ocultarContenidoDos();
   ocultarContenidoTres();


};

function ocultarContenidoUno(){

   let contenido = document.getElementById("contenido1");
   let enlace = document.getElementById("c1");

   enlace.addEventListener("click",function(){
      
      if (contenido.style.display=="none"){ //2º al darle verifica que está en none y lo vuelve a mostrar
         contenido.style.display="block";
         enlace.textContent="1. Ocultar Contenido";
      }else{
         contenido.style.display="none"; //1º al principio le doy para que desaparezca y cambie el enlace
         enlace.textContent="1. Mostrar Contenido";
      }
      

   });
}

function ocultarContenidoDos(){

   let contenido = document.getElementById("contenido2");
   let enlace = document.getElementById("c2");

   enlace.addEventListener("click",function(){
      
      if (contenido.style.display=="none"){ //2º al darle verifica que está en none y lo vuelve a mostrar
         contenido.style.display="block";
         enlace.textContent="1. Ocultar Contenido";
      }else{
         contenido.style.display="none"; //1º al principio le doy para que desaparezca y cambie el enlace
         enlace.textContent="1. Mostrar Contenido";
      }
      

   });
}

function ocultarContenidoTres(){

   let contenido = document.getElementById("contenido3");
   let enlace = document.getElementById("c3");

   enlace.addEventListener("click",function(){
      
      if (contenido.style.display=="none"){ //2º al darle verifica que está en none y lo vuelve a mostrar
         contenido.style.display="block";
         enlace.textContent="1. Ocultar Contenido";
      }else{
         contenido.style.display="none"; //1º al principio le doy para que desaparezca y cambie el enlace
         enlace.textContent="1. Mostrar Contenido";
      }
      

   });
}