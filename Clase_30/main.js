/* JSON */
/* Javascript Object Notation */

let objetoModelo = {
  nombre: "Rodrigo",
  edad: 32,
  tecnologias: ["HTML", "CSS", "Javascript", "React"],
  grabado: true,
};
console.log("Objeto modelo");
console.log(objetoModelo);

let objetoEnJSON = JSON.stringify(objetoModelo);
console.log("Objeto en JSON");
console.log(objetoEnJSON);

let objetoParseado = JSON.parse(objetoEnJSON);
console.log("Objeto parseado");
console.log(objetoParseado);
