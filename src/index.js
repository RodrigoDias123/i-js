//Alterar src/index.js de forma a resolver os problemas abaixo:
//Adeque o script anteriormente escrito para utilizar operadores ternários.
//Caso o número seja igual a 5, 10 ou 15, interromper o código

const number = 5

if (number === 5 || number === 10 || number === 15){
    console.log("Número inválido. Interrompendo...");
    return;
} 

number > 10 && number <= 20 
  ? console.log("O número está entre 10 e 20 inclusive") 
  : console.log("");

number !== 15 
  ? console.log("O número não é 15") 
  : console.log("");