// Limpar Espaços Dobrados
// Crie uma função que remove espaços repetidos de uma frase (ex: &quot;Olá mundo bonito&quot;
// → &quot;Olá mundo bonito&quot;), usando split(), filter() e join().

var prompt = require('prompt-sync')();

let Frase = prompt("Digite uma Frase: ");

function espaco(Frase) {
    const Palavra = Frase.split(' ').filter(Palavra => Palavra  !== '');
    return Palavra.join(' ');
}

console.log(espaco(Frase));