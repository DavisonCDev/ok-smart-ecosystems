import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerButtons}>
      <button className={styles.button}>Login</button>
      <button className={styles.button}>Criar Conta</button>
    </div>
  );
}
