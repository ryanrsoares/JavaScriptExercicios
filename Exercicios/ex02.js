// Peça uma frase e crie uma função que retorna a maior palavra da frase usando
// split() e reduce().

var prompt = require('prompt-sync')();

let frase = prompt("Digite uma frase: ");

let palavras = frase.split(" ");

let maior = palavras.reduce(function(maior, atual) {
  if (atual.length > maior.length) {
    
    return atual;

  } else {
    return maior;
  }
});
console.log("A maior palavra e:", maior);