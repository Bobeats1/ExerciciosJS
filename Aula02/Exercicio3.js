const leia = require("readline-sync");

let operacao, numero1,  numero2;

numero1= leia.questionInt ("Digite o primeiro numero: ")
numero2= leia.questionInt ("Digite o segundo numero: ")

console.log ("Agora escolha uma das operaçoes a seguir: \n 1: soma \n 2: subtração \n 3: multiplicação \n 4: divisão" );
operacao = leia.questionInt ()

switch (operacao) {
  case 1:
    console.log(numero1, "+", numero2, "=", numero1 + numero2);
    break;
  case 2:
    console.log(numero1, "-", numero2, "=", numero1 - numero2);
    break;
  case 3:
    console.log(numero1, "x", numero2, "=", numero1 * numero2);
    break;
  case 4: 
    console.log(numero1, "/", numero2, "=", numero1 / numero2)  
    break;
  default:
    console.log("Opção inválida!");
}