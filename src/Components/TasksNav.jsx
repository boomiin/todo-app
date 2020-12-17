import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function TasksNav() {
  return (
    <>
      <div className="offset-md-4 offset-sm-4 col-md-2 col-sm-3 mt-md-2">
        <NavLink to="/completedTasks" className="font-weight-bold m-0 link">
          Completed tasks
        </NavLink>
      </div>
      <div className="col-md-3 col-sm-3 mt-md-2">
        <Link to="/" className="font-weight-bold m-0 link">
          Incompleted tasks
        </Link>
      </div>
    </>
  );
}
