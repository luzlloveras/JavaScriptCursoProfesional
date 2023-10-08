// variables declaradas utilizando la palabra reservada var se colocan en el alcance de función

function hola(nombre){
    if(nombre){
        var saludo = "hola " + nombre;
    }
    console.log(saludo);
}

hola("luzllo");