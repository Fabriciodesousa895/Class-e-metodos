//importando minha Class
import { lertable } from "/Class/tabela.js";
const tabela = document.getElementById('tabela')
//criando uma nova instancia
let num = new lertable(tabela)
//associando o resultado de um método a uma variável
let array = num.tamanhoArray()
let arraysum = num.sumarray(2)
console.log(array)
console.log(arraysum)
