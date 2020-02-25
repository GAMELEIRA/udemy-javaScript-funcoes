/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:25/02/2020 
 * HORA:15:23
 * FINALIDADE DO PROGRAMA: TRABALHAR COM FUNCOES
 */

//FUNCAO NOMEADA SEM RETORNO
function funcao1() {

    return;
}

//FUNCAO NOMEADA COM RETORNO
function funcao2() {

    return `Hello, function!`;

}

//FUNCAO ANONIMA SEM RETORNO 
const funcao3 = function(){}

//FUNCAO EM ARRAY
const array = [function (a, b){ return a + b}, funcao1, funcao2];

console.log(array[0](2,3),funcao1(),funcao2());

//ARMAZENAR FUNCAO EM UM MENBRO DE UM OBJETO
const obj = {}

obj.falar = function () {return `Opa!`}

console.log(obj.falar());

//PASSANDO UMA FUNCAO COMO ARGUMENTO PARA UMA FUNCAO
function run(fun){

    console.log(fun());

}

run(funcao2);

//FUNCAO QUE CONTENHA UMA FUNCAO
function soma(a, b){

    return function (c){

        console.log(a + b + c);

    }

}

soma(2, 3)(4);

const resultado = soma(2,3);

const resultado1 = resultado(4);