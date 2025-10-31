const leia = require("readline-sync")
let n1,n2
console.log ("Digite o primeiro número do intervalo: ")
n1= leia.questionInt ()
console.log ("Digite o segundo número do intervalo: ")
n2= leia.questionInt ()
if (n1 > n2) {console.log ("Intervalo Inválido"); }
else 
    console.log("No intervalo entre "+n1,"e " +n2)
    for (let contador= n1; contador <= n2; contador++) 
    if (contador % 3 == 0 && contador % 5 == 0)
       { console.log(  contador + " é multiplo de 3 e 5")}

