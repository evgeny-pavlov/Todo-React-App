import { Todo } from "../types/types";

const storageKey = "todos";

const getTodos = () => {
  const todos = localStorage.getItem(storageKey);
  return todos ? JSON.parse(todos) : [];
};

const saveTodos = (todos: Todo[]) => {
  localStorage.setItem(storageKey, JSON.stringify(todos));
};


export { getTodos, saveTodos };
