// src/pages/Profile.jsx
import React, { useState } from "react";
import styles from "./Profile.module.css";
import {
  FaHome,
  FaUser,
  FaBell,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTasks // Ícone para Controle e Soluções
} from "react-icons/fa";

// Imagens no lugar dos ícones
import kmControl from "/images/KMControlButton.png";
import employeeControl from "/images/EmployeeControlButton.png";
import activityControl from "/images/ActivityControlButton.png";

export default function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${
          sidebarOpen ? styles.open : styles.closed
        }`}
      >
        <div className={styles.logoWrapper}>
          <img
            src="/images/companyLogo.png"
            alt="Logo da Empresa"
            className={styles.logo}
          />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <FaHome className={styles.icon} /> Dashboard
            </li>
            <li>
              <FaUser className={styles.icon} /> Dados da Empresa
            </li>
            <li>
              <FaBell className={styles.icon} /> Notificações
            </li>
            <li>
              <FaFileAlt className={styles.icon} /> Logs
            </li>

            {/* Novo item com submenu */}
            <li
              className={styles.hasSubmenu}
              onMouseEnter={() => setSubmenuOpen(true)}
              onMouseLeave={() => setSubmenuOpen(false)}
            >
              <FaTasks className={styles.icon} /> Controle e Soluções
              {submenuOpen && (
                <ul className={styles.submenu}>
                  <li>
                    <img src={kmControl} alt="KM Control" className={styles.subImage} />
                    <span>KM Control</span>
                  </li>
                  <li>
                    <img
                      src={employeeControl}
                      alt="Employee Control"
                      className={styles.subImage}
                    />
                    <span>Employee Control</span>
                  </li>
                  <li>
                    <img
                      src={activityControl}
                      alt="Activity Control"
                      className={styles.subImage}
                    />
                    <span>Activity Control</span>
                  </li>
                </ul>
              )}
            </li>

            <li className={styles.logout}>
              <FaSignOutAlt className={styles.icon} /> Sair
            </li>
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
          Aqui você pode acompanhar o resumo de suas atividades, relatórios e notificações.
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
            <p>Acesse registros recentes e exporte dados.</p>
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
