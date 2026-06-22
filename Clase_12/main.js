/* Callbacks */

let logSaludo = (nombre) => {
  console.log(`Hola ${nombre}`);
};

let generarNombre = (callback) => {
  let nombre = prompt("Por favor, ingresá tu nombre");
  callback(nombre);
};

generarNombre(logSaludo);
