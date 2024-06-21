import React, { useState } from "react";
import DummyTodoService from "../../services/dummy-todo-service"
import TodoList from "../TodoList/TodoList";
import ListAddItem from "../ListAddItem/ListAddItem";
import ListFilter from "../ListFilter/ListFilter";
import { filterTodos } from "../../utils/filterTodos"


const App = () => {
  const service = new DummyTodoService();
  const initTodos = service.getTodos();

  const [todos, setTodos] = useState(initTodos);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const createToDoItem = (newTodo) => {
    return {
      id: Date.now().toString(),
      title: newTodo,
      completed: false,
    };
  }

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodos = [...todos, createToDoItem(newTodo)];
    setTodos(newTodos);
    setNewTodo("");
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const editTodo = (id) => {
    setEditId(id);
    const todoToEdit = todos.find(todo => todo.id === id);
    setEditTitle(todoToEdit.title);
  };

  const saveTodo = (id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title: editTitle } : todo
    );
    setTodos(newTodos);
    setEditId(null);
    setEditTitle("");
  };

  const filteredTodos = filterTodos(todos, filter);

  return (
    <>
      <ListAddItem
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo}
      />
      <ListFilter
        todos={todos}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        editId={editId}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        saveTodo={saveTodo}
      />
    </>
  );
}

export default App;
