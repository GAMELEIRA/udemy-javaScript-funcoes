/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:25/02/2020 
 * HORA:17:57
 * FINALIDADE DO PROGRAMA: TRABALHAR COM FUNÇÕES BIND E FUNÇÕES 
 */

function Pessoa() {

    this.idade = 0;

    setInterval(function () {

        this.idade++;

        console.log(this.idade);

    }.bind(this), 1000)

}

new Pessoa();