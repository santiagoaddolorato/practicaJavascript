/* Operadores ternarios */

const edad = 25;
console.log(edad);

edad >= 18 ? console.log("Sos mayor") : console.log("Sos menor");

const nota = 7;

if (nota >= 7) {
  console.log("Promoción");
} else if (nota >= 4) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}

nota >= 7
  ? console.log("Promosionado")
  : nota >= 4
    ? console.log("Aprobado")
    : console.log("Desaprobado");
/* Loops */

for (let i = 1; i < 11; i++) {
  console.log(`Hola, estoy en la iteración Nro. ${i}`);
}
for (let i = 10; i > 0; i--) {
  console.log(`Estoy haciendo una cuenta regresiva con el Nro. ${i}`);
}

/* While */

let condicionDelWhile = 0;

while (condicionDelWhile < 11) {
  console.log(`El While esta en ${condicionDelWhile}`);
  condicionDelWhile++;
}
condicionDelWhile = 0;

while (condicionDelWhile < 10) {
  if (condicionDelWhile === 5) {
    console.log("El while esta en la iteración Nro 5");
  }
  condicionDelWhile++;
}
/* Do While */

let condicionDoWhile = 1;

do {
  console.log(condicionDoWhile);
  condicionDoWhile++;
} while (condicionDoWhile < 11);
