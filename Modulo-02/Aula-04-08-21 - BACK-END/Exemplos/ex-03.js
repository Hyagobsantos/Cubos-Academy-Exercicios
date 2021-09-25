const fs = require('fs');

// const conteudo = fs.readFileSync("ex-03.txt");
// fs.writeFileSync("novoTexto.txt", conteudo);

fs.readFile('./ex-03.txt', (err,data) => {
    if(err){
        console.log("erro",err)
    }else{
        fs.writeFile('novoTexto.txt', data, (err) => {
            if(err){
                console.log(console.log("Erro ao Escrever", err))
            }else{
                console.log("Escreveu Com Sucesso!")
            }
        })
        fs.writeFile('novoTexto2.txt', data, (err) => {
            if(err){
                console.log(console.log("Erro ao Escrever", err))
            }else{
                console.log("Escreveu Com Sucesso2!")
            }
        })
    }
});



