# SELECT

Para ler registros em uma tabela utilizamos o comando SELECT. Este é um dos comandos mais populares do SQL, responsável por realizar todos os tipos de consultas a dados em um banco de dados relacional.

O exemplo abaixo retorna todos os registros da tabela "users":

```sql
select * from users;
```

Como já aprendemos a consultar registros, vamos utilizar a letra R do CRUD para aprender sobre VIEWS. Visualizações, como são conhecidas, são uma maneira de armazenar consultas complexas e podem ser criadas usando o comando CREATE VIEW.

```SQL

create view list_users as
select * from users;
```
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.
Uma view pode ser consultada da seguinte forma:

```SQL
select * from list_users;
```
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.
O exemplo acima retorna a query armazenada na view 
``` “list_users”.```