// Terceira Questão Crie uma classe chamada "Aluno" com as propriedades nome e notas (array de números). Adicione um método chamado "calcularMedia" que calcula e retorna a média das notas do aluno. Em seguida, crie uma instância da classe, adicione as três notas e imprima a média.

export class Aluno {
    nome: String;
    notas: number;   

    constructor(nome: String, notas: number) {
        this.nome = nome;
        this.notas = notas;                     
    }

    calcularMedia(notas): void {  
        let soma = 0;
        const listaDeNotas = notas.split(',').map(num => parseFloat(num.trim()));
        
        for(let i = 0; i < listaDeNotas.length; i++){
            soma += listaDeNotas[i];
        }

        let media = soma / listaDeNotas.length;
     
        console.log('Olá', this.nome,'! Sua média é igual a:', media);
    }
}