"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aluno_1 = require("./aluno");
var rl = require("readline-sync");
var nome = rl.question("Qual o seu nome? ");
var notas = rl.question("Digite três notas separadas por virgula: ");
var imprimirMedia = new aluno_1.Aluno(nome, notas);
imprimirMedia.calcularMedia(notas);
