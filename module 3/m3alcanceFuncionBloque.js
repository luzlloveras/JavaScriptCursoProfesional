// alcande de función y alcande de bloque

//******************* Declaración con VAR en bloque **********************/
function hola(nombre){
    if(nombre){
        var saludo = "hola " + nombre;
    }
    console.log(saludo);
}

hola("luz"); // sale en consola

// vive por dentro y fuera del bloque, mientras esté dentro de la función.
//******************* Declaración con LET en bloque **********************/
function hola(nombre){
    if(nombre){
        let saludo = "hola " + nombre;
    }
    console.log(saludo);
}

function hola(nombre){
    if(nombre){
        const saludo = "hola " + nombre;
    }
    console.log(saludo);
}

hola("luz"); // no sale en consola

// Esto es porque lo declarado con let solo vive dentro del bloque, en este caso el if.
// Por fuera del if, es fuera del bloque, por ende no vive.
// Pasa lo mismo al declarar con CONST.
//************************************************************************/
