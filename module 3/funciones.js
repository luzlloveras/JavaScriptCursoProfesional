function saludar(){
    console.log("Esta es una declaracion de funcion");
}

let func = function saludo(){
    console.log("Esta es una expresion de funcion");
}

function cuadrado(numero){
    return numero * numero;
}

let cuadradoDeDos = cuadrado(2);


saludar();
func();
console.log(cuadradoDeDos);

// Notas: 
// Puedo usar declaraciones de función antes de declararlas.
// Las expresiones de función deben iniciarlizarse antes de usarse.