import React from "react";

export const Todos = (props) => {
  const todo = props.todo;
  return (
    <div>
      <div>{todo.title}</div>
    </div>
  );
};
