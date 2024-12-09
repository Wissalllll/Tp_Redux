import React from 'react';
import TodoList from "./components/TodoList";
import { useSelector } from 'react-redux';


function TodoList({ todos, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
