export const filterTodos = (todos, filter) => {
    return todos.filter(todo => {
      if (filter === "atWork") {
        return !todo.completed
      } else if (filter === "completed") {
        return todo.completed
      } else {return 'all'};
    });
  };
  
  export const countTodos = (todos, status) => {
    if (status === "all") {
      return todos.length
    } else if (status === "atWork") {
      return todos.filter(todo => !todo.completed).length
    } else if (status === "completed") {
      return todos.filter(todo => todo.completed).length}
  };
