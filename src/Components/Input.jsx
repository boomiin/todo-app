import React, { useState } from "react";

export default function Input({ addTodo }) {
  const initElt = { done: false, text: "" };

  const [todoElt, setTodoElt] = useState(initElt);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodoElt({
      ...todoElt,
      [name]: value,
      id: parseInt(Math.random() * (101 * 1) + 1),
    });
  };

  const submit = (e) => {
    e.preventDefault();
    // if (!e.target.value) return;
    addTodo(todoElt);
    setTodoElt(initElt);
  };

  return (
    <>
      <div className="col-md-6 px-1">
        <input
          type="text"
          className="task-input col-md-12"
          name="text"
          value={todoElt.text}
          onChange={onChangeHandler}
          placeholder="Enter a task..."
        />
      </div>
      <div className="col-md-2 px-1">
        <button className="button col-md-8" onClick={submit}>
          Add Task
        </button>
      </div>
    </>
  );
}
