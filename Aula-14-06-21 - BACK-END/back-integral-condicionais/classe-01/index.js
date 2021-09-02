const jogada1 = "tesoura"
const jogada2 = "pedra"

//seu código aqui

if(jogada1 === "pedra" && jogada2 === "tesoura"){
    console.log(`Jogador1 ganhou jogando ${jogada1}`)
}else if(jogada1 === "papel" && jogada2 === "pedra"){
    console.log(`Jogador1 ganhou jogando ${jogada1}`)
}else if(jogada1 === "tesoura" && jogada2 === "papel"){
    console.log(`Jogador1 ganhou jogando ${jogada1}`)
}else if (jogada1 === jogada2){
    console.log(`O jogo Terminou em empate com o Jogador1 jogando ${jogada1} e o jogador2 jogando ${jogada2}`)
}else{
    console.log(`Jogador2 ganhou jogando ${jogada2}`)
}