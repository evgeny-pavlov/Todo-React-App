import React from "react";
import './style.css';

const TodoItem = ({ title, completed, index, deleteTodo, toggleTodo }) => {

    let classNames = 'todo-item--title';
    if (completed) {
        classNames += ' todo-item--completed';
    };

    return (
        <div className="d-flex justify-content-between align-items-center">
            <div
                className={classNames}
                onClick={() => toggleTodo(index)}
            >
                {title}
            </div>
            <span className="ms-auto">
                <button type='button'
                    className="btn btn-outline-primary btn-sm ms-2 material-symbols-outlined"
                    onClick={() => console.log('edit')}>
                    edit_square
                </button>
                <button type='button'
                    className="btn btn-outline-danger btn-sm ms-2 material-symbols-outlined text-danger-emphasis"
                    onClick={() => deleteTodo(index)}>
                    delete
                </button>
            </span>
        </div>
    );
};

export default TodoItem;
