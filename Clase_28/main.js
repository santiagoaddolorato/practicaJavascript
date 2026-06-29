const buttonToggle = document.querySelector("#toggle");
/* buttonToggle.addEventListener("click", () => {
  console.log("Estoy haciendo un click");
}); */

/* const clickEnBoton = () => {
  console.log("Click desde mi función");
};
buttonToggle.onclick = clickEnBoton;

buttonToggle.addEventListener("click", clickEnBoton); */

const tituloH1 = document.querySelector("h1");
const tituloToggle = () => {
  tituloH1.classList.toggle("ocultar");
};
buttonToggle.addEventListener("click", tituloToggle);

const inputEjemplo = document.querySelector("#input");
const functionFocus = () => {
  console.log("Soy el evento focus");
  inputEjemplo.style.backgroundColor = "blue";
};
inputEjemplo.addEventListener("focus", functionFocus);

const functionBlur = () => {
  console.log("Soy el evento blur");
  inputEjemplo.style.backgroundColor = "cyan";
};
inputEjemplo.addEventListener("blur", functionBlur);

const functionChange = () => {
  console.log("Soy el evento change");
  inputEjemplo.style.border = "5px yellow solid";
};
inputEjemplo.addEventListener("change", functionChange);

const resetButton = document.querySelector("#reset");
const resetInput = () => {
  inputEjemplo.style.backgroundColor = "white";
  inputEjemplo.style.border = "none";
  inputEjemplo.value = "";
};
resetButton.addEventListener("click", resetInput);

const btnDesactivar = document.querySelector("#desactivar");
const desactivarEventos = () => {
  console.log("Eventos desactivados");
  buttonToggle.removeEventListener("click", tituloToggle);
  inputEjemplo.removeEventListener("focus", functionFocus);
  inputEjemplo.removeEventListener("blur", functionBlur);
  inputEjemplo.removeEventListener("change", functionChange);
  resetButton.removeEventListener("click", resetInput);
};

btnDesactivar.addEventListener("click", desactivarEventos);
