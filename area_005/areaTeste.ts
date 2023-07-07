import { Circulo } from "./area";
import { Triangulo } from "./area";
import { Retangulo } from "./area";
import * as rl from 'readline-sync';

console.log("Menu: \n 1 - Área do Circulo \n 2 - Área do Triangulo \n 3 - Área do Retângulo  \n 5 - Esc \n");
const opcao = rl.question("Escolha a opção pelo número: ");

switch(opcao){
    case "1":    
        let raio = rl.questionFloat("Digite o valor do raio do círculo: ");    
        const calcularAreaCirculo = new Circulo(raio);         
        calcularAreaCirculo.calcularArea();          

        break;

    case "2":
        let baseTriangulo = rl.questionFloat("Digite o valor da base do triangulo: ");    
        let alturaTriangulo = rl.questionFloat("Digite o valor da altura do triangulo: ");
        const calcularAreaTriangulo = new Triangulo(baseTriangulo, alturaTriangulo);

        calcularAreaTriangulo.calcularArea();   

        break;

    case "3":
        let baseRetangulo = rl.questionFloat("Digite o valor da base do retangulo: ");    
        let alturaRetangulo = rl.questionFloat("Digite o valor da altura do retangulo: ");
        const calcularAreaRetangulo = new Retangulo(baseRetangulo, alturaRetangulo);

        calcularAreaRetangulo.calcularArea();                
        break;   

    case "0":
        console.log("Saindo!");
        break;
}