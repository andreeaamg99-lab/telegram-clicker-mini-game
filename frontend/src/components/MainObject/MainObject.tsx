import React from 'react';

export const MainObject = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <img 
        src="https://cryptorank.io" 
        alt="Hamster" 
        style={{ 
          width: '210px', 
          height: '210px', 
          borderRadius: '50%', 
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          objectFit: 'cover',
          transition: 'transform 0.1s ease'
        }} 
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
    </div>
  );
};
