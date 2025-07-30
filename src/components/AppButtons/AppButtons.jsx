// src/components/AppButtons/AppButtons.jsx
import React, { useEffect, useState } from "react";
import styles from "./AppButtons.module.css";
import Modal from "../Modal/Modal.jsx";

import kmControl from "/images/KMControlButton.png";
import employeeControl from "/images/EmployeeControlButton.png";
import activityControl from "/images/ActivityControlButton.png";
import allInOne from "/images/AllInOneButton.png";

export default function AppButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  const buttons = [
    { src: kmControl, alt: "KM Control", key: "km", delay: "0.4s" },
    { src: employeeControl, alt: "Employee Control", key: "employee", delay: "0.6s" },
    { src: activityControl, alt: "Activity Control", key: "activity", delay: "0.8s" },
    { src: allInOne, alt: "All-in-One", key: "all", delay: "1s" },
  ];

  const modalsContent = {
    km: {
      title: "KM Control",
      content: `KM Control

Controle Inteligente de Frotas e Veículos Alugados
Este sistema oferece um controle abrangente para a frota e os veículos alugados pela empresa, englobando as seguintes funcionalidades:

•	Cobertura de Quilometragem: Monitoramento preciso da quilometragem percorrida pelos veículos.

•	Controle de Condutores: Gerenciamento dos motoristas que utilizam os veículos da frota.

•	Coleta de Dados de Utilização: Obtenção de informações detalhadas sobre o uso dos veículos para análise e otimização.

•	Notificações Inteligentes: Alertas automáticos para revisões veiculares programadas e para o atingimento da quilometragem de franquia contratada.`
    },
    employee: {
      title: "Employee Control",
      content: `Gerenciamento de Funcionários e Controle de Ponto
Este sistema oferece uma solução completa para o cadastro de funcionários e o controle de ponto na empresa:

•	Cadastro Abrangente de Documentação: Armazenamento seguro e organizado de toda a documentação necessária para o cadastro de funcionários e acesso a clientes. Isso inclui:
-	ASO (Atestado de Saúde Ocupacional)
-	PCMSO (Programa de Controle Médico de Saúde Ocupacional)
-	Documentação pessoal
-	Habilitações técnicas
-	Qualquer outra documentação relevante que se faça necessária.

•	Controle de Ponto Inteligente: Registro preciso e automatizado de:
-	Entrada e saída
-	Pausas
-	Horas extras
-	Adicional noturno
-	Adicional de periculosidade
-	Todos os demais requisitos relacionados ao controle de jornada.

O acesso ao registro pode ser feito por reconhecimento facial ou biometria, com registro de localização para maior segurança e compliance.`
    },
    activity: {
      title: "Activity Control",
      content: `Elaboração e Gerenciamento de Relatórios Técnicos
Este sistema oferece uma solução completa para a elaboração automatizada de relatórios técnicos, garantindo eficiência e organização:

•	Geração Automatizada de Relatórios: Crie relatórios técnicos de forma rápida e padronizada, com acesso a histórico, armazenamento de fotografias, evidências e documentação anexada.

•	Padronização e Registro Abrangente: Mantenha a consistência com a padronização de relatórios, registro de logs, histórico de atividades e outros dados relevantes.

•	Área de Acesso Exclusiva e Personalizada: Garanta a segurança e a relevância das informações com áreas de acesso exclusivas para a empresa, usuários e clientes. Cada perfil terá acesso a dados selecionados, diversificados e personalizados de acordo com suas necessidades.`
    },
    all: {
      title: "All-in-One",
      content: `Eco Sistema de Gestão Integrada: Frota, Pessoas e Relatórios

•	Frota e Funcionários:
-	Vincular motoristas a veículos com monitoramento de uso e cumprimento de regras.
-	Alertas automáticos sobre vencimento de habilitações.
-	Registro integrado de ocorrências de condutores com o histórico de uso da frota.

•	Frota e Relatórios Técnicos:
-	Relatórios automáticos sobre desempenho, consumo, manutenções e quilometragem.
-	Anexo automático de fotos e documentos de avarias/manutenções aos relatórios.
-	Alertas para geração de relatórios de conformidade e auditorias.

•	Funcionários e Relatórios Técnicos:
-	Relatórios de RH sobre performance, ponto, horas extras e saúde ocupacional.
-	Inclusão automática de documentos como ASOs e PCMSOs em relatórios.
-	Análise do impacto do desempenho de equipes no uso de veículos e geração de relatórios.

•	Integração Global:
-	Dashboards unificados com métricas e KPIs de todos os sistemas.
-	Automação de fluxos, como revisões veiculares gerando tarefas em RH.
-	Análise preditiva para otimizar rotas, prever manutenções e melhorar a gestão de pessoal.

Objetivo: Criar um ecossistema integrado que facilita a gestão, reduz riscos e aumenta a eficiência operacional e estratégica.
`
    }
  };

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
      <h2 className={styles.title}>
        Descubra como podemos simplificar o seu dia a dia e impulsionar seu crescimento:
      </h2>
      <div className={styles.buttons}>
        {buttons.map(({ src, alt, key, delay }) => (
          <div
            key={alt}
            className={`${styles.buttonWrapper} ${isVisible ? styles.visibleButton : ""}`}
            style={{ animationDelay: delay }}
            onClick={() => setActiveModal(key)}
          >
            <img src={src} alt={alt} className={styles.buttonImage} />
          </div>
        ))}
      </div>

      {/* Modal flutuante */}
      {activeModal && (
        <Modal
          isOpen={true}
          title={modalsContent[activeModal].title}
          content={modalsContent[activeModal].content}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
