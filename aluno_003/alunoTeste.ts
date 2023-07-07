import { Aluno } from "./aluno";
import * as rl from 'readline-sync';

const nome = rl.question("Qual o seu nome? ");
const notas = rl.question("Digite três notas separadas por virgula: ");

const imprimirMedia = new Aluno(nome, notas);
imprimirMedia. calcularMedia(notas);


