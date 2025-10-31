const leia = require("readline-sync")

let continua= true, idade, menor21=0, maior50=0 ;

while (continua)
   { idade= leia.questionInt ("Digite uma idade: ")
    if (idade <0) continua= false
    else if (idade >50) {maior50++}
    else if (idade <20) {menor21++}};

    console.log("Total de pessoas menores de 21 anos: " +menor21)
    console.log("\n Total de pessoas maiores de 50 anos: " +maior50)