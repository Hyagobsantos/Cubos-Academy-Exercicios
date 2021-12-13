const conexao = require("../conexao");
const securePassword = require("secure-password");
const jwt = require('jsonwebtoken');
const jwtSecret = require("../jwt_secret")
const pwd = securePassword();

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res
      .status(400)
      .json({ message: "Campos nome/email e senha Obrigatorios" });
  }

  try {
    const existe = await conexao.query(
      "select * from usuarios where email = $1",
      [email]
    );

    if (existe.rowCount !== 0) {
      return res.status(400).json({ message: "Email já Cadastrado" });
    }
  } catch (error) {
    return res.status(400).json({ erro: error });
  }

  try {
    const hash = (await pwd.hash(Buffer.from(senha))).toString("hex");
    const query = "insert into usuarios (nome,email,senha) values ($1,$2,$3)";
    const usuarios = await conexao.query(query, [nome, email, hash]);

    if (usuarios.rowCount === 0) {
      return res
        .status(400)
        .json({ message: "Não foi possivel Cadastrar Usuario" });
    }

    return res.status(201).json({ message: "Usuario Criado Com sucesso" });
  } catch (error) {
    return res.status(400).json({ erro: error });
  }
};

const login = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(401).json({ message: "Login e Senha São Obrigatorios" });
  }

  try {
    const existe = await conexao.query(
      "select * from usuarios where email = $1",
      [email]
    );

    if (existe.rowCount === 0) {
      return res.status(400).json({ message: "Login ou Senha Incorreto" });
    }

    const usuarios = existe.rows[0];

    const result = await pwd.verify(
      Buffer.from(senha),
      Buffer.from(usuarios.senha, "hex")
    );

    switch (result) {
      case securePassword.INVALID_UNRECOGNIZED_HASH:
      case securePassword.INVALID:
        return res.status(400).json({ message: "Login ou Senha Incorreto" });
      case securePassword.VALID:
        break;
      case securePassword.VALID_NEEDS_REHASH:
        try {
            const hash = (await pwd.hash(Buffer.from(senha))).toString("hex");
            const query = "update usuarios set senha = $1 where email = $2";
            await conexao.query(query, [hash,email]);
        } catch {
        }
    }

    const token = jwt.sign({
        id: usuarios.id,
        nome: usuarios.nome,
        email: usuarios.email
    }, jwtSecret, {
        expiresIn: '2h'
    });

    return res.send(token)
  } catch (error) {
    return res.status(400).json({ erro: error });
  }
};

module.exports = { cadastrarUsuario, login };
