import React from "react";
import "./style.css"
import { countTodos } from "../../utils/filterTodos";

const ListFilter = ({ todos, setFilter, filter }) => {

    const buttons = [
        { name: 'all', label: 'All' },
        { name: 'atWork', label: 'At Work' },
        { name: 'completed', label: 'Completed' }
    ];

    return (

        <div className="filter-group d-flex">
            {buttons.map(({ name, label }) => (
                <button
                    key={name}
                    type="button"
                    className={`btn btn-outline-secondary ${filter === name ? "active" : ""}`}
                    onClick={() => setFilter(name)}
                >
                    {label} ({countTodos(todos, name)})
                </button>
            ))}
        </div>
    );
}

export default ListFilter;
