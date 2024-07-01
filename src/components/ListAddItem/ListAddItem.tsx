import React from "react";
import "./style.css"

type ListAddItemProps = {
    newTodo: string;
    addTodo: () => void;
    setNewTodo: (title: string) => void;
}

const ListAddItem: React.FC<ListAddItemProps> = ({ newTodo, addTodo, setNewTodo }) => {

    const handleChangeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTodo();
        }
    };

    return (
        <form className="d-flex">
            <input
                type="text"
                placeholder="What needs to be done?"
                className="add-form-input"
                value={newTodo}
                onChange={(e) => handleChangeNewTodo(e)}
                onKeyDown={(e) => handleKeyDown(e)}
            />
            <button
                className="btn btn-outline-secondary" type="button" onClick={addTodo}>
                ADD
            </button>
        </form>
    );
}

export default ListAddItem;
