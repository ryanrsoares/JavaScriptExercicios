var prompt = require('prompt-sync')();

let palavra = prompt("Digite uma palavra: ");

function palidroma(palavra) {
    let Verificar = palavra.split('').reverse().join('');

    if (palavra === Verificar) {
        console.log(`${palavra} e um palindromo!`);
    } else {
        console.log("nao e um palíndromo!");
    }
}

palidroma(palavra);
