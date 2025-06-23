window.onload=SetupPage;

function SetupPage(){

    ordenarNumeros()
}

function ordenarNumeros(){
    let numeros = document.getElementById("numeros");
    let boton = document.getElementById("ordenar");
    let div = document.getElementById("ordenado");

    boton.addEventListener("click",function(){
        div.textContent=numeros.value.split(",").sort(((a, b) => a - b));
    })
}