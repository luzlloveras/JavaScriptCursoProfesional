function cuadrado(num){
    return num * num;
}
console.log(cuadrado(2)); // result: 4
//*********************************************************/
let resultado = cuadrado();
console.log(cuadrado()); // result: NaN
/*********************************************************/
function cuadrado(num=20){
    return num * num;
}
console.log(cuadrado()); // result: 400
// en este caso, toma el valor por default 20, establecido en num=20
/*********************************************************/
function saludar(nombre="", apellido){
    console.log(nombre, apellido);
}
saludar("hernandez"); 
// result: "Hernandez" undefined
// se descarto el valor por defecto en nombre, pero no se asigno valor para apellido.
/*********************************************************/
function saludar(apellido, nombre=""){
    console.log(nombre, apellido);
}
saludar("hernandez"); 
// result: "" "Hernandez"
/*********************************************************/
function sumaTodos(){
    let suma = 0;
    for(let i=0; i< arguments.length; i++){
        suma += arguments[i];
    }
    console.log(suma);
} 
sumaTodos(1,2,3,4); // result: 10