import { useState } from "react";
import "./App.css";
import CurrentDate from "./Components/CurrentDate.jsx";
import CompletedTasks from "./Components/CompletedTasks.jsx";
import Input from "./Components/Input.jsx";
import TodoItem from "./Components/TodoItem";

const todosData = [];

function Main() {
  const [todos, setTodo] = useState(todosData);

  const addTodo = (obj) => {
    setTodo([...todos, obj]);
    console.log(todos);
  };

  const deleteTodo = (id) =>
    setTodo(todosData.filter((todo) => todo.id !== id));

  return (
    <div className="container">
      <div className="row mt-4">
        <CurrentDate todos={todos} />
        <CompletedTasks todos={todos} />
      </div>

      <div className="row mt-5">
        <Input addTodo={addTodo} />
      </div>

      <div className="row">
        <div className="col-12 px-2 mt-5">
          <hr />
          <TodoItem todo={todos} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default Main;
