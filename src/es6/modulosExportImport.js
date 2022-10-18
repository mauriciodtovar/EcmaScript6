// Qué son las exportaciones de código
// Las exportaciones de código consisten en crear funciones o variables para utilizarlas en otros archivos mediante la palabra reservada export. Existen dos formas de exportar, antes de declarar la funcionalidad, o entre llaves {}.

// Por ejemplo, en el archivo math_function.js declaramos una función para sumar dos valores, el cual lo exportaremos.

//math_function.js
const add = (x,y) => {
    return x + y
}

export { add, otherFunction, ... }

// Importaciones de código
// Las importaciones de código consiste en usar funciones o variables de otros archivos mediante la palabra reservada import, que deberán estar siempre lo más arriba del archivo y utilizando el mismo nombre que el archivo original. Existen dos formas de exportar, antes de declarar la funcionalidad, o entre llaves {}.

// Por ejemplo, importamos la función add del archivo math_function.js para utilizarla en un archivo main.js.

// main.js
import { add, otherFunction } from './math_functions.js'

add(2,2) //4

// Para importar todas las funcionalidades de un archivo se utiliza un asterisco (*) y se puede cambiar el nombre para evitar la repetición de variables o funciones a través de la palabra reservada as.

// main.js
import * as myMathModule from './math_functions.js';

myMathModule.add(2,2) //4
myMathModule.otherFunction()
...

// Exportaciones por defecto
// Si solo UN valor será exportado, entonces se puede utilizar export default. De esta manera no es necesario las llaves {} al exportar e importar.

//math_function.js
export default function add (x,y){
    return x + y;
}

// Adicionalmente, no se puede usar export default antes de declaraciones const, let o var, pero puedes exportarlas al final.

//Erróneo
export default const add  = (x,y) => {
    return x + y;
}

//Correcto
const add  = (x,y) => {
    return x + y;
}

export default add

// Importaciones por defecto
// Si únicamente UN valor será impotado, entonces se puede utilizar cualquier nombre en la importación. De esta manera no es necesario las llaves {}.

// //Las siguientes importaciones son válidas
import  add  from './math_functions.js'
import  suma  from './math_functions.js'
import  cualquierNombre  from './math_functions.js'

// Sin embargo, es recomendable utilizar siempre el nombre de la función, para evitar confusiones.

// Combinar ambos tipos de exportaciones e importaciones
// Teniendo las consideraciones de importaciones y exportaciones, nombradas y por defecto, entonces podemos combinarlas en un mismo archivo.

// module.js
export const myExport = "hola"
function myFunction() { ... }

export default myFunction

// main.js
import myFunction, { myExport } from "/module.js"


