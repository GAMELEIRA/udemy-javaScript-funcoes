/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:25/02/2020 
 * HORA:15:23
 * FINALIDADE DO PROGRAMA: TRABALHAR COM FUNCOES
 */

function calculaArea(largura, altura) {

    let area = largura * altura;

    if (area > 20) {

        console.log(`Valor acima do permitido: ${area}`);

    } else {

        return area;

    }

}

console.log(calculaArea(2, 2));

console.log(calculaArea(2));

console.log(calculaArea());

console.log(calculaArea(2, 3, 17, 22, 44));

console.log(calculaArea(5,5));