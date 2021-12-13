const conexao = require("../conexao");

const listarLivros = async (req, res) => {
  try {
    const query = `
        select l.id, a.nome as nome_autor, l.nome, l.genero, l.editora, l.data_publicacao from livros l left join autores a on l.autor_id = a.id 
    `;
    const livros = await conexao.query(query);
    return res.status(200).json(livros.rows);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const oberLivro = async (req, res) => {
  const { id } = req.params;
  try {
    const livros = await conexao.query("select * from livros where id = $1", [
      id,
    ]);

    if (livros.rowCount === 0) {
      return res.status(400).json({ message: "livro não Encontrado" });
    }
    return res.status(200).json(livros.rows);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const criarLivro = async (req, res) => {
  const { autor_id, nome, genero, editora, data_publicacao } = req.body;

  try {
    const autorBuscado = await conexao.query(
      "select from livros where id = $1",
      [autor_id]
    );
    if (autorBuscado.rowCount !== 0) {
      return res.status(400).json({ message: "id_autor não existe" });
    }

    const livroCadatrado = await conexao.query(
      "insert into livros (autor_id, nome, genero,editora, data_publicacao) values($1,$2,$3,$4,$5)",
      [autor_id, nome, genero, editora, data_publicacao]
    );

    if (livroCadatrado.rowCount === 0) {
      return res
        .status(400)
        .json({ message: "Não foi possivel cadastrar o livro" });
    }
    return res.status(200).json({ message: "livro Cadastrado com sucesso" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const editarLivro = async (req, res) => {
  const { id } = req.params;
  const { autor_id, nome, genero, editora, data_publicacao } = req.body;
  try {
    const livros = await conexao.query("select * from livros where id = $1", [
      id,
    ]);

    if (livros.rowCount === 0) {
      return res.status(400).json({ message: "livro não Encontrado" });
    }

    const livroAtualizado = await conexao.query(
      "update livros set autor_id = $1, nome = $2, genero = $3, editora = $4, data_publicacao = $5 where id = $6",
      [autor_id, nome, genero, editora, data_publicacao, id]
    );

    if (livroAtualizado.rowCount === 0) {
      return res
        .status(400)
        .json({ message: "Não foi possivel atualizar o livro" });
    }
    return res.status(200).json({ message: "livro atualizado com sucesso" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const excluirLivro = async (req, res) => {
  const { id } = req.params;
  try {
    const livros = await conexao.query("select * from livros where id = $1", [
      id,
    ]);

    if (livros.rowCount === 0) {
      return res.status(400).json({ message: "livro não Encontrado" });
    }

    const deletaLivro = await conexao.query(
      "delete from livros where id = $1",
      [id]
    );

    if (deletaLivro.rowCount === 0) {
      return res
        .status(400)
        .json({ message: "não foi possivel deletar o livro" });
    }
    return res.status(200).json({ message: "livro Deletado com sucesso" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  listarLivros,
  oberLivro,
  criarLivro,
  editarLivro,
  excluirLivro,
};
