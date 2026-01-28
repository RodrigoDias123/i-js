//Desafio adicional:
//Modifique seu script de forma que caso o número seja múltiplo de 05, interrompa o código e apresente uma mensagem
//Transforme seu script em uma função

function verificarNumero(number) {
  if (number % 5 === 0) {
    console.log("Número múltiplo de 5 detectado. Interrompendo...");
    return;
  }

  number > 10 && number <= 20
    ? console.log("O número está entre 10 e 20 inclusive")
    : console.log("");

  number !== 15
    ? console.log("O número não é 15")
    : console.log("");
}

verificarNumero(15);