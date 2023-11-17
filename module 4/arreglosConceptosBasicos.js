// Los arreglos pueden almacenar cualquier tipo de dato de primera Clase.
// La longitud del arreglo es igual a la cantidad de objetos que lleva dentro.
// Cada elemento en el arreglo ocupa una posición, conocida también como índice, la que nos acceder al elemento.
// Las posiciones inician a contar desde 0.
// La ultima posición del arreglo se puede definir haciendo la longitud del arreglo -1. 

// conceptos básicos
let calificacion = [10,9,8,7,6];

let arreglo = ["rails", "laravel", "1", {}, function(){}, [1,23]];

arreglo[0] = "luz";
console.log(arreglo[0]);

arreglo.push(333); // agrega un elemento
console.log(arreglo);

arreglo.unshift(333); // agrega el elemento al principio del arreglo

console.log(arreglo);
arreglo.pop(); // elimina el elemento final
let eliminado = arreglo.shift(); // elimina el elemento inicial
console.log(eliminado);

