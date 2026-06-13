import React, { useState } from 'react';

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

  const handleBuildClick = () => {
    setEnergy(prev => (prev > 0 ? prev - 1 : 0));
    setProgress(prev => (prev >= 100 ? 0 : prev + 1));
  };

  const mockWebApp = {} as any; 

  return (
    <div>
      <ResourceCounter coins={coins} crystals={crystals} energy={energy} />
      <ProgressBar progress={progress} />
      <MainObject />
      <Clicker onClick={handleBuildClick} />
      <Upgrades />
      <Payment webApp={mockWebApp} />
    </div>
  );
}
