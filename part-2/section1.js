console.log('hiiiii');

function Person(nombre, apellido, edad, profesion, hobbies) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.profesion = profesion;
  this.hobbies = hobbies;
}

Person.prototype.saludar = function () {
  return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
};

const personOne = new Person('Juan', 'Lopez', 36, 'Coder', 'Pescar');

console.log(personOne.saludar());

function Student(nombre, apellido, edad, promedio, cursos) {
  Person.call(this, nombre, apellido, edad);
  this.promedio = promedio;
  this.cursos = cursos;
}

//Se crea la Herencia/extension del prototipo base
Student.prototype = Object.create(Person.prototype);
//Le re asignamos el contructor para que aunque herede
//de Person, se identifique / instancie como Student
Student.prototype.constructor = Student;

Student.prototype.presentarExamen = function () {
  return console.log(
    `Hola, soy ${this.nombre} ${this.apellido} y estoy presentando un examen de ${this.cursos}`
  );
};

const studentOne = new Student('Mahi', 'Gallego', 24, 4.7, 'Javascript');
studentOne.presentarExamen();

//Sobrescribimos el método saludar heredado en Student para reflejar su rol

Student.prototype.saludar = function () {
  return `${Person.prototype.saludar.call(this)} y soy un estudiante`;
};

console.log(studentOne.saludar());

// console.log(studentOne.isPrototypeOf(Person.prototype));
console.log(Object.getPrototypeOf(studentOne));
