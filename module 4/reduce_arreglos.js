// reduce nos permite aplicar una operacion de reduccion para un arreglo y asi reducirlo a un solo valor.

let numeros = [1,2,3,4,5];

let suma = numeros.reduce(function(acumulador, numero){
    return acumulador + numero;
},0)

console.log(suma);

let nombres = ["Luz", "Toby"];

let html = nombres.reduce(function(acumulador, nombre){
    return acumulador + "<li>" + nombre + "</li>"
}, "");

console.log(html);