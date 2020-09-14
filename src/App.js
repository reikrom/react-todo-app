import React, { useState } from "react";
import Todos from "./todos";
import AddForm from "./addForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "buy some milk",
    },
    {
      id: 2,
      content: "clean kitchen",
    },
  ]);

  const deleteTodo = id => {
    const nTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(nTodos);
  };

  const addTodo = todo => {
    const nTodo = [...todos, todo];
    setTodos(nTodo);
  };
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddForm addTodo={addTodo} />
    </div>
  );
}

export default App;
