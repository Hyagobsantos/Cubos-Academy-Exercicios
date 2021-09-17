const express = require("express");

const app = express();

let minuto = 0;
let segundo = 0;
let tempo = 0;

app.get("/", (req,res) => {
    res.send(`Tempo atual do cronômetro: ${minuto < 10 ? "0" + minuto: minuto} minutos e ${segundo < 10 ? "0" + segundo: segundo} segundos`)
});

app.get("/iniciar" , (req,res) =>{
    tempo = setInterval(() => {
        console.log(`${minuto} e ${segundo}`)
        segundo++
        if(segundo === 60){
            minuto++
            segundo = 0;
        }
    }, 1000)

    res.send("Cronômetro iniciado!")


    console.log(tempo)
})

app.get("/pausar", (req,res) => {
    clearInterval(tempo) 

    res.send("Cronômetro pausado!!")
});

app.get("/continuar" , (req,res) =>{
    tempo = setInterval(() => {
        console.log(`${minuto} e ${segundo}`)
        segundo++
        if(segundo === 60){
            minuto++
            segundo = 0;
        }
    }, 1000)

    res.send("Cronômetro continuando!")

})


app.get("/zerar", (req,res) => {
    minuto = 0
    segundo = 0
    tempo = 0 

    res.send("Cronômetro Zerado!!")
});


app.listen(8000);