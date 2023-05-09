import React, { useState, useEffect } from 'react';
import './style.css';

//clima puede ser soleado, congelado, normal

export default function App() {
  const [weather, setWeather] = useState('soleado');
  const [water, setWater] = useState('liquido');

  //Update
  useEffect(() => {
    if (weather === 'soleado') {
      setWater('gaseoso');
    }

    if (weather === 'congelado') {
      setWater('solido');
    }

    if (weather === 'normal') {
      setWater('liquido');
    }
  }, [weather]);

  return (
    <div>
      {water}

      <button
        onClick={() => {
          setWeather('congelado');
        }}
      >
        congelar
      </button>
      <button
        onClick={() => {
          setWeather('normal');
        }}
      >
        normal
      </button>
      <button
        onClick={() => {
          setWeather('soleado');
        }}
      >
        soleado
      </button>
    </div>
  );
}
