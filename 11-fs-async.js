/* fs module; file system- trabajar con archivos pero de manera asincrona*/

const { readFile, writeFile, write } = require("fs");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return false;
  }
  //   console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return false;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Aca esta el resultado: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return false;
        }
        console.log(result);
      }
    );
    writeFile(
      "./content/result-async-append.txt",
      `Aca esta el resultado: ${first}, ${second}`,
      {
        flag: "a",
      },
      (err, result) => {
        if (err) {
          console.log(err);
          return false;
        }
        console.log(result);
      }
    );
  });
});
