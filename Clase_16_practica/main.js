/* 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
 */

/* 1 */

const parImpar = (numero) => {
  if (numero % 2 === 0) {
    console.log(`El numero ${numero} es par`);
  } else {
    console.log(`El numero ${numero} es impar`);
  }
};

/* parImpar(25); */

/* 2 */

const mayorMenor = (num1, num2) => {
  if (num1 > num2) {
    console.log(`El numero ${num1} es mayor al numero ${num2}`);
  } else if (num1 < num2) {
    console.log(`El numero ${num2} es mayor al numero ${num1}`);
  } else {
    console.log("Los numeros son iguales");
  }
};

/* mayorMenor(2, 3);
mayorMenor(5, 2);
mayorMenor(5, 5); */

/* 3 */

const multiploCinco = (numero) => {
  if (numero % 5 === 0) {
    console.log(`El numero ${numero} es multiplo de 5`);
  } else {
    console.log(`El numero ${numero} no es multiplo de 5`);
  }
};

/* multiploCinco(10);
multiploCinco(14); */

/* 4 */

const imprimirNumero = (numero) => {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
};
/* imprimirNumero(25);
imprimirNumero(5); */

/* 5 */

const imprimirPalabra = (palabra, numero) => {
  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
};

/* imprimirPalabra("Hola", 5); */

/* 6 */

const imprimirArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

const arr = [1, 2, 3, 4, 5, 6, "Hola"];
/* imprimirArray(arr); */

/*  7 */

const imprimirMenos5 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i === 4) {
      continue;
    }

    console.log(array[i]);
  }
};

/* imprimirMenos5([1, 2, 3, 4, 5, 6, 7, "Hola"]); */

const multiplicarArray = (array, numero) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * numero);
  }
};

multiplicarArray([1, 2, 3, 4, 5, 6, 7, 8], 2);
