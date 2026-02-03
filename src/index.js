//Alterar src/index.js de forma a resolver os problemas abaixo:
//Transforme seu script em uma função. Esta função deve ser capaz de receber um número e, dependendo do resultado, retornar uma das strings abaixo:
//É igual a 15
//função interrompida, pois o número é múltiplo de 5
//Está entre 10 e 20
//Não está entre 10 e 20
//Crie uma array de números com pelo menos 10 números múltiplos de 3


function analisarNumero(number) {
  if (number === 15) {
       console.log('É igual a 15');
    return 
  } else if (number % 5 === 0) {
    console.log('função interrompida, pois o número é múltiplo de 5');
    return 
  } else if (number >= 10 && number <= 20) {
    console.log('Está entre 10 e 20');
    return 
  } else {
    console.log('Não está entre 10 e 20');
    return 
  }
}

const myarrai = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const numero = 12;
const resultado = analisarNumero(numero);
console.log(resultado);
console.log(myarrai)


