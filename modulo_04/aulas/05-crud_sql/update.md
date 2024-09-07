# UPDATE

Para atualizar registros em uma tabela utilizamos o comando UPDATE. Numa atualização é possível atualizar apenas uma coluna ou quantas colunas for necessário e também mais de um registro especificando, então, a condição ou atualizando todos os registros caso não haja condição.

O exemplo abaixo mostra como **atualizar o nome e o email** do registro com id igual a 2:

```sql
update users
set name = 'Maria Angelica', email = 'me@email.com'
where id = 2;
```

O exemplo abaixo **não foi passado a condição**. O resultado da operação irá atualizar o nome e o email de **todos os registros** da tabela para os valores informados.
**Essa ação não pode ser revertida**.

```SQL
update users
set name = 'Maria Angelica', email = 'me@email.com';
```