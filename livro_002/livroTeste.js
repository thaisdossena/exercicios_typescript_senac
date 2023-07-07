"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var livro_1 = require("./livro");
var rl = require("readline-sync");
var titulo = rl.question("Qual o titulo do livro? ");
var autor = rl.question("De qual autor? ");
var anoPublicacao = rl.question("Data de lançamento: ");
var imprimirDatalhes = new livro_1.Livro(titulo, autor, anoPublicacao);
imprimirDatalhes.obterDetalhes();
