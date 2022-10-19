// Obtener los pares de valor de un objeto en un array
// Object.entries() devuelve un array con las entries en forma [propiedad, valor] del objeto enviado como argumento.

const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.entries(usuario) 
/* 
[
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
]  
*/

// Obtener las propiedades de un objeto en un array
// Object.keys() devuelve un array con las propiedades (keys) del objeto enviado como argumento.

const usuario2 = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.keys(usuario2) 
// [ 'name', 'email', 'age' ]

// Obtener los valores de un objeto en un array
// Object.values() devuelve un array con los valores de cada propiedad del objeto enviado como argumento.

const usuario3 = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23
}

Object.values(usuario3) 
// [ 'Andres', 'andres@correo.com', 23 ]