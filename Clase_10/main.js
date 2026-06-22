/* Arrow functions */

descripcion("Santiago");
function descripcion(nombre, edad = 33) {
  console.log(`Hola! mi nombre es ${nombre} y tengo ${edad} años`);
}

const descripcionFlecha = (nombre, edad = 33) => {
  console.log(`Hola! mi nombre es ${nombre} y tengo ${edad} años`);
};

descripcionFlecha("Santiago", 34);

const saludar = (nombre) => {
  console.log(`Hola ${nombre}`);
};

saludar(`Rodri`);
saludar(`Mati`);
