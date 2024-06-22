import React from "react";
import "./style.css"

const ListAddItem = ({ newTodo, addTodo, setNewTodo }) => {

    const handleChangeNewTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const handleKeyDown = (e) => {
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
