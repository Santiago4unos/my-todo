import React from "react";
import { TodoIcon } from ".";

interface DeleteIconProps {
    onDelete: () => void;
}

const DeleteIcon: React.FC<DeleteIconProps> = ({ onDelete }) => {
    return (
    <TodoIcon
        type="delete"
        color="gray"
        onClick={onDelete}
    />
    );
}

export { DeleteIcon };