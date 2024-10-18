import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

interface TodoItemProps {
    completed: boolean;
    text: string;
    onComplete: () => void;
    onDelete: () => void;
    skeleton: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ completed, text, onComplete, onDelete, skeleton }) => {
    return (
        <li className="TodoItem">
        {skeleton ? null : <CompleteIcon completed={completed} onComplete={onComplete} />}

        <p className={`TodoItem-p ${completed ? "TodoItem-p--complete" : ""} ${skeleton ? "TodoItem-p--skeleton" : ""}`}>
            {text}
        </p>

        {skeleton ? null : <DeleteIcon onDelete={onDelete} />}
        </li>
    );
};

export { TodoItem };