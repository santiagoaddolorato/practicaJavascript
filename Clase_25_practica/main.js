const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },
  {
    id: 2,
    nombre: "pizza de cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },
  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },
  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },
  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },
  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/* Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola: */
/* a) las pizzas que tengan un id impar. */

/* Opción 1 */

pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log(`La ${pizza.nombre} tiene un id impar`);
  }
});

/* Opción 2 */
const pizzasImpares = pizzas.filter((pizza) => {
  return pizza.id % 2 !== 0;
});
pizzasImpares.forEach((pizza) => {
  console.log(`La ${pizza.nombre} tiene un id impar`);
});

/* b) Hay alguna pizza que valga menos de $600? */

/* opcion 1 */
const precioMenorA600 = (pizza) => pizza.precio < 600;
if (pizzas.some(precioMenorA600)) {
  console.log("Hay pizzas con precio menor a $600");
} else {
  console.log("No hay pizzas con precio menor a $600");
}
/* opcion 2 */

const pizzaBarata = pizzas.find(precioMenorA600);
if (!pizzaBarata) {
  console.log("No hay pizzas con precio menor a $600");
} else {
  console.log("Hay pizzas con precio menor a $600");
}
/* c) El nombre de cada pizza con su respectivo precio: */
pizzas.forEach((pizza) =>
  console.log(
    `Vení a probar nuestra ${pizza.nombre} por tan solo $${pizza.precio}`,
  ),
);
/* d) Imprimir todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual) */
/* Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un  array de ingredientes */

pizzas.forEach((pizza) => {
  console.log(`Los ingredientes de la ${pizza.nombre} son:`);
  pizza.ingredientes.forEach((ingrediente) => console.log(ingrediente));
});
