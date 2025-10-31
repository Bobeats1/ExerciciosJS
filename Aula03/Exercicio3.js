const leia = require("readline-sync");
let indice, numerosvetor = [2,5,1,3,4,9,7,8,10,6];
console.log ("Digite o número que você deseja encontrar: ")
indice= leia.questionInt ()
if (!numerosvetor.includes (indice)) {console.log ("O número "+ indice, "não foi encontrado!")}
else {
    for (let i = 0; i < 10; i++) {
    if (numerosvetor[i] === indice) {
      console.log(`O número ${indice} está localizado na posição: ${i}`);
      break; 
    }
  }
}