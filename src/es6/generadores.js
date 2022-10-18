// Generadores
// Los generadores son funciones que devuelven solamente valor en cada invocación.

// Su sintaxis es la siguiente:

// 1 La palabra reservada function* (con el asterisco al final).
// 2 La palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
// 3 Crear una variable a partir de la función generadora.
// 4 El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado.

// Si el generador se lo invoca y ha retornado todos sus valores de yield, entonces devolverá el objeto con las propiedades value con undefined y un done con true.

// Declaración
function* nombre(parámetros){
    yield (primer valor retornado)
    yield (segundo valor retornado)
    ...
    yield (último valor retornado)

}

//Crear el generador
const generador = nombre(argumentos)

// Invocacioens
generador.next().value //primer valor retornado
generador.next().value //segundo valor retornado
...
generador.next().value //último valor retornado

// Por ejemplo, creemos un generador para retornar tres valores.

function* generator(){
    yield 1
    yield 2
    yield 3
}

const generador = generator()

generador.next().value //1
generador.next().value //2
generador.next().value //3
generador.next() // {value: undefined, done: true}

