import React from "react";
import "./styles.css";
import TodoItem from "./todoItem";
function Todos(props) {
  const { todos, toggleTodo, removeTodo } = props;
  return (
    <ul className="todos">
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
}
export default Todos;
