var prompt = require('prompt-sync')();
let Num = prompt("Qual o seu CPF: ");

let cpfFormatado = Num.slice(0, 3) + "." + Num.slice(3, 6) + "." + Num.slice(6, 9) + "-" + Num.slice(9, 11);

console.log("CPF: ", cpfFormatado);