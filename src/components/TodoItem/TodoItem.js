import React from "react";
import './style.css';

const TodoItem = ({ title, completed, index, deleteTodo, toggleTodo, editTodo, isEditing, editTitle, setEditTitle, saveTodo }) => {

    let classNames = 'todo-item--title';
    let icon = 'circle'
    
    if (completed) {
        classNames += ' todo-item--completed';
        icon = 'check_' + icon;
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            saveTodo();
        }
    };

    return (
        <div className="d-flex justify-content-between align-items-center">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="form-control"
                    />
                    <button
                        type='button'
                        className="btn btn-outline-success btn-sm ms-2 material-symbols-outlined"
                        onClick={saveTodo}>
                        save_as
                    </button>
                </>
            ) : (
                <>
                    <div
                        className={classNames}
                        onClick={() => toggleTodo(index)}
                    > 
                        <button type='button'
                            className="btn btn-sm material-symbols-outlined done-icon">
                            {icon}
                        </button>
                        {title}
                    </div>
                    <span className="ms-auto">
                        <button type='button'
                            className="btn btn-outline-primary btn-sm ms-2 material-symbols-outlined"
                            onClick={() => editTodo(index)}>
                            edit_square
                        </button>
                        <button type='button'
                            className="btn btn-outline-danger btn-sm ms-2 material-symbols-outlined text-danger-emphasis"
                            onClick={() => deleteTodo(index)}>
                            delete
                        </button>
                    </span>
                </>
            )}
        </div>
    );
};

export default TodoItem;
