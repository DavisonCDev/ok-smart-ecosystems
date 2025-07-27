// src/components/Services/Services.jsx
import React from "react";
import styles from "./Services.module.css";

export default function Services() {
  const services = [
    { name: "Consultoria", desc: "Soluções personalizadas para o seu negócio." },
    { name: "Automação", desc: "Transforme processos manuais em automáticos." },
    { name: "Suporte", desc: "Equipe dedicada para auxiliar a qualquer momento." },
  ];

  return (
    <section className={styles.services}>
      <h2>Nossos Serviços</h2>
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.name} className={styles.card}>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
