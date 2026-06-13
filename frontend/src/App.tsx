import React, { useState } from 'react';
import styles from './App.module.css'; 

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

  const mockWebApp = {} as any; 

  return (
    <div className={styles.container}>
      <ResourceCounter coins={coins} crystals={crystals} energy={energy} />
      <ProgressBar progress={progress} />
      <MainObject />
      <Clicker />
      <Upgrades />
      <Payment webApp={mockWebApp} />
    </div>
  );
}
