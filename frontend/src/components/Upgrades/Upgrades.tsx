import React from 'react';
import styles from './Upgrades.module.scss';

type Props = {
  coins: number;
  onBuyAutoClicker: () => void;
  onBuyDoubleCoins: () => void;
};

export const Upgrades = ({ coins, onBuyAutoClicker, onBuyDoubleCoins }: Props) => {
  return (
    <div className={styles.upgrades}>
      <h3>Upgrades</h3>
      <div className={styles.upgradeItem}>
        <span>Auto Clicker</span>
        <button 
          className={styles.buyButton} 
          onClick={onBuyAutoClicker}
          disabled={coins < 100}
        >
          Buy for 100 coins
        </button>
      </div>
      <div className={styles.upgradeItem}>
        <span>Double Coins</span>
        <button 
          className={styles.buyButton} 
          onClick={onBuyDoubleCoins}
          disabled={coins < 200}
        >
          Buy for 200 coins
        </button>
      </div>
    </div>
  );
};
