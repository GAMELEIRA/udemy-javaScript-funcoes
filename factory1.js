/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:26/02/2020 
 * HORA:14:57
 * FINALIDADE DO PROGRAMA: ENTENDENDO CLOSURES
 */

 const prod1 = {

    nome: '...',
    preco: 45

 }


 //Factory 
 function criarPessoa(){

    return {

        nome:'Ana',
        sobrenome:'Silva'

    }

 }

console.log(criarPessoa);