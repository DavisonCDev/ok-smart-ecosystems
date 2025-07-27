// src/pages/Home.jsx
import React, { useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import Logo from "../components/Logo/Logo.jsx";
import About from "../components/About/About.jsx";
import AppButtons from "../components/AppButtons/AppButtons.jsx";
import Features from "../components/Features/Features.jsx";
import CTA from "../components/CTA/CTA.jsx";
import Footer from "../components/Footer/Footer.jsx";
import styles from "./Home.module.css";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.section}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={styles.page}>
      <Header />

      {/* Logo principal */}
      <section className={`${styles.heroSection} ${styles.section}`}>
        <Logo />
      </section>

      {/* Sobre a empresa */}
      <section className={`${styles.section} ${styles.aboutSection}`}>
        <About />
      </section>

      {/* Título e Botões interativos */}
      <section className={`${styles.section} ${styles.buttonsSection}`}>
        <AppButtons />
      </section>

      {/* Funcionalidades ou destaques */}
      <section className={`${styles.section} ${styles.featuresSection}`}>
        <Features />
      </section>

      {/* Chamada para ação */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <CTA />
      </section>

      <Footer />
    </div>
  );
}
