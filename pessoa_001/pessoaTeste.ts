import { Pessoa } from './pessoa';
import * as rl from 'readline-sync';

const nome = rl.question("Qual o seu nome? ");
const idade = rl.question("Qual a sua idade? ");

const pessoaNova = new Pessoa(nome, idade);
pessoaNova.cumprimentar();
