// src/components/Modal/Modal.jsx
import React, { useEffect } from "react";
import styles from "./Modal.module.css";

export default function Modal({ title, content, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose(); // Fecha com ESC
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    // Fecha ao clicar em qualquer lugar fora do modal
    if (e.target.classList.contains(styles.overlay)) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          ×
        </button>
        <h2 className={styles.title}>{title}</h2>
        
        {/* Wrapper para a rolagem isolada */}
        <div className={styles.scrollContent}>
          <p className={styles.content}>{content}</p>
        </div>
      </div>
    </div>
  );
}
