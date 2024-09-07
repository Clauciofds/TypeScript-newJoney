# Relacionamento 1:1

O relacionamento de um para um (1:1) acontece quando um registro de uma tabela se relaciona com um e apenas um registro em outra tabela e vice-versa.

Observe a imagem a seguir:
| Tabela 01 | | Tabela 02 |
|--|--|--|
| Pessoa 1--->| Possui 1--->|CPF |
| CPF 1--->|Pertence 1--->|Pessoa

No diagrama acima temos um relacionamento de um para um, onde um registro da tabela pessoa possui ligação com apenas um registro da tabela CPF e, ao contrário, um registro da tabela CPF pertence apenas a um registro da tabela pessoa.

# Relacionamento 1:N

O relacionamento de um para muitos (1:N) acontece quando um registro de uma tabela se relaciona com zero, um ou vários registros de outra tabela e cada registro pertence a apenas um registro na tabela com a chave primária.

Observe a imagem a seguir:
| Tabela 01 | | Tabela 02 |
|--|--|--|
|Produtos 1--->|Possui--->|N Fotos
|Fotos 1--->|Pertence--->|1 Produtos

No diagrama acima temos o relacionamento de um para muitos, onde um registro da tabela produtos possui ligação com 'N' registros da tabela fotos. No contrário, pode não ter nenhum, um ou vários produtos para uma foto registrada em outra parte apenas no registro da tabela produtos.

# Relacionamento N:N

O relacionamento de muitos para muitos (N:N) acontece quando um registro de uma tabela se relaciona com zero, um ou vários registros em outra tabela, mas cada registro relacionado nesta outra tabela também se relaciona com zero, um ou vários registros da outra tabela. Uma característica importante do relacionamento de N:N é que precisa existir uma tabela de ligação entre as tabelas relacionadas.

Observe a imagem a seguir:
| Tabela 01 | | Tabela 02 |
|--|--|--|
|Produtos 1--->|Possui--->|N Categorias
|Categorias 1--->|Possui--->|N Produtos

No diagrama acima temos um relacionamento de muitos para muitos, onde um registro da tabela produtos possui ligação com <span style="color: red;">N's registros da tabela categorias.</span> Ao contrário, um registro da tabela categorias também possui ligação com <span style="color:red;">N's registros da tabela produtos.</span>

