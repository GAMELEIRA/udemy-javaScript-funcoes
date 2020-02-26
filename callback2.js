/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:26/02/2020 
 * HORA:09:03
 * FINALIDADE DO PROGRAMA: TRABALHAR COM CALLBACK
 */

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.8];

//SEM CALLBACK
let notasBaixas = [];

for (let i in notas) {

    if (notas[i] < 7) {

        notasBaixas.push(notas[i]);

    }

}

console.log(notasBaixas);

const notasBaixas2 = notas.filter(nota => nota < 7);

console.log(notasBaixas2);