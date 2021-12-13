const express = require("express");
const usuarios = require("./controladores/usuarios");
const login = require("./controladores/login");
const postagens = require("./controladores/postagens");
const { verificaLogin } = require("./filtros/verificaLogin");

const rotas = express();

//usuarios
rotas.post("/usuarios", usuarios.cadastrarUsuario);

//login
rotas.post("/login", login.login);

//feed
rotas.get("/", postagens.todasPostagens);

//middleware
rotas.use(verificaLogin);

//postagem
rotas.get("/post", postagens.postagensUsuario);
rotas.post("/post", postagens.novaPostagem);
rotas.patch("/post/atualizar/:id", postagens.atualizarPostagem);
rotas.delete("/post/:id", postagens.excluirPostagem);

module.exports = rotas;
