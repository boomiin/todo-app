import { useState } from "react";
import "./App.css";
import CurrentDate from "./Components/CurrentDate.jsx";
import CompletedTasks from "./Components/CompletedTasks.jsx";
import Input from "./Components/Input.jsx";
import TodoItem from "./Components/TodoItem";

const initialTodo = [];

function Main() {
  const [todos, setTodo] = useState(initialTodo);

  const addTodo = (obj) => {
    obj.id = todos.length + 1;
    setTodo([...todos, obj]);
    console.log(initialTodo);
    console.log(todos);
  };

  const deleteTodo = (id) => {
    console.log(id);
    let tab_tem = todos.filter((td) => td.id !== id);
    console.log(todos);
    console.log(tab_tem);
    setTodo(tab_tem);
  };

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
