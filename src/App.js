import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem'; 
import { CreateTodoButton } from './CreateTodoButton';
import { CreateTodoModal } from './CreateTodoModal';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el sol', completed: false },
  { text: 'Cocinar', completed: true }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  console.log(searchValue)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>

      <TodoCounter
        completed={completedTodos} 
        total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed} 
          onDelete={() => setTodos(prev => prev.filter(t => t.text !== todo.text))} />
        ))}
      </TodoList>

      <CreateTodoButton 
        setTodos={setTodos}
      />

      < CreateTodoModal />

    </>
  );
}

export default App;