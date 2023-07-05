import React from "react";
import styles from "./TodoList.module.css";

function TodoList(props) {
  const handleItemClick = (index) => {
    props.deleteTodo(index);
  };

  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li
          key={index}
          className={styles.todoItem}
          onClick={() => handleItemClick(index)}
        >
          {todo}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
