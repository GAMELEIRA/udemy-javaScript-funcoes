/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:26/02/2020 
 * HORA:15:54
 * FINALIDADE DO PROGRAMA: ENTENDENDO CLOSURES
 */

function criarProduto(nome, preco) {

    return {

        nome,
        preco,
        desconto: 0.1

    }

}

console.log(criarProduto(`Notebook`, 2199, 491));