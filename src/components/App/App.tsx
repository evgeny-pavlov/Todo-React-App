import React, { useState, useEffect, useMemo } from "react";
import { getTodos, saveTodos } from "../../services/localStorageTodoService"
import TodoList from "../TodoList/TodoList";
import ListAddItem from "../ListAddItem/ListAddItem";
import ListFilter from "../ListFilter/ListFilter";
import { filterTodos } from "../../utils/filterTodos"
import { Todo } from "../../types/types";

const App: React.FC = () => {
  const initTodos = useMemo(() => getTodos(), []);
  const [todos, setTodos] = useState<Todo[]>(initTodos);
  const [editId, setEditId] = useState<string>("");
  const [editTitle, setEditTitle] = useState<string>("");
  const [newTodo, setNewTodo] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const createToDoItem = (newTodo: string) => {
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

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (id: string) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const editTodo = (id: string) => {
    setEditId(id);
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
      setEditTitle(todoToEdit.title)
    }
    ;
  };

  const saveTodo = (id: string) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title: editTitle } : todo
    );
    setTodos(newTodos);
    setEditId("");
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
