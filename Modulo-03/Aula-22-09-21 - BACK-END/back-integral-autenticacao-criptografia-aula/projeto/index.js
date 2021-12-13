const express = require('express');
const rotas = require('./rotas');
const port = 3000

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(port, () => {
    console.log(`Rodando em Porta ${port}`)
});