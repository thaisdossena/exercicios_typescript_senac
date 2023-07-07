"use strict";
// Quarta Questão Crie uma classe chamada "Calculadora" com métodos estáticos para realizar operações matemáticas, como "soma", "subtracao", "multiplicacao" e "divisao". Chame os métodos da classe diretamente, sem criar uma instância da classe, para realizar algumas operações matemáticas e imprimir os resultados.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora(primeiroNum, segundoNum) {
        this.primeiroNum = primeiroNum;
        this.segundoNum = segundoNum;
    }
    Calculadora.prototype.somar = function () {
        var somar = this.primeiroNum + this.segundoNum;
        console.log('A soma dos números é igual a: ', somar);
    };
    ;
    Calculadora.prototype.subtrair = function () {
        var subtrair = (this.primeiroNum - this.segundoNum);
        console.log('A subtração dos números é igual a: ', subtrair);
    };
    ;
    Calculadora.prototype.multiplicar = function () {
        var multiplicar = (this.primeiroNum * this.segundoNum);
        console.log('A multiplicação dos números é igual a: ', multiplicar);
    };
    ;
    Calculadora.prototype.dividir = function () {
        var dividir = (this.primeiroNum / this.segundoNum);
        console.log('A divisão dos números é igual a: ', dividir);
    };
    ;
    return Calculadora;
}());
exports.Calculadora = Calculadora;
