// src/components/Features/Features.jsx
import React from "react";
import styles from "./Features.module.css";

export default function Features() {
  const items = [
    { title: "Inovação", desc: "Tecnologia de ponta para todos os clientes." },
    { title: "Segurança", desc: "Soluções confiáveis e seguras." },
    { title: "Produtividade", desc: "Automatize e ganhe tempo." },
  ];

  return (
    <section className={styles.features}>
      <h2>Por que escolher a gente?</h2>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.title} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
