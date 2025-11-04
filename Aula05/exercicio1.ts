import Queue = require("../Queue");
import readlynesync= require ("readline-sync")

const fila = new Queue.Queue<string>();
let continua: boolean = true
let operacao: number 

while (continua) {
console.log(`****************************** 
    1- Adicionar Cliente na Fila 
    2- Listar todos os Clientes
    3- Retirar Cliente da Fila 
    0- Sair
******************************  `)
operacao= readlynesync.questionInt ()

switch (operacao) {

    case 1: 
     console.log(`Digite o nome: `)
        let cliente: string = readlynesync.question ()
            fila.enqueue (cliente);
            console.log ("Cliente adicionado! ")
            fila.printQueue();
            break;

    case 2:  console.log("Lista de clientes na Fila: \n")
         fila.printQueue();
            break;

    case 3: fila.dequeue ()
    fila.printQueue();
    break;

    case 0: continua = false
    console.log(`O Cliente foi chamado!
Programa finalizado! `)
}
}

