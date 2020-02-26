/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:26/02/2020 
 * HORA:14:43
 * FINALIDADE DO PROGRAMA: TRABALHAR COM INSTANCIAS E CONSTRUTORES
 */

const valor = "Global";

function minhaFuncao() {

    console.log(valor);

}

function exe(){

    const valor = `Local`;

    minhaFuncao()

}

exe();