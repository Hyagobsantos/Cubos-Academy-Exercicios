const jogada1 = 5; //- impar 
const jogada2 = 3; //- par

//seu código aqui

let soma = jogada1 + jogada2;

if(soma % 2 === 0){
    console.log(`O vencedor é quem Escolheu Par nesse caso o jogador que jogou ${jogada2}`)
}else{
    console.log(`O vencedor é quem Escolheu Impar nesse caso o jogador que jogou ${jogada1}`) 
}
