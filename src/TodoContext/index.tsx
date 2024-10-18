import React from "react";
import { useLocalStorage } from './useLocalStorage';

interface Todo {
    text: string,
    completed: boolean
}

interface TodoContextProps {
    todos: Array<Todo>,
    loading: boolean,
    error: boolean,
    completedTodos: number,
    totalTodos: number,
    searchValue: string,
    setSearchValue: (text: string) => void,
    searchedTodos: Array<Todo>,
    completeTodo: (text: string) => void,
    deleteTodo: (text: string) => void,
    saveTodos: (newItem: Todo[]) => void,
    openModal: boolean,
    setOpenModal: (value: boolean) => void
}

const TodoContext = React.createContext<TodoContextProps>({
    todos: [],
    loading: false,
    error: false,
    completedTodos: 0,
    totalTodos: 0,
    searchValue: "",
    setSearchValue: () => {},
    searchedTodos: [],
    completeTodo: () => {},
    deleteTodo: () => {},
    saveTodos: () => {},
    openModal: false,
    setOpenModal: () => {}
});

function TodoProvider({children}: {children: React.ReactNode}) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage<Todo[]>("TODOS_V1", []);
    const [searchValue, setSearchValue] = React.useState<string>("");
    const [openModal, setOpenModal] = React.useState<boolean>(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    
    const searchedTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
    
    const completeTodo = (text: string) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };
    
    
    const deleteTodo = (text: string) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            saveTodos,
            todos,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export { TodoProvider, TodoContext };