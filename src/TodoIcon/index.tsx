import React from "react";
import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";

import "./TodoIcon.css";

interface TodoIconProps {
    type: "check" | "delete"
    color: string;
    onClick: () => void;
}

const iconTypes: Record<string, (color: string) => JSX.Element> = {
    "check": (color) => <CheckSVG className="icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className="icon-svg" fill={color} />,
};

const TodoIcon: React.FC<TodoIconProps> = ({ type, color, onClick }) => {
return (
    <span
        className={`icon-container icon-container-${type}`}
        onClick={onClick}
    >
        {iconTypes[type](color)}
    </span>
);
}

export { TodoIcon };
