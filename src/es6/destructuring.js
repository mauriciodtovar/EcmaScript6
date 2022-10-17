// Desestructuración de objetos
// La desestructuración de objetos consiste en extraer las propiedades de un objeto en variables,
// utilizando el mismo nombre de la propiedad en el objeto con la siguiente sintaxis:

// Antes de ES6, necesitabas acceder al objeto con la notación punto o corchetes por cada propiedad 
// que se necesita y asignar ese valor a una variable diferente.

var usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

var nombre = usuario.nombre
var edad = usuario.edad
var plataforma = usuario["plataforma"]

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'

// es6 Con la desestructuración puedes realizar lo mismo, 
// pero en una sola línea, provocando que el código seas más legible y mantenible.

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre, edad, plataforma } = usuario

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'

//Cambiar el nombre de las variables con desestructuración
// Si no te agrada el nombre de la propiedad del objeto, puedes cambiarlo utilizando la siguiente sintaxis:

const objeto = { prop1: "valor1", prop2: "valor2", ... } 

const { prop1: newProp1, prop2: newProp2 } = objeto

// Ejemplo

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre: name, edad: age, plataforma: platform } = usuario

console.log(name)  // 'Andres' 
console.log(age)  // 23
console.log(platform)  // 'Platzi'

console.log(nombre)   // Uncaught ReferenceError: nombre is not defined

// Desestructuración en parámetros de una función
// Si envías un objeto como argumento en la invocación a la declaración de una función, puedes utilizar la desestructuración en los parámetros para obtener los valores directamente. Ten en cuenta que el nombre debe ser igual a la propiedad del objeto.

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

function mostrarDatos( { nombre, edad, plataforma } ){
    console.log(nombre, edad, plataforma) 
}

mostrarDatos(usuario) // 'Andres', 23, 'Platzi'

// Desestructuración de arrays
// La desestructuración de objetos consiste en extraer los valores de un objeto en variables, utilizando la misma posición del array con una sintaxis similar a la desestructuración de objetos.

const array = [ 1, 2, 3, 4, 5 ]

// Desestructuración
const [uno, dos, tres ] = array

console.log(uno) // 1
console.log(dos) // 2
console.log(tres) // 3

// Como los arrays son un tipo de objeto, puedes utilizar la desestructuración de objetos mediante el índice y utilizando un nombre para la variable.

const array = [ 1, 2, 3, 4, 5 ]

const {4: cinco} = array

console.log(cinco) // 5

