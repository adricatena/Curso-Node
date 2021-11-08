/* 
OSModule: Sirve para operar con el sist op dodne esta corriendo el script
*/
const os = require("os"); // acceso a todos los metodos dentro delmodulo
// const {...} = require('os'); // puedo desestructurar y exportar directamente las funcionalidades que quiera

// info sobre el usuario actual
const user = os.userInfo();
console.log(user);

// metodo que retorna tiempo encendido del sist en segundos
console.log(
  `El tiempo prendido del sist es ${os.uptime() / 60 / 24 / 30} meses`
);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
