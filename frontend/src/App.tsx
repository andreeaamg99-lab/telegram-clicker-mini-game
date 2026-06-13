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
};
