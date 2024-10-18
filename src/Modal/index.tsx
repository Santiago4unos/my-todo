import React from "react";
import { TodoContext } from "../TodoContext";
import "./Modal.css";
import ReactDOM from "react-dom";

function Modal({ children }: { children: React.ReactNode }) {
    const { todos, saveTodos, setOpenModal } = React.useContext(TodoContext);
    const handleClick = (event: React.MouseEvent) => {
        const modal = document.querySelector(".Modal") as HTMLElement;
        const createTodoBtn = document.querySelector("#Modal-btn") as HTMLButtonElement;

        if (event.target === modal) { 
            setOpenModal(false);
        } else if (event.target === createTodoBtn) {
            const inputElement = document.querySelector("#Modal-input") as HTMLInputElement;
            const inputValue = inputElement.value;
            inputElement.value = "";
            const newTodos = [...todos, { text: inputValue, completed: false }];
            saveTodos(newTodos);
            setOpenModal(false);
        }
    };

    return ReactDOM.createPortal(
        <div className="Modal" onClick={handleClick}>
            {children}
        </div>,
        document.getElementById("modal-root") as HTMLElement
    )
}

export { Modal };