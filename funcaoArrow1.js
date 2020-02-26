/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:26/02/2020 
 * HORA:06:00
 * FINALIDADE DO PROGRAMA: TRABALHAR COM FUNÇÕES ARROW
 */

 //FUNCAO ANONIMA COM RETORNO EXPLICITO
let dobro = function (a = 0){

    return 2 * a;

}

console.log(dobro(2));

//FUNCAO ARROW COM RETORNO EXPLICITO 
dobro = (a = 0) => {

    return 2 * a;

}

console.log(dobro(1));

//FUNCAO ARROW COM RETORNO IMPLICITO
dobro = (a) => 2 * a;

console.log(dobro(4));

let ola = function () {

    return 'Olá';

}

console.log(ola());

//FUNCAO SEM PARAMETRO
ola = () => `Eu to loko!`;

console.log(ola());

//FUNCAO COM UNICO PARAMETRO
ola = _ => 'Olá ' + _ ;

console.log(ola("Gabrielly"));