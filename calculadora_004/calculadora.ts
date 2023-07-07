// Quarta Questão Crie uma classe chamada "Calculadora" com métodos estáticos para realizar operações matemáticas, como "soma", "subtracao", "multiplicacao" e "divisao". Chame os métodos da classe diretamente, sem criar uma instância da classe, para realizar algumas operações matemáticas e imprimir os resultados.

export class Calculadora {    
    primeiroNum: number;
    segundoNum:number;

    constructor( primeiroNum: number, segundoNum:number) {
        this.primeiroNum = primeiroNum;
        this.segundoNum = segundoNum ;                   
    }

    somar(): void {
        const somar = this.primeiroNum + this.segundoNum;
        console.log('A soma dos números é igual a: ', somar);
    };

    subtrair(): void {
        const subtrair = (this.primeiroNum - this.segundoNum);
        console.log('A subtração dos números é igual a: ', subtrair);
    };

    multiplicar(): void {
        const multiplicar = (this.primeiroNum * this.segundoNum);
        console.log('A multiplicação dos números é igual a: ', multiplicar);
    };

    dividir(): void {
        const dividir = (this.primeiroNum / this.segundoNum);
        console.log('A divisão dos números é igual a: ', dividir);
    };
}