import React from "react";
import DoneSVG from "../SVGs/DoneSVG";

export default function CompletedTasks(props) {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {props.del.length > 0 ? (
            props.del.map((todo) => (
              <span key={todo.text}>
                <p>
                  <DoneSVG /> {todo.text}{" "}
                  <button
                    className="delete_opt mr-3"
                    onClick={() => props.deleteTodo(todo)}
                  ></button>
                </p>
                <hr />
              </span>
            ))
          ) : (
            <p>No tasks completed yet</p>
          )}
        </div>
      </div>
    </>
  );
}
