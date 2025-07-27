// src/components/CTA/CTA.jsx
import React from "react";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <h2>Pronto para transformar sua empresa?</h2>
      <button className={styles.button}>Entre em Contato</button>
    </section>
  );
}
