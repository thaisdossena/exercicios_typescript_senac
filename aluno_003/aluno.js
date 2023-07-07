"use strict";
// Terceira Questão Crie uma classe chamada "Aluno" com as propriedades nome e notas (array de números). Adicione um método chamado "calcularMedia" que calcula e retorna a média das notas do aluno. Em seguida, crie uma instância da classe, adicione as três notas e imprima a média.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }
    Aluno.prototype.calcularMedia = function (notas) {
        var soma = 0;
        var listaDeNotas = notas.split(',').map(function (num) { return parseFloat(num.trim()); });
        console.log(listaDeNotas);
        for (var i = 0; i < listaDeNotas.length; i++) {
            soma += listaDeNotas[i];
        }
        var media = soma / listaDeNotas.length;
        console.log('Olá', this.nome, '! Sua média é igual a:', media);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
