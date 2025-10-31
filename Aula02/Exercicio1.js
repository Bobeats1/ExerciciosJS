//importando biblioteca
const leia = require ('readline-sync')

let A, B, C, soma

//Entrada de dados

A = leia.questionFloat ("Insira aqui o valor A: ")
B = leia.questionFloat ("Agora insira o valor B: ")
C = leia.questionFloat ("Agora insira o valor C: ")

// Processamento de dados e Saída
soma= (A + B)
if (soma > C) console.log(A, "+", B, "=", soma, "A soma A + B é maior que C. ") ;
else if (soma < C) console.log (A, "+", B, "=", soma,"A soma A + B é menor que C. ") ;
else if (soma == C) console.log (A, "+", B, "=", soma,"A soma A + B é igual a C. ");
