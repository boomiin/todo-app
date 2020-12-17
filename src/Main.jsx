import { useState } from "react";
import "./App.css";
import CurrentDate from "./Components/CurrentDate.jsx";
import TasksNav from "./Components/TasksNav.jsx";
import Input from "./Components/Input.jsx";
import TodoItem from "./Components/TodoItem";
import { Route, Switch } from "react-router-dom";
import CompletedTasks from "./Components/CompletedTasks";

const initialTodo = [];
const deletedTodos = [];

function Main() {
  const [todos, setTodo] = useState(initialTodo);
  const [del, setDel] = useState(deletedTodos);

  const addTodo = (obj) => {
    obj.id = todos.length + 1;
    setTodo([...todos, obj]);
    // console.log(todos);
  };

  const deleteTodo = (obj) => {
    let tab_tem = todos.filter((td) => td.id !== obj.id);
    let del_tem = todos.filter((dTd) => dTd.id === obj.id);
    setDel([...del, ...del_tem]);
    setTodo(tab_tem);
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <CurrentDate todos={todos} />
        <TasksNav todos={todos} />
      </div>

      <div className="row mt-5">
        <Input addTodo={addTodo} />
      </div>

      <div className="row">
        <div className="col-12 px-2 mt-5">
          <hr />
          <Switch>
            <Route path="/completedTasks">
              <CompletedTasks del={del} />
            </Route>

            <Route path="/">
              <TodoItem todo={todos} deleteTodo={deleteTodo} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Main;
