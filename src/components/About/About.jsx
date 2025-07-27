// src/components/About/About.jsx
import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h2>Sobre Nós</h2>
        <p className={styles.firstParagraph}>
          Desenvolvemos soluções inovadoras e flexíveis para impulsionar o sucesso da sua empresa. Nosso foco principal são as empresas prestadoras de serviços, ajudando-as a otimizar operações, aprimorar a gestão e aumentar a eficiência.
        </p>
        <p className={styles.secondParagraph}>
          Além disso, se sua empresa, independentemente do setor, tem uma necessidade específica que exige uma resposta eficaz, nossas soluções estão prontas para atender. Transformamos seus desafios em oportunidades, seja para melhorar a organização, automatizar processos ou gerenciar dados de forma mais eficiente.
        </p>
      </div>
    </section>
  );
}