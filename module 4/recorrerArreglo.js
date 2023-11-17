let arreglo = [1,2,3,4];

// // recorrer ascendente
for(let i=0; i<arreglo.length; i++){
    console.log(arreglo[i]);
}

// recorrer descendente
for(let i =arreglo.length - 1; i >= 0; i--){
    console.log(arreglo[i]);
}

// // recorrer ascendente y guardar elemento que está siendo iterado
for(let i=0; i<arreglo.length; i++){
    let elemento = arreglo[i];
    console.log(elemento);
}