const estradas = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false
  ]

  let aux = 0;
  let lista = [];
  let ultValor = [];

  for(let i of estradas){
    if(i){
        lista.push(aux);
        aux++
        ultValor.push(aux) 
    }else{
        while(lista.length != 0){
            lista.pop()
            aux = 0
        }
    }
  }

  const resultado = ultValor.reduce((acc,index) => acc > index ? acc : acc = index)

 if(resultado > 6){
     console.log(resultado)
 }else{
    console.log("SEM MEDALHA") 
 }

  