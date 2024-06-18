import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import DummyTodoService from "../../services/dummy-todo-service"

const App = () => {
  const service = new DummyTodoService();
  const initTodos = service.getTodos();

  const [todos, setTodos] = useState(initTodos);

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

  return (
    <>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
