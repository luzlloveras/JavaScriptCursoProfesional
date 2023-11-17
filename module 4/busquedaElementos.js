let arreglo = ["ruby", "python", "java"];

// indexOf : devuelve la posición del elemento buscado, si no existe el elemento devuelve -1
console.log(arreglo.indexOf("ruby"));

// includes: retorna true si el elemento se encuentra en el arreglo, sino retorna false
console.log(arreglo.includes("ruby"));

// find: utiliza una funcion de prueba para buscar el elemento, retornando el elemento encontrado

let respuesta = arreglo.find(function(elemento, posicion, arreglo){
    return elemento === "ruby";
})
console.log(respuesta);

// findIndex: buscar la posicion de un elemento y la retorna
let indexBuscado = arreglo.findIndex(function(elemento, posicion, arreglo){
    return elemento === "ruby";
})
console.log(indexBuscado);

// some: si solo queres saber si el elemento existe, retorna true si existe
let existeElemento = arreglo.some(function(elemento, posicion, arreglo){
    return elemento === "java";
})
console.log(existeElemento);