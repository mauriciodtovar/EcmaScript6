// Antes de ES6, si querías crear una cadena larga o un mensaje, debías utilizar la concatenación.

var nombre = "Andres"
var edad = 23
var mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años."

console.log(mensaje) // 'Mi nombre es Andres y tengo 23 años.'

//Con las plantillas literales añadidas en ES6, emplea el caracter ( ` ), que no es una comilla simple ( ’ ), 
// para envolver el mensaje e incluir las variables con la sintaxis ${variable}.

let nombre = "Andres"
let edad = 23

let mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`

console.log(mensaje) // 'Mi nombre es Andres y tengo 23 años.'