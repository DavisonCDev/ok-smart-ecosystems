// src/components/Testimonials/Testimonials.jsx
import React from "react";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const reviews = [
    { name: "Cliente A", text: "Excelente serviço e suporte incrível!" },
    { name: "Cliente B", text: "Minha empresa se transformou com essa solução." },
  ];

  return (
    <section className={styles.testimonials}>
      <h2>O que nossos clientes dizem</h2>
      <div className={styles.grid}>
        {reviews.map((r) => (
          <div key={r.name} className={styles.card}>
            <p>"{r.text}"</p>
            <span>- {r.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
