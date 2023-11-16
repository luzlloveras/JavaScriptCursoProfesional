// Función pura: No produce efectos secudarios
let edades = [20];

function modificador(edades){
    let copia = [...edades]; // Genero una copia
    copia[0] = 25; // Modifico la copia y no el valor original
    return copia;  // Para comunicar los cambios en el exterior 
}

console.log(edades); 
console.log(edades);
console.log(edades);