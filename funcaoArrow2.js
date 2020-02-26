/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:26/02/2020 
 * HORA:06:19
 * FINALIDADE DO PROGRAMA: TRABALHAR COM FUNÇÕES ARROW
 */

function Pessoa(){

    this.idade = 0;

    //USAR FUNCAO ARROW PARA QUE O THIS NAO MUDE O SEU CONTEXTO
    setInterval(() => {

        this.idade++;

        console.log(this.idade);

    }, 1000)

}

new Pessoa