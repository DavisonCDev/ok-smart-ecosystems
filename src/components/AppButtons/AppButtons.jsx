import React from "react";
import styles from "./AppButtons.module.css";

import kmControl from "/images/KMControlButton.png";
import employeeControl from "/images/EmployeeControlButton.png";
import activityControl from "/images/ActivityControlButton.png";
import allInOne from "/images/AllInOneButton.png";

export default function AppButtons() {
  const buttons = [
    { src: kmControl, alt: "KM Control" },
    { src: employeeControl, alt: "Employee Control" },
    { src: activityControl, alt: "Activity Control" },
    { src: allInOne, alt: "All-in-One" },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "100px" }}>
      {buttons.map(({ src, alt }) => (
        <div key={alt} className={styles.buttonWrapper}>
          <img src={src} alt={alt} />
        </div>
      ))}
    </div>
  );
}
