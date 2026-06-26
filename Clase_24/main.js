const productos = [
  {
    categoria: "Computacion",
    condicion: "Nuevo",
    cuotas: false,
    envioInmediato: true,
    envioGratuito: true,
    id: 1,
    marca: "Redragon",
    nombre: "Teclado gamer Shiva K512",
    precio: 6500,
    subcategoria: "Perifericos",
    ubicacion: "GBA",
  },
  {
    categoria: "Computacion",
    condicion: "Usado",
    cuotas: false,
    envioInmediato: false,
    envioGratuito: false,
    id: 2,
    marca: "Asus",
    nombre: "Mother M2n68-am",
    precio: 7000,
    subcategoria: "Componentes",
    ubicacion: "Capital Federal",
  },
  {
    categoria: "Computacion",
    condicion: "Nuevo",
    cuotas: true,
    envioInmediato: true,
    envioGratuito: true,
    id: 3,
    marca: "Kingston",
    nombre: "Memoria RAM Fury Beast 8GB",
    precio: 8500,
    subcategoria: "Componentes",
    ubicacion: "Cordoba",
  },
  {
    categoria: "Computacion",
    condicion: "Nuevo",
    cuotas: false,
    envioInmediato: true,
    envioGratuito: true,
    id: 4,
    marca: "Logitech",
    nombre: "Auriculares gamer inalámbricos G733",
    precio: 29000,
    subcategoria: "Perifericos",
    ubicacion: "GBA",
  },
  {
    categoria: "Computacion",
    condicion: "Nuevo",
    cuotas: true,
    envioInmediato: false,
    envioGratuito: true,
    id: 5,
    marca: "Redragon",
    nombre: "Auriculares gamer Zeus X",
    precio: 13000,
    subcategoria: "Perifericos",
    ubicacion: "Ushuaia",
  },
  {
    categoria: "Computacion",
    condicion: "Nuevo",
    cuotas: true,
    envioInmediato: false,
    envioGratuito: true,
    id: 5,
    marca: "Redragon",
    nombre: "Auriculares gamer Zeus X",
    precio: 13000,
    subcategoria: "Perifericos",
    ubicacion: "Ushuaia",
  },
  {
    categoria: "Celulares",
    condicion: "Nuevo",
    cuotas: true,
    envioInmediato: true,
    envioGratuito: true,
    id: 6,
    marca: "Motorola",
    nombre: "Motorola Edge 30 128 GB",
    precio: 90000,
    subcategoria: "Equipos",
    ubicacion: "Capital Federal",
  },
  {
    categoria: "Celulares",
    condicion: "Usado",
    cuotas: false,
    envioInmediato: false,
    envioGratuito: false,
    id: 7,
    marca: "Nokia",
    nombre: "Nokia 1100",
    precio: 1500,
    subcategoria: "Equipos",
    ubicacion: "GBA",
  },
  {
    categoria: "Celulares",
    condicion: "Nuevo",
    cuotas: false,
    envioInmediato: true,
    envioGratuito: true,
    id: 8,
    marca: "Samsung",
    nombre: "Samsung Galaxy A51 128GB",
    precio: 70000,
    subcategoria: "Equipos",
    ubicacion: "GBA",
  },
  {
    categoria: "Celulares",
    condicion: "Nuevo",
    cuotas: false,
    envioInmediato: true,
    envioGratuito: true,
    id: 9,
    marca: "Samsung",
    nombre: "Samsung Galaxy A12 64GB",
    precio: 4000,
    subcategoria: "Equipos",
    ubicacion: "Capital Federal",
  },
  {
    categoria: "Celulares",
    condicion: "Usado",
    cuotas: false,
    envioInmediato: false,
    envioGratuito: false,
    id: 10,
    marca: "Motorola",
    nombre: "Cargador Motorola",
    precio: 6000,
    subcategoria: "Cargadores",
    ubicacion: "Bariloche",
  },
];

// 1. Cambiar la condición de todos los productos a "usado".

const productosUsados = productos.map((producto) => {
  return { ...producto, condicion: "Usado" };
});
console.log(productosUsados);

// 2. Imprimir en consola el nombre y precio de todos los productos que
//tengan envío inmediato y envío gratuito. El mensaje tiene que ser user
//Friendly, es decir, que el usuario entienda que es lo que se está
//mostrando en consola.

const productosConEnvioInmediatoYGratuito = productos.filter((producto) => {
  return producto.envioGratuito && producto.envioInmediato;
});

productosConEnvioInmediatoYGratuito.forEach((producto) => {
  console.log(
    `El producto ${producto.nombre}, que vale $${producto.precio}, tiene envio inmediato y gratuito`,
  );
});

//3. Filtrar productos por categoria y subcategoria . Traer solo los
//productos de la categoria Celulares y de la subcategoria Equipos.

const filtrarPorCategoriaYSubcategoria = (categoria, subcategoria) => {
  const productosFiltrados = productos.filter((producto) => {
    return (
      producto.categoria.toLowerCase().trim() ===
        categoria.toLowerCase().trim() &&
      producto.subcategoria.toLowerCase().trim() ===
        subcategoria.toLowerCase().trim()
    );
  });
  return productosFiltrados;
};
console.log(filtrarPorCategoriaYSubcategoria("  celulares", "EquiPos"));

// 4. Ordenar productos por precio de mayor a menor.

const ordenarPorPrecioMayorAMenor = () => {
  const productosOrdenados = productos.sort((a, b) => {
    return b.precio - a.precio;
  });
  return productosOrdenados;
};
console.log(ordenarPorPrecioMayorAMenor());

/* 5. Ordenar productos por nombre de la A a la Z. */

const ordenarEnOrdenAlfabetico = () => {
  const productosOrdenados = productos.sort((a, b) => {
    if (a.nombre < b.nombre) {
      return -1;
    }
    if (a.nombre > b.nombre) {
      return 1;
    }
    return 0;
  });
  return productosOrdenados;
};
console.log(ordenarEnOrdenAlfabetico());
