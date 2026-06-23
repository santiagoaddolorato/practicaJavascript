/* Desestructuracion de arrays y objetos */

/* Array */

/* let arrayDescripcion = [
  "Santiago",
  "NUCBA",
  "Javascript",
  "React",
  "Node",
  "MongoDB",
  "Express",
];

const [nombre, trabajo, lenguaje, ...rest] = arrayDescripcion;

console.log(nombre);
console.log(trabajo);
console.log(rest); */

/* Objetos */

let objetoDescripcion = {
  nombre: "Santiago",
  apellido: "Addolorato",
  edad: 33,
  trabajo: "React Developer",
};

const { nombre, apellido, edad, trabajo } = objetoDescripcion;

console.log(edad);
console.log(apellido);
