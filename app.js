/* http module
modulo para crear un server con peticiones http
*/
const http = require("http");

// creamos un servidor
const server = http.createServer((req, res) => {
  // console.log(req); // con esto podremos mostrar la request entera (es un obj inmenso)
  if (req.url === "/") {
    res.end("Bienvenido a nuestra pagina a principal!!"); // podemos escribir directamente cuando cerramos el server
  } else if (req.url === "/hola") {
    res.end("Estas navegando por la pagina 'HOLA");
  } else {
    res.end(`<h1>Ups!</h1>
            <p>No podemos encontrar la pagina que estas buscando</p>
            <a href='/'>Back home</a>`);
  }
  /* // escribimos una respuesta
  res.write("hola a nuestra home page");
  // finalizamos la respuesta
  res.end(); */
});

// puerto que vamos a 'escuchar': localhost:5000
server.listen(5000);
