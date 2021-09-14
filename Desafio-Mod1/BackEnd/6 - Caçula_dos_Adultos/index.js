function solucao(lista) {
    // seu codigo aqui
    let maior = lista.reduce((acc,index) => acc > index ? acc : acc = index);
    let result  = lista.filter(x => x >= 18 && x < maior)

    if(result.length === 0){
      console.log("CRESCA E APARECA")
    }else{
      console.log(parseInt(result))
    }
  }

  
let lista = [12,20,21]
solucao(lista)


