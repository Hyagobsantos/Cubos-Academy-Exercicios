const express = require("express");
const roteador = require("./roteador");
const {logarRequisicao,validarEntrada} = require("./intermediarios")


const app = express();
app.use(express.json()); 
app.use(logarRequisicao)
app.use(validarEntrada);
app.use(roteador);

app.listen(8000);