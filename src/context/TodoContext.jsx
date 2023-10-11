import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();
const initialState = [
  {
    id: Date.now(),
    post: "To-do message",
    completed: false,
  },
];
function getTodos() {
  const storedTodo = JSON.parse(localStorage.getItem("todos"));
  if (storedTodo) {
    return storedTodo;
  } else {
    return initialState;
  }
}
export default function TodoProvider({ children }) {
  const [todolist, setTodolist] = useState(getTodos);
  
  function handleAdd(event) {
    setTodolist((values) => [
      ...values,
      { id: Date.now(), post: event, completed: false },
    ]);
  }
  function handledelete(id) {
    const newTodo = todolist.filter((todos) => todos.id !== id);
    setTodolist(newTodo);
  }
  function handleCheckbox(id, status) {
    setTodolist((values) =>
      values.map((item) =>
        item.id === id ? { ...item, completed: status } : item
      )
    );
  }
  function updateTodos(id, todo) {
    setTodolist((values) =>
      values.map((todos) => (todos.id === id ? todo : todos))
    );
  }
 
  useEffect(function () {
    const storedTodo = JSON.parse(localStorage.getItem("todos"));
    if (storedTodo) {
      setTodolist(storedTodo);
    }
    setTodolist(storedTodo);
  }, []);
  return (
    <TodoContext.Provider
      value={{
        todolist,
        handleAdd,
        handledelete,
        handleCheckbox,
        updateTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
function useTodos() {
  const context = useContext(TodoContext);
  return context;
}

export { useTodos };
