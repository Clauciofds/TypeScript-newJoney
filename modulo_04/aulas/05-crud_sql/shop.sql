create database shop;

CREATE TABLE "categories" (
  "id" serial NOT NULL,
  "description" text NOT NULL,
  "create_at" time NOT NULL DEFAULT now(),
  PRIMARY KEY ("id")
)
;

-- Configuração do fuso horário para 'America/Sao_Paulo'
SET TIME ZONE 'America/Sao_Paulo';

-- Criação da tabela "categories" com a coluna "create_at" do tipo timestamptz
CREATE TABLE "public"."categories" (
  "id" int4 NOT NULL,
  "description" text NOT NULL,
  "create_at" timestamptz NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY ("id")
);

CREATE TABLE "produts" (
  "id" serial NOT NULL,
  "name" text NOT NULL,
  "description" text,
  "price" int4 NOT NULL,
  "created_at" time NOT NULL DEFAULT now(),
  "categoty_id" int4 NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "products_categories_fk" FOREIGN KEY ("categoty_id") REFERENCES "categories" ("id")
)
;



-- Alterando o tipo de dado da coluna "created_at" para timestamptz
ALTER TABLE "categories"
ALTER COLUMN "create_at" SET DATA TYPE timestamptz;

alter table categories
add column "create_at" timestamptz NOT NULL DEFAULT current_timestamp;

-- Para alterar o nome de uma coluna
ALTER TABLE clientes RENAME COLUMN idade TO novo_nome;

alter table produts rename to products;

-- inserir dados em um tabela
insert into categories (description) values (
  'Cozinha'), ('Móveis'), ('Eletrodomésticos');
  
insert into categories (description) values
('Cama');


insert into products (name, price, description, category_id)
values ('Caneta', 1500, 'Azul', 2),
       ('Liquidificador', 2000000, '110 V', 5),
       ('Toalha de mesa', 10000, 'Tricó', 6);

Exemplo Completo:

SQL
-- Verificar fuso horário atual
SHOW timezone;

-- Alterar fuso horário do banco de dados (se necessário)
ALTER DATABASE meu_banco SET TIME ZONE TO 'America/Sao_Paulo';

-- Verificar definição da coluna
DESCRIBE minha_tabela;

-- Corrigir dados existentes (se necessário)
UPDATE minha_tabela
SET data_hora = data_hora AT TIME ZONE 'UTC' AT TIME ZONE 'America/Sao_Paulo';

-- Inserir novo dado com fuso horário explícito
INSERT INTO minha_tabela (data_hora)
VALUES ('2023-11-22 10:00:00 America/New_York');

-- Consultar dados convertidos para outro fuso horário
SELECT data_hora AT TIME ZONE 'UTC' FROM minha_tabela;

- alterar conteúdo da colunas
update products
set description = 'Caneta esferográfica azul'
where id = 6;

update products
set description = 'Sem descrição'
where description is null or description = '';

update products
set description = 'Potencia 500w', name = 'Liquedificador Turbo', price = 200000
where id = 7;

update products
set category_id = 5
where id = 2;




-- listar views criadas
SELECT 
    table_schema AS esquema,
    table_name AS views_cadastradas
FROM 
    information_schema.views
WHERE 
    table_schema NOT IN ('information_schema', 'pg_catalog')
ORDER BY 
    schema ASC, 
    view ASC;



