console.log("CICLOS FOR");
console.log("imprimir numeros del 1 al 10");
for(let i=1; i<=10 ; i++){
    console.log(i);
}

console.log("imprimir numeros del 1 al 5");
for(let i=1; i<=10 ; i++){
    console.log(i);
    if(i == 5){ break; }
}

console.log("imprimir numeros del 1 al 10, saltandose el numero 5");
for(let i=1; i<=10 ; i++){
    if(i == 5){ continue; }
    console.log(i);
}

console.log("CICLOS WHILE");
console.log("imprimir numeros del 1 al 10");
let i = 1;

// primero se evalua la condición, luego se ejecuta el código
while(i<=10){
    console.log(i);
    i++;
}

// primero se ejecuta el código de la primer iteración, y luego evalua la condición
do{
    console.log(i);
    i++;
}while(i<=10);