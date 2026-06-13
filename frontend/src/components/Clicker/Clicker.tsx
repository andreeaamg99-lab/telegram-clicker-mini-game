import React, { useState, useEffect } from "react";
import styles from "./Clicker.module.scss";

type Props = {
  onClick: () => void;
  globalCoins: number;
  setGlobalCoins: React.Dispatch<React.SetStateAction<number>>;
  energy: number;
  setEnergy: React.Dispatch<React.SetStateAction<number>>;
  maxEnergy: number;
  isAutoClickerActive: boolean;
};

export const Clicker = ({ 
  onClick, 
  globalCoins, 
  setGlobalCoins, 
  energy, 
  setEnergy, 
  maxEnergy,
  isAutoClickerActive 
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLocalClick = async () => {
    if (energy >= 1) {
      setEnergy((prev) => Math.max(0, prev - 1));
      setGlobalCoins((prev) => prev + 1);
      if (onClick) {
        onClick();
      }
    } else {
      alert("No energy left!");
    }
  };

  return (
    <div className={styles.clickerContainer}>
      <button className={styles.orangeClickBtn} onClick={handleLocalClick} disabled={isLoading}>
        Click Me!
      </button>
    </div>
  );
};
