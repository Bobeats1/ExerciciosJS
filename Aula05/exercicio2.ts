import { Stack } from "../Stack";
import readlynesync= require ("readline-sync")



const pilha = new Stack<string>();
let continua: boolean = true
let operacao: number ;


while (continua) {
console.log(`****************************** 
    1- Adicionar Livro na Pilha
    2- Listar todos os Livros
    3- Retirar Livro da Pilha
    0- Sair
******************************  `)
operacao= readlynesync.questionInt ()

switch (operacao) {
    
    case 1:  
        console.log(`Digite o nome:`)
        let livro: string = readlynesync.question ()
        pilha.push (livro)
        pilha.printStack()	
        console.log("\n Livro Adicionado! \n");
        break;

    case 2: 
        console.log("Lista de Livros na Pilha: \n")
        pilha.printStack()	;
        break;

    case 3: 
    if ( pilha.isEmpty()) {
        console.log("A Pilha está vazia! \n"); }
    else if (!pilha.isEmpty()){ 
        pilha.pop ()
       pilha.printStack()	
       console.log("Um Livro foi retirado da Pilha! \n")
     }
     break;

    case 0: 
        continua = false
        break;
}
}