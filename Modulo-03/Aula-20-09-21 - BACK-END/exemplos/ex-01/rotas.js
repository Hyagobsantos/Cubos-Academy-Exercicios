const express = require('express');
const autores = require('./controller/autores');
const livros = require('./controller/livros')

const rotas = express();

//autores
rotas.get('/autores', autores.listarAutores);
rotas.get('/autores/:id', autores.obterAutor);
rotas.post('/autores', autores.criarAutor);
rotas.put('/autores/:id', autores.editarAutor);
rotas.delete('/autores/:id', autores.excluirAutor);

//livros

rotas.get('/livros', livros.listarLivros);
rotas.get('/livros/:id', livros.oberLivro);
rotas.post('/livros', livros.criarLivro);
rotas.put('/livros/:id', livros.editarLivro);
rotas.delete('/livros/:id', livros.excluirLivro);

module.exports = rotas