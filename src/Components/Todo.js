import React,{useState} from 'react';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button type="checkbox" onClick={() => completeTodo(index)}>
        <input  type="checkbox" onClick={() => completeTodo(index)} /> 
        </button>
        <button onClick={() => removeTodo(index)}>X
                                                                   
        </button>
      </div>
    </div>
  );
}


export default Todo;