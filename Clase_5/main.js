/* If */
if (2 < 4) {
  console.log("Estoy dentro del if");
}
console.log("Estoy fuera del if");

if (2 < 4) {
  console.log("Nahuel");
} else {
  console.log("Addolorato");
}
let edad = 30;
if (edad < 18) {
  console.log("Sos mayor de edad");
} else if (edad > 24) {
  console.log("Sos mayor de edad y mayor de 24");
} else {
  console.log("Sos menor de edad");
}

/* Switch */

let Tecnologia = "Hola";

switch (Tecnologia) {
  case "HTML":
    console.log("Suerte con las etiquetas");
    break;
  case "CSS":
    console.log("A darle estilo a todo!");
    break;
  case "Javascript":
    console.log("Welcome to JS");
    break;
  case "React":
    console.log("Maneja bien los estados");
    break;
  default:
    console.log("No estas estudiando nada sobre front en el stack MERN");
    break;
}
