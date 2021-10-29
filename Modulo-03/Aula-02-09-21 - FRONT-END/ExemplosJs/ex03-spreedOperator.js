const pessoa = {nome: 'Matheus', idade: 20}

const novaPessoa = {
    ...pessoa,
    idade: 40
}


console.log(novaPessoa)
console.log(pessoa)