/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:26/02/2020 
 * HORA:14:57
 * FINALIDADE DO PROGRAMA: ENTENDENDO CLOSURES
 */

const x = "Global";

function fora() {

    const x = "Local"

    function dentro() {

        return x;

    }

    return dentro;

}

const minhaFuncao = fora();

console.log(minhaFuncao());