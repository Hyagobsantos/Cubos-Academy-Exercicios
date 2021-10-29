select count(*) from usuarios --retorna o numero de usuarios cadastrados 

select count(*) as quantidade from usuarios 

--concat 

select nome || ' - ' || email as Concat from usuarios


select concat(nome, '-', email) as "Nome Email" from usuarios

--avg 

select avg(idade) from usuarios

--round arredonda qualquer numero dentro as chaves 

select round(avg(idade)) from usuarios

select round(avg(idade), 2) from usuarios

--min e max

--forma sem min e max
select idade from usuarios order by idade desc limit 1;

select idade from usuarios order by idade asc limit 1;

--usando min

select min(idade) as idade from usuarios
select min(cadastro) as cadastro from usuarios
select min(nome) as nome from usuarios

--usando max

select max(idade) as idade from usuarios
select max(cadastro) as cadastro from usuarios
select max(nome) as nome from usuarios

--sum 

select sum(id) from usuarios


--cast 

select '123'::int

select '12.3'::float

select '2020-12-17'::date

select '2020-12-17 06:04:33'::time

select '2020-12-17 06:04:33'::timestamp

select cast('123' as int);

select cast('2020-12-17 06:04:33' as timestamp)

select nome, cast(cadastro as timestamp) from usuarios


--now 

select * from agenda where cast(agendamento as date) > now()

select now();


--age 

select age(now(), '1995-03-05');

select age(cast('1995-03-05' as timestamp));

--coalesce 

select concat(id,'-',nome,'-', coalesce(telefone, 'não possui')) from usuarios order by id

select coalesce()


--group by

select idade, count(*) from usuarios where idade > 50 group by idade 

select cast(cadastro as date), count(*) from usuarios group by cast(cadastro as date)


--exercicio1 

select categoria, count(*) as quantidade, sum(estoque) from farmacia group by categoria


