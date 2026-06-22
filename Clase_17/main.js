let arrayOriginal = [1, 2, 3, 4, 5, 6];
let asignarArray = arrayOriginal;

/* asignarArray[0] = 48; */

let spreadArray = [...arrayOriginal];

spreadArray[0] = 86;

console.log("Original " + arrayOriginal);
console.log("Asigando " + asignarArray);
console.log("Spread " + spreadArray);

let objetoOriginal = {
  nombre: "Santiago",
  edad: 33,
};

let objetoSpread = {
  ...objetoOriginal,
  apellido: "Addolorato",
};

let objetoSpread2 = {
  ...objetoSpread,
  trabajo: "React Developer",
};

console.log(objetoOriginal);
console.log(objetoSpread);
console.log(objetoSpread2);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arraySpread = [...array, 11, 12];

console.log("array " + array);
console.log("ArraySpread " + arraySpread);
