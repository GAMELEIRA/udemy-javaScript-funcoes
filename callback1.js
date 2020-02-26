/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:26/02/2020 
 * HORA:07:28
 * FINALIDADE DO PROGRAMA: TRABALHAR COM CALLBACK
 */

const fabricantes = ["Mercedes", "Audi", "BMW"];

const imprimirNome = (indice) => fabricantes[indice];

for (i in fabricantes) {

    console.log(` ${i} ${imprimirNome(i)}`);

}

const frutas = ["Maçã", "Laranja", "Limão"];

function imprimir(nome, indice) {

    console.log(`${indice + 1}. ${nome}`);

}

frutas.forEach(imprimir);

frutas.forEach(function (a) {

    console.log(a);

})