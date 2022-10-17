// Default Params

// Tal como puedes ver en el siguiente código, la función sumar recibe dos parámetros y retorna el valor total. 
// Sin embargo, si alguien no decide poner alguno o todos los parámetros necesarios, pues que el programa no funcionará correctamente.

function sumar(number1, number2){
    return number1 + number2
}
  
sumar(3,4) //7
sumar(3)    //NaN  
sumar()      // NaN

// Antes de ES6, se debía establecer una variable y utilizar el operador OR (||) con el valor por defecto necesario. 
// El caracter guion bajo (_) lo utilizo para diferenciar el parámetro de la función de la variable declarada dentro.

function sumar(number1, number2){
    var _number1 = number1 || 0
    var _number2 = number2 || 0
    
    return _number1 + _number2
}
  
sumar(3,4) // 7
sumar(3)    // 3
sumar()      // 0

// Con los parámetros por defectos añadidos en ES6, eliminamos las declaraciones para mejorar la legibilidad 
// y el mantenimiento del código de la siguiente manera:

function sumar(number1 = 0, number2 = 0){
    return number1 + number2
}
  
sumar(3,4) // 7
sumar(3)    // 3
sumar()      // 0