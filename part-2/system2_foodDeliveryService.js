//Entidad base/principal Restaurante-----------------------------------------------------

function Restaurante(nombre) {
  this.nombre = nombre;
}

Restaurante.prototype.agregarPlato = function () {
  return "Agregando plato";
};

Restaurante.prototype.actualizarPlato = function () {
  return `Actualizando plato`;
};

Restaurante.prototype.eliminarPlato = function () {
  return `Eliminando Plato`;
};

//Extension/Herencias de Restaurante

//Restaurante fisico
function RestauranteFisico(nombre, direccion, menuFisico) {
  Restaurante.call(this, nombre);
  this.direccion = direccion;
  this.menuFisico = menuFisico;
}

RestauranteFisico.prototype = Object.create(Restaurante.prototype);
RestauranteFisico.prototype.constructor = RestauranteFisico;
RestauranteFisico.prototype.agregarPlato = function () {
  return `${Restaurante.prototype.agregarPlato.call(
    this
  )}, desde el producto fisico`;
};

RestauranteFisico.prototype.actualizarPlato = function () {
  return `${Restaurante.prototype.actualizarPlato.call(
    this
  )}, desde el producto fisico`;
};

RestauranteFisico.prototype.eliminarPlato = function () {
  return `${Restaurante.prototype.eliminarPlato.call(
    this
  )} desde el producto fisico`;
};

// Ejemplo/Prueba

const restauranteFisicoUno = new RestauranteFisico(
  "Kest",
  "Kra 89893*****",
  "Este es mi menu fisico"
);

console.log(restauranteFisicoUno.agregarPlato());
console.log(restauranteFisicoUno.actualizarPlato());
console.log(restauranteFisicoUno.eliminarPlato());

//Restaurante digital
function RestauranteDigital(nombre, menuQr) {
  Restaurante.call(this, nombre);
  this.menuFisico = menuQr;
}

RestauranteDigital.prototype = Object.create(Restaurante.prototype);
RestauranteDigital.prototype.constructor = RestauranteDigital;
RestauranteDigital.prototype.agregarPlato = function () {
  return `${Restaurante.prototype.agregarPlato.call(
    this
  )}, desde el producto digital`;
};

RestauranteDigital.prototype.actualizarPlato = function () {
  return `${Restaurante.prototype.actualizarPlato.call(
    this
  )}, desde el producto digital`;
};

RestauranteDigital.prototype.eliminarPlato = function () {
  return `${Restaurante.prototype.eliminarPlato.call(
    this
  )} desde el producto digital`;
};

// Ejemplo/Prueba

const restauranteDigitalUno = new RestauranteDigital(
  "Kest",
  "Kra 89893*****",
  "Este es mi menu fisico"
);

console.log(restauranteDigitalUno.agregarPlato());
console.log(restauranteDigitalUno.actualizarPlato());
console.log(restauranteDigitalUno.eliminarPlato());

//Entidad base/principal Persona-----------------------------------------------------

function Persona(nombre, email, clave) {
  this.nombre = nombre;
  this.email = email;
  this.clave = clave;
}

Persona.prototype.autenticacion = function () {
  return console.log("Autenticando");
};

//Extension/Herencias de Persona

//cliente----------------------------------------------------------------

function Cliente(nombre, email, clave, telefono) {
  Persona.call(this, nombre, email, clave);
  this.telefono = telefono;

  this.realizarPedido = function () {
    return console.log("Realizando pedido, desde cliente");
  };

  this.verHistorialPedidos = () => {
    return console.log("Ver historial pedidos, desde cliente");
  };

  this.autenticacion = function () {
    return console.log("Autenticación, desde el cliente");
  };
}

Cliente.prototype = Object.create(Persona.prototype);

// Ejemplo/Prueba

const clienteUno = new Cliente("Mahicol", "@123", "pss123", 1234567);

console.log(clienteUno.autenticacion());
console.log(clienteUno.realizarPedido());
console.log(clienteUno.verHistorialPedidos());

//Repatidor----------------------------------------------------------------

function Repartidor(nombre, email, clave, vehiculo, disponibilidad) {
  Persona.call(this, nombre, email, clave);
  this.vehiculo = vehiculo;
  this.disponibilidad = disponibilidad;
}

Repartidor.prototype = new Persona();

Repartidor.prototype.aceptarEnvio = function () {
  return console.log("Aceptando envio, desde repartidor");
};

Repartidor.prototype.actualizarUbicacion = () => {
  return console.log("Actualizando ubicacion, desde repartidor");
};

Repartidor.prototype.completarEntrega = function () {
  return console.log("Completando entrega, desde repartidor");
};

Repartidor.prototype.actualizarEstado = () => {
  return console.log("Actualizando estado, desde repartidor");
};

Repartidor.prototype.autenticacion = function () {
  return console.log("Autenticación, desde el repartidor");
};

// Ejemplo/Prueba

const repartidorUno = new Repartidor(
  "Esneider",
  "@123",
  "pss123",
  "Mazda",
  true
);

repartidorUno.aceptarEnvio();
repartidorUno.actualizarUbicacion();
repartidorUno.completarEntrega();
repartidorUno.actualizarEstado();
repartidorUno.autenticacion();

//Entidad base/principal Menu-----------------------------------------------------

function Menu(plato) {
  this.plato = plato;
}

//Menu Qr----------------------------------------------------------------

function MenuQr(plato, url) {
  Menu.call(this, plato);
  this.url = url;
}

MenuQr.prototype = Object.create(Menu.prototype);
MenuQr.prototype.constructor = MenuQr;

MenuQr.prototype.generarQr = () => {
  return console.log("Generando Menu Qr");
};

//Ejemplo/Prueba

const menuQrUno = new MenuQr("Pizza", "www.kest.com");

console.log(menuQrUno.generarQr());

console.log(MenuQr.prototype instanceof Menu);
console.log(Menu.prototype.isPrototypeOf(MenuQr.prototype));
console.log(Object.getPrototypeOf(MenuQr.prototype) === Menu.prototype);

//Menu Fisico----------------------------------------------------------------

function MenuFisico(plato) {
  Menu.call(this, plato);
  this.impresion = function () {
    return console.log("Imprimiendo menu");
  };
}

MenuFisico.prototype = new Menu();

// Ejemplo/Prueba

const menuFisicoUno = new MenuFisico("Hamburguesa");

menuFisicoUno.impresion();

//Entidad Plato-----------------------------------------------------

function Plato(nombre, precio, listaIngredientes) {
  this.nombre = nombre;
  this.precio = precio;
  this.listaIngredientes = listaIngredientes;
}

//Entidad Pedido-----------------------------------------------------

function Pedido(
  cliente,
  restaurante,
  detallesDePedido,
  estadoPedido,
  direccion
) {
  this.cliente = cliente;
  this.restaurante = restaurante;
  this.detallesDePedido = detallesDePedido;
  this.estadoPedido = estadoPedido;
  this.direccion = direccion;
}
