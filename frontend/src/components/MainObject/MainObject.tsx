import React from 'react';
import myHamster from '../../TUNEL 2.jpg'; 

export const MainObject = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <img 
        src={myHamster} 
        alt="" 
        style={{ 
          width: '200px', 
          height: '200px', 
          borderRadius: '50%', 
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
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
