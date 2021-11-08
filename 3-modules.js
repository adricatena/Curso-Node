/* Modules
Se usa para subdividir el programa, si no estaria todo en el mismo archivo
CommonJS, todos los archivos son un modulo por defecto
Modules - codigo encapsulado (solo comparte lo minimo)
*/

const names = require("./4-names");
const hola = require("./5-utils");
const data = require("./6-alternative-export");

require("./7-mindgranade"); // esto exporta ell archivo entero y ejecuta funciones si es que se ejecutan dentro (aunque no se asigne la importacion)

/* hola(names.ara);
console.log(hola); */
