const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.get("/consulta/:cep", async (req,res) => {
    const cep = req.params.cep;
    
    if(!cep){
        res.status(400).json({ mensagem: "Um cep deve ser informado." });
        return;
    }

    const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
   
    res.json((endereco.data))
});

app.listen(3001);