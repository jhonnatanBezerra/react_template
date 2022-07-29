import React from 'react';
import './styles.css';

export const AnimatedDots = () => {
  return (

    <svg style={{ width: '100%', height: '100%' }} className="loader">
      <circle className="dot" cx="43%" cy="50%" r="6" style={{ fill: "#fff" }} />
      <circle className="dot" cx="50%" cy="50%" r="6" style={{ fill: "#fff" }} />
      <circle className="dot" cx="57%" cy="50%" r="6" style={{ fill: "#fff" }} />
    </svg>


  );
}