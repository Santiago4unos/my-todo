import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem'; 
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import React from "react";

const AppUI: React.FC = () => {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        todos,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    const handleKeyPress = React.useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpenModal(false);
            }
            if (event.ctrlKey && event.key === ".") {
                // @ts-ignore
                setOpenModal(prevState => !prevState);
            }
        }, [setOpenModal]
    );

    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
        document.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <>
            <TodoCounter />
            <TodoSearch />
            
            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && todos.length === 0) && <EmptyTodos />}
                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)} 
                    skeleton={false}
                />
                ))}
            </TodoList>
    
            <CreateTodoButton />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <p className="tip">Psst. Puedes abrir el modal usando Ctrl + .</p>
        </>
    );
}

export { AppUI };