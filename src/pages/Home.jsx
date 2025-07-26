import React from "react";
import Header from "../components/Header/Header.jsx";
import Logo from "../components/Logo/Logo.jsx";
import AppButtons from "../components/AppButtons/AppButtons.jsx";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.heroSection}>
        <Logo />
        <AppButtons />
      </div>
    </div>
  );
}
