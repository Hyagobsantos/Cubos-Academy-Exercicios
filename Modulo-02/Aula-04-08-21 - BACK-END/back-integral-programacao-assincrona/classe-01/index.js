const express = require("express");
const axios = require("axios");
const { response } = require("express");

const app = express();
app.use(express.json());

app.get("/pokemon", async (req,res) => {
    const inicio = req.query.offset;
    const limite = req.query.limit;

    const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=${limite}`);

    res.json(poke.data.results)

})

app.get("/pokemon/:param", async (req,res) => {
    const poke = req.params.param;

    if(!poke){
        res.status(404).json({erro:"Parametro não Informado"})
    }

    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`);

    const {id,name,height,weight,base_experience,forms,abilities,species} = pokemon.data;


    res.status(200)
    res.json({
        id:pokemon.data.id,
        name:pokemon.data.name,
        height:pokemon.data.height,
        weight:pokemon.data.weight,
        base_experience:pokemon.data.base_experience,
        forms:pokemon.data.forms,
        abilities:pokemon.data.abilities,
        species:pokemon.data.species,
    })
        
});


app.listen(3001);
