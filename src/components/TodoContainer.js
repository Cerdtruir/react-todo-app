import React, { useState, useEffect } from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';
import { Route, Switch } from 'react-router-dom';

function TodoContainer() {
  const [todos, setTodos] = useState(getInitialTodos());

  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTask = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleEdit = (id, title) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    <div className='container'>
      <div className='inner'>
        <Header />
        <InputTodo addTask={addTask} />
        <TodosList
          handleChangeProps={handleChange}
          todos={todos}
          delTodo={delTodo}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default TodoContainer;
