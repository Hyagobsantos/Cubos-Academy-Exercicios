const express = require("express");
const controller = require("./controladores/instrutores")

const roteador = express();


//GET 
roteador.get("/instrutores", controller.consultarTodosInstrutores);

//GET/Id
roteador.get("/instrutores/:id" , controller.consultarUmInstrutor);

//POST - Cria um novo Recurso na coleçcao e gera um novo id

roteador.post("/instrutores", controller.criarUmInstrutor);

// PATCH - altera um update desse registro apenas se ele existir

roteador.patch("/instrutores/:id", controller.alterarInstrutor);

//PUT - altera um recurso se ele existir caso não exista ele cria um novo

roteador.put("/instrutores/:id", controller.substituirInstrutor);

//DELETE - exclui um recurso

roteador.delete("/instrutores/:id", controller.deletarUmInstrutor);

module.exports = roteador;