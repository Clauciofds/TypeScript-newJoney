# GROUP BY

O comando GROUP BY no SQL é utilizado para agrupar linhas de uma tabela com base em uma ou mais colunas. Ele é usado em conjunto com funções de agregação, como COUNT, SUM, AVG, MIN ou MAX, para calcular valores de uma ou mais colunas em cada grupo.

Imagine que seja necessário obter a quantidade de produtos agrupados por categoria, onde cada categoria é um campo da tabela, a query ficaria da seguinte forma:

```sql
SELECT category, COUNT(id) FROM products GROUP BY category;
```

O resultado seria algo do tipo:

Tabela

| CATEGORIA	| COUNT |
|---|---|
| Frutas |	123 |
| Enlatados	| 29 |
| Bebidas |	456 |