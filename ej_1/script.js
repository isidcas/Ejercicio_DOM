window.onload=SetupPage;

function SetupPage(){

    seguirLeyendo();


}

function seguirLeyendo(){
    let enlace=document.getElementById("mostrar");
    let texto=document.getElementsByClassName("adicional oculto")[0];
    
    enlace.addEventListener("click",function(){
        texto.style.display="inline";
        enlace.style.display="none";

    });
}    let body = document.querySelector("body");
