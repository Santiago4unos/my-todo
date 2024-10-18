import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

const TodoCounter: React.FC = () => {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);
    return (
        <h1>
            Has completado {completedTodos} de {totalTodos} TODOs
        </h1>
    );
}

export { TodoCounter };