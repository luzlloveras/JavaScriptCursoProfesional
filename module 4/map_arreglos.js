// map() : bucle para avanzar de un elemento a otro en una lista, manteniendo el orden y la posición de cada elemento.

let numeros = [2,3,5,1,34];

let cuadrados = numeros.map(function(numero){
    return numero * numero;
})

console.log(numeros);
console.log(cuadrados);

let numbers = ["10","5","4","3"];

console.log(numbers);

numbers = numbers.map(function(numString){
    return parseInt(numString);
})

console.log(numbers);