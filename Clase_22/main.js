/* Métodos de los arrays II  */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* map */
let numerosDuplicados = numeros.map((numero) => {
  return numero * 2;
});

console.log(numerosDuplicados);

/* filter */
let numerosMayoresA5 = numeros.filter((numero) => {
  return numero > 5;
});

console.log(numerosMayoresA5);

/* find */
let numeroEncontrado = numeros.find((numero) => {
  return numero > 5;
});

console.log(numeroEncontrado);

/* reduce */
let suma = numeros.reduce((acumulador, valor) => {
  acumulador = acumulador + valor;
  return acumulador;
}, 0);

console.log(suma);

/* forEach */
numeros.forEach((num) => {
  console.log(num);
});

/* some */
let hayAlgunoMayorA5 = numeros.some((numero) => {
  return numero > 5;
});
console.log(hayAlgunoMayorA5);

/* every */
let todosSonMayoresA5 = numeros.every((numero) => {
  return numero > 5;
});
console.log(todosSonMayoresA5);

/* sort */
let arrayDesordenados = [1, 3, 2, 5, 4];

let numerosOrdenados = arrayDesordenados.sort((a, b) => {
  return a - b;
});
console.log(numerosOrdenados);
