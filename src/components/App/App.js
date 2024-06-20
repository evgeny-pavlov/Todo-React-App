import React, { useState } from "react";
import DummyTodoService from "../../services/dummy-todo-service"
import TodoList from "../TodoList/TodoList";
import ListAddItem from "../ListAddItem/ListAddItem";
import ListFilter from "../ListFilter/ListFilter";

const App = () => {
  const service = new DummyTodoService();
  const initTodos = service.getTodos();

  const [todos, setTodos] = useState(initTodos);
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [newTodo, setNewTodo] = useState("");

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

  const countTodos = (status) => {
    if (status === "all") return todos.length;
    if (status === "at_work") return todos.filter(todo => !todo.completed).length;
    if (status === "completed") return todos.filter(todo => todo.completed).length;
  };

  return (
    <>
      <ListAddItem
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo}
      />
      <ListFilter
        countTodos={countTodos}
      />
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
