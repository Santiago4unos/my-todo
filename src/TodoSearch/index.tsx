import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

const TodoSearch: React.FC = () => {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    return (
        <input
        placeholder="Busca tu TODO"
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}
        />
    );
};

export { TodoSearch };