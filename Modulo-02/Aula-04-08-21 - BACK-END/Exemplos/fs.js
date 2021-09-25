const fs = require('fs');

// console.log(fs.readFileSync('./a.txt').toString());

console.log("Antes de ler")

fs.readFile('./a.txt', (err,data) => {
    if(err){
        console.log("Deu Erro", err);
    }else{
        console.log(data.toString())
    }
})

console.log("dps de ler")