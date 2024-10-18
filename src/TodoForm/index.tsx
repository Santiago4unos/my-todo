import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

const TodoForm: React.FC = () => {
    const { todos, saveTodos, setOpenModal } = React.useContext(TodoContext);

    const handleKeyDown = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown') {
            // @ts-ignore
            if (event.key !== "Enter") {
                return;
            }
        }
        const inputElement = document.querySelector("#TodoForm-input") as HTMLInputElement;
        const inputValue = inputElement.value;
        if (inputValue === "") {
            alert("Por favor, agrega una tarea");
            return;
        }
        inputElement.value = "";
        const newTodos = [...todos, { text: inputValue, completed: false }];
        saveTodos(newTodos);
        setOpenModal(false);
    };

    return (
        <div className="TodoForm-container">
            <span
            className="close"
            onClick={() => {
                setOpenModal(false);
            }}
            >
            &times;
        </span>
            <h3>Agrega una nueva tarea</h3>
            <input type="text" id="TodoForm-input" autoFocus onKeyDown={handleKeyDown} />
            <button id="TodoForm-btn" onClick={handleKeyDown}>Agregar</button>
        </div>
    );
};

export { TodoForm };
