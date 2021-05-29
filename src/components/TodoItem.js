import React from "react";
import { db } from "../firebase";

const TodoItem = ({ id, inprogress, todo }) => {
  //   Toggle Todo
  const toggleInProgress = () => {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  };

  //   Delete Todo
  const deleteTodo = () => {
    db.collection("todos").doc(id).delete();
  };

  return (
    <div className="todo-item">
      <div className="todo-left">
        <h3 className={inprogress ? "" : "todo-done"}>{todo}</h3>
        <p>{inprogress ? "In Progress" : "Completed"}</p>
      </div>
      <div className="todo-right">
        <button onClick={toggleInProgress}>
          {inprogress ? "Done" : "Un Done"}
        </button>
        <i className="fas fa-times-circle" onClick={deleteTodo}></i>
      </div>
    </div>
  );
};

export default TodoItem;
