// variables declaradas utilizando la palabra reservada var se colocan en el alcance de función

function hola(nombre){
    if(nombre){
        var saludo = "hola " + nombre;
    }
    console.log(saludo);
}

hola("luzllo");

// las declaraciones con let y const alojan el recurso en el alcance de bloque
// y no en el alcance de función

function hola(nombre){
    if(nombre){
        let saludo = "hola " + nombre;
        console.log(saludo);
    }
    console.log(saludo);// acá da error porque saludo se declaro con let y solo existe dentro de la condicion if
}
hola(luz);

// let  y const -> solo disponibles dentro de su bloque
// var -> disponibles dentro de toda la función
