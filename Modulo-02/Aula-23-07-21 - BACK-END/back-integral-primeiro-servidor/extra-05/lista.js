const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let aux = 0;
let rodada = 0;

function proxJogador(req,res){
    res.json({resultado : `É a vez de ${jogadores[aux]} jogar! na Rodada: ${rodada}`});

    aux === jogadores.length - 1 ? aux = 0 : aux++
    aux === 0 ? rodada++ : rodada
};

function removerJogador(req,res){
    const indice = req.query.indice;

    try{
       const excluid =  jogadores.splice(indice,1)
        if(excluid == ""){
            res.send(`Não existe jogador no índice informado ${indice} para ser removido.`)
        }else{
            res.send({jogadores})
        }
    }catch (err){
        res.status(400).json({erro:err})
    }
    
}

function adicionar(req,res) {
    const nomeRecebido = req.query.nome;

    const novo = nomeRecebido.charAt(0).toUpperCase() + nomeRecebido.substr(1).toLowerCase();

    const add = jogadores.push(novo)
    if(add == ""){
        res.send(`Não foi possivel add o Jogador ${novo} `)
    }else{
        res.send({jogadores})
    }
    
};

module.exports = {proxJogador,removerJogador,adicionar}