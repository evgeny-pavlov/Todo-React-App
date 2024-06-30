import React from "react";
import TodoItem from "../TodoItem";
import './style.css';
import { Todo } from "../../types/types";

type TodoListProps = {
    todos: Todo[];
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
    editTodo: (id: string) => void;
    editId: string;
    editTitle: string;
    setEditTitle: (title: string) => void;
    saveTodo: (id:string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, toggleTodo, editTodo, editId, editTitle, setEditTitle, saveTodo  }) => {

    return (
        <ul className="todo-list list-group d-inline-flex ">
            {todos.map((todo) => (
                <li key={todo.id} className="list-group-item todo-item">
                    <TodoItem
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        deleteTodo={() => deleteTodo(todo.id)}
                        toggleTodo={() => toggleTodo(todo.id)}
                        editTodo={() => editTodo(todo.id)}
                        isEditing={editId === todo.id}
                        editTitle={editTitle}
                        setEditTitle={setEditTitle}
                        saveTodo={() => saveTodo(todo.id)}
                    />
                </li>
            ))}
        </ul>
    )
}

export default TodoList;
