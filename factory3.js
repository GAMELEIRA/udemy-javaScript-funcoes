/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:26/02/2020 
 * HORA:16:01
 * FINALIDADE DO PROGRAMA: ENTENDENDO CLOSURES
 */

class Pessoa {

    constructor(nome){

        this.nome = nome;

    }

    falar(){

        console.log(`Meu nome é ${this.nome}`);

    }

}

const p1 = new Pessoa(`Gabriel`);

p1.falar();


const pessoa = nome => {

    return {

        falar:() => console.log(`Meu nome é ${nome}`)

    }

}

const pessoa2 = pessoa(`Gabrielly`)

pessoa2.falar();