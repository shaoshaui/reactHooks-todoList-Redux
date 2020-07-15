import React, {useState,useEffect,useCallback} from "react";
import "./styles.css";
import Control from "./control";
import Todos from "./todos";
import { disposeEmitNodes } from "typescript";
const LS_KEY = "_$-todos_";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = useCallback(todo => {
    setTodos(todos => [...todos, todo]);
  }, []);
  const removeTodo = useCallback(id => {
    setTodos(todos =>
      todos.filter(todo => {
        return todo.id !== id;
      })
    );
  }, []);
  const toggleTodo = useCallback(id => {
    setTodos(todos =>
      todos.map(todo => {
        return todo.id === id
          ? {
              ...todo,
              complete: !todo.complete
            }
          : todo;
      })
    );
  }, []);
  useEffect(() => {
    const LocalTodos = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
    setTodos(LocalTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-list">
      <Control addTodo={addTodo} />
      <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos} />
    </div>
  );
}
export default TodoList;
