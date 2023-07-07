"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var area_1 = require("./area");
var area_2 = require("./area");
var area_3 = require("./area");
var rl = require("readline-sync");
console.log("Menu: \n 1 - Área do Circulo \n 2 - Área do Triangulo \n 3 - Área do Retângulo  \n 5 - Esc \n");
var opcao = rl.question("Escolha a opção pelo número: ");
switch (opcao) {
    case "1":
        var raio = rl.questionFloat("Digite o valor do raio do círculo: ");
        var calcularAreaCirculo = new area_1.Circulo(raio);
        calcularAreaCirculo.calcularArea();
        break;
    case "2":
        var baseTriangulo = rl.questionFloat("Digite o valor da base do triangulo: ");
        var alturaTriangulo = rl.questionFloat("Digite o valor da altura do triangulo: ");
        var calcularAreaTriangulo = new area_2.Triangulo(baseTriangulo, alturaTriangulo);
        calcularAreaTriangulo.calcularArea();
        break;
    case "3":
        var baseRetangulo = rl.questionFloat("Digite o valor da base do retangulo: ");
        var alturaRetangulo = rl.questionFloat("Digite o valor da altura do retangulo: ");
        var calcularAreaRetangulo = new area_3.Retangulo(baseRetangulo, alturaRetangulo);
        calcularAreaRetangulo.calcularArea();
        break;
    case "0":
        console.log("Saindo!");
        break;
}
