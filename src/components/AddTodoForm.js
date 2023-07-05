import React, { useState, useRef } from "react";
import styles from "./AddTodoForm.module.css";
import Overlay from "./Overlay";

function AddTodoForm(props) {
  const [todo, setTodo] = useState("");
  const [isError, setIsError] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const ref = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      props.addTodo(todo);
      setTodo("");
      setIsError(false);

      ref.current = ref.current + 1;
      alert("You added " + ref.current + " todo");
    } else {
      setIsError(true);
      setShowOverlay(true);
    }
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  return (
    <>
      {showOverlay && (
        <Overlay onClose={handleOverlayClose}>
          <p className={styles.ErrorMessage}>Todo cannot be empty</p>
        </Overlay>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new todo"
          className={`${styles.Input} ${isError ? styles.Error : ""}`}
        />
        <button type="submit" className={styles.Button}>
          Add Todo
        </button>
      </form>
    </>
  );
}

export default AddTodoForm;
