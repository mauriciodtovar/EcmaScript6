// consisten en expandir las propiedades de un objeto utilizando el spread operator. Sirve para crear nuevos objetos a partir de otros.

const objeto = {
    nombre: "Andres",
    age: 23,
}
  
const usuario = {
    ...objeto,
    plataforma: "Platzi"
}

// Crear copias de objetos utilizando las propiedades de propagación
// Semenjante a crear copias de arrays utilizando el operador de propagación, se puede realizar copias de objetos en un solo nivel mediante las propiedades de propagación. De esta manera el segundo objeto tendrá una referencia en memoria diferente al original.

const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}

objetoReferencia === objetoOriginal // true
objetoOriginal === objetoCopia // false