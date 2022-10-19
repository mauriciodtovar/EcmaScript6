// Método includes
// El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

// Este método recibe dos argumentos:
// - El elemento a comparar.
// - El índice inicial desde donde comparar hasta el último elemento.

// Ejemplos utilizando el método includes
// El método includes se utiliza para arrays y strings. El método es sensible a mayúsculas, minúsculas y espacios.

//Utilizando strings
const saludo = "Hola mundo"

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true

// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true