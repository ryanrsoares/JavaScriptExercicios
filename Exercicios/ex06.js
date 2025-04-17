var prompt = require('prompt-sync')();

let frase = prompt("Digite uma frase:").trim();

let resultado = frase
  .split(" ")
  .filter(palavra => palavra.length > 0) // remove palavras vazias
  .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
  .join(" ");

console.log(resultado);