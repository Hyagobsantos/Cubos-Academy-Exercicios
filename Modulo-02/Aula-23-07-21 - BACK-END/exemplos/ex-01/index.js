//desestruturacao de objetos

const pessoa =  {
    nome : "joão",
    idade: 34,
    cidade:"Guarulhos",
    profissao:"Desenvolvedor"
};

// const nome = pessoa.nome;
// const idade = pessoa.idade;


const {nome:jao ,idade, ...outras} = pessoa;

console.log(jao);
console.log(idade);
console.log(outras.cidade);