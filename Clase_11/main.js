/* Funciones recursivas */
let cuentaAtras = (numero) => {
  if (numero === 0) {
    return console.log(0);
  }
  console.log(numero);
  return cuentaAtras(numero - 1);
};
cuentaAtras(10);

let duplicar = (numero) => {
  numero = numero + numero;
  console.log(numero);
  if (numero > 100) {
    return console.log("El número ya es muy grande");
  }
  return duplicar(numero);
};

duplicar(2);
