// Antes de ES6, para crear un objeto a partir de variables consistía de la siguiente manera:

const nombre = "Andres"
const edad = 23

const objeto = {
    nombre: nombre, 
    edad: edad
 }

objeto // { nombre: 'Andres', edad: 23 }

// Con los parámetros en objetos puedes obviar la repetición de nombres, JavaScript creará la propiedad a partir del nombre de la variable con su respectivo valor.

const nombre = "Andres"
const edad = 23

const objeto = {nombre, edad}

objeto // { nombre: 'Andres', edad: 23 }