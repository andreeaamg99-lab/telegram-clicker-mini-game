import React, { useState } from 'react';
import styles from './App.module.css'; // Sau calea corectă către stilurile tale
import ResourceCounter from './components/ResourceCounter';
import ProgressBar from './components/ProgressBar';
import MainObject from './components/MainObject';
import Clicker from './components/Clicker';
import Upgrades from './components/Upgrades';
import Payment from './components/Payment';

export default function App() {
  // Aici trebuie să ai stările (state-urile) pentru coins, crystals și progress
  const [coins, setCoins] = useState(0);
  const [crystals, setCrystals] = useState(0);
  const [progress, setProgress] = useState(0);

  return (
    <div className={styles.container}>
      <ResourceCounter coins={coins} crystals={crystals} />
      <ProgressBar progress={progress} />
      <MainObject />
      <Clicker setCoins={setCoins} setProgress={setProgress} />
      <Upgrades coins={coins} setCoins={setCoins} />
      <Payment />
    </div>
  );
}
