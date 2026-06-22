/* This */

let auto = {
  marca: "Fiat",
  modelo: "Uno",
  anio: 2002,
  combustible: "Nafta",
  seguro: true,
  color: ["Rojo", "Azul", "Negro"],
  thisFlecha: () => {
    console.log(this);
  },
  thisFunction: function () {
    console.log(this);
  },
};

console.log(auto.thisFlecha());
console.log(auto.thisFunction());
