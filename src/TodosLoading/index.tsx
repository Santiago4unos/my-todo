import React from "react";
import "./TodosLoading.css";
import { TodoItem } from "../TodoItem";

function TodosLoading() {
    return (
        <>
            <div className="dot-floating"></div>
            <TodoItem
                key={"1"}
                text={""}
                completed={false}
                onComplete={() => { } }
                onDelete={() => { } }
                skeleton={true}
            />
            <TodoItem
                key={"2"}
                text={""}
                completed={false}
                onComplete={() => {}}
                onDelete={() => {}}
                skeleton={true}
            />
            <TodoItem
                key={"3"}
                text={""}
                completed={false}
                onComplete={() => {}}
                onDelete={() => {}}
                skeleton={true}
            />
        </>
    );
}

export { TodosLoading };