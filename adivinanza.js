const readlineSync = require("readline-sync");

const adivinarNumSecreto = () => {
  const num = Math.floor(Math.random() * 100) + 1;

  let numero = Math.floor(readlineSync.question("Ingresa un número: "));

  while (numero != num) {
    if (num < numero) {
      console.log(num);
      console.log("El número secreto es menor. Intenta nuevamente!");
    } else if (num > numero) {
      console.log(num);
      console.log("El número secreto es mayor. Intenta nuevamente!");
    }
    numero = readlineSync.question("Ingresa el número: ");
  }
};

module.exports = { adivinarNumSecreto };
