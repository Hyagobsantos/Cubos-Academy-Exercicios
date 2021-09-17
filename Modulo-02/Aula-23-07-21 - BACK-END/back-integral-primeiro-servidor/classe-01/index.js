const pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "Porto Alegre",
    apelidos: [
        "Carlão",
        "Carlinhos",
        "Carluxo"
    ]
};


const {nome, idade, ...outros} = pessoa;

console.log(nome)
console.log(idade)
console.log(outros)


