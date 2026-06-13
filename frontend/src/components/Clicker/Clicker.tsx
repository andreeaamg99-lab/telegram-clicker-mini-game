import React, { useState } from "react"
import styles from "./Clicker.module.scss"

type Props = {
  onClick: () => void;
  globalCoins: number;
}

export const Clicker = ({ onClick, globalCoins }: Props) => {
  const [localClicks, setLocalClicks] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    onClick();
    setLocalClicks((prev) => prev + 1)

    if (localClicks + 1 >= 20) {
      try {
        setIsLoading(true)
        const response = await fetch("/api/click", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ coins: globalCoins + 1 }), 
        })
        if (!response.ok) throw new Error("Failed to update coins")
        setLocalClicks(0)
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className={styles.clicker}>
      <button 
        className={styles.clickButton} 
        onClick={handleClick}
        disabled={isLoading}
      >
        Click Me!
      </button>
      <p className={styles.coins}>Coins: {globalCoins}</p>
    </div>
  )
}
