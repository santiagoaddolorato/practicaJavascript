/* Métodos de los arrays I */

let miArray = ["hola", "Nucba", true, 1234, "chau"];

/* length */

console.log(miArray.length);

/* indexOf */
console.log(miArray.indexOf("Nucba"));
console.log(miArray.indexOf(true));
console.log(miArray.indexOf(false));

/* pop */
let pop = miArray.pop();
console.log(miArray);
console.log(pop);

/* shift */
let shift = miArray.shift();
console.log(miArray);
console.log(shift);

/* push */
miArray.push("Nuevo elemento");
console.log(miArray);

/* unshift */
miArray.unshift("Primer elemento");
console.log(miArray);

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* reverse */
console.log(arrayNumeros.reverse());

/* toString */

console.log(arrayNumeros.toString());

/* join */
console.log(arrayNumeros.join(" - "));

/* concat */
console.log(miArray.concat(arrayNumeros));

/* slice */
console.log(arrayNumeros.slice(2, 5));

/* includes */
console.log(arrayNumeros.includes(5));
console.log(arrayNumeros.includes(24));
