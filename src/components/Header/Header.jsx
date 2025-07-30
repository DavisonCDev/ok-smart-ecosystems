// src/components/Header/Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/profile"); // Leva para a página de perfil
  };

  const handleCreateAccountClick = () => {
    console.log("Clicou em Criar Conta"); // Placeholder
  };

  return (
    <div className={styles.headerButtons}>
      <button className={styles.button} onClick={handleLoginClick}>
        Login
      </button>
      <button className={styles.button} onClick={handleCreateAccountClick}>
        Criar Conta
      </button>
    </div>
  );
}
