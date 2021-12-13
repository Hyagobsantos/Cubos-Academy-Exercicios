 //conexao.query('select * from agenda')
  //   const agenda = await knex("agenda").debug();
  //   const agenda = await knex.raw("select * from agenda");
  //   const agenda = await knex("agenda").where("id", 5).debug();
  //   const agenda = await knex("agenda").where("id", "!=", 5).debug();
  //   const agenda = await knex("agenda").where({ id: 9, nome: "Julian Swanson" }).debug();

  //select * from agenda where email is null
  //const agenda = await knex("agenda").whereNull("email").debug();
  //select * from agenda where email is not null
  //const agenda = await knex("agenda").whereNotNull("email").debug();
  //select * from agenda where id between 5 and 10
  //const agenda = await knex("agenda").whereBetween('id', [1,10]).debug();
  //const agenda = await knex("agenda").whereBetween('id', [1,10]).orderBy('id', 'desc').debug();
  //const agenda = await knex("agenda").distinct('email', 'nome').debug();

  //select email from agenda group by email
  //const agenda = await knex("agenda").select('email').groupBy('email').count().debug();
  //const agenda = await knex("agenda").limit(5).offset(2).debug();

  //const agenda = await knex("agenda").whereNull("email").count().debug(); //count
  //const agenda = await knex("agenda").whereNull("email").sum("id").debug(); //sum
  //const agenda = await knex("agenda").whereNull("email").avg("id").debug(); //avg - media
  //const agenda = await knex("agenda").whereNull("email").min("id").debug(); //min - minimo
  //const agenda = await knex("agenda").whereNull("email").max("id").debug(); //max - maximo


  app.get("/", async (req, res) => {
    //1
   //const farmacia = await knex("farmacia").count().debug();
 
   //2
   //const usuario = await knex('usuarios').min('idade as Usuario_Mais_Novo').debug();
 
   //3
   //const categoria = await knex('farmacia').select('categoria').whereNotNull('categoria').sum('estoque as Estoque').groupBy('categoria').debug()
 
   //4
   //const categoria = await knex('farmacia').whereNull('categoria').count()
   
   //5
   //const categoria = await knex('farmacia').select('categoria').whereNotNull('categoria').count().groupBy('categoria').debug()
 
   //6
   // const usuario = await knex('usuarios').select('idade').where('idade', '>=', '18').count('id').groupBy('idade').debug()
 
   const hyago = {
     nome:'Hyago Bezerra',
     email:'hyago@gmail.com',
     telefone:'(11) 982244243'
   }
   const pedro = {
     nome:'pedro Bezerra',
     email:'pedro@gmail.com',
     telefone:'(11) 954545453'
   }
    
   // const insert = await knex('agenda').returning(['id','nome']).insert(hyago)
 
   const insert = await knex('agenda').returning('*').insert([hyago,pedro])
 
   if(!insert){
     return res.status(400)
   }
 
   return res.status(201).json(insert);
 });
 
 app.put('/:id', async (req,res) => {
   const {nome,email,telefone} = req.body;
   const {id} = req.params;
 
   const agendaAtualizada = await knex('agenda').update({nome,email,telefone}).where({id: id}).returning('*');
 
   return res.json(agendaAtualizada);
 
 })
 
 app.delete('/:id', async (req,res) => {
   const {id} = req.params;
   const deleteRegistro = await knex('agenda').delete().where({id: id})
 
   if(deleteRegistro != 1){
     return res.status(400).json({message: "não foi possivel Excluir o Registro"})
   }
   
   return res.status(200).json({message: "Excluido Com Sucesso"})
 })
 