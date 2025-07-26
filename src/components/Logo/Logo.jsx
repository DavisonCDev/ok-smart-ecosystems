import React from "react";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
        OK <span className={styles.highlight}>Smart</span>
        <div className={styles.ecosystems}>EcoSystems</div>
      </div>
    </div>
  );
}
