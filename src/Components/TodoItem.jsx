import { React } from "react";
import CurrentSVG from "../SVGs/CurrentSVG";
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
                  <DoneSVG /> {todo.text}
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
