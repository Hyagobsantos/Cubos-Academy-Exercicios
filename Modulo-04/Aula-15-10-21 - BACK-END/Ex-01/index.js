const express = require("express");
const res = require("express/lib/response");
const knex = require("./conexao");
const route = require("./rotas");

const app = express();

app.use(express.json());
// app.use(route);

app.get('/', async (req,res) => {
  const agenda = await knex('agenda');
  return res.json(agenda)
})

app.get('/anotacoes', async (req,res) => {
  const anotacoes = await knex('anotacoes').join('agenda', 'anotacoes.agenda_id', 'agenda.id').select('anotacoes.*', 'agenda.nome').debug();

  return res.json(anotacoes)
})

app.post('/:id', async (req,res) => {
  const {id} = req.params;
  const {nota} = req.body;  

  const anotacoes = await knex('anotacoes').insert({agenda_id: id, nota}).returning('*')

  return res.json(anotacoes);
})

app.listen(3000);
