/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:26/02/2020 
 * HORA:06:35
 * FINALIDADE DO PROGRAMA: TRABALHAR COM FUNÇÕES ARROW
 */

let comparaComThis = function (param) {

    console.log(this === param);

}

comparaComThis(global);

const obj = {}

comparaComThis = comparaComThis.bind(obj);

comparaComThis(global);

comparaComThis(obj);

comparaComThis = param => console.log(this === param);

comparaComThis(global);

comparaComThis(module.exports);
