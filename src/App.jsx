import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1>Ma Liste de Tâches</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
