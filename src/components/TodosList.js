import React from 'react';
import TodoItem from './TodoItem';

function TodosList({ todos, handleChangeProps, delTodo, handleEdit }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          delTodo={delTodo}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
}

export default TodosList;
