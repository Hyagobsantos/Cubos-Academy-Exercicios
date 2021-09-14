function solucao(precos) {
    //seu codigo aqui
    let maisBarato = precos.reduce((acc,index)=> acc > index ? acc = index : acc)
    let precototal = precos.reduce((acc,index)=> acc + index)
  
    if(precos.length < 3){
      console.log(precototal)
    }else{
      console.log(precototal - maisBarato /2)
    }
  }

let precos = [200,150,50,100]
solucao(precos)

