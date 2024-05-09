//Entidad base/principal Restaurante-----------------------------------------------------

function Restaurante(nombre) {
  this.nombre = nombre;
}

Restaurante.prototype.agregarPlato = function () {
  return 'Agregando plato';
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
  'Kest',
  'Kra 89893*****',
  'Este es mi menu fisico'
);

console.log(restauranteFisicoUno.agregarPlato());
console.log(restauranteFisicoUno.actualizarPlato());
console.log(restauranteFisicoUno.eliminarPlato());
