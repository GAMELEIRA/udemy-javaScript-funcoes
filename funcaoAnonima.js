/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:26/02/2020 
 * HORA:07:03
 * FINALIDADE DO PROGRAMA: TRABALHAR COM FUNÇÕES ANONIMAS
 */

const soma = function (x, y) {

    return x + y;

}

const imprimirResultado = function (a, b, operacao = soma) {

    console.log(operacao(a, b));

}

imprimirResultado(3, 4);

imprimirResultado(3, 4, soma);

imprimirResultado(3, 4, function (x, y) {

    return x + y;

});

imprimirResultado(3, 4, (x, y) => x * y);

const pessoa = {

    falar: function () {

        console.log(`Opa`);

    },

    vamos() {

        console.log(`OI`);

    }, 

    multiplica : (a, b) => a * b

}

pessoa.falar();

pessoa.vamos();

console.log(pessoa.multiplica(9,8));

