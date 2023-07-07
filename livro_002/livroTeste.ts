import { Livro } from "./livro";
import * as rl from 'readline-sync';

const titulo = rl.question("Qual o titulo do livro: ");
const autor = rl.question("De qual autor? ");
const anoPublicacao = rl.question("Data de lançamento: ");

const imprimirDatalhes = new Livro(titulo, autor, anoPublicacao);

imprimirDatalhes.obterDetalhes();
