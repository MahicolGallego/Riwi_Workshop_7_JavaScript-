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
  return console.log("Acumulando puntos");
};

Usuario.prototype.canjearPuntos = function () {
  return console.log("Canjeando puntos");
};

//Ejemplo/Prueba

const usuarioUno = new Usuario("Mahicol", "@123", "pss123", 1000);

usuarioUno.canjearPuntos();

//Administrador ----------------------------------------------------------------
function Administrador(nombre, email, clave, tokenKey) {
  Persona.call(this, nombre, email, clave);
  this.tokenKey = tokenKey;

  this.agregarProducto = () => {
    return console.log("Agregando producto");
  };

  this.modificarProducto = () => {
    return console.log("Modificando producto");
  };

  this.eliminarProducto = () => {
    return console.log("Eliminando producto");
  };
}

Administrador.prototype = new Persona();

//Ejemplo/Prueba

const adminUno = new Administrador("Mahicol", "@123", "pss123", 1234567);

adminUno.agregarProducto();

//Entidad base/principal Producto -----------------------------------------------------
//Extension/Herencias de Producto

//Entidad Categoria de producto -------------------------------------------------------------

function CategoriaProducto(nombre, descripcion) {
  this.nombre = nombre;
  this.descripcion = descripcion;

  this.listarProductos = () => {
    return console.log("Listando productos");
  };
}

//Entidad Actividad -------------------------------------------------------------

function Actividad(tipo, puntosOtorgados) {
  this.tipo = tipo;
  this.puntosOtorgados = puntosOtorgados;
}

Actividad.prototype.completarActividad = function () {
  return console.log("Complete actividad");
};
