// iterable: es cualquier objeto de javascript que puede ser separado en elementos.
// Spread syntax (...) : expande elementos
// Rest parameters: los fusiona

let arreglo = [1,2,3];
let nombre = ["Luz"];

console.log(arreglo);
console.log(...arreglo);
console.log(nombre);
console.log(...nombre);

// Rests parameters (...)
function promedio(alumno,...notas){
    console.log(alumno,notas);
}
promedio("Luz",9,19,8,9,10,7);