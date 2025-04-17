var prompt = require('prompt-sync')();

let textoOriginal = prompt("Digite um texto:");

function limparTexto(texto) {
    return texto.replace(/[^a-zA-Z0-9]/g, "");
  }
  
  let textoLimpo = limparTexto(textoOriginal);
  
  console.log(textoLimpo);