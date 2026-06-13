import React, { useState, useEffect } from "react";
import styles from "./Clicker.module.scss";

type Props = {
  onClick: () => void;
  globalCoins: number;
};

export const Clicker = ({ onClick, globalCoins }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDigging, setIsDigging] = useState(false);
  
  const [localCoins, setLocalCoins] = useState(globalCoins);
  const [localEnergy, setLocalEnergy] = useState(100);
  const [localDiamonds, setLocalDiamonds] = useState(0);
  const maxEnergy = 100;

  useEffect(() => {
    setLocalCoins(globalCoins);
  }, [globalCoins]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalEnergy((prev) => (prev < maxEnergy ? prev + 1 : prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleLocalClick = async () => {
    if (localEnergy >= 1) {
      setIsDigging(true);
      setTimeout(() => setIsDigging(false), 150);

      setLocalEnergy((prev) => Math.max(0, prev - 1));
      setLocalCoins((prev) => prev + 1);

      if (Math.random() < 0.05) {
        setLocalDiamonds((prev) => prev + 1);
      }

      if (onClick) {
        onClick();
      }
    } else {
      alert("No energy left!");
    }
  };

  return (
    <div className={styles.clickerContainer} style={{ textAlign: "center", color: "white", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-around", fontSize: "22px", marginBottom: "20px", fontWeight: "bold" }}>
        <div>💰 {localCoins}</div>
        <div>💎 {localDiamonds}</div>
        <div>⚡ {localEnergy}/{maxEnergy}</div>
      </div>

      <div style={{ background: "#333", borderRadius: "10px", height: "15px", width: "200px", margin: "0 auto 20px auto", overflow: "hidden" }}>
        <div style={{ background: "#4caf50", height: "100%", width: ${(localEnergy / maxEnergy) * 100}%, transition: "width 0.2s ease" }}></div>
      </div>

      <div className={`${styles.hamsterContainer} ${isDigging ? styles.diggingAnimation : ""}`}>
        <img src="/hamster.png" alt="Hamster" className={styles.hamsterImg} style={{ width: "150px", height: "150px" }} />
      </div>
      
      <button className={styles.orangeClickBtn} onClick={handleLocalClick} disabled={isLoading}>
        Click Me!
      </button>
    </div>
  );
};
