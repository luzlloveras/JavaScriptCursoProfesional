// filter se usa para eliminar elementos de un arreglo aplicando una condición
// si la condicion es verdadera, se conserva el elemento en el arreglo, si es false, se descarta.
let numeros = [8,3,4,10,5,3];

let nuevoArreglo = numeros.filter(function(numero){
    return numero % 2 == 0;
})

console.log(nuevoArreglo);

let lenguajes = ["ruby", "php", "javascript"];

let lenguajeArreglo = lenguajes.filter(function(lenguaje){
    return lenguaje !== "ruby";
})
console.log(lenguajeArreglo);