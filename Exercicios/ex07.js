//permite que o usuario digite no prompt
var prompt = require('prompt-sync')();

// Pede ao usuário para digitar um texto
let texto = prompt("Digite um texto:");

// Quebra o texto em um array de caracteres (letras, números, espaços, etc.)
let caracteres = texto.split(""); // exemplo: "a1b2" vira ["a", "1", "b", "2"]

// Filtra apenas os caracteres que são números (de 0 a 9)
let apenasNumeros = caracteres.filter(function(cadaCaractere) {
  // isNaN verifica se "NÃO é um número" → então usamos "!" para inverter
  // Também checamos se não é um espaço (" "), porque espaços confundem o isNaN
  return !isNaN(cadaCaractere) && cadaCaractere !== " ";
});

// Conta quantos números foram encontrados
let quantidade = apenasNumeros.length;

// Mostra o resultado no console
console.log("Quantidade de dígitos numéricos:", quantidade);