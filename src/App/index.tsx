import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
import React from 'react';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;