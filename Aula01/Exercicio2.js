//importando biblioteca
const leia = require ('readline-sync')

let nota1, nota2, nota3, nota4, MediaFinal

//Entrada de dados

nota1 = leia.questionFloat ("Insira aqui sua primeira nota: ")
nota2 = leia.questionFloat ("Agora insira a sua segunda nota: ")
nota3 = leia.questionFloat ("Agora insira a sua terceira nota: ")
nota4 = leia.questionFloat ("Agora insira a sua quarta nota: ")
// Processamento de dados
MediaFinal = (nota1 + nota2 + nota3 + nota4) /4

// Saída de dados

console.log ("Sua nota média é: " + MediaFinal)