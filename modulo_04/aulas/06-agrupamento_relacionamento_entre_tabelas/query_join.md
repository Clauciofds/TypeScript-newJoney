# Query com JOIN

Para obter o nome e o email das pessoas e também o endereço associado retornando apenas os casos onde houve correspondência entre os campos "ID" (da tabela people) e o campo people_id (da tabela address). É possível personalizar a query selecionando colunas específicas e criar apelidos para o nome das tabelas.

```sql
SELECT people.*, address.*
FROM people
JOIN address ON people.id = address.people_id
WHERE people.id = 1;
```
| id | NAME | EMAIL | ID | PEOPLE_ID | ADDRESS |
|---|-------|-------|----|--------|---------|
1 | Hudson Brie | hudsonbrie@email.com | 23 | 1 | West Street Road New York City, NY 10001
1 | Hudson Brie | hudsonbrie@email.com | 47 | 1 | 456 South Avenue Street Los Angeles, CA 90003
1 | Hudson Brie | hudsonbrie@email.com | 49 | 1 | 789 East Boulevard Avenue Chicago, IL 60007

Para **evitar os problemas** como, **nome de colunas** duplicados, a query abaixo seleciona apenas as colunas específicas, que fazem sentido para o resultado esperado e cria apelidos, tanto para nome de colunas quanto para os nomes das tabelas. Observe:

```SQL
select p.id, p.name, p.email, a.id as address_id, a.address
from people as p
join address as a
on p.id = a.people_id
where p.id = 1;
```
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.
Agora o resultado seria algo do tipo:

Tabela

| ID | NAME | EMAIL | ADDRESS_ID | ADDRESS
|--|--|--|--|--|
1 | Hudson Borer | borer_hudson@yahoo.com | 23 | 9611-9809 West Rosedale Road 
1 | Hudson Borer | borer_hudson@yahoo.com | 47 | 4th Street 
1 | Hudson Borer | borer_hudson@yahoo.com | 49 | 1243 West Whitney Street

**Aliases SQL (AS)** pode ser usado para **criar apelidos** e tornar <span style="color:red;">a query mais legível</span>. Conforme o exemplo anterior, podemos observar que esses apelidos podem ser criados para os nomes de colunas e também para nome de tabelas.