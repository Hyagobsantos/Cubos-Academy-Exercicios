function solucao(jogadores) {
    //seu codigo aqui
    let jogada1 = [];
    let jogada0 = [];
    for(let index of jogadores){
        if(index.jogada == 1){
            jogada1.push(index)
        }else{
            jogada0.push(index)
        }
    }
    
    if(jogada1.length === 1){
      console.log(jogada1[0].nome)
    }else if(jogada0.length == 1){
      console.log(jogada0[0].nome)
    }else{
      console.log("Ninguem")
    }
    
  }

  
  let jogadores = [
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 1
    },
    {
      "nome": "Beach",
      "jogada": 1
    },
    {
      "nome": "Laurel",
      "jogada": 1
    },
    {
      "nome": "Beatrice",
      "jogada": 1
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 1
    },
    {
      "nome": "Klein",
      "jogada": 1
    }
  ]

  solucao(jogadores)