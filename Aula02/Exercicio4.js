const leia = require("readline-sync");

let operacao, saldo, saque, deposito,  saldoFinal;

saldo= 1000

console.log ("Bem Vinde ao terminal de operações da sua conta bancária! \n Selecione uma das seguintes opções: \n 1: Mostrar Saldo \n 2: Realizar Saque \n 3: Depositar " );
operacao = leia.questionInt ()

switch (operacao) {
  case 1:
    console.log("Seu saldo atual é: ", + saldo);
    break;
  case 2:
    console.log("Digite o valor do saque: ");
    saque = leia.questionFloat ()
     saldoFinal= saldo - saque
     if (saque <= 0) {console.log("Valor Inválido!"); }
     else if (saque <= saldo ) 
        {console.log ("Operação realizada! - Saque\n Saldo Atual: ", saldoFinal  );}
    else if (saque > saldo) 
           { console.log ("Saldo insuficiente!");}
    break;
  case 3:
    console.log("Digite o valor do depósito");
    deposito = leia.questionFloat ()
     saldoFinal = (saldo + deposito)
         if (deposito > 0) 
        {console.log ("Depósito realizado! Seu saldo atual é:", + saldoFinal) ;} 
         else if (deposito <= 0) { console.log ("Valor inválido!") ;}
    break;
  default:
    console.log("Opção inválida!");
}