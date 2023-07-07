"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculadora_1 = require("./calculadora");
var rl = require("readline-sync");
console.log("Menu: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 5 - Esc \n");
var opcao = rl.question("Escolha a opção pelo número: ");
var numero1 = rl.questionFloat("Digite o primeiro número para realizar a operação: ");
var numero2 = rl.questionFloat("Digite o segundo número para realizar a operação: ");
var calcular = new calculadora_1.Calculadora(numero1, numero2);
switch (opcao) {
    case "1":
        calcular.somar();
        break;
    case "2":
        calcular.subtrair();
        break;
    case "3":
        calcular.multiplicar();
        break;
    case "4":
        calcular.dividir();
        break;
    case "0":
        console.log("Saindo...");
        break;
}
