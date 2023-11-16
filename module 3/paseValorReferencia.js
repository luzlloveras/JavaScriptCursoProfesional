// pase por referencia: el parámetro apunta a la misma dirección que el argumento original. Cuando modificamos el valor, se modifica el valor en el argumento original.
// pase por valor: se envia una copia del argumento original. Esta copia está en una dirección distinta y el parámetro está apuntando a una dirección diferente. Cualquier modificación al parámetro no afecta al valor original.

// let edad = 20;

// // pase por valor
// function modificador(edad){
//     edad = 25;
//     console.log("Dentro de la funcion: "+edad);
// }

// console.log(edad);
// modificador(edad);
// console.log(edad);

// pase por referencia
let edades =[20];
function modificador(edades){
    edades[0] = 25;
    console.log("Dentro de la funcion: "+edades);
}

console.log(edades);
modificador(edades);
console.log(edades);