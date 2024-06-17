import React from "react";
import './style.css';

const TodoItem = ({ title, completed }) => {

    return (
        <>
            <span
                style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
                {title}
            </span>
            <button>V</button>
            <button>X</button>
        </>
    );
};

export default TodoItem;
