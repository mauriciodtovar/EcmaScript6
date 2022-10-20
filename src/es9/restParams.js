// Parámetros rest
// Los parámetros rest consisten en agrupar el residuo de elementos mediante la sintaxis de tres puntos (...) seguido de una variable que contendrá los elementos en un array.

// Esta característica sirve para crear funciones que acepten cualquier número de argumentos para agruparlos en un array.

function hola (primero, segundo, ...resto) {
    console.log(primero, segundo)  // 1 2
    console.log(resto) // [3,4,5,6]
  }
  
hola(1,2,3,4,5)

// También sirve para obtener los elementos restantes de un array u objeto usando desestructuración.

const objeto = {
    nombre: "Andres",
    age: 23,
    plataforma: "Platzi"
  }
  const array = [0,1,2,3,4,5]
  
  const {plataforma, ...usuario} = objeto
  const [cero, ...positivos] = array
  
  usuario // { nombre: 'Andres', age: 23 }
  positivos // [ 1, 2, 3, 4, 5 ]

// El parámetro rest siempre deberá estar en la última posición, caso contrario existirá un error de sintaxis.

// Diferencias entre el parámetro rest y el operador de propagación
// Aunque el parámetro rest y el operador de propagación utilicen la misma sintaxis, son diferentes. El parámetro rest agrupa el residuo de elementos y siempre debe estar en la última posición, mientras que el operador de propagación expande los elementos de un iterable en un array y no importa en que lugar esté situado.

const array2 = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

hola(...array2, "final") //<- Operador de propagación
//Lo mismo que hacer -> hola(1,2,3,4,5, "final")