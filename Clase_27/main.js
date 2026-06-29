/* DOM I */

const h1 = document.querySelector("h1");
console.dir(h1);
console.log(h1.innerHTML);

h1.innerHTML = "Estoy siendo cambiado desde JS";

const p = document.querySelector("#section_p");
console.dir(p);

p.innerHTML = "Yo tambien estoy siendo <b> cambiado </b> por JS";

const segundoSection = document.querySelector("#segundoSection");
console.log(segundoSection);

segundoSection.innerHTML = `
 <h2 class= Section_h2 >"esto es un h2 creado desde JS"</h2>
 <p> Esto es un p creador desde js </p>`;
