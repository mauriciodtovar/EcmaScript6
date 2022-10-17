// Operador de propagación
// El operador de propagación (spread operator), como su nombre lo dice, consiste en propagar los elementos de un iterable, ya sea un array o stringm utilizando tres puntos (...) dentro de un array.

// Para strings
const array = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otherArray = [ ...array]   //[ 'H', 'o', 'l', 'a' ]

//Copiar arrays utilizando el operador de propagación
// Si quieres realizar una copia de una array, deberás tener cuidado de la referencia en memoria. Los arrays se guardan en una referencia en memoria, al crear una copia, la copia tendrá la misma referencia que el original, por lo que si cambias algo en la copia, también lo harás en el original.

const originalArray = [1,2,3,4,5]
const copyArray = originalArray
copyArray[0] = 0

originalArray // [0,2,3,4,5]
originalArray === copyArray  // true

// Para evitar esto, utiliza el operador de propagación para crear una copia del array que utilice una refencia en memoria diferente al original.

const originalArray = [1,2,3,4,5]
const copyArray = [...originalArray]
copyArray[0] = 0

originalArray // [1,2,3,4,5]
copyArray // [0,2,3,4,5]
originalArray === copyArray  // false

// Unir arrays y añadir elementos con el operador de propagación
// Para unir dos arrays con el operador de propagación, simplemente debes separarlos por comas en un array.

const array1 = [1,2,3]
const number = 4
const array2 = [5,6,7]

const otherArray = [ ...array1, number, ...array2 ]

otherArray // [1,2,3,4,5,6,7]