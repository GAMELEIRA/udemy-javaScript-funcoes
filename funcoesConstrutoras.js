/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:26/02/2020 
 * HORA:09:03
 * FINALIDADE DO PROGRAMA: TRABALHAR COM INSTANCIAS E CONSTRUTORES
 */

function Carro(velocidadeMaxima = 200, delta = 5) {

    //ATRIBUTO PRIVADO
    let velocidadeAtual = 0

    //METODO PUBLICO 
    this.acelerar = function () {

        if (velocidadeAtual + delta <= velocidadeMaxima) {

            velocidadeAtual += delta;

        } else {

            velocidadeAtual = velocidadeMaxima;

        }

    }

    this.getVelocidadeAtual = function () {

        return velocidadeAtual;

    }

}

const uno = new Carro;

uno.acelerar();

console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);

ferrari.acelerar();

ferrari.acelerar();

ferrari.acelerar();

console.log(ferrari.getVelocidadeAtual());