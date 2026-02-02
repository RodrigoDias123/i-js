
export function createIntegers() {
  const integers = [];
  for (let i = 0; i < 100; i++) {
    // Gerar número aleatório entre 1 e 100 (porque 100*3 = 300)
    const randomMultipleOf3 = (Math.floor(Math.random() * 100) + 1) * 3;
    integers.push(randomMultipleOf3);
  }
  return integers;
}

