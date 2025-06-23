document.addEventListener("DOMContentLoaded", function () {
    let insertar = document.getElementById("insertar");
    let lista = document.getElementById("lista");
    let input = document.getElementById("input");
    let eliminar = document.getElementById("eliminar");

    insertar.addEventListener("click", function () {
            let nuevo = document.createElement("li");
            nuevo.textContent=input.value;
            lista.append(nuevo);
            input.value="";
        })

    eliminar.addEventListener("click", function () {
        if (lista.lastChild) {
            lista.removeChild(lista.lastChild);
        }
    })  
    });

