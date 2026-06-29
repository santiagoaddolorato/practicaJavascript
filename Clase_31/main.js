const divRender = document.querySelector("#render");
let stringAGuardar = "Buenas! voy a quedarme en tu local storage";
let stringARenderizar = "";

localStorage.setItem("miString", stringAGuardar);
stringARenderizar = localStorage.getItem("miString");

divRender.innerHTML = stringARenderizar;

let stringNuevoAGuardar = "Vamo Argentina a ganar";
let StringNuevoARenderizar = "";

localStorage.setItem("nuevoString", stringNuevoAGuardar);

StringNuevoARenderizar = localStorage.getItem("nuevoString");

divRender.innerHTML = StringNuevoARenderizar;
