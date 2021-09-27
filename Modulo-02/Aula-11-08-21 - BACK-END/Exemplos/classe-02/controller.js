const livros = require("./bd_livros");
const fs = require("fs");

const validaLivro = (livro) => {
  if (!livro.titulo) {
    return "Campo titulo não informado";
  }
  if (!livro.autor) {
    return "Campo autor não informado";
  }
  if (!livro.ano) {
    return "Campo ano não informado";
  }
  if (!livro.numPaginas) {
    return "Campo numPaginas não informado";
  }
};

const alllivros = (req, res) => {
  res.status(200).json(livros);
};

const livrosbyId = (req, res) => {
  const id = Number(req.params.id);

  const buscar = livros.find((x) => x.id === id);
  if (!buscar) {
    res.status(404).json({ mensagem: "Recurso buscado não encontrado" });
    return;
  }
  res.status(200).json(buscar);
};
let aux = 3;
const createLivro = (req, res) => {
  const validar = validaLivro(req.body);

  if (validar) {
    res.status(400).json({ mensagem: validar });
    return;
  }

  if (livros.find((x) => x.titulo === req.body.titulo)) {
    res.status(400).json({ mensagem: "Titilo Já Cadastrado" });
    return;
  }

  const novoLivro = {
    id: aux,
    titulo: req.body.titulo,
    autor: req.body.autor,
    ano: req.body.ano,
    numPaginas: req.body.numPaginas,
  };

  livros.push(novoLivro);
  aux++;

  novoRegistro = JSON.stringify(livros, null, 2);
  fs.writeFileSync("./bd_livros.js", "module.exports = " + novoRegistro);

  res.status(201).json(novoLivro);
};

const substituirLivro = (req, res) => {
  const id = Number(req.params.id);
  const validar = validaLivro(req.body);

  if (validar) {
    res.status(400).json({ mensagem: validar });
    return;
  }

  if (id != req.body.id) {
    res.status(400).json({
      mensagem: "o parametro id deve ser igual a id passado no Corpo",
    });
  }

  const buscar = livros.find((x) => x.id === id);
  if (buscar) {
    buscar.titulo = req.body.titulo;
    buscar.autor = req.body.autor;
    buscar.ano = req.body.ano;
    buscar.numPaginas = req.body.numPaginas;
    res.status(200).json(buscar);
  } else {
    const novoLivro = req.body;
    livros.push(novoLivro);
    aux++;
    res.status(201).json(novoLivro);
  }

  novoRegistro = JSON.stringify(livros, null, 2);
  fs.writeFileSync("./bd_livros.js", "module.exports = " + novoRegistro);
};

const alterarLivro = (req, res) => {
  const id = Number(req.params.id);

  const buscar = livros.find((x) => x.id === id);

  if (!buscar) {
    res.status(404).json({ mensagem: "Recurso buscado não encontrado" });
    return;
  }

  const validar = validaLivro({
    titulo: req.body.titulo ?? buscar.titulo,
    autor: req.body.autor ?? buscar.autor,
    ano: req.body.ano ?? buscar.ano,
    numPaginas: req.body.numPaginas ?? buscar.numPaginas,
  });

  if (validar) {
    res.status(400).json({ mensagem: validar });
    return;
  }

  if (req.body.titulo != undefined) buscar.titulo = req.body.titulo;
  if (req.body.autor != undefined) buscar.autor = req.body.autor;
  if (req.body.ano != undefined) buscar.ano = req.body.ano;
  if (req.body.numPaginas != undefined) buscar.numPaginas = req.body.numPaginas;

  novoRegistro = JSON.stringify(livros, null, 2);
  fs.writeFileSync("./bd_livros.js", "module.exports = " + novoRegistro);

  res.json(buscar);
};

const deletar = (req, res) => {
  const id = Number(req.params.id);

  const buscar = livros.find((x) => x.id === id);
  if (!buscar) {
    res.status(404).json({ mensagem: "Recurso buscado não encontrado" });
    return;
  }

  let index = 0;
  for (let i in livros) {
    if (livros[i].id === id) {
      index = i;
    }
  }

  livros.splice(index, 1);
  novoRegistro = JSON.stringify(livros, null, 2);
  fs.writeFileSync("./bd_livros.js", "module.exports = " + novoRegistro);
  res.status(200).json(buscar);
};

module.exports = {
  alllivros,
  livrosbyId,
  createLivro,
  substituirLivro,
  alterarLivro,
  deletar,
};
