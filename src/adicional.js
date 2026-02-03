//Desafio adicional:
//Crie uma função create_integers para criar uma lista contendo 100 números aleatórios múltiplos de 3
//Utilize a resposta como parâmetro de entrada da função principal
//Mova a função create_integers para src/utils.js e use alguma técnica de importação para importar a função para ser usada em src/index.js

// Função que cria uma lista de 100 números aleatórios múltiplos de 3 entre 3 e 300

import { createIntegers } from './utils.js'; 

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

const numero = 12;
const resultado = analisarNumero(numero);
console.log(resultado);

const numbers = createIntegers();
console.log(numbers);