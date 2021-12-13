const conexao = require("../conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require('../segredo')

const login = async (req, res) => {
  const { email, senha } = req.body;

  if (!email) {
    return res.status(404).json({ message: "O Campo email é Obrigatorio" });
  }

  if (!senha) {
    return res.status(404).json({ message: "O Campo senha é Obrigatorio" });
  }

  try {
    const queryVerificaEmail = "select * from usuarios where email = $1";
    const { rows, rowCount } = await conexao.query(queryVerificaEmail, [email]);

    if (rowCount === 0) {
      return res.status(404).json({ error: "Usuario não encontrado" });
    }

    const usuario = rows[0];

    const senhaVerificada = await bcrypt.compare(senha, usuario.senha);

    if (!senhaVerificada) {
      return res.status(400).json({ error: "Email e Senha não Confere" });
    }

    const token = jwt.sign({ id: usuario.id }, secret, {
      expiresIn: "8h",
      
    });

    const { senha: senhaUsuario, ...dados } = usuario;

    return res.status(200).json({
      usuario: dados,
      token,
    });
  } catch (error) {
    return res.status(error.message);
  }
};

module.exports = {
  login,
};
