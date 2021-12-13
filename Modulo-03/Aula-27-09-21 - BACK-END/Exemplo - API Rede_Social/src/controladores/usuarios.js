const conexao = require("../conexao");
const bcrypt = require("bcrypt");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome) {
    return res.status(404).json({ message: "O Campo nome é Obrigatorio" });
  }

  if (!email) {
    return res.status(404).json({ message: "O Campo email é Obrigatorio" });
  }

  if (!senha) {
    return res.status(404).json({ message: "O Campo senha é Obrigatorio" });
  }

  try {
    const queryConsultaEmail = "select * from usuarios where email = $1";
    const { rowCount: quantidadeUsuarios } = await conexao.query(
      queryConsultaEmail,
      [email]
    );

    if (quantidadeUsuarios > 0) {
      return res.status(400).json({message:"O email informado já Existe"});
    }

    const senhaCritp = await bcrypt.hash(senha, 10);

    const query = "insert into usuarios (nome,email,senha) values ($1,$2,$3)";

    const { rowCount } = await conexao.query(query, [nome, email, senhaCritp]);

    if (rowCount === 0) {
      return res.status(400).json({error:"Não foi possivel Cadastrar o usuario"});
    }

    return res.status(201).json({message: "Cadastro feito Com Sucesso"});
  } catch (error) {
    return res.status(error.message);
  }
};

module.exports = {
  cadastrarUsuario,
};
