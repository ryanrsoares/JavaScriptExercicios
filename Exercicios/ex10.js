// Importa o prompt para ler o que o usuário digitar
var prompt = require('prompt-sync')();

// Pede uma frase para o usuário
let frase = prompt("Digite uma frase:");

// Converte tudo para minúsculas e separa a frase em palavras
let palavras = frase.toLowerCase().split(" ");

// Objeto para contar quantas vezes cada palavra aparece
let contagem = {};

// Conta as palavras
for (let i = 0; i < palavras.length; i++) {
  let palavra = palavras[i];

  if (contagem[palavra]) {
    contagem[palavra] += 1;
  } else {
    contagem[palavra] = 1;
  }
}

// Agora vamos descobrir qual palavra apareceu mais
let maisRepetida = "";
let maior = 0;

for (let palavra in contagem) {
  if (contagem[palavra] > maior) {
    maior = contagem[palavra];
    maisRepetida = palavra;
  }
}

// Mostra o resultado
console.log("A palavra que mais se repete é:", maisRepetida);