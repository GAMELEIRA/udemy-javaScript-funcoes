/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:25/02/2020 
 * HORA:17:57
 * FINALIDADE DO PROGRAMA: TRABALHAR COM FUNÇÕES BIND E FUNÇÕES 
 */

const pessoa = {

    saudacao: `Bom dia!`,

    falar(){

        console.log(this.saudacao);

    }

}

pessoa.falar();

const falar = pessoa.falar.bind(pessoa);

falar();