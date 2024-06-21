import React from "react";
import "./style.css"

const ListAddItem = ({ newTodo, addTodo, setNewTodo }) => {
    
    return (
            <form className="d-flex">
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    className="add-form--input"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button 
                    className="btn btn-outline-secondary" type="button" onClick={addTodo}>
                    ADD
                </button>
            </form>
    );
}

export default ListAddItem;
