import readlinesync = require("readline-sync");
// Declarando o Set
const numeros: Set <number> = new Set <number> ()

//Entrada de dados 
for (let i = 0; i < 10; i++){
 let numero: number =  readlinesync.questionInt("Digite aqui um valor inteiro: ")
 numeros.add (numero) 
}

// Saída de dados
console.log("Lista de dados do Set: ")
for (let numero of numeros) {console.log (numero)}