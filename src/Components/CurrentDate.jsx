import React from "react";

export default function CurrentDate(props) {
  return (
    <>
      <div className="col-md-3 col-sm-2">
        <p className="font-weight-bold m-0">
          {new Date().toLocaleDateString()}
        </p>
        <p className="tasks-count">{props.todos.length} task(s)</p>
      </div>
    </>
  );
}
