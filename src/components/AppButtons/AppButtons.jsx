// src/components/AppButtons/AppButtons.jsx
import React, { useEffect, useState } from "react";
import styles from "./AppButtons.module.css";

import kmControl from "/images/KMControlButton.png";
import employeeControl from "/images/EmployeeControlButton.png";
import activityControl from "/images/ActivityControlButton.png";
import allInOne from "/images/AllInOneButton.png";

export default function AppButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  const buttons = [
    { src: kmControl, alt: "KM Control", delay: "0.4s" },
    { src: employeeControl, alt: "Employee Control", delay: "0.6s" },
    { src: activityControl, alt: "Activity Control", delay: "0.8s" },
    { src: allInOne, alt: "All In One", delay: "1s" },
  ];

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
      <h2 className={styles.title}>
        Descubra como podemos simplificar o seu dia a dia e impulsionar seu crescimento:
      </h2>
      <div className={styles.buttons}>
        {buttons.map(({ src, alt, delay }) => (
          <div
            key={alt}
            className={`${styles.buttonWrapper} ${isVisible ? styles.visibleButton : ""}`}
            style={{ animationDelay: delay }}
          >
            <img src={src} alt={alt} className={styles.buttonImage} />
          </div>
        ))}
      </div>
    </div>
  );
}
