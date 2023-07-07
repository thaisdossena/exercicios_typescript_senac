"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
var rl = require("readline-sync");
var nome = rl.question("Qual o seu nome? ");
var idade = rl.question("Qual a sua idade ");
var pessoaNova = new pessoa_1.Pessoa(nome, idade);
pessoaNova.cumprimentar();
