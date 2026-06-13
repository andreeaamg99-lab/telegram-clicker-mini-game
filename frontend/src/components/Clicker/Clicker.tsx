import React, { useState } from "react";
import styles from "./Clicker.module.scss";

type Props = {
  onClick: () => void;
  globalCoins: number;
};

export const Clicker = ({ onClick, globalCoins }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDigging, setIsDigging] = useState(false);

  const handleLocalClick = async () => {
    setIsLoading(true);
    setIsDigging(true);
    
    // Animația de săpare durează 150ms
    setTimeout(() => setIsDigging(false), 150);

    try {
      // Execută funcția originală din jocul tău care trimite datele la server
      if (onClick) {
        await onClick();
      }
    } catch (error) {
      console.error("Click error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.clickerContainer}>
      <div className={`${styles.hamsterContainer} ${isDigging ? styles.diggingAnimation : ""}`}>
        <img src="/hamster.png" alt="Hamster" className={styles.hamsterImg} />
      </div>
      <button 
        className={styles.orangeClickBtn} 
        onClick={handleLocalClick} 
        disabled={isLoading}
      >
        Click Me!
      </button>
    </div>
  );
};
