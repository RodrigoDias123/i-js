//Desafio adicional:
//Crie uma função create_integers para criar uma lista contendo 100 números aleatórios múltiplos de 3
//Utilize a resposta como parâmetro de entrada da função principal
//Mova a função create_integers para src/utils.js e use alguma técnica de importação para importar a função para ser usada em src/index.js

// Função que cria uma lista de 100 números aleatórios múltiplos de 3 entre 3 e 300

export function createIntegers() {
  const integers = [];
  for (let i = 0; i < 100; i++) {
    // Gerar número aleatório entre 1 e 100 (porque 100*3 = 300)
    const randomMultipleOf3 = (Math.floor(Math.random() * 100) + 1) * 3;
    integers.push(randomMultipleOf3);
  }
  return integers;
}