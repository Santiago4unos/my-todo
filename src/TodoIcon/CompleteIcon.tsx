import React from "react";
import { TodoIcon } from ".";
import "../TodoItem/TodoItem.css";

interface CompleteIconProps {
    completed: boolean;
    onComplete: () => void;
}

const CompleteIcon: React.FC<CompleteIconProps> = ({ completed, onComplete }) => {
    return (
        <TodoIcon
            type="check"
            color={completed ? "green": "gray"}
            onClick={onComplete}
        />
    )
}

export { CompleteIcon };