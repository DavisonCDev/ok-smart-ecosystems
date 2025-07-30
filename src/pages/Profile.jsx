// src/pages/Profile.jsx
import React, { useState } from "react";
import styles from "./Profile.module.css";
import { FaHome, FaUser, FaBell, FaChartBar, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";

export default function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.closed}`}>
        <div className={styles.logoWrapper}>
          <img src="/images/companyLogo.png" alt="Logo da Empresa" className={styles.logo} />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><FaHome className={styles.icon} /> Dashboard</li>
            <li><FaUser className={styles.icon} /> Meus Dados</li>
            <li><FaBell className={styles.icon} /> Notificações</li>
            <li><FaChartBar className={styles.icon} /> Relatórios</li>
            <li><FaCog className={styles.icon} /> Configurações</li>
            <li className={styles.logout}><FaSignOutAlt className={styles.icon} /> Sair</li>
          </ul>
        </nav>
      </div>

      {/* Conteúdo principal */}
      <div className={styles.content}>
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          <FaBars />
        </button>
        <h1 className={styles.title}>Bem-vindo(a), Usuário</h1>
        <p className={styles.subtitle}>
          Aqui você pode acompanhar suas atividades, relatórios e notificações.
        </p>

        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <h2>Frota</h2>
            <p>Visualize status da frota e quilometragem.</p>
          </div>
          <div className={styles.card}>
            <h2>Funcionários</h2>
            <p>Gerencie cadastro e controle de ponto.</p>
          </div>
          <div className={styles.card}>
            <h2>Relatórios</h2>
            <p>Acesse relatórios recentes e exporte dados.</p>
          </div>
          <div className={styles.card}>
            <h2>Notificações</h2>
            <p>Alertas e lembretes importantes para hoje.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
