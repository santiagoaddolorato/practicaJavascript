/* POO (Programación orientada a objetos) */

class Pelicula {
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id;
  }
  reproducir() {
    return `La peli ${this.nombre} esta ao vivo y su id es ${this.id}`;
  }
}

const peliculaClase = new Pelicula("Spiderman", 1);

console.log(peliculaClase);
console.log(peliculaClase.reproducir());

const peliculaClase2 = new Pelicula("LOTR", 2);

console.log(peliculaClase2);
console.log(peliculaClase2.reproducir());

/* Clase base o superclase */

class Animal {
  constructor(nombre, sonido) {
    this.nombre = nombre;
    this.sonido = sonido;
  }
  hablar() {
    console.log(`${this.nombre} dice ${this.sonido}`);
  }
}

/* Clase derivada o subclase  */
class Perro extends Animal {
  constructor(nombre, sonido, raza) {
    super(nombre, sonido); // llamada al constructor de super clase
    this.raza = raza;
  }
  /* método añadido en la subclase */
  ladrar() {
    console.log(`${this.nombre} ladra ${this.sonido}`);
  }
}
/* Crear una instancia de la subclase */
const roma = new Perro("Roma", "guau", "Pastor Alemán");
roma.hablar();
roma.ladrar();

/* Continuamos con pelicula */

class Serie extends Pelicula {
  constructor(nombre, id, capitulo) {
    super(nombre, id);
    this.capitulo = capitulo;
  }
  reproducirCapitulo() {
    return `Reproduciendo capitulo ${this.capitulo} de la serie ${this.nombre}`;
  }
}

const lost = new Serie("Lost", 3, 24);
console.log(lost);
console.log(lost.reproducirCapitulo());
console.log(lost.reproducir());

class Persona {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
    this.displayName = function () {
      return `${this.name} ${this.lastname}`;
    };
  }
}

const lionel = new Persona("Lionel", "Messi");
console.log(lionel.name);
lionel.name = "Leo";
console.log(lionel.name);

console.log(lionel.displayName());

lionel.saludar = function () {
  return `Hola! Soy  ${this.name} ${this.lastname}`;
};

console.log(lionel.saludar());

/* nuevo objeto Cristiano */

const cristiano = new Persona("Cristiano", "Ronaldo");

console.log(cristiano.name);
console.log(cristiano.displayName());

Persona.prototype.saludar = function () {
  return `Hola! Soy ${this.name} ${this.lastname}`;
};

console.log(cristiano.saludar());

/* Tipos */
console.log(typeof "Holis");
console.log(typeof 100);
console.log(typeof false);
console.log(typeof {});
console.log(typeof []);
console.log(typeof new Date());
console.log(new String("holis"));

/* Contexto de This */

const usuario = {
  name: "pepito",
};
const producto = {
  name: "Joystick",
};
function showInfo(pedidos, cuotas) {
  return `${this.name} tiene ${pedidos} pedidos en ${cuotas} cuotas sin interés`;
}

console.log(showInfo(5, 3));

/* Call */
console.log(showInfo.call(usuario, 5, 3));
console.log(showInfo.call(producto, 5, 3));

/* apply */
console.log(showInfo.apply(usuario, [6, 9]));

/* bind */
const nuevaFN = showInfo.bind(producto);

console.log(nuevaFN(20, 6));
