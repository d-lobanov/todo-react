import React from "react";
import VisibleTodoList from "../containers/VisibleTodoList";
import TodoBar from "../containers/TodoBar";

const TodoColumn = () => (
  <div>
    <TodoBar/>
    <div className="todo-list"><VisibleTodoList/></div>
  </div>
);

export default TodoColumn;
