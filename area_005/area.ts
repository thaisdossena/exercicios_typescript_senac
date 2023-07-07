// Quinta Questão Crie um arquivo com várias classes: Círculo, Triângulo e Retângulo. Cada uma terá um método chamado calcularArea que faz o calculo de acordo com sua fórmula.

//A = π r²
//A =(base x altura) / 2

export class Circulo {          
      raio: number;

    constructor(raio: number) {            
        this.raio = raio;
    }  
    
    calcularArea(){
        let areaCirculo = Math.PI * (this.raio ** 2);
        console.log('A área do circulo é igual a: ', areaCirculo);
    }
}

export class Triangulo {    
    base: number;
    altura: number;

    constructor(base: number, altura: number) {        
        this.base = base;
        this.altura = altura;
    }  

    calcularArea(){
        let areaTriangulo = (this.base * this.altura) / 2
        console.log('A área do triângulo é igual a: ', areaTriangulo);
    }    
}

export class Retangulo {  
    base: number;
    altura: number; 

    constructor( base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    } 

    calcularArea() {
        let areaRetangulo = this.base * this.altura;
        console.log('A área do retângulo é igual a: ', areaRetangulo);
    }      
}