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

// 1. Imprimir en consola todos los productos que tengan envío inmediato.
//El mensaje tiene que ser user Friendly, es decir, que el usuario
//entienda que es lo que se está mostrando en consola.

const productoConEnvioInmediato = productos.filter((producto) => {
  return producto.envioInmediato;
});

productoConEnvioInmediato.forEach((producto) => {
  console.log(`El producto ${producto.nombre} tiene envío inmediato`);
});

// 2.Crear un nuevo array con los mismos productos pero con su precio
//duplicado. Imprimir en consola el nombre y precio de cada producto.

const productoConPrecioDuplicado = productos.map((producto) => {
  return { ...producto, precio: producto.precio * 2 };
});

productoConPrecioDuplicado.forEach((producto) => {
  console.log(`El nuevo precio de ${producto.nombre} es de ${producto.precio}`);
});

// 3.imprimir en consola si existe algun producto cuyo precio sea mayor a
//un precio dado. El mensaje tiene que ser user Friendly, es decir, que
//el usuario entienda que es lo que se está mostrando en consola.

const hayProductosConPrecioMayorA = (precio) => {
  return productos.some((producto) => {
    return producto.precio > precio;
  })
    ? console.log(`Hay productos con precio mayor a $${precio}`)
    : console.log(`No hay productos con un precio mayor a $${precio}`);
};

hayProductosConPrecioMayorA(20000);

// 4.Filtrar productos por precio.

const filtrarPorPrecioMenorA = (precio) => {
  const productosFiltrados = productos.filter((producto) => {
    return producto.precio < precio;
  });
  productosFiltrados.length > 0
    ? console.log(`Hay productos con precio menor a $${precio}`)
    : console.log(`No hay productos con un precio menor a $${precio}`);
};
console.log(filtrarPorPrecioMenorA(200));

const filtrarPorPrecioMayorA = (precio) => {
  const productosFiltrados = productos.filter((producto) => {
    return producto.precio > precio;
  });
  productosFiltrados.length > 0
    ? console.log(`Hay productos con precio mayor a $${precio}`)
    : console.log(`No hay productos con un precio mayor a $${precio}`);
};
console.log(filtrarPorPrecioMayorA(2000000));

const filtrarPorPrecioEntre = (precioMin, precioMax) => {
  const productosFiltrados = productos.filter((producto) => {
    return producto.precio > precioMin && producto.precio < precioMax;
  });
  productosFiltrados.length > 0
    ? console.log(
        `Hay productos con precios mayores a $${precioMin} y menores a $${precioMax}`,
      )
    : console.log(
        `No hay productos con precios mayores a $${precioMin} y menores a $${precioMax}`,
      );
};
console.log(filtrarPorPrecioEntre(200000, 7000));
