const secret = require("../segredo");
const jwt = require("jsonwebtoken");
const conexao = require("../conexao");

const todasPostagens = async (req, res) => {
  try {
    const postagens = await conexao.query("select * from postagens");

    return res.status(200).json(postagens.rows);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const postagensUsuario = async (req, res) => {
  const { usuario } = req;

  try {
    const postagens = await conexao.query(
      "select * from postagens where id = $1",
      [usuario.id]
    );

    return res.status(200).json(postagens.rows);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const novaPostagem = async (req, res) => {
  const { texto } = req.body;
  const { usuario } = req;

  if (!texto) {
    return res.status(404).json({ message: "O Campo texto é Obrigatorio" });
  }

  try {
    const postagem = await conexao.query(
      "insert into postagens (usuarios_id, texto) values ($1, $2)",
      [usuario.id, texto]
    );

    if (postagem.rowCount === 0) {
      return res
        .status(400)
        .json({ message: "Não foi possivel realizar a postagem" });
    }

    res.status(200).json({ message: "Postagem Feita com Sucesso" });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualizarPostagem = async (req, res) => {
  const { texto } = req.body;
  const { usuario } = req;
  const { id: idPostagem } = req.params;

  if (!texto) {
    return res.status(404).json({ message: "O Campo texto é Obrigatorio" });
  }

  try {
    const postagemEncontrada = await conexao.query(
      "select * from postagens where id = $1 and usuarios_id = $2",
      [idPostagem, usuario.id]
    );

    if (postagemEncontrada.rowCount === 0) {
      return res.status(404).json({ message: "Postagem not found" });
    }

    const postagem = await conexao.query(
      "update postagens set texto = $1 where id = $2 and usuarios_id = $3",
      [texto, idPostagem, usuario.id]
    );

    if (postagem.rowCount === 0) {
      return res
        .status(400)
        .json({ message: "Não foi possivel realizar a atualizacao" });
    }

    res.status(200).json({ message: "Postagem atualizada com Sucesso" });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const excluirPostagem = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;

  try {
    const postagemEncontrada = await conexao.query(
      "select * from postagens where id = $1 and usuarios_id = $2",
      [id, usuario.id]
    );

    if (postagemEncontrada.rowCount === 0) {
      return res.status(404).json({ message: "Postagem not found" });
    }

    const { rowCount } = await conexao.query(
      "delete from postagens where id = $1",
      [id]
    );

    if (rowCount === 0) {
      return res.status(400).json({ erro: "Erro ao Excluir" });
    }

    return res.status(200).json({ message: "Postagem excluida com sucesso" });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  novaPostagem,
  atualizarPostagem,
  excluirPostagem,
  todasPostagens,
  postagensUsuario,
};
