import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {TodoSearch} from './TodoSearch';
import {CreateTodoButton} from './CreateTodoButton';
// import './App.css';

const todos = [
  {text: 'Chupar mango', completed: false},
  {text: 'Intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
