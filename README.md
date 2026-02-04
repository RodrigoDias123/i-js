# 📘 Projeto i-js – Relatório de Alunos

Este projeto é uma aplicação simples em **JavaScript** que processa dados de alunos, calcula médias, define o estado de aprovação e gera um relatório formatado no terminal.

O projeto está preparado para ser executado **localmente** ou através de **Docker**, utilizando um **Makefile** para facilitar a execução dos comandos.

---

## 🧠 O que o projeto faz

1. Cria uma lista de utilizadores (alunos e outros perfis).
2. Calcula a média das notas de cada aluno.
3. Define o estado:
   - ✅ **Aprovado** (média ≥ 10)
   - ❌ **Reprovado** (média < 10)
4. Aplica permissões conforme o perfil do utilizador:
   - `admin` → acesso total
   - `editor` → pode editar
   - outros → acesso limitado
5. Gera um relatório final numerado e imprime no terminal.

---

## 🗂️ Estrutura do Projeto

```text
.
├── index.js
├── Makefile
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

## 📄 Descrição do Código

### `funcA()`
Responsável por criar e devolver uma lista de utilizadores com:
- `id`
- `name`
- `grades`
- `role`

Inclui casos especiais como nomes vazios, notas inexistentes e utilizadores sem nome definido.

---

### `funcB(alunos)`
Processa a lista de utilizadores:
- Valida nomes (`Anónimo` ou `Sem nome`)
- Filtra notas válidas
- Calcula a média das notas
- Define o estado (Aprovado/Reprovado)
- Aplica permissões conforme o `role`
- Retorna um array de strings formatadas

---

### `funcC(linhas)`
Cria o relatório final:
- Numera cada linha
- Junta todas as informações numa única string
- Prepara o resultado para impressão no terminal

---

## 🔧 Instalação do Node.js

Este projeto requer o **Node.js** instalado no sistema.

### Verificar se o Node.js está instalado

```bash
node -v
npm -v
```

Se não estiver instalado, faz o download em:
- https://nodejs.org (versão LTS recomendada)

Após a instalação, reinicia o terminal.

---

## 📦 Dependências do Projeto

Este projeto utiliza a biblioteca **prompt-sync** para leitura de dados via terminal.

Instalação manual da dependência:

```bash
npm install prompt-sync
```

Dependência utilizada:

```json
"prompt-sync": "^4.2.0"
```

---

## ▶️ Execução Local

### Instalar dependências

```bash
make install
```

### Executar a aplicação

```bash
node index.js
```

---

## 🐳 Execução com Docker

### Subir o container

```bash
make up
```

### Build da imagem

```bash
make build
```

### Executar o projeto

```bash
make run
```

Por defeito, o comando executado é:

```bash
npm run start
```

É possível alterar o comando assim:

```bash
make run COMMAND=dev
```

---

## 🐚 Acesso ao Container (Bash)

```bash
make bash
```

Este comando abre um terminal interativo dentro do container Docker.

---

## 🛠️ Tecnologias Utilizadas

- JavaScript (Node.js)
- Docker
- Docker Compose
- Makefile

---

## 🎯 Objetivo

Projeto com fins **educacionais**, desenvolvido para praticar:
- Funções em JavaScript
- Manipulação de arrays e objetos
- Estruturas de decisão e ciclos
- Dockerização de aplicações
- Automação com Makefile

---

📌 **Autor:** Rodrigo Dias

