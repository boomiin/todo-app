import { React } from "react";
import TrashSVG from "../SVGs/TrashSVG";
import DoneSVG from "../SVGs/DoneSVG";

export default function TodoItem(props) {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {props.todo.length > 0 ? (
            props.todo.map((todo) => (
              <span key={todo.text}>
                <p>
                  <DoneSVG /> {todo.text}{" "}
                  <span
                    className="delete_opt mr-3"
                    onClick={() => props.deleteTodo(todo.id)}
                  >
                    <TrashSVG />
                  </span>
                </p>
                <hr />
              </span>
            ))
          ) : (
            <p> Nothing to show</p>
          )}
        </div>
      </div>
    </>
  );
}
