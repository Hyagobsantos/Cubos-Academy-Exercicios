function solucao(lista) {
    //seu codigo aqui
    console.log(lista.reduce((acc,index) => acc + index) / lista.length)

}

let entrada = [2, 3, 4];
solucao(entrada)