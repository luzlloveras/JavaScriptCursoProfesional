// OBJETO DE PRIMERA CLASE:
// Debe ser posible retornarlo
// Debe ser posible asignarlo a una variable
// Debe ser posible enviarlo como argumento

// Ejemplo 1: el numero 2 es un objeto de primera clase porque cumple con los requisitos descriptos arriba
return 2;
let number = 2;
hola(2);

// En JavaScript los numeros, las cadenas, los arreglos, los booleanos, las funciones y los objetos son considerados objetos de primera clase.

// Ejemplo 2: 
function executor(funcion){
    funcion();
}

function decirHola(){
    console.log("hola");
}

executor(decirHola);

// Una funcion puede retornar otra funcion
function build(){
    function a(){console.log("hola")}
    return a;
}

let f = build();
f();
// comment: generalmente cuando trabajamos con funciones con objetos de primera clase usamos expresiones de función, y no declaración de función.