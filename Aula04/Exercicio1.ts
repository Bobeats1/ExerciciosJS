import readlinesync = require("readline-sync");

const setCores: Array<string> = new Array<string> ()

for (let i = 0; i < 5; i++) {

let cor: string= readlinesync.question ("Digite aqui uma cor: ")
setCores.push (cor) }

//Listar todas as cores:
console.log ("Listar todas as cores: ") 
for (let cor of setCores) {
        console.log (cor) }

//Ordernar as cores
   setCores.sort ()
   //Saída de dados
console.log ("Ordenar as cores: ")
for (let cor of setCores) {
console.log (cor) }