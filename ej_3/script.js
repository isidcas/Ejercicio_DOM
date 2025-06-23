window.onload=SetupPage;

function SetupPage(){
saludar();
}

function saludar(){
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellidos");
    let boton = document.getElementById("saludar");
    let bienvenida=document.getElementById("saludo");

    boton.addEventListener("click",function(){
        bienvenida.textContent="Hola " + nombre.value+" "  +apellido.value+" bienvenido a esta página"
        nombre.value="";
        apellido.value="";
    });
}