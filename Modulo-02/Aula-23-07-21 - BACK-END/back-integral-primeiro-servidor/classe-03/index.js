const express = require("express");
const app = express();

app.use(express.json());

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let aux = 0
let rodada = 0
app.get("/jogadores", (req,res) => {
    res.json(`É a vez de ${jogadores[aux]} jogar! Na Rodada: ${rodada}`)
    
    aux === jogadores.length-1 ? aux = 0 : aux++
    aux === 0 ? rodada++ : rodada
    
});



app.listen(3008)