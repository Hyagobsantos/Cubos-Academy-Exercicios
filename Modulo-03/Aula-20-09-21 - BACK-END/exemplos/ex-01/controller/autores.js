const conexao = require("../conexao");

const listarAutores = async (req, res) => {
  try {
    const { rows: listaDeAutores } = await conexao.query(
      "select * from autores"
    );

    for (const autor of listaDeAutores) {
      const { rows: livros } = await conexao.query(
        "select * from livros where autor_id = $1",
        [autor.id]
      );
      autor.livros = livros;
    }
    return res.status(200).json(listaDeAutores);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const obterAutor = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows: listaDeAutores, rowCount: contagem } = await conexao.query(
      "select * from autores where id = $1",
      [id]
    );
    if (contagem === 0) {
      return res.status(404).json({ message: "Autor não Encontrado" });
    }
    return res.status(200).json(listaDeAutores);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const criarAutor = async (req, res) => {
  const { nome, idade } = req.body;

  if (!nome) {
    return res.status(400).json({ message: "O campo nome é Obrigatorio" });
  }

  try {
    const autor = await conexao.query(
      "insert into autores (nome,idade) values ($1, $2)",
      [nome, idade]
    );

    if (autor.rowCount === 0) {
      return res
        .status(400)
        .json({ message: "Não foi possivel Cadastrar o Autor" });
    }

    return res.status(201).json({ message: "Autor Cadastrado Com Sucesso" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const editarAutor = async (req, res) => {
  const { id } = req.params;
  let { nome, idade } = req.body;
  try {
    const autor = await conexao.query("select * from autores where id = $1", [
      id,
    ]);
    if (autor.rowCount === 0) {
      return res.status(404).json({ message: "Autor não Encontrado" });
    }

    if (!nome) {
      nome = autor.rows[0].nome;
    }

    const autorAtualizado = await conexao.query(
      "update autores set nome = $1, idade = $2 where id = $3",
      [nome, idade, id]
    );

    if (autorAtualizado.rowCount === 0) {
      return res
        .status(404)
        .json({ message: "Não foi possivel atualizar o autor" });
    }

    return res.status(200).json({ message: "Autor Atualizado Com sucesso" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const excluirAutor = async (req, res) => {
  const { id } = req.params;

  try {
    const autor = await conexao.query("select * from autores where id = $1", [
      id,
    ]);
    if (autor.rowCount === 0) {
      return res.status(404).json({ message: "Autor não Encontrado" });
    }

    const excluirAutor = await conexao.query(
      "delete from autores where id = $1",
      [id]
    );

    if (excluirAutor.rowCount === 0) {
      return res
        .status(404)
        .json({ message: "Não foi possivel Excluir o autor" });
    }

    return res.status(200).json({ message: "Autor Excluido Com sucesso" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  listarAutores,
  obterAutor,
  criarAutor,
  editarAutor,
  excluirAutor,
};
