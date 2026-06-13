import React, { useState, useEffect } from 'react';

import { ResourceCounter } from './components/ResourceCounter';
import { ProgressBar } from './components/ProgressBar';
import { MainObject } from './components/MainObject';
import { Clicker } from './components/Clicker';
import { Upgrades } from './components/Upgrades';
import { Payment } from './components/Payment';

export function App() {
  const [coins, setCoins] = useState(0);
  const [crystals, setCrystals] = useState(0);
  const [energy, setEnergy] = useState(100); 
  const [progress, setProgress] = useState(0);
  
  const [clickPower, setClickPower] = useState(1);
  const [autoClickers, setAutoClickers] = useState(0);

  useEffect(() => {
    if (autoClickers > 0) {
      const interval = setInterval(() => {
        setCoins(prev => prev + autoClickers);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [autoClickers]);

  const handleBuildClick = () => {
    setCoins(prev => prev + clickPower);
    setEnergy(prev => (prev > 0 ? prev - 1 : 0));
    setProgress(prev => (prev >= 100 ? 0 : prev + 1));
  };

  const buyAutoClicker = () => {
    if (coins >= 100) {
      setCoins(prev => prev - 100);
      setAutoClickers(prev => prev + 1);
    }
  };

  const buyDoubleCoins = () => {
    if (coins >= 200) {
      setCoins(prev => prev - 200);
      setClickPower(prev => prev * 2);
    }
  };

  const mockWebApp = {} as any; 

  return (
    <div>
      <ResourceCounter coins={coins} crystals={crystals} energy={energy} />
      <ProgressBar progress={progress} />
      <MainObject />
      <Clicker onClick={handleBuildClick} globalCoins={coins} />
      <Upgrades 
        coins={coins} 
        onBuyAutoClicker={buyAutoClicker} 
        onBuyDoubleCoins={buyDoubleCoins} 
      />
      <Payment webApp={mockWebApp} />
    </div>
  );
}
