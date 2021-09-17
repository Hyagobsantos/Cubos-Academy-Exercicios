const express = require("express");
const {proxJogador,removerJogador,adicionar} = require("./lista");
const app = express();
app.use(express.json());

app.get("/", proxJogador);
app.get("/remover", removerJogador)
app.get("/adicionar", adicionar)



app.listen(3008);




