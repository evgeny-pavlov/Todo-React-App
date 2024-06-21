import React from "react";
import "./style.css"

const ListFilter = ({ countTodos }) => {
    return (
        <div className="filter-group d-flex">
            <button type="button" className="btn btn-outline-secondary filter-btn">All ({countTodos('all')})</button>
            <button type="button" className="btn btn-outline-secondary filter-btn">At work ({countTodos('at_work')})</button>
            <button type="button" className="btn btn-outline-secondary filter-btn">Completed ({countTodos('completed')})</button>
        </div>
    );
}

export default ListFilter;
