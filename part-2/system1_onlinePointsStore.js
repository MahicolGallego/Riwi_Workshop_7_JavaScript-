//Entidad base/principal Persona -----------------------------------------------------

function Persona(nombre, email, clave) {
  this.nombre = nombre;
  this.email = email;
  this.clave = clave;
}

//Extension/Herencias de Persona

//Usuario ----------------------------------------------------------------
function Usuario(nombre, email, clave, puntosAcumulados) {
  Persona.call(this, nombre, email, clave);
  this.puntosAcumulados = puntosAcumulados;
}

Usuario.prototype = Object.create(Persona.prototype);

Usuario.prototype.acumularPuntos = function () {
  return console.log('Acumulando puntos');
};

Usuario.prototype.canjearPuntos = function () {
  return console.log('Canjeando puntos');
};

//Ejemplo/Prueba

const usuarioUno = new Usuario('Mahicol', '@123', 'pss123', 1000);

usuarioUno.canjearPuntos();

//Administrador ----------------------------------------------------------------
function Administrador(nombre, email, clave, tokenKey) {
  Persona.call(this, nombre, email, clave);
  this.tokenKey = tokenKey;

  this.agregarProducto = () => {
    return console.log('Agregando producto');
  };

  this.modificarProducto = () => {
    return console.log('Modificando producto');
  };

  this.eliminarProducto = () => {
    return console.log('Eliminando producto');
  };
}

Administrador.prototype = new Persona();

//Ejemplo/Prueba

const adminUno = new Administrador('Mahicol', '@123', 'pss123', 1234567);

adminUno.agregarProducto();

//Entidad base/principal Producto -----------------------------------------------------

function Producto(nombre, puntosNecesarios, cantidadDisponible, stock) {
  this.nombre = nombre;
  this.puntosNecesarios = puntosNecesarios;
  this.cantidadDisponible = cantidadDisponible;
  this.stock = stock;
}

Producto.prototype.obtenerInfo = function () {
  return `Nombre: ${this.nombre}, puntos necesarios: ${this.puntosNecesarios}, cantidad disponible: ${this.cantidadDisponible}, stock: ${this.stock}`;
};

//Extension/Herencias de Producto

//Producto fisico

function ProductoFisico(
  nombre,
  puntosNecesarios,
  cantidadDisponible,
  stock,
  precio
) {
  Producto.call(this, nombre, puntosNecesarios, cantidadDisponible, stock);
  this.precio = precio;

  this.obtenerInfo = function () {
    return console.log(
      `${Producto.prototype.obtenerInfo.call(
        this
      )}, Como soy producto fisico tambien tengo un precio: $${this.precio}`
    );
  };

  this.actualizarStock = () => {
    return console.log('Actualizando stock');
  };

  this.enviarProducto = function () {
    return console.log('Enviando producto');
  };
}

ProductoFisico.prototype = new Producto();

//Ejemplo/Prueba

const productoUno = new ProductoFisico('Camiseta', 100, 10, 100, 20000);

productoUno.obtenerInfo();

//Producto virtual

function ProductoVirtual(
  nombre,
  puntosNecesarios,
  cantidadDisponible,
  stock,
  url
) {
  Producto.call(this, nombre, puntosNecesarios, cantidadDisponible, stock);
  this.url = url;
}

ProductoVirtual.prototype = Object.create(Producto.prototype);
ProductoVirtual.prototype.obtenerInfo = function () {
  return console.log(
    `${Producto.prototype.obtenerInfo.call(
      this
    )} y Como soy producto virtual tambien tengo una url: $${this.url}`
  );
};

ProductoVirtual.prototype.descargar = () => {
  return console.log('Descargando producto');
};

ProductoVirtual.prototype.obtenerProductoEmail = function () {
  return console.log('Enviando Producto por email');
};

//Ejemplo/Prueba

const productoVirtualUno = new ProductoVirtual(
  'Book.pdf',
  100,
  10,
  100,
  'https//: WWWW.'
);

productoVirtualUno.obtenerInfo();

//Entidad Categoria de producto -------------------------------------------------------------

function CategoriaProducto(nombre, descripcion) {
  this.nombre = nombre;
  this.descripcion = descripcion;

  this.listarProductos = () => {
    return console.log('Listando productos');
  };
}

//Entidad Actividad -------------------------------------------------------------

function Actividad(tipo, puntosOtorgados) {
  this.tipo = tipo;
  this.puntosOtorgados = puntosOtorgados;
}

Actividad.prototype.completarActividad = function () {
  return console.log('Completando actividad');
};

//Entidad orden de canje  -------------------------------------------------------------

function OrdenCanje(usuario, producto, fecha) {
  this.usuario = usuario;
  this.producto = producto;
  this.fecha = fecha;

  this.confirmarOrden = function () {
    return console.log('Confirmando orden');
  };

  this.cancelarOrden = () => {
    return console.log('Cancelando orden');
  };
}
