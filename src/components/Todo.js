import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { db } from "../firebase";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const getTodos = () => {
    db.collection("todos").onSnapshot((querySnapshop) => {
      setTodos(
        querySnapshop.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  };

  useEffect(() => {
    getTodos();
  }, [todos]);

  const addToDo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoText,
    });

    setTodoText("");
  };
  return (
    <div className="todo-container">
      <div className="todo-block">
        <input
          type="text"
          value={todoText}
          placeholder="Enter Your Todo ..."
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="submit" onClick={addToDo}>
          Add
        </button>
      </div>
      <div className="todos-container">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            id={todo.id}
            inprogress={todo.inprogress}
            todo={todo.todo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
