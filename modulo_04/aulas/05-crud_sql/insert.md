# Inserir registros em uma tabela
Para inserir registros em uma tabela, utilizamos o comando INSERT e para informar a tabela que os dados estão dispostos em colunas precisamos dos **backticks** ou aspas invertidas.

Usamos o comando INSERT INTO para inserir os dados e precisamos informar quais colunas receberão os dados e seus respectivos valores.

O exemplo abaixo adiciona um novo registro na tabela `users`.

```sql
INSERT INTO `users`(name, email, password)
VALUES ('Maria', 'maria@email.com', '0123455667'), ('Ana', 'ana@email.com', 'abc123');
```
Observe que a ordem dos dados informados para as values, seguem a mesma ordem das colunas da acima. É possível adicionar vários registros em uma única operação, da seguinte forma:
```SQL
INSERT INTO `users`(name, email, password)
VALUES ('Maria', 'maria@email.com', '0123455667'),
       ('João', 'joao@email.com', '12345678'),
       ('Ana', 'ana@email.com','abc12345');
```

