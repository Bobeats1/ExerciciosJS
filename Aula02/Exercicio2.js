//importando biblioteca
const leia = require ('readline-sync')

let numero 

numero = leia.questionInt ("Insira aqui um numero inteiro: ")

// Checar se o número é positivo ou negativo
let tiponumero
if (numero < 0 ) tiponumero = "negativo"
else if (numero > 0) tiponumero = "positivo"

//checar se é par ou ímpar

let paridade
if (numero %2 ===0 ) paridade = "par"
else paridade = "impar"

// Saída de dados

console.log ("O Número " +numero , "é " +paridade , "e " + tiponumero)