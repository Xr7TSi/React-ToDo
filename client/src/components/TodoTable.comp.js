import React from "react";



export const TodoTable = ({ todo, index, completeTodo, removeTodo }) => {
    return (
      <div
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        className="todo"
      >
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>Delete</button>
        </div>
      </div>
    );
  }