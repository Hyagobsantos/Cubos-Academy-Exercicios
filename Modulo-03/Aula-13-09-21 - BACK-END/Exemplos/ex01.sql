Drop table if exists produtos

create table produtos (
	id serial primary key,
    nome varchar(60) not null unique,
    descricao text,
    preco integer not null,
    categoria varchar(20) not null,
    estoque integer not null,
    ativo boolean default true,
    data_cadastro timestamptz not null
)

alter table produtos add unique(nome)

alter table produtos alter column data_cadastro drop not null 

alter table produtos drop column descricao

alter table produtos add column descricao text

insert into produtos (nome,descricao,preco,categoria,estoque) values ('teste','teste teste', 2344,'teste',12)

alter table produtos alter column data_cadastro set default now()

alter table produtos rename column preco to valor



update produtos set nome = 'Pedra Lascada' where id = 6

update produtos set ativo = false,categoria = 'camisa' where id = 3

update produtos set ativo = false, estoque = 0

delete from produtos where id = 4









