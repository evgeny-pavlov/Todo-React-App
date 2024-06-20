import React from "react";
import TodoItem from "../TodoItem";
import './style.css';

const TodoList = ({ todos, deleteTodo, toggleTodo, editTodo, editIndex, editTitle, setEditTitle, saveTodo }) => {

    return (
        <ul className="todo-list list-group d-inline-flex ">
            {todos.map((todo, index) => (
                <li key={todo.id} className="list-group-item todo-item">
                    <TodoItem
                        title={todo.title}
                        completed={todo.completed}
                        deleteTodo={() => deleteTodo(index)}
                        toggleTodo={() => toggleTodo(index)}
                        editTodo={() => editTodo(index)}
                        isEditing={editIndex === index}
                        editTitle={editTitle}
                        setEditTitle={setEditTitle}
                        saveTodo={() => saveTodo(index)}
                    />
                </li>
            ))}
        </ul>
    )
}

export default TodoList;
