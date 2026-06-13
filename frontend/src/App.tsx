import React, { useState, useEffect } from "react";
import { Clicker } from "./components/Clicker/Clicker";
import { ResourceCounter } from "./components/ResourceCounter/ResourceCounter";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import { Upgrades } from "./components/Upgrades/Upgrades";
import { Payment } from "./components/Payment/Payment";

export default function App() {
  const [globalCoins, setGlobalCoins] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [diamonds, setDiamonds] = useState(0);
  const [isAutoClickerActive, setIsAutoClickerActive] = useState(false);
  const maxEnergy = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prev) => (prev < maxEnergy ? prev + 1 : prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoClickerActive) {
      interval = setInterval(() => {
        setGlobalCoins((prev) => prev + 2);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isAutoClickerActive]);

  const handleGlobalClick = () => {
    if (Math.random() < 0.05) {
      setDiamonds((prev) => prev + 1);
    }
  };

  const handleBuyAutoClicker = () => {
    if (globalCoins >= 100) {
      setGlobalCoins((prev) => prev - 100);
      setIsAutoClickerActive(true);
    } else {
      alert("Not enough coins!");
    }
  };

  return (
    <div style={{ padding: "20px", color: "white", fontFamily: "sans-serif" }}>
      <ResourceCounter 
        coins={globalCoins} 
        diamonds={diamonds} 
        energy={energy} 
      />
      
      <ProgressBar 
        current={energy} 
        max={maxEnergy} 
      />

      <Clicker 
        onClick={handleGlobalClick}
        globalCoins={globalCoins}
        setGlobalCoins={setGlobalCoins}
        energy={energy}
        setEnergy={setEnergy}
        maxEnergy={maxEnergy}
        isAutoClickerActive={isAutoClickerActive}
      />

      <Upgrades 
        coins={globalCoins}
        onBuyAutoClicker={handleBuyAutoClicker}
        isAutoClickerActive={isAutoClickerActive}
      />

      <Payment />
    </div>
  );
}
