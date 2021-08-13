
import React, {useState } from "react";
import "./App.css";
import Header from "./Components/Header"
import Todo from "./Components/Todo"
import TodoForm from "./Components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Buy Tabac!",
      isCompleted: false
    },
    {
      text: "Buy more Tabac!",
      isCompleted: false
    },
    {
      text: "React workshop",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Header/>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
         
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;