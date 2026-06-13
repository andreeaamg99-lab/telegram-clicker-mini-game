import React, { useState, useEffect } from "react";
import { Clicker } from "./components/Clicker/Clicker";

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

  const handleGlobalClick = () => {
    if (Math.random() < 0.05) {
      setDiamonds((prev) => prev + 1);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", color: "white", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-around", fontSize: "20px", marginBottom: "20px" }}>
        <div>💰 Coins: {globalCoins}</div>
        <div>💎 Diamonds: {diamonds}</div>
        <div>⚡ Energy: {energy}/{maxEnergy}</div>
      </div>

      <Clicker 
        onClick={handleGlobalClick}
        globalCoins={globalCoins}
        setGlobalCoins={setGlobalCoins}
        energy={energy}
        setEnergy={setEnergy}
        maxEnergy={maxEnergy}
        isAutoClickerActive={isAutoClickerActive}
      />
    </div>
  );
}
