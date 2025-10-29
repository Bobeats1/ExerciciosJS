//importando biblioteca
const leia = require ('readline-sync')

let n1, n2, n3, n4, CalculoFinal

//Entrada de dados

n1 = leia.questionFloat ("Insira aqui o primeiro valor: ")
n2 = leia.questionFloat ("Agora insira o segundo valor: ")
n3 = leia.questionFloat ("Agora insira o terceiro valor: ")
n4 = leia.questionFloat ("Agora insira o quarto valor: ")
// Processamento de dados
CalculoFinal = (n1 * n2) - (n3 * n4)

// Saída de dados

console.log ("A diferença é: " + CalculoFinal)
