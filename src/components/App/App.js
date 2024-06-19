import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import DummyTodoService from "../../services/dummy-todo-service"

const App = () => {
  const service = new DummyTodoService();
  const initTodos = service.getTodos();

  const [todos, setTodos] = useState(initTodos);
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setEditTitle(todos[index].title);
  };

  const saveTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].title = editTitle;
    setTodos(newTodos);
    setEditIndex(null);
    setEditTitle("");
  };

  return (
    <>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        editIndex={editIndex}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        saveTodo={saveTodo}
      />
    </>
  );
}

export default App;
