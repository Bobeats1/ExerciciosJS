//importando biblioteca
const leia = require ('readline-sync')

let A, B, C

//Entrada de dados

A = leia.questionFloat ("Insira aqui o valor A: ")
B = leia.questionFloat ("Agora insira o valor B: ")
C = leia.questionFloat ("Agora insira o valor C: ")

// Processamento de dados e Saída
if (A + B > C) console.log("A soma A + B é maior que C. ") ;
else if (A + B < C) console.log ("A soma A + B é menor que C. ") ;
else if (A + B == C) console.log ("A soma A + B é igual a C. ");
