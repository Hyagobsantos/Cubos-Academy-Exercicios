function solucao(numeros) {
    // seu codigo aqui
    // let tot = numeros.reduce((acc,index) => acc + index);
    // if(tot / numeros.length === 1){
    //     console.log(numeros.length)
    // }else{
    //     while(tot > numeros.length){
    //         tot -= numeros.length
    //     }

    //     console.log(tot)
    // }

    const soma = numeros.reduce((acc,index) => acc + index);
    const resto = soma % numeros.length

    resto === 0 ? console.log(numeros.length) : console.log(resto)
  
}

let numeros = [9,9,9,9]
solucao(numeros)
