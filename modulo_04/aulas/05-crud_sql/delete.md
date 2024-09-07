# DELETE

Para **excluir registros** em uma tabela utilizamos o comando `DELETE`. Todos os registros excluídos devem ser informados usando condições ou não operação de exclusão acontece.

O exemplo abaixo **exclui o registro com id igual a 2**:

```sql
DELETE FROM usuarios WHERE id = 2;
```

Caso o **registro deletado** tenha algum tipo de **relacionamento** com outra tabela e o evento de exclusão foi definido como **CASCADE**, todos os seus relacionamentos na tabela relacionada serão excluídos.

O exemplo abaixo **não foi passado por condição**. O resultado da operação irá **excluir todos os registros** da tabela. **Essa ação não pode ser revertida**.

```SQL
DELETE FROM usuarios;
```