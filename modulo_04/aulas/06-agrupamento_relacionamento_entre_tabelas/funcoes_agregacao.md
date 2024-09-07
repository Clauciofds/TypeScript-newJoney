# Funções de agregação no SQL

As funções de agregação são operações que permitem obter informações resumidas de uma tabela ou conjunto de dados, como a média, soma, mínimo, máximo, contagem entre outros. Elas são usadas principalmente em consultas que retornam um conjunto de resultados.

- **COUNT** - Conta o número de linhas de uma tabela.
- **SUM** - Soma os valores em uma coluna numérica.
- **AVG** - Calcula a média aritmética dos valores em uma coluna numérica.
- **MIN** - Retorna o menor valor em uma coluna.
- **MAX** - Retorna o maior valor em uma coluna.

- Retorna a **quantidade de registros** da tabela products.
```sql
select count(id) from products;
```

Retorna a **quantidade de produtos** em estoque da categoria frutas.
```SQL
select sum(quantity) from products where category = "frutas";
```

Retorna a **média da idade** entre todas as pessoas cadastradas.
```SQL
select avg(age) from people;
```

Retorna o **valor do produto** mais barato da tabela products.
```SQL
select min(price) from products;
```

Retorna o **valor do produto** mais caro na tabela products.
```SQL
select max(price) from products;
```