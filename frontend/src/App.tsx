import React, { useState, useEffect } from "react";
import { Clicker } from "./components/Clicker/Clicker";

export const App = () => {
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
    let interval: any;
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
      alert("Not enough coins! Need 100 coins.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", color: "white", fontFamily: "sans-serif", background: "#1a1a1a", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-around", fontSize: "22px", marginBottom: "20px", fontWeight: "bold" }}>
        <div>💰 {globalCoins}</div>
        <div>💎 {diamonds}</div>
        <div>⚡ {energy}/{maxEnergy}</div>
      </div>

      <div style={{ background: "#333", borderRadius: "10px", height: "20px", width: "80%", margin: "0 auto 30px auto", overflow: "hidden" }}>
        <div style={{ background: "#4caf50", height: "100%", width: ${(energy / maxEnergy) * 100}%, transition: "width 0.2s ease" }}></div>
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

      <div style={{ marginTop: "40px" }}>
        <button 
          onClick={handleBuyAutoClicker} 
          disabled={isAutoClickerActive}
          style={{ padding: "12px 24px", fontSize: "18px", fontWeight: "bold", borderRadius: "8px", border: "none", backgroundColor: isAutoClickerActive ? "#555" : "#ff9800", color: "white", cursor: "pointer" }}
        >
          {isAutoClickerActive ? "Auto Clicker Active" : "Buy Auto Clicker (100 Coins)"}
        </button>
      </div>
    </div>
  );
};
