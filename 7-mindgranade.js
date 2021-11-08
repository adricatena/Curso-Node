const num1 = 5;
const num2 = 10;

function sumar() {
  console.log(`la suma es: ${num1 + num2}`);
}

sumar();

/* 
Si tenemos una funcion que se ejecuta dentro de un modulo, y luego a este lo exportamos, se va a ejecutar esta funcion tambien
Esto sucede si no utilizamos module.exports, porque lo cuando importamos, traera todo el archivo
require("./7-mindgranade"); // asi pelado, sin ninguna asignacion
*/
