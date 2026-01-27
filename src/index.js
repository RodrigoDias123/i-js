// Use operadores &&, || e ! para criar um script que verifica se um número está entre 10 e 20 (inclusive) e não é igual a 15

let num = 12;

if (num >= 10 && num <= 20 && !(num === 15)) {
  console.log("Condição verdadeira");
} else {
  console.log("Condição falsa");
}