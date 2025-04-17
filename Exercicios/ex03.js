var prompt = require('prompt-sync')();

const frase = prompt("Digite uma frase:");
const letra = prompt("Digite uma letra:").toLowerCase();

const palavras = frase.split(" ");

const letraselecionada = palavras.filter(palavra =>
  palavra.toLowerCase().startsWith(letra)
);

console.log(`Número de palavras que começam com "${letra}": ${letraselecionada.length}`);