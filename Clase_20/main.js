let nombre = "Santiago";

/* Length */
console.log(nombre.length);
/* toUpperCase */
console.log(nombre.toUpperCase());
/* toLowerCase */
console.log(nombre.toLowerCase());

let chocolatePreferido = "Chocolate negro";

/* replace */
console.log(chocolatePreferido.replace("negro", "blanco"));

let stringConEspacios = "   Hola, soy Santiago";

/* trim */
console.log(stringConEspacios.trim());

let stringLargo =
  "Hola soy Santiago, Tengo 33 años, trabajo en NUCBA y utilizo REACT";

/* split */
console.log(stringLargo.split(","));

/* repeat */
console.log(nombre.repeat(5));

/* charAt */
console.log(nombre.charAt(2));

/* concat */
console.log(nombre.concat(" ", "Addolorato"));

console.log(nombre.concat(" ", chocolatePreferido));

/* includes */
console.log(stringLargo.includes("NUCBA"));
console.log(stringLargo.includes("NUC"));
console.log(stringLargo.includes("nucba"));
console.log(stringLargo.includes("mesa"));

/* slice */
console.log(stringLargo.slice(9, 17));
console.log(stringLargo.slice(9));
