create database rede_social

--3 tabelas e 3 relaçoes 

--usuarios
--postagens
--comentarios

create table usuarios(
	username text not null primary key,
  	nome text not null,
    data_de_nascimento date
)

create table postagens (
	id uuid not null primary key,
    datahora_de_criacao timestamp not null,
    conteudo text not null,
    autor text not null references usuarios(username)
)

create table comentarios (
	id uuid not null primary key,
    datahora_de_criacao timestamp not null,
    datahora_de_edicao timestamp,
    conteudo text not null,
    autor text not null references usuarios(username),
    id_postagem uuid not null references postagens(id)
)

insert into usuarios values ('@putacaida', 'vagabunda', null)


insert into postagens values ('c2083aff-2fd5-4ea2-9ca9-1f189fa201a0', now(), 'fala ae bichooo!!', '@putacaida')


--inner join 

select id,name,abstract from movies join movie_abstracts_en on movies.id = movie_abstracts_en.movie_id where name ilike 'star wars%'

--left join 

select id,name,movie_abstracts_en.abstract as abstract_en, movie_abstracts_es.abstract as abstract_es from movies 
left join movie_abstracts_en on movies.id = movie_abstracts_en.movie_id
left join movie_abstracts_es on movies.id = movie_abstracts_es.movie_id
where name ilike 'star wars%'



select 
--	movies.id, movies.name, categories.name 
	categories.name, sum(runtime)
from movies
left join movie_categories on movies.id = movie_categories.movie_id
left join categories on movie_categories.category_id = categories.id
group by categories.name
order by sum(runtime) desc



--where 
--	categories.name = 'Academy Award Winner'


select movies.name,count(*)
	from movies 
  join casts on movies.id = casts.movie_id
  join people on people.id = casts.person_id
  where movies.kind = 'movie'
  group by movies.name
  order by count(*) desc
  
  
  select people.name,count(*)
	from movies 
  join casts on movies.id = casts.movie_id
  join people on people.id = casts.person_id
  where movies.kind = 'movie'
  group by people.name
  order by count(*) desc
  
  