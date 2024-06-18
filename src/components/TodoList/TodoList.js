import React from "react";
import TodoItem from "../TodoItem";
import './style.css';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {

    return (
        <ul className="todo-list list-group d-inline-flex ">
            {todos.map((todo, index) => (
                <li key={todo.id} className="list-group-item ">
                    <TodoItem
                        title={todo.title}
                        completed={todo.completed}
                        index={index}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                </li>
            ))}
        </ul>
    )
}

export default TodoList;
