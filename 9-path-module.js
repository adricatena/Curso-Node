const path = require("path");

console.log(path.sep);

const filePath = path.join("/content/", "/subfolder", "test.txt");
// join normaliza el path, por lo que sin querer agregamos barras antes y dps las elimina, entre otras cosas
console.log(filePath);

const base = path.basename(filePath); // retorna solo la base del path (el archivo en gral)
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
// retorna el path absoluto
console.log(absolute);
