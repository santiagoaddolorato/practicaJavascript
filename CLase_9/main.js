console.log("Hola");

/* Declarar una función */

function saludo() {
  console.log("Hola Mundo");
}
/* Llamar una función */

saludo();

function suma() {
  let resultado = 2 + 8;
  return resultado;
}

console.log(suma());

/* Parametros y argumentos */

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}
saludar(`Rodri`);
saludar(`Mati`);

function presentación(nombre = "Rodrigo", edad = 32) {
  console.log(`Hola! me llamo ${nombre} y tengo ${edad} años`);
}
presentación("Mati", 29);
