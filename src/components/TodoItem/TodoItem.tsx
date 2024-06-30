import React from "react";
import './style.css';

type TodoItemProps = {
    id: string;
    title: string;
    completed: boolean;
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
    editTodo: (id: string) => void;
    isEditing: boolean;
    editTitle: string;
    setEditTitle: (title: string) => void;
    saveTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, deleteTodo, toggleTodo, editTodo, isEditing, editTitle, setEditTitle, saveTodo }) => {
    let classNames = 'todo-item--title';
    let icon = 'circle'

    if (completed) {
        classNames += ' todo-item--completed';
        icon = 'check_' + icon;
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            saveTodo();
        }
    };

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle(e.target.value)
    }

    return (
        <div className="d-flex justify-content-between align-items-center">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => handleChangeTitle(e)}
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
                        onClick={() => toggleTodo(id)}
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
                            onClick={() => editTodo(id)}>
                            edit_square
                        </button>
                        <button type='button'
                            className="btn btn-outline-danger btn-sm ms-2 material-symbols-outlined text-danger-emphasis"
                            onClick={() => deleteTodo(id)}>
                            delete
                        </button>
                    </span>
                </>
            )}
        </div>
    );
};

export default TodoItem;
