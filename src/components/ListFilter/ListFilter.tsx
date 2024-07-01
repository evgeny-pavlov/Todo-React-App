import React from "react";
import "./style.css"
import { countTodos } from "../../utils/filterTodos";
import { Todo, Filter } from "@/types/types";

type ListFilterProps = {
    todos: Todo[];
    setFilter: (value: Filter) => void;
    filter: Filter;   
}

const ListFilter: React.FC<ListFilterProps> = ({ todos, setFilter, filter }) => {

    const buttons = [
        { name: Filter.all , label: 'All' },
        { name: Filter.atWork, label: 'At Work' },
        { name: Filter.completed, label: 'Completed' }
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
