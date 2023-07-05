import React from "react";
import ReactDOM from "react-dom";
import styles from "./Overlay.module.css";

const Overlay = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        {children}
        <button type="button" className={styles.CloseButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById("overlay-root")
  );
};

export default Overlay;
