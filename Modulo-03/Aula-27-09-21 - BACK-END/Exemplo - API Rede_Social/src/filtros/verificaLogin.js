const secret = require("../segredo");
const jwt = require("jsonwebtoken");
const conexao = require("../conexao");

const verificaLogin = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(404).json({ message: "Token não informado" });
  }

  try {
    const token = authorization.replace("Bearer", "").trim();

    const { id } = jwt.verify(token, secret);
    const queryUsuario = "select * from usuarios where id = $1";
    const { rows, rowCount } = await conexao.query(queryUsuario, [id]);

    if (rowCount === 0) {
      return res.status(404).json({ message: "Usuario não encontrado" });
    }

    const { senha, ...usuario } = rows[0];
    req.usuario = usuario;

    next();
  } catch (error) {
    return res.status(error.message);
  }
};

module.exports = {verificaLogin}
