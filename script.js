

/*
1) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch,
e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes.

a) Caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”.
b) Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”.
c) Caso seja especificado um modelo que não está disponível, 
retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.
*/

const typeCar = (modelo = "hatch") => {
    if (modelo === 'hatch') {
        return 'Compra efetuada com sucesso';
    } else if (modelo === 'caminhonetes' || modelo === 'motocicletas' || modelo === 'sedans') {
        return 'Tem certeza que não prefere este modelo?';
    } else {
        return 'Não trabalhamos com este tipo de automóvel aqui.';
    }
}; 


/*
2) Criar um bloco de código, onde deverá ter três variáveis do tipo inteiro: a, b, c. Verifique se:
a) Se todos os lados são iguais, o triângulo será equilátero;
b) Se todos os lados forem diferentes, será escaleno;
c) Se nenhuma das duas condições anteriores for atendida, será isósceles.
*/

const triangulo = (a, b, c) => {
    if (a === b && b === c) {
        return "Triangulo equilátero";
    } else if (a !== b && b !== c && a!==c) {
        return "Escaleno";
    } else {
        return "Isósceles"
    }
}; 

/*
3) Construa uma função que receba um número.
a) Se o número for  positivo, mostrar a informação de que ele é positivo.
b) Se o número for negativo, mostrar a informação de que ele é negativo. 
*/

const num = (numero) => numero >= 0 ? 'é positivo': " é negativo"
