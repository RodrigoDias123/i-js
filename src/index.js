

function funcA() {
  return [
    { id: 1, name: "Ana", grades: [12, 15, 14], role: "default" },
    { id: 2, name: "Bruno", grades: [8, 9, 7], role: "default" },
    { id: 3, name: "Tiago", grades: [10, 11, 17], role: "default" },
    { id: 4, name: "Pedro", grades: [], role: "default" },
    { id: 5, name: "Joao", grades: [0], role: "default" },
    { id: 6, name: "", grades: [14, 16, 15], role: "editor" },
    { id: 7, grades: [13, 14, 15], role: "admin" }
  ];
}

function funcB(alunos) {
  const resultados = [];

  for (const aluno of alunos) {
    const name = aluno.name ?? "Anónimo";
    const displayName = name === "" ? "Sem nome" : name;

    const grades = aluno.grades;
    const notasValidas = grades.filter(n => typeof n === "number");
    const somaNotas = notasValidas.reduce((acc, nota) => acc + nota, 0);
    const media = notasValidas.length > 0 ? somaNotas / notasValidas.length : 0;

    const status = media >= 10 ? "Aprovado" : "Reprovado";

    let linha = `${displayName} - média: ${media.toFixed(0)} - status: ${status}`;

    switch (aluno.role) {
      case "admin":
        linha += " [Acesso total]";
        break;
      case "editor":
        linha += " [Pode editar]";
        break;
      default:
        linha += " [Acesso limitado]";
    }

    resultados.push(linha);
  }

  return resultados;
}

function funcC(linhas) {
  let relatorio = "";
  let i = 0;

  while (i < linhas.length) {
    relatorio += `${i + 1}) ${linhas[i]}\n`;
    i++;
  }

  return relatorio.trim();
}

const alunos = funcA();
const linhas = funcB(alunos);
const relatorio = funcC(linhas);
console.log(relatorio);
