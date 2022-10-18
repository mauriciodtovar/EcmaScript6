// Let y const resuelven varios problemas con var como el hoisting, variables globales, re-declaración y re-asignación de variables.

// En el tema del scope, se diferencian porque let y const tienen un scope de bloque y var no.

{
    var nameVar = "soy var"
    let nameLet = "soy let"
}
    
console.log(nameVar) // 'soy var'
console.log(nameLet) // ReferenceError: nameLet is not defined

// Objeto global
// En variables globales, let y constno guardan sus variables en el objeto global (window, global o globalThis), mientras que var si lo guarda.

var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

globalThis.nameVar   // 'soy var'
globalThis.nameLet   // undefined
globalThis.nameConst  // undefined

// Una variable declarada con var puede ser re-declarada y re-asignada.
// Una variable declarada con let puede ser re-asignada, pero no re-declarada.
// Una variable declarada con const no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

// Declaración de variables
var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

// Re-declaración de variables
var nameVar = "var soy" 
console.log(nameVar) // 'var soy'

let nameLet = "let soy" // SyntaxError: Identifier 'nameLet' has already been declared.

const nameConst = "const soy" //SyntaxError: Identifier 'nameConst' has already been declared.

// Re-asignación de variables
nameVar = "otro var"
console.log(nameVar) // 'otro var'

nameLet = "otro let"
console.log(nameVar) // otro let'

nameConst = "otro const" //TypeError: Assignment to constant variable.