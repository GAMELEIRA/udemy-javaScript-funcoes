/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:26/02/2020 
 * HORA:16:13
 * FINALIDADE DO PROGRAMA: ENTENDENDO FACTORY
 */

function Pessoa(nome){

    this.nome = nome

    this.falar = function () {

        console.log(`Meu nome é ${this.nome}`);

    }

}

const pp1 = new Pessoa(`João`);

pp1.falar();