select * from musicas 


--Aula01 Sobre Where

select * from musicas where tempo > 200 and tempo < 300

select * from musicas where compositor = 'Schubert' and tempo < 500

select * from musicas where compositor = 'Schubert' and tempo <= 368 and tempo < 500

select * from musicas where compositor = 'Schubert' and tempo between 368 and 500

select * from musicas where compositor is null

select * from musicas where compositor is not null


-- Aula02 Operadores Mais Ultilizados

--and, or, not = retorno true,false ou null

--predicados 
--Between a and b
--is null
--is not null

select * from musicas limit 3 --limit tras numero passado de registros

select * from musicas offset 3 --offset tras todos os registros excluindo o numero passado

select * from musicas limit 10 offset 10


-- aula Order by (ordenada os itens) 

select * from musicas order by id desc --ordenacao decrescente desc -- asc já padrão 

select * from musicas order by compositor desc, tempo asc

--exercicio 1

--faça uma consulta no banco de dado "orquestra" que retorna 10 musicas 
--em que o tempo de execução seja maior que 2 minutos 

select * from musicas where tempo > 120 limit 10

select * from musicas where tempo / 60 > 2 limit 10

--exercicio 2

-- Faça uma consulta no banco de dados "orquestra" que retorna
-- os ultimos 20 registros de acordo com o indentificador

select * from musicas order by id desc limit 20

--exercicio 3

--Faça uma consulta no banco de dados "orquestra" que retorna todos os registros
-- somente com os campos "compositor", "composicao" e "tempo" onde o tempo seja 
-- entre 2 e 5 minutos e o compositor não seja "Mozart"

select compositor, composicao, tempo from musicas where compositor != 'Mozart' and tempo between 120 and 300

select compositor, composicao, tempo from musicas where tempo between 120 and 300 and compositor <> 'Mozart'

select compositor, composicao, tempo from musicas where tempo / 60 between 2 and 5 and compositor <> 'Mozart'


--aula Ordem Sintaxe 

--1. Select  | 1. from
--2. from    | 2. Where
--3. Where   | 3. Select
--4. Order by| 4 Order by



--aula Distinct (tras todos os registros sem repetir o valor do compo 2x)

select distinct compositor,composicao from musicas where compositor is not null


--aula like 

select * from musicas where compositor like '%a%'

select * from musicas where compositor like '%rt'


--aula like com underline

select * from musicas where compositor like '_ozart'


--aula ilike (busca independete se for maiuscula ou minuscula)

select * from musicas where upper(compositor) like 'MOZ%'

select * from musicas where compositor ilike 'MOZ%' 

select * from musicas where compositor not ilike 'MOZ%' 











