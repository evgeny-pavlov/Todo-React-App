import React from "react";
import TodoItem from "../TodoItem";
import DummyTodoService from "../../services/dummy-todo-service"

const TodoList = () => {
    const service = new DummyTodoService();
    const todos = service.getTodos();

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <TodoItem
                        title={todo.title}
                        completed={todo.completed}
                    />
                </li>
            ))}
        </ul>
    )
}

export default TodoList;
