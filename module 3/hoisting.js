// Las funciones y las variables en JavaScript pueden ser usadas antes de ser declaradas.
// JavaScript mueve las declaraciones a la parte superior del scope.
// Este proceso se llama Hoisting y solo puede ser aplicada con declaraciones VAR.
// El proceso de Hoisting sucede dentro de una función que crea su propio scope.

// Ejemplo 1
console.log(x); // return undefined
var x;

// hoisting no es valido con la declaración de variable con asignación
console.log(x); // return undefined
var x = 10;
console.log(x); // return 10


// Ejemplo 2
console.log(suma(10,10));
function suma(a, b){ return a + b ;};