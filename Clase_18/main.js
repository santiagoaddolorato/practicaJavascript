/* Rest operator */

let promedioCalificaciones = (nombre, apellido, ...rest) => {
  let arrayCalificaciones = [...rest];
  let suma = 0;
  for (let i = 0; i < arrayCalificaciones.length; i++) {
    suma = suma + arrayCalificaciones[i];
  }
  return console.log(
    `El promedio de calificaciones de ${nombre} ${apellido} es de ${
      suma / arrayCalificaciones.length
    }`,
  );
};
promedioCalificaciones("Rodrigo", "Troncoso", 8, 9, 5, 7, 2, 6, 4, 8, 4, 10);

/* Practica */

let sumNum = (...rest) => {
  let suma = 0;
  for (let i = 0; i < rest.length; i++) {
    suma = suma + rest[i];
  }
  return console.log(suma);
};
sumNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
