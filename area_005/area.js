"use strict";
// Quinta Questão Crie um arquivo com várias classes: Círculo, Triângulo e Retângulo. Cada uma terá um método chamado calcularArea que faz o calculo de acordo com sua fórmula.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = exports.Triangulo = exports.Circulo = void 0;
//A = π r²
//A =(base x altura) / 2
var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.raio = raio;
    }
    Circulo.prototype.calcularArea = function () {
        var areaCirculo = Math.PI * (Math.pow(this.raio, 2));
        console.log('A área do circulo é igual a: ', areaCirculo);
    };
    return Circulo;
}());
exports.Circulo = Circulo;
var Triangulo = /** @class */ (function () {
    function Triangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Triangulo.prototype.calcularArea = function () {
        var areaTriangulo = (this.base * this.altura) / 2;
        console.log('A área do triângulo é igual a: ', areaTriangulo);
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
var Retangulo = /** @class */ (function () {
    function Retangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Retangulo.prototype.calcularArea = function () {
        var areaRetangulo = this.base * this.altura;
        console.log('A área do retângulo é igual a: ', areaRetangulo);
    };
    return Retangulo;
}());
exports.Retangulo = Retangulo;
