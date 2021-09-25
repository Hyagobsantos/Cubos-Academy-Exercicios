const express = require('express');
const axios = require('axios').default;

const app = express();

app.get('/descrever/:pacote', async (req,res) => {
    const pacote = req.params.pacote;
    try {
        const resultPesquisa = await axios.get(`https://registry.npmjs.com/${pacote}`)
        res.status(200).json({description:resultPesquisa.data.description})
     }
     catch (e) {
        res.status(400).json({erro:e})
     }
})

app.listen(3000)