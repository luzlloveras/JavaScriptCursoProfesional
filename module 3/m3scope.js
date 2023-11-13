// scope global: fuera de un bloque o función, dosponible en todos lados
var nombre = "Luz";

// scope local: solo vive mientras se ejecuta la función donde es declarada la variable
function decirHola(){
    nombre = "Cody";
    console.log("Hola "+nombre);
}

// ejecuciones
console.log(nombre);

decirHola();

