const knex = require("./conexao");

const getUsuarios = async (req, res) => {
  const usuarios = await knex("usuarios");

  if (usuarios.length == 0) {
    return res.status(404).json({ message: "Sem registros" });
  }

  return res.status(200).json(usuarios);
};

const createUsuario = async (req, res) => {
  const {nome,email,telefone,idade} = req.body;
  const cadastro = Date.now()

  if(!nome || !email || !telefone || !idade){
      return res.status(400).json({erro: "favor preencher os campos faltantes (nome,email,telefone,idade)"})
  }

  const novoUsuario = await knex('usuarios').insert({nome,email,telefone,idade,cadastro}).returning('*')

  if(novoUsuario.length != 1){
      return res.status(403).json({message: "Não foi possivel Cadastrar um novo Usuario"})
  }

  return res.status(201).json(novoUsuario)


};

const updateUsuario = async (req,res) => {

}

module.exports = { getUsuarios,createUsuario };
