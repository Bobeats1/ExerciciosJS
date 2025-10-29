//importando biblioteca
const leia = require ('readline-sync')

let salario, abono, NovoSalario

//Entrada de dados

salario = leia.questionFloat ("Insira aqui o valor do salario: ")
abono = leia.questionFloat ("Agora insira o valor do abono salarial: ")
// Processamento de dados
NovoSalario = salario + abono

// Saída de dados

console.log ("Seu novo salário é: " + NovoSalario)
